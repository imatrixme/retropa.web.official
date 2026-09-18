import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "Emulador de GBA para iPhone e iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Traga seus próprios arquivos .gba para o Retropa. Comece com um jogo funcionando, escolha uma Skin de portátil, mapeie um Controle e encontre o tratamento de tela que parece certo.",
    "imageAlt": "Arte de produto do Retropa com layouts de Controles de portátil em retrato e paisagem",
    "sections": [
      {
        "title": "Comece com um arquivo de jogo .gba",
        "body": "O Retropa roda jogos de GBA compatíveis no iPhone e no iPad com iOS 18 ou mais recente. O app é gratuito para baixar, mas não inclui jogos nem arquivos de BIOS. Use um arquivo de jogo que você tem o direito de usar e mantenha o original fora do app como backup.",
        "points": [
          "Um jogo de GBA normalmente usa a extensão .gba.",
          "Um arquivo .gb ou .gbc pertence ao GB ou ao GBC, e não ao GBA.",
          "Mudar a extensão de um arquivo não converte o jogo para outro sistema."
        ]
      },
      {
        "title": "Importe pelo app Arquivos",
        "body": "Confirme que o arquivo está disponível localmente no app Arquivos, e não apenas visível como um item na nuvem. Abra a entrada de importação na biblioteca do Retropa e selecione o jogo. Assim que ele aparecer na biblioteca, abra-o e confirme se imagem, som e Controles padrão funcionam antes de personalizar o layout."
      },
      {
        "title": "Escolha o layout de portátil certo",
        "body": "Um layout de GBA precisa de espaço para o direcional, A e B, os botões de ombro, Start e Select. Teste os botões, não apenas a arte. O Retropa importa pacotes .deltaskin, mas uma Skin de DS não substitui um layout de GBA. Verifique se o pacote é compatível com a orientação do seu dispositivo.",
        "points": [
          "Mantenha a área do jogo livre nas duas orientações que você usa.",
          "Pareie Controles físicos compatíveis no iOS e depois confira o mapeamento deles no Retropa.",
          "Skins premium e Filtros avançados exigem o Plus; importar um arquivo não desbloqueia recursos pagos."
        ]
      },
      {
        "title": "Caráter de LCD ou pixels limpos?",
        "body": "Comece pela imagem original. Um tratamento leve de LCD resgata a sensação de uma tela de portátil, enquanto um tratamento CRT cria uma apresentação diferente. Os Filtros avançados do Retropa consideram a área de saída real, sem exigir escala inteira. Os Filtros mudam a imagem, não a resolução do jogo nem a compatibilidade do arquivo."
      },
      {
        "title": "Quando uma importação ou um Save não funciona",
        "body": "Verifique primeiro a extensão do arquivo, o sistema selecionado e a mensagem de erro exata. Se o app Arquivos não conseguir abrir nem baixar o original, conclua essa etapa antes de importar de novo. Em erros de BIOS, siga a exigência do núcleo selecionado; um neogeo.zip de arcade não é uma BIOS de GBA. O Save do próprio jogo e um save state do emulador são artefatos diferentes: não renomeie um para virar o outro e mantenha backups antes de mover algo entre núcleos ou apps.",
        "points": [
          "Teste a Skin padrão e um Filtro simples ao isolar um problema de Controle ou de imagem.",
          "Anote a versão do app, o sistema, o núcleo e o erro para o suporte.",
          "Não anexe arquivos de ROM ou BIOS comerciais a uma solicitação de suporte."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Veja os arquivos compatíveis e os núcleos de GBA"
  },
  "ds-emulator": {
    "title": "Emulador de DS para iPhone e iPad",
    "label": "DS",
    "image": "library",
    "summary": "Importe seus jogos .nds para o Retropa e abra espaço para as duas telas. Verifique a entrada por toque, os Controles e os requisitos de arquivo antes de escolher um novo layout ou Filtro.",
    "imageAlt": "Arte de produto do Retropa mostrando a biblioteca de jogos e os ajustes no iPhone",
    "sections": [
      {
        "title": "Prepare um jogo .nds",
        "body": "DS e GBA são sistemas diferentes. O Retropa roda arquivos .nds de DS no iPhone e no iPad com iOS 18 ou mais recente. Use arquivos que você tem o direito de usar e mantenha um backup separado. O app não fornece downloads de ROM nem de BIOS, e um arquivo .gba não vira um jogo de DS só porque foi renomeado."
      },
      {
        "title": "Importe e verifique as duas telas",
        "body": "Baixe o arquivo do jogo localmente no app Arquivos e depois selecione-o na entrada de importação da biblioteca do Retropa. Abra o jogo importado com o layout padrão. Confira as duas áreas de exibição e teste a entrada por toque em uma parte do jogo que a utilize. Só a tela de título não basta para confirmar que todas as entradas necessárias estão ao alcance.",
        "points": [
          "Comece com o sistema detectado ou selecionado para o arquivo .nds.",
          "Siga qualquer exigência de BIOS ou de firmware informada pelo núcleo instalado.",
          "Mantenha uma cópia do arquivo original durante o diagnóstico de erros."
        ]
      },
      {
        "title": "Dê espaço suficiente à tela sensível ao toque",
        "body": "Duas telas exigem um layout diferente do de um portátil de tela única. Escolha uma Skin de DS que deixe as duas telas e os Controles necessários visíveis. O modo retrato pode dar às telas um arranjo vertical natural; o suporte a paisagem depende da Skin escolhida. Confira os alvos de toque pequenos no tamanho em que você realmente joga, especialmente em um iPhone menor."
      },
      {
        "title": "Um Controle não substitui toda ação de toque",
        "body": "O Retropa é compatível com Controles externos compatíveis e com mapeamento de botões. Pareie o Controle no iOS e confirme as atribuições no app. Um direcional físico e botões de ação não substituem automaticamente as interações de toque de um jogo. Verifique essas interações antes de adotar uma configuração só com Controle."
      },
      {
        "title": "Mantenha a primeira sessão simples",
        "body": "Confirme a compatibilidade do jogo e das entradas antes de aplicar uma cadeia de shaders complexa. Se a imagem ou o ritmo dos quadros mudar depois de escolher um Filtro, volte a uma predefinição simples e compare. Dispositivo, núcleo e tamanho de saída afetam o desempenho; o suporte a DS não é a promessa de resultados idênticos para todo jogo e todo iPhone.",
        "points": [
          "Skins premium e Filtros avançados exigem o Retropa Plus.",
          "Mantenha os Saves originais e os save states com backup; eles não são formatos de arquivo intercambiáveis.",
          "Para o suporte, informe a versão do app, o núcleo selecionado e o erro exato, e não os arquivos de jogo ou de BIOS."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Veja os arquivos compatíveis e os núcleos de DS"
  },
  "arcade": {
    "title": "Emulador de arcade para iPhone e iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Jogue arquivos de arcade CPS, Neo Geo, PGM e M92 compatíveis no Retropa, com Controles de toque, Controles externos e Filtros CRT. Jogar arcade exige o Plus; jogos e arquivos de BIOS não estão incluídos.",
    "imageAlt": "Arte de produto do Retropa mostrando a biblioteca de jogos e os ajustes",
    "sections": [
      {
        "title": "CPS, Neo Geo e a placa de arcade",
        "body": "O Retropa é compatível com famílias de arcade como CPS I, CPS II, CPS III, Neo Geo, PGM e M92. Combine seu jogo com a placa de arcade e o conjunto de ROM esperados pelo núcleo instalado. O suporte a uma família não garante que todo arquivo vai rodar.",
        "points": [
          "Confirme o sistema no app antes de escolher um arquivo.",
          "A execução de arcade exige o Retropa Plus.",
          "O Retropa não inclui arquivos comerciais de ROM nem de BIOS."
        ]
      },
      {
        "title": "Arcade Neo Geo não é Neo Geo Pocket",
        "body": "Jogos de arcade Neo Geo e jogos portáteis de Neo Geo Pocket usam sistemas e arquivos diferentes. Se um jogo de arcade informar que falta a BIOS de Neo Geo, abra Arcade BIOS no Retropa, importe o pacote neogeo.zip necessário e tente o jogo de novo. Uma ROM de Pocket ou um ZIP renomeado não substituem esse arquivo.",
        "points": [
          "Use arquivos de BIOS que você tem o direito de usar; o Retropa não fornece downloads.",
          "Um pacote de BIOS não substitui dados ausentes de ROM do jogo, do conjunto parent ou do clone.",
          "Confira o erro exato e mantenha o arquivo original antes de fazer qualquer alteração."
        ]
      },
      {
        "title": "Por que um ZIP de arcade é diferente",
        "body": "Uma ROM de portátil costuma ser uma única imagem de jogo. Um conjunto de arcade pode conter vários chips de ROM e depender de um conjunto parent ou de uma BIOS. Renomear um arquivo sem relação para .zip não o torna compatível. Mantenha o arquivo fornecido intacto, a menos que o fluxo de importação peça explicitamente para descompactá-lo."
      },
      {
        "title": "Quando um jogo não inicia",
        "body": "Verifique primeiro a placa selecionada e o erro exibido pelo Retropa. Depois confira se o seu conjunto está completo e se a BIOS ou os arquivos parent necessários estão disponíveis. Um arquivo de clone sozinho pode não incluir todos os arquivos de que um núcleo precisa. Trocar de Filtro ou comprar outra Skin não corrige dados de ROM ausentes.",
        "points": [
          "Mantenha seus arquivos originais durante o diagnóstico de uma importação.",
          "Anote a versão do app, o sistema e o erro exibido ao falar com o suporte.",
          "Não envie arquivos comerciais de ROM ou BIOS com uma solicitação de suporte."
        ]
      },
      {
        "title": "Prepare a primeira sessão",
        "body": "Assim que o jogo iniciar, identifique os Controles de ficha, de start e de ação. Com um Controle externo, confira o mapeamento e também os rótulos na tela. Comece com uma predefinição de imagem simples; escolha um tratamento CRT depois de confirmar que o jogo e os Controles funcionam corretamente."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Confira o catálogo de sistemas e de núcleos"
  },
  "delta-skins": {
    "title": "Importe Skins do Delta no iPhone e no iPad",
    "label": "Skins",
    "image": "material",
    "summary": "Mude os Controles ao redor do seu jogo, não apenas o plano de fundo. O Retropa importa pacotes .deltaskin e oferece sua própria coleção de Skins para iPhone e iPad.",
    "imageAlt": "Arte de produto do Retropa mostrando Skins de Controle em retrato e paisagem, em materiais diferentes",
    "sections": [
      {
        "title": "Uma Skin é um layout de Controle",
        "body": "A área do jogo, o direcional, os botões de ação e os Controles de menu precisam de espaço. Uma Skin define onde cada um desses elementos fica. Escolha uma para o sistema que você está jogando e para a orientação que você usa, em vez de decidir só pela cor.",
        "points": [
          "Confira o sistema pretendido antes de importar um pacote.",
          "O suporte a retrato e a paisagem depende dos layouts que a Skin oferece.",
          "Um formato de pacote compatível não garante que todo layout de terceiros caiba em todo dispositivo."
        ]
      },
      {
        "title": "Importe um pacote .deltaskin",
        "body": "Guarde o arquivo de Skin original, abra a entrada de importação de Skins do Retropa e selecione o pacote no app Arquivos. Depois de importar, selecione-o para o sistema correspondente. Inicie um jogo e confira a área da tela, os Controles direcionais e cada botão de ação antes de adotá-la como layout padrão.",
        "points": [
          "Use o pacote .deltaskin completo, não uma captura de tela da Skin.",
          "Se o pacote falhar, verifique o formato e o sistema pretendido antes de testar outro layout.",
          "Volte para uma Skin que funciona se Controles essenciais ficarem encobertos."
        ]
      },
      {
        "title": "Controles de toque e Controles físicos",
        "body": "O Retropa também é compatível com Controles externos compatíveis e com mapeamento de botões configurável. Pareie o Controle no iOS primeiro e depois confira o mapeamento no Retropa. Uma Skin visual e um perfil de Controle têm funções diferentes: mudar a arte não substitui a conferência das atribuições dos botões físicos."
      },
      {
        "title": "Pacotes e limites de compra",
        "body": "O PackHub é o lugar para explorar os pacotes de Skin do Retropa. Skins premium exigem o Plus; pacotes importados não ignoram a verificação de direitos. Confira o plano atual e os requisitos do pacote no app antes de comprar. A compatibilidade com o Delta descreve um formato de arquivo, e não uma afiliação com o projeto Delta."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Explore Skins no PackHub"
  },
  "crt-filters": {
    "title": "Filtros CRT para emuladores no iPhone e no iPad",
    "label": "Filtros",
    "image": "filter",
    "summary": "Os Filtros avançados de CRT e LCD do Retropa se adaptam à sua área de exibição real, sem exigir escala inteira. Mantenha o caráter de uma tela retrô em todos os tamanhos de iPhone, layouts de iPad e orientações.",
    "imageAlt": "Arte de produto do Retropa mostrando a seleção de Filtros de imagem e tratamentos de tela CRT",
    "sections": [
      {
        "title": "Escolha o tipo de tela e depois a intensidade",
        "body": "A apresentação por pixel mais próximo mantém os limites originais dos pixels bem definidos. Tratamentos CRT usam scanlines, máscaras e sombreamento nas bordas; tratamentos LCD acrescentam uma estrutura de pixels ou subpixels. Essas escolhas mudam a apresentação, não a resolução do jogo por trás dela.",
        "points": [
          "Comece pela imagem sem Filtro como referência.",
          "Confira textos pequenos, bordas claras e áreas escuras, e não apenas a tela de título.",
          "Avalie o resultado no tamanho e na orientação em que você realmente joga."
        ]
      },
      {
        "title": "Sem exigência de escala inteira",
        "body": "A escala inteira mapeia cada pixel do jogo para um número inteiro de pixels da tela. Ela pode ser útil para uma saída nítida por pixel mais próximo, mas costuma deixar espaço sobrando. Os Filtros avançados do Retropa consideram a área de saída real, então a estrutura de exibição deles não fica restrita a um múltiplo de 2x, 3x ou outro número inteiro. Você pode manter a proporção do jogo e ainda usar uma área que caiba no seu iPhone ou na sua Skin.",
        "points": [
          "O CRT V4 reconstrói a cobertura do feixe e filtra analiticamente a estrutura de fósforo usando a pegada em pixels da saída.",
          "O Trinitron usa feixes de scanline integrados e harmônicos de grade de abertura com banda limitada.",
          "O DMG integra a cobertura das células de cristal líquido em vez de simplesmente amostrar uma grade ponto a ponto."
        ]
      },
      {
        "title": "Mais do que uma sobreposição de scanlines",
        "body": "As predefinições básicas CRT Lite, LCD Grid e Scanline oferecem tratamentos de tela mais leves. As predefinições avançadas modelam mais do próprio display: largura do feixe, transmissão do fósforo ou material refletivo de cristal líquido. Grades amostradas diretamente podem ficar irregulares em escalas fracionárias; a integração ciente da saída ajuda o detalhe não resolvido a se misturar naturalmente. Isso não significa que todo Filtro convencional precise de escala inteira, nem que todo dispositivo e toda predefinição fiquem livres de artefatos."
      },
      {
        "title": "O que a comparação no navegador mostra",
        "body": "A prévia no navegador mostra os Filtros básicos e também o CRT V4, o Trinitron V1 e o DMG informados pelo modo nativo. Os modos avançados adaptam fórmulas nativas selecionadas, incluindo a integração da pegada em pixels, com uma única curva de apresentação compartilhada. O renderizador web deixa de fora a persistência temporal, a cadeia completa de bloom multi-pass e o gerenciamento de cor nativo. Ele demonstra características de exibição, e não uma saída Metal idêntica pixel a pixel nem imagens reais de jogabilidade."
      },
      {
        "title": "Importe predefinições de shader do RetroArch",
        "body": "Uma predefinição .slangp pode referenciar vários passes de shader, texturas e valores de parâmetros. Mantenha essas dependências juntas na importação. Um arquivo de predefinição sozinho pode ficar incompleto; um arquivo .slang descreve um shader, e não uma coleção inteira.",
        "points": [
          "Use pacotes destinados ao fluxo de shaders compatível.",
          "Se uma predefinição não carregar, verifique os arquivos referenciados e a compatibilidade antes de mexer no jogo.",
          "Teste uma predefinição mais leve se uma cadeia complexa afetar o ritmo dos quadros ou o consumo de bateria."
        ]
      },
      {
        "title": "A qualidade de imagem tem um custo de desempenho",
        "body": "Um Filtro multi-pass pode exigir mais trabalho da GPU do que uma saída por pixel mais próximo. O desempenho depende do dispositivo, do núcleo do emulador, da resolução de saída e da predefinição. O Retropa não promete que todo shader importado rode igualmente bem em todo iPhone. Os Filtros avançados exigem o Plus; confirme as opções disponíveis no app."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Explore Filtros no PackHub"
  }
}
