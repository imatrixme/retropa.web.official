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
}

export type RomGroupItem = LogoWallItem & {
  extensions: string[]
}

export const emulatorCores: EmulatorCoreItem[] = [
  {
    id: "mgba",
    label: "mGBA",
    logoPath: "/logo-wall/cores/mgba.png",
    alt: "mGBA project logo",
    summary:
      "Primary handheld core for Game Boy, Game Boy Color, and Game Boy Advance with mature save-state and compatibility behavior.",
    githubUrl: "https://github.com/mgba-emu/mgba",
    supportedSystems: ["Game Boy", "Game Boy Color", "Game Boy Advance"],
    romExtensions: [".gb", ".gbc", ".gba"],
  },
  {
    id: "skyemu",
    label: "SkyEmu",
    logoPath: "/logo-wall/cores/skyemu.png",
    alt: "SkyEmu project logo",
    summary:
      "Cross-system high-performance core currently used for Nintendo handheld coverage, including Nintendo DS beta path.",
    githubUrl: "https://github.com/skylersaleh/SkyEmu",
    supportedSystems: ["Game Boy", "Game Boy Color", "Game Boy Advance", "Nintendo DS"],
    romExtensions: [".gb", ".gbc", ".gba", ".nds"],
  },
  {
    id: "sameboy",
    label: "SameBoy",
    logoPath: "/logo-wall/cores/sameboy.png",
    alt: "SameBoy project logo",
    summary:
      "Cycle-accurate Game Boy / Game Boy Color focused core with strong hardware-level behavior fidelity.",
    githubUrl: "https://github.com/LIJI32/SameBoy",
    supportedSystems: ["Game Boy", "Game Boy Color"],
    romExtensions: [".gb", ".gbc"],
  },
  {
    id: "rusticones",
    label: "RusticoNES",
    logoPath: "/logo-wall/cores/rusticones.png",
    alt: "RusticoNES project logo",
    summary:
      "Default NES runtime core path in Retropa with lightweight integration and stable gameplay behavior.",
    githubUrl: "https://github.com/zeta0134/rustico",
    supportedSystems: ["NES"],
    romExtensions: [".nes", ".fds", ".unf", ".unif"],
  },
  {
    id: "tetanes",
    label: "TetaNES",
    logoPath: "/logo-wall/cores/tetanes.png",
    alt: "TetaNES project logo",
    summary:
      "Alternative NES core option with configurable runtime profile for users who prefer a different emulation stack.",
    githubUrl: "https://github.com/lukexor/tetanes",
    supportedSystems: ["NES"],
    romExtensions: [".nes", ".fds", ".nsf", ".nsfe"],
  },
  {
    id: "lakesnes",
    label: "LakeSnes",
    logoPath: "/logo-wall/cores/lakesnes.png",
    alt: "LakeSnes project logo",
    summary:
      "SNES-focused core used in Retropa for streamlined Super Nintendo runtime support and save-state workflows.",
    githubUrl: "https://github.com/dinkc64/LakeSnes",
    supportedSystems: ["SNES"],
    romExtensions: [".sfc", ".smc", ".fig", ".swc", ".bs", ".st"],
  },
  {
    id: "jgenesis",
    label: "JGenesis",
    logoPath: "/logo-wall/cores/jgenesis.png",
    alt: "JGenesis project logo",
    summary:
      "Multi-system Rust core covering NES, SNES, Sega family systems, and selected handheld targets through one runtime family.",
    githubUrl: "https://github.com/jsgroth/jgenesis",
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
    label: "Ares",
    logoPath: "/logo-wall/cores/ares.png",
    alt: "Ares project logo",
    summary:
      "High-fidelity multi-system core used for GBA and selected handheld families such as WonderSwan and Neo Geo Pocket.",
    githubUrl: "https://github.com/ares-emulator/ares",
    supportedSystems: [
      "Game Boy Advance",
      "WonderSwan",
      "WonderSwan Color",
      "Neo Geo Pocket",
      "Neo Geo Pocket Color",
    ],
    romExtensions: [".gba", ".ws", ".wsc", ".ngp", ".ngpc", ".ngc"],
  },
]

export const systemSupportMatrix: SystemSupportItem[] = [
  {
    id: "game-boy",
    label: "Game Boy",
    logoPath: "/logo-wall/systems/game-boy.png",
    alt: "Game Boy system logo",
    coreIds: ["mgba", "skyemu", "sameboy", "jgenesis"],
    romExtensions: [".gb"],
  },
  {
    id: "game-boy-color",
    label: "Game Boy Color",
    logoPath: "/logo-wall/systems/game-boy-color.png",
    alt: "Game Boy Color system logo",
    coreIds: ["mgba", "skyemu", "sameboy", "jgenesis"],
    romExtensions: [".gbc"],
  },
  {
    id: "game-boy-advance",
    label: "Game Boy Advance",
    logoPath: "/logo-wall/systems/game-boy-advance.png",
    alt: "Game Boy Advance system logo",
    coreIds: ["mgba", "skyemu", "jgenesis", "ares"],
    romExtensions: [".gba"],
  },
  {
    id: "nintendo-ds",
    label: "Nintendo DS",
    logoPath: "/logo-wall/systems/nintendo-ds.png",
    alt: "Nintendo DS system logo",
    coreIds: ["skyemu"],
    romExtensions: [".nds"],
  },
  {
    id: "nes",
    label: "NES",
    logoPath: "/logo-wall/systems/nes.png",
    alt: "NES system logo",
    coreIds: ["rusticones", "tetanes", "jgenesis"],
    romExtensions: [".nes", ".fds", ".nsf", ".nsfe", ".unf", ".unif"],
  },
  {
    id: "snes",
    label: "SNES",
    logoPath: "/logo-wall/systems/snes.png",
    alt: "SNES system logo",
    coreIds: ["lakesnes", "jgenesis"],
    romExtensions: [".sfc", ".smc", ".fig", ".swc", ".bs", ".st"],
  },
  {
    id: "sega-master-system",
    label: "Sega Master System",
    logoPath: "/logo-wall/systems/sega-master-system.png",
    alt: "Sega Master System logo",
    coreIds: ["jgenesis"],
    romExtensions: [".sms"],
  },
  {
    id: "game-gear",
    label: "Game Gear",
    logoPath: "/logo-wall/systems/game-gear.png",
    alt: "Game Gear logo",
    coreIds: ["jgenesis"],
    romExtensions: [".gg"],
  },
  {
    id: "mega-drive",
    label: "Mega Drive",
    logoPath: "/logo-wall/systems/mega-drive.png",
    alt: "Mega Drive logo",
    coreIds: ["jgenesis"],
    romExtensions: [".md", ".smd"],
  },
  {
    id: "genesis",
    label: "Genesis",
    logoPath: "/logo-wall/systems/genesis.png",
    alt: "Genesis logo",
    coreIds: ["jgenesis"],
    romExtensions: [".gen"],
  },
  {
    id: "wonderswan",
    label: "WonderSwan",
    logoPath: "/logo-wall/systems/wonderswan.png",
    alt: "WonderSwan logo",
    coreIds: ["ares"],
    romExtensions: [".ws"],
  },
  {
    id: "wonderswan-color",
    label: "WonderSwan Color",
    logoPath: "/logo-wall/systems/wonderswan-color.png",
    alt: "WonderSwan Color logo",
    coreIds: ["ares"],
    romExtensions: [".wsc"],
  },
  {
    id: "neo-geo-pocket",
    label: "Neo Geo Pocket",
    logoPath: "/logo-wall/systems/neo-geo-pocket.png",
    alt: "Neo Geo Pocket logo",
    coreIds: ["ares"],
    romExtensions: [".ngp"],
  },
  {
    id: "neo-geo-pocket-color",
    label: "Neo Geo Pocket Color",
    logoPath: "/logo-wall/systems/neo-geo-pocket-color.png",
    alt: "Neo Geo Pocket Color logo",
    coreIds: ["ares"],
    romExtensions: [".ngpc", ".ngc"],
  },
  {
    id: "containers",
    label: "Containers",
    logoPath: "/logo-wall/systems/containers.png",
    alt: "Container format logo",
    coreIds: ["mgba", "skyemu", "sameboy", "rusticones", "tetanes", "lakesnes", "jgenesis", "ares"],
    romExtensions: [".zip", ".retropack"],
  },
]

export const romSupportGroups: RomGroupItem[] = systemSupportMatrix.map((system) => ({
  id: system.id,
  label: system.label,
  logoPath: system.logoPath,
  alt: system.alt,
  extensions: system.romExtensions,
}))

const coreLabelById = new Map(emulatorCores.map((core) => [core.id, core.label]))

export const coreMatrixRows = systemSupportMatrix.map((item) => ({
  label: item.label,
  cores: item.coreIds.map((coreId) => coreLabelById.get(coreId) ?? coreId).join(" · "),
}))

export const homepageCoreLogoWall: LogoWallItem[] = emulatorCores.map((core) => ({
  id: core.id,
  label: core.label,
  logoPath: core.logoPath,
  alt: core.alt,
}))

export const homepageSystemLogoWall: LogoWallItem[] = systemSupportMatrix
  .filter((system) => system.id !== "containers")
  .map((system) => ({
    id: system.id,
    label: system.label,
    logoPath: system.logoPath,
    alt: system.alt,
  }))
