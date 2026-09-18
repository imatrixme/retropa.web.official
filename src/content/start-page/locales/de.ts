import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "ROMs in Retropa importieren | Anleitung für iPhone und iPad",
  "description": "GBA-, DS- und Arcade-Spiele auf iPhone und iPad importieren. Antworten zu ROMs, BIOS, Delta-Skins, Controllern, Speicherständen, Plus und erweiterten Filtern ohne ganzzahlige Skalierung.",
  "title": "Dein erstes Spiel in Retropa.",
  "intro": "Von einer Datei, die dir gehört, zu einem Spiel, das du spielen kannst. Beginne mit einem unterstützten Handheld-System und mache dann Steuerung und Bild zu deinen eigenen.",
  "steps": [
    [
      "Hol dir Retropa",
      "Installiere Retropa aus dem App Store auf einem iPhone oder iPad mit iOS 18 oder neuer. Die App ist kostenlos; einige Funktionen erfordern Plus."
    ],
    [
      "Importiere dein Spiel",
      "Öffne den Import-Eintrag in deiner Bibliothek und wähle ein unterstütztes ROM in Dateien aus. Für GBA verwendest du eine .gba-Datei, für DS eine .nds-Datei. Bewahre die Originaldatei als Sicherung auf. ROMs und BIOS-Dateien werden nicht mitgeliefert."
    ],
    [
      "Öffne es aus deiner Bibliothek",
      "Wähle das importierte Spiel aus und beginne zu spielen. Prüfe die Steuerung auf dem Bildschirm, bevor du Skins oder Filter änderst. Wenn ein Spiel nicht startet, prüfe sein System, sein Dateiformat und ein eventuell benötigtes BIOS."
    ]
  ],
  "faqTitle": "Bevor du startest",
  "systems": "Unterstützte Systeme ansehen",
  "support": "Brauchst du Hilfe?",
  "faqs": [
    {
      "id": "devices",
      "question": "Welche iPhones und iPads können Retropa ausführen?",
      "answer": "Retropa ist im App Store für iPhone und iPad mit iOS 18 oder neuer erhältlich. Prüfe den Abschnitt zur Kompatibilität im App Store für dein Gerät. Anspruchsvollere Arcade-Cores und mehrstufige Bildfilter können mehr Leistung verlangen als ein einfaches Handheld-Spiel."
    },
    {
      "id": "systems",
      "question": "Kann Retropa GBA-, Nintendo-DS- und Arcade-Spiele abspielen?",
      "answer": "Retropa unterstützt GBA, DS und weitere aufgeführte Handheld- und Konsolensysteme, dazu unterstützte Arcade-Familien wie CPS, PGM und M92. Die Kompatibilität hängt von der installierten App, dem Core und dem Spielformat ab; sie bedeutet nicht, dass jedes Spiel oder jedes Arcade-Archiv unterstützt wird.",
      "link": "cores",
      "linkLabel": "Unterstützte Systeme und Dateiformate ansehen"
    },
    {
      "id": "games",
      "question": "Enthält Retropa Spiele oder herunterladbare ROMs?",
      "answer": "Nein. Retropa ist ein Emulator, kein kommerzielles Spiele-Abo und kein ROM-Shop. Bringe Inhalte mit, die du nutzen darfst, etwa eigene Projekte oder Homebrew, das mit Erlaubnis verteilt wird. Kommerzielle ROMs und BIOS-Dateien werden nicht mitgeliefert."
    },
    {
      "id": "import",
      "question": "Wie importiere ich ein GBA- oder DS-ROM auf dem iPhone?",
      "answer": "Bewahre die Spieldatei an einem Ort auf, der über die iOS-App Dateien erreichbar ist. Öffne den Import-Eintrag in der Bibliothek von Retropa, wähle die unterstützte Datei aus und öffne das importierte Spiel aus der Bibliothek. GBA verwendet .gba und DS verwendet .nds. Ein Spiel wird nicht dadurch zum richtigen Format, dass man eine andere Dateiendung umbenennt."
    },
    {
      "id": "bios",
      "question": "Brauche ich eine BIOS-Datei für Retropa?",
      "answer": "Die BIOS-Vorgaben unterscheiden sich je nach System und Core. Wenn Retropa ein fehlendes BIOS meldet, prüfe die Vorgabe für dieses System und stelle die richtige Datei über den unterstützten Weg der App bereit. Ein BIOS für ein anderes System ist kein Ersatz. Retropa bietet keine BIOS-Downloads an.",
      "link": "cores",
      "linkLabel": "Systemvoraussetzungen prüfen"
    },
    {
      "id": "arcade-zip",
      "question": "Warum startet meine Arcade-ZIP oder mein ROM-Satz nicht?",
      "answer": "Ein Arcade-Archiv muss zum Board und zum ROM-Satz passen, die sein Core erwartet. Manche Sätze hängen zusätzlich von einem Parentsatz oder einem BIOS ab, sodass eine Clone-ZIP allein unvollständig sein kann. Lass das Archiv unverändert, sofern die App kein Entpacken verlangt. Die Ausführung von Arcade-Spielen erfordert außerdem Plus; ein Abo kann fehlende oder inkompatible ROM-Daten nicht reparieren."
    },
    {
      "id": "missing-file",
      "question": "Warum sehe ich ein Spiel in Dateien, kann es aber nicht importieren?",
      "answer": "Prüfe, ob die eigentliche Datei lokal verfügbar ist und nicht nur als Platzhalter in der Cloud, und ob ihr Format zu einem unterstützten System passt. Prüfe jede von Retropa angezeigte Fehlermeldung. Halte eine Sicherung des Originals bereit, während du den Import eingrenzt, und gehe nicht davon aus, dass eine umbenannte ZIP-Datei oder ein unvollständiger Download ein gültiges ROM ist."
    },
    {
      "id": "offline",
      "question": "Kann ich lokal gespeicherte Spiele ohne Streaming spielen?",
      "answer": "Retropa führt unterstützte Spieldateien auf deinem Gerät aus, statt Gameplay von einem Cloud-Emulator zu streamen. Importiere zuerst die benötigten Spiel- und BIOS-Dateien. Das Herunterladen von Paketen, das Abrufen von Online-Informationen und die Nutzung von Cloud-Funktionen brauchen weiterhin einen eigenen Netzwerkzugang."
    },
    {
      "id": "delta-skins",
      "question": "Kann ich Delta-Skins in Retropa verwenden?",
      "answer": "Retropa unterstützt den Import von .deltaskin-Paketen. Verwende das vollständige Paket, wähle ein Layout für das passende System und prüfe die Unterstützung für Hoch- oder Querformat. Die Formatunterstützung garantiert nicht, dass jeder Skin von Drittanbietern auf jedes iPhone passt. Delta-Kompatibilität bezeichnet ein Dateiformat, keine Zugehörigkeit.",
      "link": "delta-skins",
      "linkLabel": "Anleitung zum Import von Delta-Skins lesen"
    },
    {
      "id": "controllers",
      "question": "Unterstützt Retropa Bluetooth- oder externe Gamecontroller?",
      "answer": "Retropa unterstützt kompatible externe Controller und eine anpassbare Tastenbelegung. Verbinde den Controller zuerst über iOS und prüfe danach seine Belegung in Retropa. Prüfe bei Arcade-Spielen die Zuordnung von Münze und Start ebenso wie die Aktionstasten. Die Kompatibilität hängt vom Controller und der Unterstützung in iOS ab."
    },
    {
      "id": "saves",
      "question": "Sind spielinterne Speicherungen und Speicherstände des Emulators dasselbe?",
      "answer": "Nein. Eine spielinterne Speicherung wird vom Spiel erstellt; ein Speicherstand hält den Zustand des Emulators fest. Speicherstände können vom genauen Core und der Version abhängen, gehe also nicht davon aus, dass sie zwischen Apps oder Cores übertragbar sind. Bewahre deine Originaldateien und Sicherungen auf, bevor du Speicherungen verschiebst oder ersetzt."
    },
    {
      "id": "plus",
      "question": "Ist Retropa kostenlos, und was schaltet Plus frei?",
      "answer": "Retropa ist kostenlos. Arcade-Cores, Premium-Skins und erweiterte Filter erfordern Retropa Plus. Aktuelle Tarife, regionale Preise und Kaufbedingungen werden vor dem Kauf in der App angezeigt. Ein kostenloser Download bedeutet nicht, dass jeder Core oder jede Ressource enthalten ist."
    },
    {
      "id": "restore",
      "question": "Wie stelle ich einen früheren Retropa-Plus-Kauf wieder her?",
      "answer": "Nutze die Funktion zum Wiederherstellen von Käufen in der App mit dem Apple Account, der für den ursprünglichen Kauf verwendet wurde. Prüfe, ob der Kauf oder das Abo noch gültig ist. Eine wiederhergestellte Lizenz bringt keine fehlenden ROM-Dateien oder Spielstände zurück. Wende dich mit App-Version und Kaufproblem an den Support, nicht mit Kontopasswörtern."
    },
    {
      "id": "advanced-filters",
      "question": "Wie unterscheiden sich die erweiterten Filter von Retropa von gewöhnlichen CRT-Filtern?",
      "answer": "Einfache Bildfilter legen häufig abgetastete Scanlines oder Pixelraster über das Bild. Erweiterte Voreinstellungen von Retropa wie CRT V4 und Trinitron modellieren Strahl- und Phosphorstruktur mit Integration der Ausgabepixel oder bandbegrenzter Filterung. DMG enthält integrierte Flüssigkristallzellen und ein reflektierendes Substrat. Das sind Displaymodelle, nicht nur ein Farbstich.",
      "link": "crt-filters",
      "linkLabel": "Die erweiterten Bildfilter vergleichen"
    },
    {
      "id": "integer-scaling",
      "question": "Erfordern die erweiterten Filter von Retropa eine ganzzahlige Skalierung?",
      "answer": "Nein. Die erweiterten Filter von Retropa berücksichtigen die tatsächliche Ausgabegröße, statt ein 2-faches, 3-faches oder anderes ganzzahliges Vielfaches zu verlangen. Das gibt dir mehr Freiheit, ein Spiel in die Anzeigefläche deines Telefons, deiner Ausrichtung oder deines gewählten Skins einzupassen. Das ursprüngliche Seitenverhältnis kann erhalten bleiben. Die Ergebnisse hängen weiterhin von Voreinstellung und Gerät ab; Filter erzeugen keine zusätzliche Quellauflösung.",
      "link": "crt-filters",
      "linkLabel": "Mehr über das Rendern mit gebrochenen Skalierungen erfahren"
    },
    {
      "id": "shader-import",
      "question": "Kann Retropa .slang- und .slangp-Shader von RetroArch importieren?",
      "answer": "Retropa unterstützt die Shader-Workflows mit .slang und .slangp. Eine Voreinstellung kann mehrere Durchläufe oder Texturen referenzieren; halte diese Abhängigkeiten beim Import zusammen. Nicht jede Voreinstellung von Drittanbietern funktioniert garantiert. Wenn eine fehlschlägt, prüfe ihre Dateien und die Kompatibilität, statt sie umzubenennen oder das Spiel zu ändern.",
      "link": "crt-filters",
      "linkLabel": "Mehr über die Shader-Kompatibilität lesen"
    },
    {
      "id": "performance",
      "question": "Beeinflussen erweiterte Filter die Bildrate oder die Akkulaufzeit?",
      "answer": "Das können sie. Mehrstufiges Rendern braucht mehr GPU-Arbeit als ein ungefiltertes Bild, und der Aufwand variiert mit Voreinstellung, Ausgabegröße, Gerät und Emulator-Core. Vergleiche mit dem Originalbild, wenn dir Verlangsamungen auffallen, und probiere dann einen leichteren Filter. Skalierung ohne ganzzahlige Vielfache ist eine Funktion für die Bildqualität, kein Versprechen unbegrenzter GPU-Leistung."
    },
    {
      "id": "packages",
      "question": "Wo bekomme ich Skin- und Filterpakete für Retropa?",
      "answer": "Durchsuche PackHub nach Skin- und Shader-Paketen. Prüfe System, Format und Plus-Anforderungen des Pakets in der App. Importierte Ressourcen umgehen die Lizenzprüfung nicht. Wenn du Hilfe brauchst, gib App-Version, Paketnamen und Fehlermeldung an, sende aber keine kommerziellen ROMs oder BIOS-Dateien."
    }
  ]
}
