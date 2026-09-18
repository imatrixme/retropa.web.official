import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Como importar ROMs no Retropa | Guia para iPhone e iPad",
  "description": "Importe jogos de GBA, DS e arcade no iPhone e no iPad. Respostas sobre ROMs, BIOS, Skins do Delta, Controles, Saves, Plus e Filtros avançados sem escala inteira.",
  "title": "Seu primeiro jogo no Retropa.",
  "intro": "De um arquivo que é seu até um jogo que você pode jogar. Comece com um sistema portátil compatível e depois deixe os Controles e a imagem com a sua cara.",
  "steps": [
    [
      "Instale o Retropa",
      "Instale o Retropa pela App Store em um iPhone ou iPad com iOS 18 ou mais recente. O app é gratuito para baixar; alguns recursos exigem o Plus."
    ],
    [
      "Importe seu jogo",
      "Abra a entrada de importação na sua biblioteca e escolha uma ROM compatível no app Arquivos. Para GBA, use um arquivo .gba; para DS, um arquivo .nds. Mantenha o arquivo original como backup. ROMs e arquivos de BIOS não são fornecidos."
    ],
    [
      "Abra o jogo pela biblioteca",
      "Selecione o jogo importado e comece a jogar. Confira os Controles na tela antes de trocar Skins ou Filtros. Se um jogo não iniciar, verifique o sistema, o formato do arquivo e qualquer BIOS exigida."
    ]
  ],
  "faqTitle": "Antes de começar",
  "systems": "Veja os sistemas compatíveis",
  "support": "Precisa de ajuda?",
  "faqs": [
    {
      "id": "devices",
      "question": "Quais iPhones e iPads rodam o Retropa?",
      "answer": "O Retropa está disponível na App Store para iPhone e iPad com iOS 18 ou mais recente. Confira a seção de compatibilidade da App Store para o seu dispositivo. Núcleos de arcade mais exigentes e Filtros de imagem multi-pass podem pedir mais desempenho do que um jogo de portátil simples."
    },
    {
      "id": "systems",
      "question": "O Retropa roda jogos de GBA, Nintendo DS e arcade?",
      "answer": "O Retropa é compatível com GBA, DS e outros sistemas portáteis e de console listados, além de famílias de arcade compatíveis como CPS, PGM e M92. A compatibilidade depende do app instalado, do núcleo e do formato do jogo; ela não significa que todo jogo ou todo arquivo de arcade é aceito.",
      "link": "cores",
      "linkLabel": "Veja os sistemas e formatos de arquivo compatíveis"
    },
    {
      "id": "games",
      "question": "O Retropa inclui jogos ou ROMs para baixar?",
      "answer": "Não. O Retropa é um emulador, e não uma assinatura de jogos comerciais nem uma loja de ROMs. Traga conteúdo que você tem o direito de usar, como seus próprios projetos ou homebrew distribuído com permissão. ROMs comerciais e arquivos de BIOS não são fornecidos."
    },
    {
      "id": "import",
      "question": "Como importo uma ROM de GBA ou de DS no iPhone?",
      "answer": "Mantenha o arquivo do jogo em um local acessível pelo app Arquivos do iOS. Abra a entrada de importação na biblioteca do Retropa, selecione o arquivo compatível e abra o jogo importado pela biblioteca. O GBA usa .gba e o DS usa .nds. Renomear um arquivo com outra extensão não converte o jogo para o formato correto."
    },
    {
      "id": "bios",
      "question": "Preciso de um arquivo de BIOS para o Retropa?",
      "answer": "Os requisitos de BIOS variam conforme o sistema e o núcleo. Se o Retropa informar que falta uma BIOS, verifique a exigência daquele sistema e forneça o arquivo correto pelo fluxo compatível do app. Uma BIOS de outro sistema não substitui a certa. O Retropa não fornece downloads de BIOS.",
      "link": "cores",
      "linkLabel": "Confira os requisitos de cada sistema"
    },
    {
      "id": "arcade-zip",
      "question": "Por que meu ZIP ou conjunto de arcade não inicia?",
      "answer": "Um arquivo de arcade precisa corresponder à placa e ao conjunto de ROM esperados pelo núcleo. Alguns conjuntos também dependem de um conjunto parent ou de uma BIOS, então um arquivo de clone sozinho pode ficar incompleto. Mantenha o arquivo intacto, a menos que o app peça para descompactá-lo. A execução de arcade também exige o Plus; uma assinatura não conserta dados de ROM ausentes ou incompatíveis."
    },
    {
      "id": "missing-file",
      "question": "Por que vejo um jogo no app Arquivos, mas não consigo importá-lo?",
      "answer": "Verifique se o arquivo real está disponível localmente, e não apenas como um item na nuvem, e se o formato dele corresponde a um sistema compatível. Confira também qualquer erro exibido pelo Retropa. Mantenha um backup do original durante o diagnóstico da importação e não presuma que um ZIP renomeado ou um download incompleto seja uma ROM válida."
    },
    {
      "id": "offline",
      "question": "Posso jogar jogos armazenados localmente sem streaming?",
      "answer": "O Retropa roda os arquivos de jogo compatíveis no seu dispositivo, em vez de transmitir a jogabilidade de um emulador na nuvem. Importe primeiro os arquivos de jogo e de BIOS necessários. Baixar pacotes, buscar informações on-line e usar recursos de nuvem ainda exigem acesso próprio à rede."
    },
    {
      "id": "delta-skins",
      "question": "Posso usar Skins do Delta no Retropa?",
      "answer": "O Retropa importa pacotes .deltaskin. Use o pacote completo, escolha um layout para o sistema correspondente e confira o suporte a retrato ou a paisagem. O suporte ao formato não garante que toda Skin de terceiros caiba em todo iPhone. A compatibilidade com o Delta descreve um formato de arquivo, e não uma afiliação.",
      "link": "delta-skins",
      "linkLabel": "Leia o guia de importação de Skins do Delta"
    },
    {
      "id": "controllers",
      "question": "O Retropa é compatível com Controles Bluetooth ou externos?",
      "answer": "O Retropa é compatível com Controles externos compatíveis e com mapeamento de botões configurável. Conecte o Controle pelo iOS primeiro e depois confira o mapeamento no Retropa. Em jogos de arcade, verifique as atribuições de ficha e de start, além dos botões de ação. A compatibilidade depende do Controle e do suporte do iOS."
    },
    {
      "id": "saves",
      "question": "Saves dentro do jogo e save states do emulador são a mesma coisa?",
      "answer": "Não. Um Save dentro do jogo é criado pelo próprio jogo; um save state captura a execução do emulador. Os save states podem depender do núcleo e da versão exatos, então não presuma que são portáveis entre apps ou entre núcleos. Preserve seus arquivos originais e seus backups antes de mover ou substituir Saves."
    },
    {
      "id": "plus",
      "question": "O Retropa é grátis e o que o Plus desbloqueia?",
      "answer": "O Retropa é gratuito para baixar. Núcleos de arcade, Skins premium e Filtros avançados exigem o Retropa Plus. Os planos atuais, os preços por região e as condições de compra são exibidos dentro do app antes da compra. Um download gratuito não significa que todo núcleo ou recurso está incluído."
    },
    {
      "id": "restore",
      "question": "Como restauro uma compra anterior do Retropa Plus?",
      "answer": "Use a ação de restaurar compras do app com a Conta Apple usada na compra original. Verifique se a compra ou a assinatura ainda está válida. Restaurar um direito não devolve arquivos de ROM nem Saves ausentes. Fale com o suporte informando a versão do app e o problema da compra, e nunca a senha da sua conta."
    },
    {
      "id": "advanced-filters",
      "question": "Como os Filtros avançados do Retropa diferem dos Filtros CRT comuns?",
      "answer": "Filtros de imagem simples muitas vezes apenas sobrepõem scanlines ou grades de pixels amostradas. As predefinições avançadas do Retropa, como CRT V4 e Trinitron, modelam a estrutura do feixe e do fósforo com integração da pegada em pixels da saída ou filtragem com banda limitada. O DMG inclui células de cristal líquido integradas e um substrato reflexivo. São modelos de exibição, e não apenas um tom de cor.",
      "link": "crt-filters",
      "linkLabel": "Compare os Filtros de imagem avançados"
    },
    {
      "id": "integer-scaling",
      "question": "Os Filtros avançados do Retropa exigem escala inteira?",
      "answer": "Não. Os Filtros avançados do Retropa consideram o tamanho de saída real, em vez de exigir uma escala de 2x, 3x ou outro número inteiro. Isso dá mais liberdade para encaixar um jogo na área de exibição do seu iPhone, na orientação escolhida ou na Skin que você usa. A proporção original pode permanecer intacta. Os resultados ainda dependem da predefinição e do dispositivo; os Filtros não criam resolução extra na fonte.",
      "link": "crt-filters",
      "linkLabel": "Entenda a renderização em escala fracionária"
    },
    {
      "id": "shader-import",
      "question": "O Retropa importa shaders .slang e .slangp do RetroArch?",
      "answer": "O Retropa é compatível com os fluxos de shaders .slang e .slangp. Uma predefinição pode referenciar vários passes ou texturas; mantenha essas dependências juntas na importação. Não há garantia de que toda predefinição de terceiros funcione. Se uma falhar, verifique os arquivos e a compatibilidade dela, em vez de renomeá-la ou mexer no jogo.",
      "link": "crt-filters",
      "linkLabel": "Leia sobre compatibilidade de shaders"
    },
    {
      "id": "performance",
      "question": "Os Filtros avançados afetam a taxa de quadros ou a bateria?",
      "answer": "Podem afetar. A renderização multi-pass exige mais trabalho da GPU do que uma imagem sem Filtro, e o custo varia conforme a predefinição, o tamanho de saída, o dispositivo e o núcleo do emulador. Compare com a imagem original se notar lentidão e depois teste um Filtro mais leve. A escala sem exigência de números inteiros é um recurso de qualidade de imagem, e não a promessa de desempenho ilimitado da GPU."
    },
    {
      "id": "packages",
      "question": "Onde consigo Skins e pacotes de Filtros do Retropa?",
      "answer": "Explore o PackHub para encontrar pacotes de Skins e de shaders. Confira no app o sistema, o formato e os requisitos de Plus de cada pacote. Recursos importados não ignoram a verificação de direitos. Se precisar de ajuda, inclua a versão do app, o nome do pacote e a mensagem de erro, mas não envie ROMs comerciais nem arquivos de BIOS."
    }
  ]
}
