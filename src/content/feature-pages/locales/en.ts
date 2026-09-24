import type { FeatureContent, FeaturePage } from "@/content/feature-pages/types"

/** Controls and import reference pages. Facts follow App 2.3.2. */
export const pages: Record<FeaturePage, FeatureContent> = {
  controls: {
    metaTitle: "Retropa Controls: Adaptive Touch, Haptics, Controllers & Turbo",
    description: "How Retropa makes touch controls land: adaptive hot zones, five touch styles, per-game settings, waveform haptics, controller templates, turbo, fast-forward and audio.",
    label: "Controls",
    eyebrow: "Controls",
    title: "Controls that land where your thumbs do.",
    intro: "A touch screen has no edges to feel for, so the hard part of emulation on a phone is not speed — it is presses that land between buttons. This page covers how Retropa resolves each touch, how presses feel, and how controllers, turbo and sound fit in.",
    sections: [
      {
        id: "adaptive-touch", plus: true, lab: true,
        title: "Fixed or adaptive hot zones",
        body: "Every on-screen button has a hot zone: the area that counts as a press. Legacy hot zones are fixed hitboxes — crisp and consistent, but a press in the gap between two buttons does nothing. Adaptive Touch Hotzone plans the zones so they fill those gaps, fuses where you tapped with what you were just pressing, and steadies the result over time. Zones drift toward where your thumbs actually land, within limits, and relax back to the default layout when you stop playing.",
        points: [
          "The skin's artwork never moves; only how touches are resolved changes.",
          "The D-pad resolves diagonals as fan-shaped sectors with extra room for down, and gives way to face buttons where they overlap.",
          "Fixed hot zones stay available for players who want strictly deterministic hitboxes.",
        ],
        shot: { name: "hotzone-adaptive", alt: "Hotzone Profiles with Adaptive Touch Hotzone selected and the Shooter touch style" },
      },
      {
        id: "touch-styles", plus: true,
        title: "Five touch styles, and settings per game",
        body: "A touch style tunes the adaptive engine for how a genre is played. Choose one for every game, or open Control in the in-game menu to give a single game its own hot zone mode and style.",
        table: {
          head: ["Style", "Best for"],
          rows: [
            ["Platformer", "Precise movement and jump timing in platform games"],
            ["Shooter", "Run-and-gun games that need quick direction swaps and reliable hold shots"],
            ["Fighting", "Fighters that benefit from smooth edge forgiveness during chained inputs"],
            ["Action", "High-pressure action where snap-in speed and hold stability both matter"],
            ["Rhythm", "Rhythm-heavy play with frequent repeated taps and a steady tempo"],
          ],
        },
        points: ["Advanced users can mix a feel base and an assist style — for example Cliff Plateau for hard boundaries or Contact Dilation to widen capture as your contact area grows."],
        shot: { name: "hotzone-fighting", alt: "Hotzone Profiles showing the Fighting touch style" },
      },
      {
        id: "haptics", plus: true,
        title: "Haptics you can tune button by button",
        body: "Turn on Waveform Mode and each button plays its own Core Haptics waveform for press and release. Game Boy, Game Boy Color, GBA, NES and Super NES each include four packs — Classic, Best, Soft and Retropa. Curve Studio shapes the intensity and sharpness of a press over time, and per-action overrides let one button feel different from the rest.",
        points: [
          "Without Waveform Mode, Retropa uses simple haptics.",
          "Audio-haptic sync is available on devices that support it.",
          "iPad has no haptic engine, so haptics are an iPhone experience.",
        ],
        shot: { name: "haptics-curve", alt: "Curve Studio editing the intensity curve of a haptic preset" },
      },
      {
        id: "controllers",
        title: "Controllers, mapped before you ask",
        body: "Pair a controller in iOS Settings and Retropa identifies it, shows matching artwork and applies a built-in template for Xbox, DualSense or DualShock, Nintendo or 8BitDo layouts. Every managed controller keeps its own slot and mapping profile, and reconnects without being set up again. The mapping center highlights each physical button as you press it, and any binding can be changed.",
        points: [
          "Rumble plays on controllers that support it; DualSense adaptive triggers are used where available.",
          "Several controllers with their own configurations need Retropa Plus.",
          "In Console Mode the game goes to a TV or display while your iPhone keeps working as the controller.",
        ],
        shot: { name: "gamepads", alt: "Gamepads screen listing a managed controller with its slot" },
      },
      {
        id: "turbo", plus: true,
        title: "Turbo where you want it",
        body: "Turbo Fire has one master switch and a toggle for each button of each system. A game can override its system's choices, so a shooter can have turbo on B while everything else stays single-shot.",
        shot: { name: "turbo", alt: "Turbo Fire Buttons for NES with A and B enabled" },
      },
      {
        id: "buttons",
        title: "D-pad and button behavior",
        body: "Button Settings holds the D-pad direction mode and how buttons behave, and it is remembered between sessions. When a skin has no layout for a system or orientation, Retropa draws fallback controls whose layout and style you can choose.",
      },
      {
        id: "speed-and-sound",
        title: "Fast-forward and sound",
        body: "Hold the fast-forward control for a temporary boost and set its multiplier in Emulation settings. Preserve pitch in fast-forward keeps voices and music at their normal pitch while the tempo rises.",
        points: [
          "Seventeen audio effects need Retropa Plus: Auto Gain, Chorus, Crunch, Frequency Shifter, Headphone Spatializer, Limiter, Slew Rate Limiter, Noise Floor Injector, Channel Crosstalk, DC Offset and Asymmetric Clipping, BitCrusher, Haas Widener, Bass Mono-izer, Tape Saturation, Psychoacoustic Bass, Reverb and GBA SP Speaker Model.",
          "Effects run in the order you configure, before audio reaches the speaker.",
        ],
        shot: { name: "audio", alt: "Audio settings with fast-forward pitch preservation and audio effects" },
      },
    ],
    faqTitle: "Controls questions",
    faqs: [
      { id: "adaptive-moves-buttons", question: "Does adaptive touch move the buttons on screen?", answer: "No. The skin is drawn exactly as designed. Adaptive touch changes which button a touch counts as, filling the gaps between buttons and following where your thumbs tend to land." },
      { id: "per-game", question: "Can one game use different controls from the rest?", answer: "Yes. Open Control in the in-game menu to choose fixed or adaptive hot zones and turbo buttons for that game only. Everything else keeps using your global settings." },
      { id: "which-controllers", question: "Which game controllers work with Retropa?", answer: "Controllers that iOS supports through its game controller framework, including Xbox, DualSense and DualShock, Nintendo and 8BitDo models. Pair the controller in iOS first; Retropa then applies a matching template that you can change in the mapping center." },
      { id: "ipad-haptics", question: "Why don't I feel haptics on iPad?", answer: "iPad has no haptic engine. Waveform haptics, packs and Curve Studio are designed for iPhone." },
      { id: "free-vs-plus", question: "Which control features need Retropa Plus?", answer: "Fixed hot zones, controller support with mapping, button settings and fast-forward are free. Adaptive touch and touch styles, custom haptics, turbo, several controller configurations and audio effects need Retropa Plus. Plans and prices are shown in the app." },
    ],
    related: "Keep reading",
  },
  import: {
    metaTitle: "Bring Games into Retropa: Files, Wi‑Fi Portal, BIOS & Arcade Sets",
    description: "Every way to bring your own games into Retropa: the Files app, AirDrop, the Wi‑Fi Portal, the built-in browser and the Homebrew catalog, plus formats, BIOS files, arcade sets, saves and covers.",
    label: "Import",
    eyebrow: "Import",
    title: "Your games, in four ways.",
    intro: "Retropa ships without games and without BIOS files. This page covers every way to bring your own in, what each system accepts, and what to do when a game asks for something it does not have.",
    sections: [
      {
        id: "files",
        title: "From the Files app, AirDrop or another app",
        body: "Open the Importer from the in-game menu and choose Select Files. You can pick one file or many at once, including ZIP bundles and Retropa packs. Each import produces a result card that says what was added, skipped or rejected, with a next step when something failed.",
        points: [
          "Game Boy, GBA, NES, Super NES, ZIP and 7Z files can also be opened in Retropa directly from AirDrop or the share sheet of another app.",
          "If a file sits in iCloud Drive, let it finish downloading first — a placeholder cannot be imported.",
          "Renaming a file does not change which system it belongs to.",
        ],
        shot: { name: "import-center", alt: "Retropa's Import Center listing supported formats" },
      },
      {
        id: "portal",
        title: "Over Wi‑Fi from a computer",
        body: "Choose Portal in the in-game menu and start it. Retropa shows a local address; open it in any browser on a computer on the same Wi‑Fi network. Drop games, ZIP bundles, 7Z arcade sets, Retropa packs and skins into the Import tab — mixed selections are fine. The Portal also manages your library, BIOS files, storage, skins and settings from the big screen.",
        points: [
          "The Portal only answers devices on your local network. Stop it when you are done.",
          "Keep Retropa open while transferring; iOS may suspend the Portal in the background.",
        ],
        shot: { name: "portal-library", alt: "The Retropa Portal library in a desktop browser" },
      },
      {
        id: "browser",
        title: "With the built-in browser",
        body: "Open Browser from the menu, go to a site that offers files you are allowed to download, and download as usual. Retropa intercepts ROM and ZIP downloads and sends them to import, then removes the temporary copy. Favorite sites stay one tap away, and the Download Center shows progress.",
      },
      {
        id: "homebrew",
        title: "From the Homebrew catalog",
        body: "The catalog lists homebrew, public-domain and redistributable demo games for the systems Retropa supports. Pick one and it downloads and imports on its own — a quick way to try skins, filters and controls before you bring your own library.",
      },
      {
        id: "formats",
        title: "File formats by system",
        body: "Each system accepts its own file types. Handheld and console games can also arrive inside ZIP or 7Z archives; arcade sets stay zipped exactly as they are.",
        table: {
          head: ["System", "Files"],
          rows: [
            ["Game Boy Advance", ".gba"],
            ["Game Boy · Game Boy Color", ".gb .gbc"],
            ["Nintendo DS (beta)", ".nds"],
            ["NES", ".nes .fds .unf .unif .nsf .nsfe"],
            ["Super NES", ".sfc .smc .swc .fig .bs .st"],
            ["Genesis · Mega Drive", ".md .gen .smd"],
            ["Master System · Game Gear", ".sms .gg"],
            ["WonderSwan · Color", ".ws .wsc"],
            ["Neo Geo Pocket · Color", ".ngp .ngpc .ngc"],
            ["Arcade", ".zip .7z (.cps1)"],
            ["Retropa packs and skins", ".retropack .retropaskin"],
          ],
        },
      },
      {
        id: "bios",
        title: "BIOS files",
        body: "The default cores for Game Boy, GBA, NES and Super NES run without a BIOS. Some alternative cores and systems use one. Settings › Emulation › Cores › BIOS Management groups every BIOS by the core that uses it and marks each one present or missing. If a game needs a file you have not added, Retropa stops at launch and takes you straight to the right entry.",
        table: {
          head: ["BIOS", "Used by", "Files"],
          rows: [
            ["GBA BIOS", "JGenesis, ares (alternative GBA cores)", ".bin .rom .bios"],
            ["Neo Geo Pocket · Color BIOS", "ares", ".bin .rom .bios"],
            ["NDS BIOS", "SkyEmu", ".bin .rom"],
            ["GB · GBC boot ROM (optional)", "SameBoy", ".bin .rom"],
            ["Arcade BIOS", "Arcade — for example QSound, Neo Geo or PGM", "archive or ROM files"],
          ],
        },
        points: ["A BIOS for one system never substitutes for another.", "Retropa does not provide BIOS files."],
        shot: { name: "bios", alt: "BIOS Management grouped by core with each entry marked Missing" },
      },
      {
        id: "arcade",
        title: "Arcade sets",
        body: "Arcade games arrive as ZIP or 7Z archives named after the game's set. A clone set may also need its parent set, and some boards need a shared BIOS archive. Keep archives intact rather than extracting them.",
        points: [
          "When a set is incomplete, Retropa lists the exact missing file names and tells you to add them to the right archive and import again.",
          "QSound files such as dl-1425.bin and qsound.bin are treated as arcade BIOS, separate from a game's own files.",
          "CPS III uses NO-CD sets. Running arcade games needs Retropa Plus.",
        ],
      },
      {
        id: "saves-and-covers",
        title: "Saves and covers",
        body: "In-game saves and save states stay with each game. Save states belong to the core that made them, so switching cores keeps them on disk but hides them from the other core. Cloud Saves backs up and restores your save data with iCloud Drive, and save files can be imported and exported.",
        points: [
          "Covers are matched by the file's own hash against an offline game database, so most libraries fill in by themselves.",
          "Cover Harvester (Retropa Plus) lets you pick art from a web page, and the Portal can edit titles and metadata.",
        ],
      },
    ],
    faqTitle: "Import questions",
    faqs: [
      { id: "many-files", question: "Can I import many games at once?", answer: "Yes. The Files picker allows multiple selections, and the Portal accepts mixed drops of games, ZIP bundles, 7Z arcade sets and packs." },
      { id: "unzip", question: "Do I need to unzip games before importing?", answer: "No. Retropa imports ZIP and 7Z archives. Keep arcade sets zipped exactly as they are." },
      { id: "files-not-importing", question: "Why does a game show in Files but not import?", answer: "It is usually an iCloud placeholder that has not downloaded yet, or a format for a different system. Let the download finish, check the extension against the table above, and read the result card for the exact reason." },
      { id: "bios-where", question: "Where do BIOS files go?", answer: "Settings › Emulation › Cores › BIOS Management, or the BIOS page in the Portal. Each file is checked against the core that uses it." },
      { id: "portal-safety", question: "Who can reach the Wi‑Fi Portal?", answer: "Only devices on the same local network. Requests from outside your network are refused. Stop the Portal when you finish transferring." },
      { id: "where-games", question: "Does Retropa include games or BIOS files?", answer: "No. Import only files you have the right to use, or start with the free, legally distributed games in the Homebrew catalog." },
    ],
    related: "Keep reading",
  },
}
