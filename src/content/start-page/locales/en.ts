import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  metaTitle: "How to Import ROMs in Retropa | iPhone & iPad Guide",
  description: "Import GBA, DS and arcade games on iPhone and iPad. Answers about ROMs, BIOS, Delta skins, controllers, saves, Plus and advanced filters without integer scaling.",
  "title": "Your first game in Retropa.",
  "intro": "You bring the game file; Retropa brings the handheld. Three steps from a file sitting in your Downloads folder to something you can actually play, then as much tweaking as you feel like.",
  "steps": [
    [
      "Get Retropa",
      "Install Retropa from the App Store on an iPhone or iPad running iOS 18 or later. Downloading the app is free; Plus covers the extras like core switching, arcade and advanced filters."
    ],
    [
      "Import your game",
      "Open the import entry in your library and pick a supported ROM from Files. GBA takes .gba, DS takes .nds. Keep your original somewhere safe, because Retropa ships no games and no BIOS files."
    ],
    [
      "Open it from your library",
      "Tap the imported game and play. Leave the default controls and picture alone until you have seen the game run once — that baseline is what you compare against when something later looks off. A game that will not start usually has a system, format or BIOS mismatch."
    ]
  ],
  "faqTitle": "Before you start",
  "systems": "Check supported systems",
  "support": "Need help?",
  "faqs": [
    {
      "id": "devices",
      "question": "Which iPhones and iPads can run Retropa?",
      "answer": "Retropa is available through the App Store for iPhone and iPad running iOS 18 or later. Check the App Store compatibility section for your device. More demanding arcade cores and multi-pass display filters can require more performance than a simple handheld game."
    },
    {
      "id": "systems",
      "question": "Can Retropa play GBA, Nintendo DS and arcade games?",
      "answer": "Retropa supports GBA, DS and other listed handheld and console systems, alongside supported arcade families such as CPS, PGM and M92. Compatibility depends on the installed app, core and game format; it does not mean every game or arcade archive is supported.",
      "link": "cores",
      "linkLabel": "See supported systems and file formats"
    },
    {
      "id": "games",
      "question": "Does Retropa include games or downloadable ROMs?",
      "answer": "No. Retropa is an emulator, not a commercial game subscription or ROM store. Bring content you have the right to use, such as your own projects or homebrew distributed with permission. Commercial ROMs and BIOS files are not supplied."
    },
    {
      "id": "import",
      "question": "How do I import a GBA or DS ROM on iPhone?",
      "answer": "Keep the game file in a location accessible through the iOS Files app. Open the import entry in Retropa's library, select the supported file and open the imported game from the library. GBA uses .gba and DS uses .nds. Renaming a different file extension does not convert a game to the correct format."
    },
    {
      "id": "bios",
      "question": "Do I need a BIOS file for Retropa?",
      "answer": "BIOS requirements vary by system and core. If Retropa reports a missing BIOS, check the requirement for that system and provide the correct file through the app's supported workflow. A BIOS for a different system is not a substitute. Retropa does not provide BIOS downloads.",
      "link": "cores",
      "linkLabel": "Check system requirements"
    },
    {
      "id": "arcade-zip",
      "question": "Why will my arcade ZIP or ROM set not start?",
      "answer": "An arcade archive must match the board and ROM set expected by its core. Some sets also depend on a parent set or BIOS, so a clone ZIP alone can be incomplete. Keep the archive intact unless the app requests extraction. Arcade execution also requires Plus; a subscription cannot repair missing or incompatible ROM data."
    },
    {
      "id": "missing-file",
      "question": "Why can I see a game in Files but not import it?",
      "answer": "Check that the actual file is available locally, rather than only a cloud placeholder, and that its format matches a supported system. Check any error shown by Retropa. Keep a backup of the original while diagnosing the import, and do not assume a renamed ZIP or an incomplete download is a valid ROM."
    },
    {
      "id": "offline",
      "question": "Can I play locally stored games without streaming them?",
      "answer": "Retropa runs supported game files on your device rather than streaming gameplay from a cloud emulator. Import the required game and BIOS files first. Downloading packages, fetching online information and using cloud features still need their own network access."
    },
    {
      "id": "delta-skins",
      "question": "Can I use Delta skins in Retropa?",
      "answer": "Retropa supports importing .deltaskin packages. Use the complete package, choose a layout for the matching system and check its portrait or landscape support. Format support does not guarantee every third-party skin fits every iPhone. Delta compatibility describes a file format, not an affiliation.",
      "link": "delta-skins",
      "linkLabel": "Read the Delta skin import guide"
    },
    {
      "id": "controllers",
      "question": "Does Retropa support Bluetooth or external game controllers?",
      "answer": "Retropa supports compatible external controllers and configurable button mapping. Connect the controller through iOS first, then check its mapping in Retropa. For arcade games, verify coin and start assignments as well as action buttons. Compatibility depends on the controller and iOS support."
    },
    {
      "id": "saves",
      "question": "Are in-game saves and emulator save states the same thing?",
      "answer": "No. An in-game save is created by the game; a save state captures emulator execution. Save states can depend on the exact core and version, so do not assume they are portable between apps or cores. Preserve your original files and backups before moving or replacing saves."
    },
    {
      "id": "plus",
      "question": "Is Retropa free, and what does Plus unlock?",
      "answer": "Retropa is free to download. Arcade cores, premium skins and advanced filters require Retropa Plus. Current plans, regional prices and purchase terms are displayed inside the app before purchase. A free download does not mean every core or resource is included."
    },
    {
      "id": "restore",
      "question": "How do I restore a previous Retropa Plus purchase?",
      "answer": "Use the app's restore-purchases action with the Apple Account used for the original purchase. Check that the purchase or subscription is still valid. Restoring an entitlement does not restore missing ROM files or game saves. Contact support with the app version and purchase issue, not account passwords."
    },
    {
      "id": "advanced-filters",
      "question": "How are Retropa advanced filters different from ordinary CRT filters?",
      "answer": "Simple display filters often overlay sampled scanlines or pixel grids. Retropa advanced presets such as CRT V4 and Trinitron model how a beam spreads and how phosphor or an RGB grille appears across the real output area. DMG includes integrated liquid-crystal cells and a reflective substrate. These are display models, not just a color tint.",
      "link": "crt-filters",
      "linkLabel": "Compare the advanced display filters"
    },
    {
      "id": "integer-scaling",
      "question": "Do Retropa advanced filters require integer scaling?",
      "answer": "No. Retropa advanced filters account for the actual output size instead of requiring a 2x, 3x or other whole-number scale. That gives you more freedom to fit a game into the display area of your phone, orientation or chosen skin. The original aspect ratio can remain intact. Results still depend on the preset and device; filters do not create extra source resolution.",
      "link": "crt-filters",
      "linkLabel": "Learn about fractional-scale rendering"
    },
    {
      "id": "shader-import",
      "question": "Can Retropa import RetroArch .slang and .slangp shaders?",
      "answer": "Retropa supports .slang and .slangp shader workflows. A preset may reference several passes or textures; keep those dependencies together when importing. Not every third-party preset is guaranteed to work. If one fails, check its files and compatibility rather than renaming it or changing the game.",
      "link": "crt-filters",
      "linkLabel": "Read about shader compatibility"
    },
    {
      "id": "performance",
      "question": "Do advanced filters affect frame rate or battery life?",
      "answer": "They can. Multi-pass rendering needs more GPU work than an unfiltered picture, and cost varies with the preset, output size, device and emulator core. Compare against the original picture if you notice slowdowns, then try a lighter filter. Integer-free scaling is a display-quality feature, not a promise of unlimited GPU performance."
    },
    {
      "id": "packages",
      "question": "Where do I get Retropa skins and filter packages?",
      "answer": "Browse PackHub for skin and shader packages. Review the package's system, format and Plus requirements in the app. Imported resources do not bypass entitlement checks. If you need help, include the app version, package name and error message, but do not send commercial ROMs or BIOS files."
    }
  ]
}
