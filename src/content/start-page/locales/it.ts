import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Importare ROM in Retropa | Guida per iPhone e iPad",
  "description": "Importa giochi GBA, DS e arcade su iPhone e iPad. Risposte su ROM, BIOS, skin Delta, controller, salvataggi, Plus e filtri avanzati senza scalatura intera.",
  "title": "Il tuo primo gioco in Retropa.",
  "intro": "Da un file che possiedi a un gioco che puoi avviare. Inizia da un sistema portatile supportato, poi rendi tuoi i comandi e l'immagine.",
  "steps": [
    [
      "Installa Retropa",
      "Installa Retropa dall'App Store su un iPhone o iPad con iOS 18 o versione successiva. L'app è gratuita; alcune funzioni richiedono Plus."
    ],
    [
      "Importa il tuo gioco",
      "Apri la voce di importazione nella tua libreria e scegli una ROM supportata da File. Per GBA usa un file .gba, per DS un file .nds. Conserva il file originale come backup. ROM e file BIOS non sono forniti."
    ],
    [
      "Aprilo dalla tua libreria",
      "Seleziona il gioco importato e inizia a giocare. Controlla i comandi sullo schermo prima di cambiare skin o filtri. Se un gioco non si avvia, controlla il suo sistema, il formato del file e l'eventuale BIOS richiesto."
    ]
  ],
  "faqTitle": "Prima di iniziare",
  "systems": "Vedi i sistemi supportati",
  "support": "Ti serve aiuto?",
  "faqs": [
    {
      "id": "devices",
      "question": "Quali iPhone e iPad possono eseguire Retropa?",
      "answer": "Retropa è disponibile sull'App Store per iPhone e iPad con iOS 18 o versione successiva. Controlla la sezione sulla compatibilità dell'App Store per il tuo dispositivo. I core arcade più esigenti e i filtri di visualizzazione a più passaggi possono richiedere più prestazioni di un semplice gioco portatile."
    },
    {
      "id": "systems",
      "question": "Retropa può eseguire giochi GBA, Nintendo DS e arcade?",
      "answer": "Retropa supporta GBA, DS e altri sistemi portatili e da tavolo elencati, insieme a famiglie arcade supportate come CPS, PGM e M92. La compatibilità dipende dall'app installata, dal core e dal formato del gioco; non significa che ogni gioco o archivio arcade sia supportato.",
      "link": "cores",
      "linkLabel": "Vedi i sistemi e i formati di file supportati"
    },
    {
      "id": "games",
      "question": "Retropa include giochi o ROM scaricabili?",
      "answer": "No. Retropa è un emulatore, non un abbonamento commerciale ai giochi né un negozio di ROM. Porta contenuti che hai il diritto di usare, come tuoi progetti o homebrew distribuito con permesso. ROM commerciali e file BIOS non sono forniti."
    },
    {
      "id": "import",
      "question": "Come importo una ROM GBA o DS su iPhone?",
      "answer": "Tieni il file di gioco in una posizione accessibile dall'app File di iOS. Apri la voce di importazione nella libreria di Retropa, seleziona il file supportato e apri il gioco importato dalla libreria. GBA usa .gba e DS usa .nds. Rinominare un'altra estensione di file non converte un gioco nel formato corretto."
    },
    {
      "id": "bios",
      "question": "Serve un file BIOS per Retropa?",
      "answer": "I requisiti BIOS variano in base al sistema e al core. Se Retropa segnala un BIOS mancante, controlla il requisito per quel sistema e fornisci il file corretto tramite il flusso di lavoro supportato dall'app. Un BIOS per un altro sistema non è un sostituto. Retropa non fornisce download di BIOS.",
      "link": "cores",
      "linkLabel": "Controlla i requisiti di sistema"
    },
    {
      "id": "arcade-zip",
      "question": "Perché il mio ZIP o set di ROM arcade non si avvia?",
      "answer": "Un archivio arcade deve corrispondere alla scheda e al set di ROM attesi dal suo core. Alcuni set dipendono anche da un set parent o da un BIOS, quindi un ZIP clone da solo può essere incompleto. Lascia intatto l'archivio, a meno che l'app non richieda di estrarlo. L'esecuzione arcade richiede anche Plus; un abbonamento non può riparare dati ROM mancanti o incompatibili."
    },
    {
      "id": "missing-file",
      "question": "Perché vedo un gioco in File ma non riesco a importarlo?",
      "answer": "Controlla che il file reale sia disponibile localmente e non solo come segnaposto nel cloud, e che il suo formato corrisponda a un sistema supportato. Controlla ogni errore mostrato da Retropa. Conserva un backup dell'originale mentre diagnostichi l'importazione e non dare per scontato che uno ZIP rinominato o un download incompleto sia una ROM valida."
    },
    {
      "id": "offline",
      "question": "Posso giocare a giochi salvati localmente senza streaming?",
      "answer": "Retropa esegue i file di gioco supportati sul tuo dispositivo invece di trasmettere il gameplay da un emulatore cloud. Importa prima i file di gioco e BIOS necessari. Scaricare pacchetti, recuperare informazioni online e usare funzioni cloud richiedono comunque un proprio accesso alla rete."
    },
    {
      "id": "delta-skins",
      "question": "Posso usare le skin Delta in Retropa?",
      "answer": "Retropa supporta l'importazione di pacchetti .deltaskin. Usa il pacchetto completo, scegli un layout per il sistema corrispondente e controlla il supporto per verticale o orizzontale. Il supporto del formato non garantisce che ogni skin di terze parti si adatti a ogni iPhone. La compatibilità Delta descrive un formato di file, non un'affiliazione.",
      "link": "delta-skins",
      "linkLabel": "Leggi la guida all'importazione delle skin Delta"
    },
    {
      "id": "controllers",
      "question": "Retropa supporta controller Bluetooth o esterni?",
      "answer": "Retropa supporta controller esterni compatibili e una mappatura dei pulsanti configurabile. Collega prima il controller tramite iOS, poi controlla la sua mappatura in Retropa. Per i giochi arcade, verifica le assegnazioni di gettone e avvio oltre ai pulsanti d'azione. La compatibilità dipende dal controller e dal supporto di iOS."
    },
    {
      "id": "saves",
      "question": "I salvataggi interni al gioco e gli stati di salvataggio dell'emulatore sono la stessa cosa?",
      "answer": "No. Un salvataggio interno al gioco viene creato dal gioco; uno stato di salvataggio cattura l'esecuzione dell'emulatore. Gli stati di salvataggio possono dipendere dal core e dalla versione esatti, quindi non dare per scontato che siano trasferibili tra app o core. Conserva i file originali e i backup prima di spostare o sostituire i salvataggi."
    },
    {
      "id": "plus",
      "question": "Retropa è gratis e cosa sblocca Plus?",
      "answer": "Retropa è gratuito. I core arcade, le skin premium e i filtri avanzati richiedono Retropa Plus. I piani attuali, i prezzi regionali e le condizioni di acquisto sono mostrati nell'app prima dell'acquisto. Un download gratuito non significa che ogni core o risorsa sia incluso."
    },
    {
      "id": "restore",
      "question": "Come ripristino un acquisto Retropa Plus precedente?",
      "answer": "Usa l'azione di ripristino degli acquisti dell'app con l'Apple Account usato per l'acquisto originale. Controlla che l'acquisto o l'abbonamento sia ancora valido. Ripristinare un diritto non ripristina file ROM o salvataggi mancanti. Contatta il supporto con la versione dell'app e il problema di acquisto, non con le password dell'account."
    },
    {
      "id": "advanced-filters",
      "question": "In cosa differiscono i filtri avanzati di Retropa dai normali filtri CRT?",
      "answer": "I filtri di visualizzazione semplici spesso sovrappongono scanline o griglie di pixel campionate. I preset avanzati di Retropa come CRT V4 e Trinitron modellano la struttura del fascio e del fosforo con l'integrazione dei pixel di output o un filtraggio a banda limitata. DMG include celle a cristalli liquidi integrate e un substrato riflettente. Sono modelli di display, non solo una tinta di colore.",
      "link": "crt-filters",
      "linkLabel": "Confronta i filtri di visualizzazione avanzati"
    },
    {
      "id": "integer-scaling",
      "question": "I filtri avanzati di Retropa richiedono una scalatura intera?",
      "answer": "No. I filtri avanzati di Retropa tengono conto della dimensione di output reale invece di richiedere una scala di 2, di 3 o un altro multiplo intero. Così hai più libertà per adattare un gioco all'area di visualizzazione del tuo telefono, del tuo orientamento o della skin scelta. Le proporzioni originali possono restare intatte. I risultati dipendono comunque dal preset e dal dispositivo; i filtri non creano risoluzione sorgente aggiuntiva.",
      "link": "crt-filters",
      "linkLabel": "Scopri di più sul rendering a scala frazionaria"
    },
    {
      "id": "shader-import",
      "question": "Retropa può importare shader .slang e .slangp di RetroArch?",
      "answer": "Retropa supporta i flussi di lavoro degli shader .slang e .slangp. Un preset può fare riferimento a più passaggi o texture; tieni insieme queste dipendenze durante l'importazione. Non ogni preset di terze parti funziona di sicuro. Se uno fallisce, controlla i suoi file e la compatibilità invece di rinominarlo o modificare il gioco.",
      "link": "crt-filters",
      "linkLabel": "Leggi informazioni sulla compatibilità degli shader"
    },
    {
      "id": "performance",
      "question": "I filtri avanzati influiscono sulla frequenza dei fotogrammi o sulla batteria?",
      "answer": "Possono influire. Il rendering a più passaggi richiede più lavoro GPU di un'immagine senza filtri, e il costo varia con preset, dimensione di output, dispositivo e core dell'emulatore. Confronta con l'immagine originale se noti rallentamenti, poi prova un filtro più leggero. La scalatura senza multipli interi è una funzione per la qualità dell'immagine, non una promessa di prestazioni GPU illimitate."
    },
    {
      "id": "packages",
      "question": "Dove trovo skin e pacchetti di filtri per Retropa?",
      "answer": "Sfoglia PackHub per trovare pacchetti di skin e shader. Controlla nell'app il sistema, il formato e i requisiti Plus del pacchetto. Le risorse importate non aggirano i controlli dei diritti. Se ti serve aiuto, includi versione dell'app, nome del pacchetto e messaggio di errore, ma non inviare ROM commerciali o file BIOS."
    }
  ]
}
