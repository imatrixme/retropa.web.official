import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "GBA emulator for iPhone and iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Bring your own .gba files to Retropa. Start with a working game, then choose a handheld skin, map a controller and find the screen treatment that feels right.",
    "imageAlt": "Retropa product artwork with portrait and landscape handheld control layouts",
    "sections": [
      {
        "title": "Start with a .gba game file",
        "body": "Retropa runs supported GBA games on iPhone and iPad with iOS 18 or later. The app is free to download, but it does not include games or BIOS files. Use a game file you have the right to use, and keep the original outside the app as a backup.",
        "points": [
          "A GBA game normally uses the .gba extension.",
          "A .gb or .gbc file belongs to GB or GBC, not GBA.",
          "Changing a file extension does not convert a game to another system."
        ]
      },
      {
        "title": "Import from the Files app",
        "body": "Make sure the file is available locally in Files, rather than only visible as a cloud placeholder. Open the import entry in Retropa's library and select the game. Once it appears in the library, open it and confirm that the picture, sound and default controls work before customizing the layout."
      },
      {
        "title": "Choose the right handheld layout",
        "body": "A GBA layout needs room for the directional pad, A and B, shoulder buttons, Start and Select. Try the buttons as well as the artwork. Retropa supports .deltaskin import, but a DS skin is not a substitute for a GBA layout. Check that the package supports your device orientation.",
        "points": [
          "Keep the game screen unobstructed in both orientations you use.",
          "Pair compatible physical controllers in iOS, then check their mapping in Retropa.",
          "Premium skins and advanced filters require Plus; importing a file does not unlock paid features."
        ]
      },
      {
        "title": "LCD character or clean pixels?",
        "body": "Begin with the original picture. A light LCD treatment can recall a handheld screen, while a CRT treatment creates a different presentation. Retropa's advanced filters account for the actual output area without an integer-scale requirement. Filters change the picture, not the game's resolution or file compatibility."
      },
      {
        "title": "When an import or a save will not work",
        "body": "Check the file extension, selected system and the exact error first. If Files cannot open or download the original, finish that step before importing again. For BIOS errors, follow the selected core's requirement; an arcade neogeo.zip is not a GBA BIOS. A game's own save data and an emulator save state are different artifacts: do not rename one into the other, and retain backups before moving between cores or apps.",
        "points": [
          "Try the default skin and a simple filter when isolating a control or display issue.",
          "Record the app version, system, core and error for support.",
          "Do not attach commercial ROMs or BIOS files to a support request."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "See supported files and GBA cores"
  },
  "ds-emulator": {
    "title": "DS emulator for iPhone and iPad",
    "label": "DS",
    "image": "library",
    "summary": "Import your .nds games into Retropa and make space for both screens. Check touch input, controls and file requirements before choosing a new layout or filter.",
    "imageAlt": "Retropa product artwork showing the game library and settings on iPhone",
    "sections": [
      {
        "title": "Prepare a .nds game",
        "body": "DS and GBA are different systems. Retropa supports .nds files for DS on iPhone and iPad with iOS 18 or later. Use files you have the right to use and retain a separate backup. The app does not provide ROM or BIOS downloads, and a .gba file cannot become a DS game by renaming it."
      },
      {
        "title": "Import and check both screens",
        "body": "Download the game file locally in Files, then select it from the library import entry in Retropa. Open the imported game with the default layout. Check both display areas and test touch input in a part of the game that uses it. A title screen alone is not enough to verify that every required input is reachable.",
        "points": [
          "Start with the system detected or selected for the .nds file.",
          "Follow any BIOS or firmware requirement reported by the installed core.",
          "Keep a copy of the original file while diagnosing errors."
        ]
      },
      {
        "title": "Give the touch screen enough room",
        "body": "Two displays need a different layout from a single-screen handheld. Choose a DS skin that exposes both screens and the required controls. Portrait can give the screens a natural vertical arrangement; landscape support depends on the selected skin. Check small touch targets at the size you actually play, especially on a smaller iPhone."
      },
      {
        "title": "Controllers do not replace every touch action",
        "body": "Retropa supports compatible external controllers and button mapping. Pair the controller with iOS and confirm its assignments in the app. A physical D-pad and action buttons do not automatically replace a game's touch-screen interactions. Verify those interactions before settling on a controller-only setup."
      },
      {
        "title": "Keep the first session simple",
        "body": "Confirm game and input compatibility before applying a complex shader chain. If the picture or frame pacing changes after selecting a filter, return to a simple preset and compare. Device, core and output size all affect performance; support for DS is not a promise of identical results for every game and phone.",
        "points": [
          "Premium skins and advanced filters require Retropa Plus.",
          "Keep original saves and save states backed up; they are not interchangeable file formats.",
          "For support, include app version, selected core and the exact error, not the game or BIOS files."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "See supported files and DS cores"
  },
  "arcade": {
    "title": "Arcade emulator for iPhone and iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Play supported CPS, Neo Geo, PGM and M92 arcade files in Retropa, with touch controls, external controllers and CRT filters. Arcade play requires Plus; games and BIOS files are not included.",
    "imageAlt": "Retropa product artwork showing its game library and settings",
    "sections": [
      {
        "title": "CPS, Neo Geo and the arcade board",
        "body": "Retropa supports arcade families including CPS I, CPS II, CPS III, Neo Geo, PGM and M92. Match your game to the arcade board and ROM set expected by the installed core. Support for a family does not guarantee that every archive will run.",
        "points": [
          "Confirm the system in the app before choosing a file.",
          "Arcade execution requires Retropa Plus.",
          "Retropa does not include commercial ROMs or BIOS files."
        ]
      },
      {
        "title": "Neo Geo arcade is not Neo Geo Pocket",
        "body": "Neo Geo arcade games and Neo Geo Pocket handheld games use different systems and files. For an arcade game that reports a missing Neo Geo BIOS, open Arcade BIOS in Retropa and import the required neogeo.zip package, then try the game again. A Pocket ROM or a renamed ZIP is not a substitute.",
        "points": [
          "Use BIOS files you have the right to use; Retropa does not supply downloads.",
          "A BIOS package does not replace missing game, parent or clone ROM data.",
          "Check the exact error and retain the original archive before making changes."
        ]
      },
      {
        "title": "Why an arcade ZIP is different",
        "body": "A handheld ROM is often a single game image. An arcade set may contain multiple ROM chips and depend on a parent set or BIOS. Renaming an unrelated archive to .zip does not make it compatible. Keep the supplied archive intact unless the import workflow explicitly requests extraction."
      },
      {
        "title": "When a game will not start",
        "body": "First check the selected board and the error shown by Retropa. Next check whether your set is complete and whether its required BIOS or parent files are available. A clone archive alone may not include all the files a core needs. Changing filters or buying a different skin cannot fix missing ROM data.",
        "points": [
          "Retain your original files while diagnosing an import.",
          "Record the app version, system and displayed error when contacting support.",
          "Do not send commercial ROM or BIOS files with a support request."
        ]
      },
      {
        "title": "Set up the first session",
        "body": "Once the game starts, identify the coin, start and action controls. With an external controller, check the mapping as well as the on-screen labels. Begin with a simple display preset; choose a CRT treatment after confirming that the game and controls work correctly."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Check the system and core catalog"
  },
  "delta-skins": {
    "title": "Import Delta skins on iPhone and iPad",
    "label": "Skins",
    "image": "material",
    "summary": "Change the controls around your game, not just the background. Retropa imports .deltaskin packages and offers its own skin collection for iPhone and iPad.",
    "imageAlt": "Retropa product artwork showing portrait and landscape controller skins in different materials",
    "sections": [
      {
        "title": "A skin is a control layout",
        "body": "The game screen, D-pad, action buttons and menu controls all need space. A skin defines where these elements sit. Choose one for the system you are playing and the orientation you use, rather than choosing by color alone.",
        "points": [
          "Check the intended system before importing a package.",
          "Portrait and landscape support depend on the layouts provided by the skin.",
          "A supported package format does not guarantee that every third-party layout will fit every device."
        ]
      },
      {
        "title": "Import a .deltaskin package",
        "body": "Keep the original skin file, open Retropa's skin import entry and select the package from Files. After import, select it for the matching system. Start a game and check the screen area, directional controls and every action button before making it your regular layout.",
        "points": [
          "Use the complete .deltaskin package, not a screenshot of a skin.",
          "If the package fails, check its format and intended system before trying another layout.",
          "Switch back to a working skin if essential controls are obscured."
        ]
      },
      {
        "title": "Touch controls and physical controllers",
        "body": "Retropa also supports compatible external controllers and configurable button mapping. Pair the controller with iOS first, then check its mapping in Retropa. A visual skin and a controller profile serve different purposes: changing the artwork does not replace checking your physical button assignments."
      },
      {
        "title": "Packages and purchase boundaries",
        "body": "PackHub is the place to browse Retropa skin packages. Premium skins require Plus; imported packages do not bypass entitlement checks. Check the current plan and package requirements in the app before purchasing. Delta compatibility describes a file format, not an affiliation with the Delta project."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Browse skins on PackHub"
  },
  "crt-filters": {
    "title": "CRT filters for iPhone and iPad emulators",
    "label": "Filters",
    "image": "filter",
    "summary": "Retropa advanced CRT and LCD filters adapt to your actual display area without requiring integer scaling. Keep the character of a retro screen across iPhone sizes, iPad layouts and orientations.",
    "imageAlt": "Retropa product artwork showing display filter selection and CRT display treatments",
    "sections": [
      {
        "title": "Choose the display, then the strength",
        "body": "Nearest-pixel presentation keeps the original pixel boundaries clear. CRT treatments use scanlines, masks and edge shading; LCD treatments add a pixel or subpixel structure. These choices change the presentation, not the underlying game resolution.",
        "points": [
          "Start with the unfiltered picture as a reference.",
          "Check small text, bright edges and dark areas, not only the title screen.",
          "Judge the result at the size and orientation you actually play."
        ]
      },
      {
        "title": "No integer-scale requirement",
        "body": "Integer scaling maps each game pixel to a whole number of display pixels. It can be useful for crisp nearest-pixel output, but may leave extra unused space. Retropa advanced filters account for the actual output area, so their display structure is not restricted to a 2x, 3x or other whole-number multiple. You can retain the game's aspect ratio while using a viewport that fits your phone or skin.",
        "points": [
          "CRT V4 reconstructs beam coverage and analytically filters phosphor structure using the output-pixel footprint.",
          "Trinitron uses integrated scanline beams and band-limited aperture-grille harmonics.",
          "DMG integrates liquid-crystal cell coverage instead of simply point-sampling a grid."
        ]
      },
      {
        "title": "More than a scanline overlay",
        "body": "Basic CRT Lite, LCD Grid and Scanline presets offer lighter display treatments. Advanced presets model more of the display itself: beam width, phosphor transmission or reflective liquid-crystal material. Directly sampled grids can become uneven at fractional scales; output-aware integration helps unresolved detail blend naturally. This is not a claim that every conventional filter needs integer scaling, or that every device and preset will be artifact-free."
      },
      {
        "title": "What the browser comparison shows",
        "body": "The television previews basic filters plus native-informed CRT V4, Trinitron V1 and DMG. The advanced modes adapt selected native formulas, including pixel-footprint integration, with one shared presentation curve. The web renderer omits temporal persistence, the full multi-pass bloom chain and native color management. It demonstrates display characteristics, not pixel-identical Metal output or real gameplay footage."
      },
      {
        "title": "Import RetroArch shader presets",
        "body": "A .slangp preset can reference several shader passes, textures and parameter values. Keep those dependencies together when importing. A preset file on its own may be incomplete; a .slang file describes a shader rather than an entire collection.",
        "points": [
          "Use packages intended for the supported shader workflow.",
          "If a preset cannot load, check referenced files and compatibility before changing the game.",
          "Try a lighter preset if a complex chain affects frame pacing or battery use."
        ]
      },
      {
        "title": "Picture quality has a performance cost",
        "body": "A multi-pass filter can need more GPU work than nearest-pixel output. Performance depends on the device, emulator core, output resolution and preset. Retropa does not promise that every imported shader runs equally well on every iPhone. Advanced filters require Plus; confirm the available choices in the app."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Browse filters on PackHub"
  }
}
