import type { Locale } from "@/i18n/locales"

const navigation = {
  en: ["Systems", "Skins", "Filters", "Start playing"],
  "zh-Hans": ["游戏系统", "皮肤", "滤镜", "开始游玩"],
  "zh-Hant": ["遊戲系統", "外觀", "濾鏡", "開始遊玩"],
  ja: ["システム", "スキン", "フィルター", "始める"],
  ko: ["시스템", "스킨", "필터", "시작하기"],
  fr: ["Systèmes", "Skins", "Filtres", "Bien démarrer"],
  de: ["Systeme", "Skins", "Filter", "Loslegen"],
  es: ["Sistemas", "Skins", "Filtros", "Primeros pasos"],
  it: ["Sistemi", "Skin", "Filtri", "Inizia a giocare"],
  "pt-BR": ["Sistemas", "Skins", "Filtros", "Comece a jogar"],
  ru: ["Системы", "Обложки", "Фильтры", "Начать игру"],
  tr: ["Sistemler", "Temalar", "Filtreler", "Başlayın"],
  id: ["Sistem", "Skin", "Filter", "Mulai bermain"],
  th: ["ระบบ", "สกิน", "ฟิลเตอร์", "เริ่มเล่น"],
  vi: ["Hệ máy", "Giao diện", "Bộ lọc", "Bắt đầu chơi"],
} as const satisfies Record<Locale, readonly [string, string, string, string]>

export const navigationCopy = (locale: Locale) => navigation[locale]

type DiscoveryCopy = {
  index: string; intro: string; gba: string; ds: string; arcade: string
  explore: string; skins: string; skinNote: string; library: string; libraryNote: string
  more: string; onThisPage: string; related: string; guide: string; original: string
  openMenu: string; closeMenu: string; skip: string; home: string; included: string
  guides: string; free: string; arcadeLabel: string; collection: string
}

const discovery: Record<Locale, DiscoveryCopy> = {
  en: {
    index: "Pick up where you left off.", intro: "GBA, DS and arcade. The games you remember, on the iPhone and iPad you already carry.",
    gba: "A whole childhood in your pocket.", ds: "Two screens. Twice the memories.", arcade: "Back to your favorite cabinet.",
    explore: "Choose your system", skins: "Make it feel like yours.", skinNote: "Portrait or landscape. Metal, glass, color. A different feel for the buttons you know by heart.",
    library: "Your next game. Right here.", libraryNote: "From your files to your collection. Handhelds and arcade, with everything in its place.",
    more: "All systems & cores", onThisPage: "On this page", related: "Keep exploring", guide: "Import guide", original: "View full product artwork",
    openMenu: "Open navigation", closeMenu: "Close navigation", skip: "Skip to content", home: "Home", included: "Games and BIOS files are not included.",
    guides: "Guides", free: "What is free", arcadeLabel: "Arcade", collection: "PLAY COLLECTION",
  },
  "zh-Hans": {
    index: "游戏，从这里继续。", intro: "GBA、DS 与街机。你熟悉的游戏，在 iPhone 和 iPad 上接着玩。",
    gba: "一台掌机，一整个童年。", ds: "双屏的乐趣，随身带走。", arcade: "投币之后，还是那一局。",
    explore: "选择你的游戏系统", skins: "握在手里的，应该是你的风格。", skinNote: "横屏、竖屏，不同材质。为熟悉的按键，找到新的手感。",
    library: "把想玩的，都放在一起。", libraryNote: "从文件导入到游戏库，从掌机到街机。下一局，不必翻找。",
    more: "所有系统与核心", onThisPage: "本页内容", related: "继续探索", guide: "导入指南", original: "查看完整产品图",
    openMenu: "打开导航", closeMenu: "关闭导航", skip: "跳到正文", home: "首页", included: "游戏与 BIOS 需自行提供。",
    guides: "使用指南", free: "哪些功能免费", arcadeLabel: "街机", collection: "游戏收藏",
  },
  "zh-Hant": {
    index: "遊戲，從這裡繼續。", intro: "GBA、DS 與街機。你熟悉的遊戲，在 iPhone 和 iPad 上接著玩。",
    gba: "一台掌機，一整個童年。", ds: "雙螢幕的樂趣，隨身帶走。", arcade: "投幣之後，還是那一局。",
    explore: "選擇你的遊戲系統", skins: "握在手裡的，應該是你的風格。", skinNote: "橫向、直向，不同材質。為熟悉的按鍵，找到新的手感。",
    library: "把想玩的，都放在一起。", libraryNote: "從檔案匯入到遊戲庫，從掌機到街機。下一局，不必翻找。",
    more: "所有系統與核心", onThisPage: "本頁內容", related: "繼續探索", guide: "匯入指南", original: "查看完整產品圖",
    openMenu: "開啟導覽", closeMenu: "關閉導覽", skip: "跳至正文", home: "首頁", included: "遊戲與 BIOS 需自行提供。",
    guides: "使用指南", free: "哪些功能免費", arcadeLabel: "街機", collection: "遊戲收藏",
  },
  de: {
    index: "Spiel dort weiter, wo du aufgehört hast.", intro: "GBA, DS und Arcade. Deine vertrauten Spiele auf dem iPhone und iPad, das du ohnehin dabei hast.",
    gba: "Eine ganze Kindheit in deiner Tasche.", ds: "Zwei Bildschirme. Doppelt so viele Erinnerungen.", arcade: "Zurück an deinen Lieblingsautomaten.",
    explore: "Wähle dein System", skins: "Mach es zu deinem.", skinNote: "Hoch- oder Querformat. Metall, Glas, Farbe. Ein neues Gefühl für die Tasten, die du im Schlaf kennst.",
    library: "Dein nächstes Spiel. Genau hier.", libraryNote: "Von deinen Dateien in deine Sammlung. Handhelds und Arcade, alles an seinem Platz.",
    more: "Alle Systeme und Kerne", onThisPage: "Auf dieser Seite", related: "Weiter entdecken", guide: "Importanleitung", original: "Vollständiges Produktbild ansehen",
    openMenu: "Navigation öffnen", closeMenu: "Navigation schließen", skip: "Zum Inhalt springen", home: "Startseite", included: "Spiele und BIOS-Dateien sind nicht enthalten.",
    guides: "Anleitungen", free: "Was ist kostenlos?", arcadeLabel: "Arcade", collection: "SPIELESAMMLUNG",
  },
  es: {
    index: "Retoma la partida donde la dejaste.", intro: "GBA, DS y arcade. Los juegos que recuerdas, en el iPhone y iPad que ya llevas contigo.",
    gba: "Toda una infancia en tu bolsillo.", ds: "Dos pantallas. El doble de recuerdos.", arcade: "Vuelve a tu máquina favorita.",
    explore: "Elige tu sistema", skins: "Dale tu propio estilo.", skinNote: "Vertical u horizontal. Metal, cristal, color. Un tacto diferente para los botones que conoces de memoria.",
    library: "Tu próximo juego. Aquí mismo.", libraryNote: "De tus archivos a tu colección. Portátiles y arcade, todo en su sitio.",
    more: "Todos los sistemas y núcleos", onThisPage: "En esta página", related: "Sigue explorando", guide: "Guía de importación", original: "Ver la imagen completa del producto",
    openMenu: "Abrir navegación", closeMenu: "Cerrar navegación", skip: "Saltar al contenido", home: "Inicio", included: "No se incluyen juegos ni archivos BIOS.",
    guides: "Guías", free: "Qué es gratis", arcadeLabel: "Arcade", collection: "COLECCIÓN DE JUEGOS",
  },
  fr: {
    index: "Reprenez là où vous en étiez.", intro: "GBA, DS et arcade. Les jeux de vos souvenirs, sur l’iPhone et l’iPad qui vous accompagnent déjà.",
    gba: "Toute une enfance dans votre poche.", ds: "Deux écrans. Deux fois plus de souvenirs.", arcade: "Retrouvez votre borne préférée.",
    explore: "Choisissez votre système", skins: "À votre image.", skinNote: "Portrait ou paysage. Métal, verre, couleur. De nouvelles sensations pour les boutons que vous connaissez par cœur.",
    library: "Votre prochain jeu. Juste ici.", libraryNote: "De vos fichiers à votre collection. Consoles portables et arcade, chaque jeu à sa place.",
    more: "Tous les systèmes et cœurs", onThisPage: "Sur cette page", related: "À découvrir aussi", guide: "Guide d’importation", original: "Voir le visuel complet du produit",
    openMenu: "Ouvrir la navigation", closeMenu: "Fermer la navigation", skip: "Aller au contenu", home: "Accueil", included: "Les jeux et fichiers BIOS ne sont pas inclus.",
    guides: "Guides", free: "Ce qui est gratuit", arcadeLabel: "Arcade", collection: "COLLECTION DE JEUX",
  },
  it: {
    index: "Riprendi da dove eri rimasto.", intro: "GBA, DS e arcade. I giochi che ricordi, sull’iPhone e sull’iPad che porti già con te.",
    gba: "Un’intera infanzia in tasca.", ds: "Due schermi. Il doppio dei ricordi.", arcade: "Torna al tuo cabinato preferito.",
    explore: "Scegli il tuo sistema", skins: "Rendilo davvero tuo.", skinNote: "Verticale o orizzontale. Metallo, vetro, colore. Una nuova sensazione per i tasti che conosci a memoria.",
    library: "Il tuo prossimo gioco. Proprio qui.", libraryNote: "Dai tuoi file alla tua collezione. Portatili e arcade, tutto al suo posto.",
    more: "Tutti i sistemi e i core", onThisPage: "In questa pagina", related: "Continua a esplorare", guide: "Guida all’importazione", original: "Visualizza l’immagine completa del prodotto",
    openMenu: "Apri navigazione", closeMenu: "Chiudi navigazione", skip: "Vai al contenuto", home: "Home", included: "Giochi e file BIOS non sono inclusi.",
    guides: "Guide", free: "Cosa è gratuito", arcadeLabel: "Arcade", collection: "COLLEZIONE DI GIOCHI",
  },
  ja: {
    index: "あの続きから、もう一度。", intro: "GBA、DS、アーケード。思い出のゲームを、いつもの iPhone と iPad で。",
    gba: "ポケットに、子どもの頃の思い出を。", ds: "2つの画面に、たくさんの思い出。", arcade: "お気に入りの筐体へ、もう一度。",
    explore: "遊ぶシステムを選ぶ", skins: "自分らしい遊び心地に。", skinNote: "縦向きも横向きも。金属、ガラス、色。指が覚えているボタンに、新しい感触を。",
    library: "次に遊ぶゲームは、ここに。", libraryNote: "ファイルからコレクションへ。携帯ゲームもアーケードも、ひとつの場所に。",
    more: "すべてのシステムとコア", onThisPage: "このページの内容", related: "さらに見る", guide: "読み込みガイド", original: "製品画像全体を見る",
    openMenu: "ナビゲーションを開く", closeMenu: "ナビゲーションを閉じる", skip: "本文へ移動", home: "ホーム", included: "ゲームと BIOS ファイルは含まれません。",
    guides: "ガイド", free: "無料で使える機能", arcadeLabel: "アーケード", collection: "ゲームコレクション",
  },
  ko: {
    index: "멈췄던 그 순간부터 다시.", intro: "GBA, DS, 아케이드. 기억 속 게임을 늘 가지고 다니는 iPhone과 iPad에서 이어 가세요.",
    gba: "주머니 속에 담긴 어린 시절.", ds: "두 개의 화면, 두 배의 추억.", arcade: "좋아하던 아케이드 기기로 돌아가세요.",
    explore: "게임 시스템 선택", skins: "나만의 감각으로.", skinNote: "세로와 가로. 금속, 유리, 색상. 손에 익은 버튼에 새로운 감각을 더하세요.",
    library: "다음 게임도 바로 여기에.", libraryNote: "파일에서 컬렉션으로. 휴대용 게임부터 아케이드까지, 한곳에 정리하세요.",
    more: "모든 시스템과 코어", onThisPage: "페이지 내용", related: "계속 둘러보기", guide: "가져오기 안내", original: "전체 제품 이미지 보기",
    openMenu: "탐색 메뉴 열기", closeMenu: "탐색 메뉴 닫기", skip: "본문으로 건너뛰기", home: "홈", included: "게임과 BIOS 파일은 포함되지 않습니다.",
    guides: "가이드", free: "무료 기능 안내", arcadeLabel: "아케이드", collection: "게임 컬렉션",
  },
  ru: {
    index: "Продолжите с того места, где остановились.", intro: "GBA, DS и аркады. Знакомые игры на iPhone и iPad, которые всегда с вами.",
    gba: "Целое детство в кармане.", ds: "Два экрана. Вдвое больше воспоминаний.", arcade: "Снова у любимого автомата.",
    explore: "Выберите систему", skins: "Пусть всё будет по-вашему.", skinNote: "Вертикально или горизонтально. Металл, стекло, цвет. Новые ощущения от кнопок, знакомых наизусть.",
    library: "Следующая игра уже здесь.", libraryNote: "Из файлов в коллекцию. Портативные системы и аркады — всё на своём месте.",
    more: "Все системы и ядра", onThisPage: "На этой странице", related: "Узнайте больше", guide: "Руководство по импорту", original: "Посмотреть полное изображение продукта",
    openMenu: "Открыть навигацию", closeMenu: "Закрыть навигацию", skip: "Перейти к содержимому", home: "Главная", included: "Игры и файлы BIOS не включены.",
    guides: "Руководства", free: "Что доступно бесплатно", arcadeLabel: "Аркады", collection: "КОЛЛЕКЦИЯ ИГР",
  },
  tr: {
    index: "Kaldığın yerden devam et.", intro: "GBA, DS ve arcade. Hatırladığın oyunlar, zaten yanında taşıdığın iPhone ve iPad’de.",
    gba: "Bütün bir çocukluk cebinde.", ds: "İki ekran. İki kat anı.", arcade: "En sevdiğin oyun makinesine geri dön.",
    explore: "Sistemini seç", skins: "Tam senin tarzında olsun.", skinNote: "Dikey veya yatay. Metal, cam, renk. Ezbere bildiğin tuşlara yeni bir his.",
    library: "Sıradaki oyunun. Tam burada.", libraryNote: "Dosyalarından koleksiyonuna. El konsolları ve arcade, her şey yerli yerinde.",
    more: "Tüm sistemler ve çekirdekler", onThisPage: "Bu sayfada", related: "Keşfetmeye devam et", guide: "İçe aktarma rehberi", original: "Ürünün tam görselini görüntüle",
    openMenu: "Gezinmeyi aç", closeMenu: "Gezinmeyi kapat", skip: "İçeriğe geç", home: "Ana sayfa", included: "Oyunlar ve BIOS dosyaları dahil değildir.",
    guides: "Rehberler", free: "Neler ücretsiz?", arcadeLabel: "Arcade", collection: "OYUN KOLEKSİYONU",
  },
  "pt-BR": {
    index: "Continue de onde parou.", intro: "GBA, DS e arcade. Os jogos que você lembra, no iPhone e iPad que já leva com você.",
    gba: "Uma infância inteira no bolso.", ds: "Duas telas. O dobro de lembranças.", arcade: "De volta à sua máquina favorita.",
    explore: "Escolha seu sistema", skins: "Deixe com a sua cara.", skinNote: "Na vertical ou horizontal. Metal, vidro, cor. Uma nova sensação para os botões que você conhece de cor.",
    library: "Seu próximo jogo. Bem aqui.", libraryNote: "Dos seus arquivos à sua coleção. Portáteis e arcade, tudo em seu lugar.",
    more: "Todos os sistemas e núcleos", onThisPage: "Nesta página", related: "Continue explorando", guide: "Guia de importação", original: "Ver a imagem completa do produto",
    openMenu: "Abrir navegação", closeMenu: "Fechar navegação", skip: "Pular para o conteúdo", home: "Início", included: "Jogos e arquivos BIOS não estão incluídos.",
    guides: "Guias", free: "O que é gratuito", arcadeLabel: "Arcade", collection: "COLEÇÃO DE JOGOS",
  },
  vi: {
    index: "Tiếp tục từ nơi bạn đã dừng lại.", intro: "GBA, DS và arcade. Những trò chơi quen thuộc, trên iPhone và iPad bạn vẫn mang theo.",
    gba: "Cả tuổi thơ trong túi áo.", ds: "Hai màn hình. Gấp đôi kỷ niệm.", arcade: "Trở lại máy arcade yêu thích.",
    explore: "Chọn hệ máy", skins: "Mang phong cách của riêng bạn.", skinNote: "Dọc hay ngang. Kim loại, kính, màu sắc. Cảm giác mới cho những nút bấm đã thuộc lòng.",
    library: "Trò chơi tiếp theo. Ngay tại đây.", libraryNote: "Từ tệp đến bộ sưu tập. Máy cầm tay và arcade, mọi thứ đều đúng chỗ.",
    more: "Tất cả hệ máy và lõi", onThisPage: "Trong trang này", related: "Khám phá thêm", guide: "Hướng dẫn nhập", original: "Xem toàn bộ hình ảnh sản phẩm",
    openMenu: "Mở điều hướng", closeMenu: "Đóng điều hướng", skip: "Chuyển đến nội dung", home: "Trang chủ", included: "Không bao gồm trò chơi và tệp BIOS.",
    guides: "Hướng dẫn", free: "Tính năng miễn phí", arcadeLabel: "Máy arcade", collection: "BỘ SƯU TẬP TRÒ CHƠI",
  },
  id: {
    index: "Lanjutkan dari tempat kamu berhenti.", intro: "GBA, DS, dan arcade. Game yang kamu ingat, di iPhone dan iPad yang selalu kamu bawa.",
    gba: "Seluruh masa kecil dalam saku.", ds: "Dua layar. Dua kali kenangan.", arcade: "Kembali ke mesin arcade favoritmu.",
    explore: "Pilih sistemmu", skins: "Buat sesuai gayamu.", skinNote: "Tegak atau mendatar. Logam, kaca, warna. Nuansa baru untuk tombol yang sudah kamu hafal.",
    library: "Game berikutnya. Ada di sini.", libraryNote: "Dari file ke koleksimu. Konsol genggam dan arcade, semuanya tertata.",
    more: "Semua sistem dan core", onThisPage: "Di halaman ini", related: "Jelajahi lebih lanjut", guide: "Panduan impor", original: "Lihat gambar produk lengkap",
    openMenu: "Buka navigasi", closeMenu: "Tutup navigasi", skip: "Lewati ke konten", home: "Beranda", included: "Game dan file BIOS tidak disertakan.",
    guides: "Panduan", free: "Apa yang gratis", arcadeLabel: "Arcade", collection: "KOLEKSI GAME",
  },
  th: {
    index: "เล่นต่อจากจุดที่ค้างไว้", intro: "GBA, DS และอาร์เคด เกมในความทรงจำ บน iPhone และ iPad ที่คุณพกติดตัวอยู่แล้ว",
    gba: "ทั้งวัยเด็กอยู่ในกระเป๋าคุณ", ds: "สองหน้าจอ ความทรงจำสองเท่า", arcade: "กลับไปที่ตู้เกมโปรดของคุณ",
    explore: "เลือกระบบเกมของคุณ", skins: "ปรับให้เป็นสไตล์ของคุณ", skinNote: "แนวตั้งหรือแนวนอน โลหะ กระจก สีสัน สัมผัสใหม่ให้กับปุ่มที่คุณคุ้นเคย",
    library: "เกมถัดไปของคุณ อยู่ตรงนี้", libraryNote: "จากไฟล์สู่คอลเลกชัน ทั้งเครื่องเกมพกพาและอาร์เคด ทุกอย่างอยู่เป็นที่",
    more: "ระบบและคอร์ทั้งหมด", onThisPage: "ในหน้านี้", related: "สำรวจเพิ่มเติม", guide: "คู่มือการนำเข้า", original: "ดูภาพผลิตภัณฑ์แบบเต็ม",
    openMenu: "เปิดเมนูนำทาง", closeMenu: "ปิดเมนูนำทาง", skip: "ข้ามไปยังเนื้อหา", home: "หน้าแรก", included: "ไม่มีเกมและไฟล์ BIOS รวมอยู่",
    guides: "คู่มือ", free: "ฟีเจอร์ใดใช้ฟรี", arcadeLabel: "อาร์เคด", collection: "คอลเลกชันเกม",
  },
}

export const discoveryCopy = (locale: Locale) => ({ ...discovery[locale], language: locale })
