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
    "title": "Emulador de Game Boy para iPhone e iPad | Retropa",
    "description": "Rode seus próprios arquivos .gb no iPhone e no iPad com o Retropa. Qual núcleo roda GB, como importar um jogo, como ajustar tela e Controle e o que verificar quando um arquivo não abre.",
    "summary": "O Retropa roda jogos de Game Boy a partir dos seus próprios arquivos .gb no iPhone e no iPad, com quatro núcleos intercambiáveis, Skins de portátil, tratamentos LCD e CRT e mapeamento de Controle.",
    "sections": [
      {
        "title": "Comece com um arquivo .gb",
        "body": "O Retropa roda jogos de Game Boy a partir de arquivos que você já tem. O app é gratuito para baixar e não inclui jogos nem arquivos de BIOS, então prepare o arquivo do jogo antes de começar e mantenha uma cópia intacta fora do app como backup.",
        "points": [
          ".gb é um jogo de Game Boy; .gbc pertence ao Game Boy Color.",
          "Renomear a extensão de um arquivo não converte o jogo para outro sistema.",
          "Mantenha o arquivo original até que o jogo rode corretamente."
        ]
      },
      {
        "title": "Qual núcleo roda jogos de Game Boy",
        "body": "O Retropa traz mais de um núcleo capaz de rodar títulos de Game Boy, e você pode alternar entre eles jogo a jogo. mGBA e SkyEmu cobrem GB, GBC e GBA, o SameBoy é focado especificamente em GB e GBC, e o JGenesis cobre GB junto com seus sistemas Sega. Se um núcleo apresentar problema com um título específico, experimente outro antes de concluir que o arquivo está corrompido.",
        "points": [
          "O mGBA é uma boa primeira escolha para o dia a dia.",
          "O SameBoy prioriza a precisão em GB e GBC.",
          "O núcleo selecionado é lembrado por jogo."
        ]
      },
      {
        "title": "Importe o jogo pelo app Arquivos",
        "body": "Confirme que o arquivo foi baixado para o dispositivo, e não apenas exibido como um item na nuvem no app Arquivos. Abra a entrada de importação na biblioteca do Retropa e selecione o jogo. Assim que ele aparecer, abra-o e confirme se imagem, som e Controles na tela padrão funcionam antes de personalizar qualquer coisa."
      },
      {
        "title": "Escolha um layout que caiba na tela original",
        "body": "Um layout de Game Boy precisa de direcional, A e B, além de Start e Select. O modo retrato coloca a tela acima dos Controles, o que favorece jogar com uma mão; o modo paisagem dá mais espaço aos botões. Verifique se a área do jogo não fica coberta pela Skin em nenhuma orientação e se todos os seis comandos estão ao alcance.",
        "points": [
          "Teste cada botão, não apenas a arte.",
          "Pacotes .deltaskin do Delta podem ser importados, mas uma Skin de DS ou GBA não é um layout de GB.",
          "Skins premium e Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Tela verde, grade de LCD ou pixels limpos",
        "body": "Comece pela imagem original para ter uma referência. Uma predefinição DMG resgata o LCD reflexivo de quatro tons do portátil original, uma grade de LCD adiciona uma estrutura de subpixels e um tratamento CRT cria um visual completamente diferente. Os Filtros avançados do Retropa se adaptam à área de saída real, em vez de exigir um fator de escala inteiro, então a imagem mantém a proporção em todos os tamanhos de iPhone e iPad.",
        "points": [
          "Filtros mudam a apresentação, não a resolução do jogo.",
          "Um Filtro não resolve um problema de compatibilidade do arquivo.",
          "Compare com a imagem original antes de manter uma predefinição."
        ]
      },
      {
        "title": "Quando uma importação ou um Save de Game Boy falha",
        "body": "Verifique primeiro a extensão do arquivo, o sistema selecionado e a mensagem de erro exata. Se o app Arquivos ainda não terminou de baixar o original, conclua essa etapa antes de importar novamente. O Save próprio do jogo e um save state do emulador são coisas diferentes; não renomeie um para virar o outro e mantenha um backup antes de mover um Save entre núcleos ou apps.",
        "points": [
          "Anote a versão do app, o sistema, o núcleo e o erro para o suporte.",
          "Não anexe arquivos de ROM ou BIOS comerciais a uma solicitação de suporte.",
          "Teste a Skin padrão e um Filtro simples ao isolar um problema."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "O Retropa inclui jogos de Game Boy?",
        "answer": "Não. O Retropa é um emulador e não fornece jogos nem arquivos de BIOS. Você importa arquivos que tem o direito de usar, e apenas esses."
      },
      {
        "id": "bios-needed",
        "question": "A emulação de Game Boy precisa de um arquivo de BIOS?",
        "answer": "Títulos de GB e GBC geralmente rodam sem arquivo de BIOS nos núcleos que o Retropa traz. Se um núcleo informar que precisa de BIOS, siga o aviso exibido para aquele núcleo em vez de importar um arquivo sem relação."
      },
      {
        "id": "gb-vs-gbc",
        "question": "O Retropa pode abrir um arquivo .gbc como jogo de Game Boy?",
        "answer": "Um arquivo .gbc pertence ao Game Boy Color. O Retropa o executa no sistema correspondente, e renomear a extensão não muda o que o arquivo é."
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
    "title": "Emulador de Game Boy Color para iPhone e iPad | Retropa",
    "description": "Jogue seus próprios jogos .gbc no iPhone e no iPad. Paletas de cores, títulos exclusivos de GBC, escolha de núcleo, passos de importação e as verificações para quando um jogo não inicia.",
    "summary": "O Retropa roda jogos de Game Boy Color a partir dos seus próprios arquivos .gbc, com tratamento de paletas, seleção de núcleo por jogo e tratamentos de tela que combinam com a tela reflexiva original.",
    "sections": [
      {
        "title": "Prepare um arquivo .gbc",
        "body": "Jogos de Game Boy Color usam a extensão .gbc. O Retropa não inclui jogos nem arquivos de BIOS, então prepare o arquivo você mesmo, mantenha um backup separado e importe apenas conteúdo que você tem o direito de usar.",
        "points": [
          ".gbc é um jogo de Game Boy Color.",
          "Jogos do Game Boy original usam .gb e também rodam no Retropa.",
          "Não renomeie um arquivo .gb para .gbc para forçar cores."
        ]
      },
      {
        "title": "Escolha de núcleo para Game Boy Color",
        "body": "O SameBoy é o núcleo focado em GB e GBC, e o mGBA e o SkyEmu também cobrem o Game Boy Color. Se um título mostrar cores ou temporização incorretas, trocar de núcleo é um primeiro teste legítimo, porque cada núcleo lida com o hardware de forma um pouco diferente.",
        "points": [
          "O SameBoy é a primeira escolha natural para títulos de GBC.",
          "O mGBA cobre GB, GBC e GBA em um único núcleo.",
          "A seleção de núcleo fica guardada por jogo."
        ]
      },
      {
        "title": "Importação e primeira execução",
        "body": "Baixe o arquivo para o armazenamento local, para que o app Arquivos não esteja entregando um item na nuvem, e depois escolha-o na entrada de importação da biblioteca do Retropa. Abra o jogo e verifique cores, som e o layout de toque padrão antes de aplicar Skins ou Filtros, para que qualquer problema posterior seja fácil de identificar.",
        "points": [
          "Teste uma cena que use cores, não apenas a tela de título.",
          "Verifique o canal de som além da imagem.",
          "Mantenha o arquivo original intacto durante o diagnóstico."
        ]
      },
      {
        "title": "Imagem e layout para um portátil colorido",
        "body": "A tela do Game Boy Color é pequena e reflexiva. Uma predefinição LCD Grid adiciona uma estrutura de subpixels que combina com ela, enquanto uma predefinição DMG resgata de propósito o painel monocromático mais antigo. Os Filtros avançados do Retropa partem da área de saída real, e não de um múltiplo inteiro fixo, então as proporções se mantêm em todos os tamanhos de dispositivo.",
        "points": [
          "Compare cada predefinição com a imagem original.",
          "Os Filtros avançados exigem o Retropa Plus.",
          "Verifique se a Skin deixa a área do jogo desobstruída."
        ]
      },
      {
        "title": "Controles e orientação",
        "body": "Um layout de Game Boy Color precisa de direcional, A e B, além de Start e Select. O modo retrato combina com sessões curtas; o modo paisagem dá mais espaço aos botões e pode ser mais confortável em um iPhone maior. Confirme se cada comando está ao alcance na orientação em que você realmente joga."
      },
      {
        "title": "Quando um jogo de Game Boy Color não inicia",
        "body": "Verifique primeiro a extensão e o sistema selecionado, depois leia o erro exato. Se a região ou a paleta parecer errada, compare os núcleos antes de mudar configurações. Saves criados em um núcleo podem não ser lidos por outro, então faça backup antes de trocar.",
        "points": [
          "Anote a versão do app, o sistema, o núcleo e o erro.",
          "Não envie arquivos de ROM ou BIOS comerciais ao suporte.",
          "Volte à Skin padrão e a um Filtro simples para isolar problemas."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Os jogos de Game Boy Color estão incluídos?",
        "answer": "Não. O Retropa é um emulador e não fornece jogos nem arquivos de BIOS. Importe apenas arquivos que você tem o direito de usar."
      },
      {
        "id": "gb-on-gbc",
        "question": "Também posso jogar jogos do Game Boy original?",
        "answer": "Sim. Arquivos .gb do Game Boy original também rodam no Retropa, nos mesmos núcleos que rodam o Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Renomear um arquivo .gb para .gbc adiciona cores?",
        "answer": "Não. A extensão não muda o que o arquivo contém, então renomear não habilita os recursos do Game Boy Color."
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
    "title": "Emulador de NES para iPhone e iPad | Retropa",
    "description": "Rode seus próprios jogos de NES no iPhone e no iPad. Formatos aceitos como .nes, .fds e .nsf, escolha de núcleo, passos de importação, mapeamento de Controle e solução de problemas.",
    "summary": "O Retropa roda jogos de NES a partir dos seus próprios arquivos, cobrindo .nes, .fds e formatos de áudio NSF em dois núcleos dedicados, com mapeamento de Controle e tratamentos CRT.",
    "sections": [
      {
        "title": "Formatos de arquivo que o Retropa aceita para NES",
        "body": "O suporte a NES no Retropa cobre mais de uma extensão. Além da imagem de cartucho .nes mais comum, os núcleos aceitam imagens do Famicom Disk System e arquivos de som NSF, além das variantes de contêiner iNES simples e unificada.",
        "points": [
          ".nes é a imagem de cartucho padrão de NES.",
          ".fds cobre conteúdo do Famicom Disk System.",
          ".nsf e .nsfe são arquivos de som, não jogos jogáveis.",
          "Contêineres ZIP e RetroPack podem ser importados e abertos no próprio lugar."
        ]
      },
      {
        "title": "Dois núcleos, um sistema",
        "body": "O Retropa traz RusticoNES e TetaNES para títulos de NES, e o JGenesis também cobre o sistema. Testar um segundo núcleo é a forma mais rápida de distinguir uma ROM problemática de uma diferença real de emulação, e a escolha é lembrada por jogo.",
        "points": [
          "O RusticoNES é uma opção padrão sólida para jogos em cartucho.",
          "O TetaNES é a alternativa a testar quando algo se comporta mal.",
          "Arquivos de áudio NSF se comportam de forma diferente de jogos em qualquer núcleo."
        ]
      },
      {
        "title": "Importe um jogo de NES",
        "body": "Baixe o arquivo localmente primeiro, para que o app Arquivos não esteja devolvendo um item na nuvem, e depois abra a entrada de importação na biblioteca do Retropa. Inicie o jogo com o layout padrão e confirme imagem, áudio e botões padrão antes de mudar Skins ou Filtros."
      },
      {
        "title": "Lidando com um Controle de dois botões",
        "body": "O Controle do NES é deliberadamente minimalista: um direcional, A, B, Start e Select. Em uma tela sensível ao toque, a tentação é aproximar os botões, então verifique se a entrada na diagonal ainda é registrada e se Start e Select não são pressionados por acidente durante o jogo. Um Controle físico pareado resolve a maior parte disso.",
        "points": [
          "Pareie um Controle no iOS primeiro e depois verifique o mapeamento no Retropa.",
          "Confirme as diagonais, não apenas as quatro direções cardeais.",
          "Teste tanto o modo retrato quanto o paisagem, se você joga nos dois."
        ]
      },
      {
        "title": "Deixando a imagem correta",
        "body": "A saída do NES foi pensada para uma televisão de definição padrão, então um tratamento CRT costuma ficar mais próximo da experiência original do que uma grade de pixels limpa. Predefinições de Scanline e de grade de abertura estão disponíveis, e os Filtros avançados do Retropa se adaptam à área de saída real, e não a um múltiplo inteiro fixo.",
        "points": [
          "Comece pela imagem original como referência.",
          "Sobreposições convencionais de Scanline podem cintilar em escalas fracionárias.",
          "Os Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Quando um jogo de NES não carrega",
        "body": "Leia o erro exato antes de mudar qualquer coisa. Um dump ruim, um mapper não suportado, uma imagem sem cabeçalho ou um jogo de disco sem a BIOS são problemas diferentes. Verifique a extensão e o sistema selecionado, depois teste o outro núcleo de NES.",
        "points": [
          "Anote a versão do app, o núcleo e o texto completo do erro para o suporte.",
          "Mantenha o arquivo original intacto durante o diagnóstico.",
          "Não anexe arquivos de ROM ou BIOS comerciais a uma solicitação de suporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Quais formatos de NES o Retropa abre?",
        "answer": "O Retropa aceita arquivos .nes, .fds, .nsf, .nsfe, .unf e .unif, e também pode abrir contêineres ZIP e RetroPack diretamente."
      },
      {
        "id": "nsf",
        "question": "Posso jogar um arquivo .nsf como se fosse um jogo?",
        "answer": "Não. Arquivos NSF são dados de som, então reproduzem áudio em vez de um jogo. Use um arquivo .nes ou .fds para jogar um título."
      },
      {
        "id": "gamepad",
        "question": "Um Controle físico funciona com jogos de NES?",
        "answer": "Sim. Controles compatíveis podem ser pareados com o iOS e mapeados dentro do Retropa. Verifique o mapeamento após o pareamento, porque a ordem dos botões nem sempre é a esperada."
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
    "title": "Emulador de SNES para iPhone e iPad | Retropa",
    "description": "Jogue seus próprios jogos de SNES no iPhone e no iPad. Formatos .sfc e .smc aceitos, o núcleo LakeSnes, mapeamento de Controle para seis botões e passos de solução de problemas.",
    "summary": "O Retropa roda jogos de SNES a partir dos seus próprios arquivos .sfc e .smc no núcleo LakeSnes, com mapeamento de Controle de seis botões, save states e tratamentos de tela CRT.",
    "sections": [
      {
        "title": "Formatos de arquivo de SNES",
        "body": "Imagens de Super Nintendo geralmente são distribuídas como .sfc ou .smc, e o Retropa também aceita vários formatos relacionados de contêiner e de copiadora. Se um arquivo falhar, a extensão é a primeira coisa a verificar, porque um cabeçalho incompatível é uma causa comum de jogo que não inicializa.",
        "points": [
          ".sfc e .smc são as imagens padrão de SNES.",
          "O Retropa também lista cobertura para .fig, .swc, .bs e .st.",
          "Contêineres ZIP e RetroPack podem ser abertos diretamente."
        ]
      },
      {
        "title": "O núcleo LakeSnes",
        "body": "O Retropa roda títulos de SNES no LakeSnes, e o JGenesis também lista o sistema. Se um jogo específico mostrar problema de temporização ou de gráficos, confirme que o arquivo é uma imagem limpa antes de culpar o núcleo, e confira a versão atual do app nas notas de versão.",
        "points": [
          "O LakeSnes é o núcleo dedicado a SNES.",
          "Alguns títulos dependem de coprocessadores específicos do cartucho.",
          "A seleção de núcleo por jogo é lembrada."
        ]
      },
      {
        "title": "Importação e primeira execução",
        "body": "Mantenha o arquivo no armazenamento local em vez de um item na nuvem, e depois selecione-o na entrada de importação da biblioteca do Retropa. Abra o jogo e verifique imagem, áudio e Controles de toque padrão antes de mudar qualquer ajuste de apresentação, para que problemas posteriores tenham uma causa clara."
      },
      {
        "title": "Seis botões precisam de espaço de verdade",
        "body": "O Controle do SNES adiciona X, Y, L e R ao direcional, A, B, Start e Select, e muitos jogos esperam pressionamentos simultâneos. Em uma tela sensível ao toque, vale o tempo de espalhar o layout pelo modo paisagem e testar cada combinação. Um Controle físico pareado é a opção mais confiável para jogos de ação.",
        "points": [
          "Verifique L e R, que são fáceis de esquecer no mapeamento.",
          "Teste uma diagonal junto com um botão de ombro ao mesmo tempo.",
          "Confirme se a Skin deixa a área do jogo livre."
        ]
      },
      {
        "title": "Escolhendo um tratamento de tela",
        "body": "A arte do SNES foi desenhada para um CRT, então predefinições de Scanline e de grade de abertura geralmente ficam mais próximas do original do que uma grade de pixels crua. Os Filtros avançados do Retropa consideram a área de saída real em vez de exigir um múltiplo inteiro, o que faz diferença em celulares, onde a altura disponível raramente é divisível de forma exata.",
        "points": [
          "Tome a imagem original como referência.",
          "Sobreposições simples de Scanline podem cintilar em escalas fracionárias.",
          "Os Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Quando um jogo de SNES não inicia",
        "body": "Verifique a extensão, o sistema selecionado e o texto exato do erro. Títulos que dependem de um chip especial no cartucho costumam ser os suspeitos quando um jogo falha enquanto outros funcionam. Mantenha o arquivo original intacto durante os testes e tente mudar para o núcleo alternativo.",
        "points": [
          "Anote a versão do app, o núcleo e o erro para o suporte.",
          "Mudar o Filtro não resolve um problema de chip de cartucho.",
          "Não envie arquivos de ROM ou BIOS comerciais ao suporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Faz diferença usar .sfc ou .smc?",
        "answer": "Os dois são imagens padrão de SNES e o Retropa aceita qualquer um deles. A extensão em si não muda o jogo."
      },
      {
        "id": "chip-games",
        "question": "Por que um jogo falha enquanto outros funcionam?",
        "answer": "Alguns títulos dependem de hardware adicional no cartucho. Se o arquivo for uma imagem limpa e outros jogos rodarem, essa dependência é a causa provável, e trocar de núcleo é o próximo teste."
      },
      {
        "id": "saves",
        "question": "Os save states são portáveis entre núcleos?",
        "answer": "Não de forma confiável. Saves de bateria e save states são artefatos diferentes, e um estado gravado por um núcleo pode não carregar em outro, então mantenha um backup antes de trocar."
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
    "title": "Emulador de Sega Genesis e Mega Drive para iPhone | Retropa",
    "description": "Jogue seus próprios jogos de Sega Genesis e Mega Drive no iPhone e no iPad. Formatos .md, .smd e .gen, o núcleo JGenesis, mapeamento de seis botões e solução de problemas.",
    "summary": "O Retropa roda jogos de Sega Genesis e Mega Drive a partir dos seus próprios arquivos no núcleo JGenesis, com suporte a Controle de seis botões, save states e tratamentos de tela CRT.",
    "sections": [
      {
        "title": "Genesis e Mega Drive são o mesmo sistema",
        "body": "O console foi lançado como Mega Drive na Europa, no Japão e na maior parte da Ásia, e como Genesis na América do Norte. O hardware é o mesmo, então um arquivo de jogo funciona de qualquer forma; só o nome na caixa muda. O Retropa lista os dois, e é por isso que as extensões de arquivo variam um pouco entre as regiões.",
        "points": [
          ".md e .smd são as imagens usuais de Mega Drive.",
          ".gen é a extensão comum na América do Norte.",
          "A extensão não muda o hardware que o jogo espera."
        ]
      },
      {
        "title": "O núcleo JGenesis",
        "body": "O Retropa roda títulos de Genesis e Mega Drive no JGenesis, que também cobre Master System, Game Gear e vários sistemas portáteis. Como um único núcleo atende várias plataformas, o sistema selecionado por jogo importa: importar um título de Master System com o sistema definido como Genesis é uma fonte comum de confusão.",
        "points": [
          "O JGenesis cobre MD, GEN, SMS e GG.",
          "Confirme o sistema detectado antes de relatar um problema.",
          "A escolha de núcleo e de sistema é lembrada por jogo."
        ]
      },
      {
        "title": "Importe um jogo de Mega Drive",
        "body": "Guarde o arquivo localmente em vez de deixá-lo como item na nuvem, e depois escolha-o na entrada de importação da biblioteca do Retropa. Abra o jogo e confirme imagem, áudio e layout de toque padrão antes de aplicar uma Skin ou um Filtro."
      },
      {
        "title": "Mapeando um Controle de seis botões",
        "body": "Os Controles do Genesis vinham em versões de três e de seis botões, e alguns jogos se comportam de forma diferente conforme o modelo detectado. Em um layout de toque, confirme se A, B, C e, quando oferecidos, X, Y, Z e Mode estão todos ao alcance, e teste uma combinação que o jogo realmente use.",
        "points": [
          "Verifique tanto o mapeamento de três botões quanto o de seis botões.",
          "Confira o Start, que também funciona como pausa em muitos títulos.",
          "Um Controle físico pareado evita a maior parte dos toques errados."
        ]
      },
      {
        "title": "Tratamento de tela para um console de 16 bits",
        "body": "A saída do Mega Drive é destinada a um CRT, então uma predefinição de Scanline ou de grade de abertura geralmente fica mais próxima do original do que uma grade de pixels crua, especialmente para o dithering que a TV teria misturado. Os Filtros avançados do Retropa trabalham a partir da área de saída real, e não de um múltiplo inteiro fixo.",
        "points": [
          "Comece pela imagem original e depois compare.",
          "Padrões de dithering são um bom teste para uma predefinição de Filtro.",
          "Os Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Quando um jogo de Genesis não inicia",
        "body": "Verifique a extensão, a seleção de sistema e o erro exato. Incompatibilidades de região e de sistema são mais comuns aqui do que em sistemas de plataforma única, porque um único núcleo atende vários consoles. Mantenha o arquivo original intacto e confirme o sistema detectado antes de mudanças mais profundas.",
        "points": [
          "Anote a versão do app, o sistema detectado, o núcleo e o erro.",
          "Não envie arquivos de ROM ou BIOS comerciais ao suporte.",
          "Mantenha um backup separado antes de mover Saves entre núcleos."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive é a mesma coisa que Genesis?",
        "answer": "Sim. É um único console com dois nomes regionais, então um arquivo de jogo roda com qualquer um dos nomes."
      },
      {
        "id": "six-button",
        "question": "O Retropa suporta Controles de seis botões?",
        "answer": "O layout de toque e o mapeamento de Controle externo cobrem os botões extras, e alguns jogos mudam de comportamento conforme a variante de Controle que detectam."
      },
      {
        "id": "system-detect",
        "question": "Por que meu jogo é tratado como o sistema errado?",
        "answer": "Um único núcleo atende várias plataformas Sega, então verifique o sistema detectado para esse jogo e corrija-o antes de relatar um problema de compatibilidade."
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
    "title": "Emulador de Game Gear para iPhone e iPad | Retropa",
    "description": "Jogue seus próprios jogos .gg de Game Gear no iPhone e no iPad. Qual núcleo roda esses jogos, como importar um arquivo, como ajustar a tela e o que verificar quando um jogo falha.",
    "summary": "O Retropa roda jogos de Game Gear a partir dos seus próprios arquivos .gg pelo núcleo JGenesis, com um visual de tela retroiluminada, Skins de portátil e mapeamento completo de Controle.",
    "sections": [
      {
        "title": "Prepare um arquivo .gg",
        "body": "Jogos de Game Gear usam a extensão .gg. O Retropa não inclui jogos nem arquivos de BIOS, então deixe o arquivo pronto e mantenha uma cópia fora do app antes de importar.",
        "points": [
          ".gg é a extensão do Game Gear.",
          "Um arquivo .sms pertence ao Master System, não ao Game Gear.",
          "Renomear não converte um no outro."
        ]
      },
      {
        "title": "Qual núcleo cuida do Game Gear",
        "body": "O JGenesis cobre o Game Gear junto com Mega Drive, Genesis e Master System. Como um único núcleo atende várias plataformas Sega, confirme se o jogo foi detectado como Game Gear antes de investigar um problema de compatibilidade."
      },
      {
        "title": "Importação e primeira execução",
        "body": "Baixe o arquivo localmente e depois selecione-o na entrada de importação da biblioteca do Retropa. Confirme imagem, áudio e Controles padrão antes de aplicar uma Skin, para que qualquer problema posterior tenha uma causa óbvia."
      },
      {
        "title": "Uma tela pequena e retroiluminada",
        "body": "O painel do Game Gear era retroiluminado e pequeno, então um tratamento LCD Grid tende a combinar com ele, enquanto uma predefinição CRT mais forte vai parecer bem mais pesada do que o hardware original. Os Filtros avançados do Retropa se adaptam à área de saída real em vez de exigir um múltiplo inteiro.",
        "points": [
          "Compare cada predefinição com a imagem original.",
          "Os Filtros avançados exigem o Retropa Plus.",
          "Verifique se a área do jogo não fica coberta pela Skin."
        ]
      },
      {
        "title": "Controles e orientação",
        "body": "O hardware do Game Gear trazia um direcional, dois botões de ação e Start. A pequena quantidade de botões torna um layout em retrato confortável, mas verifique se Start está ao alcance sem mudar a pegada e teste as diagonais."
      },
      {
        "title": "Quando um jogo de Game Gear não roda",
        "body": "Confirme a extensão, o sistema detectado e o texto exato do erro. Um arquivo de Master System importado como Game Gear, ou o contrário, é uma causa frequente. Mantenha o arquivo original intacto durante os testes.",
        "points": [
          "Anote a versão do app, o sistema detectado, o núcleo e o erro.",
          "Não envie arquivos de ROM ou BIOS comerciais ao suporte.",
          "Mantenha um backup antes de mover Saves entre núcleos."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear é a mesma coisa que Master System?",
        "answer": "São sistemas intimamente relacionados, mas diferentes, com extensões de arquivo distintas. Um único núcleo roda os dois, então verifique como cada arquivo é detectado."
      },
      {
        "id": "bios",
        "question": "O Game Gear precisa de um arquivo de BIOS?",
        "answer": "Não nos núcleos que o Retropa traz. Se um núcleo informar essa necessidade, siga o aviso daquele núcleo em vez de importar um arquivo sem relação."
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
    "title": "Emulador de Master System para iPhone e iPad | Retropa",
    "description": "Rode seus próprios jogos .sms de Sega Master System no iPhone e no iPad. Cobertura de núcleos, passos de importação, layout de Controle e o que verificar quando um título não inicia.",
    "summary": "O Retropa roda jogos de Sega Master System a partir dos seus próprios arquivos .sms no núcleo JGenesis, com Skins de portátil, tratamentos de tela e mapeamento de Controle.",
    "sections": [
      {
        "title": "Prepare um arquivo .sms",
        "body": "Jogos de Master System usam a extensão .sms. O Retropa não fornece jogos nem arquivos de BIOS, então prepare o arquivo e mantenha um backup fora do app.",
        "points": [
          ".sms é a extensão do Master System.",
          ".gg pertence ao Game Gear e é um sistema diferente.",
          "Contêineres ZIP e RetroPack podem ser abertos diretamente."
        ]
      },
      {
        "title": "Cobertura de núcleos",
        "body": "O JGenesis cuida do Master System junto com Mega Drive, Genesis e Game Gear. Como um único núcleo atende várias plataformas, confirmar o sistema detectado é o primeiro passo de diagnóstico quando um arquivo se comporta de forma inesperada."
      },
      {
        "title": "Importe e verifique",
        "body": "Mantenha o arquivo no armazenamento local e depois escolha-o na entrada de importação da biblioteca do Retropa. Verifique imagem, áudio e layout padrão antes de aplicar uma Skin ou uma predefinição de tela."
      },
      {
        "title": "Dois botões, um direcional",
        "body": "Os Controles do Master System usavam um direcional, dois botões de ação e, em alguns modelos, um botão de pausa no próprio console. Em um layout de toque, vale conferir se a pausa está mapeada em algum lugar ao alcance, porque é fácil esquecê-la."
      },
      {
        "title": "Tratamento de imagem",
        "body": "Títulos de Master System são destinados a uma tela CRT. Predefinições de Scanline e de grade de abertura geralmente ficam mais próximas do original do que uma grade de pixels crua, e os Filtros avançados do Retropa se adaptam à área de saída real em vez de um múltiplo inteiro fixo.",
        "points": [
          "Compare as predefinições com a imagem original.",
          "Os Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Quando um jogo de Master System não inicia",
        "body": "Verifique a extensão, o sistema detectado e o erro exato. Diferenças de região e confusões entre Master System e Game Gear são as causas mais comuns. Mantenha o arquivo original intacto durante o diagnóstico.",
        "points": [
          "Anote a versão do app, o sistema detectado, o núcleo e o erro.",
          "Não anexe arquivos de ROM ou BIOS comerciais a uma solicitação de suporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Como sei se um arquivo é de Master System ou de Game Gear?",
        "answer": "Confira a extensão: .sms é Master System e .gg é Game Gear. O Retropa mostra o sistema detectado para o jogo importado."
      },
      {
        "id": "pause",
        "question": "Onde fica o botão de pausa?",
        "answer": "No hardware original ele ficava no console, e não no Controle. No Retropa ele faz parte do layout na tela, então verifique se está mapeado em uma tecla ao seu alcance."
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
    "title": "Emulador de WonderSwan para iPhone e iPad | Retropa",
    "description": "Jogue seus próprios jogos .ws de WonderSwan no iPhone e no iPad. O núcleo Ares, a orientação vertical, passos de importação e solução de problemas para um portátil pouco comum.",
    "summary": "O Retropa roda jogos de WonderSwan a partir dos seus próprios arquivos .ws no núcleo Ares, incluindo a orientação vertical para a qual o hardware foi projetado.",
    "sections": [
      {
        "title": "Prepare um arquivo .ws",
        "body": "Jogos de WonderSwan usam a extensão .ws, enquanto o WonderSwan Color usa .wsc. O Retropa não inclui jogos nem arquivos de BIOS; prepare o arquivo e mantenha um backup.",
        "points": [
          ".ws é WonderSwan; .wsc é WonderSwan Color.",
          "Os dois são sistemas diferentes, com capacidades diferentes.",
          "Renomear não atualiza um jogo para o modelo colorido."
        ]
      },
      {
        "title": "O núcleo Ares",
        "body": "O Ares cuida do WonderSwan e do WonderSwan Color no Retropa, junto com outros sistemas portáteis. Se um título não inicializar, confirme que o arquivo é uma imagem limpa e que o sistema detectado corresponde à extensão antes de mudar configurações."
      },
      {
        "title": "Importação e primeira execução",
        "body": "Guarde o arquivo localmente e depois selecione-o na entrada de importação da biblioteca do Retropa. Verifique imagem, áudio e Controles padrão antes de aplicar uma Skin ou uma predefinição de tela."
      },
      {
        "title": "Um portátil feito para ser segurado na vertical",
        "body": "O WonderSwan foi projetado para funcionar nas duas orientações, e muitos títulos foram criados para o jogo na vertical. O Retropa suporta layouts em retrato, então verifique se o jogo que você está rodando espera uma tela girada antes de concluir que a imagem está errada.",
        "points": [
          "Teste o modo retrato além do paisagem.",
          "Nem todo título usa a mesma orientação.",
          "Confirme se todos os comandos estão ao alcance na orientação escolhida."
        ]
      },
      {
        "title": "Tratamento de tela",
        "body": "O WonderSwan usava um painel monocromático reflexivo com uma estrutura de pixels bem particular. Uma predefinição LCD Grid tende a combinar com ele, enquanto uma predefinição CRT vai parecer mais pesada do que o hardware original. Os Filtros avançados se adaptam à área de saída real.",
        "points": [
          "Tome a imagem original como referência.",
          "Os Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Quando um jogo de WonderSwan não inicia",
        "body": "Verifique a extensão, o sistema detectado e o erro exato. Instalar um arquivo .wsc como WonderSwan, ou o contrário, é uma confusão comum. Mantenha o arquivo original intacto durante os testes.",
        "points": [
          "Anote a versão do app, o sistema detectado, o núcleo e o erro.",
          "Não envie arquivos de ROM ou BIOS comerciais ao suporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "O modelo colorido muda o arquivo?",
        "answer": "Sim. WonderSwan e WonderSwan Color usam extensões diferentes, e um título colorido pode não se comportar corretamente no sistema monocromático."
      },
      {
        "id": "orientation",
        "question": "Por que a tela parece girada?",
        "answer": "Muitos títulos de WonderSwan foram projetados para o jogo na vertical. Teste o layout em retrato antes de concluir que a imagem está errada."
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
    "title": "Emulador de Neo Geo Pocket para iPhone e iPad | Retropa",
    "description": "Rode seus próprios jogos .ngp e .ngpc de Neo Geo Pocket no iPhone e no iPad. Cobertura de núcleos, os Controles no estilo alavanca e no que isso difere do arcade Neo Geo.",
    "summary": "O Retropa roda jogos de Neo Geo Pocket e Neo Geo Pocket Color a partir dos seus próprios arquivos no núcleo Ares, e é separado da emulação de arcade Neo Geo.",
    "sections": [
      {
        "title": "Neo Geo Pocket não é o arcade Neo Geo",
        "body": "O Neo Geo Pocket e o Neo Geo Pocket Color são consoles portáteis. Eles compartilham a marca com o hardware de arcade Neo Geo MVS e AES, mas são sistemas totalmente diferentes, com arquivos diferentes e núcleos diferentes. O suporte a arcade no Retropa exige o Plus; a emulação do Pocket, não.",
        "points": [
          ".ngp é Neo Geo Pocket; .ngpc e .ngc são o modelo colorido.",
          "Um neogeo.zip de arcade não é um jogo de Pocket.",
          "As bibliotecas de arcade e de Pocket são separadas."
        ]
      },
      {
        "title": "Prepare o arquivo certo",
        "body": "Confira a extensão antes de importar. Um jogo de Pocket é uma única imagem de portátil, enquanto um conjunto de arcade Neo Geo costuma ser formado por vários arquivos de chip mais uma BIOS opcional. Tratar um como se fosse o outro é o erro mais comum nesse sistema."
      },
      {
        "title": "O núcleo Ares",
        "body": "O Ares cuida do Neo Geo Pocket e do Neo Geo Pocket Color junto com outras plataformas portáteis no Retropa. Se um jogo não inicializar, confirme a extensão e o sistema detectado, e depois considere se o arquivo é uma imagem limpa."
      },
      {
        "title": "Uma alavanca de microswitch, não um direcional",
        "body": "O Neo Geo Pocket usava uma alavanca de microswitch com clique, e não um direcional convencional. Na prática, isso significa que diagonais precisas importam mais do que o normal, então ao testar um layout de toque, verifique se a entrada na diagonal é registrada com clareza em vez de checar apenas as quatro direções cardeais.",
        "points": [
          "Teste as diagonais de forma explícita.",
          "Confirme se os dois botões de ação são confortáveis em sessões longas.",
          "Vale usar um Controle físico pareado em jogos de luta."
        ]
      },
      {
        "title": "Tratamento de tela",
        "body": "O painel colorido do Pocket é pequeno e de baixa resolução, então um tratamento LCD leve geralmente combina melhor do que uma predefinição CRT pesada. Os Filtros avançados do Retropa trabalham a partir da área de saída real em vez de exigir um múltiplo inteiro.",
        "points": [
          "Compare com a imagem original.",
          "Os Filtros avançados exigem o Retropa Plus."
        ]
      },
      {
        "title": "Quando um jogo de Pocket não inicia",
        "body": "Confirme a extensão, o sistema detectado e o erro exato. Se você tem arquivos de arcade na biblioteca, verifique se não selecionou um deles. Mantenha o arquivo original intacto durante o diagnóstico.",
        "points": [
          "Anote a versão do app, o sistema detectado, o núcleo e o erro.",
          "Não envie arquivos de ROM ou BIOS comerciais ao suporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Posso jogar jogos de arcade Neo Geo aqui?",
        "answer": "Esse é um sistema separado, com núcleos e arquivos próprios. O Retropa suporta famílias de arcade, e elas exigem o Retropa Plus; a emulação de Neo Geo Pocket é separada."
      },
      {
        "id": "neogeo-zip",
        "question": "Preciso de um neogeo.zip para jogos de Pocket?",
        "answer": "Não. Esse arquivo se refere ao hardware de arcade Neo Geo. Jogos de Pocket não o usam."
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
    "title": "Emulador de Neo Geo para iPhone e iPad | Retropa",
    "description": "Jogue arquivos de arcade Neo Geo MVS compatíveis no iPhone e no iPad com o Retropa. Estrutura dos conjuntos, exigências de BIOS, sets parent e clone e o que verificar quando um jogo não inicializa.",
    "summary": "O Retropa roda conjuntos de arcade Neo Geo compatíveis no iPhone e no iPad, com Controles de toque e externos e Filtros CRT. O jogo de arcade exige o Retropa Plus; jogos e arquivos de BIOS não estão incluídos.",
    "sections": [
      {
        "title": "O arcade Neo Geo precisa do Plus",
        "body": "A emulação de arcade Neo Geo faz parte da família de arcade do Retropa, e os núcleos de arcade exigem o Retropa Plus. Isso é separado do Neo Geo Pocket, que é um sistema portátil coberto pelo suporte padrão a Pocket.",
        "points": [
          "As famílias de arcade exigem o Retropa Plus.",
          "O Neo Geo Pocket é um sistema diferente, portátil.",
          "Jogos e arquivos de BIOS não estão incluídos em nenhum caso."
        ]
      },
      {
        "title": "Um conjunto de arcade não é um único arquivo",
        "body": "A emulação de console geralmente significa um arquivo por jogo. O hardware de arcade funciona de outra forma: um jogo é um conjunto de arquivos de chip, muitas vezes agrupados em um ZIP, e muitos jogos dependem de um conjunto parent ou de uma BIOS. É por isso que um ZIP de arcade se comporta de modo diferente de uma ROM de portátil.",
        "points": [
          "Mantenha o ZIP intacto, a menos que o fluxo de importação peça para descompactá-lo.",
          "Um arquivo de BIOS separado pode ser necessário.",
          "Um conjunto clone pode não conter todos os arquivos de que o núcleo precisa."
        ]
      },
      {
        "title": "Importação e primeira execução",
        "body": "Selecione o conjunto na entrada de importação da biblioteca do Retropa e depois inicie-o com o layout padrão. Se o núcleo informar que falta um arquivo ou uma BIOS, leia essa mensagem com atenção: um conjunto parent ausente e uma BIOS ausente exigem correções diferentes.",
        "points": [
          "Leia o erro exato antes de mudar qualquer coisa.",
          "Mantenha o arquivo original durante o diagnóstico.",
          "Confirme se as entradas de ficha e de start estão ao alcance."
        ]
      },
      {
        "title": "Arquivos de Neo Geo Pocket não funcionam aqui",
        "body": "Se você tem arquivos .ngp ou .ngpc, eles pertencem aos sistemas Pocket, e não à família de arcade. Uma ROM de Pocket ou um ZIP renomeado não substitui um conjunto de arcade, e o contrário também vale.",
        "points": [
          ".ngp e .ngpc são arquivos portáteis de Pocket.",
          "Conjuntos de arcade têm vários arquivos e podem precisar de BIOS.",
          "Verifique o sistema detectado antes de relatar um problema."
        ]
      },
      {
        "title": "Controles e tela de arcade",
        "body": "O hardware de arcade espera um joystick e vários botões de ação, e muitos títulos dependem de pressionamentos simultâneos. O Retropa suporta Controles na tela e Controles externos compatíveis, e inclui tratamentos CRT que combinam com a saída de arcade. Os Filtros avançados exigem o Plus.",
        "points": [
          "Pareie um Controle no iOS antes de mapeá-lo.",
          "Teste uma diagonal junto com um botão ao mesmo tempo.",
          "Predefinições CRT geralmente combinam mais com a saída de arcade do que uma grade crua."
        ]
      },
      {
        "title": "Quando um jogo de Neo Geo não inicia",
        "body": "Verifique a placa selecionada, o conteúdo do conjunto e qualquer exigência de BIOS informada pelo núcleo. Um conjunto clone isolado, sem o parent, ou um conjunto sem um arquivo obrigatório, não vai inicializar, não importa qual Filtro ou Skin seja aplicado.",
        "points": [
          "Anote a versão do app, a placa selecionada, o núcleo e o erro exato.",
          "Mudanças de Filtro ou Skin não corrigem dados de ROM ausentes.",
          "Não anexe arquivos de ROM ou BIOS comerciais a uma solicitação de suporte."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Por que os núcleos de arcade precisam do Plus?",
        "answer": "As famílias de arcade fazem parte do conjunto de recursos pagos, junto com Skins premium e Filtros avançados. Sistemas de Pocket e de cartucho não exigem isso."
      },
      {
        "id": "bios",
        "question": "Preciso de uma BIOS de Neo Geo?",
        "answer": "Muitos conjuntos de arcade esperam uma, e o núcleo vai avisar se ela estiver ausente. Use uma BIOS que você tem o direito de usar; o Retropa não fornece downloads."
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket é a mesma coisa?",
        "answer": "Não. O Pocket é um console portátil com arquivos próprios. Um conjunto de arcade e um jogo de Pocket não são intercambiáveis."
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
    "title": "Núcleo mGBA no iPhone e iPad | Retropa",
    "description": "Use o mGBA no Retropa para Game Boy, Game Boy Color e Game Boy Advance. Formatos do catálogo, verificações na primeira execução, cuidados com Saves e troca de núcleo no Plus.",
    "summary": "O mGBA cobre a família de portáteis Game Boy no Retropa. Comece com o layout padrão e a imagem original e depois verifique uma cena real de jogo antes de mudar ajustes de apresentação.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do mGBA: https://github.com/mgba-emu/mgba. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Primeira execução em todas as gerações de portáteis",
        "body": "Baixe seu arquivo localmente no app Arquivos, importe-o pela biblioteca do Retropa e confirme o sistema detectado. Um título de Game Boy Color precisa do seu caminho de hardware em cores; mudar o nome do arquivo não é uma forma de adicionar ou remover recursos de cor. No Game Boy Advance, teste L e R, além dos botões frontais, porque um layout criado para os portáteis mais antigos pode omiti-los.",
        "points": [
          "Confira som e entrada depois da tela de título.",
          "Teste a Skin padrão antes de importar um layout personalizado.",
          "Mantenha o arquivo original fora do app."
        ]
      },
      {
        "title": "Separe a emulação dos efeitos de imagem",
        "body": "Se uma cena parece errada, compare primeiro com os Filtros desativados. Um tratamento de tela verde muda a cor de propósito, e uma grade de LCD muda a aparência dos pixels de propósito. Esses efeitos não conseguem estabelecer se o mGBA está renderizando o jogo de forma incorreta. Em caso de problema de áudio ou de sincronização, anote uma cena reproduzível e a versão do app, em vez de julgar apenas pelo logotipo de abertura."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "mGBA — Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "mGBA — Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "mGBA — Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "Limites do escopo de portáteis",
        "body": "O mGBA não é o caminho para Nintendo DS no Retropa. Um arquivo de DS precisa do núcleo de DS do catálogo, e não de uma imagem de Game Boy Advance renomeada. Da mesma forma, um save state de outro emulador não é um arquivo de jogo e não deve ser importado como se fosse. Siga o aviso de BIOS do sistema selecionado, se aparecer; o Retropa não fornece firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Posso trocar o núcleo de apenas um jogo?",
        "answer": "Sim, com o Retropa Plus. A seleção é armazenada por jogo, mas faça backup dos Saves antes de mudá-la e não espere que os estados funcionem entre núcleos."
      },
      {
        "id": "display",
        "question": "Outro Filtro resolve um problema de compatibilidade?",
        "answer": "Não. Teste primeiro com a imagem original. Um Filtro muda a apresentação, não o hardware emulado nem o conteúdo do arquivo do jogo."
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
    "title": "Núcleo SkyEmu no iPhone e iPad | Retropa",
    "description": "O SkyEmu cobre a família Game Boy e o caminho beta do Nintendo DS no Retropa. Verifique formatos, Controles de toque em duas telas, limites e troca de núcleo no Plus.",
    "summary": "O SkyEmu cuida do caminho beta do Nintendo DS, além dos portáteis Game Boy, no Retropa. A compatibilidade com DS depende de cada título e não promete que todo jogo ou interação por toque funcione corretamente.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do SkyEmu: https://github.com/skylersaleh/SkyEmu. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS com o SkyEmu",
        "body": "Trate a compatibilidade com DS como algo específico de cada título. Importe um arquivo baixado localmente, confirme que o Nintendo DS foi detectado e teste além da tela de abertura. Verifique uma cena com entrada por toque e uma cena com som antes de contar com uma sessão longa. Anote a versão do app e a falha exata se um título travar; mudar a Skin não consegue consertar um problema de compatibilidade do núcleo.",
        "points": [
          "O catálogo lista apenas o SkyEmu para Nintendo DS.",
          "A troca de núcleo do Plus não cria um núcleo alternativo de DS.",
          "Mantenha backups independentes enquanto testa títulos de DS."
        ]
      },
      {
        "title": "Duas telas e entrada por toque",
        "body": "Escolha um layout que deixe as duas telas visíveis. O modo retrato pode empilhá-las na vertical; o modo paisagem depende da Skin. Teste alvos de toque pequenos no tamanho em que você realmente joga e confirme qual tela recebe a entrada por toque. Um Controle físico dá conta dos botões mapeados, mas não substitui toda interação por toque.",
        "points": [
          "Teste as duas telas, e não apenas a tela principal do jogo.",
          "Deixe os Controles de toque ao alcance mesmo com um Controle externo.",
          "Uma Skin de portátil de uma tela não é um layout de DS."
        ]
      },
      {
        "title": "Usando o SkyEmu para os portáteis mais antigos",
        "body": "A família Game Boy usa layouts de tela única. Confirme o sistema detectado e use uma Skin adequada antes de investigar problemas de cor ou de botões ausentes. ZIP e RetroPack são contêineres de importação, não sistemas emulados adicionais; o arquivo dentro deles ainda precisa corresponder ao catálogo. Renomear um arquivo de Game Boy Advance não o transforma em jogo de DS."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "SkyEmu — Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "SkyEmu — Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "SkyEmu — Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Qual núcleo roda jogos de Nintendo DS?",
        "answer": "O SkyEmu é o núcleo catalogado do Retropa para Nintendo DS. A compatibilidade é específica de cada título e o catálogo não lista outro núcleo de DS."
      },
      {
        "id": "touch",
        "question": "Jogos de DS ainda precisam de entrada por toque com um Controle?",
        "answer": "Sim. Mantenha a tela sensível ao toque ao alcance nos jogos que a usam; um Controle não substitui todas as ações por toque."
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
    "title": "Núcleo SameBoy no iPhone e iPad | Retropa",
    "description": "O SameBoy foca no Game Boy e no Game Boy Color no Retropa. Verifique o comportamento das cores, o escopo de arquivos, os limites dos save states e a exigência do Plus para trocar de núcleo.",
    "summary": "O SameBoy foca no hardware original monocromático e em cores do Game Boy. O seu escopo mais estreito o torna um ponto de comparação útil, e não uma garantia de que todo outro núcleo seja menos preciso.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do SameBoy: https://github.com/LIJI32/SameBoy. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Confira as cores sem Filtro",
        "body": "Importe seu arquivo armazenado localmente e confirme se o Retropa o identifica como Game Boy ou Game Boy Color. Comece pela imagem original: um tratamento DMG pode, de propósito, fazer um título em cores parecer monocromático. Recorra a uma cena com mudanças de cor conhecidas e compare a mesma cena, em vez de dois momentos diferentes do jogo."
      },
      {
        "title": "Testando sincronização e entrada",
        "body": "Comece pela Skin padrão para verificar o direcional, A, B, Start e Select. Se a sincronização ou o som parecerem errados, anote exatamente quando isso acontece e se persiste com os efeitos de imagem desativados. Com o Retropa Plus, uma comparação com outro núcleo compatível pode ajudar a isolar a implementação, mas uma diferença visível, sozinha, não prova qual núcleo corresponde ao hardware."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "SameBoy — Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "SameBoy — Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "SameBoy — Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "Não é um núcleo de Game Boy Advance",
        "body": "O SameBoy não cobre Game Boy Advance no Retropa. Use um núcleo catalogado compatível com GBA para uma imagem de GBA; mudar a extensão dela não a transforma em jogo de Game Boy. Da mesma forma, trocar para o SameBoy não torna portável um save state produzido por outro núcleo. Guarde o estado antigo e teste um backup de Save dentro do jogo separadamente."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "O SameBoy pode rodar jogos de Game Boy Advance?",
        "answer": "Não. A entrada do SameBoy no catálogo do Retropa cobre Game Boy e Game Boy Color, e não Game Boy Advance."
      },
      {
        "id": "why",
        "question": "Quando devo comparar o SameBoy com outro núcleo?",
        "answer": "Com o Retropa Plus, compare um problema reproduzível de sincronização, cor ou som depois de verificar o arquivo e desativar os Filtros. Faça backup dos Saves primeiro."
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
    "title": "Núcleo RusticoNES para NES no iPhone e iPad | Retropa",
    "description": "O RusticoNES no Retropa: formatos de cartucho e de disco de NES e Famicom, verificação de mapper, primeira execução, cuidados com Saves e troca de núcleo no Plus.",
    "summary": "O RusticoNES é o caminho padrão de execução de NES no Retropa. Use-o para os formatos catalogados de NES / Famicom, verificando os metadados do cartucho e os requisitos de disco antes de tratar uma falha de inicialização como problema de imagem.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do RusticoNES: https://github.com/zeta0134/rustico. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Cartuchos, UNIF e imagens de disco",
        "body": "Uma imagem de cartucho de NES / Famicom e uma imagem de Famicom Disk System são entradas diferentes. UNIF é um formato de contêiner de cartucho, e não outro nome para um cabeçalho iNES. Preserve o cabeçalho e a extensão originais ao importar; renomear ou remover bytes para fazer o arquivo parecer outro formato pode descartar informações usadas para identificar a placa dele.",
        "points": [
          "Mantenha uma cópia separada da imagem original.",
          "Leia qualquer aviso de BIOS do sistema de disco; o Retropa não fornece a BIOS.",
          "Os formatos de áudio NSF não estão listados para o RusticoNES; verifique o TetaNES."
        ]
      },
      {
        "title": "Primeira execução e verificação do Controle",
        "body": "Baixe a imagem localmente no app Arquivos, importe-a pela biblioteca do Retropa e confirme que o NES foi detectado. Comece com a Skin padrão e sem efeito de imagem. Teste o direcional, A, B, Start e Select, incluindo diagonais e pressões simultâneas. Uma entrada ausente em um layout personalizado não é prova de um mapper defeituoso."
      },
      {
        "title": "Quando um cartucho falha e outros funcionam",
        "body": "Cartuchos de NES podem incluir hardwares de mapper diferentes. Uma extensão reconhecida não prova que a placa usada por um jogo específico esteja implementada. Anote o erro exato e, se você souber pelos metadados do seu próprio dump, o mapper e a região. Não aplique patches em cabeçalhos ao acaso nem presuma que uma BIOS resolve um problema de placa de cartucho. Em jogos de disco, diferencie uma BIOS ausente de dados de disco ausentes."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "RusticoNES — Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "RusticoNES — Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "RusticoNES — Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "Compare apenas os formatos que se sobrepõem",
        "body": "A página do sistema NES lista a união dos formatos de todos os seus núcleos, e não a promessa de que cada núcleo aceita todos eles. Antes de usar o Plus para comparar o RusticoNES com o TetaNES ou o JGenesis, verifique as duas entradas de catálogo quanto ao formato do arquivo original. Mantenha a mesma cena e os ajustes de imagem padrão, para que uma Skin ou um Filtro alterado não obscureça o resultado."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "O RusticoNES é o núcleo listado para áudio NSF?",
        "answer": "Não. O catálogo do Retropa lista NSF e NSFE no TetaNES, e não no RusticoNES. Arquivos de áudio não são jogos de cartucho executáveis."
      },
      {
        "id": "mapper",
        "question": "Uma extensão suportada garante que um jogo vai iniciar?",
        "answer": "Não. O mapper do cartucho, a integridade do arquivo e eventuais requisitos do sistema de disco ainda importam. Anote o erro exato antes de mudar o arquivo."
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
    "title": "Núcleo TetaNES para NES no iPhone e iPad | Retropa",
    "description": "O TetaNES no Retropa: jogos de NES / Famicom, imagens de disco e áudio NSF, verificações por formato, configuração de Controle e a exigência do Plus para trocar de núcleo.",
    "summary": "O TetaNES é um núcleo alternativo de NES no Retropa, com cobertura catalogada de cartuchos, discos e arquivos de música. Verifique que tipo de arquivo você importou antes de esperar uma tela de jogo executável.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do TetaNES: https://github.com/lukexor/tetanes. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Arquivos de música não são jogos de cartucho",
        "body": "NSF e NSFE guardam dados de música de NES. Se você importou um deles, a ausência de uma fase normal de jogo não é, por si só, uma falha. Verifique a saída de áudio e os Controles que o app realmente expõe; não presuma que uma interface de tocador de música do projeto original para desktop esteja presente no Retropa. Para jogar, comece com uma imagem de cartucho ou de disco que você tem o direito de usar.",
        "points": [
          "Verifique o volume do dispositivo e a saída de áudio ao testar música.",
          "Renomear um arquivo de áudio não pode transformá-lo em imagem de cartucho.",
          "As extensões UNIF pertencem à entrada de catálogo do RusticoNES, e não à do TetaNES."
        ]
      },
      {
        "title": "Importe uma imagem de cartucho ou de disco",
        "body": "Baixe o arquivo para o dispositivo antes de usar a entrada de importação da biblioteca. Confirme a detecção de NES e mantenha a imagem original sem alterações. Famicom é o nome japonês do sistema; o Famicom Disk System acrescenta requisitos próprios de disco. Se o núcleo selecionado informar um problema de BIOS ou de dados de disco, resolva exatamente esse requisito em vez de substituir o arquivo por uma imagem de cartucho sem relação."
      },
      {
        "title": "Teste a entrada e uma cena reproduzível",
        "body": "Use um layout de NES / Famicom com o direcional, dois botões de ação, Start e Select. Confirme as diagonais com a Skin padrão e depois teste uma cena que demonstre o problema. Compare com a imagem original antes de aplicar um efeito CRT: as scanlines podem mudar o detalhe percebido sem mudar o que o núcleo emula."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "TetaNES — Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "TetaNES — Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "TetaNES — Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "Uma alternativa não é um conserto universal",
        "body": "O TetaNES e o RusticoNES têm listas de formatos e implementações diferentes. A troca pode ajudar a isolar um problema de sincronização ou de mapper apenas quando o arquivo é válido para os dois; ela não pode garantir suporte a uma placa específica. Os save states do núcleo anterior devem continuar guardados com esse núcleo, em vez de serem tratados como arquivos intercambiáveis."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Por que meu arquivo NSF não mostra um jogo executável?",
        "answer": "NSF são dados de música. Teste o áudio em vez de esperar uma fase normal de jogo; use uma imagem de cartucho ou de disco para jogar."
      },
      {
        "id": "switch",
        "question": "Posso trocar um jogo de NES para o TetaNES de graça?",
        "answer": "Trocar de núcleo de emulação exige o Retropa Plus. Verifique a cobertura de formatos do núcleo de destino e faça backup do progresso primeiro."
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
    "title": "Núcleo LakeSnes para SNES no iPhone e iPad | Retropa",
    "description": "O LakeSnes no Retropa: formatos de SNES / Super Famicom, limites dos chips de cartucho, Controles de seis botões, backups de Saves e troca de núcleo no Plus.",
    "summary": "O LakeSnes é o núcleo do Retropa focado em SNES. O seu catálogo inclui vários formatos de imagem e de copiador, mas reconhecer o arquivo e suportar o hardware do cartucho de um jogo são questões separadas.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do LakeSnes: https://github.com/dinkc64/LakeSnes. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Mantenha a imagem e o cabeçalho intactos",
        "body": "O SNES é conhecido como Super Famicom no Japão. Imagens de cartucho comuns usam as extensões SFC ou SMC; o catálogo também lista outros formatos de copiador e correlatos. A extensão, sozinha, não prova se um arquivo tem cabeçalho de copiador nem se precisa de hardware especial de cartucho. Importe a imagem original armazenada localmente e mantenha um backup, em vez de remover um cabeçalho como primeiro passo de diagnóstico."
      },
      {
        "title": "Teste o Controle por completo",
        "body": "Depois de importar pela biblioteca, confirme o sistema detectado e comece com o layout padrão. O SNES acrescenta X, Y, L e R ao padrão portátil de dois botões. Teste os botões de ombro, as diagonais e uma pressão simultânea usada pelo jogo; uma Skin bonita que omite L ou R pode fazer um jogo que funciona parecer travado.",
        "points": [
          "Teste Start e Select, além dos seis botões de jogo.",
          "Mapeie um Controle pareado antes de julgar os limites de um layout de toque.",
          "Compare com a imagem original para separar problemas de entrada dos de imagem."
        ]
      },
      {
        "title": "Limites de chips de cartucho e formatos especiais",
        "body": "Alguns títulos de SNES dependem de processadores extras no cartucho ou de outro hardware. A lista de extensões do catálogo não é uma lista de compatibilidade por chip, e reconhecer um arquivo BS ou ST não estabelece que todo fluxo de acessório esteja exposto no Retropa. Se apenas um título falha, anote os requisitos de hardware dele quando conhecidos e o erro exato. Não afirme que um Filtro ou uma extensão renomeada pode adicionar o suporte de hardware que falta."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "Comparando o LakeSnes com o JGenesis",
        "body": "O JGenesis também lista SNES, mas a cobertura de extensões de SNES dele é mais estreita que a do LakeSnes. Com o Plus, compare apenas um formato de arquivo que as duas entradas listem. Volte à mesma cena com os mesmos Controles e sem Filtro, e mantenha os estados de cada núcleo separados. Uma comparação bem-sucedida com um cartucho não estabelece compatibilidade com todos os títulos de chip especial."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Todo formato do LakeSnes também roda no JGenesis?",
        "answer": "Não presuma que sim. Consulte a entrada de catálogo de cada núcleo; os formatos por sistema combinam a cobertura de vários núcleos."
      },
      {
        "id": "chips",
        "question": "A lista de formatos garante compatibilidade com chips especiais?",
        "answer": "Não. Reconhecer o arquivo e emular o hardware do cartucho são coisas separadas. Confira o erro exato e o núcleo selecionado antes de mudar a imagem."
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
    "title": "Núcleo JGenesis no iPhone e iPad | Retropa",
    "description": "O JGenesis no Retropa: sistemas Sega e Nintendo do catálogo, os nomes Genesis e Mega Drive, limites entre formatos, detecção de sistema e troca de núcleo no Plus.",
    "summary": "O JGenesis atende vários sistemas por meio de uma única família de núcleos no Retropa. O sistema detectado ainda determina o hardware, os Controles e o contexto de Save; compartilhar um núcleo não torna os arquivos intercambiáveis.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do JGenesis: https://github.com/jsgroth/jgenesis. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
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
        "title": "Os nomes Genesis e Mega Drive",
        "body": "Genesis é o nome norte-americano do console conhecido como Mega Drive no Japão e na Europa. O catálogo do Retropa tem entradas sob os dois nomes. As extensões de arquivo são pistas do formato da imagem, não identificadores confiáveis de região: o nome do arquivo, sozinho, não informa os requisitos de timing nem de região do jogo. Preserve o arquivo original e confirme o sistema detectado, em vez de renomeá-lo para escolher um mercado."
      },
      {
        "title": "Importe para o hardware certo",
        "body": "Baixe sua imagem localmente no app Arquivos e importe-a pela biblioteca. Antes de começar, diferencie Master System de Game Gear, e NES / Famicom de SNES / Super Famicom. Um núcleo multi-sistema ainda precisa do caminho de hardware adequado. Se o sistema detectado for inesperado, confira a identidade do arquivo antes de mudar ajustes de imagem ou de Controle.",
        "points": [
          "Master System e Game Gear são sistemas relacionados, mas não idênticos.",
          "Uma lista de formatos por sistema pode incluir formatos de outros núcleos.",
          "O catálogo do Retropa é o escopo aqui, e não todos os recursos do JGenesis original."
        ]
      },
      {
        "title": "Os Controles variam conforme o sistema selecionado",
        "body": "No Genesis, teste A, B, C e quaisquer entradas extras de seis botões oferecidas pelo layout. No Game Gear, confirme o Start; no Master System, verifique a entrada de pausa. Layouts de SNES precisam de botões de ombro que os layouts de NES não têm. Valide uma combinação de Controle em uma cena real de jogo antes de supor que o núcleo perdeu uma entrada."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "A cobertura da Sega não implica um núcleo alternativo",
        "body": "O catálogo do Retropa lista o JGenesis como único núcleo para os seus sistemas Sega de cartucho. O Plus libera a troca onde existem alternativas; ele não adiciona uma implementação que não está na lista. Da mesma forma, o suporte multi-sistema do projeto original não implica que CD, hardware adicional ou todas as opções de desktop estejam disponíveis dentro do Retropa. Use o catálogo e os avisos reais do app para estabelecer o caminho suportado."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Uma extensão .gen prova que o jogo é norte-americano?",
        "answer": "Não. Genesis e Mega Drive são nomes regionais, mas uma extensão não estabelece de forma confiável a região nem os requisitos de timing de um jogo."
      },
      {
        "id": "upstream",
        "question": "O Retropa expõe todos os sistemas do JGenesis original?",
        "answer": "Não há essa garantia. Esta página baseia a sua cobertura no catálogo do próprio Retropa, e não na lista completa de recursos do projeto original."
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
    "title": "Núcleo Ares no iPhone e iPad | Retropa",
    "description": "O Ares no Retropa: cobertura catalogada de GBA, WonderSwan e Neo Geo Pocket, detecção do modelo em cores, layouts girados, cuidados com Saves e troca de núcleo no Plus.",
    "summary": "O Ares cobre famílias portáteis selecionadas no Retropa. A sua identidade ampla no projeto original não significa que todos os sistemas ou acessórios de origem estejam integrados ao app.",
    "sections": [
      {
        "title": "Sistemas e formatos do catálogo",
        "body": "Projeto original do Ares: https://github.com/ares-emulator/ares. A cobertura abaixo vem do catálogo do Retropa, e não da lista completa de recursos do projeto original. Uma extensão listada não garante compatibilidade com todos os títulos. O Retropa não fornece jogos nem arquivos de BIOS; importe apenas arquivos que você tem o direito de usar.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Combine com o modelo monocromático ou em cores",
        "body": "Importe uma imagem baixada localmente e verifique se o Retropa detectou o WonderSwan ou o WonderSwan Color original, e o Neo Geo Pocket ou o Neo Geo Pocket Color. Os modelos em cores têm recursos que o hardware monocromático não tem. Renomear um arquivo não é conversão e não faz um título exclusivo para cores rodar como jogo do modelo original.",
        "points": [
          "Mantenha a imagem original e um backup de progresso separado.",
          "Confira o modelo detectado antes de diagnosticar problemas de paleta.",
          "Siga o aviso de firmware específico do sistema, se aparecer; nenhuma BIOS é fornecida."
        ]
      },
      {
        "title": "A orientação do WonderSwan exige mais do que o modo retrato",
        "body": "Jogos de WonderSwan podem ser projetados para jogo na horizontal ou na vertical. Confira a orientação esperada pelo jogo, os dois grupos de botões direcionais e o layout de Skin disponível. Virar o telefone para o modo retrato, sozinho, não prova que a tela emulada e todos os Controles foram girados corretamente. Se um layout não expõe as entradas necessárias, prefira outro layout adequado em vez de supor que o núcleo consegue remapeá-las automaticamente."
      },
      {
        "title": "Pocket não é o arcade Neo Geo",
        "body": "O Neo Geo Pocket usa imagens de portátil, e não os conjuntos de arcade com vários arquivos associados ao Neo Geo MVS. Um arquivo de BIOS de arcade não substitui uma imagem de Pocket. Teste as diagonais e os dois botões de ação com o layout padrão. A tela original do Pocket é monocromática; apenas o Pocket Color deve mostrar os gráficos do modelo em cores. A execução de arcade é um recurso separado do Plus."
      },
      {
        "title": "Troca de núcleo e como manter o progresso",
        "body": "Trocar o núcleo de emulação exige o Retropa Plus, mesmo quando o próprio sistema portátil está disponível sem compra. Compare apenas núcleos que cubram tanto o sistema quanto o formato do arquivo. A seleção é lembrada por jogo; faça backup do Save do próprio jogo e dos save states do núcleo original antes de testar a mesma cena para comparar som, imagem e entrada.",
        "points": [
          "Os save states registram o estado interno de um núcleo específico; não espere compatibilidade entre núcleos.",
          "Faça backup e verifique também os Saves dentro do jogo; a migração automática não é garantida.",
          "Trocar de núcleo não converte o arquivo do jogo nem fornece uma BIOS que esteja faltando."
        ]
      },
      {
        "title": "Onde a comparação existe e onde não existe",
        "body": "O catálogo lista alternativas para Game Boy Advance, mas lista apenas o Ares para os modelos WonderSwan e Neo Geo Pocket. A troca de núcleo do Plus não adiciona outra implementação para esses sistemas. O Ares também tem um escopo original muito mais amplo do que esta integração; use apenas a cobertura do Retropa listada aqui, em vez de supor que outro sistema do projeto original pode ser habilitado mudando uma extensão."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "O suporte a Pocket do Ares roda meu conjunto de arcade Neo Geo?",
        "answer": "Não. Pocket e arcade Neo Geo são famílias de hardware diferentes, com requisitos de arquivo diferentes. A execução de arcade exige o Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "O Plus adiciona outro núcleo de WonderSwan ou de Pocket?",
        "answer": "Não. Esses sistemas hoje listam apenas o Ares no catálogo do Retropa. A troca se aplica onde existe uma alternativa compatível."
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
    "label": "Alternativa ao Delta",
    "title": "Alternativa ao emulador Delta para iPhone e iPad | Retropa",
    "description": "Procurando uma alternativa ao Delta no iPhone e no iPad? Compare suporte a arcade, importação de Skins do Delta, Filtros de imagem e modo console, inclusive onde o Delta é a escolha mais forte.",
    "summary": "O Retropa é um emulador de arcade e portáteis para iPhone e iPad que importa Skins do Delta diretamente, acrescenta famílias de arcade e Filtros com escala não inteira, e mantém uma interface com foco em portáteis.",
    "sections": [
      {
        "title": "O que você leva do Delta",
        "body": "Trocar de emulador só vale a pena se a sua configuração atual sobreviver. O Retropa importa pacotes .deltaskin do Delta, então um layout que você já ajustou não precisa ser refeito do zero. Confira se o pacote é destinado ao sistema e à orientação que você usa e depois confirme que a área do jogo não fica obstruída.",
        "points": [
          "Pacotes .deltaskin são importados diretamente.",
          "Confira o sistema pretendido antes de contar com uma Skin.",
          "O suporte a paisagem e retrato depende do pacote."
        ]
      },
      {
        "title": "Onde o Retropa acrescenta algo que o Delta não tem",
        "body": "A diferença mais clara é o suporte a arcade. O Retropa roda as famílias de arcade CPS I, CPS II, CPS III, Neo Geo, PGM e M92 compatíveis junto com os sistemas portáteis, então uma única biblioteca cobre os dois. Os núcleos de arcade exigem o Retropa Plus, e jogos e arquivos de BIOS não estão incluídos.",
        "points": [
          "Famílias de arcade na mesma biblioteca dos portáteis.",
          "O Retropa Plus é necessário para os núcleos de arcade.",
          "Conjuntos de arcade têm vários arquivos e podem precisar de BIOS."
        ]
      },
      {
        "title": "Filtros de imagem sem exigência de escala inteira",
        "body": "Muitos Filtros retrô pressupõem que a imagem do jogo corresponda a um número inteiro de pixels da tela. Em um iPhone moderno, a área disponível raramente se divide de forma exata, o que deixa espaço sem uso ou scanlines irregulares. Os Filtros avançados do Retropa trabalham a partir da área de saída real, em todas as orientações e layouts de Skin. O app para iOS é a referência; a prévia no navegador deste site é uma aproximação.",
        "points": [
          "Os Filtros mudam a apresentação, não a resolução do jogo.",
          "Os Filtros avançados exigem o Retropa Plus.",
          "Sobreposições convencionais de Scanline podem cintilar em escalas fracionárias."
        ]
      },
      {
        "title": "Onde o Delta é a escolha mais forte",
        "body": "O Delta tem uma base de usuários muito maior, um histórico mais longo na App Store e uma comunidade mais ampla de Skins publicadas. Se você quer a opção mais usada, o catálogo de Skins existente mais completo ou o maior número de tutoriais de terceiros, o Delta é uma escolha razoável, e esta página não vai fingir o contrário.",
        "points": [
          "O Delta tem uma comunidade maior e mais material de terceiros.",
          "O Delta se beneficia do efeito de rede em torno das Skins.",
          "O Retropa é um produto mais novo, com um catálogo menor."
        ]
      },
      {
        "title": "Testar os dois não custa nada",
        "body": "Os dois apps são gratuitos para baixar, com compras opcionais dentro do app. A abordagem prática é importar uma Skin do Delta para o Retropa, carregar um jogo de portátil e um conjunto de arcade, e decidir com base em como os Controles e a imagem realmente se comportam no seu dispositivo.",
        "points": [
          "Grátis para baixar nos dois casos.",
          "Guarde os arquivos originais e as Skins de qualquer forma.",
          "Julgue no seu próprio dispositivo, não em uma tabela comparativa."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "O Retropa pode importar as Skins do Delta que eu já tenho?",
        "answer": "Sim. O Retropa importa pacotes .deltaskin. Guarde o arquivo do pacote original e verifique se ele é destinado ao sistema e à orientação que você usa."
      },
      {
        "id": "free",
        "question": "O Retropa é grátis?",
        "answer": "O Retropa é gratuito para baixar, com compras opcionais dentro do app. Núcleos de arcade, Skins premium e Filtros avançados exigem o Retropa Plus. Os preços são mostrados no app."
      },
      {
        "id": "roms",
        "question": "O Retropa inclui jogos?",
        "answer": "Não. O Retropa é um emulador e não fornece jogos nem arquivos de BIOS. Importe apenas conteúdo que você tem o direito de usar."
      },
      {
        "id": "which-better",
        "question": "Qual emulador é melhor?",
        "answer": "Eles otimizam coisas diferentes. O Delta tem a comunidade maior e o catálogo de Skins maior; o Retropa acrescenta famílias de arcade, Filtros com escala não inteira e importação de Skins do Delta. Teste os dois no seu próprio dispositivo."
      }
    ],
    "attribution": "O Delta é um produto de terceiros. Todos os nomes de produtos e empresas mencionados nesta página são marca dos respectivos proprietários, e o uso aqui serve apenas para identificação e comparação factual. O Retropa não é afiliado, endossado ou patrocinado por nenhum deles.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa e Delta",
    "title": "Retropa vs Delta: arcade, Filtros e Skins comparados",
    "description": "Uma comparação direta entre Retropa e Delta no iPhone e no iPad: sistemas emulados, suporte a arcade, compatibilidade de Skins, Filtros de imagem e onde cada um se encaixa melhor.",
    "summary": "Retropa e Delta são dois emuladores para iOS, mas otimizam coisas diferentes: o Delta oferece a comunidade e o catálogo de Skins maiores, enquanto o Retropa acrescenta famílias de arcade e Filtros de imagem com escala não inteira.",
    "sections": [
      {
        "title": "Sistemas emulados",
        "body": "Os dois apps cobrem os sistemas portáteis que a maioria das pessoas quer. O Retropa ainda roda as famílias de arcade suportadas, e essa é a maior diferença funcional entre eles. Os núcleos de arcade exigem o Retropa Plus; os sistemas portáteis, não.",
        "points": [
          "A cobertura de portáteis se sobrepõe bastante.",
          "As famílias de arcade são específicas do Retropa.",
          "Jogar arcade exige o Plus."
        ]
      },
      {
        "title": "Skins e layouts",
        "body": "O Retropa importa pacotes .deltaskin do Delta, então um layout que você já usa pode migrar. Fora isso, o ecossistema de Skins publicadas do Delta é maior, o que importa se navegar por um catálogo amplo faz parte do que você procura.",
        "points": [
          "O Retropa importa pacotes .deltaskin.",
          "O Delta tem o catálogo publicado maior.",
          "Sempre verifique se o pacote suporta o seu sistema e a sua orientação."
        ]
      },
      {
        "title": "Filtros de imagem",
        "body": "O Retropa oferece Filtros avançados de CRT e LCD que se adaptam à área de saída real, em vez de exigir um fator de escala inteiro, e pode usar cadeias de shaders do RetroArch, incluindo predefinições .slang e .slangp. Os Filtros avançados exigem o Plus. A prévia no site é uma aproximação; o app para iOS é a referência.",
        "points": [
          "Sem exigência de escala inteira nos Filtros avançados.",
          "O suporte a cadeias de shaders do RetroArch está listado para o Retropa.",
          "Os Filtros avançados exigem o Plus."
        ]
      },
      {
        "title": "Comunidade, documentação e histórico",
        "body": "O Delta está na App Store há mais tempo, tem muito mais usuários e, portanto, muito mais documentação da comunidade, respostas em fóruns e guias de terceiros. O Retropa é mais novo e menor. Quem afirmar o contrário não está descrevendo o estado atual de nenhum dos dois produtos.",
        "points": [
          "O Delta tem um histórico mais longo na App Store.",
          "O Delta tem mais respostas da comunidade disponíveis.",
          "O Retropa tem a base de usuários menor hoje."
        ]
      },
      {
        "title": "Como escolher",
        "body": "Se títulos de arcade importam para você, ou se você quer Filtros de imagem que não pressupõem uma escala de número inteiro, vale instalar o Retropa. Se você quer o maior catálogo de Skins e o maior volume de material da comunidade, o Delta é a aposta mais segura. Os dois são gratuitos para baixar, então o conselho honesto é testar ambos com os seus próprios arquivos.",
        "points": [
          "Grátis para baixar nos dois casos.",
          "Nenhum compromisso é necessário para avaliar qualquer um deles.",
          "Os dois exigem que você forneça seus próprios arquivos de jogo."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "O Delta tem suporte a jogos de arcade?",
        "answer": "Essa comparação não é algo que esta página possa verificar. O que esta página pode afirmar é que o Retropa roda as famílias de arcade CPS, Neo Geo, PGM e M92 suportadas, e que os núcleos de arcade exigem o Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Posso usar as mesmas Skins nos dois?",
        "answer": "O Retropa importa pacotes .deltaskin do Delta, então um pacote que funciona no Delta em geral pode ser importado para o Retropa. Confira o sistema e a orientação de destino depois de importar."
      },
      {
        "id": "price",
        "question": "Quanto eles custam?",
        "answer": "O Retropa é gratuito para baixar, com compras opcionais dentro do app. O Retropa Plus é necessário para núcleos de arcade, Skins premium e Filtros avançados. Os preços atuais são mostrados dentro do app."
      }
    ],
    "attribution": "O Delta é um produto de terceiros. Todos os nomes de produtos e empresas mencionados nesta página são marca dos respectivos proprietários, e o uso aqui serve apenas para identificação e comparação factual. O Retropa não é afiliado, endossado ou patrocinado por nenhum deles.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Importar jogos",
    "title": "Como importar jogos no Retropa no iPhone e iPad",
    "description": "Importe seus próprios arquivos de jogo para o Retropa no iPhone e no iPad: onde fica a entrada de importação, por que um item na nuvem falha, quais formatos funcionam e o que fazer quando um arquivo é recusado.",
    "summary": "Um passo a passo para importar seus próprios arquivos de jogo para o Retropa, incluindo os formatos que funcionam, como os contêineres ZIP se comportam e como se recuperar de uma importação que falhou.",
    "sections": [
      {
        "title": "Antes de começar",
        "body": "O Retropa não inclui jogos nem arquivos de BIOS. Você precisa de um arquivo de jogo que tem o direito de usar, armazenado no próprio dispositivo. Mantenha uma cópia intacta fora do app para que um erro durante a importação nunca custe o original.",
        "points": [
          "Importe apenas conteúdo que você tem o direito de usar.",
          "Mantenha um backup separado de cada arquivo original.",
          "O app é gratuito para baixar; jogos não são fornecidos."
        ]
      },
      {
        "title": "Primeiro passo: coloque o arquivo no dispositivo",
        "body": "Baixe o arquivo para que ele fique no armazenamento local, e não como item na nuvem. Esta é a causa mais comum de uma importação que falha: o app Arquivos mostra o item, mas os bytes ainda não estão no dispositivo, então o emulador não recebe nada utilizável.",
        "points": [
          "Abra o arquivo uma vez no app Arquivos para confirmar que foi baixado.",
          "Um arquivo acinzentado ou que precisa ser baixado é um item na nuvem.",
          "Conclua o download antes de importar."
        ]
      },
      {
        "title": "Segundo passo: importe pela biblioteca",
        "body": "Abra a entrada de importação na biblioteca do Retropa e selecione o arquivo. Confira se o sistema foi detectado corretamente e inicie o jogo com o layout padrão antes de mudar Skins ou Filtros, para que qualquer problema posterior tenha uma causa óbvia."
      },
      {
        "title": "Quais formatos de arquivo funcionam",
        "body": "O Retropa aceita os formatos de arquivo que correspondem aos seus sistemas suportados e também pode abrir contêineres ZIP e RetroPack diretamente. A extensão precisa corresponder ao sistema: um arquivo de Game Boy é .gb, de Game Boy Color é .gbc, de Game Boy Advance é .gba e de DS é .nds.",
        "points": [
          "Mudar uma extensão não converte um jogo entre sistemas.",
          "Contêineres ZIP e RetroPack podem ser abertos sem descompactar.",
          "Conjuntos de arcade têm vários arquivos e são tratados de outra forma."
        ]
      },
      {
        "title": "Quando uma importação falha",
        "body": "Leia o erro exato primeiro e depois verifique três coisas nesta ordem: se o arquivo foi totalmente baixado, se a extensão corresponde ao sistema e se o arquivo é uma imagem íntegra, e não um download parcial. Só depois dessas verificações vale a pena suspeitar do núcleo de emulação.",
        "points": [
          "Termine primeiro qualquer download incompleto.",
          "Confirme se a extensão corresponde ao sistema.",
          "Experimente o núcleo alternativo desse sistema antes de desistir."
        ]
      },
      {
        "title": "Arquivos, Saves e save states",
        "body": "O arquivo do jogo, os dados de Save do próprio jogo e um save state do emulador são três coisas diferentes. Renomear um para virar outro não o converte. Faça backup dos três antes de mover qualquer coisa entre núcleos ou apps, porque os formatos de estado não são portáveis entre todos os núcleos.",
        "points": [
          "Mantenha o arquivo de jogo original intacto.",
          "Faça backup dos Saves de bateria e dos save states separadamente.",
          "Não espere que um estado de um núcleo carregue em outro."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "O Retropa vem com jogos?",
        "answer": "Não. O Retropa é um emulador e não fornece jogos nem arquivos de BIOS. Você importa arquivos que tem o direito de usar."
      },
      {
        "id": "cloud",
        "question": "Por que meu arquivo não é importado?",
        "answer": "A causa mais comum é um item na nuvem em vez de um arquivo baixado. Abra-o no app Arquivos para forçar o download e importe-o novamente."
      },
      {
        "id": "zip",
        "question": "Posso importar um arquivo ZIP?",
        "answer": "O Retropa abre contêineres ZIP e RetroPack diretamente, então descompactar normalmente é desnecessário, a menos que um fluxo de importação específico peça isso."
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
    "label": "Controles",
    "title": "Conecte um Controle ao Retropa no iPhone e iPad",
    "description": "Pareie um Controle Bluetooth ou com fio ao iOS e faça o mapeamento dentro do Retropa, além de como diagnosticar botões que não respondem e mapeamentos que mudam por jogo.",
    "summary": "Pareie um Controle compatível com o iOS primeiro e depois verifique o mapeamento dentro do Retropa, por sistema e por jogo. Este guia cobre a ordem do pareamento, erros comuns de mapeamento e configurações de toque mais Controle.",
    "sections": [
      {
        "title": "Pareie no iOS antes de abrir o Retropa",
        "body": "O Controle precisa ser conhecido pelo iOS primeiro. Faça o pareamento nos ajustes do sistema, confirme que ele responde lá e só então abra o Retropa. Um Controle que nunca foi pareado no nível do sistema não vai aparecer dentro do app, não importa o que você faça nos ajustes dele.",
        "points": [
          "Pareie primeiro nos ajustes do iOS.",
          "Confirme que o Controle responde no sistema.",
          "Depois verifique-o dentro do Retropa."
        ]
      },
      {
        "title": "O mapeamento é verificado por sistema, não uma vez só",
        "body": "O Retropa mantém layouts de Controle por sistema, porque um Game Boy precisa de seis entradas enquanto um Controle de SNES precisa de dez. Trate o mapeamento como um trabalho por sistema: depois de parear uma vez, verifique a atribuição de cada sistema que você realmente joga.",
        "points": [
          "Game Boy: direcional, A, B, Start, Select.",
          "O SNES acrescenta X, Y, L e R.",
          "Layouts de arcade acrescentam vários botões de ação."
        ]
      },
      {
        "title": "Os botões que as pessoas esquecem de testar",
        "body": "Na prática, as falhas se concentram nas mesmas entradas: botões de ombro em Controles de seis botões, Start e Select, que são fáceis de posicionar fora de alcance, e as diagonais, que importam mais em sistemas cujo Controle original usava alavanca com microswitch.",
        "points": [
          "Teste L e R explicitamente ao mapear.",
          "Confira se Start e Select estão ao alcance.",
          "Teste as diagonais, não apenas as quatro direções cardeais."
        ]
      },
      {
        "title": "Controles de toque e um Controle físico podem coexistir",
        "body": "Alguns jogos precisam de uma interação por toque que um Controle físico não substitui, especialmente em sistemas de duas telas. Manter o layout na tela disponível junto com um Controle pareado costuma ser mais prático do que alternar entre os dois.",
        "points": [
          "Não desative os Controles de toque se um jogo usa a tela sensível ao toque.",
          "Verifique se as sobreposições não cobrem a área do jogo.",
          "O retorno tátil e o layout de toque podem ser ajustados separadamente."
        ]
      },
      {
        "title": "Quando um botão não responde",
        "body": "Trabalhe de fora para dentro a partir do Controle: confirme que ele responde no iOS, depois no Retropa e depois em um jogo que com certeza usa esse botão. Se o mapeamento parece correto, mas um jogo ignora uma entrada, pode ser que o jogo não use essa entrada, o que é comum em títulos portáteis antigos.",
        "points": [
          "Verifique o Controle nos ajustes do iOS primeiro.",
          "Confira o mapeamento dentro do Retropa.",
          "Confirme se o jogo realmente usa esse botão."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Quais Controles funcionam?",
        "answer": "Controles compatíveis com o iOS podem ser usados no Retropa. Pareie-os primeiro nos ajustes do iOS e depois confira o mapeamento dentro do app."
      },
      {
        "id": "mapping-lost",
        "question": "Por que meu mapeamento mudou?",
        "answer": "Os layouts são mantidos por sistema e por jogo, então um mapeamento definido para um sistema não se aplica automaticamente a outro. Confira o mapeamento do sistema que você está jogando no momento."
      },
      {
        "id": "touch",
        "question": "Os Controles de toque param de funcionar com um Controle físico?",
        "answer": "Não. Os Controles de toque continuam disponíveis, o que é útil em sistemas em que um jogo precisa de toque ou de uma interação na segunda tela."
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
    "label": "Saves do jogo",
    "title": "Save states e rewind no Retropa | iPhone e iPad",
    "description": "Entenda a diferença entre Saves dentro do jogo, save states e rewind no Retropa, como mover Saves entre núcleos com segurança e o que verificar quando um Save não carrega.",
    "summary": "Saves dentro do jogo, save states do emulador e rewind são três mecanismos diferentes, com portabilidade diferente. Este guia explica o que cada um faz e como fazer backup deles com segurança.",
    "sections": [
      {
        "title": "Três coisas diferentes chamadas de Save",
        "body": "O Save do próprio jogo é gravado pelo jogo, um save state captura o emulador inteiro em um instante, e o rewind reproduz o histórico recente. Eles se comportam de forma diferente, são armazenados de forma diferente, e renomear um para virar outro não o converte.",
        "points": [
          "Os Saves dentro do jogo são criados pelo jogo.",
          "Os save states capturam o momento inteiro do emulador.",
          "O rewind depende do histórico recente, e não de um arquivo guardado."
        ]
      },
      {
        "title": "Criar e usar um save state",
        "body": "Um save state é útil antes de uma parte difícil, antes de trocar de núcleo ou antes de aplicar um novo Filtro, porque permite voltar a um momento que você sabe que estava bom. O salvamento rápido e o carregamento rápido servem exatamente para esse tipo de ponto de controle de curto prazo.",
        "points": [
          "Crie um estado antes de trocar de núcleo.",
          "Os estados são a forma mais rápida de comparar duas predefinições.",
          "Mantenha o Save do próprio jogo como registro de longo prazo."
        ]
      },
      {
        "title": "Mover um Save entre núcleos",
        "body": "Os save states não são portáveis entre todos os núcleos, porque um estado registra a condição interna de uma implementação específica. Os Saves de bateria, gravados pelo jogo, têm muito mais chance de migrar com sucesso. Faça backup dos dois antes de mudar o núcleo selecionado.",
        "points": [
          "Espere que os estados sejam específicos do núcleo.",
          "Saves de bateria são transferidos com mais confiabilidade.",
          "Faça backup antes de trocar de núcleo."
        ]
      },
      {
        "title": "Quando um Save não carrega",
        "body": "Verifique se o Save é dado dentro do jogo ou um estado, se o núcleo mudou desde que ele foi gravado e se a versão do app mudou. Se um estado falhar, carregue o Save do próprio jogo, porque esse caminho não depende do formato de estado interno do emulador.",
        "points": [
          "Confirme que o núcleo não mudou.",
          "Confirme o tipo de Save.",
          "Recorra ao Save do próprio jogo sempre que possível."
        ]
      },
      {
        "title": "Como manter backups que sobrevivem",
        "body": "Guarde o arquivo de jogo original, o Save do próprio jogo e os save states que você considera importantes em lugares separados. iCloud ou uma cópia no computador serve; o que importa é que uma falha no app ou no dispositivo não elimine todas as cópias de uma vez.",
        "points": [
          "Faça backup do próprio arquivo de jogo, não apenas dos Saves.",
          "Mantenha os Saves separados dos arquivos de estado.",
          "Guarde pelo menos uma cópia fora do dispositivo."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Qual é a diferença entre um Save e um save state?",
        "answer": "Um Save é gravado pelo jogo e representa o progresso no formato do próprio jogo. Um save state captura o emulador inteiro em um momento e é específico do núcleo que o produziu."
      },
      {
        "id": "rewind",
        "question": "Até onde posso voltar com o rewind?",
        "answer": "O rewind reproduz o histórico recente a partir da memória, em vez de restaurar um arquivo guardado, então o alcance dele é limitado pelo buffer, e não por um número fixo de espaços salvos."
      },
      {
        "id": "transfer",
        "question": "Posso mover um Save para outro emulador?",
        "answer": "O Save do próprio jogo é o item mais portável. Os save states dependem do formato interno de um núcleo específico e não se deve esperar que carreguem em outro lugar."
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
    "label": "Solução de problemas",
    "title": "O jogo não carrega no Retropa? O que verificar",
    "description": "Uma ordem de diagnóstico para um jogo que não inicia no Retropa: download incompleto, extensão errada, sistema detectado errado, BIOS ausente, mapper não suportado e problemas específicos de núcleo.",
    "summary": "Siga uma ordem fixa de verificações — conclusão do download, extensão, sistema detectado, exigência de BIOS e, por fim, escolha do núcleo — antes de concluir que um arquivo é inutilizável.",
    "sections": [
      {
        "title": "Siga uma ordem fixa, não um palpite",
        "body": "A maioria das falhas de carregamento vem de um pequeno número de causas, e verificar essas causas em uma ordem consistente evita perder tempo. A ordem abaixo vai da verificação mais barata para a mais cara, então você para assim que encontra a causa real.",
        "points": [
          "Primeiro, se o download foi concluído.",
          "Depois, a extensão e o sistema detectado.",
          "Em seguida, a BIOS e a escolha do núcleo."
        ]
      },
      {
        "title": "Verificação um: o arquivo está mesmo no dispositivo?",
        "body": "Se o arquivo é um item na nuvem, o emulador não recebe nada utilizável, mesmo que o arquivo apareça na biblioteca. Abra-o no app Arquivos para forçar o download, espere terminar e importe de novo.",
        "points": [
          "Um item acinzentado ou pendente não foi baixado.",
          "Conclua o download antes de tentar novamente.",
          "Esta é a causa mais comum de todas."
        ]
      },
      {
        "title": "Verificação dois: a extensão corresponde ao sistema?",
        "body": "Cada sistema tem a sua própria extensão, e uma incompatibilidade gera um arquivo que o núcleo não consegue interpretar. Renomear uma extensão não converte nada, então um arquivo .gb renomeado para .gba continua sendo um jogo de Game Boy e não vai se comportar como um título de Game Boy Advance.",
        "points": [
          ".gb, .gbc, .gba e .nds são sistemas diferentes.",
          "Renomear nunca converte um jogo.",
          "Confirme o sistema detectado na biblioteca."
        ]
      },
      {
        "title": "Verificação três: falta uma BIOS ou um conjunto pai?",
        "body": "Alguns sistemas e famílias de arcade precisam de um arquivo de BIOS adicional, e conjuntos de arcade podem depender de um conjunto pai. O núcleo informa o que está faltando; leia essa mensagem com atenção, porque uma BIOS ausente e um conjunto pai ausente são problemas diferentes, com soluções diferentes.",
        "points": [
          "Leia o texto exato do erro.",
          "Um neogeo.zip de arcade não é uma BIOS de portátil.",
          "O Retropa não oferece downloads de BIOS."
        ]
      },
      {
        "title": "Verificação quatro: experimente o outro núcleo",
        "body": "Vários sistemas têm mais de um núcleo disponível. Se um arquivo está completo, com o nome correto e sem dependência ausente, trocar de núcleo é o próximo teste, porque os núcleos diferem no rigor com que emulam o hardware original.",
        "points": [
          "Anote qual núcleo falhou.",
          "Troque o núcleo e tente mais uma vez.",
          "Compare com um segundo jogo no mesmo núcleo."
        ]
      },
      {
        "title": "O que incluir em uma solicitação de suporte",
        "body": "Se um jogo ainda não inicia, as informações úteis são a versão do app, o sistema, o núcleo selecionado e o texto exato do erro. Não anexe arquivos comerciais de jogo nem de BIOS, porque isso não é necessário para diagnosticar o problema e não deve ser compartilhado.",
        "points": [
          "Versão do app e sistema.",
          "Núcleo selecionado e texto do erro.",
          "Nunca anexe arquivos comerciais de ROM ou BIOS."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "O jogo abre em uma tela preta. O que isso significa?",
        "answer": "Normalmente é um download incompleto, uma variante de arquivo não suportada ou uma dependência ausente, como uma BIOS. Verifique primeiro o download, depois a extensão e então o erro exato informado pelo núcleo."
      },
      {
        "id": "worked-before",
        "question": "Um jogo funcionava antes e agora não funciona. Por quê?",
        "answer": "Verifique se a versão do app, o núcleo selecionado ou o local do arquivo mudaram. Os save states são específicos do núcleo, então um estado gravado por outro núcleo pode não carregar, mesmo que o jogo em si ainda funcione."
      },
      {
        "id": "support",
        "question": "O que devo enviar em uma solicitação de suporte?",
        "answer": "A versão do app, o sistema, o núcleo selecionado e o texto exato do erro. Não anexe arquivos comerciais de jogo nem de BIOS."
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
    "title": "Retropa Plus: o que é grátis e o que exige o Plus",
    "description": "Quais recursos do Retropa são grátis e quais exigem o Retropa Plus: sistemas portáteis, famílias de arcade, Skins premium, Filtros avançados e modo console. Os preços atuais são mostrados no app.",
    "summary": "O Retropa é gratuito para baixar. A emulação de portáteis está disponível sem pagar; famílias de arcade, Skins premium e Filtros de imagem avançados fazem parte do Retropa Plus. Os preços atuais e os planos disponíveis são mostrados dentro do app.",
    "sections": [
      {
        "title": "O que está disponível gratuitamente",
        "body": "Baixar o Retropa não custa nada, e a emulação de portáteis funciona sem compra. Você pode importar seus próprios arquivos de jogo, usar as Skins padrão, usar predefinições de imagem convencionais e configurar save states e mapeamento de Controle. Importar um arquivo nunca dispara um pagamento.",
        "points": [
          "Download gratuito.",
          "Sistemas portáteis disponíveis sem compra.",
          "Skins padrão e predefinições de imagem convencionais incluídas.",
          "Importar um jogo nunca desbloqueia nem exige um recurso pago."
        ]
      },
      {
        "title": "O que exige o Retropa Plus",
        "body": "O Retropa Plus cobre as famílias de arcade, as Skins premium e os Filtros de imagem avançados. São capacidades adicionais, e não restrições ao que você já tinha: o jogo em portáteis continua funcionando, com ou sem assinatura.",
        "points": [
          "Famílias de arcade: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Skins premium.",
          "Filtros avançados de CRT e LCD.",
          "Modo console e fluxos de Save avançados."
        ]
      },
      {
        "title": "Por que o suporte a arcade faz parte do Plus",
        "body": "A emulação de arcade é um trabalho à parte: várias placas, conjuntos com múltiplos arquivos, dependências de BIOS e compatibilidade por conjunto. Tratá-la como uma capacidade adicional mantém o nível gratuito simples e mantém a experiência de portáteis disponível para todos, sem custo.",
        "points": [
          "Hardware de arcade não é hardware de portátil.",
          "Conjuntos de arcade têm vários arquivos e podem precisar de BIOS.",
          "O suporte a portáteis não depende do Plus."
        ]
      },
      {
        "title": "Jogos e arquivos de BIOS nunca estão incluídos",
        "body": "Nenhum nível do Retropa fornece arquivos de jogo ou de BIOS, porque o app é um emulador. Você fornece o conteúdo que tem o direito de usar, e essa exigência não muda com uma compra. Uma assinatura desbloqueia capacidades do emulador, não conteúdo.",
        "points": [
          "Nenhum jogo é incluído em qualquer nível.",
          "Nenhum arquivo de BIOS é fornecido.",
          "Importe apenas conteúdo que você tem o direito de usar."
        ]
      },
      {
        "title": "Onde ver os preços atuais",
        "body": "Preços, planos disponíveis e eventuais ofertas regionais são mostrados dentro do app, onde a App Store pode apresentá-los na sua moeda local. Esta página, de propósito, não lista preços, para que uma mudança de preço nunca a deixe desatualizada.",
        "points": [
          "Os preços são exibidos no app.",
          "A disponibilidade pode variar conforme a região.",
          "As compras são processadas pela App Store."
        ]
      },
      {
        "title": "As compras são processadas pela App Store",
        "body": "Todas as compras e assinaturas passam pela App Store. O Retropa não processa pagamentos na web, e este site nunca pede dados de cartão. Renovações, cancelamentos e reembolsos são gerenciados pela App Store conforme os termos dela.",
        "points": [
          "Nenhum pagamento é coletado neste site.",
          "Gerencie ou cancele uma assinatura nos ajustes da App Store.",
          "Os reembolsos seguem a política da App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Posso usar o Retropa sem pagar?",
        "answer": "Sim. Baixar o Retropa é gratuito e a emulação de portáteis funciona sem compra. Famílias de arcade, Skins premium e Filtros avançados exigem o Retropa Plus."
      },
      {
        "id": "price",
        "question": "Quanto custa o Retropa Plus?",
        "answer": "Os preços e os planos disponíveis são mostrados dentro do app, onde a App Store pode apresentá-los na sua moeda local. Esta página não lista preços, para que mudanças de preço nunca a deixem desatualizada."
      },
      {
        "id": "buy-here",
        "question": "Posso assinar neste site?",
        "answer": "Não. As compras são processadas inteiramente pela App Store. Este site nunca coleta dados de pagamento."
      },
      {
        "id": "content",
        "question": "O Plus inclui jogos?",
        "answer": "Não. Nenhum nível do Retropa fornece arquivos de jogo ou de BIOS. Você importa conteúdo que tem o direito de usar."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
