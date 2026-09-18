import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "Emulatore GBA per iPhone e iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Porta i tuoi file .gba in Retropa. Inizia con un gioco funzionante, poi scegli una skin per la console, assegna un controller e trova il trattamento dello schermo più adatto.",
    "imageAlt": "Immagine del prodotto Retropa con layout dei comandi in verticale e orizzontale",
    "sections": [
      {
        "title": "Parti da un file di gioco .gba",
        "body": "Retropa esegue i giochi GBA supportati su iPhone e iPad con iOS 18 o versione successiva. L'app è gratuita, ma non include giochi né file BIOS. Usa un file di gioco che hai il diritto di usare e conserva l'originale fuori dall'app come backup.",
        "points": [
          "Un gioco GBA usa normalmente l'estensione .gba.",
          "Un file .gb o .gbc appartiene a GB o GBC, non a GBA.",
          "Cambiare l'estensione di un file non converte un gioco in un altro sistema."
        ]
      },
      {
        "title": "Importa dall'app File",
        "body": "Assicurati che il file sia disponibile localmente in File e non solo come segnaposto nel cloud. Apri la voce di importazione nella libreria di Retropa e seleziona il gioco. Quando compare nella libreria, aprilo e verifica che immagine, audio e comandi predefiniti funzionino prima di personalizzare il layout."
      },
      {
        "title": "Scegli il layout giusto per la console",
        "body": "Un layout GBA ha bisogno di spazio per la croce direzionale, A e B, i tasti dorsali, Start e Select. Prova sia i pulsanti sia l'aspetto grafico. Retropa supporta l'importazione di .deltaskin, ma una skin DS non sostituisce un layout GBA. Controlla che il pacchetto supporti l'orientamento del tuo dispositivo.",
        "points": [
          "Mantieni lo schermo di gioco libero in entrambi gli orientamenti che usi.",
          "Abbina i controller fisici compatibili in iOS, poi controlla la loro mappatura in Retropa.",
          "Le skin premium e i filtri avanzati richiedono Plus; importare un file non sblocca le funzioni a pagamento."
        ]
      },
      {
        "title": "Carattere LCD o pixel nitidi?",
        "body": "Parti dall'immagine originale. Un trattamento LCD leggero può ricordare lo schermo di una console portatile, mentre un trattamento CRT crea una resa diversa. I filtri avanzati di Retropa tengono conto dell'area di uscita reale senza richiedere una scalatura intera. I filtri cambiano l'immagine, non la risoluzione del gioco né la compatibilità dei file."
      },
      {
        "title": "Quando un'importazione o un salvataggio non funziona",
        "body": "Controlla prima l'estensione del file, il sistema selezionato e l'errore esatto. Se File non riesce ad aprire o scaricare l'originale, completa quel passaggio prima di importare di nuovo. Per gli errori BIOS, segui il requisito del core selezionato; un neogeo.zip arcade non è un BIOS GBA. Il salvataggio interno del gioco e uno stato di salvataggio dell'emulatore sono artefatti diversi: non rinominare l'uno per ottenere l'altro e conserva i backup prima di passare da un core o da un'app all'altra.",
        "points": [
          "Prova la skin predefinita e un filtro semplice quando isoli un problema di comandi o di visualizzazione.",
          "Annota versione dell'app, sistema, core ed errore per il supporto.",
          "Non allegare ROM commerciali o file BIOS a una richiesta di assistenza."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Vedi i file supportati e i core GBA"
  },
  "ds-emulator": {
    "title": "Emulatore DS per iPhone e iPad",
    "label": "DS",
    "image": "library",
    "summary": "Importa i tuoi giochi .nds in Retropa e crea spazio per entrambi gli schermi. Controlla input touch, comandi e requisiti dei file prima di scegliere un nuovo layout o filtro.",
    "imageAlt": "Immagine del prodotto Retropa con la libreria di giochi e le impostazioni su iPhone",
    "sections": [
      {
        "title": "Prepara un gioco .nds",
        "body": "DS e GBA sono sistemi diversi. Retropa supporta i file .nds per DS su iPhone e iPad con iOS 18 o versione successiva. Usa file che hai il diritto di usare e conserva un backup separato. L'app non fornisce download di ROM o BIOS e un file .gba non diventa un gioco DS se lo rinomini."
      },
      {
        "title": "Importa e controlla entrambi gli schermi",
        "body": "Scarica il file di gioco localmente in File, poi selezionalo dalla voce di importazione della libreria in Retropa. Apri il gioco importato con il layout predefinito. Controlla entrambe le aree di visualizzazione e prova l'input touch in una parte del gioco che lo utilizza. La sola schermata del titolo non basta a verificare che ogni input necessario sia raggiungibile.",
        "points": [
          "Parti dal sistema rilevato o selezionato per il file .nds.",
          "Segui ogni requisito BIOS o firmware segnalato dal core installato.",
          "Conserva una copia del file originale mentre diagnostichi gli errori."
        ]
      },
      {
        "title": "Lascia spazio sufficiente allo schermo touch",
        "body": "Due schermi richiedono un layout diverso da quello di una console con un solo schermo. Scegli una skin DS che mostri entrambi gli schermi e i comandi necessari. Il verticale può dare agli schermi una disposizione naturale; il supporto per l'orizzontale dipende dalla skin scelta. Controlla i piccoli elementi touch alla dimensione con cui giochi davvero, soprattutto su un iPhone più piccolo."
      },
      {
        "title": "I controller non sostituiscono ogni azione touch",
        "body": "Retropa supporta controller esterni compatibili e la mappatura dei pulsanti. Abbina il controller a iOS e conferma le sue assegnazioni nell'app. Una croce direzionale fisica e i pulsanti d'azione non sostituiscono automaticamente le interazioni touch di un gioco. Verifica queste interazioni prima di scegliere una configurazione solo con controller."
      },
      {
        "title": "Mantieni semplice la prima sessione",
        "body": "Conferma la compatibilità del gioco e degli input prima di applicare una catena di shader complessa. Se l'immagine o la regolarità dei fotogrammi cambia dopo aver scelto un filtro, torna a un preset semplice e confronta. Dispositivo, core e dimensione dell'output influiscono tutti sulle prestazioni; il supporto per DS non promette risultati identici per ogni gioco e ogni telefono.",
        "points": [
          "Le skin premium e i filtri avanzati richiedono Retropa Plus.",
          "Mantieni un backup dei salvataggi originali e degli stati di salvataggio; non sono formati di file intercambiabili.",
          "Per il supporto, includi versione dell'app, core selezionato ed errore esatto, non i file di gioco o BIOS."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Vedi i file supportati e i core DS"
  },
  "arcade": {
    "title": "Emulatore arcade per iPhone e iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Gioca con i file arcade CPS, Neo Geo, PGM e M92 supportati in Retropa, con controlli touch, controller esterni e filtri CRT. I giochi arcade richiedono Plus; giochi e file BIOS non sono inclusi.",
    "imageAlt": "Immagine del prodotto Retropa con la libreria di giochi e le impostazioni",
    "sections": [
      {
        "title": "CPS, Neo Geo e la scheda arcade",
        "body": "Retropa supporta famiglie arcade tra cui CPS I, CPS II, CPS III, Neo Geo, PGM e M92. Abbina il tuo gioco alla scheda arcade e al set di ROM atteso dal core installato. Il supporto per una famiglia non garantisce che ogni archivio venga eseguito.",
        "points": [
          "Conferma il sistema nell'app prima di scegliere un file.",
          "L'esecuzione arcade richiede Retropa Plus.",
          "Retropa non include ROM commerciali né file BIOS."
        ]
      },
      {
        "title": "Neo Geo arcade non è Neo Geo Pocket",
        "body": "I giochi arcade Neo Geo e i giochi portatili Neo Geo Pocket usano sistemi e file diversi. Per un gioco arcade che segnala un BIOS Neo Geo mancante, apri Arcade BIOS in Retropa e importa il pacchetto neogeo.zip richiesto, poi riprova il gioco. Una ROM Pocket o uno ZIP rinominato non sono un sostituto.",
        "points": [
          "Usa file BIOS che hai il diritto di usare; Retropa non fornisce download.",
          "Un pacchetto BIOS non sostituisce i dati ROM mancanti del gioco, del parent o del clone.",
          "Controlla l'errore esatto e conserva l'archivio originale prima di fare modifiche."
        ]
      },
      {
        "title": "Perché uno ZIP arcade è diverso",
        "body": "Una ROM per console portatile è spesso un'unica immagine di gioco. Un set arcade può contenere più chip ROM e dipendere da un set parent o da un BIOS. Rinominare in .zip un archivio non correlato non lo rende compatibile. Lascia intatto l'archivio fornito, a meno che il flusso di importazione non richieda esplicitamente di estrarlo."
      },
      {
        "title": "Quando un gioco non si avvia",
        "body": "Controlla prima la scheda selezionata e l'errore mostrato da Retropa. Poi verifica se il tuo set è completo e se i file BIOS o parent richiesti sono disponibili. Un archivio clone da solo può non includere tutti i file che servono a un core. Cambiare filtro o acquistare un'altra skin non può risolvere dati ROM mancanti.",
        "points": [
          "Conserva i file originali mentre diagnostichi un'importazione.",
          "Annota versione dell'app, sistema ed errore mostrato quando contatti il supporto.",
          "Non inviare file ROM commerciali o BIOS con una richiesta di assistenza."
        ]
      },
      {
        "title": "Prepara la prima sessione",
        "body": "Una volta avviato il gioco, individua i comandi per gettone, avvio e azioni. Con un controller esterno, controlla la mappatura oltre alle etichette sullo schermo. Inizia con un preset di visualizzazione semplice; scegli un trattamento CRT dopo aver confermato che gioco e comandi funzionano correttamente."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Consulta il catalogo di sistemi e core"
  },
  "delta-skins": {
    "title": "Importare skin Delta su iPhone e iPad",
    "label": "Skin",
    "image": "material",
    "summary": "Cambia i comandi attorno al tuo gioco, non solo lo sfondo. Retropa importa i pacchetti .deltaskin e offre una propria raccolta di skin per iPhone e iPad.",
    "imageAlt": "Immagine del prodotto Retropa con skin dei comandi in verticale e orizzontale in materiali diversi",
    "sections": [
      {
        "title": "Una skin è un layout di comandi",
        "body": "Schermo di gioco, croce direzionale, pulsanti d'azione e comandi di menu hanno tutti bisogno di spazio. Una skin definisce dove si trovano questi elementi. Scegline una per il sistema con cui giochi e per l'orientamento che usi, invece di decidere solo in base al colore.",
        "points": [
          "Controlla il sistema previsto prima di importare un pacchetto.",
          "Il supporto per verticale e orizzontale dipende dai layout forniti dalla skin.",
          "Un formato di pacchetto supportato non garantisce che ogni layout di terze parti si adatti a ogni dispositivo."
        ]
      },
      {
        "title": "Importa un pacchetto .deltaskin",
        "body": "Conserva il file originale della skin, apri la voce di importazione delle skin di Retropa e seleziona il pacchetto da File. Dopo l'importazione, selezionalo per il sistema corrispondente. Avvia un gioco e controlla l'area dello schermo, i comandi direzionali e ogni pulsante d'azione prima di renderlo il tuo layout abituale.",
        "points": [
          "Usa il pacchetto .deltaskin completo, non uno screenshot di una skin.",
          "Se il pacchetto non funziona, controlla il formato e il sistema previsto prima di provare un altro layout.",
          "Torna a una skin funzionante se i comandi essenziali sono coperti."
        ]
      },
      {
        "title": "Controlli touch e controller fisici",
        "body": "Retropa supporta anche controller esterni compatibili e una mappatura dei pulsanti configurabile. Abbina prima il controller a iOS, poi controlla la sua mappatura in Retropa. Una skin visiva e un profilo controller hanno scopi diversi: cambiare l'aspetto non sostituisce il controllo dell'assegnazione dei tuoi pulsanti fisici."
      },
      {
        "title": "Pacchetti e limiti di acquisto",
        "body": "PackHub è il luogo dove sfogliare i pacchetti di skin di Retropa. Le skin premium richiedono Plus; i pacchetti importati non aggirano i controlli dei diritti. Controlla il piano attuale e i requisiti del pacchetto nell'app prima di acquistare. La compatibilità Delta descrive un formato di file, non un'affiliazione con il progetto Delta."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Sfoglia le skin su PackHub"
  },
  "crt-filters": {
    "title": "Filtri CRT per emulatori su iPhone e iPad",
    "label": "Filtri",
    "image": "filter",
    "summary": "I filtri CRT e LCD avanzati di Retropa si adattano alla tua area di visualizzazione reale senza richiedere una scalatura intera. Mantieni il carattere di uno schermo retro tra dimensioni di iPhone, layout di iPad e orientamenti diversi.",
    "imageAlt": "Immagine del prodotto Retropa con la selezione dei filtri e i trattamenti dello schermo CRT",
    "sections": [
      {
        "title": "Scegli il display, poi l'intensità",
        "body": "La resa a pixel più vicino mantiene nitidi i confini originali dei pixel. I trattamenti CRT usano scanline, maschere e ombreggiatura dei bordi; i trattamenti LCD aggiungono una struttura di pixel o subpixel. Queste scelte cambiano la resa, non la risoluzione di fondo del gioco.",
        "points": [
          "Parti dall'immagine senza filtri come riferimento.",
          "Controlla testi piccoli, bordi luminosi e zone scure, non solo la schermata del titolo.",
          "Valuta il risultato alla dimensione e nell'orientamento con cui giochi davvero."
        ]
      },
      {
        "title": "Nessun requisito di scalatura intera",
        "body": "La scalatura intera mappa ogni pixel del gioco su un numero intero di pixel dello schermo. Può essere utile per un output nitido a pixel più vicino, ma può lasciare spazio inutilizzato. I filtri avanzati di Retropa tengono conto dell'area di output reale, quindi la loro struttura di visualizzazione non è limitata a un multiplo di 2, di 3 o a un altro multiplo intero. Puoi mantenere le proporzioni del gioco usando allo stesso tempo un'area di visualizzazione adatta al tuo telefono o alla tua skin.",
        "points": [
          "CRT V4 ricostruisce la copertura del fascio e filtra analiticamente la struttura del fosforo usando l'impronta dei pixel di output.",
          "Trinitron usa fasci a scanline integrate e armoniche della griglia di apertura a banda limitata.",
          "DMG integra la copertura delle celle a cristalli liquidi invece di campionare semplicemente una griglia punto per punto."
        ]
      },
      {
        "title": "Più di una semplice sovrapposizione di scanline",
        "body": "I preset semplici CRT Lite, LCD Grid e Scanline offrono trattamenti di visualizzazione più leggeri. I preset avanzati modellano di più il display stesso: larghezza del fascio, trasmissione del fosforo o materiale riflettente a cristalli liquidi. Le griglie campionate direttamente possono diventare irregolari a scale frazionarie; un'integrazione consapevole dell'output aiuta i dettagli non risolti a fondersi in modo naturale. Questo non significa che ogni filtro convenzionale richieda una scalatura intera, né che ogni dispositivo e preset sia privo di artefatti."
      },
      {
        "title": "Cosa mostra il confronto nel browser",
        "body": "L'anteprima televisiva mostra i filtri di base più CRT V4, Trinitron V1 e DMG basati sulle formule native. Le modalità avanzate adattano formule native selezionate, inclusa l'integrazione dell'impronta dei pixel, con una curva di resa condivisa. Il renderer web omette la persistenza temporale, la catena completa di bloom a più passaggi e la gestione nativa del colore. Illustra caratteristiche del display, non un output Metal identico pixel per pixel né immagini di gioco reali."
      },
      {
        "title": "Importa preset di shader RetroArch",
        "body": "Un preset .slangp può fare riferimento a più passaggi di shader, texture e valori di parametri. Tieni insieme queste dipendenze durante l'importazione. Un file di preset da solo può essere incompleto; un file .slang descrive uno shader e non un'intera raccolta.",
        "points": [
          "Usa pacchetti pensati per il flusso di lavoro degli shader supportato.",
          "Se un preset non si carica, controlla i file referenziati e la compatibilità prima di modificare il gioco.",
          "Prova un preset più leggero se una catena complessa influisce sulla regolarità dei fotogrammi o sulla batteria."
        ]
      },
      {
        "title": "La qualità dell'immagine ha un costo in prestazioni",
        "body": "Un filtro a più passaggi può richiedere più lavoro GPU di un output a pixel più vicino. Le prestazioni dipendono da dispositivo, core dell'emulatore, risoluzione di output e preset. Retropa non promette che ogni shader importato funzioni ugualmente bene su ogni iPhone. I filtri avanzati richiedono Plus; controlla le opzioni disponibili nell'app."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Sfoglia i filtri su PackHub"
  }
}
