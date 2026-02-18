import type { LegalSection } from "@/lib/site-config"

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By downloading, installing, or using Retropa, you agree to these Terms of Service. If you do not agree, do not use the app or related services.",
      "You must be legally capable of entering into this agreement in your jurisdiction. If you use Retropa on behalf of an organization, you represent that you have authority to bind that organization.",
    ],
  },
  {
    id: "license",
    title: "2. App License",
    paragraphs: [
      "Retropa grants you a limited, non-exclusive, non-transferable, revocable license to use the app for personal, non-commercial purposes in accordance with applicable laws and these Terms.",
      "You may not reverse engineer, redistribute, or exploit Retropa in ways not expressly permitted by law or written permission.",
    ],
  },
  {
    id: "user-content",
    title: "3. User Content and Imported Files",
    paragraphs: [
      "You are solely responsible for ROMs, BIOS files, saves, and any other content imported into Retropa. You must ensure you hold all required rights to use that content.",
      "Retropa does not claim ownership of your imported content and does not guarantee compatibility with all file formats.",
    ],
  },
  {
    id: "subscriptions",
    title: "4. Purchases and Subscriptions",
    paragraphs: [
      "Paid plans and in-app purchases are processed through Apple's billing platform, and your use of those features is also subject to Apple's terms.",
      "Subscription renewals, cancellations, and refunds are managed by Apple unless otherwise stated by mandatory local law.",
    ],
  },
  {
    id: "availability",
    title: "5. Availability and Changes",
    paragraphs: [
      "We may update, suspend, or discontinue parts of Retropa at any time, including premium features, to improve quality, security, or compliance.",
      "We are not liable for losses caused by interruptions beyond our reasonable control, including network outages or platform restrictions.",
    ],
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, Retropa is provided on an 'as is' and 'as available' basis without warranties of uninterrupted operation.",
      "Our total liability for claims arising from your use of Retropa is limited to the amount you paid for the app or subscription in the twelve months before the claim.",
    ],
  },
  {
    id: "contact",
    title: "7. Contact",
    paragraphs: [
      "Questions regarding these Terms can be sent to support@retropa.com. We may update these Terms from time to time and will publish the latest version on this page.",
    ],
  },
]

export const privacySections: LegalSection[] = [
  {
    id: "scope",
    title: "1. Scope",
    paragraphs: [
      "This Privacy Policy describes how Retropa handles information when you use our app and official website.",
      "The policy applies to data processed directly by us and does not override third-party platform policies such as Apple's App Store terms.",
    ],
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    paragraphs: [
      "Retropa is designed to minimize data collection. Most gameplay artifacts, such as save states and imported files, remain on your device unless you explicitly share them.",
      "We may collect limited technical diagnostics, crash metadata, and anonymous usage metrics to improve stability and feature quality.",
    ],
  },
  {
    id: "usage",
    title: "3. How We Use Information",
    paragraphs: [
      "We use collected data to maintain app reliability, detect abuse, understand product quality trends, and deliver support responses.",
      "We do not sell personal data. We do not use your imported game files for advertising profiling.",
    ],
  },
  {
    id: "storage",
    title: "4. Storage and Security",
    paragraphs: [
      "User-generated emulator data is primarily stored on-device. Where cloud or backend processing is involved, we apply reasonable technical and organizational safeguards.",
      "No method of transmission or storage is perfectly secure, but we continuously review protections and incident response controls.",
    ],
  },
  {
    id: "sharing",
    title: "5. Data Sharing",
    paragraphs: [
      "We only share data with service providers when necessary for app delivery, analytics, fraud prevention, legal compliance, or support operations.",
      "Service providers are required to process data under contractual confidentiality and security obligations.",
    ],
  },
  {
    id: "rights",
    title: "6. Your Rights",
    paragraphs: [
      "Depending on your region, you may have rights to access, delete, correct, or restrict processing of personal data. You may also object to certain processing activities.",
      "To exercise your rights, contact support@retropa.com with your request details.",
    ],
  },
  {
    id: "updates",
    title: "7. Policy Updates",
    paragraphs: [
      "We may update this Privacy Policy to reflect product or legal changes. The latest effective date appears at the top of this page.",
    ],
  },
]
