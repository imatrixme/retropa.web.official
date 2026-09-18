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
    "title": "Emulatore Game Boy per iPhone e iPad | Retropa",
    "description": "Avvia i tuoi file .gb su iPhone e iPad con Retropa. Quale core gestisce il GB, come importare un gioco, come impostare schermo e controlli e cosa verificare quando un file non si apre.",
    "summary": "Retropa avvia i giochi Game Boy dai tuoi file .gb su iPhone e iPad, con tre core intercambiabili, skin da console portatile, trattamenti LCD e CRT e mappatura dei controller.",
    "sections": [
      {
        "title": "Parti da un file .gb",
        "body": "Retropa riproduce i giochi Game Boy da file che possiedi già. L'app è gratuita da scaricare e non include giochi né file BIOS, quindi prepara il file di gioco prima di iniziare e conserva una copia intatta fuori dall'app come backup.",
        "points": [
          ".gb indica un gioco Game Boy; .gbc appartiene al Game Boy Color.",
          "Rinominare l'estensione di un file non converte il gioco in un altro sistema.",
          "Conserva l'archivio originale finché il gioco non funziona correttamente."
        ]
      },
      {
        "title": "Quale core avvia i giochi Game Boy",
        "body": "Retropa include più di un core in grado di avviare titoli Game Boy e puoi passare dall'uno all'altro singolarmente per ogni gioco. mGBA e SkyEmu coprono GB, GBC e GBA, mentre SameBoy è dedicato a GB e GBC. Se un core mostra un problema con un titolo specifico, provane un altro prima di dare per scontato che il file sia danneggiato.",
        "points": [
          "mGBA è una buona prima scelta per il gioco quotidiano.",
          "SameBoy punta sull'accuratezza di GB e GBC.",
          "Il core selezionato viene ricordato per ogni gioco."
        ]
      },
      {
        "title": "Importa il gioco da File",
        "body": "Assicurati che il file sia scaricato in locale e non solo mostrato come segnaposto nel cloud nell'app File. Apri la voce di importazione nella libreria Retropa e seleziona il gioco. Una volta comparso, aprilo e verifica che immagine, audio e controlli su schermo predefiniti funzionino prima di personalizzare qualsiasi cosa."
      },
      {
        "title": "Scegli un layout adatto allo schermo originale",
        "body": "Un layout Game Boy richiede una croce direzionale, A e B, Start e Select. L'orientamento verticale mette lo schermo sopra i controlli, ideale per giocare con una mano; quello orizzontale lascia più spazio ai pulsanti. Verifica che la vista di gioco non sia coperta dalla skin in nessuno dei due orientamenti e che tutti e sei gli ingressi siano raggiungibili.",
        "points": [
          "Controlla ogni pulsante, non solo la grafica.",
          "I pacchetti .deltaskin di Delta si possono importare, ma una skin per DS o GBA non è un layout GB.",
          "Le skin premium e i filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Schermo verde, griglia LCD o pixel puliti",
        "body": "Inizia dall'immagine originale per avere un riferimento. Un preset DMG richiama l'LCD riflettente a quattro toni della console originale, una griglia LCD aggiunge una struttura a subpixel e un trattamento CRT cambia del tutto l'aspetto. I filtri avanzati di Retropa si adattano all'area di output reale invece di richiedere un fattore di scala intero, così l'immagine mantiene le proporzioni su tutte le dimensioni di iPhone e iPad.",
        "points": [
          "I filtri cambiano la presentazione, non la risoluzione del gioco.",
          "Un filtro non risolve un problema di compatibilità del file.",
          "Confronta con l'immagine originale prima di tenere un preset."
        ]
      },
      {
        "title": "Quando un'importazione o un salvataggio Game Boy non riesce",
        "body": "Controlla prima l'estensione del file, il sistema selezionato e il messaggio di errore esatto. Se File non ha terminato il download dell'originale, completa quel passaggio prima di importare di nuovo. I dati di salvataggio di un gioco e uno stato di salvataggio dell'emulatore sono cose diverse; non rinominare l'uno nell'altro e conserva un backup prima di spostare un salvataggio tra core o app.",
        "points": [
          "Annota versione dell'app, sistema, core ed errore per l'assistenza.",
          "Non allegare ROM commerciali o file BIOS a una richiesta di assistenza.",
          "Prova la skin predefinita e un filtro semplice per isolare il problema."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa include giochi Game Boy?",
        "answer": "No. Retropa è un emulatore e non fornisce giochi né file BIOS. Importi i file che hai il diritto di usare, e solo quelli."
      },
      {
        "id": "bios-needed",
        "question": "L'emulazione Game Boy richiede un file BIOS?",
        "answer": "I titoli GB e GBC funzionano generalmente senza file BIOS nei core inclusi in Retropa. Se un core segnala la necessità di un BIOS, segui l'avviso mostrato per quel core invece di importare un file estraneo."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Retropa può aprire un file .gbc come gioco Game Boy?",
        "answer": "Un file .gbc appartiene al Game Boy Color. Retropa lo avvia sul sistema corrispondente e rinominare l'estensione non cambia ciò che il file è."
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
    "title": "Emulatore Game Boy Color per iPhone e iPad | Retropa",
    "description": "Gioca ai tuoi giochi .gbc su iPhone e iPad. Palette di colori, titoli solo GBC, scelta del core, passaggi di importazione e verifiche da fare quando un gioco Game Boy Color non parte.",
    "summary": "Retropa avvia i giochi Game Boy Color dai tuoi file .gbc, con gestione delle palette, selezione del core per ogni gioco e trattamenti video adatti allo schermo riflettente originale.",
    "sections": [
      {
        "title": "Prepara un file .gbc",
        "body": "I giochi Game Boy Color usano l'estensione .gbc. Retropa non include giochi né file BIOS, quindi prepara il file da solo, conserva un backup separato e importa solo contenuti che hai il diritto di usare.",
        "points": [
          ".gbc indica un gioco Game Boy Color.",
          "I giochi Game Boy originali usano .gb e funzionano anch'essi su Retropa.",
          "Non rinominare un file .gb in .gbc per forzare il colore."
        ]
      },
      {
        "title": "Scelta del core per Game Boy Color",
        "body": "SameBoy è il core dedicato a GB e GBC, mentre mGBA e SkyEmu coprono anch'essi il Game Boy Color. Se un titolo mostra colori o tempi errati, cambiare core è un primo test legittimo, perché ogni core gestisce l'hardware in modo leggermente diverso.",
        "points": [
          "SameBoy è la prima scelta naturale per i titoli GBC.",
          "mGBA copre GB, GBC e GBA in un unico core.",
          "La selezione del core è memorizzata per ogni gioco."
        ]
      },
      {
        "title": "Importazione e primo avvio",
        "body": "Scarica il file nella memoria locale così che l'app File non serva un segnaposto, poi scegliilo dalla voce di importazione della libreria Retropa. Apri il gioco e verifica colore, audio e layout touch predefinito prima di applicare skin o filtri, così ogni problema successivo sarà facile da attribuire.",
        "points": [
          "Prova una scena che usa il colore, non solo la schermata del titolo.",
          "Controlla il canale audio oltre all'immagine.",
          "Mantieni il file originale intatto durante la diagnosi."
        ]
      },
      {
        "title": "Immagine e layout per una console portatile a colori",
        "body": "Lo schermo del Game Boy Color è piccolo e riflettente. Un preset con griglia LCD aggiunge una struttura a subpixel adatta, mentre un preset DMG richiama volutamente il pannello monocromatico più vecchio. I filtri avanzati di Retropa lavorano sull'area di output reale e non su un multiplo intero fisso, quindi le proporzioni restano corrette su tutte le dimensioni del dispositivo.",
        "points": [
          "Confronta ogni preset con l'immagine originale.",
          "I filtri avanzati richiedono Retropa Plus.",
          "Verifica che la skin lasci libera la vista di gioco."
        ]
      },
      {
        "title": "Controlli e orientamento",
        "body": "Un layout Game Boy Color richiede una croce direzionale, A e B, Start e Select. L'orientamento verticale è adatto a sessioni brevi; quello orizzontale lascia più spazio ai pulsanti e può risultare più comodo su un iPhone grande. Assicurati che ogni ingresso sia raggiungibile nell'orientamento in cui giochi davvero."
      },
      {
        "title": "Quando un gioco Game Boy Color non parte",
        "body": "Controlla prima l'estensione e il sistema selezionato, poi leggi l'errore esatto. Se la regione o la palette sembrano sbagliate, confronta i core prima di cambiare le impostazioni. I salvataggi creati in un core potrebbero non essere letti da un altro, quindi fai un backup prima di cambiare.",
        "points": [
          "Annota versione dell'app, sistema, core ed errore.",
          "Non inviare all'assistenza ROM commerciali o file BIOS.",
          "Torna alla skin predefinita e a un filtro semplice per isolare i problemi."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "I giochi Game Boy Color sono inclusi?",
        "answer": "No. Retropa è un emulatore e non fornisce giochi né file BIOS. Importa solo file che hai il diritto di usare."
      },
      {
        "id": "gb-on-gbc",
        "question": "Posso giocare anche ai giochi Game Boy originali?",
        "answer": "Sì. Anche i file .gb del Game Boy originale funzionano su Retropa, sugli stessi core che gestiscono il Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Rinominare un file .gb in .gbc aggiunge il colore?",
        "answer": "No. L'estensione non cambia ciò che il file contiene, quindi rinominarlo non abilita le funzioni del Game Boy Color."
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
    "title": "Emulatore NES per iPhone e iPad | Retropa",
    "description": "Avvia i tuoi giochi NES su iPhone e iPad. Formati supportati tra cui .nes, .fds e .nsf, scelta del core, passaggi di importazione, mappatura dei controller e risoluzione dei problemi.",
    "summary": "Retropa avvia i giochi NES dai tuoi file, coprendo i formati .nes, .fds e audio NSF su due core dedicati, con mappatura dei gamepad e trattamenti CRT.",
    "sections": [
      {
        "title": "Formati di file accettati per NES",
        "body": "Il supporto NES in Retropa va oltre una singola estensione. Oltre alla comune immagine di cartuccia .nes, i core accettano immagini del Famicom Disk System e file audio NSF, più le varianti di contenitore iNES semplice e unificato.",
        "points": [
          ".nes è l'immagine di cartuccia NES standard.",
          ".fds copre i contenuti del Famicom Disk System.",
          ".nsf e .nsfe sono file audio, non giochi giocabili.",
          "I contenitori ZIP e RetroPack si possono importare e aprire sul posto."
        ]
      },
      {
        "title": "Due core, un sistema",
        "body": "Retropa include RusticoNES e TetaNES per i titoli NES, e anche JGenesis copre il sistema. Provare un secondo core è il modo più rapido per distinguere una ROM problematica da una reale differenza di emulazione, e la scelta viene ricordata per ogni gioco.",
        "points": [
          "RusticoNES è un valore predefinito affidabile per i giochi su cartuccia.",
          "TetaNES è l'alternativa da provare quando qualcosa non funziona bene.",
          "I file audio NSF si comportano diversamente dai giochi in ogni core."
        ]
      },
      {
        "title": "Importa un gioco NES",
        "body": "Scarica prima il file in locale così che File non restituisca un segnaposto, poi apri la voce di importazione nella libreria Retropa. Avvia il gioco con il layout predefinito e verifica immagine, audio e pulsanti predefiniti prima di cambiare skin o filtri."
      },
      {
        "title": "Gestire un controller a due pulsanti",
        "body": "Il controller NES è volutamente minimale: croce direzionale, A, B, Start e Select. Su uno schermo touch la tentazione è avvicinare i pulsanti, quindi verifica che gli ingressi diagonali vengano ancora registrati e che Start e Select non vengano premuti per errore durante il gioco. Un controller fisico abbinato risolve la maggior parte di questi problemi.",
        "points": [
          "Abbina un controller in iOS, poi controlla la sua mappatura in Retropa.",
          "Verifica le diagonali, non solo le quattro direzioni cardinali.",
          "Controlla sia l'orientamento verticale sia quello orizzontale se giochi in entrambi."
        ]
      },
      {
        "title": "Ottenere l'immagine giusta",
        "body": "L'output NES è pensato per un televisore a definizione standard, quindi un trattamento CRT spesso appare più vicino all'esperienza originale di una griglia di pixel pulita. Sono disponibili preset con scanline e maschera ad apertura, e i filtri avanzati di Retropa si adattano all'area di output reale invece che a un multiplo intero fisso.",
        "points": [
          "Parti dall'immagine originale come riferimento.",
          "Le sovrapposizioni di scanline convenzionali possono tremolare a scale frazionarie.",
          "I filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Quando un gioco NES non si carica",
        "body": "Leggi l'errore esatto prima di cambiare qualsiasi cosa. Un dump difettoso, un mapper non supportato, un'immagine senza header o un gioco su disco senza il suo BIOS sono problemi diversi. Controlla l'estensione e il sistema selezionato, poi prova l'altro core NES.",
        "points": [
          "Annota versione dell'app, core e testo completo dell'errore per l'assistenza.",
          "Mantieni il file originale intatto durante la diagnosi.",
          "Non allegare ROM commerciali o file BIOS a una richiesta di assistenza."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Quali formati NES apre Retropa?",
        "answer": "Retropa accetta file .nes, .fds, .nsf, .nsfe, .unf e .unif e può anche aprire direttamente contenitori ZIP e RetroPack."
      },
      {
        "id": "nsf",
        "question": "Posso riprodurre un file .nsf come un gioco?",
        "answer": "No. I file NSF sono dati audio, quindi riproducono suono e non un gioco. Usa un file .nes o .fds per giocare a un titolo."
      },
      {
        "id": "gamepad",
        "question": "Un controller fisico funziona con i giochi NES?",
        "answer": "Sì. I controller compatibili si possono abbinare a iOS e mappare dentro Retropa. Controlla la mappatura dopo l'abbinamento, perché l'ordine dei pulsanti non è sempre quello che ti aspetti."
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
    "title": "Emulatore SNES per iPhone e iPad | Retropa",
    "description": "Gioca ai tuoi giochi SNES su iPhone e iPad. Formati supportati .sfc e .smc, il core LakeSnes, mappatura dei controller a sei pulsanti e passaggi per risolvere i problemi.",
    "summary": "Retropa avvia i giochi SNES dai tuoi file .sfc e .smc sul core LakeSnes, con mappatura dei controller a sei pulsanti, stati di salvataggio e trattamenti video CRT.",
    "sections": [
      {
        "title": "Formati di file SNES",
        "body": "Le immagini Super Nintendo sono di solito distribuite come .sfc o .smc e Retropa accetta anche diversi formati di contenitore e di copier correlati. Se un file non funziona, l'estensione è la prima cosa da verificare, perché un header non corrispondente è una causa comune di un gioco che non si avvia.",
        "points": [
          ".sfc e .smc sono le immagini SNES standard.",
          "Retropa elenca anche la copertura di .fig, .swc, .bs e .st.",
          "I contenitori ZIP e RetroPack si possono aprire direttamente."
        ]
      },
      {
        "title": "Il core LakeSnes",
        "body": "Retropa avvia i titoli SNES su LakeSnes, e anche JGenesis elenca il sistema. Se un gioco specifico mostra un problema di timing o di grafica, verifica che il file sia un'immagine pulita prima di dare la colpa al core e confronta la versione attuale dell'app con le note di rilascio.",
        "points": [
          "LakeSnes è il core dedicato al SNES.",
          "Alcuni titoli dipendono da specifici coprocessori presenti nella cartuccia.",
          "La selezione del core per ogni gioco viene ricordata."
        ]
      },
      {
        "title": "Importazione e primo avvio",
        "body": "Tieni il file nella memoria locale invece che come segnaposto nel cloud, poi selezionalo dalla voce di importazione della libreria Retropa. Apri il gioco e verifica immagine, audio e controlli touch predefiniti prima di cambiare qualsiasi impostazione di presentazione, così i problemi successivi avranno una causa chiara."
      },
      {
        "title": "Sei pulsanti richiedono spazio reale",
        "body": "Il controller SNES aggiunge X, Y, L e R alla croce direzionale, A, B, Start e Select, e molti giochi prevedono pressioni simultanee. Su uno schermo touch vale la pena distribuire il layout in orizzontale e provare ogni combinazione. Un controller fisico abbinato è l'opzione più affidabile per i titoli d'azione.",
        "points": [
          "Verifica L e R, facili da dimenticare durante la mappatura.",
          "Prova una diagonale insieme a un pulsante dorsale nello stesso momento.",
          "Controlla che la skin lasci libera la vista di gioco."
        ]
      },
      {
        "title": "Scegliere un trattamento video",
        "body": "La grafica SNES era pensata per un CRT, quindi i preset con scanline e maschera ad apertura appaiono di solito più vicini all'originale di una griglia di pixel grezza. I filtri avanzati di Retropa tengono conto dell'area di output reale invece di richiedere un multiplo intero, il che conta sui telefoni dove l'altezza disponibile raramente si divide in modo esatto.",
        "points": [
          "Usa l'immagine originale come riferimento.",
          "Le semplici sovrapposizioni di scanline possono tremolare a scale frazionarie.",
          "I filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Quando un gioco SNES non parte",
        "body": "Controlla l'estensione, il sistema selezionato e il testo esatto dell'errore. I titoli che si affidano a un chip speciale della cartuccia sono i sospetti abituali quando un gioco fallisce mentre altri funzionano. Mantieni intatto il file originale durante le prove e prova a passare al core alternativo.",
        "points": [
          "Annota versione dell'app, core ed errore per l'assistenza.",
          "Cambiare filtro non risolve un problema legato al chip della cartuccia.",
          "Non inviare all'assistenza ROM commerciali o file BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Fa differenza usare .sfc o .smc?",
        "answer": "Entrambi sono immagini SNES standard e Retropa accetta l'uno o l'altro. L'estensione in sé non cambia il gioco."
      },
      {
        "id": "chip-games",
        "question": "Perché un gioco fallisce mentre altri funzionano?",
        "answer": "Alcuni titoli dipendono da hardware aggiuntivo presente nella cartuccia. Se il file è un'immagine pulita e altri giochi funzionano, quella dipendenza è la causa probabile, e cambiare core è il test successivo."
      },
      {
        "id": "saves",
        "question": "Gli stati di salvataggio sono trasferibili tra core?",
        "answer": "Non in modo affidabile. I salvataggi a batteria e gli stati di salvataggio sono artefatti diversi, e uno stato scritto da un core potrebbe non caricarsi in un altro, quindi conserva un backup prima di cambiare."
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
    "title": "Emulatore Sega Genesis e Mega Drive per iPhone | Retropa",
    "description": "Gioca ai tuoi giochi Sega Genesis e Mega Drive su iPhone e iPad. Formati .md, .smd e .gen, il core JGenesis, mappatura a sei pulsanti e risoluzione dei problemi.",
    "summary": "Retropa avvia i giochi Sega Genesis e Mega Drive dai tuoi file sul core JGenesis, con supporto ai controller a sei pulsanti, stati di salvataggio e trattamenti video CRT.",
    "sections": [
      {
        "title": "Genesis e Mega Drive sono lo stesso sistema",
        "body": "La console è arrivata sul mercato come Mega Drive in Europa, in Giappone e in gran parte dell'Asia, e come Genesis in Nord America. L'hardware è lo stesso, quindi un file di gioco funziona in entrambi i casi; cambia solo il nome sulla confezione. Retropa li elenca entrambi, ed è per questo che le estensioni dei file variano leggermente da una regione all'altra.",
        "points": [
          ".md e .smd sono le immagini Mega Drive più diffuse.",
          ".gen è l'estensione comune in Nord America.",
          "L'estensione non cambia l'hardware che il gioco si aspetta."
        ]
      },
      {
        "title": "Il core JGenesis",
        "body": "Retropa avvia i titoli Genesis e Mega Drive su JGenesis, che copre anche Master System, Game Gear e diversi sistemi portatili. Poiché un unico core serve più piattaforme, il sistema selezionato per ogni gioco è importante: importare un titolo Master System con il sistema impostato su Genesis è una fonte comune di confusione.",
        "points": [
          "JGenesis copre MD, GEN, SMS e GG.",
          "Conferma il sistema rilevato prima di segnalare un problema.",
          "La scelta del core e del sistema viene ricordata per ogni gioco."
        ]
      },
      {
        "title": "Importa un gioco Mega Drive",
        "body": "Salva il file in locale invece di lasciarlo come segnaposto nel cloud, poi scegliilo dalla voce di importazione della libreria Retropa. Apri il gioco e verifica immagine, audio e layout touch predefinito prima di applicare una skin o un filtro."
      },
      {
        "title": "Mappare un pad a sei pulsanti",
        "body": "I controller Genesis esistevano in versioni a tre e a sei pulsanti, e alcuni giochi si comportano diversamente a seconda di quale variante viene rilevata. Su un layout touch, verifica che A, B, C e, dove disponibili, X, Y, Z e Mode siano tutti raggiungibili, e prova una combinazione che il gioco usa davvero.",
        "points": [
          "Verifica sia la mappatura a tre pulsanti sia quella a sei.",
          "Controlla Start, che in molti titoli funge anche da pausa.",
          "Un controller fisico abbinato evita la maggior parte degli errori di pressione."
        ]
      },
      {
        "title": "Trattamento video per una console a 16 bit",
        "body": "L'output del Mega Drive è pensato per un CRT, quindi un preset con scanline o maschera ad apertura di solito appare più vicino all'originale di una griglia di pixel grezza, in particolare per il dithering che il televisore avrebbe sfumato. I filtri avanzati di Retropa lavorano sull'area di output reale e non su un multiplo intero fisso.",
        "points": [
          "Parti dall'immagine originale, poi confronta.",
          "I pattern di dithering sono un buon test per un preset di filtro.",
          "I filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Quando un gioco Genesis non parte",
        "body": "Controlla l'estensione, la selezione del sistema e l'errore esatto. Le discrepanze di regione e di sistema sono più comuni qui che sui sistemi a piattaforma unica, perché un solo core serve più console. Mantieni intatto il file originale e conferma il sistema rilevato prima di fare modifiche più profonde.",
        "points": [
          "Annota versione dell'app, sistema rilevato, core ed errore.",
          "Non inviare all'assistenza ROM commerciali o file BIOS.",
          "Conserva un backup separato prima di spostare i salvataggi tra core."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive è uguale a Genesis?",
        "answer": "Sì. È un'unica console con due nomi regionali, quindi un file di gioco funziona con entrambi i nomi."
      },
      {
        "id": "six-button",
        "question": "Retropa supporta i controller a sei pulsanti?",
        "answer": "Il layout touch e la mappatura dei controller esterni coprono i pulsanti aggiuntivi, e alcuni giochi cambiano comportamento in base alla variante di pad che rilevano."
      },
      {
        "id": "system-detect",
        "question": "Perché il mio gioco viene trattato come il sistema sbagliato?",
        "answer": "Un solo core serve diverse piattaforme Sega, quindi controlla il sistema rilevato per quel gioco e correggilo prima di segnalare un problema di compatibilità."
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
    "title": "Emulatore Game Gear per iPhone e iPad | Retropa",
    "description": "Gioca ai tuoi giochi .gg Game Gear su iPhone e iPad. Quale core li avvia, come importare un file, come impostare lo schermo e cosa verificare quando un gioco non funziona.",
    "summary": "Retropa avvia i giochi Game Gear dai tuoi file .gg tramite il core JGenesis, con un aspetto da schermo retroilluminato, skin da console portatile e mappatura completa dei controlli.",
    "sections": [
      {
        "title": "Prepara un file .gg",
        "body": "I giochi Game Gear usano l'estensione .gg. Retropa non include giochi né file BIOS, quindi tieni pronto il file e conservane una copia fuori dall'app prima di importarlo.",
        "points": [
          ".gg è l'estensione del Game Gear.",
          "Un file .sms appartiene al Master System, non al Game Gear.",
          "Rinominare non converte un sistema nell'altro."
        ]
      },
      {
        "title": "Quale core gestisce il Game Gear",
        "body": "JGenesis copre il Game Gear insieme a Mega Drive, Genesis e Master System. Poiché un unico core serve più piattaforme Sega, verifica che il gioco venga rilevato come Game Gear prima di indagare su un problema di compatibilità."
      },
      {
        "title": "Importazione e primo avvio",
        "body": "Scarica il file in locale, poi selezionalo dalla voce di importazione della libreria Retropa. Verifica immagine, audio e controlli predefiniti prima di applicare una skin, così ogni problema successivo avrà una causa evidente."
      },
      {
        "title": "Un piccolo schermo retroilluminato",
        "body": "Il pannello del Game Gear era retroilluminato e piccolo, quindi un trattamento con griglia LCD tende ad adattarsi bene, mentre un preset CRT più marcato apparirà decisamente più pesante rispetto all'hardware originale. I filtri avanzati di Retropa si adattano all'area di output reale invece di richiedere un multiplo intero.",
        "points": [
          "Confronta ogni preset con l'immagine originale.",
          "I filtri avanzati richiedono Retropa Plus.",
          "Verifica che la vista di gioco non sia coperta dalla skin."
        ]
      },
      {
        "title": "Controlli e orientamento",
        "body": "L'hardware Game Gear offriva una croce direzionale, due pulsanti d'azione e Start. Il numero ridotto di pulsanti rende comodo un layout verticale, ma verifica che Start sia raggiungibile senza spostare la presa e prova le diagonali."
      },
      {
        "title": "Quando un gioco Game Gear non funziona",
        "body": "Verifica l'estensione, il sistema rilevato e il testo esatto dell'errore. Un file Master System importato come Game Gear, o viceversa, è una causa frequente. Mantieni intatto il file originale durante le prove.",
        "points": [
          "Annota versione dell'app, sistema rilevato, core ed errore.",
          "Non inviare all'assistenza ROM commerciali o file BIOS.",
          "Conserva un backup prima di spostare i salvataggi tra core."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear è uguale al Master System?",
        "answer": "Sono sistemi strettamente imparentati ma diversi, con estensioni di file differenti. Un unico core li avvia entrambi, quindi controlla come viene rilevato un file."
      },
      {
        "id": "bios",
        "question": "Il Game Gear richiede un file BIOS?",
        "answer": "Non nei core inclusi in Retropa. Se un core segnala un requisito, segui l'avviso di quel core invece di importare un file estraneo."
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
    "title": "Emulatore Master System per iPhone e iPad | Retropa",
    "description": "Avvia i tuoi giochi Sega Master System .sms su iPhone e iPad. Copertura dei core, passaggi di importazione, layout dei controlli e cosa verificare quando un titolo non parte.",
    "summary": "Retropa avvia i giochi Sega Master System dai tuoi file .sms sul core JGenesis, con skin da console portatile, trattamenti video e mappatura dei controller.",
    "sections": [
      {
        "title": "Prepara un file .sms",
        "body": "I giochi Master System usano l'estensione .sms. Retropa non fornisce giochi né file BIOS, quindi prepara il file e conserva un backup fuori dall'app.",
        "points": [
          ".sms è l'estensione del Master System.",
          ".gg appartiene al Game Gear ed è un sistema diverso.",
          "I contenitori ZIP e RetroPack si possono aprire direttamente."
        ]
      },
      {
        "title": "Copertura dei core",
        "body": "JGenesis gestisce il Master System insieme a Mega Drive, Genesis e Game Gear. Poiché un unico core serve più piattaforme, confermare il sistema rilevato è il primo passo diagnostico quando un file si comporta in modo inatteso."
      },
      {
        "title": "Importazione e verifica",
        "body": "Tieni il file nella memoria locale, poi scegliilo dalla voce di importazione della libreria Retropa. Controlla immagine, audio e layout predefinito prima di applicare una skin o un preset video."
      },
      {
        "title": "Due pulsanti, una croce direzionale",
        "body": "I controller Master System usavano una croce direzionale, due pulsanti d'azione e, su alcuni modelli, un pulsante di pausa sulla console stessa. Su un layout touch vale la pena verificare che la pausa sia mappata da qualche parte raggiungibile, perché è facile trascurarla."
      },
      {
        "title": "Trattamento dell'immagine",
        "body": "I titoli Master System sono pensati per un display CRT. I preset con scanline e maschera ad apertura appaiono in genere più vicini all'originale di una griglia di pixel grezza, e i filtri avanzati di Retropa si adattano all'area di output reale invece che a un multiplo intero fisso.",
        "points": [
          "Confronta i preset con l'immagine originale.",
          "I filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Quando un gioco Master System non parte",
        "body": "Controlla l'estensione, il sistema rilevato e l'errore preciso. Le differenze regionali e gli scambi tra Master System e Game Gear sono le cause più comuni. Mantieni intatto il file originale durante la diagnosi.",
        "points": [
          "Annota versione dell'app, sistema rilevato, core ed errore.",
          "Non allegare ROM commerciali o file BIOS a una richiesta di assistenza."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Come capisco se un file è Master System o Game Gear?",
        "answer": "Controlla l'estensione: .sms è Master System e .gg è Game Gear. Retropa mostra il sistema rilevato per il gioco importato."
      },
      {
        "id": "pause",
        "question": "Dov'è il pulsante di pausa?",
        "answer": "Sull'hardware originale si trovava sulla console e non sul controller. In Retropa fa parte del layout su schermo, quindi verifica che sia mappato su un tasto che riesci a raggiungere."
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
    "title": "Emulatore WonderSwan per iPhone e iPad | Retropa",
    "description": "Gioca ai tuoi giochi .ws WonderSwan su iPhone e iPad. Il core Ares, l'orientamento verticale, i passaggi di importazione e la risoluzione dei problemi di una console poco diffusa.",
    "summary": "Retropa avvia i giochi WonderSwan dai tuoi file .ws sul core Ares, incluso l'orientamento verticale per cui l'hardware era stato progettato.",
    "sections": [
      {
        "title": "Prepara un file .ws",
        "body": "I giochi WonderSwan usano l'estensione .ws, mentre il WonderSwan Color usa .wsc. Retropa non include giochi né file BIOS; prepara il file e conserva un backup.",
        "points": [
          ".ws è WonderSwan; .wsc è WonderSwan Color.",
          "Sono due sistemi diversi con capacità diverse.",
          "Rinominare non aggiorna un gioco al modello a colori."
        ]
      },
      {
        "title": "Il core Ares",
        "body": "Ares gestisce WonderSwan e WonderSwan Color in Retropa, insieme ad altri sistemi portatili. Se un titolo non si avvia, verifica che il file sia un'immagine pulita e che il sistema rilevato corrisponda all'estensione del file prima di cambiare le impostazioni."
      },
      {
        "title": "Importazione e primo avvio",
        "body": "Salva il file in locale, poi selezionalo dalla voce di importazione della libreria Retropa. Verifica immagine, audio e controlli predefiniti prima di applicare una skin o un preset video."
      },
      {
        "title": "Una console portatile pensata per essere tenuta in verticale",
        "body": "Il WonderSwan è stato progettato per funzionare in entrambi gli orientamenti e molti titoli sono stati creati per il gioco in verticale. Retropa supporta i layout verticali, quindi controlla se il gioco a cui stai giocando prevede uno schermo ruotato prima di concludere che l'immagine sia sbagliata.",
        "points": [
          "Prova sia l'orientamento verticale sia quello orizzontale.",
          "Non tutti i titoli usano lo stesso orientamento.",
          "Verifica che tutti gli ingressi siano raggiungibili nell'orientamento scelto."
        ]
      },
      {
        "title": "Trattamento video",
        "body": "Il WonderSwan usava un pannello monocromatico riflettente con una struttura di pixel ben distinta. Un preset con griglia LCD tende a riprodurla, mentre un preset CRT apparirà più pesante rispetto all'hardware originale. I filtri avanzati si adattano all'area di output reale.",
        "points": [
          "Usa l'immagine originale come riferimento.",
          "I filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Quando un gioco WonderSwan non parte",
        "body": "Controlla l'estensione, il sistema rilevato e l'errore esatto. Installare un file .wsc come WonderSwan, o viceversa, è una confusione frequente. Mantieni intatto il file originale durante le prove.",
        "points": [
          "Annota versione dell'app, sistema rilevato, core ed errore.",
          "Non inviare all'assistenza ROM commerciali o file BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Il modello a colori cambia il file?",
        "answer": "Sì. WonderSwan e WonderSwan Color usano estensioni diverse, e un titolo a colori potrebbe non comportarsi correttamente sul sistema monocromatico."
      },
      {
        "id": "orientation",
        "question": "Perché lo schermo sembra ruotato?",
        "answer": "Molti titoli WonderSwan sono stati concepiti per il gioco in verticale. Prova il layout verticale prima di dare per scontato che l'immagine sia sbagliata."
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
    "title": "Emulatore Neo Geo Pocket per iPhone e iPad | Retropa",
    "description": "Avvia i tuoi giochi .ngp e .ngpc Neo Geo Pocket su iPhone e iPad. Copertura dei core, controlli con levetta a microinterruttori e differenze rispetto al Neo Geo da sala.",
    "summary": "Retropa avvia i giochi Neo Geo Pocket e Neo Geo Pocket Color dai tuoi file sul core Ares, ed è separato dall'emulazione Neo Geo da sala.",
    "sections": [
      {
        "title": "Neo Geo Pocket non è il Neo Geo da sala",
        "body": "Il Neo Geo Pocket e il Neo Geo Pocket Color sono console portatili. Condividono il marchio con l'hardware da sala Neo Geo MVS e AES, ma sono sistemi del tutto diversi, con file diversi e core diversi. Il supporto per le sale giochi in Retropa richiede Plus; l'emulazione Pocket no.",
        "points": [
          ".ngp è Neo Geo Pocket; .ngpc e .ngc sono il modello a colori.",
          "Un neogeo.zip da sala non è un gioco Pocket.",
          "Le librerie da sala e Pocket sono separate."
        ]
      },
      {
        "title": "Prepara il file giusto",
        "body": "Controlla l'estensione prima di importare. Un gioco Pocket è un'unica immagine per console portatile, mentre un set Neo Geo da sala è di solito composto da diversi file di chip più un BIOS opzionale. Trattare l'uno come l'altro è l'errore più comune con questo sistema."
      },
      {
        "title": "Il core Ares",
        "body": "Ares gestisce Neo Geo Pocket e Neo Geo Pocket Color insieme ad altre piattaforme portatili in Retropa. Se un gioco non si avvia, conferma l'estensione e il sistema rilevato, poi valuta se il file è un'immagine pulita."
      },
      {
        "title": "Una levetta a microinterruttori, non una croce direzionale",
        "body": "Il Neo Geo Pocket usava una levetta a microinterruttori con scatto, non una croce direzionale tradizionale. In pratica questo significa che le diagonali precise contano più del solito, quindi quando provi un layout touch verifica che gli ingressi diagonali vengano registrati in modo netto, invece di controllare solo le quattro direzioni cardinali.",
        "points": [
          "Prova esplicitamente le diagonali.",
          "Verifica che i due pulsanti d'azione siano comodi nelle sessioni lunghe.",
          "Per i giochi di combattimento vale la pena usare un controller fisico abbinato."
        ]
      },
      {
        "title": "Trattamento video",
        "body": "Il pannello a colori del Pocket è piccolo e a bassa risoluzione, quindi un trattamento LCD leggero di solito si adatta meglio di un preset CRT marcato. I filtri avanzati di Retropa lavorano sull'area di output reale invece di richiedere un multiplo intero.",
        "points": [
          "Confronta con l'immagine originale.",
          "I filtri avanzati richiedono Retropa Plus."
        ]
      },
      {
        "title": "Quando un gioco Pocket non parte",
        "body": "Verifica l'estensione, il sistema rilevato e l'errore esatto. Se hai file da sala nella libreria, controlla di non averne selezionato uno. Mantieni intatto il file originale durante la diagnosi.",
        "points": [
          "Annota versione dell'app, sistema rilevato, core ed errore.",
          "Non inviare all'assistenza ROM commerciali o file BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Posso giocare qui ai giochi Neo Geo da sala?",
        "answer": "È un sistema separato, con core e file propri. Retropa supporta le famiglie da sala, che richiedono Retropa Plus; l'emulazione Neo Geo Pocket è separata."
      },
      {
        "id": "neogeo-zip",
        "question": "Serve un neogeo.zip per i giochi Pocket?",
        "answer": "No. Quel file riguarda l'hardware Neo Geo da sala. I giochi Pocket non lo usano."
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
    "title": "Emulatore Neo Geo per iPhone e iPad | Retropa",
    "description": "Gioca ai file Neo Geo MVS da sala supportati su iPhone e iPad con Retropa. Struttura dei set, requisiti BIOS, set parent e clone e cosa verificare quando un gioco non si avvia.",
    "summary": "Retropa avvia i set Neo Geo da sala supportati su iPhone e iPad con controlli touch ed esterni e filtri CRT. Il gioco da sala richiede Retropa Plus; giochi e file BIOS non sono inclusi.",
    "sections": [
      {
        "title": "Il Neo Geo da sala richiede Plus",
        "body": "L'emulazione Neo Geo da sala fa parte della famiglia arcade di Retropa, e i core per le sale giochi richiedono Retropa Plus. È separata dal Neo Geo Pocket, un sistema portatile coperto dal supporto Pocket standard.",
        "points": [
          "Le famiglie da sala richiedono Retropa Plus.",
          "Il Neo Geo Pocket è un sistema portatile diverso.",
          "In ogni caso giochi e file BIOS non sono inclusi."
        ]
      },
      {
        "title": "Un set da sala non è un singolo file",
        "body": "L'emulazione delle console di solito significa un file per gioco. L'hardware da sala funziona diversamente: un gioco è un insieme di file di chip, spesso raggruppati in un ZIP, e molti giochi dipendono da un set parent o da un BIOS. Ecco perché uno ZIP da sala si comporta diversamente da una ROM per console portatile.",
        "points": [
          "Mantieni lo ZIP intatto a meno che il flusso di importazione non ti chieda di scompattarlo.",
          "Può essere necessario un archivio BIOS separato.",
          "Un set clone potrebbe non contenere tutti i file di cui il core ha bisogno."
        ]
      },
      {
        "title": "Importazione e primo avvio",
        "body": "Seleziona il set dalla voce di importazione della libreria Retropa, poi avvialo con il layout predefinito. Se il core segnala un file o un BIOS mancante, leggi con precisione quel messaggio: un set parent mancante e un BIOS mancante richiedono soluzioni diverse.",
        "points": [
          "Leggi l'errore esatto prima di cambiare qualsiasi cosa.",
          "Conserva l'archivio originale durante la diagnosi.",
          "Verifica che gli ingressi gettone e start siano raggiungibili."
        ]
      },
      {
        "title": "I file Neo Geo Pocket qui non funzionano",
        "body": "Se hai file .ngp o .ngpc, appartengono ai sistemi Pocket e non alla famiglia da sala. Una ROM Pocket o uno ZIP rinominato non possono sostituire un set da sala, e vale anche il contrario.",
        "points": [
          ".ngp e .ngpc sono file Pocket per console portatile.",
          "I set da sala sono multi-file e possono richiedere un BIOS.",
          "Controlla il sistema rilevato prima di segnalare un problema."
        ]
      },
      {
        "title": "Controlli e video da sala",
        "body": "L'hardware da sala prevede un joystick e diversi pulsanti d'azione, e molti titoli si basano su pressioni simultanee. Retropa supporta i controlli su schermo e i controller esterni compatibili e include trattamenti CRT adatti all'output da sala. I filtri avanzati richiedono Plus.",
        "points": [
          "Abbina un controller in iOS prima di mapparlo.",
          "Prova una diagonale insieme a un pulsante nello stesso momento.",
          "I preset CRT di solito si adattano all'output da sala meglio di una griglia grezza."
        ]
      },
      {
        "title": "Quando un gioco Neo Geo non parte",
        "body": "Controlla la scheda selezionata, il contenuto del set e qualsiasi requisito BIOS segnalato dal core. Un set clone isolato senza il suo parent, o un set a cui manca un file richiesto, non si avvierà indipendentemente dal filtro o dalla skin applicati.",
        "points": [
          "Annota versione dell'app, scheda selezionata, core ed errore esatto.",
          "Cambiare filtro o skin non può risolvere dati ROM mancanti.",
          "Non allegare ROM commerciali o file BIOS a una richiesta di assistenza."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Perché i core da sala richiedono Plus?",
        "answer": "Le famiglie da sala fanno parte delle funzioni a pagamento, insieme alle skin premium e ai filtri avanzati. I sistemi Pocket e a cartuccia non lo richiedono."
      },
      {
        "id": "bios",
        "question": "Serve un BIOS Neo Geo?",
        "answer": "Molti set da sala ne prevedono uno e il core ti dirà se manca. Usa un BIOS che hai il diritto di usare; Retropa non fornisce download."
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket è la stessa cosa?",
        "answer": "No. Pocket è una console portatile con file propri. Un set da sala e un gioco Pocket non sono intercambiabili."
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
    "title": "Core mGBA su iPhone e iPad | Retropa",
    "description": "Usa mGBA in Retropa per Game Boy, Game Boy Color e Game Boy Advance. Formati del catalogo, verifiche al primo avvio, precauzioni sui salvataggi e cambio core con Plus.",
    "summary": "mGBA copre la famiglia di console portatili Game Boy in Retropa. Parti dal layout predefinito e dall'immagine originale, poi controlla una scena di gioco reale prima di modificare le impostazioni di presentazione.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream mGBA: https://github.com/mgba-emu/mgba. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Primo avvio tra le generazioni di console portatili",
        "body": "Scarica il file in locale in File, importalo dalla libreria Retropa e conferma il sistema rilevato. Un titolo Game Boy Color ha bisogno del suo percorso hardware a colori; cambiare il nome del file non è un modo per aggiungere o togliere funzioni colore. Per il Game Boy Advance prova L e R oltre ai pulsanti frontali, perché un layout pensato per le console portatili più vecchie potrebbe ometterli.",
        "points": [
          "Controlla audio e ingressi dopo la schermata del titolo.",
          "Prova la skin predefinita prima di importare un layout personalizzato.",
          "Tieni il file originale fuori dall'app."
        ]
      },
      {
        "title": "Separare l'emulazione dagli effetti video",
        "body": "Se una scena sembra sbagliata, confrontala prima con i filtri disattivati. Un trattamento a schermo verde cambia volutamente il colore e una griglia LCD cambia volutamente l'aspetto dei pixel. Questi effetti non possono stabilire se mGBA sta renderizzando il gioco in modo errato. Per un problema di audio o di timing, annota una scena ripetibile e la versione dell'app invece di giudicare solo il logo di apertura."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "Limiti dell'ambito per console portatili",
        "body": "mGBA non è il percorso Nintendo DS in Retropa. Un file DS richiede il core DS del catalogo, non un'immagine Game Boy Advance rinominata. Allo stesso modo, uno stato di salvataggio di un altro emulatore non è un file di gioco e non va importato come tale. Segui l'avviso BIOS per il sistema selezionato se ne compare uno; Retropa non fornisce firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Posso cambiare il core solo per un gioco?",
        "answer": "Sì, con Retropa Plus. La selezione è memorizzata per ogni gioco, ma fai un backup dei salvataggi prima di cambiarla e non aspettarti che gli stati funzionino tra core diversi."
      },
      {
        "id": "display",
        "question": "Un altro filtro risolverà un problema di compatibilità?",
        "answer": "No. Prova prima con l'immagine originale. Un filtro cambia la presentazione, non l'hardware emulato né il contenuto del file di gioco."
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
    "title": "Core SkyEmu su iPhone e iPad | Retropa",
    "description": "SkyEmu copre la famiglia Game Boy e il percorso beta Nintendo DS in Retropa. Controlla formati, controlli touch a doppio schermo, limiti e cambio core con Plus.",
    "summary": "SkyEmu gestisce il percorso beta Nintendo DS oltre alle console portatili Game Boy in Retropa. La copertura DS è in beta, non una promessa che ogni titolo o interazione touch funzioni correttamente.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream SkyEmu: https://github.com/skylersaleh/SkyEmu. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS è un percorso beta",
        "body": "Considera la compatibilità DS specifica per ogni titolo. Importa un file scaricato in locale, conferma che sia stato rilevato il Nintendo DS e prova oltre la schermata di apertura. Controlla una scena con input touch e una scena con audio prima di affidarti a una sessione lunga. Annota la versione dell'app e il guasto esatto se un titolo si blocca; cambiare skin non può riparare un problema di compatibilità del core.",
        "points": [
          "Il catalogo elenca solo SkyEmu per il Nintendo DS.",
          "Il cambio core con Plus non crea un core DS alternativo.",
          "Conserva backup dei salvataggi indipendenti mentre valuti il comportamento in beta."
        ]
      },
      {
        "title": "Due schermi e input touch",
        "body": "Scegli un layout che lasci visibili entrambi i display. L'orientamento verticale può impilarli; quello orizzontale dipende dalla skin. Prova gli elementi touch piccoli alla dimensione con cui giochi davvero e verifica quale display riceve l'input touch. Un controller fisico può gestire i pulsanti mappati, ma non può sostituire ogni interazione touch.",
        "points": [
          "Prova entrambi i display, non solo la vista di gioco principale.",
          "Lascia i controlli touch raggiungibili con un controller esterno.",
          "Una skin da console portatile a schermo singolo non è un layout DS."
        ]
      },
      {
        "title": "Usare SkyEmu per le console portatili più vecchie",
        "body": "La famiglia Game Boy usa layout a schermo singolo. Conferma il sistema rilevato e usa una skin adeguata prima di indagare su problemi di colore o pulsanti mancanti. ZIP e RetroPack sono contenitori di importazione, non sistemi emulati aggiuntivi; il file al loro interno deve comunque corrispondere al catalogo. Rinominare un file Game Boy Advance non lo trasforma in un gioco DS."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Quale core avvia i giochi Nintendo DS?",
        "answer": "SkyEmu è il percorso beta Nintendo DS catalogato in Retropa. La compatibilità è specifica per ogni titolo e il catalogo non elenca un altro core DS."
      },
      {
        "id": "touch",
        "question": "I giochi DS richiedono ancora input touch con un controller?",
        "answer": "Sì. Mantieni raggiungibile lo schermo touch per i giochi che lo usano; un controller non sostituisce tutte le azioni touch."
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
    "title": "Core SameBoy su iPhone e iPad | Retropa",
    "description": "SameBoy si concentra su Game Boy e Game Boy Color in Retropa. Controlla comportamento cromatico, ambito dei file, limiti degli stati di salvataggio e requisito Plus per cambiare core.",
    "summary": "SameBoy si concentra sull'hardware Game Boy originale, monocromatico e a colori. Il suo ambito più ristretto lo rende un utile termine di confronto, non una garanzia che ogni altro core sia meno accurato.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream SameBoy: https://github.com/LIJI32/SameBoy. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Controlla il colore senza filtro",
        "body": "Importa il file salvato in locale e verifica se Retropa lo identifica come Game Boy o Game Boy Color. Parti dall'immagine originale: un trattamento DMG può volutamente far apparire monocromatico un titolo a colori. Usa una scena con cambi di colore noti e confronta la stessa scena, non due punti diversi del gioco."
      },
      {
        "title": "Verificare timing e ingressi",
        "body": "Usa la skin predefinita per controllare la croce direzionale, A, B, Start e Select. Se il timing o l'audio sembrano sbagliati, annota con precisione quando accade e se persiste con gli effetti video disattivati. Con Retropa Plus, un confronto con un altro core compatibile può aiutare a isolare l'implementazione, ma una differenza visibile da sola non dimostra quale core corrisponda all'hardware."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "Non è un core per Game Boy Advance",
        "body": "SameBoy non copre il Game Boy Advance in Retropa. Usa un core del catalogo compatibile con il GBA per un'immagine GBA; cambiarne l'estensione non la rende un gioco Game Boy. Allo stesso modo, passare a SameBoy non renderà trasferibile uno stato di salvataggio prodotto da un core diverso. Conserva il vecchio stato e prova separatamente un backup del salvataggio di gioco."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy può avviare giochi Game Boy Advance?",
        "answer": "No. La voce SameBoy nel catalogo di Retropa copre Game Boy e Game Boy Color, non Game Boy Advance."
      },
      {
        "id": "why",
        "question": "Quando dovrei confrontare SameBoy con un altro core?",
        "answer": "Con Retropa Plus, confronta un problema ripetibile di timing, colore o audio dopo aver verificato il file e disattivato i filtri. Fai prima un backup dei salvataggi."
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
    "title": "Core RusticoNES per NES su iPhone e iPad | Retropa",
    "description": "RusticoNES in Retropa: formati NES e Famicom su cartuccia e disco, verifiche sui mapper, primo avvio, precauzioni sui salvataggi e cambio core con Plus.",
    "summary": "RusticoNES è il percorso NES predefinito di Retropa. Usalo per i formati NES / Famicom catalogati, controllando i metadati della cartuccia e i requisiti del disco prima di considerare un avvio fallito un problema video.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream RusticoNES: https://github.com/zeta0134/rustico. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Cartucce, UNIF e immagini su disco",
        "body": "Un'immagine su cartuccia NES / Famicom e un'immagine del Famicom Disk System sono input diversi. UNIF è un formato di contenitore per cartucce, non un altro nome per un header iNES. Conserva l'header e l'estensione originali durante l'importazione; rinominare o rimuovere byte per far sembrare il file di un altro formato può eliminare informazioni usate per identificare la sua scheda.",
        "points": [
          "Conserva una copia separata dell'immagine originale.",
          "Leggi qualsiasi avviso BIOS del sistema su disco; Retropa non fornisce il BIOS.",
          "I formati audio NSF non sono elencati per RusticoNES; controlla TetaNES."
        ]
      },
      {
        "title": "Primo avvio e verifica dei controller",
        "body": "Scarica l'immagine in locale in File, importala tramite la libreria Retropa e conferma che sia stato rilevato il NES. Parti dalla skin predefinita e senza effetti video. Prova la croce direzionale, A, B, Start e Select, incluse le diagonali e le pressioni simultanee. Un ingresso mancante in un layout personalizzato non è prova di un mapper difettoso."
      },
      {
        "title": "Quando una cartuccia fallisce ma altre funzionano",
        "body": "Le cartucce NES possono includere hardware mapper diversi. Un'estensione riconosciuta non dimostra che la scheda usata da un particolare gioco sia implementata. Annota l'errore esatto e, se noti dai metadati del tuo dump, il mapper e la regione. Non modificare gli header a caso e non dare per scontato che un BIOS risolva un problema della scheda della cartuccia. Per i giochi su disco, distingui un BIOS mancante da dati del disco mancanti."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "Confronta solo i formati in comune",
        "body": "La pagina del sistema NES elenca l'unione dei formati di tutti i suoi core, non la promessa che ogni core li accetti tutti. Prima di usare Plus per confrontare RusticoNES con TetaNES o JGenesis, controlla entrambe le voci del catalogo per il formato del file originale. Mantieni la stessa scena e le impostazioni video predefinite, così una skin o un filtro cambiato non offuscherà il risultato."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "RusticoNES è il core elencato per l'audio NSF?",
        "answer": "No. Il catalogo di Retropa elenca NSF e NSFE sotto TetaNES, non sotto RusticoNES. I file audio non sono giochi su cartuccia giocabili."
      },
      {
        "id": "mapper",
        "question": "Un'estensione supportata garantisce che un gioco si avvii?",
        "answer": "No. Il mapper della cartuccia, l'integrità del file e gli eventuali requisiti del sistema su disco contano comunque. Annota l'errore esatto prima di modificare il file."
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
    "title": "Core TetaNES per NES su iPhone e iPad | Retropa",
    "description": "TetaNES in Retropa: giochi NES / Famicom, immagini su disco e audio NSF, verifiche per formato, configurazione dei controller e requisito Plus per cambiare core.",
    "summary": "TetaNES è un core NES alternativo in Retropa, con copertura catalogata di cartucce, dischi e file musicali. Controlla che tipo di file hai importato prima di aspettarti una schermata di gioco giocabile.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream TetaNES: https://github.com/lukexor/tetanes. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "I file musicali non sono giochi su cartuccia",
        "body": "NSF e NSFE contengono dati musicali NES. Se ne hai importato uno, l'assenza di un normale livello di gioco non è di per sé un guasto. Controlla l'output audio e i controlli che l'app espone davvero; non dare per scontato che in Retropa sia presente un'interfaccia da lettore musicale desktop come quella upstream. Per giocare, parti da un'immagine su cartuccia o su disco che hai il diritto di usare.",
        "points": [
          "Controlla il volume del dispositivo e l'output audio quando provi la musica.",
          "Rinominare un file audio non può trasformarlo in un'immagine su cartuccia.",
          "Le estensioni UNIF appartengono alla voce di catalogo di RusticoNES, non a quella di TetaNES."
        ]
      },
      {
        "title": "Importa un'immagine su cartuccia o su disco",
        "body": "Scarica il file sul dispositivo prima di usare la voce di importazione della libreria. Conferma il rilevamento NES e mantieni invariata l'immagine originale. Famicom è il nome giapponese del sistema; il Famicom Disk System aggiunge requisiti separati per i dischi. Se il core selezionato segnala un problema di BIOS o di dati del disco, risolvi quel requisito preciso invece di sostituire il file con un'immagine su cartuccia non correlata."
      },
      {
        "title": "Prova gli ingressi e una scena ripetibile",
        "body": "Usa un layout NES / Famicom con la croce direzionale, due pulsanti d'azione, Start e Select. Conferma le diagonali con la skin predefinita, poi prova una scena che mostri il problema. Confronta con l'immagine originale prima di applicare un effetto CRT: le scanline possono cambiare il dettaglio percepito senza cambiare ciò che il core emula."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "Un'alternativa non è una riparazione universale",
        "body": "TetaNES e RusticoNES hanno elenchi di formati e implementazioni diversi. Un cambio può aiutare a isolare un problema di timing o di mapper solo quando il file è valido per entrambi; non può garantire il supporto per una scheda particolare. Gli stati di salvataggio del core precedente dovrebbero restare conservati insieme a quel core, invece di essere trattati come file intercambiabili."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Perché il mio file NSF non mostra un gioco giocabile?",
        "answer": "NSF contiene dati musicali. Prova l'audio invece di aspettarti un normale livello di gioco; usa un'immagine su cartuccia o su disco per giocare."
      },
      {
        "id": "switch",
        "question": "Posso passare un gioco NES a TetaNES gratuitamente?",
        "answer": "Cambiare core di emulazione richiede Retropa Plus. Controlla prima la copertura di formati del core di destinazione e fai un backup dei progressi."
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
    "title": "Core LakeSnes per SNES su iPhone e iPad | Retropa",
    "description": "LakeSnes in Retropa: formati SNES / Super Famicom, limiti dei chip delle cartucce, controlli a sei pulsanti, backup dei salvataggi e cambio core con Plus.",
    "summary": "LakeSnes è il core di Retropa dedicato al SNES. Il suo catalogo include diversi formati di immagine e di copier, ma il riconoscimento del file e il supporto all'hardware della cartuccia di un gioco sono questioni separate.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream LakeSnes: https://github.com/dinkc64/LakeSnes. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Mantieni intatti l'immagine e il suo header",
        "body": "Il SNES è noto come Super Famicom in Giappone. Le immagini su cartuccia più comuni usano le estensioni SFC o SMC; il catalogo elenca anche altri formati di copier e correlati. L'estensione da sola non dimostra se un file ha un header di copier o se richiede hardware speciale nella cartuccia. Importa l'immagine originale salvata in locale e conserva un backup, invece di rimuovere un header come primo passo di risoluzione dei problemi."
      },
      {
        "title": "Controlla il controller completo",
        "body": "Dopo l'importazione in libreria, verifica il sistema rilevato e parti dal layout predefinito. Il SNES aggiunge X, Y, L e R allo schema a due pulsanti delle console portatili. Prova i pulsanti dorsali, le diagonali e una pressione simultanea usata dal gioco; una skin attraente che omette L o R può far sembrare bloccato un gioco funzionante.",
        "points": [
          "Prova Start e Select oltre ai sei pulsanti di gioco.",
          "Mappa un controller abbinato prima di giudicare i limiti del layout touch.",
          "Usa l'immagine originale per separare problemi di ingressi e problemi video."
        ]
      },
      {
        "title": "Confini dei chip delle cartucce e dei formati speciali",
        "body": "Alcuni titoli SNES dipendono da processori aggiuntivi nella cartuccia o da altro hardware. L'elenco di estensioni del catalogo non è un elenco di compatibilità per singolo chip, e un file BS o ST riconosciuto non stabilisce che ogni flusso di lavoro con accessori sia esposto in Retropa. Se fallisce un solo titolo, annota i suoi requisiti hardware quando li conosci e l'errore esatto. Non sostenere che un filtro o un'estensione rinominata possano aggiungere il supporto hardware mancante."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "Confrontare LakeSnes con JGenesis",
        "body": "Anche JGenesis elenca il SNES, ma la sua copertura di estensioni SNES è più ristretta di quella di LakeSnes. Con Plus, confronta solo un formato di file elencato in entrambe le voci. Torna alla stessa scena con gli stessi controlli e senza filtri, e tieni separati gli stati di ciascun core. Un confronto riuscito per una cartuccia non stabilisce la compatibilità con ogni titolo che usa chip speciali."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Ogni formato di LakeSnes funziona anche su JGenesis?",
        "answer": "Non darlo per scontato. Consulta la voce di catalogo di ciascun core; i formati a livello di sistema combinano la copertura di più core."
      },
      {
        "id": "chips",
        "question": "L'elenco dei formati garantisce la compatibilità con i chip speciali?",
        "answer": "No. Il riconoscimento del file e l'emulazione dell'hardware della cartuccia sono cose separate. Controlla l'errore esatto e il core selezionato prima di modificare l'immagine."
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
    "title": "Core JGenesis su iPhone e iPad | Retropa",
    "description": "JGenesis in Retropa: sistemi Sega e Nintendo catalogati, nomi Genesis / Mega Drive, confini dei formati, rilevamento del sistema e cambio core con Plus.",
    "summary": "JGenesis serve diversi sistemi attraverso un'unica famiglia di core in Retropa. Il sistema rilevato determina comunque hardware, controlli e contesto di salvataggio; condividere un core non rende i file intercambiabili.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream JGenesis: https://github.com/jsgroth/jgenesis. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
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
        "title": "I nomi Genesis e Mega Drive",
        "body": "Genesis è il nome nordamericano della console nota come Mega Drive in Giappone e in Europa. Il catalogo di Retropa ha voci sotto entrambi i nomi. Le estensioni dei file sono indizi sul formato dell'immagine, non identificatori affidabili della regione: un nome di file da solo non ti dice i requisiti di timing o di regione del gioco. Conserva il file originale e conferma il sistema rilevato, invece di rinominarlo per selezionare un mercato."
      },
      {
        "title": "Importa per l'hardware giusto",
        "body": "Scarica l'immagine in locale in File e importala tramite la libreria. Prima di iniziare, distingui Master System da Game Gear e NES / Famicom da SNES / Super Famicom. Un core multi-sistema ha comunque bisogno del percorso hardware appropriato. Se il sistema rilevato è inatteso, controlla l'identità del file prima di cambiare le impostazioni video o dei controlli.",
        "points": [
          "Master System e Game Gear sono sistemi imparentati, non identici.",
          "Un elenco di formati a livello di sistema può includere formati di altri core.",
          "Il catalogo Retropa è l'ambito di riferimento qui, non ogni funzione upstream di JGenesis."
        ]
      },
      {
        "title": "I controlli variano con il sistema selezionato",
        "body": "Per Genesis, prova A, B, C e gli eventuali ingressi aggiuntivi a sei pulsanti offerti dal layout. Per Game Gear, conferma Start; per Master System, controlla l'ingresso di pausa. I layout SNES richiedono pulsanti dorsali che i layout NES non hanno. Verifica una combinazione di controller in una scena di gioco reale prima di dare per scontato che il core abbia perso un ingresso."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "La copertura Sega non implica un core alternativo",
        "body": "Il catalogo di Retropa elenca JGenesis come unico core per i suoi sistemi Sega a cartuccia. Plus sblocca il cambio dove esistono alternative; non aggiunge un'implementazione non elencata. Né il supporto upstream multi-sistema implica che CD, hardware aggiuntivo o ogni opzione desktop sia disponibile dentro Retropa. Usa il catalogo e gli avvisi reali dell'app per stabilire il percorso supportato."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Un'estensione .gen dimostra che un gioco è nordamericano?",
        "answer": "No. Genesis e Mega Drive sono nomi regionali, ma un'estensione non stabilisce in modo affidabile la regione o i requisiti di timing di un gioco."
      },
      {
        "id": "upstream",
        "question": "Retropa espone ogni sistema di JGenesis presente upstream?",
        "answer": "Non viene data alcuna garanzia in tal senso. Questa pagina ricava la sua copertura dal catalogo di Retropa, non dall'elenco completo delle funzioni upstream."
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
    "title": "Core Ares su iPhone e iPad | Retropa",
    "description": "Ares in Retropa: copertura catalogata di GBA, WonderSwan e Neo Geo Pocket, rilevamento del modello a colori, layout ruotati, precauzioni sui salvataggi e cambio core con Plus.",
    "summary": "Ares copre alcune famiglie di console portatili in Retropa. La sua ampia identità upstream non significa che ogni sistema o accessorio upstream sia integrato nell'app.",
    "sections": [
      {
        "title": "Sistemi e formati del catalogo",
        "body": "Progetto upstream Ares: https://github.com/ares-emulator/ares. La copertura seguente deriva dal catalogo di Retropa, non dall'elenco completo delle funzioni del progetto upstream. Un'estensione elencata non garantisce la compatibilità con ogni titolo. Retropa non fornisce giochi né file BIOS; importa solo file che hai il diritto di usare.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Abbina il modello monocromatico o a colori",
        "body": "Importa un'immagine scaricata in locale e controlla se Retropa ha rilevato il WonderSwan o il WonderSwan Color originale, e il Neo Geo Pocket o il Neo Geo Pocket Color. I modelli a colori hanno capacità che l'hardware monocromatico non possiede. Rinominare un file non è una conversione e non può far funzionare un titolo solo a colori come gioco del modello originale.",
        "points": [
          "Conserva l'immagine originale e un backup separato dei progressi.",
          "Controlla il modello rilevato prima di diagnosticare problemi di palette.",
          "Segui un avviso firmware specifico del sistema se ne compare uno; nessun BIOS è fornito."
        ]
      },
      {
        "title": "L'orientamento WonderSwan richiede più della modalità verticale",
        "body": "I giochi WonderSwan possono essere progettati per il gioco orizzontale o verticale. Controlla l'orientamento previsto dal gioco, entrambi i gruppi di pulsanti direzionali e il layout di skin disponibile. Ruotare il telefono in verticale da solo non dimostra che lo schermo emulato e tutti i controlli siano stati ruotati in modo appropriato. Se un layout non riesce a esporre gli ingressi necessari, usa un altro layout adatto invece di dare per scontato che il core possa rimapparli automaticamente."
      },
      {
        "title": "Pocket non è il Neo Geo da sala",
        "body": "Il Neo Geo Pocket usa immagini per console portatile, non i set multi-file da sala associati al Neo Geo MVS. Un archivio BIOS da sala non può sostituire un'immagine Pocket. Prova le diagonali e entrambi i pulsanti d'azione con il layout predefinito. Il display Pocket originale è monocromatico; solo il Pocket Color dovrebbe mostrare la grafica del modello a colori. L'esecuzione da sala è una capacità Plus separata."
      },
      {
        "title": "Cambio di core e conservazione dei progressi",
        "body": "Cambiare il core di emulazione richiede Retropa Plus, anche quando il sistema portatile in sé è disponibile senza acquisto. Confronta solo core che coprono sia il sistema sia il formato del file. La selezione viene ricordata per ogni gioco; fai un backup del salvataggio del gioco e degli stati di salvataggio del core originale prima di provare la stessa scena per differenze di audio, immagine e ingressi.",
        "points": [
          "Gli stati di salvataggio registrano lo stato interno di un core specifico; non aspettarti compatibilità tra core diversi.",
          "Fai un backup e verifica anche i salvataggi di gioco; la migrazione automatica non è garantita.",
          "Cambiare core non converte il file di gioco né fornisce un BIOS mancante."
        ]
      },
      {
        "title": "Dove il confronto è disponibile e dove no",
        "body": "Il catalogo elenca alternative per il Game Boy Advance, ma per WonderSwan e i modelli Neo Geo Pocket elenca solo Ares. Il cambio core con Plus non aggiunge un'altra implementazione per quei sistemi. Ares ha anche un ambito upstream molto più ampio di questa integrazione; usa solo la copertura Retropa elencata qui, invece di dare per scontato che un altro sistema upstream si possa abilitare cambiando un'estensione."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Il supporto Ares Pocket può avviare il mio set Neo Geo da sala?",
        "answer": "No. Pocket e Neo Geo da sala sono famiglie hardware diverse con requisiti di file diversi. L'esecuzione da sala richiede Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Plus aggiunge un altro core WonderSwan o Pocket?",
        "answer": "No. Quei sistemi attualmente elencano solo Ares nel catalogo di Retropa. Il cambio si applica dove esiste un'alternativa compatibile."
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
    "label": "Alternativa a Delta",
    "title": "Alternativa all'emulatore Delta per iPhone e iPad | Retropa",
    "description": "Cerchi un'alternativa a Delta su iPhone e iPad? Confronta supporto arcade, importazione delle skin Delta, filtri video e modalità console, incluso dove Delta è la scelta migliore.",
    "summary": "Retropa è un emulatore per sala giochi e console portatili per iPhone e iPad che importa direttamente le skin Delta, aggiunge famiglie da sala e filtri video a scala non intera e mantiene un'interfaccia pensata prima di tutto per le console portatili.",
    "sections": [
      {
        "title": "Cosa si porta dietro da Delta",
        "body": "Cambiare emulatore vale la pena solo se la configurazione esistente sopravvive. Retropa importa i pacchetti .deltaskin di Delta, quindi un layout che hai già messo a punto non deve essere ricostruito da zero. Verifica che il pacchetto sia destinato al sistema e all'orientamento con cui giochi, poi conferma che la vista di gioco non sia ostruita.",
        "points": [
          "I pacchetti .deltaskin si importano direttamente.",
          "Controlla il sistema previsto prima di affidarti a una skin.",
          "Il supporto per orizzontale e verticale dipende dal pacchetto."
        ]
      },
      {
        "title": "Dove Retropa aggiunge qualcosa che Delta non ha",
        "body": "La differenza più evidente è il supporto per le sale giochi. Retropa avvia le famiglie da sala supportate CPS I, CPS II, CPS III, Neo Geo, PGM e M92 insieme ai sistemi portatili, così un'unica libreria copre entrambi. I core da sala richiedono Retropa Plus, e giochi e file BIOS non sono inclusi.",
        "points": [
          "Famiglie da sala nella stessa libreria delle console portatili.",
          "Retropa Plus è necessario per i core da sala.",
          "I set da sala sono multi-file e possono richiedere un BIOS."
        ]
      },
      {
        "title": "Filtri video senza obbligo di scala intera",
        "body": "Molti filtri retro presuppongono che l'immagine di gioco corrisponda a un numero intero di pixel dello schermo. Su un iPhone moderno l'area disponibile raramente si divide in modo esatto, il che lascia spazio inutilizzato o scanline irregolari. I filtri avanzati di Retropa lavorano invece sull'area di output reale, in tutti gli orientamenti e i layout di skin. L'app iOS è il riferimento; l'anteprima nel browser su questo sito è un'approssimazione.",
        "points": [
          "I filtri cambiano la presentazione, non la risoluzione del gioco.",
          "I filtri avanzati richiedono Retropa Plus.",
          "Le sovrapposizioni di scanline convenzionali possono tremolare a scale frazionarie."
        ]
      },
      {
        "title": "Dove Delta è la scelta migliore",
        "body": "Delta ha una base di utenti molto più ampia, una storia più lunga sull'App Store e una comunità più vasta di skin pubblicate. Se vuoi l'opzione più diffusa, il catalogo di skin esistenti più ricco o il maggior numero di guide di terze parti, Delta è una scelta ragionevole e questa pagina non fingerà il contrario.",
        "points": [
          "Delta ha una comunità più ampia e più materiale di terze parti.",
          "Delta beneficia di effetti di rete intorno alle skin.",
          "Retropa è un prodotto più recente con un catalogo più piccolo."
        ]
      },
      {
        "title": "Provare entrambi non costa nulla",
        "body": "Entrambe le app sono gratuite da scaricare, con acquisti in-app opzionali. L'approccio pratico è importare una skin Delta in Retropa, caricare un gioco per console portatile e un set da sala, e decidere in base a come si comportano davvero controlli e immagine sul tuo dispositivo.",
        "points": [
          "Gratuite da scaricare da entrambe le parti.",
          "Conserva comunque i file e le skin originali.",
          "Giudica sul tuo dispositivo, non su una tabella di confronto."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Retropa può importare le mie skin Delta esistenti?",
        "answer": "Sì. Retropa importa i pacchetti .deltaskin. Conserva il file del pacchetto originale e controlla che sia destinato al sistema e all'orientamento con cui giochi."
      },
      {
        "id": "free",
        "question": "Retropa è gratuito?",
        "answer": "Retropa è gratuito da scaricare, con acquisti in-app opzionali. I core da sala, le skin premium e i filtri avanzati richiedono Retropa Plus. I prezzi sono mostrati nell'app."
      },
      {
        "id": "roms",
        "question": "Retropa include giochi?",
        "answer": "No. Retropa è un emulatore e non fornisce giochi né file BIOS. Importa solo contenuti che hai il diritto di usare."
      },
      {
        "id": "which-better",
        "question": "Quale emulatore è migliore?",
        "answer": "Sono ottimizzati per cose diverse. Delta ha la comunità e il catalogo di skin più ampi; Retropa aggiunge famiglie da sala, filtri a scala non intera e l'importazione delle skin Delta. Provali entrambi sul tuo dispositivo."
      }
    ],
    "attribution": "Delta è un prodotto di terze parti. Tutti i nomi di prodotti e aziende citati in questa pagina sono marchio dei rispettivi proprietari e il loro uso qui serve solo all'identificazione e a un confronto fattuale. Retropa non è affiliata, approvata o sponsorizzata da nessuno di essi.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa contro Delta",
    "title": "Retropa vs Delta: confronto tra arcade, filtri e skin",
    "description": "Un confronto diretto tra Retropa e Delta su iPhone e iPad: sistemi emulati, supporto arcade, compatibilità delle skin, filtri video e dove ciascuno è la scelta più adatta.",
    "summary": "Retropa e Delta sono entrambi emulatori iOS, ma ottimizzano in modo diverso: Delta offre la comunità e il catalogo di skin più ampi, mentre Retropa aggiunge famiglie da sala e filtri video a scala non intera.",
    "sections": [
      {
        "title": "Sistemi emulati",
        "body": "Entrambe le app coprono i sistemi portatili che la maggior parte delle persone desidera. Retropa avvia inoltre le famiglie da sala supportate, che è la differenza funzionale più rilevante. I core da sala richiedono Retropa Plus; i sistemi portatili no.",
        "points": [
          "La copertura delle console portatili si sovrappone in larga misura.",
          "Le famiglie da sala sono specifiche di Retropa.",
          "Il gioco da sala richiede Plus."
        ]
      },
      {
        "title": "Skin e layout",
        "body": "Retropa importa i pacchetti .deltaskin di Delta, quindi un layout che già usi può essere trasferito. Oltre a questo, l'ecosistema di skin pubblicate di Delta è più ampio, il che conta se sfogliare un grande catalogo fa parte di ciò che cerchi.",
        "points": [
          "Retropa importa i pacchetti .deltaskin.",
          "Delta ha il catalogo pubblicato più ampio.",
          "Verifica sempre che un pacchetto supporti il tuo sistema e orientamento."
        ]
      },
      {
        "title": "Filtri video",
        "body": "Retropa offre filtri CRT e LCD avanzati che si adattano all'area di output reale invece di richiedere un fattore di scala intero, e può usare le catene di shader RetroArch, compresi i preset .slang e .slangp. I filtri avanzati richiedono Plus. L'anteprima sul sito è un'approssimazione; l'app iOS è il riferimento.",
        "points": [
          "Nessun requisito di scala intera per i filtri avanzati.",
          "Il supporto alle catene di shader RetroArch è elencato per Retropa.",
          "I filtri avanzati richiedono Plus."
        ]
      },
      {
        "title": "Comunità, documentazione e storia del prodotto",
        "body": "Delta è sull'App Store da più tempo, ha molti più utenti e quindi molta più documentazione della comunità, risposte nei forum e guide di terze parti. Retropa è più recente e più piccolo. Chi sostiene il contrario non sta descrivendo lo stato attuale di nessuno dei due prodotti.",
        "points": [
          "Delta ha una storia più lunga sull'App Store.",
          "Delta ha più risposte disponibili dalla comunità.",
          "Oggi Retropa ha la base di utenti più piccola."
        ]
      },
      {
        "title": "Come scegliere",
        "body": "Se i titoli da sala ti interessano, o vuoi filtri video che non presuppongono una scala a numeri interi, vale la pena installare Retropa. Se cerchi il catalogo di skin più grande e il maggior materiale della comunità, Delta è la scelta più sicura. Entrambi sono gratuiti da scaricare, quindi il consiglio onesto è provarli entrambi con i tuoi file.",
        "points": [
          "Gratuiti da scaricare da entrambe le parti.",
          "Nessun impegno necessario per valutare l'uno o l'altro.",
          "Entrambi richiedono che tu fornisca i tuoi file di gioco."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta supporta i giochi da sala?",
        "answer": "Questo confronto non è qualcosa che questa pagina possa verificare. Ciò che questa pagina può affermare è che Retropa avvia le famiglie da sala supportate CPS, Neo Geo, PGM e M92, e che i core da sala richiedono Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Posso usare le stesse skin in entrambi?",
        "answer": "Retropa importa i pacchetti .deltaskin di Delta, quindi un pacchetto che funziona in Delta in genere si può importare in Retropa. Controlla il sistema di destinazione e l'orientamento dopo l'importazione."
      },
      {
        "id": "price",
        "question": "Quanto costano?",
        "answer": "Retropa è gratuito da scaricare, con acquisti in-app opzionali. Retropa Plus è necessario per i core da sala, le skin premium e i filtri avanzati. I prezzi attuali sono mostrati dentro l'app."
      }
    ],
    "attribution": "Delta è un prodotto di terze parti. Tutti i nomi di prodotti e aziende citati in questa pagina sono marchio dei rispettivi proprietari e il loro uso qui serve solo all'identificazione e a un confronto fattuale. Retropa non è affiliata, approvata o sponsorizzata da nessuno di essi.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Importare giochi",
    "title": "Come importare i giochi in Retropa su iPhone e iPad",
    "description": "Importa i tuoi file di gioco in Retropa su iPhone e iPad: dove si trova la voce di importazione, perché un segnaposto cloud non funziona, quali formati sono validi e cosa fare se un file viene rifiutato.",
    "summary": "Una guida passo passo per importare i tuoi file di gioco in Retropa, compresi i formati che funzionano, il comportamento dei contenitori ZIP e come recuperare un'importazione non riuscita.",
    "sections": [
      {
        "title": "Prima di iniziare",
        "body": "Retropa non include giochi né file BIOS. Ti serve un file di gioco che hai il diritto di usare, salvato sul dispositivo stesso. Conserva una copia intatta fuori dall'app, così un errore durante l'importazione non ti costerà mai l'originale.",
        "points": [
          "Importa solo contenuti che hai il diritto di usare.",
          "Conserva un backup separato di ogni file originale.",
          "L'app è gratuita da scaricare; i giochi non sono forniti."
        ]
      },
      {
        "title": "Primo passo: porta il file sul dispositivo",
        "body": "Scarica il file in modo che risieda nella memoria locale e non come segnaposto nel cloud. Questa è la causa più comune di un'importazione non riuscita: l'app File mostra l'elemento, ma i byte non sono ancora sul dispositivo, quindi l'emulatore non riceve nulla di utilizzabile.",
        "points": [
          "Apri il file una volta in File per confermare che sia scaricato.",
          "Un file mostrato in grigio o da scaricare è un segnaposto.",
          "Completa il download prima di importare."
        ]
      },
      {
        "title": "Secondo passo: importa dalla libreria",
        "body": "Apri la voce di importazione nella libreria Retropa e seleziona il file. Controlla che il sistema venga rilevato correttamente, poi avvia il gioco con il layout predefinito prima di cambiare skin o filtri, così ogni problema successivo avrà una causa evidente."
      },
      {
        "title": "Quali formati di file funzionano",
        "body": "Retropa accetta i formati di file che corrispondono ai sistemi supportati e può anche aprire direttamente i contenitori ZIP e RetroPack. L'estensione deve corrispondere al sistema: un file Game Boy è .gb, Game Boy Color è .gbc, Game Boy Advance è .gba e DS è .nds.",
        "points": [
          "Cambiare un'estensione non converte un gioco da un sistema all'altro.",
          "I contenitori ZIP e RetroPack si possono aprire senza scompattarli.",
          "I set da sala sono multi-file e vengono gestiti diversamente."
        ]
      },
      {
        "title": "Quando un'importazione non riesce",
        "body": "Leggi prima l'errore esatto, poi controlla tre cose in ordine: se il file è scaricato completamente, se l'estensione corrisponde al sistema e se il file è un'immagine pulita e non un download parziale. Solo dopo queste verifiche vale la pena sospettare del core di emulazione.",
        "points": [
          "Completa prima qualsiasi download incompleto.",
          "Conferma che l'estensione corrisponda al sistema.",
          "Prova il core alternativo per quel sistema prima di arrenderti."
        ]
      },
      {
        "title": "File, salvataggi e stati di salvataggio",
        "body": "Il file di gioco, i dati di salvataggio del gioco e uno stato di salvataggio dell'emulatore sono tre cose diverse. Rinominare l'uno nell'altro non lo converte. Fai un backup di tutti e tre prima di spostarli tra core o app, perché i formati degli stati non sono trasferibili su ogni core.",
        "points": [
          "Mantieni intatto il file di gioco originale.",
          "Fai backup separati dei salvataggi a batteria e degli stati di salvataggio.",
          "Non aspettarti che uno stato di un core si carichi in un altro."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa viene fornito con i giochi?",
        "answer": "No. Retropa è un emulatore e non fornisce giochi né file BIOS. Importi file che hai il diritto di usare."
      },
      {
        "id": "cloud",
        "question": "Perché il mio file non viene importato?",
        "answer": "La causa più comune è un segnaposto nel cloud al posto di un file scaricato. Aprilo in File per forzare il download, poi importalo di nuovo."
      },
      {
        "id": "zip",
        "question": "Posso importare un file ZIP?",
        "answer": "Retropa può aprire direttamente i contenitori ZIP e RetroPack, quindi di solito non è necessario scompattarli, a meno che un flusso di importazione specifico non lo richieda."
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
    "title": "Collegare un controller a Retropa su iPhone e iPad",
    "description": "Abbina un controller Bluetooth o con filo a iOS e mappalo dentro Retropa, oltre a come diagnosticare pulsanti che non rispondono o mappature che cambiano per ogni gioco.",
    "summary": "Abbina prima un controller compatibile con iOS, poi verifica la mappatura dentro Retropa per sistema e per gioco. Questa guida copre l'ordine di abbinamento, gli errori di mappatura comuni e le configurazioni touch più controller.",
    "sections": [
      {
        "title": "Abbina il controller a iOS prima di aprire Retropa",
        "body": "Il controller deve essere prima riconosciuto da iOS. Abbinalo nelle impostazioni di sistema, conferma che risponda lì e solo allora apri Retropa. Un controller mai abbinato a livello di sistema non comparirà dentro l'app, qualunque cosa tu faccia nelle sue impostazioni.",
        "points": [
          "Abbina prima nelle impostazioni di iOS.",
          "Conferma che il controller risponda nel sistema.",
          "Poi controllalo dentro Retropa."
        ]
      },
      {
        "title": "La mappatura si verifica per sistema, non una volta sola",
        "body": "Retropa mantiene i layout dei controlli per sistema, perché un Game Boy richiede sei ingressi mentre un pad SNES ne richiede dieci. Tratta la mappatura come un lavoro per sistema: dopo aver abbinato una volta, verifica l'assegnazione per ogni sistema con cui giochi davvero.",
        "points": [
          "Game Boy: croce direzionale, A, B, Start, Select.",
          "Il SNES aggiunge X, Y, L e R.",
          "I layout da sala aggiungono diversi pulsanti d'azione."
        ]
      },
      {
        "title": "I pulsanti che si dimentica di provare",
        "body": "In pratica i guasti si concentrano sugli stessi ingressi: i pulsanti dorsali sui pad a sei pulsanti, Start e Select, facili da posizionare fuori portata, e le diagonali, che contano di più sui sistemi il cui controller originale usava una levetta a microinterruttori.",
        "points": [
          "Prova esplicitamente L e R durante la mappatura.",
          "Controlla che Start e Select siano raggiungibili.",
          "Prova le diagonali, non solo le quattro direzioni cardinali."
        ]
      },
      {
        "title": "Controlli touch e controller possono convivere",
        "body": "Alcuni giochi richiedono un'interazione touch che un pad fisico non può sostituire, in particolare sui sistemi a doppio schermo. Mantenere disponibile il layout su schermo insieme a un controller abbinato è di solito più pratico che passare dall'uno all'altro.",
        "points": [
          "Non disattivare i controlli touch se un gioco usa lo schermo touch.",
          "Controlla che le sovrapposizioni non coprano la vista di gioco.",
          "La risposta aptica e il layout touch si possono regolare separatamente."
        ]
      },
      {
        "title": "Quando un pulsante non risponde",
        "body": "Procedi dal controller verso l'esterno: conferma che risponda in iOS, poi in Retropa, poi in un gioco che usa sicuramente quel pulsante. Se la mappatura sembra corretta ma un gioco ignora un ingresso, può darsi che il gioco non usi affatto quell'ingresso, cosa comune nei primi titoli per console portatile.",
        "points": [
          "Verifica prima il controller nelle impostazioni di iOS.",
          "Controlla la mappatura dentro Retropa.",
          "Conferma che il gioco usi davvero quel pulsante."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Quali controller funzionano?",
        "answer": "I controller supportati da iOS si possono usare con Retropa. Abbinali prima nelle impostazioni di iOS, poi controlla la mappatura dentro l'app."
      },
      {
        "id": "mapping-lost",
        "question": "Perché la mia mappatura è cambiata?",
        "answer": "I layout sono conservati per sistema e per gioco, quindi una mappatura impostata per un sistema non si applica automaticamente a un altro. Controlla la mappatura per il sistema con cui stai giocando."
      },
      {
        "id": "touch",
        "question": "I controlli touch smettono di funzionare con un controller?",
        "answer": "No. I controlli touch restano disponibili, il che è utile sui sistemi in cui un gioco richiede un'interazione touch o sul secondo schermo."
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
    "label": "Salvataggi",
    "title": "Stati di salvataggio e riavvolgimento in Retropa | iPhone e iPad",
    "description": "Capisci la differenza tra salvataggi di gioco, stati di salvataggio e riavvolgimento in Retropa, come spostare i salvataggi tra core in sicurezza e cosa verificare quando un salvataggio non si carica.",
    "summary": "Salvataggi di gioco, stati di salvataggio dell'emulatore e riavvolgimento sono tre meccanismi diversi con trasferibilità diversa. Questa guida spiega cosa fa ciascuno e come fare backup sicuri.",
    "sections": [
      {
        "title": "Tre cose diverse chiamate salvataggio",
        "body": "Il salvataggio di un gioco è scritto dal gioco stesso, uno stato di salvataggio cattura l'intero emulatore in un istante e il riavvolgimento ripercorre la cronologia recente. Si comportano in modo diverso, sono memorizzati in modo diverso e rinominare l'uno nell'altro non lo converte.",
        "points": [
          "I salvataggi di gioco sono creati dal gioco.",
          "Gli stati di salvataggio catturano l'intero momento dell'emulatore.",
          "Il riavvolgimento dipende dalla cronologia recente, non da un file memorizzato."
        ]
      },
      {
        "title": "Creare e usare uno stato di salvataggio",
        "body": "Uno stato di salvataggio è utile prima di una sezione difficile, prima di cambiare core o prima di applicare un nuovo filtro, perché ti permette di tornare a un momento sicuro. Il salvataggio rapido e il caricamento rapido servono esattamente a questo tipo di checkpoint a breve termine.",
        "points": [
          "Crea uno stato prima di cambiare core.",
          "Gli stati sono il modo più rapido per confrontare due preset.",
          "Conserva il salvataggio del gioco come registrazione a lungo termine."
        ]
      },
      {
        "title": "Spostare un salvataggio tra core",
        "body": "Gli stati di salvataggio non sono trasferibili su ogni core, perché uno stato registra la condizione interna di una specifica implementazione. I salvataggi a batteria, scritti dal gioco, hanno molte più probabilità di spostarsi con successo. Fai un backup di entrambi prima di cambiare il core selezionato.",
        "points": [
          "Aspettati che gli stati siano specifici del core.",
          "I salvataggi a batteria si trasferiscono in modo più affidabile.",
          "Fai un backup prima di cambiare core."
        ]
      },
      {
        "title": "Quando un salvataggio non si carica",
        "body": "Controlla se il salvataggio è un dato di gioco o uno stato, se il core è cambiato da quando è stato scritto e se la versione dell'app è cambiata. Se uno stato non funziona, carica invece il salvataggio del gioco, perché quel percorso non dipende dal formato dello stato interno dell'emulatore.",
        "points": [
          "Conferma che il core non sia cambiato.",
          "Conferma il tipo di salvataggio.",
          "Ripiega sul salvataggio del gioco quando possibile."
        ]
      },
      {
        "title": "Conservare backup che durano",
        "body": "Tieni il file di gioco originale, il salvataggio del gioco e gli stati di salvataggio a cui tieni in posti separati. iCloud o una copia su computer vanno bene; ciò che conta è che un singolo guasto nell'app o sul dispositivo non rimuova tutte le copie in una volta.",
        "points": [
          "Fai un backup del file di gioco stesso, non solo dei salvataggi.",
          "Tieni i salvataggi separati dai file di stato.",
          "Conserva almeno una copia fuori dal dispositivo."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Qual è la differenza tra un salvataggio e uno stato di salvataggio?",
        "answer": "Un salvataggio è scritto dal gioco e rappresenta i progressi nel formato del gioco stesso. Uno stato di salvataggio cattura l'intero emulatore in un solo momento ed è specifico del core che lo ha prodotto."
      },
      {
        "id": "rewind",
        "question": "Fino a quanto posso riavvolgere?",
        "answer": "Il riavvolgimento ripercorre la cronologia recente dalla memoria invece di ripristinare un file memorizzato, quindi la sua profondità è limitata dal buffer e non da un numero fisso di slot salvati."
      },
      {
        "id": "transfer",
        "question": "Posso spostare un salvataggio su un altro emulatore?",
        "answer": "Il salvataggio del gioco è l'artefatto più trasferibile. Gli stati di salvataggio dipendono dal formato interno di un core specifico e non ci si deve aspettare che si carichino altrove."
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
    "label": "Risoluzione dei problemi",
    "title": "Il gioco non si carica in Retropa? Cosa controllare",
    "description": "Un ordine diagnostico per un gioco che non parte in Retropa: download incompleti, estensione sbagliata, sistema rilevato errato, BIOS mancante, mapper non supportato e problemi specifici del core.",
    "summary": "Segui un ordine fisso di verifiche — completezza del download, estensione, sistema rilevato, requisito BIOS, poi scelta del core — prima di concludere che un file è inutilizzabile.",
    "sections": [
      {
        "title": "Segui un ordine fisso, non un'intuizione",
        "body": "La maggior parte dei mancati avvii deriva da poche cause, e verificarle in un ordine coerente evita di perdere tempo. L'ordine seguente va dalla verifica più rapida a quella più impegnativa, così ti fermi appena trovi la causa reale.",
        "points": [
          "Prima la completezza del download.",
          "Poi estensione e sistema rilevato.",
          "Infine BIOS e scelta del core."
        ]
      },
      {
        "title": "Verifica uno: il file è davvero sul dispositivo?",
        "body": "Se il file è un segnaposto nel cloud, l'emulatore non riceve nulla di utilizzabile anche se il file compare nella libreria. Aprilo nell'app File per forzare il download, attendi che finisca, poi importa di nuovo.",
        "points": [
          "Un elemento in grigio o in attesa non è scaricato.",
          "Completa il download prima di riprovare.",
          "Questa è la causa più comune in assoluto."
        ]
      },
      {
        "title": "Verifica due: l'estensione corrisponde al sistema?",
        "body": "Ogni sistema ha la propria estensione, e una mancata corrispondenza produce un file che il core non riesce a interpretare. Rinominare un'estensione non converte nulla, quindi un file .gb rinominato in .gba resta un gioco Game Boy e non si comporterà come un titolo Game Boy Advance.",
        "points": [
          ".gb, .gbc, .gba e .nds sono sistemi diversi.",
          "Rinominare non converte mai un gioco.",
          "Conferma il sistema rilevato nella libreria."
        ]
      },
      {
        "title": "Verifica tre: manca un BIOS o un set parent?",
        "body": "Alcuni sistemi e famiglie da sala richiedono un file BIOS aggiuntivo, e i set da sala possono dipendere da un set parent. Il core segnala ciò che manca; leggi con precisione quel messaggio, perché un BIOS mancante e un parent mancante sono problemi diversi con soluzioni diverse.",
        "points": [
          "Leggi il testo esatto dell'errore.",
          "Un neogeo.zip da sala non è un BIOS per console portatile.",
          "Retropa non fornisce download di BIOS."
        ]
      },
      {
        "title": "Verifica quattro: prova l'altro core",
        "body": "Diversi sistemi hanno più di un core disponibile. Se un file è completo, correttamente nominato e senza dipendenze mancanti, cambiare core è il test successivo, perché i core differiscono nel rigore con cui emulano l'hardware originale.",
        "points": [
          "Annota quale core ha fallito.",
          "Cambia il core e riprova una volta.",
          "Confronta con un secondo gioco sullo stesso core."
        ]
      },
      {
        "title": "Cosa includere in una richiesta di assistenza",
        "body": "Se un gioco continua a non partire, le informazioni utili sono la versione dell'app, il sistema, il core selezionato e il testo esatto dell'errore. Non allegare file di gioco commerciali o file BIOS, perché non servono a diagnosticare il problema e non vanno condivisi.",
        "points": [
          "Versione dell'app e sistema.",
          "Core selezionato e testo dell'errore.",
          "Non allegare mai ROM commerciali o file BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "Il gioco si apre su una schermata nera. Cosa significa?",
        "answer": "Di solito un download incompleto, una variante di file non supportata o una dipendenza mancante come un BIOS. Controlla prima il download, poi l'estensione, poi l'errore esatto segnalato dal core."
      },
      {
        "id": "worked-before",
        "question": "Un gioco funzionava prima e ora no. Perché?",
        "answer": "Controlla se sono cambiati la versione dell'app, il core selezionato o la posizione del file. Gli stati di salvataggio sono specifici del core, quindi uno stato scritto da un core diverso potrebbe non caricarsi anche se il gioco in sé funziona ancora."
      },
      {
        "id": "support",
        "question": "Cosa dovrei inviare con una richiesta di assistenza?",
        "answer": "La versione dell'app, il sistema, il core selezionato e il testo esatto dell'errore. Non allegare file di gioco commerciali o file BIOS."
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
    "title": "Retropa Plus: cosa è gratuito e cosa richiede Plus",
    "description": "Quali funzioni di Retropa sono gratuite e quali richiedono Retropa Plus: sistemi portatili, famiglie da sala, skin premium, filtri avanzati e modalità console. I prezzi attuali sono mostrati nell'app.",
    "summary": "Retropa è gratuito da scaricare. L'emulazione per console portatili è disponibile senza pagare; le famiglie da sala, le skin premium e i filtri video avanzati fanno parte di Retropa Plus. I prezzi attuali e i piani disponibili sono mostrati dentro l'app.",
    "sections": [
      {
        "title": "Cosa è disponibile gratuitamente",
        "body": "Scaricare Retropa non costa nulla e l'emulazione per console portatili funziona senza acquisto. Puoi importare i tuoi file di gioco, usare le skin standard, usare i preset video convenzionali e configurare stati di salvataggio e mappatura dei controller. Nulla nell'importazione di un file attiva un pagamento.",
        "points": [
          "Download gratuito.",
          "Sistemi portatili disponibili senza acquisto.",
          "Skin standard e preset video convenzionali inclusi.",
          "Importare un gioco non sblocca né richiede mai una funzione a pagamento."
        ]
      },
      {
        "title": "Cosa richiede Retropa Plus",
        "body": "Retropa Plus copre le famiglie da sala, le skin premium e i filtri video avanzati. Sono capacità aggiuntive e non limitazioni a ciò che avevi già: il gioco su console portatile continua a funzionare sia che tu sia abbonato sia che non lo sia.",
        "points": [
          "Famiglie da sala: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Skin premium.",
          "Filtri CRT e LCD avanzati.",
          "Modalità console e flussi di salvataggio avanzati."
        ]
      },
      {
        "title": "Perché il supporto arcade fa parte di Plus",
        "body": "L'emulazione da sala è un corpo di lavoro a sé: più schede, set multi-file, dipendenze BIOS e compatibilità per singolo set. Trattarla come capacità aggiuntiva mantiene semplice il livello gratuito e rende l'esperienza su console portatile disponibile a tutti senza costi.",
        "points": [
          "L'hardware da sala non è hardware per console portatile.",
          "I set da sala sono multi-file e possono richiedere un BIOS.",
          "Il supporto per console portatile non dipende da Plus."
        ]
      },
      {
        "title": "Giochi e file BIOS non sono mai inclusi",
        "body": "Nessun livello di Retropa fornisce file di gioco o file BIOS, perché l'app è un emulatore. Fornisci tu contenuti che hai il diritto di usare, e questo requisito non cambia con un acquisto. Un abbonamento sblocca capacità dell'emulatore, non contenuti.",
        "points": [
          "Nessun gioco è incluso in alcun livello.",
          "Nessun file BIOS è fornito.",
          "Importa solo contenuti che hai il diritto di usare."
        ]
      },
      {
        "title": "Dove vedere i prezzi attuali",
        "body": "I prezzi, i piani disponibili e le eventuali offerte regionali sono mostrati dentro l'app, dove l'App Store può presentarli nella tua valuta locale. Questa pagina non elenca di proposito i prezzi, così un cambiamento di prezzo non la renderà mai obsoleta.",
        "points": [
          "I prezzi sono mostrati nell'app.",
          "La disponibilità può variare da una regione all'altra.",
          "Gli acquisti sono gestiti dall'App Store."
        ]
      },
      {
        "title": "Gli acquisti sono gestiti dall'App Store",
        "body": "Tutti gli acquisti e gli abbonamenti passano dall'App Store. Retropa non elabora pagamenti sul web e questo sito non chiede mai i dati della carta. Rinnovi, disdette e rimborsi sono gestiti dall'App Store secondo le sue condizioni.",
        "points": [
          "Nessun pagamento viene raccolto su questo sito.",
          "Gestisci o annulla un abbonamento nelle impostazioni dell'App Store.",
          "I rimborsi seguono le politiche dell'App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Posso usare Retropa senza pagare?",
        "answer": "Sì. Scaricare Retropa è gratuito e l'emulazione per console portatili funziona senza acquisto. Le famiglie da sala, le skin premium e i filtri avanzati richiedono Retropa Plus."
      },
      {
        "id": "price",
        "question": "Quanto costa Retropa Plus?",
        "answer": "I prezzi e i piani disponibili sono mostrati dentro l'app, dove l'App Store può presentarli nella tua valuta locale. Questa pagina non elenca i prezzi, così i cambiamenti di prezzo non la rendono mai obsoleta."
      },
      {
        "id": "buy-here",
        "question": "Posso abbonarmi su questo sito?",
        "answer": "No. Gli acquisti sono gestiti interamente tramite l'App Store. Questo sito non raccoglie mai dati di pagamento."
      },
      {
        "id": "content",
        "question": "Plus include i giochi?",
        "answer": "No. Nessun livello di Retropa fornisce file di gioco o BIOS. Importi contenuti che hai il diritto di usare."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
