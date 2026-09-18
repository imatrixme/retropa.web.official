import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Retropa'ya ROM Nasıl Aktarılır | iPhone ve iPad Rehberi",
  "description": "GBA, DS ve arcade oyunlarını iPhone ve iPad'e aktarın. ROM'lar, BIOS, Delta temaları, kollar, kayıtlar, Plus ve tam sayı ölçek gerektirmeyen gelişmiş filtreler hakkında yanıtlar.",
  "title": "Retropa'da ilk oyununuz.",
  "intro": "Sahip olduğunuz bir dosyadan oynayabileceğiniz bir oyuna. Desteklenen bir el konsolu sistemiyle başlayın, ardından kontrolleri ve görüntüyü kendinize göre uyarlayın.",
  "steps": [
    [
      "Retropa'yı edinin",
      "Retropa'yı App Store'dan iOS 18 ve sonraki sürümü çalıştıran bir iPhone ya da iPad'e kurun. Uygulamayı indirmek ücretsizdir; bazı özellikler Plus gerektirir."
    ],
    [
      "Oyununuzu içe aktarın",
      "Kitaplığınızdaki içe aktarma girişini açın ve Dosyalar uygulamasından desteklenen bir ROM seçin. GBA için .gba, DS için .nds dosyası kullanın. Orijinal dosyayı yedek olarak saklayın. ROM ve BIOS dosyaları sağlanmaz."
    ],
    [
      "Kitaplığınızdan açın",
      "İçe aktarılan oyunu seçin ve oynamaya başlayın. Tema ya da filtre değiştirmeden önce ekran üstü kontrolleri kontrol edin. Bir oyun başlamıyorsa sistemini, dosya biçimini ve gereken BIOS'u kontrol edin."
    ]
  ],
  "faqTitle": "Başlamadan önce",
  "systems": "Desteklenen sistemleri görün",
  "support": "Yardım mı gerekiyor?",
  "faqs": [
    {
      "id": "devices",
      "question": "Hangi iPhone ve iPad'ler Retropa'yı çalıştırabilir?",
      "answer": "Retropa, App Store üzerinden iOS 18 ve sonraki sürümü çalıştıran iPhone ve iPad için sunulur. Cihazınız için App Store uyumluluk bölümünü kontrol edin. Daha zorlayıcı arcade çekirdekleri ve çok geçişli ekran filtreleri, basit bir el konsolu oyunundan daha fazla performans gerektirebilir."
    },
    {
      "id": "systems",
      "question": "Retropa GBA, Nintendo DS ve arcade oyunlarını oynatabilir mi?",
      "answer": "Retropa GBA, DS ve listelenen diğer el konsolu ve konsol sistemlerinin yanı sıra CPS, PGM ve M92 gibi desteklenen arcade ailelerini destekler. Uyumluluk kurulu uygulamaya, çekirdeğe ve oyun biçimine bağlıdır; her oyunun ya da her arcade arşivinin desteklendiği anlamına gelmez.",
      "link": "cores",
      "linkLabel": "Desteklenen sistemleri ve dosya biçimlerini görün"
    },
    {
      "id": "games",
      "question": "Retropa oyun ya da indirilebilir ROM içeriyor mu?",
      "answer": "Hayır. Retropa bir emülatördür; ticari bir oyun aboneliği ya da ROM mağazası değildir. Kendi projeleriniz gibi kullanma hakkına sahip olduğunuz ya da izinle dağıtılan homebrew içerikleri siz getirin. Ticari ROM ve BIOS dosyaları sağlanmaz."
    },
    {
      "id": "import",
      "question": "iPhone'da bir GBA ya da DS ROM'unu nasıl içe aktarırım?",
      "answer": "Oyun dosyasını iOS Dosyalar uygulamasından erişilebilen bir konumda tutun. Retropa kitaplığındaki içe aktarma girişini açın, desteklenen dosyayı seçin ve içe aktarılan oyunu kitaplıktan açın. GBA .gba, DS ise .nds kullanır. Farklı bir dosya uzantısını yeniden adlandırmak oyunu doğru biçime dönüştürmez."
    },
    {
      "id": "bios",
      "question": "Retropa için BIOS dosyası gerekir mi?",
      "answer": "BIOS gereksinimleri sisteme ve çekirdeğe göre değişir. Retropa eksik bir BIOS bildirirse o sistemin gereksinimini kontrol edin ve doğru dosyayı uygulamanın desteklediği iş akışıyla sağlayın. Başka bir sistemin BIOS'u bunun yerini tutmaz. Retropa BIOS indirmesi sunmaz.",
      "link": "cores",
      "linkLabel": "Sistem gereksinimlerini kontrol edin"
    },
    {
      "id": "arcade-zip",
      "question": "Arcade ZIP'im ya da ROM setim neden başlamıyor?",
      "answer": "Bir arcade arşivi, çekirdeğinin beklediği kart ve ROM setiyle eşleşmelidir. Bazı setler ayrıca bir ana sete ya da BIOS'a bağlıdır; bu yüzden tek başına bir türev ZIP eksik olabilir. Uygulama açma istemedikçe arşivi olduğu gibi koruyun. Arcade çalıştırmak Plus da gerektirir; bir abonelik eksik ya da uyumsuz ROM verisini onaramaz."
    },
    {
      "id": "missing-file",
      "question": "Dosyalar uygulamasında bir oyunu gördüğüm hâlde neden içe aktaramıyorum?",
      "answer": "Gerçek dosyanın yalnızca bir bulut yer tutucusu olarak değil, yerel olarak erişilebilir olduğundan ve biçiminin desteklenen bir sistemle eşleştiğinden emin olun. Retropa'nın gösterdiği hatayı kontrol edin. İçe aktarmayı incelerken orijinalin yedeğini saklayın ve adı değiştirilmiş bir ZIP'in ya da yarım kalmış bir indirmenin geçerli bir ROM olduğunu varsaymayın."
    },
    {
      "id": "offline",
      "question": "Yerel olarak saklanan oyunları akış olmadan oynayabilir miyim?",
      "answer": "Retropa, desteklenen oyun dosyalarını oyun görüntüsünü bulut emülatöründen akıtmak yerine cihazınızda çalıştırır. Gereken oyun ve BIOS dosyalarını önce içe aktarın. Paket indirmek, çevrimiçi bilgi almak ve bulut özelliklerini kullanmak yine kendi ağ erişimlerini gerektirir."
    },
    {
      "id": "delta-skins",
      "question": "Retropa'da Delta temalarını kullanabilir miyim?",
      "answer": "Retropa .deltaskin paketlerini içe aktarmayı destekler. Eksiksiz paketi kullanın, eşleşen sistem için bir yerleşim seçin ve dikey ya da yatay desteğini kontrol edin. Biçim desteği, her üçüncü taraf temanın her iPhone'a uyacağını garanti etmez. Delta uyumluluğu bir dosya biçimini tanımlar; bir bağlantı anlamına gelmez.",
      "link": "delta-skins",
      "linkLabel": "Delta teması içe aktarma rehberini okuyun"
    },
    {
      "id": "controllers",
      "question": "Retropa Bluetooth ya da harici oyun kollarını destekliyor mu?",
      "answer": "Retropa uyumlu harici kolları ve yapılandırılabilir düğme eşlemesini destekler. Kolu önce iOS üzerinden bağlayın, ardından eşlemeyi Retropa içinde kontrol edin. Arcade oyunları için eylem düğmelerinin yanı sıra jeton ve başlatma atamalarını da doğrulayın. Uyumluluk kola ve iOS desteğine bağlıdır."
    },
    {
      "id": "saves",
      "question": "Oyun içi kayıtlar ile emülatör kayıt durumları aynı şey mi?",
      "answer": "Hayır. Oyun içi kaydı oyunun kendisi oluşturur; kayıt durumu ise emülatörün çalışmasını yakalar. Kayıt durumları tam çekirdeğe ve sürüme bağlı olabilir; bu yüzden uygulamalar ya da çekirdekler arasında taşınabildiklerini varsaymayın. Kayıtları taşımadan ya da değiştirmeden önce orijinal dosyalarınızı ve yedeklerinizi koruyun."
    },
    {
      "id": "plus",
      "question": "Retropa ücretsiz mi ve Plus nelerin kilidini açar?",
      "answer": "Retropa'yı indirmek ücretsizdir. Arcade çekirdekleri, premium temalar ve gelişmiş filtreler Retropa Plus gerektirir. Güncel planlar, bölgesel fiyatlar ve satın alma koşulları satın almadan önce uygulama içinde gösterilir. Ücretsiz indirme, her çekirdeğin ya da kaynağın dahil olduğu anlamına gelmez."
    },
    {
      "id": "restore",
      "question": "Önceki bir Retropa Plus satın alımını nasıl geri yüklerim?",
      "answer": "Uygulamanın satın alımları geri yükleme eylemini, ilk satın almada kullandığınız Apple Hesabı ile kullanın. Satın alımın ya da aboneliğin hâlâ geçerli olduğunu kontrol edin. Bir hakkı geri yüklemek, eksik ROM dosyalarını ya da oyun kayıtlarını geri getirmez. Destek ekibine hesap parolanızı değil, uygulama sürümünü ve satın alma sorununu iletin."
    },
    {
      "id": "advanced-filters",
      "question": "Retropa'nın gelişmiş filtreleri sıradan CRT filtrelerinden nasıl farklıdır?",
      "answer": "Basit ekran filtreleri çoğu zaman örneklenmiş tarama çizgilerini ya da piksel ızgaralarını üst üste bindirir. CRT V4 ve Trinitron gibi Retropa gelişmiş ön ayarları, ışın ve fosfor yapısını çıktı pikseli tümleştirmesi ya da bant sınırlı filtreleme ile modeller. DMG tümleşik sıvı kristal hücreleri ve yansıtıcı bir alt tabakayı içerir. Bunlar yalnızca bir renk tonu değil, ekran modelleridir.",
      "link": "crt-filters",
      "linkLabel": "Gelişmiş ekran filtrelerini karşılaştırın"
    },
    {
      "id": "integer-scaling",
      "question": "Retropa'nın gelişmiş filtreleri tam sayı ölçek gerektiriyor mu?",
      "answer": "Hayır. Retropa'nın gelişmiş filtreleri 2x, 3x ya da başka bir tam sayı katı gerektirmek yerine gerçek çıktı boyutunu hesaba katar. Bu, bir oyunu telefonunuzun, yönünüzün ya da seçtiğiniz temanın ekran alanına sığdırırken size daha fazla özgürlük verir. Oyunun özgün en boy oranı korunabilir. Sonuçlar yine ön ayara ve cihaza bağlıdır; filtreler ek kaynak çözünürlüğü yaratmaz.",
      "link": "crt-filters",
      "linkLabel": "Kesirli ölçekli görüntüleme hakkında bilgi edinin"
    },
    {
      "id": "shader-import",
      "question": "Retropa, RetroArch .slang ve .slangp gölgelendiricilerini içe aktarabilir mi?",
      "answer": "Retropa, .slang ve .slangp gölgelendirici iş akışlarını destekler. Bir ön ayar birkaç geçişe ya da doku dosyasına başvurabilir; içe aktarırken bu bağımlılıkları bir arada tutun. Her üçüncü taraf ön ayarın çalışacağı garanti edilmez. Biri yüklenmezse adını değiştirmek ya da oyunu değiştirmek yerine dosyalarını ve uyumluluğunu kontrol edin.",
      "link": "crt-filters",
      "linkLabel": "Gölgelendirici uyumluluğu hakkında bilgi edinin"
    },
    {
      "id": "performance",
      "question": "Gelişmiş filtreler kare hızını ya da pil ömrünü etkiler mi?",
      "answer": "Etkileyebilir. Çok geçişli görüntüleme, filtresiz bir görüntüden daha fazla GPU işi gerektirir ve maliyeti ön ayara, çıktı boyutuna, cihaza ve emülatör çekirdeğine göre değişir. Yavaşlama fark ederseniz özgün görüntüyle karşılaştırın, ardından daha hafif bir filtre deneyin. Tam sayı gerektirmeyen ölçekleme bir görüntü kalitesi özelliğidir; sınırsız GPU performansı vaadi değildir."
    },
    {
      "id": "packages",
      "question": "Retropa tema ve filtre paketlerini nereden edinebilirim?",
      "answer": "Tema ve gölgelendirici paketleri için PackHub'a göz atın. Paketin sistemini, biçimini ve Plus gereksinimlerini uygulama içinde inceleyin. İçe aktarılan kaynaklar hak denetimlerini atlamaz. Yardıma ihtiyacınız olursa uygulama sürümünü, paket adını ve hata mesajını ekleyin; ancak ticari ROM ya da BIOS dosyası göndermeyin."
    }
  ]
}
