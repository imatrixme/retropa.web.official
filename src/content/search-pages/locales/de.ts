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
    "title": "Game Boy-Emulator für iPhone und iPad | Retropa",
    "description": "Spiele deine eigenen .gb-Dateien mit Retropa auf iPhone und iPad. Welcher Core GB übernimmt, wie du ein Spiel importierst, wie du Bildschirm und Steuerung einrichtest und was du prüfst, wenn sich eine Datei nicht öffnen lässt.",
    "summary": "Retropa spielt Game-Boy-Spiele aus deinen eigenen .gb-Dateien auf iPhone und iPad, mit vier austauschbaren Cores, Handheld-Skins, LCD- und CRT-Behandlungen sowie Controller-Mapping.",
    "sections": [
      {
        "title": "Beginne mit einer .gb-Datei",
        "body": "Retropa spielt Game-Boy-Spiele aus Dateien, die dir bereits gehören. Die App ist kostenlos erhältlich und enthält weder Spiele noch BIOS-Dateien. Bereite die Spieldatei deshalb vorab vor und bewahre eine unveränderte Kopie außerhalb der App als Backup auf.",
        "points": [
          ".gb ist ein Game-Boy-Spiel, .gbc gehört zu Game Boy Color.",
          "Ein umbenannter Dateityp macht aus einem Spiel kein anderes System.",
          "Bewahre das Originalarchiv auf, bis das Spiel einwandfrei läuft."
        ]
      },
      {
        "title": "Welcher Core Game-Boy-Spiele ausführt",
        "body": "Retropa bringt mehr als einen Core mit, der Game-Boy-Titel ausführen kann, und du kannst pro Spiel zwischen ihnen wechseln. mGBA und SkyEmu decken sowohl GB, GBC als auch GBA ab, SameBoy ist gezielt auf GB und GBC ausgerichtet, und JGenesis deckt GB zusammen mit seinen Sega-Systemen ab. Wenn ein Core bei einem bestimmten Titel Probleme zeigt, probiere einen anderen aus, bevor du annimmst, die Datei sei defekt.",
        "points": [
          "mGBA ist für den Alltag eine gute erste Wahl.",
          "SameBoy legt den Schwerpunkt auf die Genauigkeit von GB und GBC.",
          "Der gewählte Core wird pro Spiel gespeichert."
        ]
      },
      {
        "title": "Importiere das Spiel über Dateien",
        "body": "Achte darauf, dass die Datei lokal heruntergeladen ist und in der Dateien-App nicht nur als Cloud-Platzhalter erscheint. Öffne den Import-Eintrag in der Retropa-Bibliothek und wähle das Spiel aus. Sobald es erscheint, öffne es und prüfe Bild, Ton und die standardmäßigen Bildschirmtasten, bevor du mit der Anpassung beginnst."
      },
      {
        "title": "Wähle ein Layout, das zum Originalbildschirm passt",
        "body": "Ein Game-Boy-Layout braucht ein Steuerkreuz, A und B sowie Start und Select. Im Hochformat sitzt der Bildschirm über der Steuerung, was sich für einhändiges Spielen eignet; im Querformat haben die Tasten mehr Platz. Prüfe in beiden Ausrichtungen, dass der Skin die Spielansicht nicht verdeckt und alle sechs Eingaben erreichbar sind.",
        "points": [
          "Prüfe jede Taste, nicht nur die Grafik.",
          "Delta-.deltaskin-Pakete lassen sich importieren, aber ein DS- oder GBA-Skin ist kein GB-Layout.",
          "Premium-Skins und erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Grüner Bildschirm, LCD-Raster oder klare Pixel",
        "body": "Beginne mit dem Originalbild, damit du einen Vergleich hast. Ein DMG-Preset erinnert an das reflektierende Vier-Ton-LCD des ursprünglichen Handhelds, ein LCD Grid ergänzt eine Subpixel-Struktur, und eine CRT-Behandlung erzeugt einen ganz anderen Look. Die erweiterten Filter von Retropa richten sich nach der tatsächlichen Ausgabefläche, statt einen ganzzahligen Skalierungsfaktor zu verlangen, sodass das Bild auf allen iPhone- und iPad-Größen sein Seitenverhältnis behält.",
        "points": [
          "Filter verändern die Darstellung, nicht die Auflösung des Spiels.",
          "Ein Filter behebt kein Kompatibilitätsproblem der Datei.",
          "Vergleiche mit dem Originalbild, bevor du ein Preset behältst."
        ]
      },
      {
        "title": "Wenn Import oder Speichern beim Game Boy fehlschlägt",
        "body": "Prüfe zuerst die Dateiendung, das gewählte System und die genaue Fehlermeldung. Wenn Dateien das Original noch nicht fertig heruntergeladen hat, schließe diesen Schritt ab, bevor du erneut importierst. Die Speicherdaten eines Spiels und ein Speicherstand des Emulators sind zwei verschiedene Dinge; benenne das eine nicht in das andere um und lege ein Backup an, bevor du einen Speicherstand zwischen Cores oder Apps verschiebst.",
        "points": [
          "Notiere App-Version, System, Core und Fehlermeldung für den Support.",
          "Hänge keine kommerziellen ROM- oder BIOS-Dateien an eine Support-Anfrage an.",
          "Nutze den Standard-Skin und einen einfachen Filter, wenn du ein Problem eingrenzt."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Enthält Retropa Game-Boy-Spiele?",
        "answer": "Nein. Retropa ist ein Emulator und stellt weder Spiele noch BIOS-Dateien bereit. Du importierst ausschließlich Dateien, für die du die nötigen Rechte besitzt."
      },
      {
        "id": "bios-needed",
        "question": "Braucht die Game-Boy-Emulation eine BIOS-Datei?",
        "answer": "GB- und GBC-Titel laufen in den von Retropa mitgelieferten Cores in der Regel ohne BIOS-Datei. Wenn ein Core einen BIOS-Bedarf meldet, folge dem Hinweis für genau diesen Core, statt eine unpassende Datei zu importieren."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Kann Retropa eine .gbc-Datei als Game-Boy-Spiel öffnen?",
        "answer": "Eine .gbc-Datei gehört zu Game Boy Color. Retropa führt sie auf dem passenden System aus, und eine umbenannte Endung ändert nichts daran, was die Datei tatsächlich ist."
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
    "title": "Game Boy Color-Emulator für iPhone und iPad | Retropa",
    "description": "Spiele deine eigenen .gbc-Spiele auf iPhone und iPad. Farbpaletten, reine GBC-Titel, Core-Wahl, Importschritte und die Prüfungen, wenn ein Game-Boy-Color-Spiel nicht startet.",
    "summary": "Retropa spielt Game-Boy-Color-Spiele aus deinen eigenen .gbc-Dateien, mit Palettenbehandlung, Core-Auswahl pro Spiel und Darstellungen, die zum reflektierenden Originalbildschirm passen.",
    "sections": [
      {
        "title": "Bereite eine .gbc-Datei vor",
        "body": "Game-Boy-Color-Spiele verwenden die Endung .gbc. Retropa enthält weder Spiele noch BIOS-Dateien, also bereite die Datei selbst vor, bewahre ein separates Backup auf und importiere nur Inhalte, deren Nutzung dir zusteht.",
        "points": [
          ".gbc ist ein Game-Boy-Color-Spiel.",
          "Spiele des ursprünglichen Game Boy verwenden .gb und laufen ebenfalls auf Retropa.",
          "Benenne eine .gb-Datei nicht in .gbc um, um Farbe zu erzwingen."
        ]
      },
      {
        "title": "Core-Wahl für Game Boy Color",
        "body": "SameBoy ist der Core mit Fokus auf GB und GBC, und auch mGBA und SkyEmu decken Game Boy Color ab. Wenn ein Titel falsche Farben oder ein falsches Timing zeigt, ist der Wechsel des Cores ein legitimer erster Test, denn jeder Core behandelt die Hardware etwas anders.",
        "points": [
          "SameBoy ist für GBC-Titel eine naheliegende erste Wahl.",
          "mGBA deckt GB, GBC und GBA in einem einzigen Core ab.",
          "Die Core-Auswahl wird pro Spiel gespeichert."
        ]
      },
      {
        "title": "Import und erster Start",
        "body": "Lade die Datei in den lokalen Speicher, damit die Dateien-App keinen Platzhalter liefert, und wähle sie anschließend im Import-Eintrag der Retropa-Bibliothek aus. Öffne das Spiel und prüfe Farbe, Ton und das standardmäßige Touch-Layout, bevor du Skins oder Filter anwendest, damit sich ein späteres Problem eindeutig zuordnen lässt.",
        "points": [
          "Teste eine Szene mit Farbeinsatz, nicht nur den Titelbildschirm.",
          "Prüfe den Tonkanal genauso wie das Bild.",
          "Lass die Originaldatei während der Fehlersuche unverändert."
        ]
      },
      {
        "title": "Bild und Layout für einen Farb-Handheld",
        "body": "Der Bildschirm des Game Boy Color ist klein und reflektierend. Ein LCD-Grid-Preset ergänzt eine Subpixel-Struktur, die dazu passt, während ein DMG-Preset bewusst an das ältere monochrome Panel erinnert. Die erweiterten Filter von Retropa arbeiten mit der tatsächlichen Ausgabefläche statt mit einem festen ganzzahligen Vielfachen, sodass die Proportionen über alle Gerätegrößen hinweg erhalten bleiben.",
        "points": [
          "Vergleiche jedes Preset mit dem Originalbild.",
          "Erweiterte Filter erfordern Retropa Plus.",
          "Prüfe, dass der Skin die Spielansicht nicht verdeckt."
        ]
      },
      {
        "title": "Steuerung und Ausrichtung",
        "body": "Ein Game-Boy-Color-Layout braucht ein Steuerkreuz, A und B sowie Start und Select. Das Hochformat eignet sich für kurze Sessions; im Querformat haben die Tasten mehr Platz und das Spielen ist auf einem größeren iPhone unter Umständen angenehmer. Stelle sicher, dass jede Eingabe in der Ausrichtung erreichbar ist, in der du tatsächlich spielst."
      },
      {
        "title": "Wenn ein Game-Boy-Color-Spiel nicht startet",
        "body": "Prüfe zuerst die Endung und das gewählte System und lies dann die genaue Fehlermeldung. Wenn Region oder Palette falsch wirken, vergleiche die Cores, bevor du Einstellungen änderst. Speicherstände, die ein Core angelegt hat, kann ein anderer unter Umständen nicht lesen; lege deshalb vor dem Wechsel ein Backup an.",
        "points": [
          "Notiere App-Version, System, Core und Fehlermeldung.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien an den Support.",
          "Kehre zu Standard-Skin und einem einfachen Filter zurück, um Probleme einzugrenzen."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Sind Game-Boy-Color-Spiele enthalten?",
        "answer": "Nein. Retropa ist ein Emulator und liefert weder Spiele noch BIOS-Dateien. Importiere nur Dateien, für deren Nutzung du die Rechte besitzt."
      },
      {
        "id": "gb-on-gbc",
        "question": "Kann ich auch Spiele des ursprünglichen Game Boy spielen?",
        "answer": "Ja. .gb-Dateien des ursprünglichen Game Boy laufen ebenfalls auf Retropa, und zwar in denselben Cores, die auch Game Boy Color übernehmen."
      },
      {
        "id": "force-colour",
        "question": "Bringt Farbe, wenn ich eine .gb-Datei in .gbc umbenenne?",
        "answer": "Nein. Die Endung ändert nicht, was die Datei enthält, deshalb schaltet das Umbenennen keine Game-Boy-Color-Funktionen frei."
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
    "title": "NES-Emulator für iPhone und iPad | Retropa",
    "description": "Führe deine eigenen NES-Spiele auf iPhone und iPad aus. Unterstützte Dateiformate wie .nes, .fds und .nsf, Core-Auswahl, Importschritte, Controller-Mapping und Fehlerbehebung.",
    "summary": "Retropa führt NES-Spiele aus deinen eigenen Dateien aus und deckt über zwei spezialisierte Cores die Formate .nes, .fds und NSF-Audio ab, mit Gamepad-Mapping und CRT-Behandlungen.",
    "sections": [
      {
        "title": "Dateiformate, die Retropa für NES akzeptiert",
        "body": "Die NES-Unterstützung in Retropa beschränkt sich nicht auf eine einzige Endung. Neben dem verbreiteten .nes-Cartridge-Abbild akzeptieren die Cores Abbilder des Famicom Disk System und NSF-Tondateien sowie die einfachen und vereinheitlichten Varianten des iNES-Containers.",
        "points": [
          ".nes ist das Standard-Abbild einer NES-Cartridge.",
          ".fds deckt Inhalte des Famicom Disk System ab.",
          ".nsf und .nsfe sind Tondateien und keine spielbaren Spiele.",
          "ZIP- und RetroPack-Container lassen sich importieren und direkt öffnen."
        ]
      },
      {
        "title": "Zwei Cores, ein System",
        "body": "Für NES-Titel liefert Retropa RusticoNES und TetaNES mit, und auch JGenesis deckt das System ab. Einen zweiten Core auszuprobieren ist der schnellste Weg, eine widerspenstige ROM von einer echten Emulationsabweichung zu unterscheiden, und die Wahl wird pro Spiel gespeichert.",
        "points": [
          "RusticoNES ist eine solide Standardwahl für Cartridge-Spiele.",
          "TetaNES ist die Alternative zum Testen, wenn etwas nicht rund läuft.",
          "NSF-Tondateien verhalten sich in jedem Core anders als Spiele."
        ]
      },
      {
        "title": "Importiere ein NES-Spiel",
        "body": "Lade die Datei zuerst lokal herunter, damit Dateien keinen Platzhalter zurückgibt, und öffne dann den Import-Eintrag in der Retropa-Bibliothek. Starte das Spiel mit dem Standard-Layout und prüfe Bild, Ton und die standardmäßigen Tasten, bevor du Skins oder Filter änderst."
      },
      {
        "title": "Umgang mit einem Zwei-Tasten-Controller",
        "body": "Der NES-Controller ist bewusst minimalistisch: ein Steuerkreuz, A, B, Start und Select. Auf einem Touchscreen liegt es nahe, die Tasten näher zusammenzurücken, also prüfe, ob diagonale Eingaben weiterhin erkannt werden und ob Start und Select während des Spielens nicht versehentlich getroffen werden. Ein gekoppelter physischer Controller löst das meiste davon.",
        "points": [
          "Kopple einen Controller zuerst in iOS und prüfe dann sein Mapping in Retropa.",
          "Prüfe die Diagonalen, nicht nur die vier Hauptrichtungen.",
          "Kontrolliere Hoch- und Querformat, wenn du in beiden spielst."
        ]
      },
      {
        "title": "Das Bild richtig einstellen",
        "body": "Die NES-Ausgabe war für einen Fernseher in Standardauflösung gedacht, deshalb wirkt eine CRT-Behandlung oft näher am Original als ein sauberes Pixelraster. Scanline- und Lochmasken-Presets stehen zur Verfügung, und die erweiterten Filter von Retropa richten sich nach der echten Ausgabefläche statt nach einem festen ganzzahligen Vielfachen.",
        "points": [
          "Nutze das Originalbild als Referenz.",
          "Herkömmliche Scanline-Overlays können bei Teilschritten flimmern.",
          "Erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Wenn ein NES-Spiel nicht lädt",
        "body": "Lies die genaue Fehlermeldung, bevor du etwas änderst. Ein fehlerhafter Dump, ein nicht unterstützter Mapper, ein Abbild ohne Header oder ein Disk-System-Spiel ohne BIOS sind unterschiedliche Probleme. Prüfe die Endung und das gewählte System und teste anschließend den anderen NES-Core.",
        "points": [
          "Notiere App-Version, Core und den vollständigen Fehlertext für den Support.",
          "Lass die Originaldatei während der Fehlersuche unverändert.",
          "Hänge keine kommerziellen ROM- oder BIOS-Dateien an eine Support-Anfrage an."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Welche NES-Formate öffnet Retropa?",
        "answer": "Retropa akzeptiert die Dateien .nes, .fds, .nsf, .nsfe, .unf und .unif und kann außerdem ZIP- und RetroPack-Container direkt öffnen."
      },
      {
        "id": "nsf",
        "question": "Kann ich eine .nsf-Datei wie ein Spiel spielen?",
        "answer": "Nein. NSF-Dateien sind Tondaten, sie geben also Audio statt eines Spiels wieder. Verwende eine .nes- oder .fds-Datei, um einen Titel zu spielen."
      },
      {
        "id": "gamepad",
        "question": "Funktioniert ein physischer Controller mit NES-Spielen?",
        "answer": "Ja. Kompatible Controller lassen sich mit iOS koppeln und in Retropa belegen. Prüfe das Mapping nach dem Koppeln, denn die Tastenreihenfolge entspricht nicht immer dem, was man erwartet."
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
    "title": "SNES-Emulator für iPhone und iPad | Retropa",
    "description": "Spiele deine eigenen SNES-Spiele auf iPhone und iPad. Unterstützte Formate wie .sfc und .smc, der LakeSnes-Core, Controller-Mapping für sechs Tasten und Schritte zur Fehlerbehebung.",
    "summary": "Retropa führt SNES-Spiele aus deinen eigenen .sfc- und .smc-Dateien im LakeSnes-Core aus, mit Mapping für Sechs-Tasten-Controller, Speicherständen und CRT-Darstellungen.",
    "sections": [
      {
        "title": "SNES-Dateiformate",
        "body": "Super-Nintendo-Abbilder werden meist als .sfc oder .smc verbreitet, und Retropa akzeptiert zusätzlich mehrere verwandte Container- und Copier-Formate. Wenn eine Datei fehlschlägt, ist die Endung das Erste, was du prüfen solltest, denn ein nicht passender Header ist eine häufige Ursache für ein Spiel, das nicht startet.",
        "points": [
          ".sfc und .smc sind die Standard-SNES-Abbilder.",
          "Retropa listet zusätzlich die Abdeckung von .fig, .swc, .bs und .st.",
          "ZIP- und RetroPack-Container lassen sich direkt öffnen."
        ]
      },
      {
        "title": "Der LakeSnes-Core",
        "body": "Retropa führt SNES-Titel in LakeSnes aus, und auch JGenesis listet das System. Wenn ein bestimmtes Spiel ein Timing- oder Grafikproblem zeigt, vergewissere dich, dass die Datei ein sauberes Abbild ist, bevor du den Core verantwortlich machst, und vergleiche die aktuelle App-Version mit den Versionshinweisen.",
        "points": [
          "LakeSnes ist der spezialisierte SNES-Core.",
          "Einige Titel sind auf bestimmte Cartridge-Coprozessoren angewiesen.",
          "Die Core-Auswahl pro Spiel wird gespeichert."
        ]
      },
      {
        "title": "Import und erster Durchlauf",
        "body": "Halte die Datei im lokalen Speicher statt in einem Cloud-Platzhalter und wähle sie dann im Import-Eintrag der Retropa-Bibliothek aus. Öffne das Spiel und prüfe Bild, Ton und die standardmäßigen Touch-Bedienelemente, bevor du eine Darstellungseinstellung änderst, damit spätere Probleme eine klare Ursache haben."
      },
      {
        "title": "Sechs Tasten brauchen echten Platz",
        "body": "Der SNES-Controller ergänzt X, Y, L und R zum Steuerkreuz, zu A, B, Start und Select, und viele Spiele erwarten gleichzeitige Eingaben. Auf einem Touchscreen lohnt es sich, das Layout im Querformat über die Fläche zu verteilen und jede Kombination zu prüfen. Ein gekoppelter physischer Controller ist für Action-Titel die verlässlichere Option.",
        "points": [
          "Prüfe L und R, die beim Mapping leicht vergessen werden.",
          "Teste eine Diagonale und eine Schultertaste gleichzeitig.",
          "Stelle sicher, dass der Skin die Spielansicht frei lässt."
        ]
      },
      {
        "title": "Eine Darstellung auswählen",
        "body": "SNES-Grafik war für eine CRT ausgelegt, deshalb wirken Scanline- und Lochmasken-Presets meist näher am Original als ein rohes Pixelraster. Die erweiterten Filter von Retropa berücksichtigen die tatsächliche Ausgabefläche, statt ein ganzzahliges Vielfaches zu verlangen, was auf Telefonen wichtig ist, deren verfügbare Höhe sich selten glatt teilen lässt.",
        "points": [
          "Nutze das Originalbild als Ausgangspunkt.",
          "Einfache Scanline-Overlays können bei Teilschritten flimmern.",
          "Erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Wenn ein SNES-Spiel nicht startet",
        "body": "Prüfe die Endung, das gewählte System und den genauen Fehlertext. Titel, die auf einen speziellen Cartridge-Chip angewiesen sind, sind die üblichen Verdächtigen, wenn ein Spiel fehlschlägt, während andere laufen. Halte die Originaldatei beim Testen intakt und versuche, zum alternativen Core zu wechseln.",
        "points": [
          "Notiere App-Version, Core und Fehler für den Support.",
          "Ein Filterwechsel behebt kein Problem mit einem Cartridge-Chip.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien an den Support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Ist es wichtig, ob die Datei .sfc oder .smc heißt?",
        "answer": "Beides sind Standard-SNES-Abbilder und Retropa akzeptiert jedes davon. Die Endung selbst ändert nichts am Spiel."
      },
      {
        "id": "chip-games",
        "question": "Warum schlägt ein Spiel fehl, während andere laufen?",
        "answer": "Einige Titel sind auf zusätzliche Cartridge-Hardware angewiesen. Wenn die Datei ein sauberes Abbild ist und andere Spiele laufen, ist diese Abhängigkeit die wahrscheinliche Ursache, und der Wechsel des Cores ist der nächste Test."
      },
      {
        "id": "saves",
        "question": "Sind Speicherstände zwischen Cores übertragbar?",
        "answer": "Nicht zuverlässig. Batterie-Speicherungen und Speicherstände sind verschiedene Artefakte, und ein Stand, den ein Core geschrieben hat, lädt in einem anderen unter Umständen nicht. Lege deshalb vor dem Wechsel ein Backup an."
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
    "title": "Sega Genesis- und Mega Drive-Emulator für iPhone | Retropa",
    "description": "Spiele deine eigenen Sega Genesis- und Mega Drive-Spiele auf iPhone und iPad. Die Formate .md, .smd und .gen, der JGenesis-Core, Sechs-Tasten-Mapping und Fehlerbehebung.",
    "summary": "Retropa führt Sega Genesis- und Mega Drive-Spiele aus deinen eigenen Dateien im JGenesis-Core aus, mit Unterstützung für Sechs-Tasten-Controller, Speicherständen und CRT-Darstellungen.",
    "sections": [
      {
        "title": "Genesis und Mega Drive sind dasselbe System",
        "body": "Die Konsole kam in Europa, Japan und dem größten Teil Asiens als Mega Drive auf den Markt und in Nordamerika als Genesis. Die Hardware ist dieselbe, eine Spieldatei funktioniert also in beiden Fällen; nur der Name auf der Verpackung unterscheidet sich. Retropa listet beide Namen, weshalb sich die Dateiendungen zwischen den Regionen leicht unterscheiden.",
        "points": [
          ".md und .smd sind die üblichen Mega-Drive-Abbilder.",
          ".gen ist die gängige nordamerikanische Endung.",
          "Die Endung ändert nichts an der Hardware, die das Spiel erwartet."
        ]
      },
      {
        "title": "Der JGenesis-Core",
        "body": "Retropa führt Genesis- und Mega-Drive-Titel in JGenesis aus, das auch Master System, Game Gear und mehrere Handheld-Systeme abdeckt. Weil ein Core mehrere Plattformen bedient, ist das pro Spiel gewählte System entscheidend: einen Master-System-Titel zu importieren, während das System auf Genesis steht, ist eine häufige Quelle von Verwirrung.",
        "points": [
          "JGenesis deckt MD, GEN, SMS und GG ab.",
          "Bestätige das erkannte System, bevor du ein Problem meldest.",
          "Core- und Systemwahl werden pro Spiel gespeichert."
        ]
      },
      {
        "title": "Importiere ein Mega-Drive-Spiel",
        "body": "Speichere die Datei lokal, statt sie als Cloud-Platzhalter liegen zu lassen, und wähle sie dann im Import-Eintrag der Retropa-Bibliothek aus. Öffne das Spiel und prüfe Bild, Ton und das standardmäßige Touch-Layout, bevor du einen Skin oder einen Filter anwendest."
      },
      {
        "title": "Ein Sechs-Tasten-Pad belegen",
        "body": "Genesis-Controller gab es als Drei-Tasten- und als Sechs-Tasten-Version, und manche Spiele verhalten sich unterschiedlich, je nachdem, welche Variante erkannt wird. Bestätige in einem Touch-Layout, dass A, B, C und, sofern vorhanden, X, Y, Z und Mode alle erreichbar sind, und teste eine Kombination, die das Spiel tatsächlich verwendet.",
        "points": [
          "Prüfe sowohl das Drei-Tasten- als auch das Sechs-Tasten-Mapping.",
          "Kontrolliere Start, das in vielen Titeln zugleich als Pause dient.",
          "Ein gekoppelter physischer Controller vermeidet die meisten Fehleingaben."
        ]
      },
      {
        "title": "Darstellung für eine 16-Bit-Konsole",
        "body": "Die Ausgabe des Mega Drive ist auf eine CRT ausgelegt, deshalb wirkt ein Scanline- oder Lochmasken-Preset meist näher am Original als ein rohes Pixelraster, besonders bei Dithering, das der Fernseher verwischt hätte. Die erweiterten Filter von Retropa arbeiten mit der echten Ausgabefläche statt mit einem festen ganzzahligen Vielfachen.",
        "points": [
          "Beginne mit dem Originalbild und vergleiche dann.",
          "Dithering-Muster sind ein guter Test für ein Filter-Preset.",
          "Erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Wenn ein Genesis-Spiel nicht startet",
        "body": "Prüfe die Endung, die Systemauswahl und die genaue Fehlermeldung. Abweichungen bei Region und System sind hier häufiger als bei Systemen mit nur einer Plattform, weil ein Core mehrere Konsolen bedient. Halte die Originaldatei intakt und bestätige das erkannte System, bevor du tiefer greifende Änderungen vornimmst.",
        "points": [
          "Notiere App-Version, erkanntes System, Core und Fehler.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien an den Support.",
          "Behalte ein separates Backup, bevor du Speicherstände zwischen Cores verschiebst."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Ist Mega Drive dasselbe wie Genesis?",
        "answer": "Ja. Es ist eine Konsole mit zwei regionalen Namen, eine Spieldatei läuft also unter beiden Bezeichnungen."
      },
      {
        "id": "six-button",
        "question": "Unterstützt Retropa Sechs-Tasten-Controller?",
        "answer": "Das Touch-Layout und das Mapping externer Controller decken die zusätzlichen Tasten ab, und manche Spiele ändern ihr Verhalten je nach erkannter Pad-Variante."
      },
      {
        "id": "system-detect",
        "question": "Warum wird mein Spiel als falsches System behandelt?",
        "answer": "Ein Core bedient mehrere Sega-Plattformen. Prüfe deshalb das erkannte System für dieses Spiel und korrigiere es, bevor du ein Kompatibilitätsproblem meldest."
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
    "title": "Game Gear-Emulator für iPhone und iPad | Retropa",
    "description": "Spiele deine eigenen .gg-Game-Gear-Spiele auf iPhone und iPad. Welcher Core sie ausführt, wie du eine Datei importierst, wie du den Bildschirm einrichtest und was du prüfst, wenn ein Spiel fehlschlägt.",
    "summary": "Retropa führt Game-Gear-Spiele aus deinen eigenen .gg-Dateien über den JGenesis-Core aus, mit dem Look eines hintergrundbeleuchteten Bildschirms, Handheld-Skins und vollständigem Controller-Mapping.",
    "sections": [
      {
        "title": "Bereite eine .gg-Datei vor",
        "body": "Game-Gear-Spiele verwenden die Endung .gg. Retropa enthält weder Spiele noch BIOS-Dateien, halte die Datei also bereit und bewahre vor dem Import eine Kopie außerhalb der App auf.",
        "points": [
          ".gg ist die Game-Gear-Endung.",
          "Eine .sms-Datei gehört zum Master System, nicht zum Game Gear.",
          "Umbenennen konvertiert nicht zwischen den beiden."
        ]
      },
      {
        "title": "Welcher Core Game Gear übernimmt",
        "body": "JGenesis deckt Game Gear neben Mega Drive, Genesis und Master System ab. Weil ein Core mehrere Sega-Plattformen bedient, prüfe, dass das Spiel als Game Gear erkannt wird, bevor du ein Kompatibilitätsproblem untersuchst."
      },
      {
        "title": "Import und erster Start",
        "body": "Lade die Datei lokal herunter und wähle sie dann im Import-Eintrag der Retropa-Bibliothek aus. Bestätige Bild, Ton und Standardsteuerung, bevor du einen Skin anwendest, damit ein späteres Problem eine offensichtliche Ursache hat."
      },
      {
        "title": "Ein kleiner hintergrundbeleuchteter Bildschirm",
        "body": "Das Panel des Game Gear war hintergrundbeleuchtet und klein, eine LCD-Grid-Behandlung passt daher gut dazu, während ein kräftigeres CRT-Preset deutlich schwerer wirkt als die Originalhardware. Die erweiterten Filter von Retropa richten sich nach der echten Ausgabefläche, statt ein ganzzahliges Vielfaches zu verlangen.",
        "points": [
          "Vergleiche jedes Preset mit dem Originalbild.",
          "Erweiterte Filter erfordern Retropa Plus.",
          "Prüfe, dass der Skin die Spielansicht nicht verdeckt."
        ]
      },
      {
        "title": "Steuerung und Ausrichtung",
        "body": "Die Game-Gear-Hardware bot ein Steuerkreuz, zwei Aktionstasten und Start. Die geringe Tastenzahl macht ein Hochformat-Layout angenehm, prüfe aber, dass Start erreichbar ist, ohne den Griff zu verändern, und teste die Diagonalen."
      },
      {
        "title": "Wenn ein Game-Gear-Spiel nicht läuft",
        "body": "Bestätige die Endung, das erkannte System und den genauen Fehlertext. Eine als Game Gear importierte Master-System-Datei oder umgekehrt ist eine häufige Ursache. Halte die Originaldatei beim Testen intakt.",
        "points": [
          "Notiere App-Version, erkanntes System, Core und Fehler.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien an den Support.",
          "Lege ein Backup an, bevor du Speicherstände zwischen Cores verschiebst."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Ist Game Gear dasselbe wie Master System?",
        "answer": "Beide sind eng verwandt, aber unterschiedliche Systeme mit unterschiedlichen Dateiendungen. Ein Core führt beide aus, prüfe also, als welches System eine Datei erkannt wird."
      },
      {
        "id": "bios",
        "question": "Braucht Game Gear eine BIOS-Datei?",
        "answer": "In den von Retropa mitgelieferten Cores nicht. Wenn ein Core einen Bedarf meldet, folge dem Hinweis dieses Cores, statt eine unpassende Datei zu importieren."
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
    "title": "Master System-Emulator für iPhone und iPad | Retropa",
    "description": "Führe deine eigenen .sms-Spiele für das Sega Master System auf iPhone und iPad aus. Core-Abdeckung, Importschritte, Steuerungslayout und was du prüfst, wenn ein Titel nicht startet.",
    "summary": "Retropa führt Sega Master System-Spiele aus deinen eigenen .sms-Dateien im JGenesis-Core aus, mit Handheld-Skins, Darstellungen und Controller-Mapping.",
    "sections": [
      {
        "title": "Bereite eine .sms-Datei vor",
        "body": "Master-System-Spiele verwenden die Endung .sms. Retropa liefert weder Spiele noch BIOS-Dateien, bereite die Datei also vor und bewahre ein Backup außerhalb der App auf.",
        "points": [
          ".sms ist die Master-System-Endung.",
          ".gg gehört zum Game Gear und ist ein anderes System.",
          "ZIP- und RetroPack-Container lassen sich direkt öffnen."
        ]
      },
      {
        "title": "Core-Abdeckung",
        "body": "JGenesis übernimmt das Master System gemeinsam mit Mega Drive, Genesis und Game Gear. Da ein Core mehrere Plattformen bedient, ist die Bestätigung des erkannten Systems der erste Diagnoseschritt, wenn sich eine Datei unerwartet verhält."
      },
      {
        "title": "Import und Prüfung",
        "body": "Halte die Datei im lokalen Speicher und wähle sie dann im Import-Eintrag der Retropa-Bibliothek aus. Prüfe Bild, Ton und das Standard-Layout, bevor du einen Skin oder ein Darstellungs-Preset anwendest."
      },
      {
        "title": "Zwei Tasten, ein Steuerkreuz",
        "body": "Master-System-Controller hatten ein Steuerkreuz, zwei Aktionstasten und bei manchen Modellen eine Pausentaste direkt an der Konsole. In einem Touch-Layout lohnt es sich zu prüfen, dass die Pause irgendwo erreichbar belegt ist, denn sie wird leicht ausgelassen."
      },
      {
        "title": "Bildbehandlung",
        "body": "Master-System-Titel sind auf eine CRT-Anzeige ausgelegt. Scanline- und Lochmasken-Presets wirken in der Regel näher am Original als ein rohes Pixelraster, und die erweiterten Filter von Retropa passen sich der echten Ausgabefläche an, statt ein festes ganzzahliges Vielfaches zu verlangen.",
        "points": [
          "Vergleiche Presets mit dem Originalbild.",
          "Erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Wenn ein Master-System-Spiel nicht startet",
        "body": "Prüfe die Endung, das erkannte System und die genaue Fehlermeldung. Regionale Unterschiede sowie Verwechslungen zwischen Master System und Game Gear sind die üblichen Ursachen. Lass die Originaldatei während der Fehlersuche unverändert.",
        "points": [
          "Notiere App-Version, erkanntes System, Core und Fehler.",
          "Hänge keine kommerziellen ROM- oder BIOS-Dateien an eine Support-Anfrage an."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Woran erkenne ich, ob eine Datei zum Master System oder zum Game Gear gehört?",
        "answer": "Prüfe die Endung: .sms steht für Master System und .gg für Game Gear. Retropa zeigt das erkannte System für das importierte Spiel an."
      },
      {
        "id": "pause",
        "question": "Wo ist die Pausentaste?",
        "answer": "Auf der Originalhardware saß sie an der Konsole statt am Controller. In Retropa gehört sie zum Bildschirm-Layout, prüfe also, dass sie auf einer gut erreichbaren Taste liegt."
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
    "title": "WonderSwan-Emulator für iPhone und iPad | Retropa",
    "description": "Spiele deine eigenen .ws-WonderSwan-Spiele auf iPhone und iPad. Der Ares-Core, die vertikale Ausrichtung, Importschritte und Fehlerbehebung für einen weniger verbreiteten Handheld.",
    "summary": "Retropa führt WonderSwan-Spiele aus deinen eigenen .ws-Dateien im Ares-Core aus, einschließlich der vertikalen Ausrichtung, für die die Hardware entworfen wurde.",
    "sections": [
      {
        "title": "Bereite eine .ws-Datei vor",
        "body": "WonderSwan-Spiele verwenden die Endung .ws, WonderSwan Color verwendet .wsc. Retropa enthält weder Spiele noch BIOS-Dateien; bereite die Datei vor und bewahre ein Backup auf.",
        "points": [
          ".ws ist WonderSwan, .wsc ist WonderSwan Color.",
          "Die beiden sind unterschiedliche Systeme mit unterschiedlichen Möglichkeiten.",
          "Umbenennen rüstet ein Spiel nicht auf das Farbmodell auf."
        ]
      },
      {
        "title": "Der Ares-Core",
        "body": "Ares übernimmt in Retropa WonderSwan und WonderSwan Color, daneben weitere Handheld-Systeme. Wenn ein Titel nicht startet, prüfe, dass die Datei ein sauberes Abbild ist und das erkannte System zur Dateiendung passt, bevor du Einstellungen änderst."
      },
      {
        "title": "Import und erster Durchlauf",
        "body": "Speichere die Datei lokal und wähle sie dann im Import-Eintrag der Retropa-Bibliothek aus. Prüfe Bild, Ton und Standardsteuerung, bevor du einen Skin oder ein Darstellungs-Preset anwendest."
      },
      {
        "title": "Ein Handheld, der vertikal gehalten werden wollte",
        "body": "Der WonderSwan war für beide Ausrichtungen ausgelegt, und viele Titel wurden für vertikales Spielen entwickelt. Retropa unterstützt Hochformat-Layouts, prüfe also, ob das Spiel, das du spielst, einen gedrehten Bildschirm erwartet, bevor du das Bild für falsch hältst.",
        "points": [
          "Probiere Hoch- und Querformat aus.",
          "Nicht jeder Titel verwendet dieselbe Ausrichtung.",
          "Stelle sicher, dass alle Eingaben in der gewählten Ausrichtung erreichbar sind."
        ]
      },
      {
        "title": "Bilddarstellung auf dem Panel",
        "body": "Der WonderSwan nutzte ein reflektierendes monochromes Panel mit einer eigenständigen Pixelstruktur. Ein LCD-Grid-Preset passt meist gut dazu, während ein CRT-Preset schwerer wirkt als die Originalhardware. Erweiterte Filter richten sich nach der tatsächlichen Ausgabefläche.",
        "points": [
          "Nutze das Originalbild als Referenz.",
          "Erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Wenn ein WonderSwan-Spiel nicht startet",
        "body": "Prüfe die Endung, das erkannte System und die genaue Fehlermeldung. Eine .wsc-Datei als WonderSwan zu installieren oder umgekehrt ist eine häufige Verwechslung. Halte die Originaldatei beim Testen intakt.",
        "points": [
          "Notiere App-Version, erkanntes System, Core und Fehler.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien an den Support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Ändert das Farbmodell die Datei?",
        "answer": "Ja. WonderSwan und WonderSwan Color verwenden unterschiedliche Endungen, und ein Farbtitel verhält sich auf dem monochromen System unter Umständen nicht korrekt."
      },
      {
        "id": "orientation",
        "question": "Warum sieht der Bildschirm gedreht aus?",
        "answer": "Viele WonderSwan-Titel wurden für vertikales Spielen entwickelt. Probiere das Hochformat-Layout aus, bevor du das Bild für falsch hältst."
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
    "title": "Neo Geo Pocket-Emulator für iPhone und iPad | Retropa",
    "description": "Führe deine eigenen .ngp- und .ngpc-Spiele für Neo Geo Pocket auf iPhone und iPad aus. Core-Abdeckung, die joystickartige Steuerung und der Unterschied zum Neo Geo-Arcade-System.",
    "summary": "Retropa führt Neo Geo Pocket- und Neo Geo Pocket Color-Spiele aus deinen eigenen Dateien im Ares-Core aus und ist getrennt von der Neo Geo-Arcade-Emulation.",
    "sections": [
      {
        "title": "Neo Geo Pocket ist nicht Neo Geo-Arcade",
        "body": "Das Neo Geo Pocket und das Neo Geo Pocket Color sind Handheld-Konsolen. Beide teilen den Namen mit der Neo Geo MVS- und AES-Arcade-Hardware, sind aber vollständig andere Systeme mit anderen Dateien und anderen Cores. Arcade-Unterstützung erfordert in Retropa Plus; die Pocket-Emulation nicht.",
        "points": [
          ".ngp ist Neo Geo Pocket, .ngpc und .ngc stehen für das Farbmodell.",
          "Eine Arcade-neogeo.zip ist kein Pocket-Spiel.",
          "Arcade- und Pocket-Bibliotheken sind getrennt."
        ]
      },
      {
        "title": "Bereite die richtige Datei vor",
        "body": "Prüfe die Endung, bevor du importierst. Ein Pocket-Spiel ist ein einzelnes Handheld-Abbild, während ein Arcade-Neo-Geo-Set meist aus mehreren Chip-Dateien plus einem optionalen BIOS besteht. Das eine für das andere zu halten, ist der häufigste Fehler bei diesem System."
      },
      {
        "title": "Der Ares-Core",
        "body": "Ares übernimmt in Retropa Neo Geo Pocket und Neo Geo Pocket Color neben anderen Handheld-Plattformen. Wenn ein Spiel nicht startet, prüfe die Endung und das erkannte System und überlege dann, ob die Datei ein sauberes Abbild ist."
      },
      {
        "title": "Ein Mikroschalter-Stick statt eines Steuerkreuzes",
        "body": "Das Neo Geo Pocket verwendete einen klickenden Mikroschalter-Stick statt eines herkömmlichen Steuerkreuzes. In der Praxis bedeutet das, dass präzise Diagonalen wichtiger sind als sonst. Prüfe beim Testen eines Touch-Layouts deshalb, dass diagonale Eingaben sauber erkannt werden, statt nur die vier Hauptrichtungen zu kontrollieren.",
        "points": [
          "Teste Diagonalen ausdrücklich.",
          "Prüfe, dass die beiden Aktionstasten auch in langen Sessions bequem sind.",
          "Für Kampfspiele lohnt sich ein gekoppelter physischer Controller."
        ]
      },
      {
        "title": "Bildbehandlung",
        "body": "Das Farbpanel des Pocket ist klein und niedrig aufgelöst, eine leichte LCD-Behandlung passt deshalb meist besser als ein kräftiges CRT-Preset. Die erweiterten Filter von Retropa arbeiten mit der echten Ausgabefläche, statt ein ganzzahliges Vielfaches zu verlangen.",
        "points": [
          "Vergleiche mit dem Originalbild.",
          "Erweiterte Filter erfordern Retropa Plus."
        ]
      },
      {
        "title": "Wenn ein Pocket-Spiel nicht startet",
        "body": "Bestätige die Endung, das erkannte System und die genaue Fehlermeldung. Wenn du Arcade-Dateien in der Bibliothek hast, prüfe, ob du nicht versehentlich eine davon ausgewählt hast. Halte die Originaldatei während der Fehlersuche intakt.",
        "points": [
          "Notiere App-Version, erkanntes System, Core und Fehler.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien an den Support."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Kann ich hier Neo Geo-Arcade-Spiele spielen?",
        "answer": "Das ist ein separates System mit eigenen Cores und Dateien. Retropa unterstützt Arcade-Familien, und diese erfordern Retropa Plus; die Neo Geo Pocket-Emulation ist davon getrennt."
      },
      {
        "id": "neogeo-zip",
        "question": "Brauche ich für Pocket-Spiele eine neogeo.zip?",
        "answer": "Nein. Diese Datei gehört zur Neo Geo-Arcade-Hardware. Pocket-Spiele verwenden sie nicht."
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
    "title": "Neo Geo-Emulator für iPhone und iPad | Retropa",
    "description": "Spiele unterstützte Neo Geo MVS-Arcade-Dateien mit Retropa auf iPhone und iPad. Set-Struktur, BIOS-Anforderungen, Parent- und Clone-Sets und was du prüfst, wenn ein Spiel nicht startet.",
    "summary": "Retropa führt unterstützte Neo Geo-Arcade-Sets auf iPhone und iPad mit Touch- und externer Steuerung sowie CRT-Filtern aus. Arcade-Spiele erfordern Retropa Plus; Spiele und BIOS-Dateien sind nicht enthalten.",
    "sections": [
      {
        "title": "Neo Geo-Arcade benötigt Plus",
        "body": "Die Neo Geo-Arcade-Emulation gehört zur Arcade-Familie von Retropa, und Arcade-Cores erfordern Retropa Plus. Das ist getrennt vom Neo Geo Pocket, einem Handheld-System, das die reguläre Pocket-Unterstützung abdeckt.",
        "points": [
          "Arcade-Familien erfordern Retropa Plus.",
          "Neo Geo Pocket ist ein anderes, tragbares System.",
          "Spiele und BIOS-Dateien sind in keinem Fall enthalten."
        ]
      },
      {
        "title": "Ein Arcade-Set ist nicht eine Datei",
        "body": "Konsolenemulation bedeutet meist eine Datei pro Spiel. Arcade-Hardware funktioniert anders: Ein Spiel ist ein Set aus Chip-Dateien, oft in einer ZIP gebündelt, und viele Spiele hängen von einem Parent-Set oder einem BIOS ab. Deshalb verhält sich eine Arcade-ZIP anders als eine Handheld-ROM.",
        "points": [
          "Lass die ZIP intakt, sofern der Importvorgang nicht ausdrücklich das Entpacken verlangt.",
          "Unter Umständen ist ein separates BIOS-Archiv erforderlich.",
          "Ein Clone-Set enthält möglicherweise nicht jede Datei, die der Core braucht."
        ]
      },
      {
        "title": "Import und erster Start",
        "body": "Wähle das Set im Import-Eintrag der Retropa-Bibliothek aus und starte es anschließend mit dem Standard-Layout. Wenn der Core eine fehlende Datei oder ein fehlendes BIOS meldet, lies diese Meldung genau: Ein fehlendes Parent-Set und ein fehlendes BIOS erfordern unterschiedliche Lösungen.",
        "points": [
          "Lies die genaue Fehlermeldung, bevor du etwas änderst.",
          "Bewahre das Originalarchiv während der Fehlersuche auf.",
          "Stelle sicher, dass Münz- und Start-Eingaben erreichbar sind."
        ]
      },
      {
        "title": "Neo Geo Pocket-Dateien funktionieren hier nicht",
        "body": "Wenn du .ngp- oder .ngpc-Dateien hast, gehören diese zu den Pocket-Systemen und nicht zur Arcade-Familie. Eine Pocket-ROM oder eine umbenannte ZIP kann ein Arcade-Set nicht ersetzen, und umgekehrt gilt dasselbe.",
        "points": [
          ".ngp und .ngpc sind Pocket-Dateien für Handhelds.",
          "Arcade-Sets bestehen aus mehreren Dateien und brauchen unter Umständen ein BIOS.",
          "Prüfe das erkannte System, bevor du ein Problem meldest."
        ]
      },
      {
        "title": "Arcade-Steuerung und Bildschirm",
        "body": "Arcade-Hardware erwartet einen Joystick plus mehrere Aktionstasten, und viele Titel setzen auf gleichzeitige Eingaben. Retropa unterstützt Bildschirmsteuerung und kompatible externe Controller und enthält CRT-Behandlungen, die zur Arcade-Ausgabe passen. Erweiterte Filter erfordern Plus.",
        "points": [
          "Kopple einen Controller in iOS, bevor du ihn belegst.",
          "Teste eine Diagonale und eine Taste gleichzeitig.",
          "CRT-Presets passen zur Arcade-Ausgabe meist besser als ein rohes Raster."
        ]
      },
      {
        "title": "Wenn ein Neo Geo-Spiel nicht startet",
        "body": "Prüfe die gewählte Platine, den Inhalt des Sets und jede vom Core gemeldete BIOS-Anforderung. Ein alleinstehendes Clone-Set ohne sein Parent oder ein Set mit fehlender Datei startet nicht, ganz gleich welcher Filter oder Skin angewendet wird.",
        "points": [
          "Notiere App-Version, Platinenauswahl, Core und den genauen Fehler.",
          "Filter- oder Skin-Änderungen beheben keine fehlenden ROM-Daten.",
          "Hänge keine kommerziellen ROM- oder BIOS-Dateien an eine Support-Anfrage an."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Warum benötigen Arcade-Cores Plus?",
        "answer": "Arcade-Familien gehören zum kostenpflichtigen Funktionsumfang, zusammen mit Premium-Skins und erweiterten Filtern. Pocket- und Cartridge-Systeme erfordern das nicht."
      },
      {
        "id": "bios",
        "question": "Brauche ich ein Neo Geo-BIOS?",
        "answer": "Viele Arcade-Sets erwarten eines, und der Core teilt dir mit, wenn es fehlt. Verwende ein BIOS, dessen Nutzung dir zusteht; Retropa bietet keine Downloads an."
      },
      {
        "id": "pocket-confusion",
        "question": "Ist Neo Geo Pocket dasselbe?",
        "answer": "Nein. Pocket ist eine Handheld-Konsole mit eigenen Dateien. Ein Arcade-Set und ein Pocket-Spiel sind nicht austauschbar."
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
    "title": "mGBA-Core auf iPhone und iPad | Retropa",
    "description": "Nutze mGBA in Retropa für Game Boy, Game Boy Color und Game Boy Advance. Katalogformate, Prüfungen beim ersten Start, Vorsichtsmaßnahmen für Speicherstände und Core-Wechsel mit Plus.",
    "summary": "mGBA deckt in Retropa die Game-Boy-Handheld-Familie ab. Beginne mit dem Standard-Layout und dem Originalbild und prüfe dann eine echte Spielszene, bevor du Darstellungseinstellungen änderst.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "mGBA-Upstream-Projekt: https://github.com/mgba-emu/mgba. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Erster Start über die Handheld-Generationen",
        "body": "Lade deine Datei lokal in Dateien herunter, importiere sie aus der Retropa-Bibliothek und bestätige das erkannte System. Ein Game-Boy-Color-Titel braucht seinen Farb-Hardwarepfad; den Dateinamen zu ändern ist kein Weg, Farbfunktionen hinzuzufügen oder zu entfernen. Teste beim Game Boy Advance L und R genauso wie die Face-Tasten, denn ein Layout, das für die älteren Handhelds entworfen wurde, lässt sie unter Umständen weg.",
        "points": [
          "Prüfe Ton und Eingabe nach dem Titelbildschirm.",
          "Teste den Standard-Skin, bevor du ein eigenes Layout importierst.",
          "Bewahre die Originaldatei außerhalb der App auf."
        ]
      },
      {
        "title": "Emulation und Bild-Effekte trennen",
        "body": "Wenn eine Szene falsch aussieht, vergleiche sie zuerst mit deaktivierten Filtern. Eine Grünbild-Behandlung verändert bewusst die Farbe, und ein LCD-Raster verändert bewusst das Erscheinungsbild der Pixel. Diese Effekte können nicht klären, ob mGBA das Spiel falsch rendert. Notiere bei einem Ton- oder Timing-Problem eine wiederholbare Szene und die App-Version, statt nur das Startlogo zu beurteilen."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "Grenzen des Handheld-Umfangs",
        "body": "mGBA ist in Retropa nicht der Pfad für Nintendo DS. Eine DS-Datei braucht den DS-Core des Katalogs und kein umbenanntes Game-Boy-Advance-Abbild. Ebenso ist ein Speicherstand aus einem anderen Emulator keine Spieldatei und sollte nicht als solche importiert werden. Folge einem BIOS-Hinweis für das gewählte System, falls einer erscheint; Retropa liefert keine Firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Kann ich den Core für ein einzelnes Spiel ändern?",
        "answer": "Ja, mit Retropa Plus. Die Auswahl wird pro Spiel gespeichert, sichere aber vorher deine Speicherstände und erwarte nicht, dass Stände über Cores hinweg funktionieren."
      },
      {
        "id": "display",
        "question": "Behebt ein anderer Filter ein Kompatibilitätsproblem?",
        "answer": "Nein. Teste zuerst mit dem Originalbild. Ein Filter verändert die Darstellung, nicht die emulierte Hardware oder den Inhalt der Spieldatei."
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
    "title": "SkyEmu-Core auf iPhone und iPad | Retropa",
    "description": "SkyEmu deckt in Retropa die Game-Boy-Familie und den Nintendo-DS-Beta-Pfad ab. Prüfe Formate, Touch-Steuerung für zwei Bildschirme, Einschränkungen und Core-Wechsel mit Plus.",
    "summary": "SkyEmu übernimmt in Retropa den Nintendo-DS-Beta-Pfad ebenso wie die Game-Boy-Handhelds. Die DS-Kompatibilität hängt vom einzelnen Titel ab und ist kein Versprechen, dass jedes Spiel oder jede Touch-Interaktion korrekt funktioniert.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "SkyEmu-Upstream-Projekt: https://github.com/skylersaleh/SkyEmu. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS mit SkyEmu",
        "body": "Behandle die DS-Kompatibilität als titelabhängig. Importiere eine lokal heruntergeladene Datei, bestätige, dass Nintendo DS erkannt wurde, und teste über den Startbildschirm hinaus. Prüfe eine Szene mit Touch-Eingabe und eine Szene mit Ton, bevor du dich auf eine lange Session verlässt. Notiere App-Version und den genauen Fehler, wenn ein Titel einfriert; ein Skin-Wechsel kann ein Kompatibilitätsproblem des Cores nicht beheben.",
        "points": [
          "Der Katalog listet für Nintendo DS nur SkyEmu.",
          "Der Core-Wechsel mit Plus schafft keinen alternativen DS-Core.",
          "Halte beim Testen von DS-Titeln unabhängige Sicherungen der Speicherstände vor."
        ]
      },
      {
        "title": "Zwei Bildschirme und Touch-Eingabe",
        "body": "Wähle ein Layout, das beide Anzeigen sichtbar lässt. Im Hochformat lassen sie sich vertikal stapeln; im Querformat hängt es vom Skin ab. Teste kleine Touch-Ziele in der Größe, in der du tatsächlich spielst, und prüfe, welche Anzeige Touch-Eingaben erhält. Ein physischer Controller kann belegte Tasten übernehmen, aber nicht jede Touch-Interaktion ersetzen.",
        "points": [
          "Teste beide Anzeigen und nicht nur die Hauptspielansicht.",
          "Lass die Touch-Steuerung auch mit externem Controller erreichbar.",
          "Ein Handheld-Skin mit einem Bildschirm ist kein DS-Layout."
        ]
      },
      {
        "title": "SkyEmu für die älteren Handhelds nutzen",
        "body": "Die Game-Boy-Familie verwendet Layouts mit einem einzigen Bildschirm. Bestätige das erkannte System und nutze einen passenden Skin, bevor du Farb- oder fehlende Tastenprobleme untersuchst. ZIP und RetroPack sind Import-Container und keine zusätzlichen emulierten Systeme; die Datei darin muss weiterhin zum Katalog passen. Eine umbenannte Game-Boy-Advance-Datei wird dadurch nicht zu einem DS-Spiel."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Welcher Core führt Nintendo DS-Spiele aus?",
        "answer": "SkyEmu ist der im Katalog geführte Core von Retropa für Nintendo DS. Die Kompatibilität ist titelabhängig, und der Katalog listet keinen weiteren DS-Core."
      },
      {
        "id": "touch",
        "question": "Brauchen DS-Spiele mit Controller noch Touch-Eingaben?",
        "answer": "Ja. Halte den Touchscreen für Spiele erreichbar, die ihn nutzen; ein Controller ersetzt nicht alle Touch-Aktionen."
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
    "title": "SameBoy-Core auf iPhone und iPad | Retropa",
    "description": "SameBoy konzentriert sich in Retropa auf Game Boy und Game Boy Color. Prüfe Farbverhalten, Dateiumfang, Grenzen von Speicherständen und die Plus-Voraussetzung für den Core-Wechsel.",
    "summary": "SameBoy konzentriert sich auf die ursprüngliche monochrome und farbige Game-Boy-Hardware. Der engere Umfang macht ihn zu einem nützlichen Vergleichspunkt, aber nicht zu einem Beleg, dass jeder andere Core weniger genau wäre.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "SameBoy-Upstream-Projekt: https://github.com/LIJI32/SameBoy. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Prüfe die Farbe ohne Filter",
        "body": "Importiere deine lokal gespeicherte Datei und prüfe, ob Retropa sie als Game Boy oder als Game Boy Color einordnet. Beginne mit dem Originalbild: Eine DMG-Behandlung kann einen Farbtitel bewusst monochrom wirken lassen. Nutze eine Szene mit bekannten Farbwechseln und vergleiche dieselbe Szene statt zweier verschiedener Stellen im Spiel."
      },
      {
        "title": "Timing und Eingabe testen",
        "body": "Prüfe mit dem Standard-Skin das Steuerkreuz, A, B, Start und Select. Wenn Timing oder Ton falsch erscheinen, notiere genau, wann es auftritt, und ob es auch mit deaktivierten Bild-Effekten anhält. Mit Retropa Plus kann ein Vergleich mit einem anderen kompatiblen Core helfen, die Implementierung einzugrenzen, aber ein sichtbarer Unterschied allein belegt nicht, welcher Core zur Hardware passt."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "Kein Game-Boy-Advance-Core",
        "body": "SameBoy deckt in Retropa Game Boy Advance nicht ab. Nutze für ein GBA-Abbild einen im Katalog geführten GBA-fähigen Core; eine geänderte Endung macht daraus kein Game-Boy-Spiel. Ebenso wenig wird ein Speicherstand, den ein anderer Core erzeugt hat, durch den Wechsel zu SameBoy übertragbar. Bewahre den alten Stand auf und teste eine Sicherung der spieleigenen Speicherung getrennt."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "Kann SameBoy Game-Boy-Advance-Spiele ausführen?",
        "answer": "Nein. Der SameBoy-Eintrag im Katalog von Retropa deckt Game Boy und Game Boy Color ab, nicht Game Boy Advance."
      },
      {
        "id": "why",
        "question": "Wann sollte ich SameBoy mit einem anderen Core vergleichen?",
        "answer": "Vergleiche mit Retropa Plus ein wiederholbares Timing-, Farb- oder Tonproblem, nachdem du die Datei geprüft und Filter deaktiviert hast. Sichere vorher deine Speicherstände."
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
    "title": "RusticoNES-Core für NES auf iPhone und iPad | Retropa",
    "description": "RusticoNES in Retropa: Cartridge- und Disk-Formate für NES und Famicom, Mapper-Prüfungen, erster Start, Vorsichtsmaßnahmen für Speicherstände und Core-Wechsel mit Plus.",
    "summary": "RusticoNES ist der standardmäßige NES-Laufzeitpfad von Retropa. Nutze ihn für die im Katalog geführten NES- und Famicom-Formate und prüfe Cartridge-Metadaten und Disk-Anforderungen, bevor du einen fehlgeschlagenen Start für ein Darstellungsproblem hältst.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "RusticoNES-Upstream-Projekt: https://github.com/zeta0134/rustico. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Cartridges, UNIF und Disk-Abbilder",
        "body": "Ein Cartridge-Abbild für NES / Famicom und ein Abbild des Famicom Disk System sind unterschiedliche Eingaben. UNIF ist ein Containerformat für Cartridges und kein anderer Name für einen iNES-Header. Bewahre beim Import den ursprünglichen Header und die Endung; Umbenennen oder Entfernen von Bytes, damit die Datei wie ein anderes Format aussieht, kann Informationen verwerfen, die zur Identifikation ihrer Platine dienen.",
        "points": [
          "Bewahre eine separate Kopie des Originalabbilds auf.",
          "Lies jeden BIOS-Hinweis des Disk-Systems; Retropa stellt das BIOS nicht bereit.",
          "NSF-Audioformate sind für RusticoNES nicht gelistet; prüfe stattdessen TetaNES."
        ]
      },
      {
        "title": "Erster Start und Controller-Prüfungen",
        "body": "Lade das Abbild lokal in Dateien herunter, importiere es über die Retropa-Bibliothek und bestätige, dass NES erkannt wurde. Beginne mit dem Standard-Skin und ohne Bild-Effekt. Teste das Steuerkreuz, A, B, Start und Select, einschließlich Diagonalen und gleichzeitiger Eingaben. Eine fehlende Eingabe in einem eigenen Layout ist kein Beleg für einen fehlerhaften Mapper."
      },
      {
        "title": "Wenn eine Cartridge fehlschlägt, andere aber laufen",
        "body": "NES-Cartridges können unterschiedliche Mapper-Hardware enthalten. Eine erkannte Endung belegt nicht, dass die von einem bestimmten Spiel genutzte Platine implementiert ist. Notiere den genauen Fehler und, sofern aus den Metadaten deines eigenen Dumps bekannt, Mapper und Region. Ändere Header nicht wahllos und nimm nicht an, ein BIOS behebe ein Problem mit der Cartridge-Platine. Unterscheide bei Disk-Spielen ein fehlendes BIOS von fehlenden Disk-Daten."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "Vergleiche nur die überlappenden Formate",
        "body": "Die NES-Systemseite listet die Vereinigung der Formate über ihre Cores, nicht das Versprechen, dass jeder Core alle davon akzeptiert. Bevor du mit Plus RusticoNES mit TetaNES oder JGenesis vergleichst, prüfe in beiden Katalogeinträgen das Format der Originaldatei. Behalte dieselbe Szene und die Standard-Darstellungseinstellungen bei, damit ein geänderter Skin oder Filter das Ergebnis nicht verdeckt."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "Ist RusticoNES der gelistete Core für NSF-Audio?",
        "answer": "Nein. Der Katalog von Retropa listet NSF und NSFE unter TetaNES, nicht unter RusticoNES. Tondateien sind keine spielbaren Cartridge-Spiele."
      },
      {
        "id": "mapper",
        "question": "Garantiert eine unterstützte Endung, dass ein Spiel startet?",
        "answer": "Nein. Der Cartridge-Mapper, die Integrität der Datei und mögliche Anforderungen eines Disk-Systems bleiben entscheidend. Notiere die genaue Fehlermeldung, bevor du die Datei änderst."
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
    "title": "TetaNES-Core für NES auf iPhone und iPad | Retropa",
    "description": "TetaNES in Retropa: NES- und Famicom-Spiele, Disk-Abbilder und NSF-Audio, formatabhängige Prüfungen, Controller-Einrichtung und die Plus-Voraussetzung für den Core-Wechsel.",
    "summary": "TetaNES ist ein alternativer NES-Core in Retropa mit Katalogabdeckung für Cartridges, Disks und Musikdateien. Prüfe, welche Art von Datei du importiert hast, bevor du einen spielbaren Spielbildschirm erwartest.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "TetaNES-Upstream-Projekt: https://github.com/lukexor/tetanes. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Musikdateien sind keine Cartridge-Spiele",
        "body": "NSF und NSFE enthalten Musikdaten für NES. Wenn du eine davon importiert hast, ist das Fehlen eines normalen Spielabschnitts für sich genommen kein Fehler. Prüfe die Audioausgabe und die Steuerung, die die App tatsächlich anbietet; nimm nicht an, dass eine Musikplayer-Oberfläche des Desktop-Upstreams in Retropa vorhanden ist. Beginne zum Spielen mit einem Cartridge- oder Disk-Abbild, dessen Nutzung dir zusteht.",
        "points": [
          "Prüfe beim Testen von Musik die Gerätelautstärke und die Audioausgabe.",
          "Eine umbenannte Tondatei wird nicht zu einem Cartridge-Abbild.",
          "UNIF-Endungen gehören zum Katalogeintrag von RusticoNES, nicht zu dem von TetaNES."
        ]
      },
      {
        "title": "Importiere eine Cartridge oder ein Disk-Abbild",
        "body": "Lade die Datei auf das Gerät herunter, bevor du den Import-Eintrag der Bibliothek nutzt. Bestätige die NES-Erkennung und lass das Originalabbild unverändert. Famicom ist der japanische Systemname; das Famicom Disk System bringt zusätzliche Disk-Anforderungen mit. Wenn der gewählte Core ein BIOS- oder Disk-Datenproblem meldet, erfülle genau diese Anforderung, statt die Datei durch ein unpassendes Cartridge-Abbild zu ersetzen."
      },
      {
        "title": "Teste Eingabe und eine wiederholbare Szene",
        "body": "Nutze ein NES- / Famicom-Layout mit Steuerkreuz, zwei Aktionstasten, Start und Select. Bestätige die Diagonalen mit dem Standard-Skin und teste dann eine Szene, die das Problem zeigt. Vergleiche das Originalbild, bevor du einen CRT-Effekt anwendest: Scanlines können die wahrgenommene Detailtiefe verändern, ohne dass sich ändert, was der Core emuliert."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "Eine Alternative ist keine Universallösung",
        "body": "TetaNES und RusticoNES haben unterschiedliche Formatlisten und Implementierungen. Ein Wechsel kann helfen, ein Timing- oder Mapper-Problem einzugrenzen, aber nur wenn die Datei für beide gültig ist; er kann keine Unterstützung für eine bestimmte Platine garantieren. Speicherstände des vorherigen Cores sollten bei diesem Core gesichert bleiben und nicht als austauschbare Dateien behandelt werden."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Warum zeigt meine NSF-Datei kein spielbares Spiel?",
        "answer": "NSF sind Musikdaten. Teste das Audio, statt einen normalen Spielabschnitt zu erwarten; nutze zum Spielen ein Cartridge- oder Disk-Abbild."
      },
      {
        "id": "switch",
        "question": "Kann ich ein NES-Spiel kostenlos auf TetaNES umstellen?",
        "answer": "Der Wechsel des Emulations-Cores erfordert Retropa Plus. Prüfe die Formatabdeckung des Ziel-Cores und sichere vorher deinen Fortschritt."
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
    "title": "LakeSnes-Core für SNES auf iPhone und iPad | Retropa",
    "description": "LakeSnes in Retropa: Formate für SNES und Super Famicom, Grenzen bei Cartridge-Chips, Sechs-Tasten-Steuerung, Sicherungen von Speicherständen und Core-Wechsel mit Plus.",
    "summary": "LakeSnes ist der auf SNES ausgerichtete Core von Retropa. Sein Katalog umfasst mehrere Abbild- und Copier-Formate, doch Dateierkennung und Unterstützung der Cartridge-Hardware eines Spiels sind zwei verschiedene Fragen.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "LakeSnes-Upstream-Projekt: https://github.com/dinkc64/LakeSnes. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Bewahre das Abbild und seinen Header",
        "body": "SNES ist in Japan als Super Famicom bekannt. Gängige Cartridge-Abbilder verwenden die Endungen SFC oder SMC; der Katalog listet zusätzlich weitere Copier- und verwandte Formate. Die Endung allein belegt nicht, ob eine Datei einen Copier-Header hat oder spezielle Cartridge-Hardware braucht. Importiere das lokal gespeicherte Originalabbild und bewahre ein Backup auf, statt als ersten Fehlerbehebungsschritt einen Header zu entfernen."
      },
      {
        "title": "Prüfe den vollständigen Controller",
        "body": "Prüfe nach dem Import in die Bibliothek das erkannte System und beginne mit dem Standard-Layout. SNES ergänzt X, Y, L und R zum Zwei-Tasten-Muster der Handhelds. Teste Schultertasten, Diagonalen und eine vom Spiel genutzte gleichzeitige Eingabe; ein hübscher Skin, der L oder R auslässt, kann ein funktionierendes Spiel blockiert erscheinen lassen.",
        "points": [
          "Teste Start und Select ebenso wie die sechs Spieltasten.",
          "Belege einen gekoppelten Controller, bevor du Grenzen des Touch-Layouts beurteilst.",
          "Nutze das Originalbild, um Eingabe- und Darstellungsprobleme zu trennen."
        ]
      },
      {
        "title": "Grenzen bei Cartridge-Chips und Sonderformaten",
        "body": "Einige SNES-Titel hängen von zusätzlichen Cartridge-Prozessoren oder anderer Hardware ab. Die Endungsliste des Katalogs ist keine Kompatibilitätsliste pro Chip, und eine erkannte BS- oder ST-Datei belegt nicht, dass jeder Ablauf mit Zubehör in Retropa verfügbar ist. Wenn nur ein Titel fehlschlägt, notiere seine Hardwareanforderungen, soweit bekannt, und die genaue Fehlermeldung. Behaupte nicht, ein Filter oder eine umbenannte Endung könne die fehlende Hardwareunterstützung ergänzen."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "LakeSnes mit JGenesis vergleichen",
        "body": "JGenesis listet ebenfalls SNES, doch seine SNES-Endungsabdeckung ist schmaler als die von LakeSnes. Vergleiche mit Plus nur ein Dateiformat, das beide Einträge listen. Kehre zur selben Szene mit derselben Steuerung und ohne Filter zurück und halte die Stände jedes Cores getrennt. Ein erfolgreicher Vergleich für eine Cartridge belegt keine Kompatibilität für jeden Titel mit Sonderchip."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Läuft jedes LakeSnes-Format auch auf JGenesis?",
        "answer": "Nimm das nicht an. Ziehe den Katalogeintrag jedes Cores heran; Formate auf Systemebene fassen die Abdeckung mehrerer Cores zusammen."
      },
      {
        "id": "chips",
        "question": "Garantiert die Formatliste die Kompatibilität mit Sonderchips?",
        "answer": "Nein. Dateierkennung und Emulation der Cartridge-Hardware sind getrennte Dinge. Prüfe die genaue Fehlermeldung und den gewählten Core, bevor du das Abbild änderst."
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
    "title": "JGenesis-Core auf iPhone und iPad | Retropa",
    "description": "JGenesis in Retropa: gelistete Sega- und Nintendo-Systeme, die Namen Genesis und Mega Drive, Formatgrenzen, Systemerkennung und Core-Wechsel mit Plus.",
    "summary": "JGenesis bedient in Retropa mehrere Systeme über eine Core-Familie. Das erkannte System bestimmt weiterhin Hardware, Steuerung und Speicherkontext; ein gemeinsamer Core macht die Dateien nicht austauschbar.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "JGenesis-Upstream-Projekt: https://github.com/jsgroth/jgenesis. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
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
        "title": "Die Namen Genesis und Mega Drive",
        "body": "Genesis ist der nordamerikanische Name der Konsole, die in Japan und Europa als Mega Drive bekannt ist. Der Katalog von Retropa führt Einträge unter beiden Namen. Dateiendungen sind Hinweise auf das Abbildformat und keine verlässlichen Regionsangaben: Ein Dateiname allein verrät nicht die Timing- oder Regionsanforderungen eines Spiels. Bewahre die Originaldatei auf und bestätige das erkannte System, statt sie umzubenennen, um einen Markt auszuwählen."
      },
      {
        "title": "Für die richtige Hardware importieren",
        "body": "Lade dein Abbild lokal in Dateien herunter und importiere es über die Bibliothek. Unterscheide vor dem Start Master System von Game Gear und NES / Famicom von SNES / Super Famicom. Ein Multi-System-Core braucht weiterhin den passenden Hardwarepfad. Wenn das erkannte System unerwartet ist, prüfe die Identität der Datei, bevor du Darstellungs- oder Controllereinstellungen änderst.",
        "points": [
          "Master System und Game Gear sind verwandte, aber nicht identische Systeme.",
          "Eine systemweite Formatliste kann Formate anderer Cores enthalten.",
          "Maßgeblich ist hier der Retropa-Katalog, nicht jede Upstream-Funktion von JGenesis."
        ]
      },
      {
        "title": "Die Steuerung hängt vom gewählten System ab",
        "body": "Teste für Genesis A, B, C und alle zusätzlichen Sechs-Tasten-Eingaben, die das Layout anbietet. Bestätige für Game Gear Start und prüfe für das Master System die Pauseneingabe. SNES-Layouts brauchen Schultertasten, die NES-Layouts nicht haben. Prüfe eine Controller-Kombination in einer echten Spielszene, bevor du annimmst, der Core habe eine Eingabe verloren."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "Sega-Abdeckung bedeutet keinen alternativen Core",
        "body": "Der Katalog von Retropa führt JGenesis als einzigen Core für seine Sega-Cartridge-Systeme. Plus schaltet den Wechsel frei, wo Alternativen bestehen; es ergänzt keine nicht gelistete Implementierung. Ebenso wenig bedeutet Multi-System-Unterstützung im Upstream, dass CD, Zusatzhardware oder jede Desktop-Option in Retropa verfügbar ist. Nutze den Katalog und die tatsächlichen App-Hinweise, um den unterstützten Pfad zu bestimmen."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Belegt eine .gen-Endung, dass ein Spiel aus Nordamerika stammt?",
        "answer": "Nein. Genesis und Mega Drive sind regionale Namen, doch eine Endung belegt nicht zuverlässig die Region oder die Timing-Anforderungen eines Spiels."
      },
      {
        "id": "upstream",
        "question": "Gibt Retropa jedes JGenesis-System des Upstreams frei?",
        "answer": "Eine solche Garantie wird nicht gegeben. Diese Seite leitet ihre Abdeckung aus dem eigenen Katalog von Retropa ab und nicht aus der vollständigen Upstream-Funktionsliste."
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
    "title": "Ares-Core auf iPhone und iPad | Retropa",
    "description": "Ares in Retropa: gelistete Abdeckung für GBA, WonderSwan und Neo Geo Pocket, Erkennung des Farbmodells, gedrehte Layouts, Vorsichtsmaßnahmen für Speicherstände und Core-Wechsel mit Plus.",
    "summary": "Ares deckt in Retropa ausgewählte Handheld-Familien ab. Die breite Identität des Upstreams bedeutet nicht, dass jedes System oder Zubehör des Upstreams in die App integriert ist.",
    "sections": [
      {
        "title": "Systeme und Formate im Katalog",
        "body": "Ares-Upstream-Projekt: https://github.com/ares-emulator/ares. Die folgende Abdeckung stammt aus dem Katalog von Retropa und nicht aus der vollständigen Funktionsliste des Upstream-Projekts. Eine gelistete Endung garantiert keine Kompatibilität mit jedem Titel. Retropa liefert keine Spiele oder BIOS-Dateien; importiere nur Dateien, deren Nutzung dir zusteht.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Triff das monochrome oder das Farbmodell",
        "body": "Importiere ein lokal heruntergeladenes Abbild und prüfe, ob Retropa den ursprünglichen WonderSwan oder den WonderSwan Color erkannt hat und ob Neo Geo Pocket oder Neo Geo Pocket Color. Die Farbmodelle haben Möglichkeiten, die die monochrome Hardware nicht bietet. Eine umbenannte Datei ist keine Konvertierung und kann einen reinen Farbtitel nicht als Spiel des Ursprungsmodells laufen lassen.",
        "points": [
          "Bewahre das Originalabbild und eine separate Sicherung des Fortschritts auf.",
          "Prüfe das erkannte Modell, bevor du Palettenprobleme untersuchst.",
          "Folge einem systemspezifischen Firmware-Hinweis, falls einer erscheint; ein BIOS wird nicht bereitgestellt."
        ]
      },
      {
        "title": "WonderSwan braucht mehr als nur Hochformat",
        "body": "WonderSwan-Spiele können für horizontales oder vertikales Spielen ausgelegt sein. Prüfe die erwartete Ausrichtung des Spiels, beide Gruppen von Richtungstasten und das verfügbare Skin-Layout. Das Telefon ins Hochformat zu drehen belegt allein nicht, dass der emulierte Bildschirm und alle Bedienelemente passend gedreht wurden. Wenn ein Layout die nötigen Eingaben nicht bereitstellen kann, nutze ein anderes passendes Layout, statt anzunehmen, der Core könne sie automatisch neu belegen."
      },
      {
        "title": "Pocket ist nicht Neo Geo-Arcade",
        "body": "Neo Geo Pocket verwendet Handheld-Abbilder und nicht die mehrteiligen Arcade-Sets, die mit Neo Geo MVS verbunden sind. Ein Arcade-BIOS-Archiv kann ein Pocket-Abbild nicht ersetzen. Teste Diagonalen und beide Aktionstasten mit dem Standard-Layout. Die ursprüngliche Pocket-Anzeige ist monochrom; nur vom Pocket Color sollte man die Grafik des Farbmodells erwarten. Die Arcade-Ausführung ist eine separate Plus-Fähigkeit."
      },
      {
        "title": "Core-Wechsel und Fortschritt erhalten",
        "body": "Den Emulations-Core zu wechseln erfordert Retropa Plus, auch wenn das Handheld-System selbst ohne Kauf verfügbar ist. Vergleiche nur Cores, die sowohl das System als auch das Dateiformat abdecken. Die Auswahl wird pro Spiel gespeichert; sichere die spieleigene Speicherung und die Speicherstände des ursprünglichen Cores, bevor du dieselbe Szene auf Unterschiede bei Ton, Bild und Eingabe testest.",
        "points": [
          "Speicherstände erfassen den internen Zustand eines bestimmten Cores; erwarte keine Kompatibilität über Cores hinweg.",
          "Sichere und prüfe auch die Speicherungen im Spiel; eine automatische Migration ist nicht garantiert.",
          "Der Wechsel des Cores konvertiert weder die Spieldatei noch liefert er ein fehlendes BIOS."
        ]
      },
      {
        "title": "Wo ein Vergleich möglich ist und wo nicht",
        "body": "Der Katalog listet Alternativen für Game Boy Advance, für WonderSwan- und Neo Geo Pocket-Modelle jedoch nur Ares. Der Core-Wechsel mit Plus ergänzt für diese Systeme keine weitere Implementierung. Ares hat außerdem einen viel breiteren Upstream-Umfang als diese Integration; nutze nur die hier gelistete Abdeckung von Retropa, statt anzunehmen, ein anderes Upstream-System lasse sich durch eine geänderte Endung aktivieren."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Kann die Pocket-Unterstützung von Ares mein Neo Geo-Arcade-Set ausführen?",
        "answer": "Nein. Pocket und Neo Geo-Arcade sind verschiedene Hardwarefamilien mit unterschiedlichen Dateianforderungen. Die Arcade-Ausführung erfordert Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Ergänzt Plus einen weiteren WonderSwan- oder Pocket-Core?",
        "answer": "Nein. Für diese Systeme listet der Katalog von Retropa derzeit nur Ares. Der Wechsel gilt dort, wo eine kompatible Alternative besteht."
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
    "label": "Delta-Alternative",
    "title": "Delta-Emulator-Alternative für iPhone und iPad | Retropa",
    "description": "Suchst du eine Delta-Alternative für iPhone und iPad? Vergleiche Arcade-Unterstützung, den Import von Delta-Skins, Bildfilter und den Konsolenmodus, einschließlich der Punkte, an denen Delta die stärkere Wahl ist.",
    "summary": "Retropa ist ein Arcade- und Handheld-Emulator für iPhone und iPad, der Delta-Skins direkt importiert, Arcade-Familien und Bildfilter ohne ganzzahlige Skalierung ergänzt und eine auf Handhelds ausgerichtete Oberfläche beibehält.",
    "sections": [
      {
        "title": "Was von Delta erhalten bleibt",
        "body": "Ein Emulatorwechsel lohnt sich nur, wenn deine bestehende Einrichtung erhalten bleibt. Retropa importiert Delta-.deltaskin-Pakete, ein Layout, das du bereits abgestimmt hast, muss also nicht von Grund auf neu gebaut werden. Prüfe, dass das Paket auf das System und die Ausrichtung zielt, in der du spielst, und bestätige dann, dass die Spielansicht nicht verdeckt wird.",
        "points": [
          ".deltaskin-Pakete lassen sich direkt importieren.",
          "Prüfe das vorgesehene System, bevor du dich auf einen Skin verlässt.",
          "Die Unterstützung von Quer- und Hochformat hängt vom Paket ab."
        ]
      },
      {
        "title": "Wo Retropa etwas ergänzt, das Delta nicht bietet",
        "body": "Der deutlichste Unterschied ist die Arcade-Unterstützung. Retropa führt unterstützte Arcade-Familien wie CPS I, CPS II, CPS III, Neo Geo, PGM und M92 neben den Handheld-Systemen aus, sodass eine einzige Bibliothek beides abdeckt. Arcade-Cores erfordern Retropa Plus, und Spiele und BIOS-Dateien sind nicht enthalten.",
        "points": [
          "Arcade-Familien in derselben Bibliothek wie Handhelds.",
          "Für Arcade-Cores ist Retropa Plus erforderlich.",
          "Arcade-Sets bestehen aus mehreren Dateien und brauchen unter Umständen ein BIOS."
        ]
      },
      {
        "title": "Bildfilter ohne ganzzahlige Skalierung",
        "body": "Viele Retro-Filter setzen voraus, dass das Spielbild auf eine ganze Zahl von Bildschirmpixeln abgebildet wird. Auf einem modernen iPhone lässt sich die verfügbare Fläche selten glatt teilen, wodurch ungenutzter Raum oder ungleichmäßige Scanlines entstehen. Die erweiterten Filter von Retropa arbeiten stattdessen mit der tatsächlichen Ausgabefläche, über alle Ausrichtungen und Skin-Layouts hinweg. Die iOS-App ist die Referenz; die Browser-Vorschau auf dieser Seite ist eine Annäherung.",
        "points": [
          "Filter verändern die Darstellung, nicht die Auflösung des Spiels.",
          "Erweiterte Filter erfordern Retropa Plus.",
          "Herkömmliche Scanline-Overlays können bei Teilschritten flimmern."
        ]
      },
      {
        "title": "Wo Delta die stärkere Wahl ist",
        "body": "Delta hat eine deutlich größere Nutzerbasis, eine längere Erfolgsgeschichte im App Store und eine breitere Gemeinschaft veröffentlichter Skins. Wenn du die am weitesten verbreitete Option, den umfangreichsten bestehenden Skin-Katalog oder die meisten Tutorials von Drittanbietern möchtest, ist Delta eine vernünftige Wahl, und diese Seite wird nichts anderes behaupten.",
        "points": [
          "Delta hat eine größere Community und mehr Material von Drittanbietern.",
          "Delta profitiert von Netzwerkeffekten rund um Skins.",
          "Retropa ist ein neueres Produkt mit kleinerem Katalog."
        ]
      },
      {
        "title": "Beides auszuprobieren kostet nichts",
        "body": "Beide Apps sind kostenlos erhältlich, mit optionalen In-App-Käufen. Der praktische Ansatz: Importiere einen Delta-Skin in Retropa, lade ein Handheld-Spiel und ein Arcade-Set und entscheide danach, wie sich Steuerung und Bild auf deinem Gerät tatsächlich anfühlen.",
        "points": [
          "Kostenloser Download auf beiden Seiten.",
          "Bewahre in jedem Fall deine Originaldateien und Skins auf.",
          "Urteile auf deinem eigenen Gerät, nicht anhand einer Vergleichstabelle."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Kann Retropa meine bestehenden Delta-Skins importieren?",
        "answer": "Ja. Retropa importiert .deltaskin-Pakete. Bewahre die Originaldatei des Pakets auf und prüfe, dass sie auf das System und die Ausrichtung zielt, in der du spielst."
      },
      {
        "id": "free",
        "question": "Ist Retropa kostenlos?",
        "answer": "Retropa ist kostenlos erhältlich, mit optionalen In-App-Käufen. Arcade-Cores, Premium-Skins und erweiterte Filter erfordern Retropa Plus. Die Preise werden in der App angezeigt."
      },
      {
        "id": "roms",
        "question": "Enthält Retropa Spiele?",
        "answer": "Nein. Retropa ist ein Emulator und stellt weder Spiele noch BIOS-Dateien bereit. Importiere nur Inhalte, deren Nutzung dir zusteht."
      },
      {
        "id": "which-better",
        "question": "Welcher Emulator ist besser?",
        "answer": "Beide sind auf unterschiedliche Schwerpunkte optimiert. Delta hat die größere Community und den größeren Skin-Katalog; Retropa ergänzt Arcade-Familien, Filter ohne ganzzahlige Skalierung und den Import von Delta-Skins. Probiere beide auf deinem eigenen Gerät aus."
      }
    ],
    "attribution": "Delta ist ein Produkt eines Drittanbieters. Alle auf dieser Seite genannten Produkt- und Firmennamen sind Marken ihrer jeweiligen Inhaber, und ihre Verwendung hier dient ausschließlich der Identifikation und dem sachlichen Vergleich. Retropa steht in keiner Verbindung zu ihnen und wird von ihnen weder unterstützt noch gesponsert.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa im Vergleich zu Delta",
    "title": "Retropa vs Delta: Arcade, Filter und Skins im Vergleich",
    "description": "Ein direkter Vergleich von Retropa und Delta auf iPhone und iPad: emulierte Systeme, Arcade-Unterstützung, Skin-Kompatibilität, Bildfilter und die Frage, für wen sich welches Produkt besser eignet.",
    "summary": "Retropa und Delta sind beide iOS-Emulatoren, doch sie optimieren unterschiedlich: Delta bietet die größere Community und den größeren Skin-Katalog, während Retropa Arcade-Familien und Bildfilter ohne ganzzahlige Skalierung ergänzt.",
    "sections": [
      {
        "title": "Emulierte Systeme",
        "body": "Beide Apps decken die Handheld-Systeme ab, die die meisten Nutzer wollen. Retropa führt zusätzlich unterstützte Arcade-Familien aus, was den größten funktionalen Unterschied darstellt. Arcade-Cores erfordern Retropa Plus; Handheld-Systeme nicht.",
        "points": [
          "Die Handheld-Abdeckung überschneidet sich weitgehend.",
          "Arcade-Familien gibt es nur bei Retropa.",
          "Arcade-Spiele erfordern Plus."
        ]
      },
      {
        "title": "Skins und Layouts",
        "body": "Retropa importiert Delta-.deltaskin-Pakete, ein bereits genutztes Layout lässt sich also übernehmen. Darüber hinaus ist das veröffentlichte Skin-Ökosystem von Delta größer, was zählt, wenn das Durchstöbern eines großen Katalogs Teil dessen ist, was du suchst.",
        "points": [
          "Retropa importiert .deltaskin-Pakete.",
          "Delta hat den größeren veröffentlichten Katalog.",
          "Prüfe immer, ob ein Paket dein System und deine Ausrichtung unterstützt."
        ]
      },
      {
        "title": "Bildfilter und Darstellung",
        "body": "Retropa bietet erweiterte CRT- und LCD-Filter, die sich der tatsächlichen Ausgabefläche anpassen, statt einen ganzzahligen Skalierungsfaktor zu verlangen, und kann RetroArch-Shader-Ketten einschließlich .slang- und .slangp-Presets nutzen. Erweiterte Filter erfordern Plus. Die Vorschau auf der Website ist eine Annäherung; die iOS-App ist die Referenz.",
        "points": [
          "Keine Anforderung ganzzahliger Skalierung bei erweiterten Filtern.",
          "RetroArch-Shader-Ketten werden für Retropa angegeben.",
          "Erweiterte Filter erfordern Plus."
        ]
      },
      {
        "title": "Community, Dokumentation und Erfolgsbilanz",
        "body": "Delta ist länger im App Store, hat weit mehr Nutzer und damit weit mehr Community-Dokumentation, Forenantworten und Anleitungen von Drittanbietern. Retropa ist neuer und kleiner. Wer etwas anderes behauptet, beschreibt nicht den aktuellen Stand beider Produkte.",
        "points": [
          "Delta hat die längere Geschichte im App Store.",
          "Für Delta sind mehr Antworten aus der Community verfügbar.",
          "Retropa hat derzeit die kleinere Nutzerbasis."
        ]
      },
      {
        "title": "Wie du wählst",
        "body": "Wenn Arcade-Titel für dich wichtig sind oder du Bildfilter möchtest, die keine ganzzahlige Skalierung voraussetzen, lohnt sich Retropa zum Ausprobieren. Wenn du den größten Skin-Katalog und das meiste Material aus der Community möchtest, ist Delta die sicherere Wahl. Beide sind kostenlos erhältlich, der ehrliche Rat lautet also, beide mit deinen eigenen Dateien zu testen.",
        "points": [
          "Kostenloser Download auf beiden Seiten.",
          "Für die Bewertung ist keine Verpflichtung nötig.",
          "Bei beiden musst du deine eigenen Spieldateien bereitstellen."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Unterstützt Delta Arcade-Spiele?",
        "answer": "Diesen Vergleich kann diese Seite nicht überprüfen. Festhalten lässt sich jedoch, dass Retropa unterstützte Arcade-Familien wie CPS, Neo Geo, PGM und M92 ausführt und dass Arcade-Cores Retropa Plus erfordern."
      },
      {
        "id": "skins",
        "question": "Kann ich dieselben Skins in beiden Apps nutzen?",
        "answer": "Retropa importiert Delta-.deltaskin-Pakete, ein Paket, das in Delta funktioniert, lässt sich also in der Regel auch in Retropa importieren. Prüfe nach dem Import das Zielsystem und die Ausrichtung."
      },
      {
        "id": "price",
        "question": "Was kosten die beiden Apps?",
        "answer": "Retropa ist kostenlos erhältlich, mit optionalen In-App-Käufen. Retropa Plus ist für Arcade-Cores, Premium-Skins und erweiterte Filter erforderlich. Die aktuellen Preise werden in der App angezeigt."
      }
    ],
    "attribution": "Delta ist ein Produkt eines Drittanbieters. Alle auf dieser Seite genannten Produkt- und Firmennamen sind Marken ihrer jeweiligen Inhaber, und ihre Verwendung hier dient ausschließlich der Identifikation und dem sachlichen Vergleich. Retropa steht in keiner Verbindung zu ihnen und wird von ihnen weder unterstützt noch gesponsert.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Spiele importieren",
    "title": "Spiele in Retropa auf iPhone und iPad importieren",
    "description": "Importiere deine eigenen Spieldateien in Retropa auf iPhone und iPad: wo der Import-Eintrag liegt, warum ein Cloud-Platzhalter fehlschlägt, welche Formate funktionieren und was du tust, wenn eine Datei abgelehnt wird.",
    "summary": "Eine Schritt-für-Schritt-Anleitung zum Import deiner eigenen Spieldateien in Retropa, einschließlich der funktionierenden Dateiformate, des Verhaltens von ZIP-Containern und der Wiederherstellung nach einem fehlgeschlagenen Import.",
    "sections": [
      {
        "title": "Bevor du beginnst",
        "body": "Retropa enthält weder Spiele noch BIOS-Dateien. Du brauchst eine Spieldatei, deren Nutzung dir zusteht, gespeichert auf dem Gerät selbst. Bewahre eine unveränderte Kopie außerhalb der App auf, damit ein Fehler beim Import nie das Original kostet.",
        "points": [
          "Importiere nur Inhalte, deren Nutzung dir zusteht.",
          "Bewahre von jeder Originaldatei ein separates Backup auf.",
          "Die App ist kostenlos erhältlich; Spiele werden nicht bereitgestellt."
        ]
      },
      {
        "title": "Schritt eins: Bringe die Datei auf das Gerät",
        "body": "Lade die Datei herunter, damit sie im lokalen Speicher liegt und nicht als Cloud-Platzhalter. Das ist die häufigste Ursache eines fehlgeschlagenen Imports: Die Dateien-App zeigt das Element, aber die Bytes sind noch nicht auf dem Gerät, sodass der Emulator nichts Brauchbares erhält.",
        "points": [
          "Öffne die Datei einmal in Dateien, um zu prüfen, dass sie heruntergeladen ist.",
          "Eine ausgegraute Datei oder eine, die noch geladen werden muss, ist ein Platzhalter.",
          "Schließe den Download ab, bevor du importierst."
        ]
      },
      {
        "title": "Schritt zwei: Aus der Bibliothek importieren",
        "body": "Öffne den Import-Eintrag in der Retropa-Bibliothek und wähle die Datei aus. Prüfe, dass das System korrekt erkannt wurde, und starte das Spiel dann mit dem Standard-Layout, bevor du Skins oder Filter änderst, damit ein späteres Problem eine offensichtliche Ursache hat."
      },
      {
        "title": "Welche Dateiformate funktionieren",
        "body": "Retropa akzeptiert die Dateiformate, die zu seinen unterstützten Systemen passen, und kann ZIP- und RetroPack-Container zusätzlich direkt öffnen. Die Endung muss zum System passen: Eine Game-Boy-Datei heißt .gb, Game Boy Color .gbc, Game Boy Advance .gba und DS .nds.",
        "points": [
          "Eine geänderte Endung konvertiert ein Spiel nicht zwischen Systemen.",
          "ZIP- und RetroPack-Container lassen sich ohne Entpacken öffnen.",
          "Arcade-Sets bestehen aus mehreren Dateien und werden anders behandelt."
        ]
      },
      {
        "title": "Wenn ein Import fehlschlägt",
        "body": "Lies zuerst die genaue Fehlermeldung und prüfe dann drei Dinge der Reihe nach: ob die Datei vollständig heruntergeladen ist, ob die Endung zum System passt und ob die Datei ein sauberes Abbild ist und kein unvollständiger Download. Erst danach lohnt es sich, den Emulator-Core zu verdächtigen.",
        "points": [
          "Schließe zuerst jeden unvollständigen Download ab.",
          "Bestätige, dass die Endung zum System passt.",
          "Probiere den alternativen Core für dieses System, bevor du aufgibst."
        ]
      },
      {
        "title": "Dateien, Speicherungen und Speicherstände",
        "body": "Deine Spieldatei, die spieleigene Speicherung und ein Speicherstand des Emulators sind drei verschiedene Dinge. Benennt man eines in das andere um, wird es nicht konvertiert. Sichere alle drei, bevor du sie zwischen Cores oder Apps verschiebst, denn Standformate sind nicht über jeden Core hinweg übertragbar.",
        "points": [
          "Lass die originale Spieldatei unverändert.",
          "Sichere Batterie-Speicherungen und Speicherstände getrennt.",
          "Erwarte nicht, dass ein Stand eines Cores in einem anderen lädt."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Wird Retropa mit Spielen geliefert?",
        "answer": "Nein. Retropa ist ein Emulator und stellt weder Spiele noch BIOS-Dateien bereit. Du importierst Dateien, deren Nutzung dir zusteht."
      },
      {
        "id": "cloud",
        "question": "Warum lässt sich meine Datei nicht importieren?",
        "answer": "Die häufigste Ursache ist ein Cloud-Platzhalter statt einer heruntergeladenen Datei. Öffne sie in Dateien, um den Download zu erzwingen, und importiere sie dann erneut."
      },
      {
        "id": "zip",
        "question": "Kann ich eine ZIP-Datei importieren?",
        "answer": "Retropa kann ZIP- und RetroPack-Container direkt öffnen, Entpacken ist also meist unnötig, sofern kein bestimmter Importvorgang ausdrücklich danach verlangt."
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
    "label": "Controller",
    "title": "Controller mit Retropa auf iPhone und iPad verbinden",
    "description": "Kopple einen Bluetooth- oder kabelgebundenen Controller mit iOS und belege ihn in Retropa, dazu die Diagnose von Tasten, die nicht reagieren, oder von Belegungen, die sich pro Spiel ändern.",
    "summary": "Kopple zuerst einen kompatiblen Controller mit iOS und prüfe die Belegung anschließend in Retropa pro System und pro Spiel. Diese Anleitung behandelt die Reihenfolge beim Koppeln, häufige Mapping-Fehler und Kombinationen aus Touch und Controller.",
    "sections": [
      {
        "title": "Kopple zuerst mit iOS, bevor du Retropa öffnest",
        "body": "Der Controller muss iOS zuerst bekannt sein. Kopple ihn in den Systemeinstellungen, bestätige, dass er dort reagiert, und öffne erst dann Retropa. Ein Controller, der nie auf Systemebene gekoppelt wurde, erscheint nicht in der App, ganz gleich was du in ihren Einstellungen tust.",
        "points": [
          "Kopple zuerst in den iOS-Einstellungen.",
          "Bestätige, dass der Controller im System reagiert.",
          "Prüfe ihn anschließend in Retropa."
        ]
      },
      {
        "title": "Die Belegung wird pro System geprüft, nicht einmal global",
        "body": "Retropa führt Steuerungslayouts pro System, denn ein Game Boy braucht sechs Eingaben, während ein SNES-Pad zehn braucht. Behandle das Mapping als Arbeit pro System: Prüfe nach dem einmaligen Koppeln die Zuordnung für jedes System, das du tatsächlich spielst.",
        "points": [
          "Game Boy: Steuerkreuz, A, B, Start, Select.",
          "SNES ergänzt X, Y, L und R.",
          "Arcade-Layouts ergänzen mehrere Aktionstasten."
        ]
      },
      {
        "title": "Die Tasten, deren Test man vergisst",
        "body": "In der Praxis häufen sich Fehler bei denselben Eingaben: Schultertasten an Sechs-Tasten-Pads, Start und Select, die leicht außer Reichweite geraten, und Diagonalen, die auf Systemen mit einem Mikroschalter-Stick als Originalcontroller wichtiger sind.",
        "points": [
          "Teste L und R beim Belegen ausdrücklich.",
          "Prüfe, dass Start und Select erreichbar sind.",
          "Teste Diagonalen, nicht nur die vier Hauptrichtungen."
        ]
      },
      {
        "title": "Touch-Steuerung und Controller können koexistieren",
        "body": "Manche Spiele brauchen eine Touch-Interaktion, die ein physisches Pad nicht ersetzen kann, besonders auf Systemen mit zwei Bildschirmen. Das Bildschirm-Layout neben einem gekoppelten Controller verfügbar zu halten ist meist praktischer, als zwischen beiden zu wechseln.",
        "points": [
          "Deaktiviere die Touch-Steuerung nicht, wenn ein Spiel den Touchscreen nutzt.",
          "Prüfe, dass Overlays die Spielansicht nicht verdecken.",
          "Haptik und Touch-Layout lassen sich getrennt abstimmen."
        ]
      },
      {
        "title": "Wenn eine Taste nicht reagiert",
        "body": "Arbeite dich vom Controller nach außen vor: Bestätige, dass er in iOS reagiert, dann in Retropa und dann in einem Spiel, das diese Taste sicher verwendet. Wenn die Belegung korrekt aussieht, ein Spiel eine Eingabe aber ignoriert, nutzt das Spiel diese Eingabe möglicherweise gar nicht, was bei frühen Handheld-Titeln häufig vorkommt.",
        "points": [
          "Prüfe den Controller zuerst in den iOS-Einstellungen.",
          "Kontrolliere die Belegung in Retropa.",
          "Bestätige, dass das Spiel diese Taste tatsächlich verwendet."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Welche Controller funktionieren?",
        "answer": "Controller, die iOS unterstützt, lassen sich mit Retropa nutzen. Kopple sie zuerst in den iOS-Einstellungen und prüfe die Belegung dann in der App."
      },
      {
        "id": "mapping-lost",
        "question": "Warum hat sich meine Belegung geändert?",
        "answer": "Layouts werden pro System und pro Spiel geführt, eine Belegung, die du für ein System festgelegt hast, gilt also nicht automatisch für ein anderes. Prüfe die Belegung für das System, das du gerade spielst."
      },
      {
        "id": "touch",
        "question": "Hört die Touch-Steuerung mit einem Controller auf zu funktionieren?",
        "answer": "Nein. Die Touch-Steuerung bleibt verfügbar, was auf Systemen nützlich ist, auf denen ein Spiel eine Touch- oder Zweitbildschirm-Interaktion braucht."
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
    "label": "Speicherstände",
    "title": "Speicherstände und Zurückspulen in Retropa | iPhone und iPad",
    "description": "Verstehe den Unterschied zwischen Speicherungen im Spiel, Speicherständen und dem Zurückspulen in Retropa, wie du Speicherstände sicher zwischen Cores verschiebst und was du prüfst, wenn ein Stand nicht lädt.",
    "summary": "Speicherungen im Spiel, Speicherstände des Emulators und das Zurückspulen sind drei verschiedene Mechanismen mit unterschiedlicher Übertragbarkeit. Diese Anleitung erklärt, was jeder davon tut und wie du sie sicher sicherst.",
    "sections": [
      {
        "title": "Drei verschiedene Dinge namens Speicherung",
        "body": "Die spieleigene Speicherung wird vom Spiel selbst geschrieben, ein Speicherstand erfasst den gesamten Emulator in einem Moment, und das Zurückspulen spielt die jüngste Vergangenheit erneut ab. Alle drei verhalten sich unterschiedlich, werden unterschiedlich gespeichert, und eines in das andere umzubenennen konvertiert es nicht.",
        "points": [
          "Speicherungen im Spiel werden vom Spiel erstellt.",
          "Speicherstände erfassen den vollständigen Moment des Emulators.",
          "Das Zurückspulen beruht auf der jüngsten Vergangenheit, nicht auf einer gespeicherten Datei."
        ]
      },
      {
        "title": "Einen Speicherstand erstellen und nutzen",
        "body": "Ein Speicherstand ist nützlich vor einem schwierigen Abschnitt, vor dem Wechsel eines Cores oder vor dem Anwenden eines neuen Filters, weil er dich zu einem bekannten guten Moment zurückbringt. Schnellspeichern und Schnellladen sind genau für solche kurzfristigen Kontrollpunkte gedacht.",
        "points": [
          "Lege einen Stand an, bevor du Cores wechselst.",
          "Stände sind der schnellste Weg, zwei Presets zu vergleichen.",
          "Behalte die spieleigene Speicherung als langfristige Aufzeichnung."
        ]
      },
      {
        "title": "Eine Speicherung zwischen Cores verschieben",
        "body": "Speicherstände sind nicht über jeden Core hinweg übertragbar, denn ein Stand zeichnet den internen Zustand einer bestimmten Implementierung auf. Batterie-Speicherungen, die das Spiel schreibt, lassen sich deutlich wahrscheinlicher übertragen. Sichere beide, bevor du den gewählten Core änderst.",
        "points": [
          "Rechne damit, dass Stände corespezifisch sind.",
          "Batterie-Speicherungen lassen sich zuverlässiger übertragen.",
          "Sichere, bevor du Cores wechselst."
        ]
      },
      {
        "title": "Wenn eine Speicherung nicht lädt",
        "body": "Prüfe, ob die Speicherung Spieldaten oder ein Stand ist, ob sich der Core seit dem Schreiben geändert hat und ob sich die App-Version geändert hat. Wenn ein Stand fehlschlägt, lade stattdessen die spieleigene Speicherung, denn dieser Weg hängt nicht vom internen Standformat des Emulators ab.",
        "points": [
          "Bestätige, dass der Core unverändert ist.",
          "Bestätige die Art der Speicherung.",
          "Weiche nach Möglichkeit auf die spieleigene Speicherung aus."
        ]
      },
      {
        "title": "Backups, die Bestand haben",
        "body": "Bewahre die originale Spieldatei, die spieleigene Speicherung und alle Speicherstände, die dir wichtig sind, an getrennten Orten auf. iCloud oder eine Kopie auf dem Rechner sind in Ordnung; entscheidend ist, dass ein einzelner Fehler in der App oder auf dem Gerät nicht alle Kopien auf einmal entfernt.",
        "points": [
          "Sichere die Spieldatei selbst, nicht nur die Speicherungen.",
          "Halte Speicherungen von Standdateien getrennt.",
          "Bewahre mindestens eine Kopie außerhalb des Geräts auf."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Was ist der Unterschied zwischen einer Speicherung und einem Speicherstand?",
        "answer": "Eine Speicherung wird vom Spiel geschrieben und bildet den Fortschritt im eigenen Format des Spiels ab. Ein Speicherstand erfasst den gesamten Emulator in einem Moment und ist spezifisch für den Core, der ihn erzeugt hat."
      },
      {
        "id": "rewind",
        "question": "Wie weit kann ich zurückspulen?",
        "answer": "Das Zurückspulen spielt die jüngste Vergangenheit aus dem Arbeitsspeicher ab, statt eine gespeicherte Datei wiederherzustellen. Seine Tiefe ist deshalb durch den Puffer begrenzt und nicht durch eine feste Zahl von Speicherplätzen."
      },
      {
        "id": "transfer",
        "question": "Kann ich eine Speicherung in einen anderen Emulator übertragen?",
        "answer": "Die spieleigene Speicherung ist das eher übertragbare Artefakt. Speicherstände hängen vom internen Format eines bestimmten Cores ab und sollten nicht als anderswo ladbar erwartet werden."
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
    "label": "Fehlersuche",
    "title": "Spiel lädt nicht in Retropa? Das solltest du prüfen",
    "description": "Eine Diagnosereihenfolge für ein Spiel, das in Retropa nicht startet: unvollständige Downloads, falsche Endung, falsch erkanntes System, fehlendes BIOS, nicht unterstützter Mapper und corespezifische Probleme.",
    "summary": "Arbeite eine feste Prüfreihenfolge ab — Vollständigkeit des Downloads, Endung, erkanntes System, BIOS-Anforderung und schließlich die Core-Wahl —, bevor du eine Datei für unbrauchbar hältst.",
    "sections": [
      {
        "title": "Folge einer festen Reihenfolge statt eines Ratespiels",
        "body": "Die meisten Ladefehler haben wenige Ursachen, und sie in gleichbleibender Reihenfolge zu prüfen spart Zeit. Die folgende Reihenfolge führt von der günstigsten zur aufwendigsten Prüfung, sodass du aufhörst, sobald du die echte Ursache gefunden hast.",
        "points": [
          "Zuerst die Vollständigkeit des Downloads.",
          "Dann Endung und erkanntes System.",
          "Danach BIOS und Core-Wahl."
        ]
      },
      {
        "title": "Prüfung eins: Liegt die Datei wirklich auf dem Gerät?",
        "body": "Wenn die Datei ein Cloud-Platzhalter ist, erhält der Emulator nichts Brauchbares, obwohl die Datei in der Bibliothek erscheint. Öffne sie in der Dateien-App, um den Download zu erzwingen, warte, bis er abgeschlossen ist, und importiere dann erneut.",
        "points": [
          "Ein ausgegrautes oder ausstehendes Element ist nicht heruntergeladen.",
          "Schließe den Download ab, bevor du es erneut versuchst.",
          "Das ist die mit Abstand häufigste Ursache."
        ]
      },
      {
        "title": "Prüfung zwei: Passt die Endung zum System?",
        "body": "Jedes System hat seine eigene Endung, und eine Abweichung erzeugt eine Datei, die der Core nicht interpretieren kann. Eine geänderte Endung konvertiert nichts, eine in .gba umbenannte .gb-Datei bleibt also ein Game-Boy-Spiel und verhält sich nicht wie ein Game-Boy-Advance-Titel.",
        "points": [
          ".gb, .gbc, .gba und .nds sind verschiedene Systeme.",
          "Umbenennen konvertiert ein Spiel nie.",
          "Bestätige das erkannte System in der Bibliothek."
        ]
      },
      {
        "title": "Prüfung drei: Fehlt ein BIOS oder ein Parent-Set?",
        "body": "Einige Systeme und Arcade-Familien brauchen eine zusätzliche BIOS-Datei, und Arcade-Sets können von einem Parent-Set abhängen. Der Core meldet, was fehlt; lies diese Meldung genau, denn ein fehlendes BIOS und ein fehlendes Parent sind verschiedene Probleme mit verschiedenen Lösungen.",
        "points": [
          "Lies den genauen Fehlertext.",
          "Eine Arcade-neogeo.zip ist kein Handheld-BIOS.",
          "Retropa bietet keine BIOS-Downloads an."
        ]
      },
      {
        "title": "Prüfung vier: Probiere den anderen Core",
        "body": "Für mehrere Systeme steht mehr als ein Core zur Verfügung. Wenn eine Datei vollständig ist, korrekt benannt wurde und keine fehlende Abhängigkeit hat, ist der Wechsel des Cores der nächste Test, denn Cores unterscheiden sich darin, wie streng sie die Originalhardware emulieren.",
        "points": [
          "Notiere, welcher Core fehlgeschlagen ist.",
          "Wechsle den Core und versuche es einmal erneut.",
          "Vergleiche mit einem zweiten Spiel auf demselben Core."
        ]
      },
      {
        "title": "Was in eine Support-Anfrage gehört",
        "body": "Wenn ein Spiel weiterhin nicht startet, sind die nützlichen Angaben die App-Version, das System, der gewählte Core und der genaue Fehlertext. Hänge keine kommerziellen Spiel- oder BIOS-Dateien an, denn sie sind zur Diagnose nicht nötig und sollten nicht weitergegeben werden.",
        "points": [
          "App-Version und System.",
          "Gewählter Core und Fehlertext.",
          "Hänge niemals kommerzielle ROM- oder BIOS-Dateien an."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "Das Spiel öffnet sich mit einem schwarzen Bildschirm. Was bedeutet das?",
        "answer": "Meist ein unvollständiger Download, eine nicht unterstützte Dateivariante oder eine fehlende Abhängigkeit wie ein BIOS. Prüfe zuerst den Download, dann die Endung und schließlich den genauen Fehler, den der Core meldet."
      },
      {
        "id": "worked-before",
        "question": "Ein Spiel lief früher und jetzt nicht mehr. Warum?",
        "answer": "Prüfe, ob sich die App-Version, der gewählte Core oder der Speicherort der Datei geändert hat. Speicherstände sind corespezifisch, ein von einem anderen Core geschriebener Stand lädt deshalb unter Umständen nicht, obwohl das Spiel selbst weiterhin funktioniert."
      },
      {
        "id": "support",
        "question": "Was sollte ich mit einer Support-Anfrage senden?",
        "answer": "Die App-Version, das System, den gewählten Core und den genauen Fehlertext. Hänge keine kommerziellen Spiel- oder BIOS-Dateien an."
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
    "title": "Retropa Plus: Was kostenlos ist und was Plus erfordert",
    "description": "Welche Funktionen von Retropa kostenlos sind und welche Retropa Plus erfordern: Handheld-Systeme, Arcade-Familien, Premium-Skins, erweiterte Filter und der Konsolenmodus. Die aktuellen Preise werden in der App angezeigt.",
    "summary": "Retropa ist kostenlos erhältlich. Die Handheld-Emulation ist ohne Bezahlung verfügbar; Arcade-Familien, Premium-Skins und erweiterte Bildfilter gehören zu Retropa Plus. Aktuelle Preise und verfügbare Angebote werden in der App angezeigt.",
    "sections": [
      {
        "title": "Was kostenlos verfügbar ist",
        "body": "Der Download von Retropa kostet nichts, und die Handheld-Emulation funktioniert ohne Kauf. Du kannst deine eigenen Spieldateien importieren, die Standardskins nutzen, herkömmliche Darstellungs-Presets verwenden sowie Speicherstände und Controller-Mapping einrichten. Der Import einer Datei löst keine Zahlung aus.",
        "points": [
          "Kostenloser Download.",
          "Handheld-Systeme ohne Kauf verfügbar.",
          "Standardskins und herkömmliche Darstellungs-Presets inbegriffen.",
          "Der Import eines Spiels schaltet nie eine kostenpflichtige Funktion frei und erfordert sie auch nicht."
        ]
      },
      {
        "title": "Was Retropa Plus erfordert",
        "body": "Retropa Plus umfasst die Arcade-Familien, die Premium-Skins und die erweiterten Bildfilter. Das sind zusätzliche Möglichkeiten und keine Einschränkungen dessen, was du bereits hattest: Handheld-Spielen funktioniert weiterhin, ob du das Abo abschließt oder nicht.",
        "points": [
          "Arcade-Familien: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Premium-Skins.",
          "Erweiterte CRT- und LCD-Filter.",
          "Konsolenmodus und erweiterte Speicherabläufe."
        ]
      },
      {
        "title": "Warum die Arcade-Unterstützung zu Plus gehört",
        "body": "Arcade-Emulation ist eine eigenständige Arbeit: mehrere Platinen, mehrteilige Sets, BIOS-Abhängigkeiten und Kompatibilität pro Set. Diese als zusätzliche Fähigkeit zu behandeln hält die kostenlose Stufe einfach und bewahrt das Handheld-Erlebnis für alle kostenlos.",
        "points": [
          "Arcade-Hardware ist keine Handheld-Hardware.",
          "Arcade-Sets bestehen aus mehreren Dateien und brauchen unter Umständen ein BIOS.",
          "Die Handheld-Unterstützung hängt nicht von Plus ab."
        ]
      },
      {
        "title": "Spiele und BIOS-Dateien sind nie enthalten",
        "body": "Keine Stufe von Retropa stellt Spiel- oder BIOS-Dateien bereit, denn die App ist ein Emulator. Du lieferst Inhalte, deren Nutzung dir zusteht, und diese Anforderung ändert sich durch einen Kauf nicht. Ein Abo schaltet Emulator-Funktionen frei, keine Inhalte.",
        "points": [
          "In keiner Stufe sind Spiele enthalten.",
          "Es werden keine BIOS-Dateien bereitgestellt.",
          "Importiere nur Inhalte, deren Nutzung dir zusteht."
        ]
      },
      {
        "title": "Wo du die aktuellen Preise siehst",
        "body": "Preise, verfügbare Angebote und etwaige regionale Aktionen werden in der App angezeigt, wo der App Store sie in deiner lokalen Währung darstellen kann. Diese Seite listet bewusst keine Preise, damit eine Preisänderung sie nie veraltet.",
        "points": [
          "Die Preise werden in der App angezeigt.",
          "Die Verfügbarkeit kann je nach Region abweichen.",
          "Käufe werden vom App Store abgewickelt."
        ]
      },
      {
        "title": "Käufe werden vom App Store abgewickelt",
        "body": "Alle Käufe und Abos laufen über den App Store. Retropa verarbeitet keine Zahlungen im Web, und diese Website fragt nie nach Kartendaten. Verlängerungen, Kündigungen und Rückerstattungen werden vom App Store nach seinen eigenen Bedingungen verwaltet.",
        "points": [
          "Auf dieser Website werden keine Zahlungen erhoben.",
          "Verwalte oder kündige ein Abo in den Einstellungen des App Store.",
          "Rückerstattungen folgen den Richtlinien des App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Kann ich Retropa ohne Bezahlung nutzen?",
        "answer": "Ja. Der Download von Retropa ist kostenlos, und die Handheld-Emulation funktioniert ohne Kauf. Arcade-Familien, Premium-Skins und erweiterte Filter erfordern Retropa Plus."
      },
      {
        "id": "price",
        "question": "Was kostet Retropa Plus?",
        "answer": "Preise und verfügbare Angebote werden in der App angezeigt, wo der App Store sie in deiner lokalen Währung darstellen kann. Diese Seite listet keine Preise, damit Preisänderungen sie nie veralten lassen."
      },
      {
        "id": "buy-here",
        "question": "Kann ich auf dieser Website ein Abo abschließen?",
        "answer": "Nein. Käufe werden vollständig über den App Store abgewickelt. Diese Website erhebt nie Zahlungsdaten."
      },
      {
        "id": "content",
        "question": "Enthält Plus Spiele?",
        "answer": "Nein. Keine Stufe von Retropa stellt Spiel- oder BIOS-Dateien bereit. Du importierst Inhalte, deren Nutzung dir zusteht."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  }
}
