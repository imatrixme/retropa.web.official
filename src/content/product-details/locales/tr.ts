import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "iPhone ve iPad için GBA emülatörü",
    "label": "GBA",
    "image": "material",
    "summary": "Kendi .gba dosyalarınızı Retropa'ya getirin. Çalışan bir oyunla başlayın, ardından bir el konsolu teması seçin, bir kol eşleyin ve size doğru gelen ekran işlemesini bulun.",
    "imageAlt": "Dikey ve yatay el konsolu kontrol düzenlerini gösteren Retropa ürün görseli",
    "sections": [
      {
        "title": "Bir .gba oyun dosyasıyla başlayın",
        "body": "Retropa, desteklenen GBA oyunlarını iOS 18 ve sonraki sürümleri çalıştıran iPhone ve iPad'de oynatır. Uygulamayı indirmek ücretsizdir, ancak içinde oyun ya da BIOS dosyası bulunmaz. Kullanma hakkına sahip olduğunuz bir oyun dosyası kullanın ve orijinali yedek olarak uygulamanın dışında saklayın.",
        "points": [
          "Bir GBA oyunu normalde .gba uzantısını kullanır.",
          "Bir .gb ya da .gbc dosyası GBA'ya değil GB ya da GBC'ye aittir.",
          "Dosya uzantısını değiştirmek bir oyunu başka bir sisteme dönüştürmez."
        ]
      },
      {
        "title": "Dosyalar uygulamasından içe aktarın",
        "body": "Dosyanın yalnızca bir bulut yer tutucusu olarak görünmediğinden, gerçekten yerel olarak erişilebilir olduğundan emin olun. Retropa kitaplığındaki içe aktarma girişini açın ve oyunu seçin. Kitaplıkta göründükten sonra açın; yerleşimi özelleştirmeden önce görüntünün, sesin ve varsayılan kontrollerin çalıştığını doğrulayın."
      },
      {
        "title": "Doğru el konsolu yerleşimini seçin",
        "body": "Bir GBA yerleşimi yön tuşları, A ve B, omuz düğmeleri ile Start ve Select için yer ayırmalıdır. Hem düğmeleri hem de görseli deneyin. Retropa .deltaskin içe aktarmayı destekler, ancak bir DS teması GBA yerleşiminin yerini tutmaz. Paketin cihazınızın yönünü desteklediğini kontrol edin.",
        "points": [
          "Oyun ekranının kullandığınız her iki yönde de kapanmadığından emin olun.",
          "Uyumlu fiziksel kolları iOS'ta eşleştirin, ardından eşlemeyi Retropa içinde kontrol edin.",
          "Premium temalar ve gelişmiş filtreler Plus gerektirir; bir dosyayı içe aktarmak ücretli özelliklerin kilidini açmaz."
        ]
      },
      {
        "title": "LCD karakteri mi, temiz pikseller mi?",
        "body": "Özgün görüntüyle başlayın. Hafif bir LCD işlemesi bir el konsolu ekranını hatırlatabilir, bir CRT işlemesi ise bambaşka bir sunum oluşturur. Retropa'nın gelişmiş filtreleri tam sayı ölçek gereksinimi olmadan gerçek çıktı alanını hesaba katar. Filtreler görüntüyü değiştirir; oyunun çözünürlüğünü ya da dosya uyumluluğunu değil."
      },
      {
        "title": "Bir içe aktarma ya da kayıt çalışmadığında",
        "body": "Önce dosya uzantısını, seçili sistemi ve tam hata mesajını kontrol edin. Dosyalar uygulaması orijinali açamıyor ya da indiremiyorsa, yeniden içe aktarmadan önce bu adımı tamamlayın. BIOS hatalarında seçili çekirdeğin gereksinimini izleyin; bir arcade neogeo.zip dosyası GBA BIOS'u değildir. Oyunun kendi kayıt verisi ile emülatörün kayıt durumu farklı şeylerdir: birini diğerinin adıyla kaydetmeyin ve çekirdekler ya da uygulamalar arasında geçmeden önce yedeklerinizi koruyun.",
        "points": [
          "Bir kontrol ya da görüntü sorununu yalıtmaya çalışırken varsayılan temayı ve basit bir filtreyi deneyin.",
          "Destek için uygulama sürümünü, sistemi, çekirdeği ve hatayı not edin.",
          "Destek talebine ticari ROM ya da BIOS dosyası eklemeyin."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Desteklenen dosyaları ve GBA çekirdeklerini görün"
  },
  "ds-emulator": {
    "title": "iPhone ve iPad için DS emülatörü",
    "label": "DS",
    "image": "library",
    "summary": "Kendi .nds oyunlarınızı Retropa'ya aktarın ve iki ekrana da yer açın. Yeni bir yerleşim ya da filtre seçmeden önce dokunmatik girişi, kontrolleri ve dosya gereksinimlerini kontrol edin.",
    "imageAlt": "iPhone'da oyun kitaplığını ve ayarları gösteren Retropa ürün görseli",
    "sections": [
      {
        "title": "Bir .nds oyunu hazırlayın",
        "body": "DS ile GBA farklı sistemlerdir. Retropa, DS için .nds dosyalarını iOS 18 ve sonraki sürümleri çalıştıran iPhone ve iPad'de destekler. Kullanma hakkına sahip olduğunuz dosyaları kullanın ve ayrı bir yedek tutun. Uygulama ROM ya da BIOS indirmesi sunmaz ve bir .gba dosyası adı değiştirilerek DS oyunu olamaz."
      },
      {
        "title": "İçe aktarın ve iki ekranı da kontrol edin",
        "body": "Oyun dosyasını Dosyalar uygulamasında yerel olarak indirin, ardından Retropa'daki kitaplık içe aktarma girişinden seçin. İçe aktarılan oyunu varsayılan yerleşimle açın. Her iki ekran alanını kontrol edin ve oyunun dokunmatik kullanan bir bölümünde dokunmatik girişi sınayın. Yalnızca açılış ekranı, gereken her girişe ulaşılabildiğini doğrulamak için yeterli değildir.",
        "points": [
          ".nds dosyası için algılanan ya da seçilen sistemle başlayın.",
          "Kurulu çekirdeğin bildirdiği BIOS ya da ürün yazılımı gereksinimini izleyin.",
          "Hataları incelerken orijinal dosyanın bir kopyasını saklayın."
        ]
      },
      {
        "title": "Dokunmatik ekrana yeterince yer verin",
        "body": "İki ekran, tek ekranlı bir el konsolundan farklı bir yerleşim gerektirir. Her iki ekranı ve gereken kontrolleri açıkta bırakan bir DS teması seçin. Dikey yön ekranlara doğal bir dikey düzen verebilir; yatay destek ise seçilen temaya bağlıdır. Küçük dokunma hedeflerini gerçekten oynadığınız boyutta, özellikle daha küçük bir iPhone'da kontrol edin."
      },
      {
        "title": "Kollar her dokunma eyleminin yerini tutmaz",
        "body": "Retropa uyumlu harici kolları ve düğme eşlemesini destekler. Kolu iOS ile eşleştirin ve atamalarını uygulama içinde doğrulayın. Fiziksel bir yön tuşu ve eylem düğmeleri, bir oyunun dokunmatik ekran etkileşimlerinin yerini kendiliğinden almaz. Yalnızca kolla oynamaya karar vermeden önce bu etkileşimleri doğrulayın."
      },
      {
        "title": "İlk oturumu basit tutun",
        "body": "Karmaşık bir gölgelendirici zinciri uygulamadan önce oyun ve giriş uyumluluğunu doğrulayın. Bir filtre seçtikten sonra görüntü ya da kare akışı değişirse basit bir ön ayara dönün ve karşılaştırın. Cihaz, çekirdek ve çıktı boyutu performansı birlikte etkiler; DS desteği her oyun ve her telefon için aynı sonucun sözü değildir.",
        "points": [
          "Premium temalar ve gelişmiş filtreler Retropa Plus gerektirir.",
          "Orijinal kayıtları ve kayıt durumlarını yedekli tutun; birbirlerinin yerine geçen dosya biçimleri değildir.",
          "Destek için oyun ya da BIOS dosyalarını değil, uygulama sürümünü, seçili çekirdeği ve tam hatayı iletin."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Desteklenen dosyaları ve DS çekirdeklerini görün"
  },
  "arcade": {
    "title": "iPhone ve iPad için arcade emülatörü",
    "label": "Arcade",
    "image": "library",
    "summary": "Desteklenen CPS, Neo Geo, PGM ve M92 arcade dosyalarını Retropa'da dokunmatik kontroller, harici kollar ve CRT filtreleriyle oynayın. Arcade oynamak Plus gerektirir; oyunlar ve BIOS dosyaları dahil değildir.",
    "imageAlt": "Oyun kitaplığını ve ayarları gösteren Retropa ürün görseli",
    "sections": [
      {
        "title": "CPS, Neo Geo ve arcade kartı",
        "body": "Retropa, CPS I, CPS II, CPS III, Neo Geo, PGM ve M92 gibi arcade ailelerini destekler. Oyununuzu, kurulu çekirdeğin beklediği arcade kartı ve ROM setiyle eşleştirin. Bir ailenin desteklenmesi, her arşivin çalışacağını garanti etmez.",
        "points": [
          "Bir dosya seçmeden önce sistemi uygulama içinde doğrulayın.",
          "Arcade çalıştırmak Retropa Plus gerektirir.",
          "Retropa ticari ROM ya da BIOS dosyası içermez."
        ]
      },
      {
        "title": "Neo Geo arcade, Neo Geo Pocket değildir",
        "body": "Neo Geo arcade oyunları ile Neo Geo Pocket el konsolu oyunları farklı sistemler ve dosyalar kullanır. Eksik Neo Geo BIOS bildiren bir arcade oyunu için Retropa'da Arcade BIOS bölümünü açın, gereken neogeo.zip paketini içe aktarın ve oyunu yeniden deneyin. Bir Pocket ROM'u ya da adı değiştirilmiş bir ZIP bunun yerini tutmaz.",
        "points": [
          "Kullanma hakkına sahip olduğunuz BIOS dosyalarını kullanın; Retropa indirme sağlamaz.",
          "Bir BIOS paketi, eksik oyun, ana set ya da türev ROM verisinin yerini tutmaz.",
          "Değişiklik yapmadan önce tam hatayı kontrol edin ve orijinal arşivi saklayın."
        ]
      },
      {
        "title": "Bir arcade ZIP'i neden farklıdır",
        "body": "Bir el konsolu ROM'u çoğu zaman tek bir oyun görüntüsüdür. Bir arcade seti ise birden fazla ROM çipi içerebilir ve bir ana sete ya da BIOS'a bağlı olabilir. İlgisiz bir arşivi .zip olarak yeniden adlandırmak onu uyumlu hâle getirmez. İçe aktarma akışı açıkça istemedikçe verilen arşivi olduğu gibi koruyun."
      },
      {
        "title": "Bir oyun başlamadığında",
        "body": "Önce seçili kartı ve Retropa'nın gösterdiği hatayı kontrol edin. Ardından setinizin eksiksiz olup olmadığını ve gereken BIOS ya da ana set dosyalarının bulunup bulunmadığını kontrol edin. Tek başına bir türev arşiv, bir çekirdeğin gerektirdiği tüm dosyaları içermeyebilir. Filtre değiştirmek ya da farklı bir tema satın almak eksik ROM verisini düzeltemez.",
        "points": [
          "Bir içe aktarmayı incelerken orijinal dosyalarınızı koruyun.",
          "Destekle iletişime geçerken uygulama sürümünü, sistemi ve gösterilen hatayı not edin.",
          "Destek talebiyle birlikte ticari ROM ya da BIOS dosyası göndermeyin."
        ]
      },
      {
        "title": "İlk oturumu ayarlayın",
        "body": "Oyun başladıktan sonra jeton, başlatma ve eylem kontrollerini belirleyin. Harici bir kol kullanıyorsanız ekran üstü etiketlerin yanı sıra eşlemeyi de kontrol edin. Basit bir görüntü ön ayarıyla başlayın; CRT işlemesini oyunun ve kontrollerin doğru çalıştığını doğruladıktan sonra seçin."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Sistem ve çekirdek kataloğunu kontrol edin"
  },
  "delta-skins": {
    "title": "iPhone ve iPad'de Delta temalarını içe aktarın",
    "label": "Temalar",
    "image": "material",
    "summary": "Yalnızca arka planı değil, oyununuzun çevresindeki kontrolleri de değiştirin. Retropa .deltaskin paketlerini içe aktarır ve iPhone ile iPad için kendi tema koleksiyonunu sunar.",
    "imageAlt": "Farklı malzemelerde dikey ve yatay kol temalarını gösteren Retropa ürün görseli",
    "sections": [
      {
        "title": "Tema bir kontrol yerleşimidir",
        "body": "Oyun ekranı, yön tuşları, eylem düğmeleri ve menü kontrollerinin tümü yer ister. Bir tema bu öğelerin nerede duracağını tanımlar. Yalnızca renge bakarak değil, oynadığınız sisteme ve kullandığınız yöne uygun olanı seçin.",
        "points": [
          "Bir paketi içe aktarmadan önce hedeflediği sistemi kontrol edin.",
          "Dikey ve yatay destek, temanın sunduğu yerleşimlere bağlıdır.",
          "Desteklenen bir paket biçimi, her üçüncü taraf yerleşimin her cihaza uyacağını garanti etmez."
        ]
      },
      {
        "title": "Bir .deltaskin paketini içe aktarın",
        "body": "Orijinal tema dosyasını saklayın, Retropa'nın tema içe aktarma girişini açın ve paketi Dosyalar uygulamasından seçin. İçe aktardıktan sonra onu eşleşen sistem için seçin. Bir oyun başlatın; düzenli yerleşiminiz hâline getirmeden önce ekran alanını, yön kontrollerini ve her eylem düğmesini kontrol edin.",
        "points": [
          "Bir temanın ekran görüntüsünü değil, eksiksiz .deltaskin paketini kullanın.",
          "Paket yüklenmezse başka bir yerleşim denemeden önce biçimini ve hedeflediği sistemi kontrol edin.",
          "Temel kontroller kapanıyorsa çalışan bir temaya geri dönün."
        ]
      },
      {
        "title": "Dokunmatik kontroller ve fiziksel kollar",
        "body": "Retropa ayrıca uyumlu harici kolları ve yapılandırılabilir düğme eşlemesini destekler. Önce kolu iOS ile eşleştirin, ardından eşlemeyi Retropa içinde kontrol edin. Görsel bir tema ile bir kol profili farklı amaçlara hizmet eder: görseli değiştirmek, fiziksel düğme atamalarınızı kontrol etmenin yerini tutmaz."
      },
      {
        "title": "Paketler ve satın alma sınırları",
        "body": "Retropa tema paketlerine göz atmak için doğru yer PackHub'dır. Premium temalar Plus gerektirir; içe aktarılan paketler hak denetimlerini atlamaz. Satın almadan önce güncel planı ve paket gereksinimlerini uygulama içinde kontrol edin. Delta uyumluluğu bir dosya biçimini tanımlar; Delta projesiyle bir bağlantı anlamına gelmez."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "PackHub'da temalara göz atın"
  },
  "crt-filters": {
    "title": "iPhone ve iPad emülatörleri için CRT filtreleri",
    "label": "Filtreler",
    "image": "filter",
    "summary": "Retropa'nın gelişmiş CRT ve LCD filtreleri, tam sayı ölçek gerektirmeden gerçek ekran alanınıza uyum sağlar. Retro ekranın karakterini iPhone boyutlarında, iPad yerleşimlerinde ve tüm yönlerde koruyun.",
    "imageAlt": "Ekran filtresi seçimini ve CRT ekran işlemelerini gösteren Retropa ürün görseli",
    "sections": [
      {
        "title": "Önce ekranı, sonra gücünü seçin",
        "body": "En yakın piksel sunumu özgün piksel sınırlarını net tutar. CRT işlemeleri tarama çizgileri, maskeler ve kenar gölgelemesi kullanır; LCD işlemeleri ise bir piksel ya da alt piksel yapısı ekler. Bu seçimler sunumu değiştirir, alttaki oyun çözünürlüğünü değil.",
        "points": [
          "Referans olarak filtresiz görüntüyle başlayın.",
          "Yalnızca açılış ekranını değil, küçük metinleri, parlak kenarları ve koyu alanları da kontrol edin.",
          "Sonucu gerçekten oynadığınız boyutta ve yönde değerlendirin."
        ]
      },
      {
        "title": "Tam sayı ölçek gereksinimi yok",
        "body": "Tam sayı ölçekleme, her oyun pikselini tam sayıda ekran pikseline eşler. Keskin en yakın piksel çıktısı için yararlı olabilir, ancak kullanılmayan fazladan alan bırakabilir. Retropa'nın gelişmiş filtreleri gerçek çıktı alanını hesaba katar; bu yüzden görüntü yapıları 2x, 3x ya da başka bir tam sayı katıyla sınırlı değildir. Telefonunuza ya da temanıza uyan bir görüntü alanı kullanırken oyunun en boy oranını koruyabilirsiniz.",
        "points": [
          "CRT V4, çıktı pikseli ayak izini kullanarak ışın kapsamını yeniden kurar ve fosfor yapısını analitik olarak filtreler.",
          "Trinitron, tümleşik tarama çizgisi ışınları ve bant sınırlı aperture-grille harmonikleri kullanır.",
          "DMG, bir ızgarayı yalnızca nokta örneklemek yerine sıvı kristal hücre kapsamını tümleştirir."
        ]
      },
      {
        "title": "Bir tarama çizgisi katmanından fazlası",
        "body": "Temel CRT Lite, LCD Grid ve Scanline ön ayarları daha hafif ekran işlemeleri sunar. Gelişmiş ön ayarlar ekranın kendisini daha fazla modeller: ışın genişliği, fosfor geçirgenliği ya da yansıtıcı sıvı kristal malzeme. Doğrudan örneklenen ızgaralar kesirli ölçeklerde düzensizleşebilir; çıktıyı hesaba katan tümleştirme, çözülemeyen ayrıntının doğal biçimde karışmasına yardımcı olur. Bu, her geleneksel filtrenin tam sayı ölçek gerektirdiği ya da her cihazın ve ön ayarın kusursuz olacağı iddiası değildir."
      },
      {
        "title": "Tarayıcı karşılaştırmasının gösterdikleri",
        "body": "Televizyon önizlemeleri temel filtreleri ve yerel bilgiyle beslenen CRT V4, Trinitron V1 ile DMG'yi gösterir. Gelişmiş kipler, piksel ayak izi tümleştirmesi dâhil seçili yerel formülleri tek bir ortak sunum eğrisiyle uyarlar. Web oluşturucusu zamana bağlı kalıcılığı, tam çok geçişli bloom zincirini ve yerel renk yönetimini atlar. Piksel piksel aynı Metal çıktısını ya da gerçek oyun görüntüsünü değil, ekran özelliklerini gösterir."
      },
      {
        "title": "RetroArch gölgelendirici ön ayarlarını içe aktarın",
        "body": "Bir .slangp ön ayarı birkaç gölgelendirici geçişine, doku dosyasına ve parametre değerine başvurabilir. İçe aktarırken bu bağımlılıkları bir arada tutun. Tek başına bir ön ayar dosyası eksik olabilir; bir .slang dosyası ise tüm bir koleksiyonu değil, tek bir gölgelendiriciyi tanımlar.",
        "points": [
          "Desteklenen gölgelendirici iş akışı için hazırlanmış paketleri kullanın.",
          "Bir ön ayar yüklenemezse oyunu değiştirmeden önce başvurulan dosyaları ve uyumluluğu kontrol edin.",
          "Karmaşık bir zincir kare akışını ya da pil tüketimini etkiliyorsa daha hafif bir ön ayar deneyin."
        ]
      },
      {
        "title": "Görüntü kalitesinin bir performans bedeli var",
        "body": "Çok geçişli bir filtre, en yakın piksel çıktısından daha fazla GPU işi gerektirebilir. Performans cihaza, emülatör çekirdeğine, çıktı çözünürlüğüne ve ön ayara bağlıdır. Retropa, içe aktarılan her gölgelendiricinin her iPhone'da aynı ölçüde iyi çalışacağını vaat etmez. Gelişmiş filtreler Plus gerektirir; mevcut seçenekleri uygulama içinde doğrulayın."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "PackHub'da filtrelere göz atın"
  }
}
