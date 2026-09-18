import type { SearchPageContent } from "@/content/search-pages/types"

/**
 * Search landing page content for this locale.
 * Pages absent from this file are not published in this language, and are
 * therefore not registered as language alternates.
 */
export const pages: Record<string, SearchPageContent> = {
  "gb-emulator": {
    "kind": "system",
    "slug": "gb-emulator",
    "label": "GB",
    "title": "Game Boy Emulator for iPhone & iPad | Retropa",
    "description": "Run your own .gb files on iPhone and iPad with Retropa. Which core handles GB, how to import a game, how to set the screen and controls, and what to check when a file will not open.",
    "summary": "Retropa runs Game Boy games from your own .gb files on iPhone and iPad, with three interchangeable cores, handheld skins, LCD and CRT treatments, and controller mapping.",
    "sections": [
      {
        "title": "Start with a .gb file",
        "body": "Retropa plays Game Boy games from files you already own. The app is free to download and does not include games or BIOS files, so prepare the game file before you start and keep an untouched copy outside the app as a backup.",
        "points": [
          ".gb is a Game Boy game; .gbc belongs to Game Boy Color.",
          "Renaming a file extension does not convert a game to another system.",
          "Keep the original archive until the game runs correctly."
        ]
      },
      {
        "title": "Which core runs Game Boy games",
        "body": "Retropa ships more than one core that can run Game Boy titles, and you can switch between them per game. mGBA and SkyEmu both cover GB, GBC and GBA, while SameBoy targets GB and GBC specifically. If one core shows a problem with a particular title, try another before assuming the file is broken.",
        "points": [
          "mGBA is a good first choice for everyday play.",
          "SameBoy focuses on GB and GBC accuracy.",
          "The selected core is remembered per game."
        ]
      },
      {
        "title": "Import the game from Files",
        "body": "Make sure the file is downloaded locally, not only shown as a cloud placeholder in the Files app. Open the import entry in the Retropa library and select the game. Once it appears, open it and confirm the picture, sound and default on-screen controls work before you start customising anything."
      },
      {
        "title": "Choose a layout that fits the original screen",
        "body": "A Game Boy layout needs a directional pad, A and B, and Start and Select. Portrait puts the screen above the controls, which suits one-handed play; landscape gives the buttons more room. Check that the game view is not covered by the skin in either orientation, and that all six inputs are reachable.",
        "points": [
          "Check every button, not only the artwork.",
          "Delta .deltaskin packages can be imported, but a DS or GBA skin is not a GB layout.",
          "Premium skins and advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "Green screen, LCD grid or clean pixels",
        "body": "Begin with the original picture so you have a reference. A DMG preset recalls the four-tone reflective LCD of the original handheld, an LCD Grid adds a subpixel structure, and a CRT treatment gives a different look entirely. Retropa advanced filters adapt to the actual output area rather than requiring an integer scale factor, so the picture keeps its proportion across iPhone and iPad sizes.",
        "points": [
          "Filters change presentation, not the game's resolution.",
          "A filter will not fix a file compatibility problem.",
          "Compare against the original picture before keeping a preset."
        ]
      },
      {
        "title": "When a Game Boy import or save fails",
        "body": "Check the file extension, the selected system and the exact error message first. If Files has not finished downloading the original, complete that step before importing again. A game's own save data and an emulator save state are different things; do not rename one into the other, and keep a backup before moving a save between cores or apps.",
        "points": [
          "Record the app version, system, core and error for support.",
          "Do not attach commercial ROM or BIOS files to a support request.",
          "Try the default skin and a simple filter when isolating a problem."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Does Retropa include Game Boy games?",
        "answer": "No. Retropa is an emulator and does not provide games or BIOS files. You import files you have the right to use, and only those."
      },
      {
        "id": "bios-needed",
        "question": "Does Game Boy emulation need a BIOS file?",
        "answer": "GB and GBC titles generally run without a BIOS file in the cores Retropa ships. If a core reports a BIOS requirement, follow the prompt shown for that core rather than importing an unrelated file."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Can Retropa open a .gbc file as a Game Boy game?",
        "answer": "A .gbc file belongs to Game Boy Color. Retropa runs it on the matching system, and renaming the extension does not change what the file is."
      }
    ],
    "related": [
      "gbc-emulator",
      "nes-emulator",
      "gba-emulator",
      "delta-alternative"
    ]
  },
  "gbc-emulator": {
    "kind": "system",
    "slug": "gbc-emulator",
    "label": "GBC",
    "title": "Game Boy Color Emulator for iPhone & iPad | Retropa",
    "description": "Play your own .gbc games on iPhone and iPad. Colour palettes, GBC-only titles, core choice, import steps and the checks to run when a Game Boy Color game will not start.",
    "summary": "Retropa plays Game Boy Color games from your own .gbc files, with palette handling, per-game core selection and display treatments that suit the original reflective screen.",
    "sections": [
      {
        "title": "Prepare a .gbc file",
        "body": "Game Boy Color games use the .gbc extension. Retropa does not include games or BIOS files, so prepare the file yourself, keep a separate backup, and only import content you are entitled to use.",
        "points": [
          ".gbc is a Game Boy Color game.",
          "Original Game Boy games use .gb and also run on Retropa.",
          "Do not rename a .gb file to .gbc to force colour."
        ]
      },
      {
        "title": "Core choice for Game Boy Color",
        "body": "SameBoy is the GB and GBC focused core, and mGBA and SkyEmu also cover Game Boy Color. If a title shows incorrect colours or timing, switching cores is a legitimate first test, because each core handles the hardware slightly differently.",
        "points": [
          "SameBoy is a natural first pick for GBC titles.",
          "mGBA covers GB, GBC and GBA in one core.",
          "Core selection is stored per game."
        ]
      },
      {
        "title": "Import and first launch",
        "body": "Download the file to local storage so the Files app is not serving a placeholder, then choose it from the Retropa library import entry. Open the game and verify colour, sound, and the default touch layout before applying skins or filters, so that any later problem is easy to attribute.",
        "points": [
          "Test a scene that uses colour, not only a title screen.",
          "Check the sound channel as well as the picture.",
          "Keep the original file untouched while diagnosing."
        ]
      },
      {
        "title": "Picture and layout for a colour handheld",
        "body": "The Game Boy Color screen is small and reflective. An LCD Grid preset adds a subpixel structure that suits it, while a DMG preset deliberately recalls the older monochrome panel. Retropa advanced filters work from the actual output area rather than a fixed integer multiple, so proportions hold across device sizes.",
        "points": [
          "Compare each preset against the original picture.",
          "Advanced filters require Retropa Plus.",
          "Check that the skin leaves the game view unobstructed."
        ]
      },
      {
        "title": "Controls and orientation",
        "body": "A Game Boy Color layout needs a directional pad, A and B, and Start and Select. Portrait suits short sessions; landscape gives the buttons more space and can be easier on a larger iPhone. Confirm every input is reachable in the orientation you actually play."
      },
      {
        "title": "When a Game Boy Color game will not start",
        "body": "Check the extension and the selected system first, then read the exact error. If the region or palette looks wrong, compare cores before changing settings. Saves created in one core may not be read by another, so back up before switching.",
        "points": [
          "Note the app version, system, core and error.",
          "Do not send commercial ROM or BIOS files to support.",
          "Return to default skin and a simple filter to isolate problems."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Are Game Boy Color games included?",
        "answer": "No. Retropa is an emulator and does not supply games or BIOS files. Import only files you have the right to use."
      },
      {
        "id": "gb-on-gbc",
        "question": "Can I play original Game Boy games too?",
        "answer": "Yes. Original Game Boy .gb files run on Retropa as well, on the same cores that handle Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Will renaming a .gb file to .gbc add colour?",
        "answer": "No. The extension does not change what the file contains, so renaming does not enable Game Boy Color features."
      }
    ],
    "related": [
      "gb-emulator",
      "gba-emulator",
      "wonderswan-emulator"
    ]
  },
  "nes-emulator": {
    "kind": "system",
    "slug": "nes-emulator",
    "label": "NES",
    "title": "NES Emulator for iPhone & iPad | Retropa",
    "description": "Run your own NES games on iPhone and iPad. Supported file formats including .nes, .fds and .nsf, core selection, import steps, controller mapping and troubleshooting.",
    "summary": "Retropa runs NES games from your own files, covering .nes, .fds and NSF audio formats across two dedicated cores, with gamepad mapping and CRT treatments.",
    "sections": [
      {
        "title": "File formats Retropa accepts for NES",
        "body": "NES support in Retropa covers more than a single extension. Alongside the common .nes cartridge image, the cores accept Famicom Disk System images and NSF sound files, plus the plain and unified iNES container variants.",
        "points": [
          ".nes is the standard NES cartridge image.",
          ".fds covers Famicom Disk System content.",
          ".nsf and .nsfe are sound files rather than playable games.",
          "ZIP and RetroPack containers can be imported and opened in place."
        ]
      },
      {
        "title": "Two cores, one system",
        "body": "Retropa ships RusticoNES and TetaNES for NES titles, and JGenesis also covers the system. Trying a second core is the quickest way to tell an awkward ROM from a genuine emulation difference, and the choice is remembered per game.",
        "points": [
          "RusticoNES is a solid default for cartridge games.",
          "TetaNES is the alternative to test when something misbehaves.",
          "NSF audio files behave differently from games in every core."
        ]
      },
      {
        "title": "Import a NES game",
        "body": "Download the file locally first so Files is not returning a placeholder, then open the import entry in the Retropa library. Launch the game with the default layout and confirm the picture, audio and default buttons before changing skins or filters."
      },
      {
        "title": "Handling a two-button controller",
        "body": "The NES controller is deliberately minimal: a directional pad, A, B, Start and Select. On a touch screen the temptation is to move buttons closer together, so check that diagonal input still registers and that Start and Select are not accidentally hit during play. A paired physical controller solves most of this.",
        "points": [
          "Pair a controller in iOS first, then check its mapping in Retropa.",
          "Verify diagonals, not just the four cardinal directions.",
          "Check both portrait and landscape if you play in both."
        ]
      },
      {
        "title": "Getting the picture right",
        "body": "NES output is intended for a standard-definition television, so a CRT treatment often looks closer to the original experience than a clean pixel grid. Scanline and aperture-grille presets are available, and Retropa advanced filters adapt to the real output area rather than a fixed integer multiple.",
        "points": [
          "Start from the original picture as a reference.",
          "Conventional scanline overlays can shimmer at fractional scales.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a NES game will not load",
        "body": "Read the exact error before changing anything. A bad dump, an unsupported mapper, a headerless image or a disk-system game missing its BIOS are different problems. Check the extension and the selected system, then try the other NES core.",
        "points": [
          "Note the app version, core and full error text for support.",
          "Keep the original file untouched while diagnosing.",
          "Do not attach commercial ROM or BIOS files to a support request."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Which NES formats does Retropa open?",
        "answer": "Retropa accepts .nes, .fds, .nsf, .nsfe, .unf and .unif files, and can also open ZIP and RetroPack containers directly."
      },
      {
        "id": "nsf",
        "question": "Can I play an .nsf file like a game?",
        "answer": "No. NSF files are sound data, so they play audio rather than a game. Use a .nes or .fds file to play a title."
      },
      {
        "id": "gamepad",
        "question": "Does a physical controller work with NES games?",
        "answer": "Yes. Compatible controllers can be paired with iOS and mapped inside Retropa. Check the mapping after pairing, because button order is not always what you expect."
      }
    ],
    "related": [
      "snes-emulator",
      "gb-emulator",
      "arcade"
    ]
  },
  "snes-emulator": {
    "kind": "system",
    "slug": "snes-emulator",
    "label": "SNES",
    "title": "SNES Emulator for iPhone & iPad | Retropa",
    "description": "Play your own SNES games on iPhone and iPad. Supported .sfc and .smc formats, the LakeSnes core, controller mapping for six buttons and troubleshooting steps.",
    "summary": "Retropa runs SNES games from your own .sfc and .smc files on the LakeSnes core, with six-button controller mapping, save states and CRT display treatments.",
    "sections": [
      {
        "title": "SNES file formats",
        "body": "Super Nintendo images are usually distributed as .sfc or .smc, and Retropa also accepts several related container and copier formats. If a file fails, the extension is the first thing to verify, because a mismatched header is a common cause of a game that will not boot.",
        "points": [
          ".sfc and .smc are the standard SNES images.",
          "Retropa also lists .fig, .swc, .bs and .st coverage.",
          "ZIP and RetroPack containers can be opened directly."
        ]
      },
      {
        "title": "The LakeSnes core",
        "body": "Retropa runs SNES titles on LakeSnes, and JGenesis also lists the system. If a particular game shows a timing or graphics problem, confirm the file is a clean image before assuming the core is at fault, and check the current app version against the release notes.",
        "points": [
          "LakeSnes is the dedicated SNES core.",
          "Some titles depend on specific cartridge coprocessors.",
          "Per-game core selection is remembered."
        ]
      },
      {
        "title": "Import and first run",
        "body": "Keep the file in local storage rather than a cloud placeholder, then select it from the Retropa library import entry. Open the game and verify picture, audio and default touch controls before changing any presentation setting, so that later problems have a clear cause."
      },
      {
        "title": "Six buttons need real space",
        "body": "The SNES controller adds X, Y, L and R on top of the directional pad, A, B, Start and Select, and many games expect simultaneous presses. On a touch screen, spreading the layout across landscape and checking each combination is worth the time. A paired physical controller is the more reliable option for action titles.",
        "points": [
          "Verify L and R, which are easy to forget when mapping.",
          "Test a diagonal plus a shoulder button at the same time.",
          "Check that the skin leaves the game view clear."
        ]
      },
      {
        "title": "Choosing a display treatment",
        "body": "SNES artwork was designed for a CRT, so scanline and aperture-grille presets usually look closer to the original than a raw pixel grid. Retropa advanced filters account for the actual output area instead of requiring an integer multiple, which matters on phones where the available height rarely divides evenly.",
        "points": [
          "Use the original picture as a baseline.",
          "Simple scanline overlays can shimmer at fractional scales.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a SNES game will not start",
        "body": "Check the extension, the selected system and the exact error text. Titles that rely on a special cartridge chip are the usual suspects when one game fails while others work. Keep the original file intact while testing, and try switching to the alternate core.",
        "points": [
          "Record app version, core and error for support.",
          "A filter change will not fix a cartridge-chip problem.",
          "Do not send commercial ROM or BIOS files to support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Does .sfc or .smc matter?",
        "answer": "Both are standard SNES images and Retropa accepts either. The extension itself does not change the game."
      },
      {
        "id": "chip-games",
        "question": "Why does one game fail while others work?",
        "answer": "Some titles depend on additional cartridge hardware. If the file is a clean image and other games run, that dependency is the likely cause, and switching cores is the next test."
      },
      {
        "id": "saves",
        "question": "Are save states portable between cores?",
        "answer": "Not reliably. Battery saves and save states are different artifacts, and a state written by one core may not load in another, so keep a backup before switching."
      }
    ],
    "related": [
      "nes-emulator",
      "sega-genesis-emulator",
      "arcade",
      "retropa-vs-delta"
    ]
  },
  "sega-genesis-emulator": {
    "kind": "system",
    "slug": "sega-genesis-emulator",
    "label": "Genesis",
    "title": "Sega Genesis & Mega Drive Emulator for iPhone | Retropa",
    "description": "Play your own Sega Genesis and Mega Drive games on iPhone and iPad. .md, .smd and .gen formats, the JGenesis core, six-button mapping and troubleshooting.",
    "summary": "Retropa runs Sega Genesis and Mega Drive games from your own files on the JGenesis core, with six-button controller support, save states and CRT display treatments.",
    "sections": [
      {
        "title": "Genesis and Mega Drive are the same system",
        "body": "The console shipped as Mega Drive in Europe, Japan and most of Asia, and as Genesis in North America. The hardware is the same, so a game file works either way; only the name on the box differs. Retropa lists both, which is why the file extensions differ slightly between regions.",
        "points": [
          ".md and .smd are the usual Mega Drive images.",
          ".gen is the common North American extension.",
          "The extension does not change the hardware the game expects."
        ]
      },
      {
        "title": "The JGenesis core",
        "body": "Retropa runs Genesis and Mega Drive titles on JGenesis, which also covers Master System, Game Gear and several handheld systems. Because one core serves several platforms, the selected system per game matters: importing a Master System title while the system is set to Genesis is a common source of confusion.",
        "points": [
          "JGenesis covers MD, GEN, SMS and GG.",
          "Confirm the detected system before reporting a problem.",
          "Core and system choice are remembered per game."
        ]
      },
      {
        "title": "Import a Mega Drive game",
        "body": "Store the file locally instead of leaving it as a cloud placeholder, then choose it from the Retropa library import entry. Open the game and confirm picture, audio and the default touch layout before applying a skin or a filter."
      },
      {
        "title": "Mapping a six-button pad",
        "body": "Genesis controllers came in three-button and six-button versions, and some games behave differently depending on which one is detected. On a touch layout, confirm that A, B, C and, where offered, X, Y, Z and Mode are all reachable, and test a combination that a game actually uses.",
        "points": [
          "Verify both the three-button and six-button mappings.",
          "Check Start, which doubles as the pause control in many titles.",
          "A paired physical controller avoids most mis-press problems."
        ]
      },
      {
        "title": "Display treatment for a 16-bit console",
        "body": "Mega Drive output targets a CRT, so a scanline or aperture-grille preset usually reads closer to the original than a raw pixel grid, particularly for dithering that the TV would have blended. Retropa advanced filters work from the real output area rather than a fixed integer multiple.",
        "points": [
          "Start from the original picture, then compare.",
          "Dithering patterns are a good test of a filter preset.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a Genesis game will not start",
        "body": "Check the extension, the system selection and the exact error. Region and system mismatches are more common here than on single-platform systems, because one core serves several consoles. Keep the original file intact and confirm the detected system before deeper changes.",
        "points": [
          "Record app version, detected system, core and error.",
          "Do not send commercial ROM or BIOS files to support.",
          "Retain a separate backup before moving saves between cores."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Is Mega Drive the same as Genesis?",
        "answer": "Yes. It is one console with two regional names, so a game file runs under either name."
      },
      {
        "id": "six-button",
        "question": "Does Retropa support six-button controllers?",
        "answer": "The touch layout and external controller mapping cover the extra buttons, and some games change behaviour depending on which pad variant they detect."
      },
      {
        "id": "system-detect",
        "question": "Why is my game treated as the wrong system?",
        "answer": "One core serves several Sega platforms, so check the detected system for that game and correct it before reporting a compatibility problem."
      }
    ],
    "related": [
      "master-system-emulator",
      "game-gear-emulator",
      "snes-emulator"
    ]
  },
  "game-gear-emulator": {
    "kind": "system",
    "slug": "game-gear-emulator",
    "label": "Game Gear",
    "title": "Game Gear Emulator for iPhone & iPad | Retropa",
    "description": "Play your own .gg Game Gear games on iPhone and iPad. Which core runs them, how to import a file, how to set up the screen and what to check when a game fails.",
    "summary": "Retropa runs Game Gear games from your own .gg files through the JGenesis core, with a backlit-screen look, handheld skins and full control mapping.",
    "sections": [
      {
        "title": "Prepare a .gg file",
        "body": "Game Gear games use the .gg extension. Retropa does not include games or BIOS files, so have the file ready and keep a copy outside the app before importing.",
        "points": [
          ".gg is the Game Gear extension.",
          "A .sms file belongs to Master System, not Game Gear.",
          "Renaming does not convert between the two."
        ]
      },
      {
        "title": "Which core handles Game Gear",
        "body": "JGenesis covers Game Gear alongside Mega Drive, Genesis and Master System. Because one core serves several Sega platforms, check that the game is detected as Game Gear before investigating a compatibility problem."
      },
      {
        "title": "Import and first launch",
        "body": "Download the file locally, then select it from the Retropa library import entry. Confirm the picture, audio and default controls before applying a skin, so that any later issue has an obvious cause."
      },
      {
        "title": "A small backlit screen",
        "body": "The Game Gear panel was backlit and small, so an LCD Grid treatment tends to suit it, while a stronger CRT preset will look noticeably heavier than the original hardware. Retropa advanced filters adapt to the real output area instead of requiring an integer multiple.",
        "points": [
          "Compare each preset against the original picture.",
          "Advanced filters require Retropa Plus.",
          "Check the game view is not covered by the skin."
        ]
      },
      {
        "title": "Controls and orientation",
        "body": "Game Gear hardware provided a directional pad, two action buttons and Start. The small button count makes a portrait layout comfortable, but check that Start is reachable without shifting your grip, and test diagonals."
      },
      {
        "title": "When a Game Gear game will not run",
        "body": "Confirm the extension, the detected system and the exact error text. A Master System file imported as Game Gear, or the reverse, is a frequent cause. Keep the original file intact while testing.",
        "points": [
          "Record app version, detected system, core and error.",
          "Do not send commercial ROM or BIOS files to support.",
          "Keep a backup before moving saves between cores."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Is Game Gear the same as Master System?",
        "answer": "They are closely related but different systems with different file extensions. One core runs both, so check which system a file is detected as."
      },
      {
        "id": "bios",
        "question": "Does Game Gear need a BIOS file?",
        "answer": "Not in the cores Retropa ships. If a core reports a requirement, follow that core's prompt rather than importing an unrelated file."
      }
    ],
    "related": [
      "master-system-emulator",
      "sega-genesis-emulator",
      "gb-emulator"
    ]
  },
  "master-system-emulator": {
    "kind": "system",
    "slug": "master-system-emulator",
    "label": "Master System",
    "title": "Master System Emulator for iPhone & iPad | Retropa",
    "description": "Run your own .sms Sega Master System games on iPhone and iPad. Core coverage, import steps, control layout and what to check when a title will not start.",
    "summary": "Retropa runs Sega Master System games from your own .sms files on the JGenesis core, with handheld skins, display treatments and controller mapping.",
    "sections": [
      {
        "title": "Prepare a .sms file",
        "body": "Master System games use the .sms extension. Retropa does not supply games or BIOS files, so prepare the file and keep a backup outside the app.",
        "points": [
          ".sms is the Master System extension.",
          ".gg belongs to Game Gear and is a different system.",
          "ZIP and RetroPack containers can be opened directly."
        ]
      },
      {
        "title": "Core coverage",
        "body": "JGenesis handles Master System together with Mega Drive, Genesis and Game Gear. Since one core serves several platforms, confirming the detected system is the first diagnostic step when a file behaves unexpectedly."
      },
      {
        "title": "Import and verify",
        "body": "Keep the file in local storage, then choose it from the Retropa library import entry. Check picture, audio and the default layout before applying a skin or a display preset."
      },
      {
        "title": "Two buttons, one direction pad",
        "body": "Master System controllers used a directional pad, two action buttons and, on some models, a pause button on the console itself. On a touch layout it is worth confirming that pause is mapped somewhere reachable, because it is easy to omit."
      },
      {
        "title": "Picture treatment",
        "body": "Master System titles target a CRT display. Scanline and aperture-grille presets generally read closer to the original than a raw pixel grid, and Retropa advanced filters adapt to the real output area rather than a fixed integer multiple.",
        "points": [
          "Compare presets against the original picture.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a Master System game will not start",
        "body": "Check the extension, the detected system and the precise error. Region differences and Master System versus Game Gear mismatches are the usual causes. Keep the original file untouched while diagnosing.",
        "points": [
          "Record app version, detected system, core and error.",
          "Do not attach commercial ROM or BIOS files to a support request."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "How do I know if a file is Master System or Game Gear?",
        "answer": "Check the extension: .sms is Master System and .gg is Game Gear. Retropa shows the detected system for the imported game."
      },
      {
        "id": "pause",
        "question": "Where is the pause button?",
        "answer": "On the original hardware it sat on the console rather than the controller. In Retropa it is part of the on-screen layout, so check that it is mapped to a key you can reach."
      }
    ],
    "related": [
      "game-gear-emulator",
      "sega-genesis-emulator",
      "nes-emulator"
    ]
  },
  "wonderswan-emulator": {
    "kind": "system",
    "slug": "wonderswan-emulator",
    "label": "WonderSwan",
    "title": "WonderSwan Emulator for iPhone & iPad | Retropa",
    "description": "Play your own .ws WonderSwan games on iPhone and iPad. The Ares core, vertical orientation, import steps and troubleshooting for a less common handheld.",
    "summary": "Retropa runs WonderSwan games from your own .ws files on the Ares core, including the vertical orientation the hardware was designed around.",
    "sections": [
      {
        "title": "Prepare a .ws file",
        "body": "WonderSwan games use the .ws extension, while WonderSwan Color uses .wsc. Retropa does not include games or BIOS files; prepare the file and keep a backup.",
        "points": [
          ".ws is WonderSwan; .wsc is WonderSwan Color.",
          "The two are different systems with different capabilities.",
          "Renaming does not upgrade a game to the colour model."
        ]
      },
      {
        "title": "The Ares core",
        "body": "Ares handles WonderSwan and WonderSwan Color in Retropa, alongside other handheld systems. If a title fails to boot, confirm the file is a clean image and that the detected system matches the file extension before changing settings."
      },
      {
        "title": "Import and first run",
        "body": "Store the file locally, then select it from the Retropa library import entry. Verify picture, audio and default controls before applying a skin or display preset."
      },
      {
        "title": "A handheld that was meant to be held vertically",
        "body": "The WonderSwan was designed to work in both orientations, and many titles were built for vertical play. Retropa supports portrait layouts, so check whether the game you are playing expects a rotated screen before deciding that the picture looks wrong.",
        "points": [
          "Try portrait as well as landscape.",
          "Not every title uses the same orientation.",
          "Confirm all inputs are reachable in the orientation you choose."
        ]
      },
      {
        "title": "Display treatment",
        "body": "The WonderSwan used a reflective monochrome panel with a distinct pixel structure. An LCD Grid preset tends to match it, while a CRT preset will look heavier than the original hardware. Advanced filters adapt to the actual output area.",
        "points": [
          "Use the original picture as a reference.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a WonderSwan game will not start",
        "body": "Check the extension, the detected system and the exact error. Installing a .wsc file as WonderSwan, or the reverse, is a common mix-up. Keep the original file intact while testing.",
        "points": [
          "Record app version, detected system, core and error.",
          "Do not send commercial ROM or BIOS files to support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Does the colour model change the file?",
        "answer": "Yes. WonderSwan and WonderSwan Color use different extensions, and a colour title may not behave correctly on the monochrome system."
      },
      {
        "id": "orientation",
        "question": "Why does the screen look rotated?",
        "answer": "Many WonderSwan titles were designed for vertical play. Try the portrait layout before assuming the picture is wrong."
      }
    ],
    "related": [
      "gb-emulator",
      "gbc-emulator",
      "neogeo-pocket-emulator"
    ]
  },
  "neogeo-pocket-emulator": {
    "kind": "system",
    "slug": "neogeo-pocket-emulator",
    "label": "Neo Geo Pocket",
    "title": "Neo Geo Pocket Emulator for iPhone & iPad | Retropa",
    "description": "Run your own .ngp and .ngpc Neo Geo Pocket games on iPhone and iPad. Core coverage, the joystick-style controls and how this differs from Neo Geo arcade.",
    "summary": "Retropa runs Neo Geo Pocket and Neo Geo Pocket Color games from your own files on the Ares core, and is separate from Neo Geo arcade emulation.",
    "sections": [
      {
        "title": "Neo Geo Pocket is not Neo Geo arcade",
        "body": "The Neo Geo Pocket and Neo Geo Pocket Color are handheld consoles. They share a brand with the Neo Geo MVS and AES arcade hardware but are entirely different systems with different files and different cores. Arcade support in Retropa requires Plus; Pocket emulation does not.",
        "points": [
          ".ngp is Neo Geo Pocket; .ngpc and .ngc are the colour model.",
          "An arcade neogeo.zip is not a Pocket game.",
          "Arcade and Pocket libraries are separate."
        ]
      },
      {
        "title": "Prepare the right file",
        "body": "Check the extension before importing. A Pocket game is a single handheld image, whereas an arcade Neo Geo set usually consists of several chip files plus an optional BIOS. Treating one as the other is the most common mistake with this system."
      },
      {
        "title": "The Ares core",
        "body": "Ares handles Neo Geo Pocket and Neo Geo Pocket Color alongside other handheld platforms in Retropa. If a game does not boot, confirm the extension and the detected system, then consider whether the file is a clean image."
      },
      {
        "title": "A microswitch stick, not a d-pad",
        "body": "The Neo Geo Pocket used a clicky microswitch stick rather than a conventional directional pad. In practice this means precise diagonals matter more than usual, so when testing a touch layout, verify that diagonal input registers cleanly rather than only checking the four cardinal directions.",
        "points": [
          "Test diagonals explicitly.",
          "Confirm the two action buttons are comfortable for long sessions.",
          "A paired physical controller is worth using for fighting games."
        ]
      },
      {
        "title": "Display treatment",
        "body": "The Pocket's colour panel is small and low resolution, so a light LCD treatment usually suits it better than a heavy CRT preset. Retropa advanced filters work from the real output area rather than requiring an integer multiple.",
        "points": [
          "Compare against the original picture.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a Pocket game will not start",
        "body": "Confirm the extension, the detected system and the exact error. If you have arcade files in the library, check you did not select one of those. Keep the original file intact while diagnosing.",
        "points": [
          "Record app version, detected system, core and error.",
          "Do not send commercial ROM or BIOS files to support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Can I play Neo Geo arcade games here?",
        "answer": "That is a separate system with its own cores and files. Retropa supports arcade families, and those require Retropa Plus; Neo Geo Pocket emulation is separate."
      },
      {
        "id": "neogeo-zip",
        "question": "Do I need a neogeo.zip for Pocket games?",
        "answer": "No. That file relates to Neo Geo arcade hardware. Pocket games do not use it."
      }
    ],
    "related": [
      "neogeo-emulator",
      "wonderswan-emulator",
      "gbc-emulator"
    ]
  },
  "neogeo-emulator": {
    "kind": "system",
    "slug": "neogeo-emulator",
    "label": "Neo Geo",
    "title": "Neo Geo Emulator for iPhone & iPad | Retropa",
    "description": "Play supported Neo Geo MVS arcade files on iPhone and iPad with Retropa. Set structure, BIOS requirements, parent and clone sets, and what to check when a game will not boot.",
    "summary": "Retropa runs supported Neo Geo arcade sets on iPhone and iPad with touch and external controls and CRT filters. Arcade play requires Retropa Plus; games and BIOS files are not included.",
    "sections": [
      {
        "title": "Neo Geo arcade needs Plus",
        "body": "Neo Geo arcade emulation is part of Retropa's arcade family, and arcade cores require Retropa Plus. This is separate from Neo Geo Pocket, which is a handheld system covered by the standard Pocket support.",
        "points": [
          "Arcade families require Retropa Plus.",
          "Neo Geo Pocket is a different, handheld system.",
          "Games and BIOS files are not included in any case."
        ]
      },
      {
        "title": "An arcade set is not one file",
        "body": "Console emulation usually means one file per game. Arcade hardware works differently: a game is a set of chip files, often grouped in a ZIP, and many games depend on a parent set or a BIOS. That is why an arcade ZIP behaves differently from a handheld ROM.",
        "points": [
          "Keep the ZIP intact unless the import flow asks you to unpack it.",
          "A separate BIOS archive may be required.",
          "A clone set may not contain every file the core needs."
        ]
      },
      {
        "title": "Importing and first launch",
        "body": "Select the set from the Retropa library import entry, then launch it with the default layout. If the core reports a missing file or BIOS, read that message precisely: a missing parent set and a missing BIOS need different fixes.",
        "points": [
          "Read the exact error before changing anything.",
          "Retain the original archive while diagnosing.",
          "Confirm the coin and start inputs are reachable."
        ]
      },
      {
        "title": "Neo Geo Pocket files will not work here",
        "body": "If you have .ngp or .ngpc files, those belong to the Pocket systems rather than the arcade family. A Pocket ROM or a renamed ZIP cannot substitute for an arcade set, and the reverse is also true.",
        "points": [
          ".ngp and .ngpc are handheld Pocket files.",
          "Arcade sets are multi-file and may need a BIOS.",
          "Check the detected system before reporting a problem."
        ]
      },
      {
        "title": "Arcade controls and display",
        "body": "Arcade hardware expects a joystick plus several action buttons, and many titles rely on simultaneous presses. Retropa supports on-screen controls and compatible external controllers, and includes CRT treatments that suit arcade output. Advanced filters require Plus.",
        "points": [
          "Pair a controller in iOS before mapping it.",
          "Test a diagonal plus a button at the same time.",
          "CRT presets usually suit arcade output better than a raw grid."
        ]
      },
      {
        "title": "When a Neo Geo game will not start",
        "body": "Check the selected board, the set contents and any BIOS requirement reported by the core. A standalone clone set without its parent, or a set missing a required file, will not boot no matter what filter or skin is applied.",
        "points": [
          "Record app version, board selection, core and exact error.",
          "Filter or skin changes cannot fix missing ROM data.",
          "Do not attach commercial ROM or BIOS files to a support request."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Why do arcade cores need Plus?",
        "answer": "Arcade families are part of the paid feature set, alongside premium skins and advanced filters. Pocket and cartridge systems do not require it."
      },
      {
        "id": "bios",
        "question": "Do I need a Neo Geo BIOS?",
        "answer": "Many arcade sets expect one, and the core will tell you if it is missing. Use a BIOS you are entitled to use; Retropa does not provide downloads."
      },
      {
        "id": "pocket-confusion",
        "question": "Is Neo Geo Pocket the same thing?",
        "answer": "No. Pocket is a handheld console with its own files. An arcade set and a Pocket game are not interchangeable."
      }
    ],
    "related": [
      "neogeo-pocket-emulator",
      "arcade",
      "snes-emulator"
    ]
  },
  "mgba-core": {
    "kind": "core",
    "slug": "mgba-core",
    "label": "mGBA",
    "title": "mGBA Core on iPhone & iPad | Retropa",
    "description": "Use mGBA in Retropa for Game Boy, Game Boy Color and Game Boy Advance. Catalog formats, first-run checks, save precautions and Plus core switching.",
    "summary": "mGBA covers the Game Boy handheld family in Retropa. Start with the default layout and original picture, then check a real gameplay scene before changing presentation settings.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "mGBA upstream project: https://github.com/mgba-emu/mgba. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "First launch across the handheld generations",
        "body": "Download your file locally in Files, import it from the Retropa library and confirm the detected system. A Game Boy Color title needs its colour hardware path; changing the filename is not a way to add or remove colour features. For Game Boy Advance, test L and R as well as the face buttons because a layout designed for the older handhelds may omit them.",
        "points": [
          "Check sound and input after the title screen.",
          "Test the default skin before importing a custom layout.",
          "Keep the original file outside the app."
        ]
      },
      {
        "title": "Separate emulation from display effects",
        "body": "If a scene looks wrong, first compare it with filters disabled. A green-screen treatment deliberately changes colour and an LCD grid deliberately changes pixel appearance. Those effects cannot establish whether mGBA is rendering the game incorrectly. For an audio or timing issue, note a repeatable scene and the app version rather than judging only the opening logo."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Limitations of the handheld scope",
        "body": "mGBA is not the Nintendo DS path in Retropa. A DS file needs the catalog's DS core, not a renamed Game Boy Advance image. Likewise, a save state from another emulator is not a game file and should not be imported as one. Follow a BIOS prompt for the selected system if one appears; Retropa does not supply firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Can I change the core for one game only?",
        "answer": "Yes, with Retropa Plus. Selection is stored per game, but back up saves before changing it and do not expect states to work across cores."
      },
      {
        "id": "display",
        "question": "Will another filter fix a compatibility issue?",
        "answer": "No. Test with the original picture first. A filter changes presentation, not the emulated hardware or the contents of the game file."
      }
    ],
    "related": [
      "skyemu-core",
      "sameboy-core",
      "gb-emulator",
      "plus"
    ]
  },
  "skyemu-core": {
    "kind": "core",
    "slug": "skyemu-core",
    "label": "SkyEmu",
    "title": "SkyEmu Core on iPhone & iPad | Retropa",
    "description": "SkyEmu covers the Game Boy family and the Nintendo DS beta path in Retropa. Check formats, dual-screen touch controls, limitations and Plus core switching.",
    "summary": "SkyEmu handles the Nintendo DS beta path as well as Game Boy handhelds in Retropa. DS coverage is beta, not a promise that every title or touch-driven interaction works correctly.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "SkyEmu upstream project: https://github.com/skylersaleh/SkyEmu. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS is a beta path",
        "body": "Treat DS compatibility as title-specific. Import a locally downloaded file, confirm Nintendo DS was detected, and test beyond the opening screen. Check a scene with touch input and a scene with sound before relying on a long session. Record the app version and exact failure if a title freezes; changing a skin cannot repair a core compatibility problem.",
        "points": [
          "The catalog lists only SkyEmu for Nintendo DS.",
          "Plus core switching does not create an alternative DS core.",
          "Keep independent save backups while evaluating beta behaviour."
        ]
      },
      {
        "title": "Two screens and touch input",
        "body": "Choose a layout that leaves both displays visible. Portrait can stack them vertically; landscape depends on the skin. Test small touch targets at the size you actually play and verify which display receives touch input. A physical controller can handle mapped buttons but cannot replace every touch interaction.",
        "points": [
          "Test both displays rather than only the main game view.",
          "Leave touch controls reachable with an external controller.",
          "A one-screen handheld skin is not a DS layout."
        ]
      },
      {
        "title": "Using SkyEmu for the older handhelds",
        "body": "The Game Boy family uses single-screen layouts. Confirm the detected system and use an appropriate skin before investigating colour or missing-button problems. ZIP and RetroPack are import containers, not additional emulated systems; the file inside still needs to match the catalog. Renaming a Game Boy Advance file does not turn it into a DS game."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Which core runs Nintendo DS games?",
        "answer": "SkyEmu is Retropa's cataloged Nintendo DS beta path. Compatibility is title-specific and the catalog does not list another DS core."
      },
      {
        "id": "touch",
        "question": "Do DS games still need touch input with a controller?",
        "answer": "Yes. Keep the touch screen reachable for games that use it; a controller does not replace all touch actions."
      }
    ],
    "related": [
      "mgba-core",
      "ds-emulator",
      "game-wont-load",
      "plus"
    ]
  },
  "sameboy-core": {
    "kind": "core",
    "slug": "sameboy-core",
    "label": "SameBoy",
    "title": "SameBoy Core on iPhone & iPad | Retropa",
    "description": "SameBoy focuses on Game Boy and Game Boy Color in Retropa. Check colour behaviour, file scope, save-state limits and the Plus requirement for changing cores.",
    "summary": "SameBoy focuses on the original monochrome and colour Game Boy hardware. Its narrower scope makes it a useful comparison point, not a guarantee that every other core is less accurate.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "SameBoy upstream project: https://github.com/LIJI32/SameBoy. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Check colour without a filter",
        "body": "Import your locally stored file and confirm whether Retropa identifies it as Game Boy or Game Boy Color. Start with the original picture: a DMG treatment can deliberately make a colour title look monochrome. Use a scene with known colour changes and compare the same scene rather than two different points in the game."
      },
      {
        "title": "Testing timing and input",
        "body": "Use the default skin to check the directional pad, A, B, Start and Select. If timing or sound seems wrong, note exactly when it happens and whether it persists with display effects disabled. With Retropa Plus, a comparison against another compatible core can help isolate the implementation, but a visible difference alone does not prove which core matches hardware."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Not a Game Boy Advance core",
        "body": "SameBoy does not cover Game Boy Advance in Retropa. Use a cataloged GBA-capable core for a GBA image; changing its extension does not make it a Game Boy game. Likewise, changing to SameBoy will not make a save state produced by a different core portable. Keep the old state and test an in-game save backup separately."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "Can SameBoy run Game Boy Advance games?",
        "answer": "No. Retropa's SameBoy catalog entry covers Game Boy and Game Boy Color, not Game Boy Advance."
      },
      {
        "id": "why",
        "question": "When should I compare SameBoy with another core?",
        "answer": "With Retropa Plus, compare a repeatable timing, colour or sound issue after checking the file and disabling filters. Back up saves first."
      }
    ],
    "related": [
      "mgba-core",
      "gb-emulator",
      "gbc-emulator",
      "plus"
    ]
  },
  "rusticones-core": {
    "kind": "core",
    "slug": "rusticones-core",
    "label": "RusticoNES",
    "title": "RusticoNES Core for NES on iPhone & iPad | Retropa",
    "description": "RusticoNES in Retropa: NES and Famicom cartridge and disk formats, mapper checks, first launch, save precautions and Plus core switching.",
    "summary": "RusticoNES is Retropa's default NES runtime path. Use it for the cataloged NES / Famicom formats, checking cartridge metadata and disk requirements before treating a failed boot as a display problem.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "RusticoNES upstream project: https://github.com/zeta0134/rustico. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Cartridges, UNIF and disk images",
        "body": "A NES / Famicom cartridge image and a Famicom Disk System image are different inputs. UNIF is a cartridge container format, not another name for an iNES header. Preserve the original header and extension when importing; renaming or removing bytes to make the file look like another format can discard information used to identify its board.",
        "points": [
          "Keep a separate copy of the original image.",
          "Read any disk-system BIOS prompt; Retropa does not provide the BIOS.",
          "NSF audio formats are not listed for RusticoNES; check TetaNES instead."
        ]
      },
      {
        "title": "First launch and controller checks",
        "body": "Download the image locally in Files, import it through the Retropa library and confirm NES was detected. Start with the default skin and no display effect. Test the directional pad, A, B, Start and Select, including diagonals and simultaneous presses. A missing input in a custom layout is not evidence of a bad mapper."
      },
      {
        "title": "When a cartridge fails but others work",
        "body": "NES cartridges can include different mapper hardware. A recognized extension does not prove that the board used by a particular game is implemented. Record the exact error and, if known from your own dump metadata, the mapper and region. Do not patch headers at random or assume a BIOS fixes a cartridge board issue. For disk games, distinguish a missing BIOS from missing disk data."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Compare only the overlapping formats",
        "body": "The NES system page lists the union of formats across its cores, not a promise that every core accepts all of them. Before using Plus to compare RusticoNES with TetaNES or JGenesis, check both catalog entries for the original file's format. Keep the same scene and default display settings so a changed skin or filter does not obscure the result."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "Is RusticoNES the listed core for NSF audio?",
        "answer": "No. Retropa's catalog lists NSF and NSFE under TetaNES, not RusticoNES. Audio files are not playable cartridge games."
      },
      {
        "id": "mapper",
        "question": "Does a supported extension guarantee a game will boot?",
        "answer": "No. The cartridge mapper, file integrity and any disk-system requirements still matter. Record the exact error before changing the file."
      }
    ],
    "related": [
      "nes-emulator",
      "tetanes-core",
      "jgenesis-core",
      "plus"
    ]
  },
  "tetanes-core": {
    "kind": "core",
    "slug": "tetanes-core",
    "label": "TetaNES",
    "title": "TetaNES Core for NES on iPhone & iPad | Retropa",
    "description": "TetaNES in Retropa: NES / Famicom games, disk images and NSF audio, format-specific checks, controller setup and the Plus requirement for switching cores.",
    "summary": "TetaNES is an alternative NES core in Retropa with cataloged cartridge, disk and music-file coverage. Check which kind of file you imported before expecting a playable game screen.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "TetaNES upstream project: https://github.com/lukexor/tetanes. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Music files are not cartridge games",
        "body": "NSF and NSFE hold NES music data. If you imported one, lack of a normal game level is not by itself a failure. Check audio output and the controls the app actually exposes; do not assume an upstream desktop music-player interface is present in Retropa. For gameplay, start with a cartridge or disk image you are entitled to use.",
        "points": [
          "Check device volume and audio output when testing music.",
          "Renaming an audio file cannot turn it into a cartridge image.",
          "UNIF extensions belong to RusticoNES's catalog entry, not TetaNES's."
        ]
      },
      {
        "title": "Import a cartridge or disk image",
        "body": "Download the file to the device before using the library import entry. Confirm NES detection and keep the original image unchanged. Famicom is the Japanese system name; Famicom Disk System adds separate disk requirements. If the selected core reports a BIOS or disk-data problem, resolve that exact requirement instead of replacing the file with an unrelated cartridge image."
      },
      {
        "title": "Test input and a repeatable scene",
        "body": "Use a NES / Famicom layout with the directional pad, two action buttons, Start and Select. Confirm diagonals with the default skin, then test a scene that demonstrates the issue. Compare the original picture before applying a CRT effect: scanlines can change perceived detail without changing what the core emulates."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "An alternative is not a universal repair",
        "body": "TetaNES and RusticoNES have different format lists and implementations. A switch can help isolate a timing or mapper issue only when the file is valid for both; it cannot guarantee support for a particular board. Save states from the previous core should remain backed up with that core rather than being treated as interchangeable files."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Why does my NSF file not show a playable game?",
        "answer": "NSF is music data. Test audio rather than expecting a normal game level; use a cartridge or disk image for gameplay."
      },
      {
        "id": "switch",
        "question": "Can I switch a NES game to TetaNES for free?",
        "answer": "Changing emulation cores requires Retropa Plus. Check the target core's format coverage and back up progress first."
      }
    ],
    "related": [
      "nes-emulator",
      "rusticones-core",
      "game-wont-load",
      "plus"
    ]
  },
  "lakesnes-core": {
    "kind": "core",
    "slug": "lakesnes-core",
    "label": "LakeSnes",
    "title": "LakeSnes Core for SNES on iPhone & iPad | Retropa",
    "description": "LakeSnes in Retropa: SNES / Super Famicom formats, cartridge-chip limitations, six-button controls, save backups and Plus core switching.",
    "summary": "LakeSnes is Retropa's SNES-focused core. Its catalog includes several image and copier formats, but file recognition and support for a game's cartridge hardware are separate questions.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "LakeSnes upstream project: https://github.com/dinkc64/LakeSnes. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Keep the image and its header intact",
        "body": "SNES is known as Super Famicom in Japan. Common cartridge images use SFC or SMC extensions; the catalog also lists other copier and related formats. The extension alone does not prove whether a file has a copier header or needs special cartridge hardware. Import the original locally stored image and keep a backup rather than stripping a header as a first troubleshooting step."
      },
      {
        "title": "Check the full controller",
        "body": "After library import, verify the detected system and start with the default layout. SNES adds X, Y, L and R to the two-button handheld pattern. Test shoulder buttons, diagonals and a simultaneous press used by the game; an attractive skin that omits L or R can make a working game appear stuck.",
        "points": [
          "Test Start and Select as well as the six gameplay buttons.",
          "Map a paired controller before judging touch-layout limitations.",
          "Use the original picture to separate input and display issues."
        ]
      },
      {
        "title": "Cartridge-chip and special-format boundaries",
        "body": "Some SNES titles depend on extra cartridge processors or other hardware. The catalog's extension list is not a per-chip compatibility list, and a recognized BS or ST file does not establish that every accessory workflow is exposed in Retropa. If only one title fails, record its hardware requirements when known and the exact error. Do not claim a filter or a renamed extension can add the missing hardware support."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Comparing LakeSnes with JGenesis",
        "body": "JGenesis also lists SNES, but its SNES extension coverage is narrower than LakeSnes's. With Plus, compare only a file format both entries list. Return to the same scene with the same controls and no filter, and keep each core's states separate. A successful comparison for one cartridge does not establish compatibility for every special-chip title."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Can every LakeSnes format also run on JGenesis?",
        "answer": "Do not assume so. Consult each core's catalog entry; system-level formats combine coverage across cores."
      },
      {
        "id": "chips",
        "question": "Does the format list guarantee special-chip compatibility?",
        "answer": "No. File recognition and emulation of cartridge hardware are separate. Check the exact error and the selected core before changing the image."
      }
    ],
    "related": [
      "snes-emulator",
      "jgenesis-core",
      "save-states-and-rewind",
      "plus"
    ]
  },
  "jgenesis-core": {
    "kind": "core",
    "slug": "jgenesis-core",
    "label": "JGenesis",
    "title": "JGenesis Core on iPhone & iPad | Retropa",
    "description": "JGenesis in Retropa: cataloged Sega and Nintendo systems, Genesis / Mega Drive names, format boundaries, system detection and Plus core switching.",
    "summary": "JGenesis serves several systems through one core family in Retropa. The detected system still determines the hardware, controls and save context; sharing a core does not make the files interchangeable.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "JGenesis upstream project: https://github.com/jsgroth/jgenesis. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "NES / Famicom: .nes",
          "SNES / Super Famicom: .sfc, .smc",
          "Sega Master System: .sms",
          "Game Gear: .gg",
          "Mega Drive: .md, .smd",
          "Genesis: .gen"
        ]
      },
      {
        "title": "Genesis and Mega Drive naming",
        "body": "Genesis is the North American name for the console known as Mega Drive in Japan and Europe. Retropa's catalog has entries under both names. File extensions are image-format clues, not reliable region identifiers: a filename alone does not tell you the game's timing or region requirements. Preserve the original file and confirm the detected system rather than renaming it to select a market."
      },
      {
        "title": "Import for the right hardware",
        "body": "Download your image locally in Files and import it through the library. Before starting, distinguish Master System from Game Gear, and NES / Famicom from SNES / Super Famicom. A multi-system core still needs the appropriate hardware path. If the detected system is unexpected, check the file's identity before changing display or controller settings.",
        "points": [
          "Master System and Game Gear are related, not identical systems.",
          "A system-wide format list may include formats from other cores.",
          "The Retropa catalog is the scope here, not every upstream JGenesis feature."
        ]
      },
      {
        "title": "Controls vary with the selected system",
        "body": "For Genesis, test A, B, C and any extra six-button inputs offered by the layout. For Game Gear, confirm Start; for Master System, check the pause input. SNES layouts need shoulder buttons that NES layouts do not. Validate a controller combination in a real game scene before assuming the core has dropped an input."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Sega coverage does not imply an alternate core",
        "body": "Retropa's catalog lists JGenesis as the sole core for its Sega cartridge systems. Plus unlocks switching where alternatives exist; it does not add an unlisted implementation. Nor does upstream multi-system support imply that CD, add-on hardware or every desktop option is available inside Retropa. Use the catalog and actual app prompts to establish the supported path."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Does a .gen extension prove a game is North American?",
        "answer": "No. Genesis and Mega Drive are regional names, but an extension does not reliably establish a game's region or timing requirements."
      },
      {
        "id": "upstream",
        "question": "Does Retropa expose every upstream JGenesis system?",
        "answer": "No such guarantee is made. This page derives its coverage from Retropa's own catalog, not the full upstream feature list."
      }
    ],
    "related": [
      "sega-genesis-emulator",
      "master-system-emulator",
      "game-gear-emulator",
      "lakesnes-core",
      "plus"
    ]
  },
  "ares-core": {
    "kind": "core",
    "slug": "ares-core",
    "label": "Ares",
    "title": "Ares Core on iPhone & iPad | Retropa",
    "description": "Ares in Retropa: cataloged GBA, WonderSwan and Neo Geo Pocket coverage, colour-model detection, rotated layouts, save precautions and Plus core switching.",
    "summary": "Ares covers selected handheld families in Retropa. Its broad upstream identity does not mean every upstream system or accessory is integrated into the app.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "Ares upstream project: https://github.com/ares-emulator/ares. The coverage below comes from Retropa's catalog, not the upstream project's full feature list. A listed extension does not guarantee compatibility with every title. Retropa supplies no games or BIOS files; import only files you are entitled to use.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Match the monochrome or colour model",
        "body": "Import a locally downloaded image and check whether Retropa detected the original WonderSwan or WonderSwan Color, and Neo Geo Pocket or Neo Geo Pocket Color. The colour models have capabilities the monochrome hardware does not. Renaming a file is not a conversion and cannot make a colour-only title run as an original-model game.",
        "points": [
          "Keep the original image and a separate progress backup.",
          "Check the detected model before diagnosing palette problems.",
          "Follow a system-specific firmware prompt if one appears; no BIOS is supplied."
        ]
      },
      {
        "title": "WonderSwan orientation needs more than portrait",
        "body": "WonderSwan games can be designed for horizontal or vertical play. Check the game's expected orientation, both directional-button groups and the available skin layout. Turning the phone to portrait alone does not prove that the emulated screen and all controls have been rotated appropriately. If a layout cannot expose the necessary inputs, use another suitable layout rather than assuming the core can remap them automatically."
      },
      {
        "title": "Pocket is not Neo Geo arcade",
        "body": "Neo Geo Pocket uses handheld images, not the multi-file arcade sets associated with Neo Geo MVS. An arcade BIOS archive cannot substitute for a Pocket image. Test diagonals and both action buttons with the default layout. The original Pocket display is monochrome; only Pocket Color should be expected to show the colour model's graphics. Arcade execution is a separate Plus capability."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Changing the emulation core requires Retropa Plus, even when the handheld system itself is available without a purchase. Compare only cores that cover both the system and the file format. Selection is remembered per game; back up the game's own save and the original core's save states before testing the same scene for sound, picture and input differences.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Where comparison is and is not available",
        "body": "The catalog lists alternatives for Game Boy Advance, but lists only Ares for WonderSwan and Neo Geo Pocket models. Plus core switching does not add another implementation for those systems. Ares also has a much broader upstream scope than this integration; use only the Retropa coverage listed here rather than assuming another upstream system can be enabled by changing an extension."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Can Ares Pocket support run my Neo Geo arcade set?",
        "answer": "No. Pocket and Neo Geo arcade are different hardware families with different file requirements. Arcade execution requires Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Does Plus add another WonderSwan or Pocket core?",
        "answer": "No. Those systems currently list only Ares in Retropa's catalog. Switching applies where a compatible alternative exists."
      }
    ],
    "related": [
      "wonderswan-emulator",
      "neogeo-pocket-emulator",
      "gba-emulator",
      "plus"
    ]
  },
  "delta-alternative": {
    "kind": "compare",
    "slug": "delta-alternative",
    "label": "Delta alternative",
    "title": "Delta Emulator Alternative for iPhone & iPad | Retropa",
    "description": "Looking for a Delta alternative on iPhone and iPad? Compare arcade support, Delta skin import, display filters and console mode, including where Delta is the stronger choice.",
    "summary": "Retropa is an Arcade & handheld emulator for iPhone and iPad that imports Delta skins directly, adds arcade families and non-integer-scaled display filters, and keeps a handheld-first interface.",
    "sections": [
      {
        "title": "What carries over from Delta",
        "body": "Switching emulators is only worth it if your existing setup survives. Retropa imports Delta .deltaskin packages, so a layout you already tuned does not have to be rebuilt from scratch. Check that the package targets the system and orientation you play, then confirm the game view is unobstructed.",
        "points": [
          ".deltaskin packages import directly.",
          "Check the intended system before relying on a skin.",
          "Landscape and portrait support depends on the package."
        ]
      },
      {
        "title": "Where Retropa adds something Delta does not",
        "body": "The clearest difference is arcade support. Retropa runs supported CPS I, CPS II, CPS III, Neo Geo, PGM and M92 arcade families alongside handheld systems, so a single library covers both. Arcade cores require Retropa Plus, and games and BIOS files are not included.",
        "points": [
          "Arcade families in the same library as handhelds.",
          "Retropa Plus is required for arcade cores.",
          "Arcade sets are multi-file and may need a BIOS."
        ]
      },
      {
        "title": "Display filters without an integer scale requirement",
        "body": "Many retro filters assume the game picture maps to a whole number of screen pixels. On a modern iPhone the available area rarely divides evenly, which leaves unused space or uneven scanlines. Retropa's advanced filters work from the actual output area instead, across orientations and skin layouts. The iOS app is the reference; the browser preview on this site is an approximation.",
        "points": [
          "Filters change presentation, not game resolution.",
          "Advanced filters require Retropa Plus.",
          "Conventional scanline overlays can shimmer at fractional scales."
        ]
      },
      {
        "title": "Where Delta is the stronger choice",
        "body": "Delta has a much larger user base, a longer track record on the App Store and a wider community of published skins. If you want the most widely used option, the deepest existing skin catalogue, or the most third-party tutorials, Delta is a reasonable choice and this page is not going to pretend otherwise.",
        "points": [
          "Delta has a larger community and more third-party material.",
          "Delta benefits from network effects around skins.",
          "Retropa is a newer product with a smaller catalogue."
        ]
      },
      {
        "title": "Trying both costs nothing",
        "body": "Both apps are free to download with optional in-app purchases. The practical approach is to import a Delta skin into Retropa, load one handheld game and one arcade set, and decide based on how the controls and the picture actually feel on your device.",
        "points": [
          "Free to download on both sides.",
          "Keep your original files and skins either way.",
          "Judge on your own device, not on a comparison table."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Can Retropa import my existing Delta skins?",
        "answer": "Yes. Retropa imports .deltaskin packages. Keep the original package file and check that it targets the system and orientation you play."
      },
      {
        "id": "free",
        "question": "Is Retropa free?",
        "answer": "Retropa is free to download with optional in-app purchases. Arcade cores, premium skins and advanced filters require Retropa Plus. Prices are shown in the app."
      },
      {
        "id": "roms",
        "question": "Does Retropa include games?",
        "answer": "No. Retropa is an emulator and does not supply games or BIOS files. Import only content you are entitled to use."
      },
      {
        "id": "which-better",
        "question": "Which emulator is better?",
        "answer": "They optimise for different things. Delta has the larger community and skin catalogue; Retropa adds arcade families, non-integer-scaled filters and Delta skin import. Try both on your own device."
      }
    ],
    "attribution": "Delta is a third-party product. All product and company names mentioned on this page are trademarks of their respective owners, and their use here is for identification and factual comparison only. Retropa is not affiliated with, endorsed by, or sponsored by any of them.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa vs Delta",
    "title": "Retropa vs Delta: Arcade, Filters & Skins Compared",
    "description": "A direct comparison of Retropa and Delta on iPhone and iPad: emulated systems, arcade support, skin compatibility, display filters and where each one is the better fit.",
    "summary": "Retropa and Delta are both iOS emulators, but they optimise differently: Delta offers the larger community and skin catalogue, while Retropa adds arcade families and non-integer-scaled display filters.",
    "sections": [
      {
        "title": "Emulated systems",
        "body": "Both apps cover the handheld systems most people want. Retropa additionally runs supported arcade families, which is the single biggest functional difference. Arcade cores require Retropa Plus; handheld systems do not.",
        "points": [
          "Handheld coverage overlaps substantially.",
          "Arcade families are specific to Retropa.",
          "Arcade play requires Plus."
        ]
      },
      {
        "title": "Skins and layouts",
        "body": "Retropa imports Delta .deltaskin packages, so a layout you already use can move across. Beyond that, Delta's published skin ecosystem is larger, which matters if browsing a big catalogue is part of what you want.",
        "points": [
          "Retropa imports .deltaskin packages.",
          "Delta has the larger published catalogue.",
          "Always verify a package supports your system and orientation."
        ]
      },
      {
        "title": "Display filters",
        "body": "Retropa provides advanced CRT and LCD filters that adapt to the actual output area rather than requiring an integer scale factor, and it can use RetroArch shader chains including .slang and .slangp presets. Advanced filters require Plus. The website preview is an approximation; the iOS app is the reference.",
        "points": [
          "No integer-scale requirement for advanced filters.",
          "RetroArch shader chain support is listed for Retropa.",
          "Advanced filters require Plus."
        ]
      },
      {
        "title": "Community, documentation and track record",
        "body": "Delta has been on the App Store longer, has far more users and therefore far more community documentation, forum answers and third-party guides. Retropa is newer and smaller. Anyone claiming otherwise is not describing the current state of either product.",
        "points": [
          "Delta has the longer App Store history.",
          "Delta has more community answers available.",
          "Retropa has the smaller user base today."
        ]
      },
      {
        "title": "How to choose",
        "body": "If arcade titles matter to you, or you want display filters that do not assume a whole-number scale, Retropa is worth installing. If you want the largest skin catalogue and the most community material, Delta is the safer pick. Both are free to download, so the honest advice is to test both with your own files.",
        "points": [
          "Free to download on both sides.",
          "No commitment required to evaluate either.",
          "Both require you to supply your own game files."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Does Delta support arcade games?",
        "answer": "That comparison is not something this page can verify. What this page can state is that Retropa runs supported CPS, Neo Geo, PGM and M92 arcade families, and that arcade cores require Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Can I use the same skins in both?",
        "answer": "Retropa imports Delta .deltaskin packages, so a package that works in Delta can generally be imported into Retropa. Check the target system and orientation after importing."
      },
      {
        "id": "price",
        "question": "How much do they cost?",
        "answer": "Retropa is free to download with optional in-app purchases. Retropa Plus is required for arcade cores, premium skins and advanced filters. Current prices are shown inside the app."
      }
    ],
    "attribution": "Delta is a third-party product. All product and company names mentioned on this page are trademarks of their respective owners, and their use here is for identification and factual comparison only. Retropa is not affiliated with, endorsed by, or sponsored by any of them.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Import games",
    "title": "How to Import Games in Retropa on iPhone & iPad",
    "description": "Import your own game files into Retropa on iPhone and iPad: where the import entry lives, why a cloud placeholder fails, which formats work and what to do when a file is rejected.",
    "summary": "A step-by-step walkthrough of importing your own game files into Retropa, including the file formats that work, how ZIP containers behave and how to recover from a failed import.",
    "sections": [
      {
        "title": "Before you start",
        "body": "Retropa does not include games or BIOS files. You need a game file you are entitled to use, stored on the device itself. Keep an untouched copy outside the app so that a mistake during import never costs you the original.",
        "points": [
          "Only import content you have the right to use.",
          "Keep a separate backup of every original file.",
          "The app is free to download; games are not provided."
        ]
      },
      {
        "title": "Step one: get the file onto the device",
        "body": "Download the file so it lives in local storage, not as a cloud placeholder. This is the most common cause of a failed import: the Files app shows the item, but the bytes are not on the device yet, so the emulator receives nothing usable.",
        "points": [
          "Open the file once in Files to confirm it is downloaded.",
          "A file that appears greyed out or needs downloading is a placeholder.",
          "Complete the download before importing."
        ]
      },
      {
        "title": "Step two: import from the library",
        "body": "Open the import entry in the Retropa library and select the file. Check that the system is detected correctly, then launch the game with the default layout before changing skins or filters, so that any later problem has an obvious cause."
      },
      {
        "title": "Which file formats work",
        "body": "Retropa accepts the file formats that match its supported systems, and it can also open ZIP and RetroPack containers directly. The extension has to match the system: a Game Boy file is .gb, Game Boy Color is .gbc, Game Boy Advance is .gba, and DS is .nds.",
        "points": [
          "Changing an extension does not convert a game between systems.",
          "ZIP and RetroPack containers can be opened without unpacking.",
          "Arcade sets are multi-file and are handled differently."
        ]
      },
      {
        "title": "When an import fails",
        "body": "Read the exact error first, then check three things in order: whether the file is fully downloaded, whether the extension matches the system, and whether the file is a clean image rather than a partial download. Only after those checks is it worth suspecting the emulator core.",
        "points": [
          "Finish any incomplete download first.",
          "Confirm the extension matches the system.",
          "Try the alternate core for that system before giving up."
        ]
      },
      {
        "title": "Files, saves and save states",
        "body": "Your game file, the game's own save data, and an emulator save state are three different things. Renaming one into another does not convert it. Back up all three before moving between cores or apps, because state formats are not portable across every core.",
        "points": [
          "Keep the original game file untouched.",
          "Back up battery saves and save states separately.",
          "Do not expect a state from one core to load in another."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Does Retropa come with games?",
        "answer": "No. Retropa is an emulator and does not provide games or BIOS files. You import files you are entitled to use."
      },
      {
        "id": "cloud",
        "question": "Why does my file not import?",
        "answer": "The most common cause is a cloud placeholder rather than a downloaded file. Open it in Files to force a download, then import it again."
      },
      {
        "id": "zip",
        "question": "Can I import a ZIP file?",
        "answer": "Retropa can open ZIP and RetroPack containers directly, so unpacking is usually unnecessary unless a specific import flow asks for it."
      }
    ],
    "related": [
      "connect-controller-ios",
      "save-states-and-rewind",
      "game-wont-load"
    ]
  },
  "connect-controller-ios": {
    "kind": "guide",
    "slug": "connect-controller-ios",
    "label": "Controllers",
    "title": "Connect a Controller to Retropa on iPhone & iPad",
    "description": "Pair a Bluetooth or wired controller with iOS and map it inside Retropa, plus how to diagnose buttons that do not register or mappings that change per game.",
    "summary": "Pair a compatible controller with iOS first, then verify the mapping inside Retropa per system and per game. This guide covers pairing order, common mapping mistakes and touch-plus-controller setups.",
    "sections": [
      {
        "title": "Pair with iOS before opening Retropa",
        "body": "The controller has to be known to iOS first. Pair it in the system settings, confirm it responds there, and only then open Retropa. A controller that was never paired at the system level will not appear inside the app, no matter what you do in its settings.",
        "points": [
          "Pair in iOS settings first.",
          "Confirm the controller responds in the system.",
          "Then check it inside Retropa."
        ]
      },
      {
        "title": "Mapping is checked per system, not once globally",
        "body": "Retropa keeps control layouts per system, because a Game Boy needs six inputs while a SNES pad needs ten. Treat mapping as per-system work: after pairing once, verify the assignment for each system you actually play.",
        "points": [
          "Game Boy: d-pad, A, B, Start, Select.",
          "SNES adds X, Y, L and R.",
          "Arcade layouts add several action buttons."
        ]
      },
      {
        "title": "The buttons people forget to test",
        "body": "In practice, failures cluster around the same inputs: shoulder buttons on six-button pads, Start and Select which are easy to place out of reach, and diagonals, which matter more on systems whose original controller used a microswitch stick.",
        "points": [
          "Test L and R explicitly when mapping.",
          "Check Start and Select are reachable.",
          "Test diagonals, not only the four cardinal directions."
        ]
      },
      {
        "title": "Touch controls and a controller can coexist",
        "body": "Some games need a touch interaction that a physical pad cannot replace, particularly on dual-screen systems. Keeping the on-screen layout available alongside a paired controller is usually more practical than switching between them.",
        "points": [
          "Do not disable touch controls if a game uses the touch screen.",
          "Check that overlays do not cover the game view.",
          "Haptics and touch layout can be tuned separately."
        ]
      },
      {
        "title": "When a button does not register",
        "body": "Work outward from the controller: confirm it responds in iOS, then in Retropa, then in a game that definitely uses that button. If the mapping looks correct but a game ignores an input, the game may not use that input at all, which is common on early handheld titles.",
        "points": [
          "Verify the controller in iOS settings first.",
          "Check the mapping inside Retropa.",
          "Confirm the game actually uses that button."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Which controllers work?",
        "answer": "Controllers that iOS supports can be used with Retropa. Pair them in iOS settings first, then check the mapping inside the app."
      },
      {
        "id": "mapping-lost",
        "question": "Why did my mapping change?",
        "answer": "Layouts are kept per system and per game, so a mapping you set for one system does not automatically apply to another. Check the mapping for the system you are currently playing."
      },
      {
        "id": "touch",
        "question": "Do touch controls stop working with a controller?",
        "answer": "No. Touch controls remain available, which is useful on systems where a game needs a touch or second-screen interaction."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "gb-emulator"
    ]
  },
  "save-states-and-rewind": {
    "kind": "guide",
    "slug": "save-states-and-rewind",
    "label": "Saves",
    "title": "Save States and Rewind in Retropa | iPhone & iPad",
    "description": "Understand the difference between in-game saves, save states and rewind in Retropa, how to move saves between cores safely, and what to check when a save will not load.",
    "summary": "In-game saves, emulator save states and rewind are three different mechanisms with different portability. This guide explains what each one does and how to back them up safely.",
    "sections": [
      {
        "title": "Three different things called a save",
        "body": "A game's own save is written by the game itself, a save state captures the whole emulator at an instant, and rewind replays recent history. They behave differently, they are stored differently, and renaming one into another does not convert it.",
        "points": [
          "In-game saves are created by the game.",
          "Save states capture the entire emulator moment.",
          "Rewind depends on recent history, not a stored file."
        ]
      },
      {
        "title": "Creating and using a save state",
        "body": "A save state is useful before a difficult section, before changing a core, or before applying a new filter, because it lets you return to a known-good moment. Quick save and quick load are intended for exactly that kind of short-term checkpoint.",
        "points": [
          "Take a state before changing cores.",
          "States are the fastest way to compare two presets.",
          "Keep the game's own save as the long-term record."
        ]
      },
      {
        "title": "Moving a save between cores",
        "body": "Save states are not portable across every core, because a state records the internal condition of one specific implementation. Battery saves, written by the game, are far more likely to move successfully. Back up both before changing the selected core.",
        "points": [
          "Expect states to be core-specific.",
          "Battery saves transfer more reliably.",
          "Back up before switching cores."
        ]
      },
      {
        "title": "When a save will not load",
        "body": "Check whether the save is in-game data or a state, whether the core changed since it was written, and whether the app version changed. If a state fails, load the game's own save instead, because that path does not depend on the emulator's internal state format.",
        "points": [
          "Confirm the core has not changed.",
          "Confirm the save type.",
          "Fall back to the game's own save where possible."
        ]
      },
      {
        "title": "Keeping backups that survive",
        "body": "Keep the original game file, the game's own save, and any save states you care about in separate places. iCloud or a desktop copy is fine; what matters is that one failure in the app or on the device does not remove every copy at once.",
        "points": [
          "Back up the game file itself, not only the saves.",
          "Keep saves separate from state files.",
          "Store at least one copy outside the device."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "What is the difference between a save and a save state?",
        "answer": "A save is written by the game and represents progress in the game's own format. A save state captures the entire emulator at one moment and is specific to the core that produced it."
      },
      {
        "id": "rewind",
        "question": "How far can I rewind?",
        "answer": "Rewind replays recent history from memory rather than restoring a stored file, so its depth is limited by the buffer rather than by a fixed number of saved slots."
      },
      {
        "id": "transfer",
        "question": "Can I move a save to another emulator?",
        "answer": "The game's own save is the more portable artifact. Save states depend on the internal format of a specific core and should not be expected to load elsewhere."
      }
    ],
    "related": [
      "import-roms-iphone",
      "game-wont-load",
      "gb-emulator"
    ]
  },
  "game-wont-load": {
    "kind": "guide",
    "slug": "game-wont-load",
    "label": "Troubleshooting",
    "title": "Game Will Not Load in Retropa? What to Check",
    "description": "A diagnostic order for a game that will not start in Retropa: incomplete downloads, wrong extension, wrong detected system, missing BIOS, unsupported mapper and core-specific issues.",
    "summary": "Work through a fixed order of checks — download completeness, extension, detected system, BIOS requirement, then core choice — before concluding that a file is unusable.",
    "sections": [
      {
        "title": "Follow a fixed order, not a guess",
        "body": "Most load failures come from a small number of causes, and checking them in a consistent order avoids wasting time. The order below moves from the cheapest check to the most expensive, so you stop as soon as you find the real cause.",
        "points": [
          "Download completeness first.",
          "Then extension and detected system.",
          "Then BIOS and core choice."
        ]
      },
      {
        "title": "Check one: is the file really on the device?",
        "body": "If the file is a cloud placeholder, the emulator receives nothing usable even though the file appears in the library. Open it in the Files app to force the download, wait for it to finish, then import again.",
        "points": [
          "A greyed or pending item is not downloaded.",
          "Complete the download before retrying.",
          "This is the single most common cause."
        ]
      },
      {
        "title": "Check two: does the extension match the system?",
        "body": "Each system has its own extension, and a mismatch produces a file the core cannot interpret. Renaming an extension does not convert anything, so a .gb file renamed to .gba is still a Game Boy game and will not behave like a Game Boy Advance title.",
        "points": [
          ".gb, .gbc, .gba and .nds are different systems.",
          "Renaming never converts a game.",
          "Confirm the detected system in the library."
        ]
      },
      {
        "title": "Check three: is a BIOS or a parent set missing?",
        "body": "Some systems and arcade families need an additional BIOS file, and arcade sets may depend on a parent set. The core reports what is missing; read that message precisely, because a missing BIOS and a missing parent are different problems with different fixes.",
        "points": [
          "Read the exact error text.",
          "An arcade neogeo.zip is not a handheld BIOS.",
          "Retropa does not provide BIOS downloads."
        ]
      },
      {
        "title": "Check four: try the other core",
        "body": "Several systems have more than one core available. If a file is complete, correctly named and has no missing dependency, switching cores is the next test, because cores differ in how strictly they emulate the original hardware.",
        "points": [
          "Note which core failed.",
          "Switch the core and retry once.",
          "Compare with a second game on the same core."
        ]
      },
      {
        "title": "What to include in a support request",
        "body": "If a game still will not start, the useful information is the app version, the system, the selected core and the exact error text. Do not attach commercial game or BIOS files, because that is not needed to diagnose the problem and should not be shared.",
        "points": [
          "App version and system.",
          "Selected core and error text.",
          "Never attach commercial ROM or BIOS files."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "The game opens to a black screen. What does that mean?",
        "answer": "Usually an incomplete download, an unsupported file variant or a missing dependency such as a BIOS. Check the download first, then the extension, then the exact error the core reports."
      },
      {
        "id": "worked-before",
        "question": "A game worked before and now does not. Why?",
        "answer": "Check whether the app version, the selected core or the file location changed. Save states are core-specific, so a state written by a different core may fail to load even though the game itself still works."
      },
      {
        "id": "support",
        "question": "What should I send with a support request?",
        "answer": "The app version, the system, the selected core and the exact error text. Do not attach commercial game or BIOS files."
      }
    ],
    "related": [
      "import-roms-iphone",
      "save-states-and-rewind",
      "arcade"
    ]
  },
  "plus": {
    "kind": "capability",
    "slug": "plus",
    "label": "Retropa Plus",
    "title": "Retropa Plus: What Is Free and What Requires Plus",
    "description": "Which Retropa features are free and which require Retropa Plus: handheld systems, arcade families, premium skins, advanced filters and console mode. Current pricing is shown in the app.",
    "summary": "Retropa is free to download. Handheld emulation is available without paying; arcade families, premium skins and advanced display filters are part of Retropa Plus. Current pricing and available plans are shown inside the app.",
    "sections": [
      {
        "title": "What is available for free",
        "body": "Downloading Retropa costs nothing, and handheld emulation works without a purchase. You can import your own game files, use the standard skins, use conventional display presets, and set up save states and controller mapping. Nothing about importing a file triggers a payment.",
        "points": [
          "Free download.",
          "Handheld systems available without a purchase.",
          "Standard skins and conventional display presets included.",
          "Importing a game never unlocks or requires a paid feature."
        ]
      },
      {
        "title": "What requires Retropa Plus",
        "body": "Retropa Plus covers the arcade families, the premium skins and the advanced display filters. These are additive capabilities rather than restrictions on what you already had: handheld play continues to work whether or not you subscribe.",
        "points": [
          "Arcade families: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Premium skins.",
          "Advanced CRT and LCD filters.",
          "Console mode and advanced save workflows."
        ]
      },
      {
        "title": "Why arcade support is part of Plus",
        "body": "Arcade emulation is a distinct body of work: multiple boards, multi-file sets, BIOS dependencies and per-set compatibility. Treating it as an additional capability keeps the free tier simple and keeps the handheld experience available to everyone at no cost.",
        "points": [
          "Arcade hardware is not handheld hardware.",
          "Arcade sets are multi-file and may need a BIOS.",
          "Handheld support does not depend on Plus."
        ]
      },
      {
        "title": "Games and BIOS files are never included",
        "body": "No tier of Retropa provides game files or BIOS files, because the app is an emulator. You supply content you are entitled to use, and that requirement does not change with a purchase. A subscription unlocks emulator capabilities, not content.",
        "points": [
          "No games are bundled in any tier.",
          "No BIOS files are provided.",
          "Import only content you have the right to use."
        ]
      },
      {
        "title": "Where to see current pricing",
        "body": "Prices, available plans and any regional offers are shown inside the app, where the App Store can present them in your local currency. This page intentionally does not list prices, so that a pricing change never makes this page out of date.",
        "points": [
          "Pricing is displayed in the app.",
          "Availability can differ by region.",
          "Purchases are handled by the App Store."
        ]
      },
      {
        "title": "Purchases are handled by the App Store",
        "body": "All purchases and subscriptions run through the App Store. Retropa does not process payments on the web, and this website never asks for card details. Renewals, cancellations and refunds are managed by the App Store under its own terms.",
        "points": [
          "No payment is collected on this website.",
          "Manage or cancel a subscription in App Store settings.",
          "Refunds follow App Store policy."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Can I use Retropa without paying?",
        "answer": "Yes. Downloading Retropa is free and handheld emulation works without a purchase. Arcade families, premium skins and advanced filters require Retropa Plus."
      },
      {
        "id": "price",
        "question": "How much does Retropa Plus cost?",
        "answer": "Prices and available plans are shown inside the app, where the App Store can present them in your local currency. This page does not list prices so that pricing changes never make it out of date."
      },
      {
        "id": "buy-here",
        "question": "Can I subscribe on this website?",
        "answer": "No. Purchases are handled entirely through the App Store. This website never collects payment details."
      },
      {
        "id": "content",
        "question": "Does Plus include games?",
        "answer": "No. No tier of Retropa provides game or BIOS files. You import content you are entitled to use."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
