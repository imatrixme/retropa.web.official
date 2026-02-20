export type LogoWallItem = {
  id: string
  label: string
  logoPath: string
  alt: string
}

export type EmulatorCoreItem = LogoWallItem & {
  summary: string
  githubUrl: string
  supportedSystems: string[]
  romExtensions: string[]
}

export type SystemSupportItem = LogoWallItem & {
  coreIds: Array<EmulatorCoreItem["id"]>
  romExtensions: string[]
  hardwarePhotoPath?: string
}

export type RomGroupItem = LogoWallItem & {
  extensions: string[]
}

type CoreID =
  | "mgba"
  | "skyemu"
  | "sameboy"
  | "rusticones"
  | "tetanes"
  | "lakesnes"
  | "jgenesis"
  | "ares"

type SystemID =
  | "game-boy"
  | "game-boy-color"
  | "game-boy-advance"
  | "nintendo-ds"
  | "nes"
  | "snes"
  | "sega-master-system"
  | "game-gear"
  | "mega-drive"
  | "genesis"
  | "wonderswan"
  | "wonderswan-color"
  | "neo-geo-pocket"
  | "neo-geo-pocket-color"
  | "containers"

type CoreDefinition = {
  id: CoreID
  logoPath: string
  githubUrl: string
  romExtensions: string[]
}

type SystemDefinition = {
  id: SystemID
  logoPath: string
  coreIds: CoreID[]
  romExtensions: string[]
  hardwarePhotoPath?: string
}

type CoreText = Pick<EmulatorCoreItem, "label" | "alt" | "summary" | "supportedSystems">
type SystemText = Pick<SystemSupportItem, "label" | "alt">

export type CatalogTranslations = {
  coreById?: Partial<Record<CoreID, Partial<CoreText>>>
  systemById?: Partial<Record<SystemID, Partial<SystemText>>>
}

export type CatalogData = {
  emulatorCores: EmulatorCoreItem[]
  systemSupportMatrix: SystemSupportItem[]
  romSupportGroups: RomGroupItem[]
  coreMatrixRows: Array<{ label: string; cores: string }>
  homepageCoreLogoWall: LogoWallItem[]
  homepageSystemLogoWall: LogoWallItem[]
}

const coreDefinitions: CoreDefinition[] = [
  {
    id: "mgba",
    logoPath: "/logo-wall/cores/mgba.png",
    githubUrl: "https://github.com/mgba-emu/mgba",
    romExtensions: [".gb", ".gbc", ".gba"],
  },
  {
    id: "skyemu",
    logoPath: "/logo-wall/cores/skyemu.png",
    githubUrl: "https://github.com/skylersaleh/SkyEmu",
    romExtensions: [".gb", ".gbc", ".gba", ".nds"],
  },
  {
    id: "sameboy",
    logoPath: "/logo-wall/cores/sameboy.png",
    githubUrl: "https://github.com/LIJI32/SameBoy",
    romExtensions: [".gb", ".gbc"],
  },
  {
    id: "rusticones",
    logoPath: "/logo-wall/cores/rusticones.png",
    githubUrl: "https://github.com/zeta0134/rustico",
    romExtensions: [".nes", ".fds", ".unf", ".unif"],
  },
  {
    id: "tetanes",
    logoPath: "/logo-wall/cores/tetanes.png",
    githubUrl: "https://github.com/lukexor/tetanes",
    romExtensions: [".nes", ".fds", ".nsf", ".nsfe"],
  },
  {
    id: "lakesnes",
    logoPath: "/logo-wall/cores/lakesnes.png",
    githubUrl: "https://github.com/dinkc64/LakeSnes",
    romExtensions: [".sfc", ".smc", ".fig", ".swc", ".bs", ".st"],
  },
  {
    id: "jgenesis",
    logoPath: "/logo-wall/cores/jgenesis.png",
    githubUrl: "https://github.com/jsgroth/jgenesis",
    romExtensions: [
      ".gb",
      ".gbc",
      ".gba",
      ".nes",
      ".sfc",
      ".smc",
      ".sms",
      ".gg",
      ".md",
      ".smd",
      ".gen",
    ],
  },
  {
    id: "ares",
    logoPath: "/logo-wall/cores/ares.png",
    githubUrl: "https://github.com/ares-emulator/ares",
    romExtensions: [".gba", ".ws", ".wsc", ".ngp", ".ngpc", ".ngc"],
  },
]

const systemDefinitions: SystemDefinition[] = [
  {
    id: "game-boy",
    logoPath: "/logo-wall/systems/game-boy.png",
    coreIds: ["mgba", "skyemu", "sameboy", "jgenesis"],
    romExtensions: [".gb"],
    hardwarePhotoPath: "/logo-wall/system-photos/game-boy.png",
  },
  {
    id: "game-boy-color",
    logoPath: "/logo-wall/systems/game-boy-color.png",
    coreIds: ["mgba", "skyemu", "sameboy", "jgenesis"],
    romExtensions: [".gbc"],
    hardwarePhotoPath: "/logo-wall/system-photos/game-boy-color.png",
  },
  {
    id: "game-boy-advance",
    logoPath: "/logo-wall/systems/game-boy-advance.png",
    coreIds: ["mgba", "skyemu", "jgenesis", "ares"],
    romExtensions: [".gba"],
    hardwarePhotoPath: "/logo-wall/system-photos/game-boy-advance.png",
  },
  {
    id: "nintendo-ds",
    logoPath: "/logo-wall/systems/nintendo-ds.png",
    coreIds: ["skyemu"],
    romExtensions: [".nds"],
    hardwarePhotoPath: "/logo-wall/system-photos/nintendo-ds.png",
  },
  {
    id: "nes",
    logoPath: "/logo-wall/systems/nes.png",
    coreIds: ["rusticones", "tetanes", "jgenesis"],
    romExtensions: [".nes", ".fds", ".nsf", ".nsfe", ".unf", ".unif"],
    hardwarePhotoPath: "/logo-wall/system-photos/nes.png",
  },
  {
    id: "snes",
    logoPath: "/logo-wall/systems/snes.png",
    coreIds: ["lakesnes", "jgenesis"],
    romExtensions: [".sfc", ".smc", ".fig", ".swc", ".bs", ".st"],
    hardwarePhotoPath: "/logo-wall/system-photos/snes.png",
  },
  {
    id: "sega-master-system",
    logoPath: "/logo-wall/systems/sega-master-system.png",
    coreIds: ["jgenesis"],
    romExtensions: [".sms"],
    hardwarePhotoPath: "/logo-wall/system-photos/sega-master-system.png",
  },
  {
    id: "game-gear",
    logoPath: "/logo-wall/systems/game-gear.png",
    coreIds: ["jgenesis"],
    romExtensions: [".gg"],
    hardwarePhotoPath: "/logo-wall/system-photos/game-gear.png",
  },
  {
    id: "mega-drive",
    logoPath: "/logo-wall/systems/mega-drive.png",
    coreIds: ["jgenesis"],
    romExtensions: [".md", ".smd"],
    hardwarePhotoPath: "/logo-wall/system-photos/mega-drive.png",
  },
  {
    id: "genesis",
    logoPath: "/logo-wall/systems/genesis.png",
    coreIds: ["jgenesis"],
    romExtensions: [".gen"],
    hardwarePhotoPath: "/logo-wall/system-photos/genesis.png",
  },
  {
    id: "wonderswan",
    logoPath: "/logo-wall/systems/wonderswan.png",
    coreIds: ["ares"],
    romExtensions: [".ws"],
    hardwarePhotoPath: "/logo-wall/system-photos/wonderswan.png",
  },
  {
    id: "wonderswan-color",
    logoPath: "/logo-wall/systems/wonderswan-color.png",
    coreIds: ["ares"],
    romExtensions: [".wsc"],
    hardwarePhotoPath: "/logo-wall/system-photos/wonderswan-color.png",
  },
  {
    id: "neo-geo-pocket",
    logoPath: "/logo-wall/systems/neo-geo-pocket.png",
    coreIds: ["ares"],
    romExtensions: [".ngp"],
    hardwarePhotoPath: "/logo-wall/system-photos/neo-geo-pocket.png",
  },
  {
    id: "neo-geo-pocket-color",
    logoPath: "/logo-wall/systems/neo-geo-pocket-color.png",
    coreIds: ["ares"],
    romExtensions: [".ngpc", ".ngc"],
    hardwarePhotoPath: "/logo-wall/system-photos/neo-geo-pocket-color.png",
  },
  {
    id: "containers",
    logoPath: "/logo-wall/systems/containers.png",
    coreIds: ["mgba", "skyemu", "sameboy", "rusticones", "tetanes", "lakesnes", "jgenesis", "ares"],
    romExtensions: [".zip", ".retropack"],
  },
]

const defaultCoreTextById: Record<CoreID, CoreText> = {
  mgba: {
    label: "mGBA",
    alt: "mGBA project logo",
    summary:
      "Primary handheld core for Game Boy, Game Boy Color, and Game Boy Advance with mature save-state and compatibility behavior.",
    supportedSystems: ["Game Boy", "Game Boy Color", "Game Boy Advance"],
  },
  skyemu: {
    label: "SkyEmu",
    alt: "SkyEmu project logo",
    summary:
      "Cross-system high-performance core currently used for Nintendo handheld coverage, including Nintendo DS beta path.",
    supportedSystems: ["Game Boy", "Game Boy Color", "Game Boy Advance", "Nintendo DS"],
  },
  sameboy: {
    label: "SameBoy",
    alt: "SameBoy project logo",
    summary:
      "Cycle-accurate Game Boy / Game Boy Color focused core with strong hardware-level behavior fidelity.",
    supportedSystems: ["Game Boy", "Game Boy Color"],
  },
  rusticones: {
    label: "RusticoNES",
    alt: "RusticoNES project logo",
    summary:
      "Default NES runtime core path in Retropa with lightweight integration and stable gameplay behavior.",
    supportedSystems: ["NES"],
  },
  tetanes: {
    label: "TetaNES",
    alt: "TetaNES project logo",
    summary:
      "Alternative NES core option with configurable runtime profile for users who prefer a different emulation stack.",
    supportedSystems: ["NES"],
  },
  lakesnes: {
    label: "LakeSnes",
    alt: "LakeSnes project logo",
    summary:
      "SNES-focused core used in Retropa for streamlined Super Nintendo runtime support and save-state workflows.",
    supportedSystems: ["SNES"],
  },
  jgenesis: {
    label: "JGenesis",
    alt: "JGenesis project logo",
    summary:
      "Multi-system Rust core covering NES, SNES, Sega family systems, and selected handheld targets through one runtime family.",
    supportedSystems: [
      "Game Boy",
      "Game Boy Color",
      "Game Boy Advance",
      "NES",
      "SNES",
      "Sega Master System",
      "Game Gear",
      "Mega Drive",
      "Genesis",
    ],
  },
  ares: {
    label: "Ares",
    alt: "Ares project logo",
    summary:
      "High-fidelity multi-system core used for GBA and selected handheld families such as WonderSwan and Neo Geo Pocket.",
    supportedSystems: [
      "Game Boy Advance",
      "WonderSwan",
      "WonderSwan Color",
      "Neo Geo Pocket",
      "Neo Geo Pocket Color",
    ],
  },
}

const defaultSystemTextById: Record<SystemID, SystemText> = {
  "game-boy": {
    label: "Game Boy",
    alt: "Game Boy system logo",
  },
  "game-boy-color": {
    label: "Game Boy Color",
    alt: "Game Boy Color system logo",
  },
  "game-boy-advance": {
    label: "Game Boy Advance",
    alt: "Game Boy Advance system logo",
  },
  "nintendo-ds": {
    label: "Nintendo DS",
    alt: "Nintendo DS system logo",
  },
  nes: {
    label: "NES",
    alt: "NES system logo",
  },
  snes: {
    label: "SNES",
    alt: "SNES system logo",
  },
  "sega-master-system": {
    label: "Sega Master System",
    alt: "Sega Master System logo",
  },
  "game-gear": {
    label: "Game Gear",
    alt: "Game Gear logo",
  },
  "mega-drive": {
    label: "Mega Drive",
    alt: "Mega Drive logo",
  },
  genesis: {
    label: "Genesis",
    alt: "Genesis logo",
  },
  wonderswan: {
    label: "WonderSwan",
    alt: "WonderSwan logo",
  },
  "wonderswan-color": {
    label: "WonderSwan Color",
    alt: "WonderSwan Color logo",
  },
  "neo-geo-pocket": {
    label: "Neo Geo Pocket",
    alt: "Neo Geo Pocket logo",
  },
  "neo-geo-pocket-color": {
    label: "Neo Geo Pocket Color",
    alt: "Neo Geo Pocket Color logo",
  },
  containers: {
    label: "Containers",
    alt: "Container format logo",
  },
}

function resolveCoreText(id: CoreID, translations: CatalogTranslations | undefined): CoreText {
  const base = defaultCoreTextById[id]
  const override = translations?.coreById?.[id]

  return {
    label: override?.label ?? base.label,
    alt: override?.alt ?? base.alt,
    summary: override?.summary ?? base.summary,
    supportedSystems: override?.supportedSystems ?? base.supportedSystems,
  }
}

function resolveSystemText(id: SystemID, translations: CatalogTranslations | undefined): SystemText {
  const base = defaultSystemTextById[id]
  const override = translations?.systemById?.[id]

  return {
    label: override?.label ?? base.label,
    alt: override?.alt ?? base.alt,
  }
}

export function buildCatalog(translations?: CatalogTranslations): CatalogData {
  const emulatorCores: EmulatorCoreItem[] = coreDefinitions.map((core) => {
    const text = resolveCoreText(core.id, translations)

    return {
      id: core.id,
      label: text.label,
      logoPath: core.logoPath,
      alt: text.alt,
      summary: text.summary,
      githubUrl: core.githubUrl,
      supportedSystems: text.supportedSystems,
      romExtensions: core.romExtensions,
    }
  })

  const systemSupportMatrix: SystemSupportItem[] = systemDefinitions.map((system) => {
    const text = resolveSystemText(system.id, translations)

    return {
      id: system.id,
      label: text.label,
      logoPath: system.logoPath,
      alt: text.alt,
      coreIds: system.coreIds,
      romExtensions: system.romExtensions,
      hardwarePhotoPath: system.hardwarePhotoPath,
    }
  })

  const romSupportGroups: RomGroupItem[] = systemSupportMatrix.map((system) => ({
    id: system.id,
    label: system.label,
    logoPath: system.logoPath,
    alt: system.alt,
    extensions: system.romExtensions,
  }))

  const coreLabelById = new Map(emulatorCores.map((core) => [core.id, core.label]))

  const coreMatrixRows = systemSupportMatrix.map((item) => ({
    label: item.label,
    cores: item.coreIds.map((coreId) => coreLabelById.get(coreId) ?? coreId).join(" · "),
  }))

  const homepageCoreLogoWall: LogoWallItem[] = emulatorCores.map((core) => ({
    id: core.id,
    label: core.label,
    logoPath: core.logoPath,
    alt: core.alt,
  }))

  const homepageSystemLogoWall: LogoWallItem[] = systemSupportMatrix
    .filter((system) => system.id !== "containers")
    .map((system) => ({
      id: system.id,
      label: system.label,
      logoPath: system.logoPath,
      alt: system.alt,
    }))

  return {
    emulatorCores,
    systemSupportMatrix,
    romSupportGroups,
    coreMatrixRows,
    homepageCoreLogoWall,
    homepageSystemLogoWall,
  }
}

const defaultCatalog = buildCatalog()

export const emulatorCores = defaultCatalog.emulatorCores
export const systemSupportMatrix = defaultCatalog.systemSupportMatrix
export const romSupportGroups = defaultCatalog.romSupportGroups
export const coreMatrixRows = defaultCatalog.coreMatrixRows
export const homepageCoreLogoWall = defaultCatalog.homepageCoreLogoWall
export const homepageSystemLogoWall = defaultCatalog.homepageSystemLogoWall
