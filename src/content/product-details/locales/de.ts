import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "GBA-Emulator für iPhone und iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Bring deine eigenen .gba-Dateien zu Retropa. Starte zuerst mit einem laufenden Spiel, wähle dann einen Handheld-Skin, belege einen Controller und finde die Bildabstimmung, die sich richtig anfühlt.",
    "imageAlt": "Retropa-Produktbild mit Handheld-Steuerungslayouts im Hoch- und Querformat",
    "sections": [
      {
        "title": "Starte mit einer .gba-Spieldatei",
        "body": "Retropa spielt unterstützte GBA-Spiele auf iPhone und iPad mit iOS 18 oder neuer ab. Die App ist kostenlos, enthält aber keine Spiele und keine BIOS-Dateien. Verwende eine Spieldatei, die du nutzen darfst, und bewahre das Original außerhalb der App als Sicherung auf.",
        "points": [
          "Ein GBA-Spiel verwendet normalerweise die Endung .gba.",
          "Eine .gb- oder .gbc-Datei gehört zu GB oder GBC, nicht zu GBA.",
          "Das Ändern einer Dateiendung macht aus einem Spiel kein anderes System."
        ]
      },
      {
        "title": "Import über die Dateien-App",
        "body": "Stelle sicher, dass die Datei lokal in Dateien verfügbar ist und nicht nur als Platzhalter in der Cloud erscheint. Öffne den Import-Eintrag in der Retropa-Bibliothek und wähle das Spiel aus. Sobald es in der Bibliothek erscheint, öffne es und prüfe Bild, Ton und Standardsteuerung, bevor du das Layout anpasst."
      },
      {
        "title": "Wähle das passende Handheld-Layout",
        "body": "Ein GBA-Layout braucht Platz für das Steuerkreuz, A und B, die Schultertasten sowie Start und Select. Probiere nicht nur die Optik aus, sondern auch die Tasten. Retropa unterstützt den Import von .deltaskin, doch ein DS-Skin ersetzt kein GBA-Layout. Prüfe, ob das Paket die Ausrichtung deines Geräts unterstützt.",
        "points": [
          "Halte den Spielbildschirm in beiden genutzten Ausrichtungen frei.",
          "Verbinde kompatible physische Controller in iOS und prüfe danach ihre Belegung in Retropa.",
          "Premium-Skins und erweiterte Filter erfordern Plus; der Import einer Datei schaltet keine bezahlten Funktionen frei."
        ]
      },
      {
        "title": "LCD-Charakter oder klare Pixel?",
        "body": "Beginne mit dem Originalbild. Eine leichte LCD-Behandlung erinnert an einen Handheld-Bildschirm, während eine CRT-Behandlung eine andere Darstellung erzeugt. Die erweiterten Filter von Retropa berücksichtigen die tatsächliche Ausgabefläche, ohne eine ganzzahlige Skalierung zu verlangen. Filter verändern das Bild, nicht die Auflösung oder die Dateikompatibilität des Spiels."
      },
      {
        "title": "Wenn ein Import oder ein Speicherstand nicht funktioniert",
        "body": "Prüfe zuerst die Dateiendung, das gewählte System und die genaue Fehlermeldung. Wenn die Dateien-App das Original nicht öffnen oder laden kann, schließe diesen Schritt ab, bevor du erneut importierst. Bei BIOS-Fehlern gilt die Vorgabe des gewählten Cores; eine Arcade-neogeo.zip ist kein GBA-BIOS. Die spieleigene Speicherdatei und ein Speicherstand des Emulators sind verschiedene Dinge: Benenne nicht das eine in das andere um, und behalte Sicherungen, bevor du zwischen Cores oder Apps wechselst.",
        "points": [
          "Probiere den Standard-Skin und einen einfachen Filter, wenn du ein Steuerungs- oder Anzeigeproblem eingrenzt.",
          "Notiere App-Version, System, Core und Fehlermeldung für den Support.",
          "Hänge keine kommerziellen ROMs oder BIOS-Dateien an eine Support-Anfrage an."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Unterstützte Dateien und GBA-Cores ansehen"
  },
  "ds-emulator": {
    "title": "DS-Emulator für iPhone und iPad",
    "label": "DS",
    "image": "library",
    "summary": "Importiere deine .nds-Spiele in Retropa und schaffe Platz für beide Bildschirme. Prüfe Touch-Eingabe, Steuerung und Dateivorgaben, bevor du ein neues Layout oder einen Filter wählst.",
    "imageAlt": "Retropa-Produktbild mit Spielesammlung und Einstellungen auf dem iPhone",
    "sections": [
      {
        "title": "Bereite ein .nds-Spiel vor",
        "body": "DS und GBA sind verschiedene Systeme. Retropa unterstützt .nds-Dateien für DS auf iPhone und iPad mit iOS 18 oder neuer. Verwende Dateien, die du nutzen darfst, und halte eine separate Sicherung bereit. Die App bietet keine Downloads von ROMs oder BIOS-Dateien, und aus einer .gba-Datei wird durch Umbenennen kein DS-Spiel."
      },
      {
        "title": "Importiere das Spiel und prüfe beide Bildschirme",
        "body": "Lade die Spieldatei lokal in Dateien und wähle sie dann über den Import-Eintrag der Retropa-Bibliothek aus. Öffne das importierte Spiel mit dem Standardlayout. Prüfe beide Anzeigebereiche und teste die Touch-Eingabe in einem Spielabschnitt, der sie verwendet. Ein Titelbildschirm allein genügt nicht, um sicherzustellen, dass jede benötigte Eingabe erreichbar ist.",
        "points": [
          "Beginne mit dem System, das für die .nds-Datei erkannt oder ausgewählt wurde.",
          "Befolge jede BIOS- oder Firmware-Vorgabe, die der installierte Core meldet.",
          "Behalte eine Kopie der Originaldatei, während du Fehler eingrenzt."
        ]
      },
      {
        "title": "Gib dem Touchscreen genug Platz",
        "body": "Zwei Anzeigen brauchen ein anderes Layout als ein Handheld mit einem Bildschirm. Wähle einen DS-Skin, der beide Bildschirme und die benötigten Steuerelemente sichtbar macht. Im Hochformat lassen sich die Bildschirme natürlich übereinander anordnen; die Unterstützung des Querformats hängt vom gewählten Skin ab. Prüfe kleine Touch-Flächen in der Größe, in der du tatsächlich spielst, besonders auf einem kleineren iPhone."
      },
      {
        "title": "Controller ersetzen nicht jede Touch-Aktion",
        "body": "Retropa unterstützt kompatible externe Controller und die Tastenbelegung. Verbinde den Controller mit iOS und prüfe seine Zuordnung in der App. Ein physisches Steuerkreuz und Aktionstasten ersetzen nicht automatisch die Touchscreen-Interaktionen eines Spiels. Prüfe diese Interaktionen, bevor du dich für ein rein controllerbasiertes Setup entscheidest."
      },
      {
        "title": "Halte die erste Sitzung einfach",
        "body": "Bestätige Spiel- und Eingabekompatibilität, bevor du eine komplexe Shader-Kette anwendest. Wenn sich Bild oder Bildrate nach der Auswahl eines Filters ändern, kehre zu einer einfachen Voreinstellung zurück und vergleiche. Gerät, Core und Ausgabegröße beeinflussen die Leistung; die Unterstützung von DS ist kein Versprechen identischer Ergebnisse für jedes Spiel und jedes Telefon.",
        "points": [
          "Premium-Skins und erweiterte Filter erfordern Retropa Plus.",
          "Halte originale Speicherdateien und Speicherstände gesichert; sie sind keine austauschbaren Dateiformate.",
          "Für den Support gib App-Version, gewählten Core und die genaue Fehlermeldung an, nicht die Spiel- oder BIOS-Dateien."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Unterstützte Dateien und DS-Cores ansehen"
  },
  "arcade": {
    "title": "Arcade-Emulator für iPhone und iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Spiele unterstützte Arcade-Dateien von CPS, Neo Geo, PGM und M92 in Retropa, mit Touch-Steuerung, externen Controllern und CRT-Filtern. Arcade-Spiele erfordern Plus; Spiele und BIOS-Dateien sind nicht enthalten.",
    "imageAlt": "Retropa-Produktbild mit Spielesammlung und Einstellungen",
    "sections": [
      {
        "title": "CPS, Neo Geo und das Arcade-Board",
        "body": "Retropa unterstützt Arcade-Familien wie CPS I, CPS II, CPS III, Neo Geo, PGM und M92. Ordne dein Spiel dem Arcade-Board und dem ROM-Satz zu, den der installierte Core erwartet. Die Unterstützung einer Familie garantiert nicht, dass jedes Archiv läuft.",
        "points": [
          "Bestätige das System in der App, bevor du eine Datei auswählst.",
          "Die Ausführung von Arcade-Spielen erfordert Retropa Plus.",
          "Retropa enthält keine kommerziellen ROMs und keine BIOS-Dateien."
        ]
      },
      {
        "title": "Neo Geo Arcade ist nicht Neo Geo Pocket",
        "body": "Arcade-Spiele von Neo Geo und Handheld-Spiele von Neo Geo Pocket nutzen verschiedene Systeme und Dateien. Wenn ein Arcade-Spiel ein fehlendes Neo-Geo-BIOS meldet, öffne in Retropa das Arcade-BIOS, importiere das benötigte neogeo.zip-Paket und starte das Spiel erneut. Ein Pocket-ROM oder eine umbenannte ZIP-Datei ist kein Ersatz.",
        "points": [
          "Verwende BIOS-Dateien, die du nutzen darfst; Retropa bietet keine Downloads an.",
          "Ein BIOS-Paket ersetzt keine fehlenden ROM-Daten von Spiel, Parentsatz oder Clonesatz.",
          "Prüfe die genaue Fehlermeldung und bewahre das Originalarchiv auf, bevor du Änderungen vornimmst."
        ]
      },
      {
        "title": "Warum eine Arcade-ZIP anders ist",
        "body": "Ein Handheld-ROM ist oft ein einzelnes Spielabbild. Ein Arcade-Satz kann mehrere ROM-Chips enthalten und von einem Parentsatz oder einem BIOS abhängen. Eine fremde Archivdatei in .zip umzubenennen macht sie nicht kompatibel. Lass das mitgelieferte Archiv unverändert, sofern der Importvorgang nicht ausdrücklich ein Entpacken verlangt."
      },
      {
        "title": "Wenn ein Spiel nicht startet",
        "body": "Prüfe zuerst das gewählte Board und die von Retropa angezeigte Fehlermeldung. Prüfe anschließend, ob dein Satz vollständig ist und ob die benötigten BIOS- oder Parent-Dateien vorliegen. Ein Clonesatz allein enthält möglicherweise nicht alle Dateien, die ein Core braucht. Andere Filter oder ein anderer Skin können fehlende ROM-Daten nicht beheben.",
        "points": [
          "Bewahre deine Originaldateien auf, während du einen Import eingrenzt.",
          "Notiere App-Version, System und angezeigte Fehlermeldung, wenn du den Support kontaktierst.",
          "Sende keine kommerziellen ROM- oder BIOS-Dateien mit einer Support-Anfrage."
        ]
      },
      {
        "title": "Richte die erste Sitzung ein",
        "body": "Sobald das Spiel startet, identifiziere die Steuerung für Münze, Start und Aktionen. Prüfe bei einem externen Controller die Belegung ebenso wie die Beschriftungen auf dem Bildschirm. Beginne mit einer einfachen Bildvoreinstellung; wähle eine CRT-Behandlung erst, nachdem Spiel und Steuerung korrekt funktionieren."
      }
    ],
    "link": "/cores/",
    "linkLabel": "System- und Core-Katalog prüfen"
  },
  "delta-skins": {
    "title": "Delta-Skins auf iPhone und iPad importieren",
    "label": "Skins",
    "image": "material",
    "summary": "Ändere die Steuerung um dein Spiel herum, nicht nur den Hintergrund. Retropa importiert .deltaskin-Pakete und bietet eine eigene Skin-Bibliothek für iPhone und iPad.",
    "imageAlt": "Retropa-Produktbild mit Controller-Skins aus verschiedenen Materialien im Hoch- und Querformat",
    "sections": [
      {
        "title": "Ein Skin ist ein Steuerungslayout",
        "body": "Spielbildschirm, Steuerkreuz, Aktionstasten und Menüsteuerung brauchen alle Platz. Ein Skin legt fest, wo diese Elemente sitzen. Wähle einen Skin für das System, das du spielst, und die Ausrichtung, die du nutzt, statt nur nach Farbe zu entscheiden.",
        "points": [
          "Prüfe das vorgesehene System, bevor du ein Paket importierst.",
          "Die Unterstützung von Hoch- und Querformat hängt von den Layouts ab, die der Skin mitbringt.",
          "Ein unterstütztes Paketformat garantiert nicht, dass jedes Layout von Drittanbietern auf jedes Gerät passt."
        ]
      },
      {
        "title": "Importiere ein .deltaskin-Paket",
        "body": "Bewahre die Originaldatei des Skins auf, öffne den Skin-Import in Retropa und wähle das Paket in Dateien aus. Wähle es nach dem Import für das passende System aus. Starte ein Spiel und prüfe Bildschirmbereich, Richtungssteuerung und jede Aktionstaste, bevor du es zu deinem regulären Layout machst.",
        "points": [
          "Verwende das vollständige .deltaskin-Paket, nicht einen Screenshot eines Skins.",
          "Wenn das Paket fehlschlägt, prüfe sein Format und das vorgesehene System, bevor du ein anderes Layout versuchst.",
          "Wechsle zu einem funktionierenden Skin zurück, wenn wichtige Steuerelemente verdeckt sind."
        ]
      },
      {
        "title": "Touch-Steuerung und physische Controller",
        "body": "Retropa unterstützt außerdem kompatible externe Controller und eine anpassbare Tastenbelegung. Verbinde den Controller zuerst mit iOS und prüfe danach seine Belegung in Retropa. Ein optischer Skin und ein Controller-Profil erfüllen verschiedene Zwecke: Das Ändern der Optik ersetzt nicht die Prüfung deiner physischen Tastenzuordnung."
      },
      {
        "title": "Pakete und Grenzen des Kaufs",
        "body": "PackHub ist der Ort, um Skin-Pakete für Retropa zu durchsuchen. Premium-Skins erfordern Plus; importierte Pakete umgehen die Lizenzprüfung nicht. Prüfe den aktuellen Tarif und die Anforderungen des Pakets in der App, bevor du kaufst. Delta-Kompatibilität bezeichnet ein Dateiformat, keine Verbindung zum Delta-Projekt."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Skins auf PackHub durchsuchen"
  },
  "crt-filters": {
    "title": "CRT-Filter für Emulatoren auf iPhone und iPad",
    "label": "Filter",
    "image": "filter",
    "summary": "Die erweiterten CRT- und LCD-Filter von Retropa passen sich an deine tatsächliche Anzeigefläche an, ganz ohne ganzzahlige Skalierung. So bleibt der Charakter eines Retro-Bildschirms auf iPhone und iPad erhalten.",
    "imageAlt": "Retropa-Produktbild mit Filterauswahl und CRT-Bildbehandlungen",
    "sections": [
      {
        "title": "Wähle zuerst das Display, dann die Stärke",
        "body": "Die Nächster-Pixel-Darstellung hält die ursprünglichen Pixelgrenzen klar. CRT-Behandlungen nutzen Scanlines, Masken und Randabschattung; LCD-Behandlungen ergänzen eine Pixel- oder Subpixelstruktur. Diese Entscheidungen ändern die Darstellung, nicht die zugrunde liegende Spielauflösung.",
        "points": [
          "Beginne mit dem ungefilterten Bild als Referenz.",
          "Prüfe kleinen Text, helle Kanten und dunkle Bereiche, nicht nur den Titelbildschirm.",
          "Beurteile das Ergebnis in der Größe und Ausrichtung, in der du tatsächlich spielst."
        ]
      },
      {
        "title": "Keine Vorgabe für ganzzahlige Skalierung",
        "body": "Bei der ganzzahligen Skalierung wird jedes Spielpixel auf eine ganze Anzahl von Bildschirmpixeln abgebildet. Das kann für eine scharfe Nächster-Pixel-Ausgabe nützlich sein, lässt aber möglicherweise zusätzlichen Platz ungenutzt. Die erweiterten Filter von Retropa berücksichtigen die tatsächliche Ausgabefläche, sodass ihre Bildstruktur nicht auf ein 2-faches, 3-faches oder anderes ganzzahliges Vielfaches beschränkt ist. Du kannst das Seitenverhältnis des Spiels beibehalten und trotzdem einen Bildbereich nutzen, der zu deinem Telefon oder Skin passt.",
        "points": [
          "CRT V4 rekonstruiert die Strahlabdeckung und filtert die Phosphorstruktur analytisch über den Fußabdruck der Ausgabepixel.",
          "Trinitron nutzt integrierte Scanline-Strahlen und bandbegrenzte Harmonische der Streifenmaske.",
          "DMG integriert die Abdeckung der Flüssigkristallzellen, statt ein Raster einfach punktweise abzutasten."
        ]
      },
      {
        "title": "Mehr als eine Scanline-Überlagerung",
        "body": "Die einfachen Voreinstellungen CRT Lite, LCD Grid und Scanline bieten leichtere Bildbehandlungen. Erweiterte Voreinstellungen modellieren mehr vom Display selbst: Strahlbreite, Phosphor-Durchlass oder reflektierendes Flüssigkristallmaterial. Direkt abgetastete Raster können bei gebrochenen Skalierungen ungleichmäßig werden; eine ausgabebewusste Integration lässt unaufgelöste Details natürlich verschmelzen. Das ist keine Behauptung, dass jeder herkömmliche Filter eine ganzzahlige Skalierung braucht oder dass jedes Gerät und jede Voreinstellung frei von Artefakten ist."
      },
      {
        "title": "Was der Browser-Vergleich zeigt",
        "body": "Die Fernseher-Vorschau zeigt einfache Filter sowie die nativ abgeleiteten CRT V4, Trinitron V1 und DMG. Die erweiterten Modi übernehmen ausgewählte native Formeln, einschließlich der Integration des Pixel-Fußabdrucks, mit einer gemeinsamen Darstellungskurve. Der Web-Renderer lässt die zeitliche Persistenz, die vollständige mehrstufige Bloom-Kette und das native Farbmanagement weg. Er zeigt Displayeigenschaften, nicht pixelidentische Metal-Ausgabe oder echtes Gameplay-Material."
      },
      {
        "title": "RetroArch-Shader-Voreinstellungen importieren",
        "body": "Eine .slangp-Voreinstellung kann mehrere Shader-Durchläufe, Texturen und Parameterwerte referenzieren. Halte diese Abhängigkeiten beim Import zusammen. Eine Voreinstellungsdatei allein kann unvollständig sein; eine .slang-Datei beschreibt einen einzelnen Shader und keine ganze Sammlung.",
        "points": [
          "Verwende Pakete, die für den unterstützten Shader-Workflow gedacht sind.",
          "Wenn eine Voreinstellung nicht geladen werden kann, prüfe referenzierte Dateien und die Kompatibilität, bevor du das Spiel änderst.",
          "Probiere eine leichtere Voreinstellung, wenn eine komplexe Kette die Bildrate oder den Akkuverbrauch beeinflusst."
        ]
      },
      {
        "title": "Bildqualität kostet Leistung",
        "body": "Ein mehrstufiger Filter kann mehr GPU-Arbeit erfordern als eine Nächster-Pixel-Darstellung. Die Leistung hängt von Gerät, Emulator-Core, Ausgabeauflösung und Voreinstellung ab. Retropa verspricht nicht, dass jeder importierte Shader auf jedem iPhone gleich gut läuft. Erweiterte Filter erfordern Plus; prüfe die verfügbaren Optionen in der App."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Filter auf PackHub durchsuchen"
  }
}
