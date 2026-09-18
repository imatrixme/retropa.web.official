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
    "description": "Retropa runs the .gb files you own on iPhone and iPad. Here is which core handles Game Boy, how to import a game, how to set up the screen and controls, and what to check when a file refuses to open.",
    "summary": "Play your own .gb files on iPhone and iPad. Four cores to pick from, handheld skins, LCD and CRT looks, and controller mapping.",
    "sections": [
      {
        "title": "Start with a .gb file",
        "body": "Everything starts with a game file you already own. Retropa does not ship games or BIOS files, so have the .gb ready before you open the app and keep an untouched copy somewhere outside it.",
        "points": [
          "A .gb file is a Game Boy game; .gbc means Game Boy Color.",
          "Renaming an extension does not turn a game into a different system.",
          "Hold on to the original archive until the game runs properly."
        ]
      },
      {
        "title": "Which core runs Game Boy games",
        "body": "Retropa ships four cores that can start a Game Boy title, and the choice is yours per game. mGBA and SkyEmu cover GB, GBC and GBA; SameBoy concentrates on GB and GBC; JGenesis handles GB next to its Sega systems. mGBA is the default, so most people never need to touch it. If one core stumbles on a title, try another before blaming the file.",
        "points": [
          "mGBA is the default and a safe daily pick.",
          "SameBoy is built around GB and GBC accuracy.",
          "Your core choice sticks per game."
        ]
      },
      {
        "title": "Import the game from Files",
        "body": "In a list, a cloud placeholder is indistinguishable from a real file, yet the import fails until the bytes are actually local. Pick the file from the import entry in the Retropa library, then open it. Confirm picture, sound and the default on-screen controls before you start customizing anything."
      },
      {
        "title": "Choose a layout that fits the original screen",
        "body": "Game Boy games want a directional pad, A and B, and Start and Select. In portrait the screen sits above the controls, which works for one-handed play; landscape gives your thumbs more room. Whichever way you hold the device, make sure the skin leaves the game view clear and all six inputs are easy to reach.",
        "points": [
          "Test each button, not just how the skin looks.",
          "Delta .deltaskin packages import fine, but a DS or GBA skin is not a GB layout.",
          "Premium skins and advanced filters sit behind Retropa Plus."
        ]
      },
      {
        "title": "Green screen, LCD grid or clean pixels",
        "body": "Start from the untouched picture, so you have something honest to compare against. A DMG preset recalls the four-tone reflective LCD of the original handheld; an LCD Grid lays a subpixel structure over it; a CRT treatment takes the image somewhere else entirely. Retropa's advanced filters work from the real output area instead of demanding an integer scale factor, so proportions hold on any iPhone or iPad.",
        "points": [
          "A filter changes how the picture looks, not the game's resolution.",
          "No filter will rescue a file the core cannot run.",
          "Compare with the original picture before you keep a preset."
        ]
      },
      {
        "title": "When a Game Boy import or save fails",
        "body": "Before changing anything else, note the extension, the system you selected and the exact error text. If Files is still fetching the original, let that finish, then import again. A game's own save data is not the same as an emulator save state; never rename one into the other, and back up before you move a save between cores or apps.",
        "points": [
          "Note the app version, system, core and error text for support.",
          "Never attach commercial ROM or BIOS files to a support request.",
          "Return to the default skin and a plain filter while you isolate a problem."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Does Retropa come with Game Boy games?",
        "answer": "No. Retropa is an emulator, and it ships no games or BIOS files. You bring files you have the right to use, and nothing else."
      },
      {
        "id": "bios-needed",
        "question": "Do GB games need a BIOS file?",
        "answer": "GB and GBC titles usually run fine without one in the cores Retropa ships. If a core asks for a BIOS, follow the prompt it shows for that core instead of importing some unrelated file."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Can Retropa open a .gbc file as a Game Boy game?",
        "answer": "A .gbc file belongs to Game Boy Color, so Retropa opens it on that system. Renaming the extension does not change what is inside the file."
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
    "description": "Play your own .gbc games on iPhone and iPad. Color handling, GBC-only titles, core choice, import steps and the checks to run when a Game Boy Color game will not start.",
    "summary": "Play Game Boy Color games from the .gbc files you own, with palette handling, a core choice per game and display treatments made for the original reflective screen.",
    "sections": [
      {
        "title": "Prepare a .gbc file",
        "body": "Game Boy Color titles carry the .gbc extension. Retropa includes no games and no BIOS files, so gather the file yourself, stash a separate backup, and import only what you are entitled to use.",
        "points": [
          "A .gbc file is a Game Boy Color game.",
          "Original Game Boy games use .gb and play on Retropa too.",
          "Do not rename a .gb file to .gbc to force color."
        ]
      },
      {
        "title": "Core choice for Game Boy Color",
        "body": "SameBoy is the core built for GB and GBC, though mGBA and SkyEmu also run Game Boy Color titles. Wrong colors or odd timing usually mean it is worth trying a different core, since each one models the hardware a little differently.",
        "points": [
          "SameBoy is a sensible first stop for GBC titles.",
          "mGBA handles GB, GBC and GBA in a single core.",
          "The app stores your core selection per game."
        ]
      },
      {
        "title": "Import and first launch",
        "body": "Download the game to local storage first, or Files will keep handing you a placeholder. Then choose it from the import entry in the Retropa library. Check color, sound and the default touch layout before adding skins or filters, so a later problem is easy to trace back.",
        "points": [
          "Test a scene that leans on color, not just a title screen.",
          "Listen to the audio as carefully as you watch the picture.",
          "Leave the original file untouched while you diagnose."
        ]
      },
      {
        "title": "Picture and layout for a color handheld",
        "body": "That little screen was reflective, and it was never very bright. An LCD Grid preset adds a subpixel structure that suits it; a DMG preset instead brings back the older monochrome panel. Retropa's advanced filters measure the real output area rather than a fixed integer multiple, so proportions stay put on every device size.",
        "points": [
          "Judge each preset next to the original picture.",
          "Advanced filters need Retropa Plus.",
          "Make sure the skin does not cover the game view."
        ]
      },
      {
        "title": "Controls and orientation",
        "body": "The layout you need is simple: a directional pad, A and B, Start and Select. Portrait works for quick sessions; landscape spreads the buttons out and often feels better on a big iPhone. Check every input in the orientation you actually use."
      },
      {
        "title": "When a Game Boy Color game will not start",
        "body": "The error text is the place to start, then confirm the extension and the system you picked. If the region or palette looks off, compare cores before you fiddle with settings. Saves written by one core may not load in another, so back up before you switch.",
        "points": [
          "Write down the app version, system, core and the error message.",
          "Never send commercial ROM or BIOS files to support.",
          "Go back to the default skin and a plain filter to isolate a problem."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Does Retropa include Game Boy Color games?",
        "answer": "No. Retropa is an emulator; it supplies no games or BIOS files. Import only files you have the right to use."
      },
      {
        "id": "gb-on-gbc",
        "question": "Can I play original Game Boy games as well?",
        "answer": "Yes. Original Game Boy .gb files run on the same cores that handle Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Will renaming a .gb file to .gbc add color?",
        "answer": "No. The extension says nothing about what is inside the file, and renaming it will not switch on Game Boy Color features."
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
    "description": "Run your own NES games on iPhone and iPad. The formats it opens, including .nes, .fds and .nsf, plus core choice, import steps, controller mapping and troubleshooting.",
    "summary": "Retropa runs NES games from the files you own, covering .nes, .fds and NSF audio, with three cores to choose from, gamepad mapping and CRT treatments.",
    "sections": [
      {
        "title": "File formats Retropa accepts for NES",
        "body": "Retropa does not stop at one extension for NES. The cores also take Famicom Disk System images and NSF sound files, and they handle both the plain and unified iNES container variants alongside the usual .nes cartridge image.",
        "points": [
          "A .nes file is the standard NES cartridge image.",
          "Famicom Disk System content uses .fds.",
          "The .nsf and .nsfe formats hold sound data, not a playable game.",
          "You can import ZIP and RetroPack containers and open them where they sit."
        ]
      },
      {
        "title": "Which NES core to run",
        "body": "Three cores can start a NES title here: RusticoNES, TetaNES and JGenesis. RusticoNES is the default path, and testing a second core is the fastest way to tell a fussy ROM from a real emulation difference. Your pick is remembered per game.",
        "points": [
          "RusticoNES is the default and a steady pick for cartridge games.",
          "Reach for TetaNES when a game misbehaves.",
          "NSF audio behaves differently from a game, whichever core you use."
        ]
      },
      {
        "title": "Import a NES game",
        "body": "Get the file onto the device first; a cloud-only entry in Files will not import. Open the library's import entry, pick the game, and launch it with the default layout. Check picture, audio and the stock buttons before you touch skins or filters."
      },
      {
        "title": "Handling a two-button controller",
        "body": "There is not much to an NES pad: a directional pad, A, B, Start and Select. On glass, the urge is to bunch the buttons together, so test that diagonals still register and that you are not catching Start or Select mid-game. A paired physical controller sidesteps most of it.",
        "points": [
          "Pair the controller in iOS, then check how Retropa maps it.",
          "Test diagonals, not only the four cardinal directions.",
          "If you switch orientations, test both."
        ]
      },
      {
        "title": "Getting the picture right",
        "body": "These titles were authored for a standard-definition television, which is why a CRT treatment often reads truer than a clean pixel grid. Scanline and aperture-grille presets are on hand, and Retropa's advanced filters follow the real output area instead of a fixed integer multiple.",
        "points": [
          "Keep the original picture around as your reference.",
          "Plain scanline overlays can shimmer when the scale is not a whole number.",
          "The advanced filters are a Retropa Plus feature."
        ]
      },
      {
        "title": "When a NES game will not load",
        "body": "Read the error text before touching any setting. A bad dump, an unsupported mapper, a headerless image and a disk game with no BIOS are four separate problems. Confirm the extension and the selected system, then run the game on another NES core.",
        "points": [
          "Note the app version, the core and the full error text for support.",
          "Leave the original file alone while you work out what went wrong.",
          "Do not attach commercial ROM or BIOS files to a support ticket."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Which NES file formats does Retropa open?",
        "answer": "It opens .nes, .fds, .nsf, .nsfe, .unf and .unif files, plus ZIP and RetroPack containers directly."
      },
      {
        "id": "nsf",
        "question": "Can I play an .nsf file as a game?",
        "answer": "No. An NSF file is sound data, so you get audio instead of a game. Use a .nes or .fds file to actually play something."
      },
      {
        "id": "gamepad",
        "question": "Will a physical controller work with NES games?",
        "answer": "Yes. Pair a compatible controller with iOS and map it inside Retropa. Check the mapping afterward, because the button order is rarely what you expect."
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
    "description": "Play your own SNES games on iPhone and iPad. Retropa reads .sfc and .smc files on the LakeSnes core, maps all six buttons and covers the usual troubleshooting when a game refuses to start.",
    "summary": "Retropa plays the SNES games you already own, straight from .sfc and .smc files. LakeSnes handles the emulation, six-button pads are fully mapped, and save states plus CRT-style filters are built in.",
    "sections": [
      {
        "title": "SNES file formats",
        "body": "Most Super Nintendo images arrive as .sfc or .smc, and those two extensions cover nearly everything you will import. Retropa also opens .fig, .swc, .bs and .st, plus ZIP and RetroPack containers. When a game refuses to boot, check the extension first, because a header that does not match the file is a frequent culprit.",
        "points": [
          "Both .sfc and .smc work with no conversion.",
          "Retropa reads .fig, .swc, .bs and .st as well.",
          "You can open ZIP and RetroPack archives without unpacking them first."
        ]
      },
      {
        "title": "The LakeSnes core",
        "body": "LakeSnes is the default SNES core, and it is what you get unless you deliberately switch. JGenesis is the other option, though its SNES extension list is shorter. If one title shows timing or graphics trouble, rule out a bad dump before blaming the core, and check the release notes for your app version.",
        "points": [
          "LakeSnes is the default runtime for SNES games.",
          "A few cartridges carried extra coprocessor chips.",
          "Retropa remembers your core choice for each game."
        ]
      },
      {
        "title": "Import and first run",
        "body": "Copy the file onto the device instead of leaving a cloud placeholder behind. A placeholder looks like a real file in a list, but the import fails until the bytes are actually local. Pick it from the import entry, launch once, and confirm picture, sound and touch controls before you touch any presentation setting."
      },
      {
        "title": "Six buttons need real space",
        "body": "The SNES pad adds X, Y, L and R to the directional pad, A, B, Start and Select, and plenty of games want two of those at once. Lay the touch layout out in landscape and test each combination by hand. For action titles, a paired physical controller will beat glass every time.",
        "points": [
          "Map L and R, the two buttons people forget.",
          "Try a diagonal and a shoulder press together.",
          "Make sure the skin does not sit over the picture."
        ]
      },
      {
        "title": "Choosing a display treatment",
        "body": "SNES art was drawn for a CRT, so a scanline or aperture-grille preset generally lands closer to the original than a bare pixel grid. The advanced filters scale to the real output area rather than a whole-number multiple, which matters on a phone whose screen height rarely divides evenly.",
        "points": [
          "Judge every preset against the unfiltered picture.",
          "Cheap scanline overlays shimmer at fractional scales.",
          "Advanced filters sit behind Retropa Plus."
        ]
      },
      {
        "title": "When a SNES game will not start",
        "body": "Look at three things in order: the extension, the system Retropa detected, and the exact wording of the error. Titles built around a special cartridge chip are the usual suspects when one game dies and the rest run fine. Leave the original file untouched while you test, and try the alternate core as a second opinion.",
        "points": [
          "Note the app version, the core and the error text before you write in.",
          "No filter will rescue a cartridge-chip mismatch.",
          "Never attach commercial ROM or BIOS files to a support request."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Does it matter whether a file is .sfc or .smc?",
        "answer": "No. Both are standard SNES images and Retropa takes either one. The extension on its own does not change the game."
      },
      {
        "id": "chip-games",
        "question": "Why does a single game fail when the rest run?",
        "answer": "A handful of titles need extra hardware inside the cartridge. If your file is a clean dump and other games boot, that dependency is the likely cause. Switching cores is the next thing to try."
      },
      {
        "id": "saves",
        "question": "Can I move save states between cores?",
        "answer": "Not reliably. A battery save and a save state are different artifacts, and a state written by one core may not load in another. Keep a backup before you switch."
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
    "description": "Play the Sega Genesis and Mega Drive games you own on iPhone and iPad. Retropa reads .md, .smd and .gen files on the JGenesis core, maps both three- and six-button pads, and walks through the common fixes when a title will not start.",
    "summary": "Retropa runs Genesis and Mega Drive cartridges from files you supply. JGenesis does the emulation, six-button pads are covered, and save states and CRT-style filters come standard.",
    "sections": [
      {
        "title": "Genesis and Mega Drive are the same system",
        "body": "The console left Japan as Mega Drive and reached North America as Genesis; Europe and most of Asia kept the Mega Drive name. Same chips inside, so a game file cares about none of this. Retropa lists both names, and the extensions you see vary a little by region.",
        "points": [
          "Mega Drive dumps usually carry .md or .smd.",
          "North American rips often use .gen.",
          "The extension is a label, not a hardware switch."
        ]
      },
      {
        "title": "The JGenesis core",
        "body": "JGenesis is the one core behind Genesis and Mega Drive here, and it also drives Master System, Game Gear and a few other Sega handhelds. That breadth is handy, but it makes the detected system per game important: import a Master System title with the system still set to Genesis and the result is confusing at best.",
        "points": [
          "JGenesis covers MD, GEN, SMS and GG.",
          "Check the detected system before you file a bug report.",
          "Both the core and the system stick to the game they were set for."
        ]
      },
      {
        "title": "Import a Mega Drive game",
        "body": "Store the ROM locally; a cloud placeholder will look right in the browser and then fail at import. Choose it from the library's import entry, start the game once, and check picture, sound and the stock touch layout before adding a skin or a filter."
      },
      {
        "title": "Mapping a six-button pad",
        "body": "Sega shipped three-button and six-button pads, and a few games quietly change how they play depending on which one they think is attached. In the touch layout, make sure A, B, C and, where the game offers them, X, Y, Z and Mode are all within reach. Then try a button pair the game actually asks for.",
        "points": [
          "Set up both the three-button and six-button layouts.",
          "Start doubles as pause in many titles, so keep it reachable.",
          "A paired controller removes most mis-press trouble."
        ]
      },
      {
        "title": "Display treatment for a 16-bit console",
        "body": "Mega Drive output was built for a CRT, so scanlines or an aperture grille usually read truer than a raw pixel grid, especially on the dithering that a TV would have smoothed into a new shade. Advanced filters here work from the actual output area rather than a fixed integer multiple.",
        "points": [
          "Compare each preset against the plain picture.",
          "Heavy dithering is a good stress test for any preset.",
          "The advanced filter set needs Retropa Plus."
        ]
      },
      {
        "title": "When a Genesis game will not start",
        "body": "Work through the extension, the system shown for that game and then the error text itself. Region and system mix-ups happen more often on this core than on single-platform setups, precisely because it serves several consoles. Leave the original file alone and fix the detected system before changing anything deeper.",
        "points": [
          "Jot down the app version, detected system, core and error.",
          "Support does not need your ROMs or any BIOS file attached.",
          "Back up saves separately before you move them across cores."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Is Mega Drive just another name for Genesis?",
        "answer": "Yes. One console, two regional names, and a game file runs under either."
      },
      {
        "id": "six-button",
        "question": "Can I use a six-button controller?",
        "answer": "The touch layout and external controller mapping both cover the extra buttons. Note that some games switch their control scheme based on which pad they detect."
      },
      {
        "id": "system-detect",
        "question": "Why does Retropa think my game belongs to another system?",
        "answer": "A single core handles several Sega platforms here. Look at the detected system for that game and set it correctly before you report a compatibility problem."
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
    "description": "Play your own .gg Game Gear games on iPhone and iPad. This page covers the core that runs them, how to import a file, how to set up that small screen and what to check when a game will not start.",
    "summary": "Retropa runs Game Gear games from your own .gg files on the JGenesis core. You get a backlit-panel look, handheld skins and full control mapping.",
    "sections": [
      {
        "title": "Prepare a .gg file",
        "body": "Game Gear titles ship as .gg files. Retropa carries no games and no BIOS files, so bring your own copy and keep a second one outside the app before you import anything.",
        "points": [
          "A .gg file is a Game Gear game.",
          "A .sms file belongs to the Master System instead.",
          "Renaming one to the other does not make it run."
        ]
      },
      {
        "title": "Which core handles Game Gear",
        "body": "JGenesis handles this one, the same core that runs Mega Drive, Genesis and Master System. Because that single core serves several Sega machines, confirm the game is detected as Game Gear before you go hunting for a compatibility bug."
      },
      {
        "title": "Import and first launch",
        "body": "For Game Gear, save the file to the device first, then pick it from the library import entry. Launch it once and confirm picture, sound and the stock controls before layering on a skin. Otherwise a display bug can come from anywhere."
      },
      {
        "title": "A small backlit screen",
        "body": "The Game Gear's panel was small and lit from behind, so an LCD Grid preset usually suits it better than a heavy CRT look, which reads much darker than the real handheld ever did. The advanced filters fit the actual output area instead of demanding an integer multiple.",
        "points": [
          "Hold each preset up against the plain picture.",
          "Advanced filters come with Retropa Plus.",
          "Keep the skin clear of the picture itself."
        ]
      },
      {
        "title": "Controls and orientation",
        "body": "The hardware had a directional pad, two action buttons and Start, and nothing else. That short button list makes a portrait layout comfortable, but check that Start sits under your thumb without a grip change, and run a few diagonals."
      },
      {
        "title": "When a Game Gear game will not run",
        "body": "Verify the extension, the detected system and the error message. The classic mix-up is a Master System file imported while the system is set to Game Gear, or the other way around. Keep your original file untouched while you test.",
        "points": [
          "Have the app version, detected system, core and error ready.",
          "Do not send us commercial ROM or BIOS files.",
          "Back up saves before you move them between cores."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "How close is Game Gear to the Master System?",
        "answer": "Related, but not the same machine, and they use different file extensions. One core runs both, so check which system a file gets detected as."
      },
      {
        "id": "bios",
        "question": "Do I need a BIOS file for Game Gear?",
        "answer": "Not for the cores Retropa ships. If a core asks for one, follow the prompt it gives rather than importing an unrelated file."
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
    "description": "Run your own .sms Sega Master System games on iPhone and iPad. What the JGenesis core covers, how import works, control layout, and the checks to try when a title will not start.",
    "summary": "Retropa plays Master System games from .sms files you already own, on the JGenesis core, with skins, display filters and mappable controls.",
    "sections": [
      {
        "title": "Prepare a .sms file",
        "body": "Master System ROMs carry the .sms extension. Retropa ships without games or BIOS files, so find your own copy and keep a backup outside the app before importing.",
        "points": [
          ".sms is the Master System extension.",
          "Game Gear uses .gg and is a separate system.",
          "ZIP and RetroPack archives open directly."
        ]
      },
      {
        "title": "Core coverage",
        "body": "JGenesis runs Master System alongside Mega Drive, Genesis and Game Gear, so one core is doing a lot of work here. That is why the detected system is the first thing to confirm when a file misbehaves."
      },
      {
        "title": "Import and verify",
        "body": "Park the ROM in local storage and pick it from the import entry in the Retropa library. Watch the picture and the sound, and try the default layout, before you layer on a skin or a display preset."
      },
      {
        "title": "Two buttons, one direction pad",
        "body": "A Master System pad had a direction pad, two action buttons, and the pause control lived on the console itself. On a touchscreen, pause is the one people forget to map, so bind it to a key you can reach."
      },
      {
        "title": "Picture treatment",
        "body": "Sega's early titles assumed a CRT rather than a bare pixel grid. Scanline and aperture-grille presets usually land closer to the original look. Retropa advanced filters size themselves to the real output area instead of a fixed integer multiple.",
        "points": [
          "Judge each preset against the original picture.",
          "Advanced filters need Retropa Plus."
        ]
      },
      {
        "title": "When a Master System game will not start",
        "body": "Check the extension, the detected system and the exact error message, in that order. Region mismatch and a Master System file loaded as Game Gear explain most failures. Leave the original file alone while you narrow it down.",
        "points": [
          "Note the app version, detected system, core and error text.",
          "Keep commercial ROMs and BIOS files out of a support request."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "How do I know if a file is Master System or Game Gear?",
        "answer": "Look at the extension. .sms means Master System, .gg means Game Gear. Retropa also reports the detected system for each imported game."
      },
      {
        "id": "pause",
        "question": "Where is the pause button?",
        "answer": "The original hardware put it on the console, not the controller. In Retropa it sits in the on-screen layout, so make sure it is mapped to a key within reach."
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
    "description": "Bring your own .ws WonderSwan files to iPhone and iPad. How the Ares core handles them, why vertical play matters, and where to look when a game fails to boot.",
    "summary": "Retropa plays WonderSwan games from your own .ws files on the Ares core, and it honors the vertical orientation the hardware was built around.",
    "sections": [
      {
        "title": "Prepare a .ws file",
        "body": "WonderSwan files end in .ws, and the Color model uses .wsc. The app arrives with no games and no BIOS files, so have your own copy ready and back it up before importing.",
        "points": [
          ".ws is WonderSwan; .wsc is WonderSwan Color.",
          "They are separate systems with different capabilities.",
          "Renaming a file will not turn it into the color version."
        ]
      },
      {
        "title": "The Ares core",
        "body": "Ares is what Retropa uses for WonderSwan and WonderSwan Color, and it handles other handhelds too. It is also the only core listed for these systems, so there is nothing to switch to, even with Retropa Plus. If a title will not boot, check that the image is clean and that the detected system matches the extension before you touch any settings."
      },
      {
        "title": "Import and first run",
        "body": "Move the file onto local storage, then choose it from the import entry in the Retropa library. Check the picture, the audio and the default controls before adding a skin or a display preset."
      },
      {
        "title": "A handheld that was meant to be held vertically",
        "body": "The hardware could be held either way, and a good share of the library expects vertical play. Retropa supports portrait layouts, so before you decide the picture looks wrong, check whether the title wants a rotated screen.",
        "points": [
          "Try portrait as well as landscape.",
          "Titles do not all agree on orientation.",
          "Make sure every input is reachable in the orientation you pick."
        ]
      },
      {
        "title": "Display treatment",
        "body": "WonderSwan screens were reflective and monochrome, with a pixel structure of their own. An LCD Grid preset comes closest, while a CRT preset will look heavier than the real thing. Advanced filters scale to the actual output area.",
        "points": [
          "Judge filters against the original picture.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a WonderSwan game will not start",
        "body": "Begin by checking the extension, then the detected system, then the exact error. Loading a .wsc title as plain WonderSwan, or the reverse, is the mistake that shows up most. Keep the original file untouched while you test.",
        "points": [
          "Include app version, detected system, core and error.",
          "Never attach commercial ROMs or BIOS files to a support ticket."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Does the color model change the file?",
        "answer": "Yes. WonderSwan and WonderSwan Color use different extensions, and a color title may not behave correctly on the monochrome system."
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
    "description": "Run your own .ngp and .ngpc Neo Geo Pocket games on iPhone and iPad. Which core plays them, how the microswitch stick feels under a thumb, and why the arcade side of the family is a separate thing entirely.",
    "summary": "Retropa plays Neo Geo Pocket and Neo Geo Pocket Color files on the Ares core, and the handheld pair needs no Plus upgrade. Neo Geo arcade is a different story.",
    "sections": [
      {
        "title": "A shared name, different machines",
        "body": "Both carry the Neo Geo name and little else in common. Pocket and Pocket Color are handhelds; MVS and AES are arcade boards with their own file types and their own cores. The handheld pair runs on Ares and asks for nothing beyond the standard app. Arcade sets sit behind Retropa Plus.",
        "points": [
          "A .ngp file is an original Pocket game; .ngpc and .ngc are the color model.",
          "A neogeo.zip from an arcade set is not a Pocket game.",
          "Retropa keeps arcade and Pocket libraries apart."
        ]
      },
      {
        "title": "Pick the right file",
        "body": "Check the extension before you import anything. A Pocket game is a single handheld image. An arcade set is usually a handful of chip files plus an optional BIOS, so the two are not interchangeable. Confusing them is the mistake we see most often with this system."
      },
      {
        "title": "What runs it: the Ares core",
        "body": "Ares handles both Pocket models in Retropa, and the catalog lists no alternative core for them. That also means there is no core to switch and no Plus upgrade involved. If a game refuses to boot, check the extension and the detected system first, then ask whether the file is a clean dump."
      },
      {
        "title": "A stick, not a d-pad",
        "body": "The original hardware used a clicky microswitch stick instead of a d-pad, and that changes what you test. A real stick rolls through diagonals in a way flat touch controls can miss. When you build a layout, confirm that a diagonal lands cleanly rather than only checking up, down, left and right.",
        "points": [
          "Test diagonals explicitly, not just the four cardinal directions.",
          "Confirm the two action buttons stay comfortable over a long session.",
          "A paired physical controller is worth using for fighting games."
        ]
      },
      {
        "title": "Screen treatment",
        "body": "The Pocket's panel is small, low resolution and built for color, so a light LCD look usually suits it better than a heavy CRT preset. Retropa's advanced filters sample the real output area, so you are not tied to an integer multiple of the original resolution.",
        "points": [
          "Compare the result against the original picture.",
          "Advanced filters require Retropa Plus."
        ]
      },
      {
        "title": "When a game will not start",
        "body": "Confirm the extension, the detected system and the exact error text. If your library also holds arcade sets, make sure you did not pick one of those by mistake. Leave the original file untouched while you work out what went wrong.",
        "points": [
          "Record the app version, detected system, core and error text.",
          "Do not send commercial ROM or BIOS files to support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Can I play Neo Geo arcade games here?",
        "answer": "That is a different system with its own cores and its own files, and it needs Retropa Plus. Pocket emulation is separate and runs in the standard app."
      },
      {
        "id": "neogeo-zip",
        "question": "Do I need a neogeo.zip for Pocket games?",
        "answer": "No. That archive belongs to arcade hardware. Pocket titles never ask for it."
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
    "description": "Play supported Neo Geo MVS arcade sets on iPhone and iPad with Retropa. How a set is built, when a BIOS is required, what parent and clone sets mean, and what to inspect when a game will not boot.",
    "summary": "Retropa runs supported Neo Geo arcade sets on iPhone and iPad with touch controls, external controllers and CRT filters. Arcade play requires Retropa Plus, and the app ships no games or BIOS files.",
    "sections": [
      {
        "title": "Arcade play and Retropa Plus",
        "body": "Arcade cores in Retropa need Retropa Plus, and Neo Geo MVS is one of them. None of that touches the Pocket handhelds, which run in the standard app. Games and BIOS files are yours to supply either way.",
        "points": [
          "Arcade families require Retropa Plus.",
          "Neo Geo Pocket is a separate handheld system.",
          "Games and BIOS files are not included in any case."
        ]
      },
      {
        "title": "An arcade set is more than one file",
        "body": "Cartridge systems hand you one file per game. Arcade boards do not work that way. A title is a group of chip files, usually packed into a ZIP, and plenty of sets lean on a parent or a BIOS for the pieces they leave out. That is why an arcade archive behaves nothing like a handheld ROM.",
        "points": [
          "Keep the ZIP intact unless the import flow asks you to unpack it.",
          "A separate BIOS archive may be needed.",
          "A clone set may not hold every file the core needs."
        ]
      },
      {
        "title": "Import and first launch",
        "body": "Through the import entry, choose the set and launch it with the default layout. If the core complains about a missing file or a missing BIOS, read that message closely. A missing parent and a missing BIOS can look alike in a screenshot but need completely different fixes.",
        "points": [
          "Read the exact error before changing anything.",
          "Retain the original archive while you diagnose.",
          "Confirm the coin and start inputs are reachable."
        ]
      },
      {
        "title": "Pocket files belong elsewhere",
        "body": "A .ngp or .ngpc file belongs to the handheld line, not to the arcade family. Renaming a Pocket ROM to look like an arcade archive changes nothing, and the reverse trick fails just as hard. Confirm which system the app detected before you file a report.",
        "points": [
          ".ngp and .ngpc files are handheld Pocket formats.",
          "Arcade sets are multi-file and may need a BIOS.",
          "Check the detected system before reporting a problem."
        ]
      },
      {
        "title": "Controls and display for arcade",
        "body": "Arcade cabinets were built around a stick and a row of buttons, and many titles want two buttons pressed at once. Retropa offers on-screen controls and works with compatible external pads, plus CRT treatments that suit arcade output. Advanced filters are a Plus feature.",
        "points": [
          "Pair a controller in iOS before mapping it.",
          "Test a diagonal and a button press at the same time.",
          "CRT presets usually suit arcade output better than a raw grid."
        ]
      },
      {
        "title": "Troubleshooting a set",
        "body": "Examine the selected board, what is actually inside the set and any BIOS the core asks for. A clone archive on its own, or a set missing a required file, will not boot. No filter or skin will change that.",
        "points": [
          "Record the app version, board selection, core and exact error.",
          "Filter or skin changes cannot fix missing ROM data.",
          "Do not attach commercial ROM or BIOS files to a support request."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Why do arcade cores need Plus?",
        "answer": "Arcade families sit in the paid feature set, together with premium skins and advanced filters. Handheld and cartridge systems run without it."
      },
      {
        "id": "bios",
        "question": "Do I need a Neo Geo BIOS?",
        "answer": "Plenty of arcade sets expect one, and the core names the file when it is absent. Supply a BIOS you are entitled to use; the app offers no downloads."
      },
      {
        "id": "pocket-confusion",
        "question": "Is Neo Geo Pocket the same thing?",
        "answer": "No. Pocket is a handheld with its own file formats and its own core. An arcade archive and a Pocket ROM will never stand in for each other."
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
    "description": "Run Game Boy, Game Boy Color and Game Boy Advance games in Retropa with mGBA. What the catalog supports, what to check on a first launch, and how core switching works with Retropa Plus.",
    "summary": "mGBA is the core Retropa picks by default across the Game Boy handhelds. Leave the layout and the picture alone at first, then judge it on a real gameplay scene instead of the title screen.",
    "sections": [
      {
        "title": "Systems and file formats in the catalog",
        "body": "Retropa builds its mGBA support on the project at https://github.com/mgba-emu/mgba, so the list below describes what this app ships, not everything upstream can do. Having one of these extensions is not a promise that any particular game will boot. Retropa includes no games and no BIOS files, so import only what you have the right to use.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Your first launch, generation by generation",
        "body": "Fetch the game into Files before anything else, then import it from the Retropa library and let the app name the system on its own. A Game Boy Color game needs the color path; renaming the file will not add or remove color features. On Game Boy Advance, try the shoulder buttons as well as the face buttons, because a layout built for the older handhelds often leaves L and R out.",
        "points": [
          "Check sound and input after the title screen.",
          "Test the default skin before importing a custom layout.",
          "Keep the original file outside the app."
        ]
      },
      {
        "title": "Telling emulation bugs apart from display filters",
        "body": "Before blaming the core, turn the filters off and look again. A green-screen treatment and an LCD grid both change pixels on purpose, so neither one can tell you whether mGBA is drawing the game correctly. For an audio or timing complaint, note a scene you can replay and the app version you are running; the opening logo is a poor test.",
        "points": []
      },
      {
        "title": "Swapping cores without losing progress",
        "body": "mGBA is the default for Game Boy, Game Boy Color and Game Boy Advance, and for most games that default is where you should stay. Switching to another core is a Retropa Plus feature, even though those systems themselves cost nothing to play. If you do switch, pick a core that handles both the system and the file format, since the choice is saved per game. Copy the in-game save and any save states from the core you are leaving before you compare the same scene for sound, picture and input.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Where the handheld scope ends",
        "body": "Keep DS games away from this core: Nintendo DS runs on SkyEmu in Retropa, and renaming a .gba file will not change that. A save state from another emulator is not a game file either, so do not import one in place of a ROM. If the app asks for a BIOS after you pick a system, supply your own; Retropa does not carry firmware.",
        "points": []
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Can I change the core for one game only?",
        "answer": "Yes, with Retropa Plus. Retropa stores the choice per game, but back up your saves first and do not count on states moving between cores."
      },
      {
        "id": "display",
        "question": "Will another filter fix a compatibility issue?",
        "answer": "No. Go back to the original picture and test there. A filter changes how the game looks, not the emulated hardware or what is inside the file."
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
    "description": "SkyEmu plays the Game Boy family and Nintendo DS in Retropa. Formats, the touch layer and two-screen layouts, plus what Retropa Plus changes about cores.",
    "summary": "SkyEmu is the one core behind Nintendo DS in Retropa, and it covers the Game Boy handhelds too. DS results depend on the title, so nobody can promise that every game or every touch interaction behaves.",
    "sections": [
      {
        "title": "Systems and formats Retropa can hand to SkyEmu",
        "body": "SkyEmu is the runtime behind several systems in Retropa, and its own project page sits at https://github.com/skylersaleh/SkyEmu. What follows is Retropa's catalog, a shorter list than the upstream project supports. An extension appearing here means the app will try the file, not that every game will run. Retropa ships without games and BIOS files, so bring your own copies.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS, one title at a time",
        "body": "Expect DS results to vary from title to title. Import a file you already downloaded, make sure the app reports Nintendo DS, and play past the opening screen before you trust it. Try a scene that uses the touch screen and one with sound, then write down the app version and the exact point where a game freezes. No skin can fix a core that does not support a title.",
        "points": [
          "The catalog lists only SkyEmu for Nintendo DS.",
          "Plus core switching does not create an alternative DS core.",
          "Keep independent save backups while testing DS titles."
        ]
      },
      {
        "title": "Two screens and a finger",
        "body": "Pick a layout that keeps both displays in view. Portrait mode can stack them; in landscape it depends on the skin you chose. Test small touch targets at the size you really play at, and check which screen is taking the taps. A controller covers the buttons, but it cannot stand in for every touch action.",
        "points": [
          "Test both displays rather than only the main game view.",
          "Leave touch controls reachable with an external controller.",
          "A one-screen handheld skin is not a DS layout."
        ]
      },
      {
        "title": "The older handhelds on SkyEmu",
        "body": "The Game Boy family stays on single-screen layouts. Confirm which system the app detected, then load a matching skin before you chase a color problem or a dead button. ZIP and RetroPack files are containers for import, not extra systems, so the game inside still has to match the catalog. A Game Boy Advance file does not turn into a DS game when you rename it.",
        "points": []
      },
      {
        "title": "Pointing one game at a different core",
        "body": "Retropa Plus is what unlocks core switching, and the handheld systems stay playable without it. On Nintendo DS the question is academic: SkyEmu is the only core in the catalog, so there is nothing else to pick. Where a choice does exist, limit yourself to cores that cover both the system and the format in front of you. The app remembers your pick per game, so back up the game's own save and the save states from the core you started on before you run the same scene twice.",
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
        "question": "Which core plays Nintendo DS games?",
        "answer": "SkyEmu is the one Retropa lists for Nintendo DS. How well a given title runs is a per-game question, and there is no second DS core to fall back on."
      },
      {
        "id": "touch",
        "question": "Do DS games still need touch input with a controller?",
        "answer": "Yes. Keep the touch screen within reach for games that use it, because a controller does not cover every touch action."
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
    "description": "SameBoy sticks to Game Boy and Game Boy Color in Retropa. How to check color honestly, where the file scope ends, and when comparing cores is worth the trouble.",
    "summary": "SameBoy handles the original monochrome and color Game Boy hardware and stops there. That narrow focus makes it a handy comparison point, not proof that any other core is worse.",
    "sections": [
      {
        "title": "What SameBoy can open",
        "body": "SameBoy comes from the project at https://github.com/LIJI32/SameBoy, and Retropa wires it up for a deliberately narrow slice of hardware. Only catalog entries count here, so treat upstream features as out of scope. A file extension in the list is a starting point, not a compatibility guarantee for a specific game. Nobody is bundling ROMs or BIOS images, so import your own files and stay within what you are allowed to use.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Checking color with the filter off",
        "body": "Bring in a file you have saved locally and see whether the app reads it as Game Boy or Game Boy Color. Leave the display on its original setting, because a DMG treatment can drain the color out of a color title on purpose. Compare one scene you know changes palette, and compare that same scene both times rather than two different moments.",
        "points": []
      },
      {
        "title": "Timing, sound and the buttons",
        "body": "Start on the default skin and check the directional pad, A, B, Start and Select. When timing or sound feels off, note the exact moment it happens and whether it survives with display effects turned off. With Retropa Plus you can line the game up against another compatible core to narrow down where the difference lives, but seeing a difference does not prove which core matches real hardware.",
        "points": []
      },
      {
        "title": "When it is worth changing cores",
        "body": "Changing cores is a Retropa Plus feature, even though Game Boy and Game Boy Color play for free. It is worth doing only when you can name the problem: a specific sound, a specific frame, a specific button. Choose a core that supports both the system and the format, because a mismatch gets you nowhere. Retropa remembers the pick per game, so keep a copy of the in-game save and of any save states from the core you started on before you test the same scene twice.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "A Game Boy core, not a GBA one",
        "body": "GBA files sit outside this core's remit: point one at a catalog's GBA-capable core instead, and do not expect an extension change to make SameBoy accept it. A save state written by a different core will not travel either. Hold on to the old state, and test an in-game save backup on its own before you rely on it.",
        "points": []
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "Can SameBoy run Game Boy Advance games?",
        "answer": "No. The catalog pairs SameBoy with Game Boy and Game Boy Color, and Game Boy Advance is not part of the deal."
      },
      {
        "id": "why",
        "question": "When should I compare SameBoy with another core?",
        "answer": "When a timing, color or sound problem repeats on the same scene after you have checked the file and turned filters off. Copy your saves first, and remember the comparison needs Retropa Plus."
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
    "summary": "RusticoNES is the NES runtime path Retropa picks by default. On the emulator core list it sits first, so most NES games never need another choice. Reach for it when your file is a cartridge or disk image and the boot fails for a reason you can name.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "RusticoNES builds on an upstream project at https://github.com/zeta0134/rustico. What Retropa documents is narrower than that project at large, and wider than one console: your NES / Famicom files appear in the catalog as .nes, .fds, .unf, .unif. Seeing an extension on that list is a starting point, not a verdict on any single game. Bring your own dumps; the app ships no games and no BIOS files.",
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
        "body": "Get the image onto the device first: a cloud placeholder looks identical to a real file in a list, but the import fails until the bytes are actually local. Import it through the Retropa library, then confirm the app detected NES. Leave the default skin on and skip display effects for now. Press the directional pad, A, B, Start and Select, diagonals and simultaneous presses included. If one input goes missing in your own layout, suspect the layout before you suspect the mapper."
      },
      {
        "title": "When a cartridge fails but others work",
        "body": "Mapper hardware differs from cartridge to cartridge, and RusticoNES implements some boards rather than all of them. A recognized extension does not prove the board used by a particular game is implemented. Write down the exact error, plus the mapper and region if your dump metadata names them. Random header patches rarely help, and no BIOS cures a board that was never emulated. With disk games, work out first whether the BIOS or the disk data is the missing piece."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Retropa Plus unlocks core switching. That applies to NES as well, even though NES plays for free. Before comparing RusticoNES with TetaNES or JGenesis, confirm that the other core lists your file's format at all. Retropa remembers your pick per game. Copy out both the game's own save and the save states made under the old core, then bring up the same moment in both cores and judge sound, picture and input.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "Compare only the overlapping formats",
        "body": "Formats are collected per system page, so the NES page can show a longer list than any single core supports. RusticoNES has the shorter list of the NES cores: .unf and .unif are its own, while TetaNES covers NSF and NSFE. Check the target core's catalog entry against the file you hold before spending a Plus switch on a comparison. Same scene, same default display settings: a new skin or filter muddies which core actually changed something."
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
    "summary": "TetaNES is the alternative NES core in Retropa, and the one to try when RusticoNES will not cooperate. Its catalog entry reaches past cartridge games to disk images and NSF music, so know which kind of file you imported before you expect a game screen.",
    "sections": [
      {
        "title": "Catalog systems and formats",
        "body": "Begin with the kind of file you actually hold, because TetaNES supports more of them than a plain cartridge core does. As an alternative to RusticoNES, it takes cartridges, disks and music: .nes, .fds, .nsf, .nsfe on the NES / Famicom line. Retropa tracks its own support list, which is shorter than the feature set of the upstream project at https://github.com/lukexor/tetanes. And it carries no games or BIOS of its own, so import only files you are entitled to use.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Music files are not cartridge games",
        "body": "NSF and NSFE hold NES music data, so a file that opens to silence instead of a title screen may be behaving. Play something and check the device volume and output before you call it broken. A music file will not gain a level select because you renamed it. The controls Retropa exposes are the app's own; a desktop player's interface is not part of the deal. For actual gameplay, pick a cartridge or disk image.",
        "points": [
          "Check device volume and audio output when testing music.",
          "Renaming an audio file cannot turn it into a cartridge image.",
          "UNIF extensions belong to RusticoNES's catalog entry, not TetaNES's."
        ]
      },
      {
        "title": "Import a cartridge or disk image",
        "body": "Only import from the library once the file is genuinely on the device; an iCloud placeholder that looks present will fail. Then check that the app read it as NES. Famicom is the Japanese name for the same hardware; a Famicom Disk System image brings its own disk requirements on top. If TetaNES asks for a BIOS or reports a disk-data problem, satisfy that request. Swapping in an unrelated cartridge image solves nothing."
      },
      {
        "title": "Test input and a repeatable scene",
        "body": "NES pads are small and predictable: directional pad, two action buttons, Start and Select. Confirm each one registers, and test a diagonal while you are there. Keep the default skin while you check controls, because a restyled layout can hide a dead direction. Then load the scene that misbehaves and watch it twice, once plain and once with a CRT effect. Scanlines change how detail looks, not what the core emulates."
      },
      {
        "title": "Core switching and keeping progress",
        "body": "Reaching for TetaNES costs a Retropa Plus unlock, because changing cores sits behind it; playing NES itself does not. Ask first whether TetaNES even accepts the format you have, since a switch between cores is only meaningful where both lists overlap. Your choice sticks per game, and Retropa will not ask again next time. Before the test, archive the in-game save and any save states from the old core. One scene, two cores, then compare sound, picture and input.",
        "points": [
          "Save states record a particular core's internal state; do not expect cross-core compatibility.",
          "Back up and verify in-game saves too; automatic migration is not guaranteed.",
          "Switching cores does not convert the game file or supply a missing BIOS."
        ]
      },
      {
        "title": "An alternative is not a universal repair",
        "body": "TetaNES and RusticoNES diverge in both format lists and implementation. A swap tells you something only when your image is valid for both cores, and even then it isolates a timing or mapper difference rather than promising support for a cartridge board. Treat each core's save states as belonging to that core: keep them filed with it instead of moving them around like ordinary files."
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
    "description": "LakeSnes in Retropa: SNES / Super Famicom formats, cartridge-chip limits, six-button controls, save backups and Plus core switching.",
    "summary": "LakeSnes handles SNES and Super Famicom in Retropa, and it is the default there. The catalog takes a handful of image and copier formats, but recognizing a file and emulating a game's cartridge hardware are two separate questions.",
    "sections": [
      {
        "title": "What the catalog lists for SNES",
        "body": "LakeSnes upstream project: https://github.com/dinkc64/LakeSnes — the desktop emulator this core grew out of. What loads in Retropa comes from Retropa's own catalog, not from everything that project can do on a computer. And a recognized extension still does not promise that a particular title behaves. The app arrives empty as well: no games, no BIOS files, so bring only files you have the right to use.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Keep the image and its header intact",
        "body": "In Japan the same console sold as Super Famicom, which is why both names turn up in file lists. Most cartridge dumps carry .sfc or .smc, and the catalog piles a few copier formats on top of that. The extension says almost nothing about whether a copier header is stuck to the front of the file or whether the cartridge expects extra hardware. Keep the image you actually downloaded, plus a copy of it, instead of stripping a header as your first move.",
        "points": []
      },
      {
        "title": "Check the full controller",
        "body": "Once the game is in the library, confirm the system Retropa detected before you change anything else, and start from the stock layout. Where a two-button handheld stops, SNES keeps going with X, Y, L and R. Try the shoulder buttons, the diagonals, and any press the game wants you to make at the same moment. A handsome skin that skips L or R will make a perfectly healthy game look frozen.",
        "points": [
          "Check Start and Select too, not just the six action buttons.",
          "Pair a controller and map it before you blame the touch layout.",
          "Keep the original picture in mind so you can tell an input problem from a display one."
        ]
      },
      {
        "title": "Cartridge-chip and special-format boundaries",
        "body": "A number of SNES cartridges carry their own coprocessor or other extra silicon inside the shell. The catalog's list of extensions is not a chip-by-chip compatibility table, and a .bs or .st file that gets recognized does not prove that every accessory path exists inside Retropa. When one title fails, note the hardware it needs if you happen to know it, along with the exact wording of the error. A filter cannot fill in for missing hardware, and neither can a renamed file.",
        "points": []
      },
      {
        "title": "Switching cores and keeping progress",
        "body": "SNES already defaults to LakeSnes, so most people never need to open this menu at all. Switching is a Retropa Plus feature, and it stays one even though playing SNES does not require a purchase. If you do switch, remember that the other core has to list both your system and your file format before a comparison is worth your evening. Retropa stores the pick per game. Copy the game's own save and the old core's save states first, then replay the same scene on both and listen for audio, look at the picture, test the controls. Save states belong to one core; the other core will not read them.",
        "points": [
          "A save state captures one core's internal memory, so a different core cannot load it.",
          "Back up the game's own in-game saves as well, since nothing moves them across for you.",
          "Switching never converts the game file and never supplies a BIOS that is missing."
        ]
      },
      {
        "title": "Comparing LakeSnes with JGenesis",
        "body": "JGenesis lists SNES as well, but it takes fewer SNES formats than LakeSnes does. With Plus you can put the two side by side, as long as the format you hold appears in both entries. Run the same scene twice with matching controls and no filter, and keep each core's states in their own place. One cartridge behaving well in a comparison says nothing about the next special-chip title.",
        "points": []
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Will every format LakeSnes takes also run on JGenesis?",
        "answer": "Assume nothing. Check each core's own catalog entry, because a format list for a whole system is a union drawn from several cores."
      },
      {
        "id": "chips",
        "question": "Does the format list promise special-chip compatibility?",
        "answer": "No. A file can be recognized while the cartridge chip inside it stays unsupported. Read the error, check which core is selected, and only then think about changing the image."
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
    "description": "JGenesis in Retropa: the Sega and Nintendo systems in the catalog, Genesis / Mega Drive naming, format boundaries, system detection and Plus core switching.",
    "summary": "One core family, many systems. In Retropa the detected system still decides the hardware, the controls and the save context, so files from one console do not become files from another just because JGenesis runs both.",
    "sections": [
      {
        "title": "Systems and formats in the catalog",
        "body": "JGenesis upstream project: https://github.com/jsgroth/jgenesis — a single desktop codebase that grew to span several console generations. Retropa turns on only what its catalog lists, so treat the upstream README as background reading, not as a promise about this app. An extension is where you start, not a guarantee that a given title will run. Nothing is bundled either: no games, no BIOS files, and import only what you are entitled to use.",
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
        "body": "North America called the console Genesis; Japan and Europe called it Mega Drive. Retropa's catalog carries entries under both names, which is why you may see the two sitting side by side. An extension is a clue about the image format, not a dependable region label, and a filename cannot tell you how a game expects to be timed. Leave the original file alone and confirm which system Retropa detected, rather than renaming it to pick a market.",
        "points": []
      },
      {
        "title": "Import for the right hardware",
        "body": "Put the image in Files first, let it finish downloading, then bring it in through the library. Before you press play, be sure you know which machine you are dealing with: Master System rather than Game Gear, NES / Famicom rather than SNES / Super Famicom. One core covering many systems still needs the right hardware path underneath. If the detected system looks wrong, sort out the file before you start adjusting display or controller settings.",
        "points": [
          "Master System and Game Gear are cousins, not the same machine.",
          "A format list for a whole system can be a union drawn from several cores.",
          "Everything on this page comes from Retropa's catalog, not from every feature upstream JGenesis offers."
        ]
      },
      {
        "title": "Controls vary with the selected system",
        "body": "Genesis games want A, B and C, plus the extra six-button inputs when the layout offers them. Game Gear players should check Start; on Master System, look at the pause input. SNES layouts call for shoulder buttons that an NES layout never has. Prove a button combination works in a real scene before you decide the core dropped an input.",
        "points": []
      },
      {
        "title": "Core switching and keeping progress",
        "body": "On the Sega side there is usually nothing to switch to: the catalog names JGenesis as the only core for those cartridge systems. Plus opens the switching menu, but it cannot invent an implementation that was never in the catalog. Where an alternative does exist, it has to cover both your system and your file format before a comparison tells you anything. Retropa remembers your choice per game. Snapshot the in-game save and the first core's states, then run one scene on each core and judge sound, image and input for yourself.",
        "points": [
          "A save state records one core's internal state, and no other core can read it.",
          "In-game saves need their own backup, since no automatic migration is promised.",
          "Changing cores will not convert your game file or hand you a missing BIOS."
        ]
      },
      {
        "title": "Sega coverage does not imply an alternate core",
        "body": "For its Sega cartridge systems, Retropa's catalog names JGenesis as the only core. Plus buys you switching where a second implementation exists; it does not conjure one that was never listed. The same caution applies to hardware: upstream support for disc images or add-ons does not mean those paths are wired into this app. Trust the catalog and what the app actually prompts you for.",
        "points": []
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Does a .gen file prove the game is North American?",
        "answer": "No. Genesis and Mega Drive are two names for one console, and the extension says nothing dependable about a game's region or its timing requirements."
      },
      {
        "id": "upstream",
        "question": "Does Retropa expose every system upstream JGenesis supports?",
        "answer": "No such guarantee exists. This page follows Retropa's catalog, which is a shorter list than the upstream project's."
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
    "description": "Ares in Retropa: what the catalog covers for GBA, WonderSwan and Neo Geo Pocket, color-model detection, rotated layouts, save precautions and Plus core switching.",
    "summary": "Ares is a general-purpose emulator upstream, but Retropa wires up a specific slice of it. Several handheld families appear here, and the desktop project's longer system list does not come along for the ride.",
    "sections": [
      {
        "title": "Systems and formats in the catalog",
        "body": "Ares upstream project: https://github.com/ares-emulator/ares, and the catalog in this app trims that lineup down to a few handheld families. Ares runs far more systems on a desktop machine than Retropa enables here. Treat the extension list as a floor rather than a promise: getting a file recognized is one thing, and playing a specific title well is another. The app includes no games and no BIOS files, so import only files you are allowed to use.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Match the monochrome or color model",
        "body": "Download the image locally first, then check what Retropa detected: the original WonderSwan or the Color model, plain Neo Geo Pocket or Pocket Color. The color variants do things the monochrome hardware cannot. Renaming a file does not convert it, so a color-only title will not turn into an original-model game because you changed the suffix.",
        "points": [
          "Hang on to the original image, and keep progress in its own backup.",
          "Confirm the detected model before you go hunting for a palette problem.",
          "If a system-specific firmware prompt shows up, follow it; no BIOS comes with the app."
        ]
      },
      {
        "title": "WonderSwan orientation needs more than portrait",
        "body": "WonderSwan titles can be built for horizontal or vertical play, and some switch between the two. Work out which orientation the game expects, then look at both directional-button clusters and the skin layout you have chosen. Holding the phone upright by itself does not mean the emulated screen and every control have turned the right way. When a layout cannot reach the inputs you need, pick a different one instead of hoping the core will remap things on its own.",
        "points": []
      },
      {
        "title": "Pocket is not Neo Geo arcade",
        "body": "Neo Geo Pocket takes handheld images, not the multi-file arcade sets that belong to Neo Geo MVS. An arcade BIOS archive is not a Pocket image and will not stand in for one. With the default layout, test the diagonals and both action buttons. Pocket's own screen is monochrome, so expect the color palette only from Pocket Color. Arcade execution is a separate capability that requires Retropa Plus.",
        "points": []
      },
      {
        "title": "Core switching and keeping progress",
        "body": "GBA is the one system here with a genuine choice: mGBA is the default, and Ares is the extra option. Retropa Plus unlocks that switch, and Plus is what core switching costs regardless of whether the system itself is free. For WonderSwan and Neo Geo Pocket the catalog lists Ares and nothing else, so there is no second opinion to gather. Where a comparison is possible, back up the in-game save and the current core's save states, then replay one scene on both cores and judge sound, picture and input for yourself.",
        "points": [
          "A save state belongs to the core that made it and will not open elsewhere.",
          "Keep a copy of in-game saves too; nothing migrates them automatically.",
          "A core switch does not convert the game image or provide a BIOS."
        ]
      },
      {
        "title": "Where comparison is and is not available",
        "body": "Alternatives exist for Game Boy Advance, but the catalog lists Ares alone for WonderSwan and for both Neo Geo Pocket models. Plus does not change that: switching only works where a compatible second core is already listed. Upstream Ares is also much broader than this integration, so resist the idea that another system can be switched on by renaming a file. What you see in Retropa is what runs.",
        "points": []
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Can I run a Neo Geo arcade set with Ares?",
        "answer": "No. Pocket and Neo Geo arcade are separate hardware families that want different files. Arcade execution needs Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Will Plus give me a second WonderSwan or Pocket core?",
        "answer": "No. Retropa's catalog lists Ares alone for those systems. Switching is only useful where a compatible alternative already exists."
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
    "description": "Weighing a Delta alternative on iPhone or iPad? This comparison walks through arcade support, Delta skin import, display filters and console mode, and names the places where Delta is the stronger pick.",
    "summary": "Retropa plays handheld and arcade systems on iPhone and iPad. It reads Delta .deltaskin packages, covers arcade families Delta does not, and keeps a handheld-first layout.",
    "sections": [
      {
        "title": "What carries over from Delta",
        "body": "Switching emulators only pays off if the setup you already have survives the move. Retropa imports Delta .deltaskin packages, so a layout you spent an evening tuning does not need rebuilding. Check which system and orientation the package targets, then make sure the game view is not covered by the controls.",
        "points": [
          "A .deltaskin package applies without conversion.",
          "Confirm the intended system before you trust a skin.",
          "Portrait and landscape support both come from the package."
        ]
      },
      {
        "title": "Where Retropa adds something Delta does not",
        "body": "The widest gap is the arcade side. Retropa runs supported CPS I, CPS II, CPS III, Neo Geo, PGM and M92 arcade families next to its handheld systems, so one library holds both. Arcade cores need Retropa Plus. Games and BIOS files are not included.",
        "points": [
          "Arcade families sit in the same library as handhelds.",
          "Arcade cores need Retropa Plus.",
          "Arcade sets come as several files and often want a BIOS."
        ]
      },
      {
        "title": "Display filters without an integer scale requirement",
        "body": "Most retro filters assume the picture lands on a whole number of screen pixels. A modern iPhone screen rarely divides that neatly, so you end up with unused space or scanlines that shimmer. Retropa's advanced filters read the actual output area instead, which holds up across orientations and skin layouts. Treat the browser preview on this site as a rough sketch; the iOS app is the reference.",
        "points": [
          "Filters change presentation, never game resolution.",
          "Advanced filters need Retropa Plus.",
          "Conventional scanline overlays can shimmer at fractional scales."
        ]
      },
      {
        "title": "Where Delta is the stronger choice",
        "body": "Delta has a far larger user base, a longer run on the App Store and a broader set of published skins. If the most widely used option, the deepest skin catalog or the most third-party guides is what you want, Delta is a sound pick. This page will not pretend otherwise.",
        "points": [
          "Delta has the bigger community and more third-party material.",
          "Network effects keep Delta's skin ecosystem growing.",
          "Retropa is newer and its catalog is smaller."
        ]
      },
      {
        "title": "Trying both costs nothing",
        "body": "Both apps download for free and both offer optional in-app purchases. One practical test: import a Delta skin into Retropa, load a handheld game and an arcade set, then decide by how the controls and the picture feel in your hands. Keep your original files and skins whichever way you go.",
        "points": [
          "Nothing stops you from installing both.",
          "Keep your original files and skins either way.",
          "Judge with your own hands, not a comparison table."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Can Retropa import my existing Delta skins?",
        "answer": "Yes. Retropa reads .deltaskin packages. Hang on to the original package file and make sure it matches the system and orientation you play in."
      },
      {
        "id": "free",
        "question": "Is Retropa free?",
        "answer": "Retropa is free to download, with optional in-app purchases. Retropa Plus covers arcade cores, premium skins and advanced filters."
      },
      {
        "id": "roms",
        "question": "Does Retropa include games?",
        "answer": "No. Retropa is an emulator, so it ships without games or BIOS files. Import only content you are entitled to use."
      },
      {
        "id": "which-better",
        "question": "Which emulator is better?",
        "answer": "They aim at different things. Delta brings the bigger community and the larger skin catalog, while Retropa adds arcade families, non-integer-scaled filters and .deltaskin import. Try both on your own device."
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
    "description": "Retropa and Delta, side by side on iPhone and iPad: which systems each one plays, how arcade support and skins line up, what the display filters do, and where each app fits better.",
    "summary": "Two iOS emulators with different priorities. Delta wins on community size and published skins; Retropa brings arcade families and filters that hold up at fractional scales.",
    "sections": [
      {
        "title": "Emulated systems",
        "body": "Handheld coverage overlaps heavily — both apps play the machines most people reach for first. Retropa goes further with supported arcade families, which is the biggest functional split between them. Arcade cores sit behind Retropa Plus. Handheld systems do not.",
        "points": [
          "The handheld lineup is much the same on both.",
          "Arcade families are Retropa's own addition.",
          "Playing arcade titles requires Plus."
        ]
      },
      {
        "title": "Skins and layouts",
        "body": "Retropa reads Delta .deltaskin packages, so a control layout you already like can come with you. Past that, Delta's published skin ecosystem is the larger one, which counts for a lot if browsing a big catalog is part of the appeal.",
        "points": [
          ".deltaskin packages import into Retropa.",
          "Delta's published catalog is bigger.",
          "Check that a package supports your system and orientation."
        ]
      },
      {
        "title": "Display filters",
        "body": "On the picture side, Retropa ships advanced CRT and LCD filters that work from the actual output area rather than demanding a whole-number scale factor. It also accepts RetroArch shader chains, including .slang and .slangp presets. Advanced filters need Plus. Judge the result inside the app; the website preview only approximates it.",
        "points": [
          "Advanced filters skip the integer-scale rule.",
          "RetroArch shader chains are supported on Retropa.",
          "Plus is required for the advanced filter set."
        ]
      },
      {
        "title": "Community, documentation and track record",
        "body": "Delta reached the App Store first, has many more users, and therefore a deeper pool of forum answers and third-party guides. Retropa is the newer, smaller product. Anyone who tells you otherwise is not describing either app as it stands today.",
        "points": [
          "Delta arrived on the App Store first.",
          "More users means more community answers.",
          "Retropa's user base is smaller today."
        ]
      },
      {
        "title": "How to choose",
        "body": "If arcade games matter to you, or you want filters that do not assume a whole-number scale, Retropa earns a place on your home screen. If the largest skin catalog and the most community material matter more, Delta is the safer pick. Neither includes games or BIOS files, and both are free to download, so testing them with your own files is the honest way to decide.",
        "points": [
          "Both apps are free to install.",
          "No commitment is needed to evaluate either.",
          "Both need your own game files."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Does Delta support arcade games?",
        "answer": "This page cannot verify that either way. What it can confirm is that Retropa plays supported CPS, Neo Geo, PGM and M92 arcade families, and that arcade cores need Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Can I use the same skins in both?",
        "answer": "Retropa imports Delta .deltaskin packages, so a package built for Delta usually loads in Retropa too. After it loads, check the target system and orientation."
      },
      {
        "id": "price",
        "question": "Is Retropa free to use?",
        "answer": "Retropa is free to download. Optional in-app purchases unlock Retropa Plus, which covers arcade cores, premium skins and advanced filters."
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
    "description": "Import your own game files into Retropa on iPhone and iPad: where the import entry lives, why a cloud placeholder fails, which file types work and what to do when a file is rejected.",
    "summary": "Your own game files, moved from the Files app into the Retropa library. Covers the formats that load, how ZIP and RetroPack containers behave, and what to check when an import goes sideways.",
    "sections": [
      {
        "title": "Before you start",
        "body": "Retropa ships with no games and no BIOS files, so the file has to come from you and it has to be yours to use. Put a copy somewhere outside the app first. An original you never touched is the cheapest insurance there is.",
        "points": [
          "Only import content you have the right to use.",
          "Keep a separate backup of every original file.",
          "The app is free to download; games are not provided."
        ]
      },
      {
        "title": "Step one: get the file onto the device",
        "body": "A file can sit in Files and still not be on your phone. That is the cloud placeholder: the list entry is real, the bytes are not. Tap the file once so it downloads, wait for the download to finish, then import.",
        "points": [
          "Open the file once in Files to confirm it is downloaded.",
          "A file that appears grayed out or needs downloading is a placeholder.",
          "Complete the download before importing."
        ]
      },
      {
        "title": "Step two: import from the library",
        "body": "Use the import entry in the Retropa library to pick the file. Let Retropa detect the system, then launch with the default layout. Change skins and filters later, once you know the game itself runs."
      },
      {
        "title": "Which file formats work",
        "body": "Retropa opens the formats that match its supported systems, and it can also open ZIP and RetroPack containers as they are. The extension has to line up with the system: .gb for Game Boy, .gbc for Game Boy Color, .gba for Game Boy Advance, .nds for DS.",
        "points": [
          "Changing an extension does not convert a game between systems.",
          "ZIP and RetroPack containers can be opened without unpacking.",
          "Arcade sets are multi-file and are handled differently."
        ]
      },
      {
        "title": "When an import fails",
        "body": "Read the message before anything else. Then check three things, in order: is the file fully downloaded, does the extension match the system, and is it a complete image rather than half a download? Only then is the core worth suspecting. Swapping cores is a Retropa Plus feature, so it is the last lever to pull.",
        "points": [
          "Finish any incomplete download first.",
          "Confirm the extension matches the system.",
          "Try the alternate core for that system before giving up."
        ]
      },
      {
        "title": "Files, saves and save states",
        "body": "Three different things get confused here: the game file, the game's own save data, and a save state from the emulator. Renaming one to look like another does not convert it. Back up all three before you move between cores or apps, because state formats do not travel everywhere.",
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
        "answer": "No. Retropa is an emulator, and it ships with no games and no BIOS files. Everything you play starts as a file you imported and have the right to use."
      },
      {
        "id": "cloud",
        "question": "Why will my file not import?",
        "answer": "A cloud placeholder is usually the culprit. The name shows up in Files, but the download never finished, so Retropa has nothing to read. Open it in Files, let it download, and import again."
      },
      {
        "id": "zip",
        "question": "Can I import a ZIP file?",
        "answer": "Yes. ZIP and RetroPack containers open directly, so unpacking is rarely needed — only when a particular import flow asks for it."
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
    "description": "Pair a Bluetooth or wired controller with iOS and map it inside Retropa, plus how to diagnose buttons that do not register or mappings that seem to change per game.",
    "summary": "Order matters: pair first in iOS, then verify the mapping inside Retropa for each system you play. This guide covers pairing, the buttons most people forget to test, and running touch controls alongside a pad.",
    "sections": [
      {
        "title": "Pair with iOS before opening Retropa",
        "body": "iOS has to know the controller before Retropa can see it. Pair it in system settings, press a few buttons to confirm it reacts, and only then launch the app. An unpaired pad will not appear in Retropa's settings, no matter what you toggle there.",
        "points": [
          "Pair in iOS settings first.",
          "Confirm the controller responds in the system.",
          "Then check it inside Retropa."
        ]
      },
      {
        "title": "Mapping is checked per system, not once globally",
        "body": "Retropa keeps a layout per system, and that makes sense: a Game Boy needs six inputs, a SNES pad needs ten. So treat mapping as ongoing work. After the first pairing, walk through the layout for every system you actually play.",
        "points": [
          "Game Boy: d-pad, A, B, Start, Select.",
          "SNES adds X, Y, L and R.",
          "Arcade adds coin and start on top of the action buttons."
        ]
      },
      {
        "title": "The buttons people forget to test",
        "body": "Most mapping complaints land on the same handful of inputs. Shoulder buttons on a six-button pad. Start and Select, which are easy to leave out of reach. Diagonals, which matter more than you would expect on systems built around a microswitch stick. Arcade games are their own case: coin and start need checking too, or the game never begins.",
        "points": [
          "Test L and R explicitly when mapping.",
          "Check Start and Select are reachable.",
          "Test diagonals, not only the four cardinal directions."
        ]
      },
      {
        "title": "Touch controls and a controller can coexist",
        "body": "A connected pad does not cover everything. On Nintendo DS, some games want a tap on the lower screen, and no button stands in for that. Leave the on-screen controls enabled and use both — turning the overlay off is what usually breaks a session.",
        "points": [
          "Leave touch controls on when a game uses the touch screen.",
          "Check that overlays do not cover the game view.",
          "Haptics and touch layout can be tuned separately."
        ]
      },
      {
        "title": "When a button does not register",
        "body": "Work outward, one layer at a time. Does the button do anything in iOS? Does it do anything in Retropa? Does it do anything in a game that genuinely uses it? If the mapping looks right and the game still ignores the input, the game may simply not use that button — common enough on early handheld titles.",
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
        "answer": "Any controller iOS supports will work with Retropa. Pair it in iOS settings, then confirm the mapping inside the app."
      },
      {
        "id": "mapping-lost",
        "question": "Why did my mapping change?",
        "answer": "Layouts live per system and per game. A mapping you set for one system does not carry over to another, so check the layout for the system you are playing right now."
      },
      {
        "id": "touch",
        "question": "Do touch controls stop working with a controller?",
        "answer": "No. Touch controls stay available. That matters on systems where a game needs a tap or a second screen."
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
    "description": "In-game saves, save states and rewind do different jobs in Retropa. Here is how they differ, why a save state stays tied to one core, and what to try when a save will not load.",
    "summary": "Three things in Retropa get called a save: the game's own save, a save state, and rewind. Each behaves differently and travels differently, so this guide sorts them out and shows how to keep backups that hold up.",
    "sections": [
      {
        "title": "Three different things called a save",
        "body": "People say save and mean one of three things. The game writes its own battery save. A save state freezes the whole emulator at a single instant. Rewind walks recent history backward. They store differently, they travel differently, and renaming one file into another does not turn it into the other kind.",
        "points": [
          "A battery save is written by the game itself.",
          "A save state snapshots the emulator at one moment.",
          "Rewind replays recent history instead of reading a file."
        ]
      },
      {
        "title": "Creating and using a save state",
        "body": "Save states earn their keep before a hard section, before you change cores, or before you try a new filter. Quick save and quick load exist for that short-term checkpoint, not for keeping a playthrough safe forever.",
        "points": [
          "Grab a state before you swap cores.",
          "States make quick work of comparing two presets.",
          "Let the game's own save carry the long-term record."
        ]
      },
      {
        "title": "Moving a save between cores",
        "body": "A save state records the private internals of one core, so do not count on it opening somewhere else. Battery saves, since the game wrote them, move far more often. Copy both aside before you touch the core setting.",
        "points": [
          "Assume a state belongs to the core that made it.",
          "Battery saves stand a better chance of transferring.",
          "Take a copy before you switch."
        ]
      },
      {
        "title": "When a save will not load",
        "body": "Ask three questions first. Is this in-game data or a state? Has the core changed since it was written? Has the app version changed? When a state refuses to open, fall back to the game's own save, which does not care about the emulator's internal format.",
        "points": [
          "Check whether the core changed.",
          "Know which kind of save you have.",
          "Try the game's own save next."
        ]
      },
      {
        "title": "Keeping backups that survive",
        "body": "Spread the copies around. The game file, the game's own save and any states you care about should not all sit in one place. iCloud works, and a desktop copy works. The point is that one bad night on the device cannot take every copy with it.",
        "points": [
          "Copy the game file too, not just the saves.",
          "Store saves apart from state files.",
          "Keep one copy off the device."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "What is the difference between a save and a save state?",
        "answer": "The game writes a save in its own format, and it holds your progress. A save state lives in the emulator's world: it captures everything at one moment and stays tied to the core that made it."
      },
      {
        "id": "rewind",
        "question": "How far can I rewind?",
        "answer": "Rewind pulls from recent history held in memory, so the limit comes from the buffer size rather than a fixed number of slots. There is no stored file behind it."
      },
      {
        "id": "transfer",
        "question": "Can I move a save to another emulator?",
        "answer": "The game's own save travels best, because it follows the game's format rather than the emulator's. A save state is built on one core's internals, so treat it as staying put."
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
    "description": "When a game refuses to start in Retropa, the cause is usually something simple: an unfinished download, the wrong extension, a mismatched system, a missing BIOS or a core that cannot read the file. Work the checks in order.",
    "summary": "Run the same checks in the same order every time: is the file actually on the device, does the extension match the system, is anything missing, does another core help. Most files turn out to be fine.",
    "sections": [
      {
        "title": "Follow a fixed order, not a guess",
        "body": "Load failures usually trace back to a handful of causes, and guessing at them costs more time than checking. Start with the cheapest test and stop the moment something explains the symptom.",
        "points": [
          "Is the file fully downloaded?",
          "Then the extension and the detected system.",
          "Last, dependencies and core choice."
        ]
      },
      {
        "title": "Check one: is the file really on the device?",
        "body": "A cloud placeholder occupies a row in the library like any other entry, but the emulator gets nothing usable from it. Open it in the Files app, let the download finish, then import again.",
        "points": [
          "An item still waiting on its download is not local.",
          "Let the download finish before you retry.",
          "This cause turns up more than any other."
        ]
      },
      {
        "title": "Check two: does the extension match the system?",
        "body": "Every system reads its own extension, and a mismatch hands the core a file it cannot interpret. Renaming a .gb file to .gba does not convert it; it is still a Game Boy game and will not act like a Game Boy Advance title.",
        "points": [
          ".gb, .gbc, .gba and .nds cover different systems.",
          "Renaming a file never converts the game.",
          "Check which system the library detected."
        ]
      },
      {
        "title": "Check three: is a BIOS or a parent set missing?",
        "body": "Arcade families and some systems ask for an extra BIOS file, and an arcade set may need its parent set alongside it. The core names what it cannot find, so read that line carefully: a missing BIOS and a missing parent are separate problems.",
        "points": [
          "Read the error text exactly as written.",
          "An arcade neogeo.zip is not the same thing as a handheld BIOS.",
          "Retropa ships no BIOS files, so you supply your own."
        ]
      },
      {
        "title": "Check four: try the other core",
        "body": "Plenty of systems offer more than one core. If the file is complete, named correctly and missing nothing, the next test is a different core, since cores vary in how strictly they reproduce the original hardware.",
        "points": [
          "Write down which core failed.",
          "Switch cores and try the same file once.",
          "Try a second game on the same core for comparison."
        ]
      },
      {
        "title": "What to include in a support request",
        "body": "When a game still refuses to start, the details that help are the app version, the system, the core in use and the error text as shown. Leave commercial game and BIOS files out of it; nobody needs them to work out what went wrong.",
        "points": [
          "App version, plus the system.",
          "The core you had selected and the error text.",
          "Do not attach commercial ROM or BIOS files."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "The game opens to a black screen. What does that mean?",
        "answer": "That usually points to a download that never finished, a file variant the core cannot handle, or a missing dependency like a BIOS. Start with the download, then the extension, then whatever the core reports."
      },
      {
        "id": "worked-before",
        "question": "A game worked before and now does not. Why?",
        "answer": "Something moved: the app version, the chosen core, or the file's location. A save state belongs to one core, so a state made elsewhere can fail while the game itself still runs fine."
      },
      {
        "id": "support",
        "question": "What should I send with a support request?",
        "answer": "Send the app version, the system, the core you selected and the error text as it appears. Keep commercial game and BIOS files out of the message."
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
    "description": "Retropa is free to download and handheld emulation needs no purchase. See what Retropa Plus adds, from arcade families and premium skins to advanced filters, core switching and console mode.",
    "summary": "Downloading Retropa costs nothing, and handheld play stays free. Core switching, arcade families, premium skins and advanced display filters come with Retropa Plus.",
    "sections": [
      {
        "title": "What is available for free",
        "body": "Retropa costs nothing to download, and handheld emulation runs without a purchase. Import your own game files, use the standard skins, pick a conventional display preset, set up a controller, take a save state. None of that asks for money.",
        "points": [
          "No purchase needed to download.",
          "Handheld systems run without a purchase.",
          "Standard skins and conventional display presets come along.",
          "Importing a game never triggers a paid feature."
        ]
      },
      {
        "title": "What requires Retropa Plus",
        "body": "Plus is what opens the arcade families, the premium skins and the advanced display filters. Switching between emulation cores, running arcade titles and reaching the advanced save workflows all sit behind that same tier. Handheld play carries on either way.",
        "points": [
          "Arcade families: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Premium skins.",
          "Advanced CRT and LCD filters.",
          "Console mode and advanced save workflows."
        ]
      },
      {
        "title": "Why arcade support is part of Plus",
        "body": "Arcade emulation is its own line of work: several boards, multi-file sets, BIOS dependencies and compatibility that varies set by set. Bundling it into Plus keeps the free tier tidy, and keeps handheld play open to everyone.",
        "points": [
          "Arcade boards are not handheld hardware.",
          "Arcade sets span several files and may need a BIOS.",
          "Handheld support never depends on Plus."
        ]
      },
      {
        "title": "Games and BIOS files are never included",
        "body": "Retropa is an emulator, so no tier hands you game files or BIOS files. You bring content you have the right to use, and buying Plus does not change that. What Plus unlocks is emulator capability, not content.",
        "points": [
          "No games come bundled, at any tier.",
          "No BIOS files are supplied.",
          "Import only what you are entitled to use."
        ]
      },
      {
        "title": "Where plan details live",
        "body": "Anything about plans and regional availability belongs to the App Store, which presents it correctly for your account. This page deliberately leaves it out, so that a change in the store never leaves the page stale.",
        "points": [
          "Plan details appear in the App Store.",
          "Availability can differ by region.",
          "The App Store handles every purchase."
        ]
      },
      {
        "title": "Purchases are handled by the App Store",
        "body": "Every purchase and renewal runs through the App Store. Nothing is charged on this website, and no card details are ever collected here. To change or cancel a plan, use your App Store settings; refunds follow App Store rules.",
        "points": [
          "This website never collects payment.",
          "Manage or cancel a plan in App Store settings.",
          "Refunds follow App Store policy."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Can I use Retropa without paying?",
        "answer": "Yes. The download is free and handheld emulation works without paying anything. Arcade families, premium skins and advanced filters are the parts that need Retropa Plus."
      },
      {
        "id": "price",
        "question": "How much does Retropa Plus cost?",
        "answer": "The App Store presents the available plans for your account. This page avoids listing them on purpose, so a change in the store never leaves the page out of date."
      },
      {
        "id": "buy-here",
        "question": "Can I subscribe on this website?",
        "answer": "No. Every purchase goes through the App Store, and this site never asks for payment details."
      },
      {
        "id": "content",
        "question": "Does Plus include games?",
        "answer": "No. Retropa provides no game or BIOS files at any tier, Plus included. You import content you have the right to use."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
