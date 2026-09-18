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
    "summary": "Retropa runs the .gba files you bring along. Start with a game that actually boots, then pick a handheld skin, map a controller and settle on a screen treatment that suits the way you play.",
    "imageAlt": "Product artwork showing Retropa's portrait and landscape handheld control layouts",
    "sections": [
      {
        "title": "Start with a .gba game file",
        "body": "Retropa plays GBA games on iPhone and iPad running iOS 18 or later. You bring the game file; the app ships without games or BIOS files. Keep your own copy somewhere outside the app as a backup, in case something goes wrong later.",
        "points": [
          "A GBA game normally uses the .gba extension.",
          "A .gb or .gbc file belongs to GB or GBC, not GBA.",
          "Renaming a file never converts it into another system."
        ]
      },
      {
        "title": "Import from the Files app",
        "body": "A cloud placeholder looks identical to a real file in a list, but the import fails until the bytes are actually local. Tap the import entry in Retropa's library, pick the game, then open it once. Confirm the picture, the sound and the default controls before you start customizing the layout."
      },
      {
        "title": "Pick a layout that fits the buttons",
        "body": "GBA controls need room for a directional pad, A and B, shoulder buttons, Start and Select. Try pressing them, not just looking at the artwork. Retropa imports .deltaskin packages, though a DS skin will not cover a GBA layout properly. Before you commit, check that the package supports the orientations you actually play in.",
        "points": [
          "Keep the game screen clear in every orientation you use.",
          "Pair a compatible controller in iOS first, then check how Retropa maps it.",
          "Premium skins and advanced filters require Retropa Plus; importing a file unlocks nothing."
        ]
      },
      {
        "title": "LCD character or clean pixels?",
        "body": "Look at the plain picture first, before any treatment. A light LCD filter can bring back the feel of a handheld screen; a CRT one pushes the image somewhere else entirely. Advanced filters work on the area the game actually renders, with no integer-scale requirement. What changes is the picture, not the game's resolution or which files load."
      },
      {
        "title": "When an import or a save will not work",
        "body": "Rule out the file extension, the selected system and the exact error message before anything else. If Files has not finished downloading the original, let it finish, then import again. BIOS errors follow whatever the chosen core asks for; an arcade neogeo.zip is not a GBA BIOS. A game's own save data and an emulator save state are separate artifacts, so never rename one into the other, and keep backups before you move between cores or apps.",
        "points": [
          "Switch to the default skin and a plain filter while chasing a control or display problem.",
          "Note the app version, system, core and error text for support.",
          "Leave commercial ROMs and BIOS files out of a support request."
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
    "summary": "Drop your .nds games into Retropa and make room for two screens. Check touch input, controls and file requirements before you go looking for a new layout or filter.",
    "imageAlt": "Product artwork of the Retropa game library and settings on iPhone",
    "sections": [
      {
        "title": "Prepare a .nds game",
        "body": "DS is its own system, not a bigger GBA. Retropa runs .nds files on iPhone and iPad with iOS 18 or later, and it brings no ROM or BIOS downloads of its own. Use files you are entitled to, keep a separate backup, and remember that renaming a .gba file will never make it a DS game."
      },
      {
        "title": "Import and check both screens",
        "body": "Get the file fully downloaded in Files, then choose it from the library import entry. Open the game with the default layout and look at both display areas. Play far enough to reach a touch interaction, because a title screen will not tell you whether every required input works.",
        "points": [
          "Start from the system Retropa detects for the .nds file, or set it yourself.",
          "Meet whatever BIOS or firmware requirement the installed core reports.",
          "Hold on to the original file while you diagnose errors."
        ]
      },
      {
        "title": "Give the touch screen enough room",
        "body": "Two displays will not fit a single-screen handheld layout. Pick a DS skin that shows both screens along with the controls the game needs. Portrait gives the screens a natural stacked arrangement; landscape depends on the skin you chose. Tap the small targets at the size you really play, especially on a smaller iPhone."
      },
      {
        "title": "Controllers do not replace every touch action",
        "body": "Retropa works with compatible external controllers and lets you remap buttons. Pair the controller in iOS, then confirm the assignments inside the app. A physical D-pad and action buttons will not stand in for a game's touch-screen prompts, so test those before you settle on a controller-only setup."
      },
      {
        "title": "Keep the first session simple",
        "body": "Get game and input compatibility settled before you layer on a complex shader chain. If frame pacing or the picture shifts after you pick a filter, step back to a simple preset and compare. Performance depends on the device, the core and the output size, and DS support is not a promise that every game behaves the same way on every phone.",
        "points": [
          "Premium skins and advanced filters require Retropa Plus.",
          "Back up original saves and save states; the two formats are not interchangeable.",
          "For support, send the app version, core and exact error, not the game or BIOS files."
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
    "summary": "Retropa runs the arcade families it supports: CPS, Neo Geo, PGM and M92, with touch controls, external controllers and CRT filters. Arcade emulation needs Retropa Plus, and the app ships without games or BIOS files.",
    "imageAlt": "Retropa artwork showing the game library and settings screens",
    "sections": [
      {
        "title": "CPS, Neo Geo and the arcade board",
        "body": "Retropa covers several arcade families, among them CPS I, CPS II, CPS III, Neo Geo, PGM and M92. What matters is matching your game to the board and ROM set the installed core expects. A family being on the list does not guarantee that every archive will run.",
        "points": [
          "Confirm the system in the app before choosing a file.",
          "Arcade play requires Retropa Plus.",
          "The app includes no commercial ROMs and no BIOS files."
        ]
      },
      {
        "title": "Neo Geo arcade is not Neo Geo Pocket",
        "body": "The two share a name and nothing else. Arcade Neo Geo titles and Neo Geo Pocket cartridges run on different systems from different files. If an arcade game reports a missing Neo Geo BIOS, open Arcade BIOS in Retropa, import the neogeo.zip package it asks for, and launch the game again. A Pocket ROM will not fill the gap, and renaming a ZIP will not either.",
        "points": [
          "Use BIOS files you have the right to use; Retropa supplies no downloads.",
          "A BIOS package cannot stand in for game, parent or clone ROM data you are missing.",
          "Read the exact error before changing anything, and keep the original archive."
        ]
      },
      {
        "title": "Why an arcade ZIP is different",
        "body": "Most handheld ROMs are one chip's worth of data. An arcade set can hold a dozen small ROM chips and still need a parent set or a BIOS to boot. Renaming a file to .zip tells Retropa nothing about what is inside it. Leave the archive as it came unless the import screen specifically asks you to extract it."
      },
      {
        "title": "When a game will not start",
        "body": "Start with the board you selected and the error text on screen. Then check whether your set is complete, and whether the BIOS or parent files it leans on are actually present. A clone archive alone often lacks pieces the core needs. No filter preset or skin swap will conjure up ROM data that was never there.",
        "points": [
          "Keep your original files untouched while you diagnose an import.",
          "Note the app version, the system and the exact error when you write to support.",
          "Never attach commercial ROMs or BIOS files to a support request."
        ]
      },
      {
        "title": "Set up the first session",
        "body": "Once the game boots, find the coin, start and action buttons before you press anything in a hurry. On an external controller, verify the mapping as well as the labels drawn on screen. Stay on a plain display preset for now, and save the CRT treatment for after you know the game and the controls behave."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Check the system and core catalog"
  },
  "delta-skins": {
    "title": "Import Delta skins on iPhone and iPad",
    "label": "Skins",
    "image": "material",
    "summary": "A skin moves your controls, not just the wallpaper behind them. Retropa opens .deltaskin packages and also ships a skin collection of its own for iPhone and iPad.",
    "imageAlt": "Retropa artwork showing portrait and landscape controller skins in several materials",
    "sections": [
      {
        "title": "A skin is a control layout",
        "body": "Everything on screen wants room: the picture, the D-pad, the action buttons, the menu row. A skin decides where each of those lands. Pick by system and orientation first, and treat color as the last consideration.",
        "points": [
          "Check which system a package was drawn for before importing it.",
          "Portrait and landscape coverage depends on the layouts the skin actually includes.",
          "A readable package format says nothing about whether a third-party layout fits your device."
        ]
      },
      {
        "title": "Import a .deltaskin package",
        "body": "Send the .deltaskin file to Retropa's skin import screen and pick it up from Files. Assign it to the matching system afterward. Then load a game and inspect the screen area, the directional controls and each action button before you commit to it.",
        "points": [
          "Import the whole .deltaskin package, not a screenshot of one.",
          "When a package refuses to load, recheck its format and target system before hunting for a replacement.",
          "Go back to a skin that works if the new one hides a control you need."
        ]
      },
      {
        "title": "Touch controls and physical controllers",
        "body": "Retropa also works with compatible external controllers, with button mapping you can adjust. Pair the pad in iOS first, then look at how Retropa reads it. Artwork and button assignments are separate jobs, so a fresh skin will not correct a mismapped trigger."
      },
      {
        "title": "Packages and purchase boundaries",
        "body": "PackHub is the catalog for browsing Retropa's skins. Premium packages require Retropa Plus, and importing a file from somewhere else does not get around that check. Requirements for a given package are listed in the app, so read them there before you commit. Delta compatibility describes a file format; it says nothing about any tie to the Delta project."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Browse skins on PackHub"
  },
  "crt-filters": {
    "title": "CRT filters for iPhone and iPad emulators",
    "label": "Filters",
    "image": "filter",
    "summary": "Retropa's advanced CRT and LCD filters work from the display area you actually have, so integer scaling is not a requirement. Keep the feel of a retro screen across iPhone sizes, iPad layouts and both orientations.",
    "imageAlt": "Retropa artwork showing the filter picker and several CRT display treatments",
    "sections": [
      {
        "title": "Choose the display, then the strength",
        "body": "Nearest-pixel mode leaves the original pixel edges sharp and unblended. CRT treatments bring scanlines, masks and edge shading; LCD treatments layer in a pixel or subpixel grid. Either way you are changing how the picture is drawn, not the game's resolution.",
        "points": [
          "Look at the unfiltered picture first, as a baseline.",
          "Inspect small text, bright edges and shadow detail rather than only the title screen.",
          "Judge the result at the size and orientation you really play in."
        ]
      },
      {
        "title": "No integer-scale requirement",
        "body": "Integer scaling gives every game pixel a whole number of display pixels. That stays crisp, yet it often wastes a strip of screen. Retropa's advanced filters instead measure the real output area, so their structure is not locked to 2x, 3x or any other whole multiple. You keep the game's aspect ratio and still fill the viewport your phone or skin provides.",
        "points": [
          "The output size decides the pattern, not a fixed multiplier.",
          "Aspect ratio is preserved even when the viewport is not a whole multiple.",
          "Compare presets at your normal playing size before settling on one."
        ]
      },
      {
        "title": "More than a scanline overlay",
        "body": "CRT Lite, LCD Grid and Scanline are the light presets, and they are honest about it. Advanced presets go after the display hardware: beam width, phosphor transmission, the reflectivity of a liquid-crystal cell. A grid sampled straight from the source tends to look uneven at fractional scales, while integration that respects the output lets fine detail settle. None of this means every ordinary filter demands integer scaling, or that some device and preset combination will never show an artifact."
      },
      {
        "title": "What the browser comparison shows",
        "body": "On the website you can preview the basic filters alongside CRT V4, Trinitron V1 and DMG, which follow their native formulas. The advanced modes are adapted from those formulas, pixel-footprint integration included, and share one presentation curve. The browser build skips temporal persistence, the full multi-pass bloom chain and native color management. Treat it as a demonstration of display character, not a pixel-for-pixel match to Metal output or a capture of real gameplay."
      },
      {
        "title": "Import RetroArch shader presets",
        "body": "One .slangp preset may point at several shader passes, textures and parameter values. Bring those dependencies along in the same import. A preset on its own can be incomplete, and a .slang file describes a single shader rather than a whole collection.",
        "points": [
          "Stick to packages built for the supported shader workflow.",
          "When a preset will not load, look at its referenced files and compatibility before you touch the game.",
          "Drop to a lighter preset if a long chain hurts frame pacing or drains the battery."
        ]
      },
      {
        "title": "Picture quality has a performance cost",
        "body": "A multi-pass filter asks more of the GPU than a plain nearest-pixel picture does. How much depends on the device, the emulator core, the output resolution and the preset itself. Retropa makes no promise that an imported shader will run the same way on every iPhone. Advanced filters need Retropa Plus; the app shows you which presets qualify."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Browse filters on PackHub"
  }
}
