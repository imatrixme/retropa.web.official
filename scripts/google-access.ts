import { createSign } from "node:crypto"
import { readFile } from "node:fs/promises"
import { homedir } from "node:os"
import { resolve } from "node:path"

export async function googleAccess() {
  const credentialsPath = process.env.GOOGLE_APPLICATION_CREDENTIALS ?? resolve(homedir(), ".retropa/asogeo-dash/secrets/retropa-firebase-adminsdk-fbsvc-e6a26c3b4a.json")
  const credentials = JSON.parse(await readFile(credentialsPath, "utf8"))
  if (credentials.type !== "service_account" || !credentials.client_email || !credentials.private_key) throw new Error("Expected a Google service account JSON outside the repository")
  const encode = (value: unknown) => Buffer.from(JSON.stringify(value)).toString("base64url")
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({ iss: credentials.client_email, scope: "https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly", aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600 })}`
  const signature = createSign("RSA-SHA256").update(unsigned).sign(credentials.private_key).toString("base64url")
  const response = await fetch("https://oauth2.googleapis.com/token", { method: "POST", body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${signature}` }), signal: AbortSignal.timeout(20_000) })
  if (!response.ok) throw new Error(`Google token authorization failed: HTTP ${response.status}`)
  const token = (await response.json()).access_token
  if (!token) throw new Error("Google did not return an access token")
  return async function request(url: string, body?: unknown) {
    const result = await fetch(url, { method: body ? "POST" : "GET", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(30_000) })
    if (!result.ok) {
      const failure = await result.json().catch(() => null)
      return { status: "unavailable", httpStatus: result.status, reason: failure?.error?.message ?? "API request failed; not a zero result." }
    }
    return { status: "observed", response: await result.json() }
  }
}
