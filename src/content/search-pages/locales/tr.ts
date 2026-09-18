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
    "title": "iPhone ve iPad için Game Boy Emülatörü | Retropa",
    "description": "Kendi .gb dosyalarınızı iPhone ve iPad'de Retropa ile çalıştırın. GB için hangi çekirdeğin uygun olduğunu, oyunun nasıl içe aktarıldığını, ekran ile kolların nasıl ayarlandığını ve bir dosya açılmadığında nelere bakılacağını anlatıyoruz.",
    "summary": "Retropa, Game Boy oyunlarını kendi .gb dosyalarınızdan iPhone ve iPad'de çalıştırır; dört değiştirilebilir çekirdek, el konsolu temaları, LCD ve CRT görünümleri ile kol eşleme sunar.",
    "sections": [
      {
        "title": "Bir .gb dosyasıyla başlayın",
        "body": "Retropa, Game Boy oyunlarını zaten sahip olduğunuz dosyalardan oynatır. Uygulama ücretsiz indirilir ve içinde oyun ya da BIOS dosyası bulunmaz; bu yüzden oyun dosyasını önceden hazırlayın ve dokunulmamış bir kopyasını yedek olarak uygulamanın dışında saklayın.",
        "points": [
          ".gb bir Game Boy oyunudur; .gbc ise Game Boy Color'a aittir.",
          "Bir dosya uzantısının adını değiştirmek, oyunu başka bir sisteme dönüştürmez.",
          "Oyun doğru çalışana kadar orijinal arşivi saklayın."
        ]
      },
      {
        "title": "Game Boy oyunlarını hangi çekirdek çalıştırır",
        "body": "Retropa, Game Boy oyunlarını çalıştırabilen birden fazla çekirdek sunar ve her oyun için bunlar arasında geçiş yapabilirsiniz. mGBA ve SkyEmu GB, GBC ve GBA sistemlerinin tümünü kapsarken SameBoy özellikle GB ve GBC için hazırlanmıştır; JGenesis ise Sega sistemleriyle birlikte GB'yi de kapsar. Bir çekirdek belirli bir oyunda sorun çıkarırsa, dosyanın bozuk olduğunu düşünmeden önce başka bir çekirdeği deneyin.",
        "points": [
          "Günlük oyun için mGBA iyi bir ilk tercihtir.",
          "SameBoy, GB ve GBC doğruluğuna odaklanır.",
          "Seçilen çekirdek her oyun için hatırlanır."
        ]
      },
      {
        "title": "Oyunu Dosyalar uygulamasından içe aktarın",
        "body": "Dosyanın yalnızca Dosyalar uygulamasında bulut yer tutucusu olarak görünmediğinden, gerçekten yerel olarak indirildiğinden emin olun. Retropa kitaplığındaki içe aktarma girişini açın ve oyunu seçin. Oyun göründüğünde açın; herhangi bir özelleştirmeye başlamadan önce görüntünün, sesin ve varsayılan dokunmatik düğmelerin çalıştığını doğrulayın."
      },
      {
        "title": "Özgün ekrana uyan bir yerleşim seçin",
        "body": "Bir Game Boy yerleşimi için yön tuşları, A ve B ile Start ve Select gerekir. Dikey yerleşim ekranı düğmelerin üstüne koyar ve tek elle oynamaya uygundur; yatay yerleşim ise düğmelere daha fazla alan bırakır. Her iki yönde de oyun görüntüsünün tema tarafından kapatılmadığını ve altı girişin tümüne ulaşılabildiğini kontrol edin.",
        "points": [
          "Yalnızca görseli değil, her düğmeyi kontrol edin.",
          "Delta .deltaskin paketleri içe aktarılabilir, ancak bir DS ya da GBA teması GB yerleşimi değildir.",
          "Premium temalar ve gelişmiş filtreler için Retropa Plus gerekir."
        ]
      },
      {
        "title": "Yeşil ekran, LCD ızgarası ya da temiz pikseller",
        "body": "Karşılaştırma yapabilmek için özgün görüntüyle başlayın. Bir DMG ön ayarı, ilk el konsolunun dört tonlu yansımalı LCD ekranını hatırlatır; LCD Grid alt piksel yapısı ekler ve bir CRT görünümü tamamen farklı bir sonuç verir. Retropa gelişmiş filtreleri, tam sayı bir ölçek katsayısı gerektirmek yerine gerçek çıktı alanına uyum sağlar; böylece görüntü iPhone ve iPad boyutlarında oranını korur.",
        "points": [
          "Filtreler oyunun çözünürlüğünü değil, sunumunu değiştirir.",
          "Bir filtre, dosya uyumluluğu sorununu çözmez.",
          "Bir ön ayarı kalıcı hale getirmeden önce özgün görüntüyle karşılaştırın."
        ]
      },
      {
        "title": "Game Boy içe aktarma ya da kayıt işlemi başarısız olduğunda",
        "body": "Önce dosya uzantısını, seçili sistemi ve tam hata mesajını kontrol edin. Dosyalar uygulaması orijinal dosyayı indirmeyi bitirmediyse, yeniden içe aktarmadan önce bu adımı tamamlayın. Bir oyunun kendi kayıt verisi ile emülatörün kayıt durumu farklı şeylerdir; birini diğerine dönüştürmeye çalışmayın ve kaydı çekirdekler ya da uygulamalar arasında taşımadan önce yedek alın.",
        "points": [
          "Destek için uygulama sürümünü, sistemi, çekirdeği ve hatayı not edin.",
          "Destek talebine ticari ROM ya da BIOS dosyası eklemeyin.",
          "Bir sorunu yalıtmaya çalışırken varsayılan temayı ve basit bir filtreyi deneyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Retropa'da Game Boy oyunları yer alır mı?",
        "answer": "Hayır. Retropa bir emülatördür; oyun ya da BIOS dosyası sağlamaz. Yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın."
      },
      {
        "id": "bios-needed",
        "question": "Game Boy emülasyonu için BIOS dosyası gerekir mi?",
        "answer": "GB ve GBC oyunları, Retropa'nın sunduğu çekirdeklerde genellikle BIOS dosyası olmadan çalışır. Bir çekirdek BIOS gereksinimi bildirirse, ilgisiz bir dosya içe aktarmak yerine o çekirdek için gösterilen uyarıyı izleyin."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Retropa bir .gbc dosyasını Game Boy oyunu olarak açabilir mi?",
        "answer": "Bir .gbc dosyası Game Boy Color'a aittir. Retropa bu dosyayı uygun sistemde çalıştırır ve uzantıyı değiştirmek dosyanın ne olduğunu değiştirmez."
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
    "title": "iPhone ve iPad için Game Boy Color Emülatörü | Retropa",
    "description": "Kendi .gbc oyunlarınızı iPhone ve iPad'de oynayın. Renk paletleri, yalnızca GBC'ye özel oyunlar, çekirdek seçimi, içe aktarma adımları ve bir Game Boy Color oyunu başlamadığında yapılacak kontroller.",
    "summary": "Retropa, Game Boy Color oyunlarını kendi .gbc dosyalarınızdan çalıştırır; palet yönetimi, oyun bazında çekirdek seçimi ve özgün yansımalı ekrana uyan görüntü ayarları sunar.",
    "sections": [
      {
        "title": ".gbc dosyası hazırlayın",
        "body": "Game Boy Color oyunları .gbc uzantısını kullanır. Retropa içinde oyun ya da BIOS dosyası bulunmaz; bu yüzden dosyayı kendiniz hazırlayın, ayrı bir yedek tutun ve yalnızca kullanma hakkına sahip olduğunuz içeriği içe aktarın.",
        "points": [
          ".gbc bir Game Boy Color oyunudur.",
          "Orijinal Game Boy oyunları .gb uzantısını kullanır ve Retropa'da da çalışır.",
          "Renk elde etmek için bir .gb dosyasını .gbc olarak yeniden adlandırmayın."
        ]
      },
      {
        "title": "Game Boy Color için çekirdek seçimi",
        "body": "SameBoy, GB ve GBC odaklı çekirdektir; mGBA ve SkyEmu da Game Boy Color sistemini kapsar. Bir oyunda renkler ya da zamanlama yanlış görünüyorsa çekirdek değiştirmek geçerli bir ilk testtir, çünkü her çekirdek donanımı biraz farklı ele alır.",
        "points": [
          "GBC oyunları için SameBoy doğal bir ilk tercihtir.",
          "mGBA tek çekirdekte GB, GBC ve GBA sistemlerini kapsar.",
          "Çekirdek seçimi her oyun için saklanır."
        ]
      },
      {
        "title": "İçe aktarma ve ilk başlatma",
        "body": "Dosyayı yerel depolamaya indirin; böylece Dosyalar uygulaması bir yer tutucu sunmaz. Ardından Retropa kitaplığındaki içe aktarma girişinden dosyayı seçin. Oyunu açın ve tema ya da filtre uygulamadan önce rengi, sesi ve varsayılan dokunmatik yerleşimi doğrulayın; böylece sonradan çıkan bir sorunun kaynağını bulmak kolaylaşır.",
        "points": [
          "Yalnızca başlık ekranını değil, renk kullanan bir sahneyi de test edin.",
          "Görüntünün yanı sıra ses kanalını da kontrol edin.",
          "Sorunu incelerken orijinal dosyayı değiştirmeden saklayın."
        ]
      },
      {
        "title": "Renkli bir el konsolu için görüntü ve yerleşim",
        "body": "Game Boy Color ekranı küçük ve yansımalıdır. Bir LCD Grid ön ayarı, bu ekrana uyan bir alt piksel yapısı ekler; bir DMG ön ayarı ise bilinçli olarak eski tek renkli paneli hatırlatır. Retropa gelişmiş filtreleri sabit bir tam sayı katı yerine gerçek çıktı alanından yola çıkar; böylece oranlar cihaz boyutları arasında korunur.",
        "points": [
          "Her ön ayarı özgün görüntüyle karşılaştırın.",
          "Gelişmiş filtreler için Retropa Plus gerekir.",
          "Temanın oyun görüntüsünü kapatmadığını kontrol edin."
        ]
      },
      {
        "title": "Kol düzeni ve ekran yönü",
        "body": "Bir Game Boy Color yerleşimi için yön tuşları, A ve B ile Start ve Select gerekir. Dikey yerleşim kısa oturumlara uygundur; yatay yerleşim düğmelere daha fazla alan bırakır ve daha büyük bir iPhone'da daha rahat olabilir. Gerçekte oynadığınız yönde her girişe ulaşılabildiğini doğrulayın."
      },
      {
        "title": "Bir Game Boy Color oyunu başlamadığında",
        "body": "Önce uzantıyı ve seçili sistemi kontrol edin, ardından tam hata mesajını okuyun. Bölge ya da palet yanlış görünüyorsa ayarları değiştirmeden önce çekirdekleri karşılaştırın. Bir çekirdekte oluşturulan kayıtlar başka bir çekirdekte okunmayabilir; bu yüzden geçiş yapmadan önce yedek alın.",
        "points": [
          "Uygulama sürümünü, sistemi, çekirdeği ve hatayı not edin.",
          "Destek ekibine ticari ROM ya da BIOS dosyası göndermeyin.",
          "Sorunları yalıtmak için varsayılan temaya ve basit bir filtreye dönün."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Game Boy Color oyunları dahil mi?",
        "answer": "Hayır. Retropa bir emülatördür; oyun ya da BIOS dosyası sağlamaz. Yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın."
      },
      {
        "id": "gb-on-gbc",
        "question": "Orijinal Game Boy oyunlarını da oynayabilir miyim?",
        "answer": "Evet. Orijinal Game Boy .gb dosyaları, Game Boy Color sistemini çalıştıran aynı çekirdekler üzerinde Retropa'da da çalışır."
      },
      {
        "id": "force-colour",
        "question": "Bir .gb dosyasını .gbc olarak yeniden adlandırmak renk ekler mi?",
        "answer": "Hayır. Uzantı dosyanın içeriğini değiştirmez; bu yüzden yeniden adlandırma Game Boy Color özelliklerini etkinleştirmez."
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
    "title": "iPhone ve iPad için NES Emülatörü | Retropa",
    "description": ".nes, .fds ve .nsf dahil desteklenen dosya biçimleri, çekirdek seçimi, içe aktarma adımları, kol eşleme ve sorun giderme ile kendi NES oyunlarınızı iPhone ve iPad'de çalıştırın.",
    "summary": "Retropa, NES oyunlarını kendi dosyalarınızdan çalıştırır; iki özel çekirdek üzerinden .nes, .fds ve NSF ses biçimlerini kapsar ve oyun kolu eşleme ile CRT görünümleri sunar.",
    "sections": [
      {
        "title": "Retropa'nın NES için kabul ettiği dosya biçimleri",
        "body": "Retropa'daki NES desteği tek bir uzantıyla sınırlı değildir. Yaygın .nes kartuş imajının yanı sıra çekirdekler Famicom Disk System imajlarını ve NSF ses dosyalarını, ayrıca düz ve birleşik iNES konteyner türevlerini kabul eder.",
        "points": [
          ".nes standart NES kartuş imajıdır.",
          ".fds Famicom Disk System içeriğini kapsar.",
          ".nsf ve .nsfe oynanabilir oyun değil, ses dosyalarıdır.",
          "ZIP ve RetroPack konteynerleri içe aktarılabilir ve yerinde açılabilir."
        ]
      },
      {
        "title": "İki çekirdek, tek sistem",
        "body": "Retropa, NES oyunları için RusticoNES ve TetaNES sunar; JGenesis de bu sistemi kapsar. İkinci bir çekirdeği denemek, sorunlu bir ROM ile gerçek bir emülasyon farkını ayırmanın en hızlı yoludur ve seçim her oyun için hatırlanır.",
        "points": [
          "RusticoNES kartuş oyunları için sağlam bir varsayılandır.",
          "TetaNES, bir şey ters gittiğinde denenecek alternatiftir.",
          "NSF ses dosyaları her çekirdekte oyunlardan farklı davranır."
        ]
      },
      {
        "title": "Bir NES oyununu içe aktarın",
        "body": "Dosyayı önce yerel olarak indirin; böylece Dosyalar uygulaması bir yer tutucu döndürmez. Ardından Retropa kitaplığındaki içe aktarma girişini açın. Oyunu varsayılan yerleşimle başlatın ve tema ya da filtre değiştirmeden önce görüntüyü, sesi ve varsayılan düğmeleri doğrulayın."
      },
      {
        "title": "İki düğmeli bir kolu kullanmak",
        "body": "NES kolu bilinçli olarak sadedir: yön tuşları, A, B, Start ve Select. Dokunmatik ekranda düğmeleri birbirine yaklaştırma eğilimi doğar; bu yüzden çapraz girişlerin hâlâ algılandığını ve oyun sırasında Start ile Select düğmelerine yanlışlıkla basılmadığını kontrol edin. Eşlenmiş bir fiziksel kol bu sorunların çoğunu çözer.",
        "points": [
          "Önce bir kolu iOS ile eşleyin, sonra Retropa içindeki eşlemesini kontrol edin.",
          "Yalnızca dört ana yönü değil, çapraz yönleri de doğrulayın.",
          "Her iki yönde de oynuyorsanız hem dikey hem yatay yerleşimi kontrol edin."
        ]
      },
      {
        "title": "Görüntüyü doğru ayarlamak",
        "body": "NES çıkışı standart çözünürlüklü bir televizyon için tasarlanmıştır; bu yüzden bir CRT görünümü çoğu zaman temiz bir piksel ızgarasından daha çok özgün deneyime benzer. Scanline ve delikli ızgara ön ayarları mevcuttur ve Retropa gelişmiş filtreleri sabit bir tam sayı katı yerine gerçek çıktı alanına uyum sağlar.",
        "points": [
          "Referans olarak özgün görüntüden başlayın.",
          "Geleneksel tarama çizgisi katmanları kesirli ölçeklerde titreyebilir.",
          "Gelişmiş filtreler için Retropa Plus gerekir."
        ]
      },
      {
        "title": "Bir NES oyunu yüklenmediğinde",
        "body": "Herhangi bir şeyi değiştirmeden önce tam hata mesajını okuyun. Bozuk bir dump, desteklenmeyen bir mapper, başlıksız bir imaj ya da BIOS dosyası eksik bir disk sistemi oyunu farklı sorunlardır. Uzantıyı ve seçili sistemi kontrol edin, ardından diğer NES çekirdeğini deneyin.",
        "points": [
          "Destek için uygulama sürümünü, çekirdeği ve tam hata metnini not edin.",
          "Sorunu incelerken orijinal dosyayı değiştirmeden saklayın.",
          "Destek talebine ticari ROM ya da BIOS dosyası eklemeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Retropa hangi NES biçimlerini açar?",
        "answer": "Retropa .nes, .fds, .nsf, .nsfe, .unf ve .unif dosyalarını kabul eder; ZIP ve RetroPack konteynerlerini de doğrudan açabilir."
      },
      {
        "id": "nsf",
        "question": "Bir .nsf dosyasını oyun gibi oynayabilir miyim?",
        "answer": "Hayır. NSF dosyaları ses verisidir; bu yüzden oyun yerine ses çalarlar. Bir oyunu oynamak için .nes ya da .fds dosyası kullanın."
      },
      {
        "id": "gamepad",
        "question": "Fiziksel bir kol NES oyunlarıyla çalışır mı?",
        "answer": "Evet. Uyumlu kollar iOS ile eşleştirilebilir ve Retropa içinde tuş ataması yapılabilir. Eşleştirmeden sonra atamayı kontrol edin, çünkü düğme sırası her zaman beklediğiniz gibi olmayabilir."
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
    "title": "iPhone ve iPad için SNES Emülatörü | Retropa",
    "description": "Kendi SNES oyunlarınızı iPhone ve iPad'de oynayın. Desteklenen .sfc ve .smc biçimleri, LakeSnes çekirdeği, altı düğmeli kol eşleme ve sorun giderme adımları.",
    "summary": "Retropa, SNES oyunlarını kendi .sfc ve .smc dosyalarınızdan LakeSnes çekirdeği üzerinde çalıştırır; altı düğmeli kol eşleme, kayıt durumları ve CRT görüntü ayarları sunar.",
    "sections": [
      {
        "title": "SNES dosya biçimleri",
        "body": "Super Nintendo imajları genellikle .sfc ya da .smc olarak dağıtılır ve Retropa birkaç ilgili konteyner ile kopyalama biçimini de kabul eder. Bir dosya başarısız olursa ilk kontrol edilecek şey uzantıdır, çünkü uyuşmayan bir başlık açılmayan bir oyunun yaygın nedenlerinden biridir.",
        "points": [
          ".sfc ve .smc standart SNES imajlarıdır.",
          "Retropa ayrıca .fig, .swc, .bs ve .st desteğini listeler.",
          "ZIP ve RetroPack konteynerleri doğrudan açılabilir."
        ]
      },
      {
        "title": "LakeSnes çekirdeği",
        "body": "Retropa, SNES oyunlarını LakeSnes üzerinde çalıştırır; JGenesis de bu sistemi listeler. Belirli bir oyunda zamanlama ya da grafik sorunu görülürse, çekirdeği suçlamadan önce dosyanın temiz bir imaj olduğunu doğrulayın ve geçerli uygulama sürümünü sürüm notlarıyla karşılaştırın.",
        "points": [
          "LakeSnes, SNES için özel çekirdektir.",
          "Bazı oyunlar belirli kartuş yardımcı işlemcilerine bağlıdır.",
          "Oyun bazında çekirdek seçimi hatırlanır."
        ]
      },
      {
        "title": "İçe aktarma ve ilk çalıştırma",
        "body": "Dosyayı bulut yer tutucusu yerine yerel depolamada tutun, ardından Retropa kitaplığındaki içe aktarma girişinden seçin. Oyunu açın ve herhangi bir görüntü ayarını değiştirmeden önce görüntüyü, sesi ve varsayılan dokunmatik kolları doğrulayın; böylece sonraki sorunların nedeni net olur."
      },
      {
        "title": "Altı düğme gerçek alan ister",
        "body": "SNES kolu yön tuşları, A, B, Start ve Select düzenine X, Y, L ve R düğmelerini ekler ve birçok oyun aynı anda basılmasını bekler. Dokunmatik ekranda yerleşimi yatay yöne yaymak ve her kombinasyonu kontrol etmek harcanan zamana değer. Eşlenmiş bir fiziksel kol, aksiyon oyunları için daha güvenilir seçenektir.",
        "points": [
          "Eşleme sırasında kolayca unutulan L ve R düğmelerini doğrulayın.",
          "Aynı anda bir çapraz yön ile bir omuz düğmesini test edin.",
          "Temanın oyun görüntüsünü kapatmadığını kontrol edin."
        ]
      },
      {
        "title": "Bir görüntü ayarı seçmek",
        "body": "SNES görselleri CRT için tasarlanmıştır; bu yüzden tarama çizgisi ve delikli ızgara ön ayarları genellikle ham piksel ızgarasından daha çok özgüne benzer. Retropa gelişmiş filtreleri tam sayı bir kat gerektirmek yerine gerçek çıktı alanını hesaba katar; bu, kullanılabilir yüksekliğin nadiren tam bölündüğü telefonlarda önemlidir.",
        "points": [
          "Özgün görüntüyü temel alın.",
          "Basit tarama çizgisi katmanları kesirli ölçeklerde titreyebilir.",
          "Gelişmiş filtreler için Retropa Plus gerekir."
        ]
      },
      {
        "title": "Bir SNES oyunu başlamadığında",
        "body": "Uzantıyı, seçili sistemi ve tam hata metnini kontrol edin. Bir oyun çalışmazken diğerleri çalışıyorsa, özel bir kartuş yongasına bağlı oyunlar genellikle baş şüphelidir. Test sırasında orijinal dosyayı bozmayın ve alternatif çekirdeğe geçmeyi deneyin.",
        "points": [
          "Destek için uygulama sürümünü, çekirdeği ve hatayı kaydedin.",
          "Filtre değişikliği kartuş yongası sorununu çözmez.",
          "Destek ekibine ticari ROM ya da BIOS dosyası göndermeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": ".sfc ya da .smc fark eder mi?",
        "answer": "Her ikisi de standart SNES imajlarıdır ve Retropa ikisini de kabul eder. Uzantı tek başına oyunu değiştirmez."
      },
      {
        "id": "chip-games",
        "question": "Neden bir oyun çalışmazken diğerleri çalışıyor?",
        "answer": "Bazı oyunlar ek kartuş donanımına bağlıdır. Dosya temiz bir imajsa ve diğer oyunlar çalışıyorsa, olası neden bu bağımlılıktır ve sıradaki test çekirdek değiştirmektir."
      },
      {
        "id": "saves",
        "question": "Kayıt durumları çekirdekler arasında taşınabilir mi?",
        "answer": "Güvenilir biçimde taşınamaz. Pil kayıtları ile kayıt durumları farklı yapılardır ve bir çekirdeğin yazdığı durum başka bir çekirdekte açılmayabilir; bu yüzden geçiş yapmadan önce yedek alın."
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
    "title": "iPhone için Sega Genesis ve Mega Drive Emülatörü | Retropa",
    "description": "Kendi Sega Genesis ve Mega Drive oyunlarınızı iPhone ve iPad'de oynayın. .md, .smd ve .gen biçimleri, JGenesis çekirdeği, altı düğmeli eşleme ve sorun giderme.",
    "summary": "Retropa, Sega Genesis ve Mega Drive oyunlarını kendi dosyalarınızdan JGenesis çekirdeği üzerinde çalıştırır; altı düğmeli kol desteği, kayıt durumları ve CRT görüntü ayarları sunar.",
    "sections": [
      {
        "title": "Genesis ve Mega Drive aynı sistemdir",
        "body": "Konsol Avrupa, Japonya ve Asya'nın büyük bölümünde Mega Drive, Kuzey Amerika'da ise Genesis adıyla satıldı. Donanım aynıdır; bu yüzden bir oyun dosyası her iki adla da çalışır, yalnızca kutudaki ad farklıdır. Retropa ikisini de listeler; bölgeler arasında dosya uzantılarının biraz farklı olmasının nedeni budur.",
        "points": [
          ".md ve .smd yaygın Mega Drive imajlarıdır.",
          ".gen, Kuzey Amerika'da yaygın olan uzantıdır.",
          "Uzantı, oyunun beklediği donanımı değiştirmez."
        ]
      },
      {
        "title": "JGenesis çekirdeği",
        "body": "Retropa, Genesis ve Mega Drive oyunlarını JGenesis üzerinde çalıştırır; bu çekirdek Master System, Game Gear ve birkaç el konsolu sistemini de kapsar. Tek bir çekirdek birkaç platforma hizmet ettiği için her oyunda seçili sistem önemlidir: sistem Genesis olarak ayarlıyken bir Master System oyunu içe aktarmak yaygın bir karışıklık kaynağıdır.",
        "points": [
          "JGenesis MD, GEN, SMS ve GG sistemlerini kapsar.",
          "Bir sorunu bildirmeden önce algılanan sistemi doğrulayın.",
          "Çekirdek ve sistem seçimi her oyun için hatırlanır."
        ]
      },
      {
        "title": "Bir Mega Drive oyununu içe aktarın",
        "body": "Dosyayı bulut yer tutucusu olarak bırakmak yerine yerel olarak saklayın, ardından Retropa kitaplığındaki içe aktarma girişinden seçin. Oyunu açın ve bir tema ya da filtre uygulamadan önce görüntüyü, sesi ve varsayılan dokunmatik yerleşimi doğrulayın."
      },
      {
        "title": "Altı düğmeli bir kolun eşlenmesi",
        "body": "Genesis kolları üç düğmeli ve altı düğmeli sürümlerle satıldı ve bazı oyunlar hangisinin algılandığına göre farklı davranır. Dokunmatik yerleşimde A, B, C ile sunulduğu yerde X, Y, Z ve Mode düğmelerinin tümüne ulaşılabildiğini doğrulayın ve oyunun gerçekten kullandığı bir kombinasyonu test edin.",
        "points": [
          "Hem üç düğmeli hem de altı düğmeli eşlemeleri doğrulayın.",
          "Birçok oyunda duraklatma işlevini de gören Start düğmesini kontrol edin.",
          "Eşlenmiş bir fiziksel kol yanlış basma sorunlarının çoğunu önler."
        ]
      },
      {
        "title": "16 bit bir konsol için görüntü ayarı",
        "body": "Mega Drive çıkışı CRT için tasarlanmıştır; bu yüzden tarama çizgisi ya da delikli ızgara ön ayarı, özellikle televizyonun yumuşatacağı titreme desenlerinde, ham piksel ızgarasından daha çok özgüne yakın görünür. Retropa gelişmiş filtreleri sabit bir tam sayı katı yerine gerçek çıktı alanından yola çıkar.",
        "points": [
          "Özgün görüntüden başlayın, ardından karşılaştırın.",
          "Titreme desenleri bir filtre ön ayarı için iyi bir testtir.",
          "Gelişmiş filtreler için Retropa Plus gerekir."
        ]
      },
      {
        "title": "Bir Genesis oyunu başlamadığında",
        "body": "Uzantıyı, sistem seçimini ve tam hata metnini kontrol edin. Tek bir çekirdek birkaç konsola hizmet ettiği için bölge ve sistem uyuşmazlıkları burada tek platformlu sistemlere göre daha sık görülür. Orijinal dosyayı bozmayın ve daha ileri değişikliklerden önce algılanan sistemi doğrulayın.",
        "points": [
          "Uygulama sürümünü, algılanan sistemi, çekirdeği ve hatayı kaydedin.",
          "Destek ekibine ticari ROM ya da BIOS dosyası göndermeyin.",
          "Kayıtları çekirdekler arasında taşımadan önce ayrı bir yedek tutun."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Mega Drive ile Genesis aynı şey mi?",
        "answer": "Evet. İki bölgesel ada sahip tek bir konsoldur; bu yüzden bir oyun dosyası her iki ad altında da çalışır."
      },
      {
        "id": "six-button",
        "question": "Retropa altı düğmeli kolları destekliyor mu?",
        "answer": "Dokunmatik yerleşim ve harici kol eşleme ek düğmeleri kapsar; bazı oyunlar algıladıkları kol sürümüne göre davranış değiştirir."
      },
      {
        "id": "system-detect",
        "question": "Oyunum neden yanlış sistem olarak algılanıyor?",
        "answer": "Tek bir çekirdek birkaç Sega platformuna hizmet eder; bu yüzden o oyun için algılanan sistemi kontrol edin ve uyumluluk sorununu bildirmeden önce düzeltin."
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
    "title": "iPhone ve iPad için Game Gear Emülatörü | Retropa",
    "description": "Kendi .gg Game Gear oyunlarınızı iPhone ve iPad'de oynayın. Oyunları hangi çekirdeğin çalıştırdığını, dosya içe aktarmayı, ekran kurulumunu ve bir oyun açılmadığında nelere bakılacağını anlatıyoruz.",
    "summary": "Retropa, Game Gear oyunlarını kendi .gg dosyalarınızdan JGenesis çekirdeğiyle çalıştırır; arka aydınlatmalı ekran görünümü, el konsolu temaları ve tam kol eşlemesi sunar.",
    "sections": [
      {
        "title": "Bir .gg dosyası hazırlayın",
        "body": "Game Gear oyunları .gg uzantısını kullanır. Retropa oyun veya BIOS dosyası içermez; bu yüzden dosyayı hazır bulundurun ve içe aktarmadan önce uygulama dışında bir kopyasını saklayın.",
        "points": [
          ".gg, Game Gear uzantısıdır.",
          "Bir .sms dosyası Game Gear'a değil Master System'e aittir.",
          "Yeniden adlandırma iki biçim arasında dönüştürme yapmaz."
        ]
      },
      {
        "title": "Game Gear'ı hangi çekirdek yönetir",
        "body": "JGenesis; Game Gear'ı Mega Drive, Genesis ve Master System ile birlikte kapsar. Tek bir çekirdek birkaç Sega platformuna hizmet ettiğinden, uyumluluk sorununu araştırmadan önce oyunun Game Gear olarak algılandığını doğrulayın."
      },
      {
        "title": "İçe aktarma ve ilk çalıştırma",
        "body": "Dosyayı yerel olarak indirin, ardından Retropa kitaplığındaki içe aktarma girişinden seçin. Tema uygulamadan önce görüntüyü, sesi ve varsayılan kolları doğrulayın; böylece sonradan çıkacak bir sorunun nedeni açık olur."
      },
      {
        "title": "Küçük, arka aydınlatmalı bir ekran",
        "body": "Game Gear paneli arka aydınlatmalı ve küçüktü; bu yüzden LCD Grid işlemesi ona daha uygun düşer, buna karşılık daha güçlü bir CRT ön ayarı özgün donanımdan belirgin biçimde daha ağır görünür. Retropa gelişmiş filtreleri, tam sayı katı gerektirmek yerine gerçek çıkış alanına uyum sağlar.",
        "points": [
          "Her ön ayarı özgün görüntüyle karşılaştırın.",
          "Gelişmiş filtreler Retropa Plus gerektirir.",
          "Oyun görüntüsünün temayla kapanmadığını kontrol edin."
        ]
      },
      {
        "title": "Kollar ve yönelim",
        "body": "Game Gear donanımı bir yön tuş takımı, iki eylem düğmesi ve Start sunuyordu. Az sayıda düğme, dikey yerleşimi rahat kılar; yine de Start'a tutuşunuzu kaydırmadan ulaşılabildiğini doğrulayın ve çapraz yönleri sınayın."
      },
      {
        "title": "Bir Game Gear oyunu çalışmadığında",
        "body": "Uzantıyı, algılanan sistemi ve hata metnini aynen doğrulayın. Game Gear olarak içe aktarılan bir Master System dosyası ya da tersi sık görülen bir nedendir. Sınama sırasında özgün dosyayı olduğu gibi koruyun.",
        "points": [
          "Uygulama sürümünü, algılanan sistemi, çekirdeği ve hatayı not edin.",
          "Ticari ROM veya BIOS dosyalarını desteğe göndermeyin.",
          "Kayıtları çekirdekler arasında taşımadan önce yedek alın."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Game Gear, Master System ile aynı mı?",
        "answer": "Yakından ilişkili olsalar da farklı sistemlerdir ve dosya uzantıları farklıdır. Tek bir çekirdek ikisini de çalıştırır; bu yüzden bir dosyanın hangi sistem olarak algılandığını kontrol edin."
      },
      {
        "id": "bios",
        "question": "Game Gear için BIOS dosyası gerekli mi?",
        "answer": "Retropa ile gelen çekirdeklerde gerekli değildir. Bir çekirdek böyle bir gereksinim bildirirse, ilgisiz bir dosya içe aktarmak yerine o çekirdeğin yönlendirmesini izleyin."
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
    "title": "iPhone ve iPad için Master System Emülatörü | Retropa",
    "description": "Kendi .sms Sega Master System oyunlarınızı iPhone ve iPad'de çalıştırın. Çekirdek kapsamı, içe aktarma adımları, kol yerleşimi ve bir oyun başlamadığında nelere bakılacağı.",
    "summary": "Retropa, Sega Master System oyunlarını kendi .sms dosyalarınızdan JGenesis çekirdeğiyle çalıştırır; el konsolu temaları, ekran işlemeleri ve kol eşlemesi sunar.",
    "sections": [
      {
        "title": "Bir .sms dosyası hazırlayın",
        "body": "Master System oyunları .sms uzantısını kullanır. Retropa oyun veya BIOS dosyası sağlamaz; bu yüzden dosyayı hazırlayın ve uygulama dışında bir yedek saklayın.",
        "points": [
          ".sms, Master System uzantısıdır.",
          ".gg Game Gear'a aittir ve farklı bir sistemdir.",
          "ZIP ve RetroPack kapları doğrudan açılabilir."
        ]
      },
      {
        "title": "Çekirdek kapsamı",
        "body": "JGenesis; Master System'i Mega Drive, Genesis ve Game Gear ile birlikte yönetir. Tek bir çekirdek birkaç platforma hizmet ettiğinden, bir dosya beklenmedik davrandığında ilk tanılama adımı algılanan sistemi doğrulamaktır."
      },
      {
        "title": "İçe aktarma ve doğrulama",
        "body": "Dosyayı yerel depolamada tutun, ardından Retropa kitaplığındaki içe aktarma girişinden seçin. Tema veya ekran ön ayarı uygulamadan önce görüntüyü, sesi ve varsayılan yerleşimi kontrol edin."
      },
      {
        "title": "İki düğme, tek yön tuş takımı",
        "body": "Master System kolları bir yön tuş takımı ve iki eylem düğmesi kullanıyordu; bazı modellerde duraklatma düğmesi konsolun kendisinde bulunuyordu. Dokunmatik bir yerleşimde duraklatmanın ulaşılabilir bir yere eşlenip eşlenmediğini doğrulamakta yarar var, çünkü atlanması kolaydır."
      },
      {
        "title": "Görüntü işlemesi",
        "body": "Master System oyunları CRT bir ekranı hedefler. Scanline ve aperture-grille ön ayarları genellikle ham piksel ızgarasından daha özgün bir görünüm verir ve Retropa gelişmiş filtreleri sabit bir tam sayı katı yerine gerçek çıkış alanına uyum sağlar.",
        "points": [
          "Ön ayarları özgün görüntüyle karşılaştırın.",
          "Gelişmiş filtreler Retropa Plus gerektirir."
        ]
      },
      {
        "title": "Bir Master System oyunu başlamadığında",
        "body": "Uzantıyı, algılanan sistemi ve hatayı tam olarak kontrol edin. Bölge farklılıkları ile Master System ve Game Gear uyuşmazlıkları olağan nedenlerdir. Tanılama sırasında özgün dosyaya dokunmayın.",
        "points": [
          "Uygulama sürümünü, algılanan sistemi, çekirdeği ve hatayı not edin.",
          "Ticari ROM veya BIOS dosyalarını bir destek talebine eklemeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Bir dosyanın Master System mi Game Gear mı olduğunu nasıl anlarım?",
        "answer": "Uzantıya bakın: .sms Master System, .gg ise Game Gear'dır. Retropa, içe aktarılan oyun için algılanan sistemi gösterir."
      },
      {
        "id": "pause",
        "question": "Duraklatma düğmesi nerede?",
        "answer": "Özgün donanımda kolda değil konsolun üzerindeydi. Retropa'da ekran yerleşiminin bir parçasıdır; bu yüzden ulaşabildiğiniz bir tuşa eşlendiğini kontrol edin."
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
    "title": "iPhone ve iPad için WonderSwan Emülatörü | Retropa",
    "description": "Kendi .ws WonderSwan oyunlarınızı iPhone ve iPad'de oynayın. Ares çekirdeği, dikey yönelim, içe aktarma adımları ve daha az yaygın bir el konsolu için sorun giderme.",
    "summary": "Retropa, WonderSwan oyunlarını kendi .ws dosyalarınızdan Ares çekirdeğiyle çalıştırır; donanımın tasarlandığı dikey yönelim de desteklenir.",
    "sections": [
      {
        "title": "Bir .ws dosyası hazırlayın",
        "body": "WonderSwan oyunları .ws uzantısını kullanır, WonderSwan Color ise .wsc kullanır. Retropa oyun veya BIOS dosyası içermez; dosyayı hazırlayın ve bir yedek saklayın.",
        "points": [
          ".ws WonderSwan'dır; .wsc ise WonderSwan Color.",
          "İkisi farklı yeteneklere sahip farklı sistemlerdir.",
          "Yeniden adlandırma bir oyunu renkli modele yükseltmez."
        ]
      },
      {
        "title": "Ares çekirdeği",
        "body": "Ares, Retropa'da WonderSwan ve WonderSwan Color'ı diğer el konsolu sistemleriyle birlikte yönetir. Bir oyun açılmazsa, ayarları değiştirmeden önce dosyanın temiz bir görüntü olduğunu ve algılanan sistemin dosya uzantısıyla eşleştiğini doğrulayın."
      },
      {
        "title": "İçe aktarma ve ilk çalıştırma",
        "body": "Dosyayı yerel olarak saklayın, ardından Retropa kitaplığındaki içe aktarma girişinden seçin. Tema veya ekran ön ayarı uygulamadan önce görüntüyü, sesi ve varsayılan kolları doğrulayın."
      },
      {
        "title": "Dikey tutulmak üzere tasarlanmış bir el konsolu",
        "body": "WonderSwan her iki yönelimde de çalışacak biçimde tasarlandı ve birçok oyun dikey oynanış için geliştirildi. Retropa dikey yerleşimleri destekler; bu yüzden görüntünün bozuk olduğuna karar vermeden önce oynadığınız oyunun döndürülmüş bir ekran bekleyip beklemediğine bakın.",
        "points": [
          "Dikey yerleşimin yanı sıra yatay yerleşimi de deneyin.",
          "Her oyun aynı yönelimi kullanmaz.",
          "Seçtiğiniz yönelimde tüm girdilere ulaşılabildiğini doğrulayın."
        ]
      },
      {
        "title": "Ekran işlemesi",
        "body": "WonderSwan, kendine özgü piksel yapısına sahip yansıtıcı ve tek renkli bir panel kullanıyordu. Bir LCD Grid ön ayarı ona uygun düşer, buna karşılık bir CRT ön ayarı özgün donanımdan daha ağır görünür. Gelişmiş filtreler gerçek çıkış alanına uyum sağlar.",
        "points": [
          "Özgün görüntüyü referans olarak kullanın.",
          "Gelişmiş filtreler Retropa Plus gerektirir."
        ]
      },
      {
        "title": "Bir WonderSwan oyunu başlamadığında",
        "body": "Uzantıyı, algılanan sistemi ve hatayı tam olarak kontrol edin. Bir .wsc dosyasını WonderSwan olarak kurmak ya da tersini yapmak sık karıştırılan bir durumdur. Sınama sırasında özgün dosyayı olduğu gibi koruyun.",
        "points": [
          "Uygulama sürümünü, algılanan sistemi, çekirdeği ve hatayı not edin.",
          "Ticari ROM veya BIOS dosyalarını desteğe göndermeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Renkli model dosyayı değiştirir mi?",
        "answer": "Evet. WonderSwan ve WonderSwan Color farklı uzantılar kullanır ve renkli bir oyun tek renkli sistemde doğru davranmayabilir."
      },
      {
        "id": "orientation",
        "question": "Ekran neden döndürülmüş görünüyor?",
        "answer": "Birçok WonderSwan oyunu dikey oynanış için tasarlandı. Görüntünün bozuk olduğunu varsaymadan önce dikey yerleşimi deneyin."
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
    "title": "iPhone ve iPad için Neo Geo Pocket Emülatörü | Retropa",
    "description": "Kendi .ngp ve .ngpc Neo Geo Pocket oyunlarınızı iPhone ve iPad'de çalıştırın. Çekirdek kapsamı, joystick tarzı kollar ve bunun Neo Geo arcade'den farkı.",
    "summary": "Retropa, Neo Geo Pocket ve Neo Geo Pocket Color oyunlarını kendi dosyalarınızdan Ares çekirdeğiyle çalıştırır ve Neo Geo arcade emülasyonundan ayrıdır.",
    "sections": [
      {
        "title": "Neo Geo Pocket, Neo Geo arcade değildir",
        "body": "Neo Geo Pocket ve Neo Geo Pocket Color el konsollarıdır. Neo Geo MVS ve AES arcade donanımıyla bir markayı paylaşırlar, ancak farklı dosyalara ve farklı çekirdeklere sahip tamamen farklı sistemlerdir. Retropa'da arcade desteği Plus gerektirir; Pocket emülasyonu gerektirmez.",
        "points": [
          ".ngp Neo Geo Pocket'tır; .ngpc ve .ngc ise renkli modeldir.",
          "Bir arcade neogeo.zip, Pocket oyunu değildir.",
          "Arcade ve Pocket kitaplıkları ayrıdır."
        ]
      },
      {
        "title": "Doğru dosyayı hazırlayın",
        "body": "İçe aktarmadan önce uzantıyı kontrol edin. Bir Pocket oyunu tek bir el konsolu görüntüsüdür; arcade bir Neo Geo seti ise genellikle birkaç çip dosyasından ve isteğe bağlı bir BIOS'tan oluşur. Birini diğeri yerine koymak, bu sistemde en sık yapılan hatadır."
      },
      {
        "title": "Ares çekirdeği",
        "body": "Ares, Retropa'da Neo Geo Pocket ve Neo Geo Pocket Color'ı diğer el konsolu platformlarıyla birlikte yönetir. Bir oyun açılmazsa uzantıyı ve algılanan sistemi doğrulayın, ardından dosyanın temiz bir görüntü olup olmadığını değerlendirin."
      },
      {
        "title": "Yön tuş takımı değil, mikro anahtarlı bir çubuk",
        "body": "Neo Geo Pocket, alışılmış bir yön tuş takımı yerine tık sesi çıkaran mikro anahtarlı bir çubuk kullanıyordu. Bu, uygulamada çapraz yönlerin her zamankinden daha önemli olduğu anlamına gelir; bu yüzden dokunmatik bir yerleşimi sınarken yalnızca dört ana yönü kontrol etmekle kalmayın, çapraz girdinin de temiz biçimde algılandığını doğrulayın.",
        "points": [
          "Çapraz yönleri açıkça sınayın.",
          "İki eylem düğmesinin uzun oturumlar için rahat olduğunu doğrulayın.",
          "Dövüş oyunları için eşlenmiş bir fiziksel kol kullanmakta yarar var."
        ]
      },
      {
        "title": "Ekran işlemesi",
        "body": "Pocket'ın renkli paneli küçük ve düşük çözünürlüklüdür; bu yüzden ona ağır bir CRT ön ayarından çok hafif bir LCD işlemesi uygun düşer. Retropa gelişmiş filtreleri, tam sayı katı gerektirmek yerine gerçek çıkış alanından yola çıkar.",
        "points": [
          "Özgün görüntüyle karşılaştırın.",
          "Gelişmiş filtreler Retropa Plus gerektirir."
        ]
      },
      {
        "title": "Bir Pocket oyunu başlamadığında",
        "body": "Uzantıyı, algılanan sistemi ve hatayı tam olarak doğrulayın. Kitaplıkta arcade dosyaları varsa bunlardan birini seçmediğinizi kontrol edin. Tanılama sırasında özgün dosyayı olduğu gibi koruyun.",
        "points": [
          "Uygulama sürümünü, algılanan sistemi, çekirdeği ve hatayı not edin.",
          "Ticari ROM veya BIOS dosyalarını desteğe göndermeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Neo Geo arcade oyunlarını burada oynayabilir miyim?",
        "answer": "O, kendi çekirdekleri ve dosyaları olan ayrı bir sistemdir. Retropa arcade ailelerini destekler ve bunlar Retropa Plus gerektirir; Neo Geo Pocket emülasyonu ayrıdır."
      },
      {
        "id": "neogeo-zip",
        "question": "Pocket oyunları için neogeo.zip gerekli mi?",
        "answer": "Hayır. O dosya Neo Geo arcade donanımıyla ilgilidir. Pocket oyunları onu kullanmaz."
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
    "title": "iPhone ve iPad için Neo Geo Emülatörü | Retropa",
    "description": "Desteklenen Neo Geo MVS arcade dosyalarını iPhone ve iPad'de Retropa ile oynayın. Set yapısı, BIOS gereksinimleri, ana ve türev setler ve bir oyun açılmadığında nelere bakılacağı.",
    "summary": "Retropa, desteklenen Neo Geo arcade setlerini iPhone ve iPad'de dokunmatik ve harici kollarla, CRT filtreleriyle çalıştırır. Arcade oyunları Retropa Plus gerektirir; oyunlar ve BIOS dosyaları dahil değildir.",
    "sections": [
      {
        "title": "Neo Geo arcade Plus gerektirir",
        "body": "Neo Geo arcade emülasyonu Retropa'nın arcade ailesinin bir parçasıdır ve arcade çekirdekleri Retropa Plus gerektirir. Bu, standart Pocket desteğiyle kapsanan bir el konsolu sistemi olan Neo Geo Pocket'tan ayrıdır.",
        "points": [
          "Arcade aileleri Retropa Plus gerektirir.",
          "Neo Geo Pocket farklı ve el konsolu olan bir sistemdir.",
          "Oyunlar ve BIOS dosyaları hiçbir durumda dahil değildir."
        ]
      },
      {
        "title": "Arcade seti tek dosya değildir",
        "body": "Konsol emülasyonu genellikle oyun başına tek dosya anlamına gelir. Arcade donanımı farklı çalışır: bir oyun, çoğu zaman bir ZIP içinde gruplanan bir çip dosyaları setidir ve birçok oyun bir ana sete ya da bir BIOS'a bağlıdır. Bu yüzden bir arcade ZIP'i, bir el konsolu ROM'undan farklı davranır.",
        "points": [
          "İçe aktarma akışı açmanızı istemedikçe ZIP'i olduğu gibi koruyun.",
          "Ayrı bir BIOS arşivi gerekebilir.",
          "Bir türev set, çekirdeğin gerektirdiği her dosyayı içermeyebilir."
        ]
      },
      {
        "title": "İçe aktarma ve ilk çalıştırma",
        "body": "Seti Retropa kitaplığındaki içe aktarma girişinden seçin, ardından varsayılan yerleşimle başlatın. Çekirdek eksik bir dosya ya da BIOS bildirirse o mesajı tam olarak okuyun: eksik bir ana set ile eksik bir BIOS farklı çözümler gerektirir.",
        "points": [
          "Herhangi bir şeyi değiştirmeden önce hatayı tam olarak okuyun.",
          "Tanılama sırasında özgün arşivi koruyun.",
          "Jeton ve başlatma girdilerine ulaşılabildiğini doğrulayın."
        ]
      },
      {
        "title": "Neo Geo Pocket dosyaları burada çalışmaz",
        "body": "Elinizde .ngp ya da .ngpc dosyaları varsa bunlar arcade ailesine değil Pocket sistemlerine aittir. Bir Pocket ROM'u ya da yeniden adlandırılmış bir ZIP, arcade setinin yerini tutamaz; tersi de geçerlidir.",
        "points": [
          ".ngp ve .ngpc el konsolu Pocket dosyalarıdır.",
          "Arcade setleri çok dosyalıdır ve bir BIOS gerektirebilir.",
          "Bir sorun bildirmeden önce algılanan sistemi kontrol edin."
        ]
      },
      {
        "title": "Arcade kolları ve ekran",
        "body": "Arcade donanımı bir joystick ile birkaç eylem düğmesi bekler ve birçok oyun aynı anda basmaya dayanır. Retropa ekran üstü kolları ve uyumlu harici kolları destekler; arcade çıkışına uygun CRT işlemeleri de sunar. Gelişmiş filtreler Plus gerektirir.",
        "points": [
          "Bir kolu eşlemeden önce iOS'ta eşleştirin.",
          "Aynı anda bir çapraz yön ile bir düğmeyi sınayın.",
          "CRT ön ayarları arcade çıkışına genellikle ham ızgaradan daha uygun düşer."
        ]
      },
      {
        "title": "Bir Neo Geo oyunu başlamadığında",
        "body": "Seçilen kartı, setin içeriğini ve çekirdeğin bildirdiği BIOS gereksinimini kontrol edin. Ana seti olmayan tek başına bir türev set ya da gerekli bir dosyası eksik olan bir set, hangi filtre veya tema uygulanırsa uygulansın açılmaz.",
        "points": [
          "Uygulama sürümünü, kart seçimini, çekirdeği ve hatayı tam olarak not edin.",
          "Filtre veya tema değişiklikleri eksik ROM verisini düzeltemez.",
          "Ticari ROM veya BIOS dosyalarını bir destek talebine eklemeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Arcade çekirdekleri neden Plus gerektiriyor?",
        "answer": "Arcade aileleri, premium temalar ve gelişmiş filtrelerle birlikte ücretli özellik setinin parçasıdır. Pocket ve kartuş sistemleri bunu gerektirmez."
      },
      {
        "id": "bios",
        "question": "Neo Geo BIOS gerekli mi?",
        "answer": "Birçok arcade seti bir BIOS bekler ve eksikse çekirdek bunu size bildirir. Kullanma hakkına sahip olduğunuz bir BIOS kullanın; Retropa indirme sağlamaz."
      },
      {
        "id": "pocket-confusion",
        "question": "Neo Geo Pocket aynı şey mi?",
        "answer": "Hayır. Pocket, kendi dosyalarına sahip bir el konsoludur. Bir arcade seti ile bir Pocket oyunu birbirinin yerine geçmez."
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
    "title": "iPhone ve iPad için mGBA Çekirdeği | Retropa",
    "description": "Game Boy, Game Boy Color ve Game Boy Advance için Retropa'da mGBA kullanın. Katalog biçimleri, ilk çalıştırma kontrolleri, kayıt önlemleri ve Plus çekirdek değiştirme.",
    "summary": "mGBA, Retropa'da Game Boy taşınabilir ailesini kapsar. Varsayılan düzen ve özgün görüntüyle başlayın, ardından sunum ayarlarını değiştirmeden önce gerçek bir oyun sahnesini kontrol edin.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "mGBA üst projesi: https://github.com/mgba-emu/mgba. Aşağıdaki kapsam Retropa'nın kataloğundan gelir; üst projenin tüm özellik listesini yansıtmaz. Listelenen bir uzantı, her oyunla uyumluluk garantisi vermez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Taşınabilir nesiller boyunca ilk başlatma",
        "body": "Dosyanızı Dosyalar uygulamasında yerel olarak indirin, Retropa kitaplığından içe aktarın ve algılanan sistemi doğrulayın. Bir Game Boy Color oyunu kendi renk donanım yoluna ihtiyaç duyar; dosya adını değiştirmek renk özelliklerini eklemenin veya kaldırmanın bir yolu değildir. Game Boy Advance için yüz düğmelerinin yanı sıra L ve R düğmelerini de test edin; çünkü eski taşınabilir cihazlar için tasarlanmış bir düzen bu düğmeleri atlayabilir.",
        "points": [
          "Başlangıç ekranından sonra sesi ve girişi kontrol edin.",
          "Özel bir düzen içe aktarmadan önce varsayılan temayı test edin.",
          "Özgün dosyayı uygulamanın dışında saklayın."
        ]
      },
      {
        "title": "Emülasyonu görüntü efektlerinden ayırın",
        "body": "Bir sahne yanlış görünüyorsa önce filtreler kapalıyken karşılaştırın. Yeşil ekran işlemesi rengi bilinçli olarak değiştirir, LCD ızgarası ise piksel görünümünü bilinçli olarak değiştirir. Bu efektler mGBA'nın oyunu yanlış işleyip işlemediğini belirleyemez. Ses veya zamanlama sorununda yalnızca açılış logosuna bakmak yerine tekrarlanabilir bir sahneyi ve uygulama sürümünü not edin."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyorken bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim her oyun için hatırlanır; aynı sahneyi ses, görüntü ve giriş farkları açısından test etmeden önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik geçiş garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "Taşınabilir kapsamın sınırları",
        "body": "mGBA, Retropa'daki Nintendo DS yolu değildir. Bir DS dosyası, adı değiştirilmiş bir Game Boy Advance görüntüsüne değil, katalogdaki DS çekirdeğine ihtiyaç duyar. Aynı şekilde başka bir emülatörden gelen kayıt durumu bir oyun dosyası değildir ve oyun dosyası olarak içe aktarılmamalıdır. Seçili sistem için bir BIOS istemi görünürse o istemi izleyin; Retropa ürün yazılımı sağlamaz."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Çekirdeği yalnızca tek bir oyun için değiştirebilir miyim?",
        "answer": "Evet, Retropa Plus ile. Seçim her oyun için saklanır, ancak değiştirmeden önce kayıtları yedekleyin ve durumların çekirdekler arasında çalışmasını beklemeyin."
      },
      {
        "id": "display",
        "question": "Başka bir filtre uyumluluk sorununu düzeltir mi?",
        "answer": "Hayır. Önce özgün görüntüyle test edin. Filtre sunumu değiştirir; emüle edilen donanımı veya oyun dosyasının içeriğini değiştirmez."
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
    "title": "iPhone ve iPad için SkyEmu Çekirdeği | Retropa",
    "description": "SkyEmu, Retropa'da Game Boy ailesini ve Nintendo DS'i kapsar. Biçimleri, çift ekran dokunmatik kontrollerini, sınırlamaları ve Plus çekirdek değiştirmeyi inceleyin.",
    "summary": "SkyEmu, Retropa'da Game Boy taşınabilirlerinin yanı sıra Nintendo DS'i de yönetir. DS uyumluluğu oyuna özeldir; her oyunun veya dokunmatik etkileşimin doğru çalışacağına dair bir vaat değildir.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "SkyEmu üst projesi: https://github.com/skylersaleh/SkyEmu. Aşağıdaki kapsam Retropa'nın kataloğundan gelir; üst projenin tüm özellik listesini yansıtmaz. Listelenen bir uzantı, her oyunla uyumluluk garantisi vermez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "SkyEmu ile Nintendo DS",
        "body": "DS uyumluluğunu oyuna özel bir konu olarak ele alın. Yerel olarak indirilen bir dosyayı içe aktarın, Nintendo DS'in algılandığını doğrulayın ve açılış ekranının ötesinde test edin. Uzun bir oturuma güvenmeden önce dokunmatik giriş içeren bir sahneyi ve ses içeren bir sahneyi kontrol edin. Bir oyun donarsa uygulama sürümünü ve tam hatayı kaydedin; tema değiştirmek bir çekirdek uyumluluk sorununu onaramaz.",
        "points": [
          "Katalog, Nintendo DS için yalnızca SkyEmu'yu listeler.",
          "Plus çekirdek değiştirme alternatif bir DS çekirdeği oluşturmaz.",
          "DS oyunlarını denerken bağımsız kayıt yedekleri tutun."
        ]
      },
      {
        "title": "İki ekran ve dokunmatik giriş",
        "body": "Her iki ekranı da görünür bırakan bir düzen seçin. Dikey mod ekranları üst üste yerleştirebilir; yatay mod temaya bağlıdır. Küçük dokunmatik hedefleri gerçekten oynadığınız boyutta test edin ve hangi ekranın dokunmatik girişi aldığını doğrulayın. Fiziksel bir kol eşlenmiş düğmeleri yönetebilir ancak her dokunmatik etkileşimin yerini alamaz.",
        "points": [
          "Yalnızca ana oyun görünümü yerine her iki ekranı da test edin.",
          "Dokunmatik kontrolleri harici bir kol ile erişilebilir bırakın.",
          "Tek ekranlı taşınabilir teması bir DS düzeni değildir."
        ]
      },
      {
        "title": "SkyEmu'yu eski taşınabilirler için kullanma",
        "body": "Game Boy ailesi tek ekranlı düzenler kullanır. Renk veya eksik düğme sorunlarını araştırmadan önce algılanan sistemi doğrulayın ve uygun bir tema kullanın. ZIP ve RetroPack birer içe aktarma kabıdır, ek emüle sistemler değildir; içindeki dosyanın yine de katalogla eşleşmesi gerekir. Bir Game Boy Advance dosyasının adını değiştirmek onu DS oyununa dönüştürmez."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyorken bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim her oyun için hatırlanır; aynı sahneyi ses, görüntü ve giriş farkları açısından test etmeden önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik geçiş garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Nintendo DS oyunlarını hangi çekirdek çalıştırır?",
        "answer": "SkyEmu, Retropa'nın Nintendo DS için kataloğa kayıtlı çekirdeğidir. Uyumluluk oyuna özeldir ve katalog başka bir DS çekirdeği listelemez."
      },
      {
        "id": "touch",
        "question": "DS oyunları bir kol ile de dokunmatik girişe ihtiyaç duyar mı?",
        "answer": "Evet. Dokunmatiği kullanan oyunlar için dokunmatik ekranı erişilebilir tutun; bir kol tüm dokunmatik eylemlerin yerini almaz."
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
    "title": "iPhone ve iPad için SameBoy Çekirdeği | Retropa",
    "description": "SameBoy, Retropa'da Game Boy ve Game Boy Color'a odaklanır. Renk davranışını, dosya kapsamını, kayıt durumu sınırlarını ve çekirdek değiştirme için Plus gereksinimini inceleyin.",
    "summary": "SameBoy, özgün monokrom ve renkli Game Boy donanımına odaklanır. Daha dar kapsamı onu yararlı bir karşılaştırma noktası yapar; diğer her çekirdeğin daha az doğru olduğunun garantisi değildir.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "SameBoy üst projesi: https://github.com/LIJI32/SameBoy. Aşağıdaki kapsam Retropa'nın kataloğundan gelir; üst projenin tüm özellik listesini yansıtmaz. Listelenen bir uzantı, her oyunla uyumluluk garantisi vermez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Rengi filtre olmadan kontrol edin",
        "body": "Yerel olarak sakladığınız dosyayı içe aktarın ve Retropa'nın onu Game Boy mu yoksa Game Boy Color mı olarak tanımladığını doğrulayın. Özgün görüntüyle başlayın: bir DMG işlemesi renkli bir oyunu bilinçli olarak monokrom gösterebilir. Bilinen renk değişimleri olan bir sahne kullanın ve oyunun iki farklı noktası yerine aynı sahneyi karşılaştırın."
      },
      {
        "title": "Zamanlama ve girişi test etme",
        "body": "Yön tuşlarını, A, B, Start ve Select düğmelerini kontrol etmek için varsayılan temayı kullanın. Zamanlama veya ses yanlış görünüyorsa tam olarak ne zaman olduğunu ve görüntü efektleri kapalıyken sürüp sürmediğini not edin. Retropa Plus ile başka bir uyumlu çekirdekle yapılan karşılaştırma çekirdeğin gerçeklemesini yalıtmaya yardımcı olabilir; ancak tek başına görünür bir fark hangi çekirdeğin donanımla eşleştiğini kanıtlamaz."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyorken bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim her oyun için hatırlanır; aynı sahneyi ses, görüntü ve giriş farkları açısından test etmeden önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik geçiş garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "Bir Game Boy Advance çekirdeği değil",
        "body": "SameBoy, Retropa'da Game Boy Advance'i kapsamaz. Bir GBA görüntüsü için kataloğa kayıtlı GBA destekli bir çekirdek kullanın; uzantısını değiştirmek onu Game Boy oyunu yapmaz. Aynı şekilde SameBoy'a geçmek farklı bir çekirdeğin ürettiği kayıt durumunu taşınabilir kılmaz. Eski durumu saklayın ve oyun içi kayıt yedeğini ayrıca test edin."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "SameBoy Game Boy Advance oyunlarını çalıştırabilir mi?",
        "answer": "Hayır. Retropa'nın SameBoy katalog kaydı Game Boy ve Game Boy Color'ı kapsar, Game Boy Advance'i kapsamaz."
      },
      {
        "id": "why",
        "question": "SameBoy'u başka bir çekirdekle ne zaman karşılaştırmalıyım?",
        "answer": "Retropa Plus ile, dosyayı kontrol ettikten ve filtreleri kapattıktan sonra tekrarlanabilir bir zamanlama, renk veya ses sorununu karşılaştırın. Önce kayıtları yedekleyin."
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
    "title": "iPhone ve iPad'de NES için RusticoNES Çekirdeği | Retropa",
    "description": "Retropa'da RusticoNES: NES ve Famicom kartuş ve disk biçimleri, mapper kontrolleri, ilk başlatma, kayıt önlemleri ve Plus çekirdek değiştirme.",
    "summary": "RusticoNES, Retropa'nın varsayılan NES çalışma yoludur. Kataloğa kayıtlı NES / Famicom biçimleri için kullanın; başarısız bir açılışı görüntü sorunu saymadan önce kartuş üst verilerini ve disk gereksinimlerini kontrol edin.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "RusticoNES üst projesi: https://github.com/zeta0134/rustico. Aşağıdaki kapsam Retropa'nın kataloğundan gelir; üst projenin tüm özellik listesini yansıtmaz. Listelenen bir uzantı, her oyunla uyumluluk garantisi vermez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Kartuşlar, UNIF ve disk görüntüleri",
        "body": "Bir NES / Famicom kartuş görüntüsü ile bir Famicom Disk System görüntüsü farklı girdilerdir. UNIF bir kartuş kap biçimidir, iNES başlığının başka bir adı değildir. İçe aktarırken özgün başlığı ve uzantıyı koruyun; dosyayı başka bir biçim gibi göstermek için yeniden adlandırmak veya baytları silmek, kartını tanımlamak için kullanılan bilgileri yok edebilir.",
        "points": [
          "Özgün görüntünün ayrı bir kopyasını saklayın.",
          "Herhangi bir disk sistemi BIOS istemini okuyun; Retropa BIOS'u sağlamaz.",
          "NSF ses biçimleri RusticoNES için listelenmez; bunun yerine TetaNES'i kontrol edin."
        ]
      },
      {
        "title": "İlk başlatma ve kol kontrolleri",
        "body": "Görüntüyü Dosyalar uygulamasında yerel olarak indirin, Retropa kitaplığı üzerinden içe aktarın ve NES'in algılandığını doğrulayın. Varsayılan temayla ve görüntü efekti olmadan başlayın. Yön tuşlarını, A, B, Start ve Select düğmelerini; çapraz yönler ve aynı anda basmalar dahil test edin. Özel bir düzende eksik bir giriş, kötü bir mapper'ın kanıtı değildir."
      },
      {
        "title": "Bir kartuş çalışmazken diğerleri çalıştığında",
        "body": "NES kartuşları farklı mapper donanımları içerebilir. Tanınan bir uzantı, belirli bir oyunun kullandığı kartın uygulandığını kanıtlamaz. Tam hatayı ve kendi döküm üst verilerinizden biliniyorsa mapper ile bölgeyi kaydedin. Başlıkları rastgele yamamayın veya bir BIOS'un kart sorununu çözeceğini varsaymayın. Disk oyunlarında eksik BIOS ile eksik disk verisini birbirinden ayırın."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyorken bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim her oyun için hatırlanır; aynı sahneyi ses, görüntü ve giriş farkları açısından test etmeden önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik geçiş garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "Yalnızca örtüşen biçimleri karşılaştırın",
        "body": "NES sistem sayfası, çekirdekleri arasındaki biçimlerin birleşimini listeler; her çekirdeğin hepsini kabul ettiği vaadi değildir. RusticoNES'i TetaNES veya JGenesis ile karşılaştırmak için Plus'ı kullanmadan önce özgün dosyanın biçimi için her iki katalog kaydını da kontrol edin. Aynı sahneyi ve varsayılan görüntü ayarlarını koruyun; böylece değişen bir tema veya filtre sonucu gizlemez."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "NSF sesi için listelenen çekirdek RusticoNES mi?",
        "answer": "Hayır. Retropa'nın kataloğu NSF ve NSFE'yi RusticoNES altında değil TetaNES altında listeler. Ses dosyaları oynanabilir kartuş oyunları değildir."
      },
      {
        "id": "mapper",
        "question": "Desteklenen bir uzantı bir oyunun açılacağını garanti eder mi?",
        "answer": "Hayır. Kartuş mapper'ı, dosya bütünlüğü ve varsa disk sistemi gereksinimleri yine önemlidir. Dosyayı değiştirmeden önce tam hatayı kaydedin."
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
    "title": "iPhone ve iPad'de NES için TetaNES Çekirdeği | Retropa",
    "description": "Retropa'da TetaNES: NES / Famicom oyunları, disk görüntüleri ve NSF sesi, biçime özel kontroller, kol kurulumu ve çekirdek değiştirme için Plus gereksinimi.",
    "summary": "TetaNES, Retropa'da kataloğa kayıtlı kartuş, disk ve müzik dosyası kapsamı olan alternatif bir NES çekirdeğidir. Oynanabilir bir oyun ekranı beklemeden önce hangi tür dosyayı içe aktardığınızı kontrol edin.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "TetaNES üst projesi: https://github.com/lukexor/tetanes. Aşağıdaki kapsam Retropa'nın kataloğundan gelir; üst projenin tüm özellik listesini yansıtmaz. Listelenen bir uzantı, her oyunla uyumluluk garantisi vermez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Müzik dosyaları kartuş oyunları değildir",
        "body": "NSF ve NSFE, NES müzik verisi barındırır. Birini içe aktardıysanız normal bir oyun seviyesinin olmaması tek başına bir başarısızlık değildir. Ses çıkışını ve uygulamanın gerçekte sunduğu kontrolleri kontrol edin; üst projedeki masaüstü müzik çalar arayüzünün Retropa'da bulunduğunu varsaymayın. Oyun için kullanma hakkına sahip olduğunuz bir kartuş veya disk görüntüsüyle başlayın.",
        "points": [
          "Müziği test ederken cihaz ses düzeyini ve ses çıkışını kontrol edin.",
          "Bir ses dosyasının adını değiştirmek onu kartuş görüntüsüne dönüştüremez.",
          "UNIF uzantıları TetaNES'in değil RusticoNES'in katalog kaydına aittir."
        ]
      },
      {
        "title": "Bir kartuş veya disk görüntüsü içe aktarın",
        "body": "Kitaplık içe aktarma girişini kullanmadan önce dosyayı cihaza indirin. NES algılamasını doğrulayın ve özgün görüntüyü değiştirmeden saklayın. Famicom Japon sistem adıdır; Famicom Disk System ek disk gereksinimleri ekler. Seçili çekirdek bir BIOS veya disk verisi sorunu bildirirse dosyayı ilgisiz bir kartuş görüntüsüyle değiştirmek yerine tam o gereksinimi çözün."
      },
      {
        "title": "Girişi ve tekrarlanabilir bir sahneyi test edin",
        "body": "Yön tuşlarını, iki eylem düğmesini, Start ve Select'i içeren bir NES / Famicom düzeni kullanın. Varsayılan temayla çapraz yönleri doğrulayın, ardından sorunu gösteren bir sahneyi test edin. Bir CRT efekti uygulamadan önce özgün görüntüyle karşılaştırın: tarama satırları, çekirdeğin emüle ettiğini değiştirmeden algılanan ayrıntıyı değiştirebilir."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyorken bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim her oyun için hatırlanır; aynı sahneyi ses, görüntü ve giriş farkları açısından test etmeden önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik geçiş garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "Alternatif bir çözüm evrensel bir onarım değildir",
        "body": "TetaNES ve RusticoNES farklı biçim listelerine ve gerçeklemelere sahiptir. Bir değişiklik, yalnızca dosya her ikisi için de geçerliyse zamanlama veya mapper sorununu yalıtmaya yardımcı olabilir; belirli bir kart için destek garanti edemez. Önceki çekirdeğin kayıt durumları, değiştirilebilir dosyalar olarak görülmek yerine o çekirdekle birlikte yedekli kalmalıdır."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "NSF dosyam neden oynanabilir bir oyun göstermiyor?",
        "answer": "NSF müzik verisidir. Normal bir oyun seviyesi beklemek yerine sesi test edin; oyun için bir kartuş veya disk görüntüsü kullanın."
      },
      {
        "id": "switch",
        "question": "Bir NES oyununu ücretsiz olarak TetaNES'e geçirebilir miyim?",
        "answer": "Emülasyon çekirdeklerini değiştirmek Retropa Plus gerektirir. Hedef çekirdeğin biçim kapsamını kontrol edin ve önce ilerlemeyi yedekleyin."
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
    "title": "iPhone ve iPad'de SNES için LakeSnes Çekirdeği | Retropa",
    "description": "Retropa'da LakeSnes: SNES / Super Famicom biçimleri, kartuş yongası sınırlamaları, altı düğmeli kontroller, kayıt yedekleri ve Plus ile çekirdek değiştirme.",
    "summary": "LakeSnes, Retropa'nın SNES odaklı çekirdeğidir. Kataloğu birkaç görüntü ve kopyalayıcı biçimi içerir, ancak dosya tanıma ile bir oyunun kartuş donanımı desteği ayrı sorulardır.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "LakeSnes üst projesi: https://github.com/dinkc64/LakeSnes. Aşağıdaki kapsam, üst projenin tam özellik listesinden değil Retropa'nın kataloğundan gelir. Listelenen bir uzantı, her başlıkla uyumluluğu garanti etmez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Görüntüyü ve başlığını bozmadan koruyun",
        "body": "SNES, Japonya'da Super Famicom adıyla bilinir. Yaygın kartuş görüntüleri SFC veya SMC uzantılarını kullanır; katalog ayrıca diğer kopyalayıcı ve ilgili biçimleri de listeler. Uzantının kendisi, bir dosyada kopyalayıcı başlığı bulunup bulunmadığını veya özel kartuş donanımı gerekip gerekmediğini kanıtlamaz. İlk sorun giderme adımı olarak başlığı sökmek yerine yerel olarak saklanan özgün görüntüyü içe aktarın ve bir yedek tutun."
      },
      {
        "title": "Kolun tamamını sınayın",
        "body": "Kitaplığa içe aktarma işleminden sonra algılanan sistemi doğrulayın ve varsayılan düzenle başlayın. SNES, iki düğmeli taşınabilir düzene X, Y, L ve R ekler. Omuz düğmelerini, çapraz yönleri ve oyunun kullandığı eşzamanlı basışı sınayın; L veya R düğmelerini atlayan gösterişli bir tema, çalışan bir oyunu takılmış gibi gösterebilir.",
        "points": [
          "Altı oyun düğmesinin yanı sıra Start ve Select düğmelerini de sınayın.",
          "Dokunmatik düzen sınırlamalarını değerlendirmeden önce eşleştirilmiş bir kolu atayın.",
          "Girdi ve görüntü sorunlarını ayırmak için özgün görüntüyü kullanın."
        ]
      },
      {
        "title": "Kartuş yongası ve özel biçim sınırları",
        "body": "Bazı SNES başlıkları ek kartuş işlemcilerine veya başka donanıma bağlıdır. Kataloğun uzantı listesi, yonga başına bir uyumluluk listesi değildir ve tanınan bir BS veya ST dosyası, her aksesuar iş akışının Retropa'da sunulduğunu göstermez. Yalnızca tek bir başlık başarısız olursa, bilindiğinde donanım gereksinimlerini ve tam hata mesajını kaydedin. Bir filtrenin veya yeniden adlandırılmış bir uzantının eksik donanım desteğini ekleyebileceğini iddia etmeyin."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyor olsa bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim oyun başına hatırlanır; aynı sahneyi ses, görüntü ve girdi farklılıkları için sınamadan önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik taşıma garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "LakeSnes ile JGenesis karşılaştırması",
        "body": "JGenesis de SNES listeler, ancak SNES uzantı kapsamı LakeSnes'inkinden daha dardır. Plus ile yalnızca her iki kaydın da listelediği bir dosya biçimini karşılaştırın. Aynı sahneye aynı kontrollerle ve filtresiz dönün, her çekirdeğin durumlarını ayrı tutun. Tek bir kartuş için başarılı bir karşılaştırma, her özel yongalı başlık için uyumluluk sağlamaz."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Her LakeSnes biçimi JGenesis üzerinde de çalışır mı?",
        "answer": "Bunu varsaymayın. Her çekirdeğin katalog kaydına bakın; sistem düzeyindeki biçimler, çekirdekler arasındaki kapsamı birleştirir."
      },
      {
        "id": "chips",
        "question": "Biçim listesi özel yonga uyumluluğunu garanti eder mi?",
        "answer": "Hayır. Dosya tanıma ile kartuş donanımının emülasyonu ayrı konulardır. Görüntüyü değiştirmeden önce tam hatayı ve seçili çekirdeği denetleyin."
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
    "title": "iPhone ve iPad'de JGenesis Çekirdeği | Retropa",
    "description": "Retropa'da JGenesis: kataloğa alınan Sega ve Nintendo sistemleri, Genesis / Mega Drive adları, biçim sınırları, sistem algılama ve Plus ile çekirdek değiştirme.",
    "summary": "JGenesis, Retropa'da tek bir çekirdek ailesi üzerinden birkaç sisteme hizmet eder. Algılanan sistem yine donanımı, kontrolleri ve kayıt bağlamını belirler; aynı çekirdeği paylaşmak dosyaları birbirinin yerine geçebilir hâle getirmez.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "JGenesis üst projesi: https://github.com/jsgroth/jgenesis. Aşağıdaki kapsam, üst projenin tam özellik listesinden değil Retropa'nın kataloğundan gelir. Listelenen bir uzantı, her başlıkla uyumluluğu garanti etmez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
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
        "title": "Genesis ve Mega Drive adlandırması",
        "body": "Genesis, Japonya ve Avrupa'da Mega Drive olarak bilinen konsolun Kuzey Amerika'daki adıdır. Retropa kataloğunda her iki ad altında da kayıtlar bulunur. Dosya uzantıları görüntü biçimi ipuçlarıdır, güvenilir bölge tanımlayıcıları değildir: bir dosya adı tek başına oyunun zamanlama veya bölge gereksinimlerini söylemez. Bir pazar seçmek için dosyayı yeniden adlandırmak yerine özgün dosyayı koruyun ve algılanan sistemi doğrulayın."
      },
      {
        "title": "Doğru donanım için içe aktarma",
        "body": "Görüntünüzü Dosya uygulamasında yerel olarak indirin ve kitaplık üzerinden içe aktarın. Başlamadan önce Master System ile Game Gear'ı ve NES / Famicom ile SNES / Super Famicom'u birbirinden ayırın. Çok sistemli bir çekirdek yine de uygun donanım yoluna ihtiyaç duyar. Algılanan sistem beklenmedikse, ekran veya kol ayarlarını değiştirmeden önce dosyanın kimliğini denetleyin.",
        "points": [
          "Master System ve Game Gear akraba sistemlerdir, aynı sistemler değildir.",
          "Sistem geneli bir biçim listesi başka çekirdeklerin biçimlerini içerebilir.",
          "Burada kapsam Retropa kataloğudur, JGenesis'in tüm üst proje özellikleri değildir."
        ]
      },
      {
        "title": "Kontroller seçilen sisteme göre değişir",
        "body": "Genesis için A, B, C ve düzenin sunduğu ek altı düğmeli girdileri sınayın. Game Gear için Start düğmesini doğrulayın; Master System için duraklatma girdisini denetleyin. SNES düzenleri, NES düzenlerinde bulunmayan omuz düğmelerine ihtiyaç duyar. Çekirdeğin bir girdiyi düşürdüğünü varsaymadan önce bir kol kombinasyonunu gerçek bir oyun sahnesinde doğrulayın."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyor olsa bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim oyun başına hatırlanır; aynı sahneyi ses, görüntü ve girdi farklılıkları için sınamadan önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik taşıma garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "Sega kapsamı alternatif bir çekirdek anlamına gelmez",
        "body": "Retropa kataloğu, Sega kartuş sistemleri için tek çekirdek olarak JGenesis'i listeler. Plus, alternatiflerin bulunduğu yerlerde değiştirmeyi açar; listelenmemiş bir uygulama eklemez. Üst projenin çok sistemli desteği de CD'nin, ek donanımın veya her masaüstü seçeneğinin Retropa içinde bulunduğu anlamına gelmez. Desteklenen yolu belirlemek için kataloğu ve gerçek uygulama istemlerini kullanın."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Bir .gen uzantısı oyunun Kuzey Amerika sürümü olduğunu kanıtlar mı?",
        "answer": "Hayır. Genesis ve Mega Drive bölgesel adlardır, ancak bir uzantı oyunun bölgesini veya zamanlama gereksinimlerini güvenilir biçimde ortaya koymaz."
      },
      {
        "id": "upstream",
        "question": "Retropa, JGenesis'in tüm üst proje sistemlerini sunar mı?",
        "answer": "Böyle bir garanti verilmez. Bu sayfa kapsamını üst projenin tam özellik listesinden değil Retropa'nın kendi kataloğundan alır."
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
    "title": "iPhone ve iPad'de Ares Çekirdeği | Retropa",
    "description": "Retropa'da Ares: kataloğa alınan GBA, WonderSwan ve Neo Geo Pocket kapsamı, renk modeli algılama, döndürülmüş düzenler, kayıt önlemleri ve Plus ile çekirdek değiştirme.",
    "summary": "Ares, Retropa'da seçili taşınabilir sistem ailelerini kapsar. Geniş üst proje kimliği, her üst proje sisteminin veya aksesuarının uygulamaya entegre edildiği anlamına gelmez.",
    "sections": [
      {
        "title": "Katalog sistemleri ve biçimleri",
        "body": "Ares üst projesi: https://github.com/ares-emulator/ares. Aşağıdaki kapsam, üst projenin tam özellik listesinden değil Retropa'nın kataloğundan gelir. Listelenen bir uzantı, her başlıkla uyumluluğu garanti etmez. Retropa hiçbir oyun veya BIOS dosyası sağlamaz; yalnızca kullanma hakkına sahip olduğunuz dosyaları içe aktarın.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Tek renkli veya renkli modeli eşleştirin",
        "body": "Yerel olarak indirilmiş bir görüntüyü içe aktarın ve Retropa'nın özgün WonderSwan mı yoksa WonderSwan Color mı, Neo Geo Pocket mı yoksa Neo Geo Pocket Color mı algıladığını denetleyin. Renkli modeller, tek renkli donanımda bulunmayan yeteneklere sahiptir. Bir dosyayı yeniden adlandırmak dönüştürme değildir ve yalnızca renkli bir başlığı özgün model oyunu olarak çalıştıramaz.",
        "points": [
          "Özgün görüntüyü ve ayrı bir ilerleme yedeğini saklayın.",
          "Palet sorunlarını teşhis etmeden önce algılanan modeli denetleyin.",
          "Sisteme özel bir ürün yazılımı istemi görünürse izleyin; hiçbir BIOS sağlanmaz."
        ]
      },
      {
        "title": "WonderSwan yönü portre ile sınırlı değildir",
        "body": "WonderSwan oyunları yatay veya dikey oynanış için tasarlanmış olabilir. Oyunun beklenen yönünü, her iki yön düğmesi grubunu ve kullanılabilir tema düzenini denetleyin. Telefonu yalnızca portre moduna çevirmek, emüle edilen ekranın ve tüm kontrollerin uygun biçimde döndürüldüğünü kanıtlamaz. Bir düzen gerekli girdileri sunamıyorsa, çekirdeğin bunları otomatik olarak yeniden eşleyebileceğini varsaymak yerine başka uygun bir düzen kullanın."
      },
      {
        "title": "Pocket, Neo Geo arcade değildir",
        "body": "Neo Geo Pocket, Neo Geo MVS ile ilişkilendirilen çok dosyalı arcade setleri değil, taşınabilir görüntüleri kullanır. Bir arcade BIOS arşivi, Pocket görüntüsünün yerini alamaz. Çapraz yönleri ve her iki eylem düğmesini varsayılan düzenle sınayın. Özgün Pocket ekranı tek renklidir; renkli modelin grafiklerini yalnızca Pocket Color'un göstermesi beklenmelidir. Arcade yürütme ayrı bir Plus yeteneğidir."
      },
      {
        "title": "Çekirdek değiştirme ve ilerlemeyi koruma",
        "body": "Emülasyon çekirdeğini değiştirmek, taşınabilir sistemin kendisi satın alma olmadan kullanılabiliyor olsa bile Retropa Plus gerektirir. Yalnızca hem sistemi hem de dosya biçimini kapsayan çekirdekleri karşılaştırın. Seçim oyun başına hatırlanır; aynı sahneyi ses, görüntü ve girdi farklılıkları için sınamadan önce oyunun kendi kaydını ve özgün çekirdeğin kayıt durumlarını yedekleyin.",
        "points": [
          "Kayıt durumları belirli bir çekirdeğin iç durumunu kaydeder; çekirdekler arası uyumluluk beklemeyin.",
          "Oyun içi kayıtları da yedekleyin ve doğrulayın; otomatik taşıma garanti edilmez.",
          "Çekirdek değiştirmek oyun dosyasını dönüştürmez veya eksik bir BIOS sağlamaz."
        ]
      },
      {
        "title": "Karşılaştırmanın bulunduğu ve bulunmadığı yerler",
        "body": "Katalog, Game Boy Advance için alternatifler listeler, ancak WonderSwan ve Neo Geo Pocket modelleri için yalnızca Ares'i listeler. Plus çekirdek değiştirme bu sistemler için başka bir uygulama eklemez. Ares'in üst proje kapsamı da bu entegrasyondan çok daha geniştir; bir uzantıyı değiştirerek başka bir üst proje sisteminin etkinleştirilebileceğini varsaymak yerine yalnızca burada listelenen Retropa kapsamını kullanın."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Ares Pocket desteği Neo Geo arcade setimi çalıştırabilir mi?",
        "answer": "Hayır. Pocket ile Neo Geo arcade, farklı dosya gereksinimleri olan farklı donanım aileleridir. Arcade yürütme Retropa Plus gerektirir."
      },
      {
        "id": "alternate",
        "question": "Plus, başka bir WonderSwan veya Pocket çekirdeği ekler mi?",
        "answer": "Hayır. Bu sistemler Retropa kataloğunda şu anda yalnızca Ares'i listeler. Değiştirme, uyumlu bir alternatifin bulunduğu yerde geçerlidir."
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
    "label": "Delta alternatifi",
    "title": "iPhone ve iPad için Delta Emülatör Alternatifi | Retropa",
    "description": "iPhone ve iPad'de Delta alternatifi mi arıyorsunuz? Arcade desteğini, Delta tema içe aktarmayı, ekran filtrelerini ve konsol modunu karşılaştırın; Delta'nın daha güçlü olduğu yerler dâhil.",
    "summary": "Retropa, iPhone ve iPad için Delta temalarını doğrudan içe aktaran, arcade aileleri ve tam sayı olmayan ölçekli ekran filtreleri ekleyen ve taşınabilir öncelikli bir arayüz sunan bir arcade ve taşınabilir sistem emülatörüdür.",
    "sections": [
      {
        "title": "Delta'dan devralınanlar",
        "body": "Emülatör değiştirmek, ancak mevcut kurulumunuz korunuyorsa anlamlıdır. Retropa, Delta .deltaskin paketlerini içe aktarır; böylece hâlihazırda ince ayar yaptığınız bir düzeni sıfırdan kurmanız gerekmez. Paketin oynadığınız sistemi ve yönü hedeflediğini denetleyin, ardından oyun görünümünün engellenmediğini doğrulayın.",
        "points": [
          ".deltaskin paketleri doğrudan içe aktarılır.",
          "Bir temaya güvenmeden önce hedeflenen sistemi denetleyin.",
          "Yatay ve dikey destek pakete bağlıdır."
        ]
      },
      {
        "title": "Retropa'nın Delta'ya kattığı yenilikler",
        "body": "En belirgin fark arcade desteğidir. Retropa, desteklenen CPS I, CPS II, CPS III, Neo Geo, PGM ve M92 arcade ailelerini taşınabilir sistemlerin yanında çalıştırır; böylece tek bir kitaplık her ikisini de kapsar. Arcade çekirdekleri Retropa Plus gerektirir ve oyunlar ile BIOS dosyaları dâhil değildir.",
        "points": [
          "Arcade aileleri taşınabilir sistemlerle aynı kitaplıkta.",
          "Arcade çekirdekleri için Retropa Plus gerekir.",
          "Arcade setleri çok dosyalıdır ve bir BIOS gerektirebilir."
        ]
      },
      {
        "title": "Tam sayı ölçek gerektirmeyen ekran filtreleri",
        "body": "Birçok retro filtre, oyun görüntüsünün ekran piksellerinin tam sayı katına denk geldiğini varsayar. Modern bir iPhone'da kullanılabilir alan nadiren tam bölünür; bu da kullanılmayan boşluk veya düzensiz tarama çizgileri bırakır. Retropa'nın gelişmiş filtreleri bunun yerine gerçek çıktı alanından çalışır ve tüm yönler ile tema düzenlerinde geçerlidir. Referans iOS uygulamasıdır; bu sitedeki tarayıcı önizlemesi bir yaklaşımdır.",
        "points": [
          "Filtreler sunumu değiştirir, oyun çözünürlüğünü değil.",
          "Gelişmiş filtreler Retropa Plus gerektirir.",
          "Geleneksel tarama çizgisi katmanları kesirli ölçeklerde titreyebilir."
        ]
      },
      {
        "title": "Delta'nın daha güçlü olduğu yer",
        "body": "Delta çok daha geniş bir kullanıcı tabanına, App Store'da daha uzun bir geçmişe ve daha geniş bir yayımlanmış tema topluluğuna sahiptir. En yaygın kullanılan seçeneği, en zengin mevcut tema kataloğunu veya en çok üçüncü taraf eğitimi istiyorsanız, Delta makul bir seçimdir ve bu sayfa bunun aksini iddia etmeyecektir.",
        "points": [
          "Delta'nın topluluğu daha büyük ve üçüncü taraf içeriği daha fazla.",
          "Delta, temalar etrafındaki ağ etkilerinden yararlanır.",
          "Retropa daha yeni ve kataloğu daha küçük bir üründür."
        ]
      },
      {
        "title": "İkisini denemek hiçbir şeye mal olmaz",
        "body": "Her iki uygulama da isteğe bağlı uygulama içi satın alımlarla birlikte ücretsiz indirilebilir. Pratik yaklaşım, Retropa'ya bir Delta teması aktarmak, bir taşınabilir oyun ile bir arcade seti yüklemek ve kararı kontrollerin ve görüntünün cihazınızda gerçekte nasıl hissettirdiğine göre vermektir.",
        "points": [
          "Her iki tarafta da indirme ücretsizdir.",
          "Her iki durumda da özgün dosyalarınızı ve temalarınızı saklayın.",
          "Karşılaştırma tablosuna göre değil, kendi cihazınızda karar verin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Retropa mevcut Delta temalarımı içe aktarabilir mi?",
        "answer": "Evet. Retropa .deltaskin paketlerini içe aktarır. Özgün paket dosyasını saklayın ve oynadığınız sistemi ve yönü hedeflediğini denetleyin."
      },
      {
        "id": "free",
        "question": "Retropa ücretsiz mi?",
        "answer": "Retropa, isteğe bağlı uygulama içi satın alımlarla birlikte ücretsiz indirilebilir. Arcade çekirdekleri, premium temalar ve gelişmiş filtreler Retropa Plus gerektirir. Fiyatlar uygulama içinde gösterilir."
      },
      {
        "id": "roms",
        "question": "Retropa oyun içeriyor mu?",
        "answer": "Hayır. Retropa bir emülatördür ve oyun veya BIOS dosyası sağlamaz. Yalnızca kullanma hakkına sahip olduğunuz içeriği içe aktarın."
      },
      {
        "id": "which-better",
        "question": "Hangi emülatör daha iyi?",
        "answer": "İkisi farklı konularda iyileştirme yapar. Delta'nın topluluğu ve tema kataloğu daha büyüktür; Retropa arcade ailelerini, tam sayı olmayan ölçekli filtreleri ve Delta tema içe aktarmayı ekler. İkisini de kendi cihazınızda deneyin."
      }
    ],
    "attribution": "Delta üçüncü taraf bir üründür. Bu sayfada adı geçen tüm ürün ve şirket adları, ilgili sahiplerinin tescilli markalarıdır ve burada yalnızca tanımlama ve olgusal karşılaştırma amacıyla kullanılmıştır. Retropa, bunlardan hiçbiriyle bağlantılı değildir; hiçbiri tarafından onaylanmamış veya desteklenmemiştir.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa ve Delta karşılaştırması",
    "title": "Retropa ile Delta karşılaştırması: Arcade, filtreler ve temalar",
    "description": "iPhone ve iPad'de Retropa ile Delta'nın doğrudan karşılaştırması: emüle edilen sistemler, arcade desteği, tema uyumluluğu, ekran filtreleri ve hangisinin hangi konuda daha uygun olduğu.",
    "summary": "Retropa ve Delta birer iOS emülatörüdür, ancak farklı konularda iyileştirme yaparlar: Delta daha büyük topluluğu ve tema kataloğunu sunar, Retropa ise arcade ailelerini ve tam sayı olmayan ölçekli ekran filtrelerini ekler.",
    "sections": [
      {
        "title": "Emüle edilen sistemler",
        "body": "Her iki uygulama da çoğu kişinin istediği taşınabilir sistemleri kapsar. Retropa ayrıca desteklenen arcade ailelerini çalıştırır; en büyük işlevsel fark budur. Arcade çekirdekleri Retropa Plus gerektirir; taşınabilir sistemler gerektirmez.",
        "points": [
          "Taşınabilir sistem kapsamı büyük ölçüde örtüşür.",
          "Arcade aileleri Retropa'ya özgüdür.",
          "Arcade oynamak Plus gerektirir."
        ]
      },
      {
        "title": "Temalar ve düzenler",
        "body": "Retropa, Delta .deltaskin paketlerini içe aktarır; böylece hâlihazırda kullandığınız bir düzen taşınabilir. Bunun ötesinde Delta'nın yayımlanmış tema ekosistemi daha büyüktür; geniş bir katalogda gezinmek istediklerinizin bir parçasıysa bu önemlidir.",
        "points": [
          "Retropa .deltaskin paketlerini içe aktarır.",
          "Yayımlanmış katalog Delta'da daha büyüktür.",
          "Bir paketin sisteminizi ve yönünüzü desteklediğini her zaman doğrulayın."
        ]
      },
      {
        "title": "Ekran filtreleri",
        "body": "Retropa, tam sayı ölçek katsayısı gerektirmek yerine gerçek çıktı alanına uyum sağlayan gelişmiş CRT ve LCD filtreleri sunar ve .slang ile .slangp ön ayarları dâhil RetroArch gölgelendirici zincirlerini kullanabilir. Gelişmiş filtreler Plus gerektirir. Web sitesi önizlemesi bir yaklaşımdır; referans iOS uygulamasıdır.",
        "points": [
          "Gelişmiş filtreler için tam sayı ölçek gereksinimi yoktur.",
          "RetroArch gölgelendirici zinciri desteği Retropa için listelenmiştir.",
          "Gelişmiş filtreler Plus gerektirir."
        ]
      },
      {
        "title": "Topluluk, belgeler ve geçmiş",
        "body": "Delta, App Store'da daha uzun süredir yer alıyor, çok daha fazla kullanıcıya ve dolayısıyla çok daha fazla topluluk belgesine, forum yanıtına ve üçüncü taraf kılavuza sahiptir. Retropa daha yeni ve daha küçüktür. Bunun aksini iddia eden kişi, iki ürünün de mevcut durumunu anlatmıyordur.",
        "points": [
          "Daha uzun App Store geçmişi Delta'ya aittir.",
          "Delta'da daha fazla topluluk yanıtı bulunur.",
          "Bugün daha küçük kullanıcı tabanı Retropa'da."
        ]
      },
      {
        "title": "Nasıl seçim yapılır",
        "body": "Arcade oyunları sizin için önemliyse veya tam sayı ölçek varsaymayan ekran filtreleri istiyorsanız, Retropa kurmaya değer. En büyük tema kataloğunu ve en fazla topluluk içeriğini istiyorsanız, Delta daha güvenli bir seçimdir. İkisi de ücretsiz indirilebilir; bu yüzden dürüst öneri, ikisini de kendi dosyalarınızla sınamanızdır.",
        "points": [
          "Her iki tarafta da indirme ücretsizdir.",
          "İkisini değerlendirmek için hiçbir taahhüt gerekmez.",
          "İkisi de oyun dosyalarınızı kendiniz sağlamanızı gerektirir."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Delta arcade oyunlarını destekliyor mu?",
        "answer": "Bu karşılaştırmayı bu sayfa doğrulayamaz. Bu sayfanın söyleyebileceği, Retropa'nın desteklenen CPS, Neo Geo, PGM ve M92 arcade ailelerini çalıştırdığı ve arcade çekirdeklerinin Retropa Plus gerektirdiğidir."
      },
      {
        "id": "skins",
        "question": "Aynı temaları ikisinde de kullanabilir miyim?",
        "answer": "Retropa, Delta .deltaskin paketlerini içe aktarır; bu nedenle Delta'da çalışan bir paket genellikle Retropa'ya aktarılabilir. İçe aktardıktan sonra hedef sistemi ve yönü denetleyin."
      },
      {
        "id": "price",
        "question": "Maliyetleri ne kadar?",
        "answer": "Retropa, isteğe bağlı uygulama içi satın alımlarla birlikte ücretsiz indirilebilir. Arcade çekirdekleri, premium temalar ve gelişmiş filtreler için Retropa Plus gerekir. Güncel fiyatlar uygulama içinde gösterilir."
      }
    ],
    "attribution": "Delta üçüncü taraf bir üründür. Bu sayfada adı geçen tüm ürün ve şirket adları, ilgili sahiplerinin tescilli markalarıdır ve burada yalnızca tanımlama ve olgusal karşılaştırma amacıyla kullanılmıştır. Retropa, bunlardan hiçbiriyle bağlantılı değildir; hiçbiri tarafından onaylanmamış veya desteklenmemiştir.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Oyun içe aktarma",
    "title": "Retropa'da iPhone ve iPad'e Oyun İçe Aktarma Rehberi",
    "description": "Kendi oyun dosyalarınızı Retropa'da iPhone ve iPad'e içe aktarın: içe aktarma girişinin yeri, bulut yer tutucusunun neden başarısız olduğu, hangi biçimlerin çalıştığı ve dosya reddedildiğinde ne yapılacağı.",
    "summary": "Kendi oyun dosyalarınızı Retropa'ya içe aktarmanın adım adım anlatımı: çalışan dosya biçimleri, ZIP arşivlerinin nasıl davrandığı ve başarısız bir içe aktarmadan sonra nasıl toparlanacağınız.",
    "sections": [
      {
        "title": "Başlamadan önce",
        "body": "Retropa oyun veya BIOS dosyası içermez. Kullanma hakkına sahip olduğunuz bir oyun dosyasına ve bunun cihazın kendisinde saklanmasına ihtiyacınız var. Uygulamanın dışında değiştirilmemiş bir kopya bulundurun; böylece içe aktarma sırasında yapılan bir hata özgün dosyanıza mal olmaz.",
        "points": [
          "Yalnızca kullanma hakkına sahip olduğunuz içeriği içe aktarın.",
          "Her özgün dosyanın ayrı bir yedeğini saklayın.",
          "Uygulama ücretsiz indirilir; oyunlar sağlanmaz."
        ]
      },
      {
        "title": "Birinci adım: dosyayı cihaza getirin",
        "body": "Dosyayı, bulutta yer tutucu olarak değil yerel depolamada duracak şekilde indirin. Başarısız içe aktarmaların en yaygın nedeni budur: Dosyalar uygulaması öğeyi gösterir ama baytlar henüz cihazda olmadığı için emülatöre kullanılabilir bir şey ulaşmaz.",
        "points": [
          "İndirildiğinden emin olmak için dosyayı Dosyalar uygulamasında bir kez açın.",
          "Soluk görünen veya indirilmesi gereken bir dosya yer tutucudur.",
          "İçe aktarmadan önce indirmeyi tamamlayın."
        ]
      },
      {
        "title": "İkinci adım: kitaplıktan içe aktarın",
        "body": "Retropa kitaplığındaki içe aktarma girişini açın ve dosyayı seçin. Sistemin doğru algılandığını kontrol edin, ardından oyunu varsayılan düzenle başlatın; tema veya filtre değiştirmeyi sonraya bırakın, böylece ileride çıkacak bir sorunun nedeni belli olur."
      },
      {
        "title": "Hangi dosya biçimleri çalışır",
        "body": "Retropa, desteklediği sistemlere karşılık gelen dosya biçimlerini kabul eder ve ZIP ile RetroPack arşivlerini doğrudan açabilir. Uzantı sistemle eşleşmelidir: Game Boy dosyası .gb, Game Boy Color .gbc, Game Boy Advance .gba ve DS .nds olur.",
        "points": [
          "Uzantıyı değiştirmek bir oyunu sistemler arasında dönüştürmez.",
          "ZIP ve RetroPack arşivleri çıkarılmadan açılabilir.",
          "Arcade setleri çok dosyalıdır ve ayrı şekilde ele alınır."
        ]
      },
      {
        "title": "İçe aktarma başarısız olduğunda",
        "body": "Önce tam hata mesajını okuyun, ardından sırayla üç şeyi kontrol edin: dosya tamamen indirilmiş mi, uzantı sistemle eşleşiyor mu ve dosya kısmi bir indirme değil de temiz bir imaj mı. Ancak bu kontrollerden sonra emülatör çekirdeğinden şüphelenmeye değer.",
        "points": [
          "Önce yarım kalan indirmeyi tamamlayın.",
          "Uzantının sistemle eşleştiğini doğrulayın.",
          "Vazgeçmeden önce o sistem için diğer çekirdeği deneyin."
        ]
      },
      {
        "title": "Dosyalar, kayıtlar ve kayıt durumları",
        "body": "Oyun dosyanız, oyunun kendi kayıt verisi ve emülatör kayıt durumu üç farklı şeydir. Birinin adını diğerine çevirmek onu dönüştürmez. Çekirdekler veya uygulamalar arasında geçiş yapmadan önce üçünü de yedekleyin, çünkü durum biçimleri her çekirdekte taşınabilir değildir.",
        "points": [
          "Özgün oyun dosyasını değiştirmeden saklayın.",
          "Pil kayıtlarını ve kayıt durumlarını ayrı ayrı yedekleyin.",
          "Bir çekirdekte alınan durumun diğerinde açılmasını beklemeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Retropa oyunlarla birlikte gelir mi?",
        "answer": "Hayır. Retropa bir emülatördür; oyun veya BIOS dosyası sağlamaz. Kullanma hakkına sahip olduğunuz dosyaları siz içe aktarırsınız."
      },
      {
        "id": "cloud",
        "question": "Dosyam neden içe aktarılmıyor?",
        "answer": "En yaygın neden, indirilmiş bir dosya yerine bulut yer tutucusudur. İndirmeyi zorlamak için dosyayı Dosyalar uygulamasında açın ve yeniden içe aktarın."
      },
      {
        "id": "zip",
        "question": "ZIP dosyası içe aktarabilir miyim?",
        "answer": "Retropa ZIP ve RetroPack arşivlerini doğrudan açabilir, bu yüzden belirli bir içe aktarma akışı istemedikçe arşivi çıkarmak genellikle gerekmez."
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
    "label": "Kumandalar",
    "title": "Retropa'da iPhone ve iPad'e Kol Bağlama Rehberi",
    "description": "Bluetooth veya kablolu bir kolu iOS ile eşleştirin ve Retropa içinde tuş eşlemesini yapın; algılanmayan düğmeleri ve oyuna göre değişen eşlemeleri nasıl teşhis edeceğinizi öğrenin.",
    "summary": "Uyumlu bir kolu önce iOS ile eşleştirin, ardından eşlemeyi Retropa içinde sistem ve oyun bazında doğrulayın. Bu rehber eşleştirme sırasını, sık yapılan eşleme hatalarını ve dokunmatik ile kol birlikte kullanımını anlatır.",
    "sections": [
      {
        "title": "Retropa'yı açmadan önce iOS ile eşleştirin",
        "body": "Kolun önce iOS tarafından tanınması gerekir. Sistem ayarlarında eşleştirin, orada yanıt verdiğini doğrulayın ve ancak ondan sonra Retropa'yı açın. Sistem düzeyinde hiç eşleştirilmemiş bir kol, ayarlarında ne yaparsanız yapın uygulama içinde görünmez.",
        "points": [
          "Önce iOS ayarlarında eşleştirin.",
          "Kolun sistemde yanıt verdiğini doğrulayın.",
          "Ardından Retropa içinde kontrol edin."
        ]
      },
      {
        "title": "Eşleme bir kez değil, her sistem için kontrol edilir",
        "body": "Retropa kontrol düzenlerini sistem bazında tutar, çünkü bir Game Boy altı girişe ihtiyaç duyarken bir SNES kolu on girişe ihtiyaç duyar. Eşlemeyi sistem bazlı bir iş olarak görün: bir kez eşleştirdikten sonra gerçekten oynadığınız her sistem için atamayı doğrulayın.",
        "points": [
          "Game Boy: yön tuşları, A, B, Start, Select.",
          "SNES X, Y, L ve R ekler.",
          "Arcade düzenleri birkaç eylem düğmesi ekler."
        ]
      },
      {
        "title": "İnsanların test etmeyi unuttuğu düğmeler",
        "body": "Pratikte hatalar aynı girişlerde toplanır: altı düğmeli kollarda omuz düğmeleri, erişilemeyecek yere kolayca konan Start ve Select ile özgün kolunda mikro anahtarlı çubuk kullanan sistemlerde daha çok önem taşıyan çaprazlar.",
        "points": [
          "Eşleme yaparken L ve R'yi ayrıca test edin.",
          "Start ve Select'in erişilebilir olduğunu kontrol edin.",
          "Yalnızca dört ana yönü değil, çaprazları da test edin."
        ]
      },
      {
        "title": "Dokunmatik kontroller ile kol birlikte var olabilir",
        "body": "Bazı oyunlar fiziksel bir kolun yerini alamayacağı bir dokunma etkileşimine ihtiyaç duyar; özellikle çift ekranlı sistemlerde. Eşleştirilmiş bir kolun yanında ekran düzenini kullanılabilir tutmak, ikisi arasında gidip gelmekten genellikle daha pratiktir.",
        "points": [
          "Bir oyun dokunmatik ekranı kullanıyorsa dokunmatik kontrolleri kapatmayın.",
          "Kaplamaların oyun görüntüsünü kapatmadığını kontrol edin.",
          "Titreşim ve dokunma düzeni ayrı ayrı ayarlanabilir."
        ]
      },
      {
        "title": "Bir düğme algılanmadığında",
        "body": "Koldan dışa doğru ilerleyin: önce iOS içinde, sonra Retropa içinde ve son olarak o düğmeyi kesinlikle kullanan bir oyunda yanıt verdiğini doğrulayın. Eşleme doğru görünüyorsa ama oyun bir girişi yok sayıyorsa, oyun bu girişi hiç kullanmıyor olabilir; bu, erken dönem el konsolu oyunlarında sık görülür.",
        "points": [
          "Kolu önce iOS ayarlarında doğrulayın.",
          "Eşlemeyi Retropa içinde kontrol edin.",
          "Oyunun gerçekten o düğmeyi kullandığını doğrulayın."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Hangi kollar çalışır?",
        "answer": "iOS'un desteklediği kollar Retropa ile kullanılabilir. Önce iOS ayarlarında eşleştirin, ardından uygulama içindeki eşlemeyi kontrol edin."
      },
      {
        "id": "mapping-lost",
        "question": "Eşlemem neden değişti?",
        "answer": "Düzenler sistem ve oyun bazında tutulur, bu yüzden bir sistem için yaptığınız eşleme diğerine otomatik olarak uygulanmaz. Şu anda oynadığınız sistemin eşlemesini kontrol edin."
      },
      {
        "id": "touch",
        "question": "Kol takılıyken dokunmatik kontroller çalışmayı bırakır mı?",
        "answer": "Hayır. Dokunmatik kontroller kullanılabilir kalır; bu, bir oyunun dokunma veya ikinci ekran etkileşimine ihtiyaç duyduğu sistemlerde işe yarar."
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
    "label": "Kayıtlar",
    "title": "Retropa'da Kayıt Durumları ve Geri Sarma | iPhone ve iPad",
    "description": "Retropa'da oyun içi kayıtlar, kayıt durumları ve geri sarma arasındaki farkı anlayın; kayıtları çekirdekler arasında güvenle taşımayı ve bir kayıt açılmadığında ne kontrol edeceğinizi öğrenin.",
    "summary": "Oyun içi kayıtlar, emülatör kayıt durumları ve geri sarma, taşınabilirlikleri farklı olan üç ayrı mekanizmadır. Bu rehber her birinin ne yaptığını ve güvenle nasıl yedekleneceğini açıklar.",
    "sections": [
      {
        "title": "Kayıt denen üç farklı şey",
        "body": "Oyunun kendi kaydı bizzat oyun tarafından yazılır, kayıt durumu emülatörün tamamını bir anda yakalar ve geri sarma yakın geçmişi yeniden oynatır. Davranışları farklıdır, farklı yerlerde saklanırlar ve birinin adını diğerine çevirmek onu dönüştürmez.",
        "points": [
          "Oyun içi kayıtlar oyun tarafından oluşturulur.",
          "Kayıt durumları emülatörün o anki hâlinin tamamını yakalar.",
          "Geri sarma saklanan bir dosyaya değil, yakın geçmişe bağlıdır."
        ]
      },
      {
        "title": "Kayıt durumu oluşturma ve kullanma",
        "body": "Bir kayıt durumu zor bir bölümden önce, çekirdeği değiştirmeden önce veya yeni bir filtre uygulamadan önce işe yarar; çünkü bilinen iyi bir ana dönmenizi sağlar. Hızlı kaydet ve hızlı yükle tam olarak bu tür kısa vadeli kontrol noktaları için tasarlanmıştır.",
        "points": [
          "Çekirdekleri değiştirmeden önce bir durum alın.",
          "Durumlar iki ön ayarı karşılaştırmanın en hızlı yoludur.",
          "Uzun vadeli kayıt olarak oyunun kendi kaydını saklayın."
        ]
      },
      {
        "title": "Bir kaydı çekirdekler arasında taşıma",
        "body": "Kayıt durumları her çekirdekte taşınabilir değildir, çünkü bir durum belirli bir uygulamanın iç koşulunu kaydeder. Oyun tarafından yazılan pil kayıtlarının başarıyla taşınma olasılığı çok daha yüksektir. Seçili çekirdeği değiştirmeden önce ikisini de yedekleyin.",
        "points": [
          "Durumların çekirdeğe özgü olduğunu varsayın.",
          "Pil kayıtları daha güvenilir aktarılır.",
          "Çekirdek değiştirmeden önce yedek alın."
        ]
      },
      {
        "title": "Bir kayıt açılmadığında",
        "body": "Kaydın oyun içi veri mi yoksa durum mu olduğunu, yazıldığından beri çekirdeğin değişip değişmediğini ve uygulama sürümünün değişip değişmediğini kontrol edin. Bir durum açılmazsa bunun yerine oyunun kendi kaydını yükleyin, çünkü bu yol emülatörün iç durum biçimine bağlı değildir.",
        "points": [
          "Çekirdeğin değişmediğini doğrulayın.",
          "Kayıt türünü doğrulayın.",
          "Mümkün olduğunda oyunun kendi kaydına dönün."
        ]
      },
      {
        "title": "Kalıcı olan yedekler tutma",
        "body": "Özgün oyun dosyasını, oyunun kendi kaydını ve önemsediğiniz kayıt durumlarını ayrı yerlerde saklayın. iCloud veya bir masaüstü kopyası uygundur; önemli olan, uygulamadaki veya cihazdaki tek bir arızanın tüm kopyaları aynı anda silmemesidir.",
        "points": [
          "Yalnızca kayıtları değil, oyun dosyasının kendisini de yedekleyin.",
          "Kayıtları durum dosyalarından ayrı tutun.",
          "En az bir kopyayı cihazın dışında saklayın."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Kayıt ile kayıt durumu arasındaki fark nedir?",
        "answer": "Kayıt oyun tarafından yazılır ve oyunun kendi biçiminde ilerlemeyi temsil eder. Kayıt durumu ise emülatörün tamamını tek bir anda yakalar ve onu üreten çekirdeğe özgüdür."
      },
      {
        "id": "rewind",
        "question": "Ne kadar geriye sarabilirim?",
        "answer": "Geri sarma saklanan bir dosyayı geri yüklemek yerine yakın geçmişi bellekten yeniden oynatır, bu yüzden derinliği sabit sayıda kayıt yuvasıyla değil, arabellekle sınırlıdır."
      },
      {
        "id": "transfer",
        "question": "Bir kaydı başka bir emülatöre taşıyabilir miyim?",
        "answer": "Taşınabilirliği daha yüksek olan öğe oyunun kendi kaydıdır. Kayıt durumları belirli bir çekirdeğin iç biçimine bağlıdır ve başka bir yerde açılmaları beklenmemelidir."
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
    "label": "Sorun giderme",
    "title": "Retropa'da Oyun Açılmıyor mu? Kontrol Edilecekler",
    "description": "Retropa'da başlamayan bir oyun için tanılama sırası: yarım kalan indirmeler, yanlış uzantı, yanlış algılanan sistem, eksik BIOS, desteklenmeyen eşleyici ve çekirdeğe özgü sorunlar.",
    "summary": "Bir dosyanın kullanılamaz olduğu sonucuna varmadan önce sabit bir kontrol sırasını izleyin: indirmenin tamlığı, uzantı, algılanan sistem, BIOS gereksinimi ve ardından çekirdek seçimi.",
    "sections": [
      {
        "title": "Tahmin yerine sabit bir sıra izleyin",
        "body": "Yükleme hatalarının çoğu az sayıda nedenden kaynaklanır ve bunları tutarlı bir sırayla kontrol etmek zaman kaybını önler. Aşağıdaki sıra en ucuz kontrolden en pahalısına doğru ilerler, böylece gerçek nedeni bulur bulmaz durursunuz.",
        "points": [
          "Önce indirmenin tamlığı.",
          "Sonra uzantı ve algılanan sistem.",
          "Ardından BIOS ve çekirdek seçimi."
        ]
      },
      {
        "title": "Birinci kontrol: dosya gerçekten cihazda mı?",
        "body": "Dosya bir bulut yer tutucusuysa, kitaplıkta görünse bile emülatöre kullanılabilir bir şey ulaşmaz. İndirmeyi zorlamak için dosyayı Dosyalar uygulamasında açın, bitmesini bekleyin ve yeniden içe aktarın.",
        "points": [
          "Soluk veya beklemede görünen bir öğe indirilmemiştir.",
          "Yeniden denemeden önce indirmeyi tamamlayın.",
          "En yaygın neden tek başına budur."
        ]
      },
      {
        "title": "İkinci kontrol: uzantı sistemle eşleşiyor mu?",
        "body": "Her sistemin kendi uzantısı vardır ve uyuşmazlık, çekirdeğin yorumlayamayacağı bir dosya üretir. Uzantıyı yeniden adlandırmak hiçbir şeyi dönüştürmez, bu yüzden .gba olarak yeniden adlandırılan bir .gb dosyası hâlâ bir Game Boy oyunudur ve Game Boy Advance oyunu gibi davranmaz.",
        "points": [
          ".gb, .gbc, .gba ve .nds farklı sistemlerdir.",
          "Yeniden adlandırma hiçbir zaman bir oyunu dönüştürmez.",
          "Kitaplıkta algılanan sistemi doğrulayın."
        ]
      },
      {
        "title": "Üçüncü kontrol: BIOS veya ana set eksik mi?",
        "body": "Bazı sistemler ve arcade aileleri ek bir BIOS dosyasına ihtiyaç duyar; arcade setleri ise bir ana sete bağlı olabilir. Çekirdek neyin eksik olduğunu bildirir; bu mesajı dikkatle okuyun, çünkü eksik BIOS ile eksik ana set farklı sorunlar ve farklı çözümlerdir.",
        "points": [
          "Tam hata metnini okuyun.",
          "Arcade neogeo.zip bir el konsolu BIOS'u değildir.",
          "Retropa BIOS indirmesi sağlamaz."
        ]
      },
      {
        "title": "Dördüncü kontrol: diğer çekirdeği deneyin",
        "body": "Birkaç sistem için birden fazla çekirdek bulunur. Dosya bütünse, doğru adlandırılmışsa ve eksik bir bağımlılığı yoksa sıradaki test çekirdeği değiştirmektir, çünkü çekirdekler özgün donanımı farklı katılıkta taklit eder.",
        "points": [
          "Hangi çekirdeğin başarısız olduğunu not edin.",
          "Çekirdeği değiştirip bir kez yeniden deneyin.",
          "Aynı çekirdekte ikinci bir oyunla karşılaştırın."
        ]
      },
      {
        "title": "Destek talebine neler eklenmeli",
        "body": "Oyun hâlâ başlamıyorsa işe yarayan bilgiler uygulama sürümü, sistem, seçili çekirdek ve tam hata metnidir. Ticari oyun veya BIOS dosyalarını eklemeyin, çünkü sorunu teşhis etmek için bunlara gerek yoktur ve paylaşılmamalıdır.",
        "points": [
          "Uygulama sürümü ve sistem.",
          "Seçili çekirdek ve hata metni.",
          "Ticari ROM veya BIOS dosyalarını asla eklemeyin."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "Oyun siyah ekranla açılıyor. Bu ne anlama gelir?",
        "answer": "Genellikle yarım kalan bir indirme, desteklenmeyen bir dosya varyantı veya BIOS gibi eksik bir bağımlılık anlamına gelir. Önce indirmeyi, sonra uzantıyı, ardından çekirdeğin bildirdiği tam hatayı kontrol edin."
      },
      {
        "id": "worked-before",
        "question": "Bir oyun önceden çalışıyordu, şimdi çalışmıyor. Neden?",
        "answer": "Uygulama sürümünün, seçili çekirdeğin veya dosya konumunun değişip değişmediğini kontrol edin. Kayıt durumları çekirdeğe özgüdür, bu yüzden farklı bir çekirdeğin yazdığı bir durum, oyunun kendisi hâlâ çalışsa bile açılmayabilir."
      },
      {
        "id": "support",
        "question": "Destek talebiyle birlikte ne göndermeliyim?",
        "answer": "Uygulama sürümü, sistem, seçili çekirdek ve tam hata metni. Ticari oyun veya BIOS dosyalarını eklemeyin."
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
    "title": "Retropa Plus: Neler Ücretsiz, Neler Plus Gerektiriyor",
    "description": "Hangi Retropa özellikleri ücretsiz, hangileri Retropa Plus gerektiriyor: el konsolu sistemleri, arcade aileleri, Plus'a özel temalar, gelişmiş filtreler ve konsol modu. Güncel fiyatlar uygulama içinde gösterilir.",
    "summary": "Retropa'yı indirmek ücretsizdir. El konsolu emülasyonu ödeme yapmadan kullanılabilir; arcade aileleri, Plus'a özel temalar ve gelişmiş ekran filtreleri Retropa Plus kapsamındadır. Güncel fiyatlar ve mevcut planlar uygulama içinde gösterilir.",
    "sections": [
      {
        "title": "Ücretsiz olarak neler var",
        "body": "Retropa'yı indirmek hiçbir ücrete tabi değildir ve el konsolu emülasyonu satın alma olmadan çalışır. Kendi oyun dosyalarınızı içe aktarabilir, standart temaları kullanabilir, geleneksel ekran ön ayarlarını kullanabilir ve kayıt durumları ile kol eşlemesini ayarlayabilirsiniz. Bir dosyayı içe aktarmak hiçbir zaman ödeme tetiklemez.",
        "points": [
          "Ücretsiz indirme.",
          "El konsolu sistemleri satın alma olmadan kullanılabilir.",
          "Standart temalar ve geleneksel ekran ön ayarları dahildir.",
          "Oyun içe aktarmak ücretli bir özelliği asla açmaz veya gerektirmez."
        ]
      },
      {
        "title": "Neler Retropa Plus gerektirir",
        "body": "Retropa Plus arcade ailelerini, Plus'a özel temaları ve gelişmiş ekran filtrelerini kapsar. Bunlar, hâlihazırda sahip olduklarınıza getirilen kısıtlamalar değil ek yeteneklerdir: el konsolu oyunları abone olsanız da olmasanız da çalışmaya devam eder.",
        "points": [
          "Arcade aileleri: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Plus'a özel temalar.",
          "Gelişmiş CRT ve LCD filtreleri.",
          "Konsol modu ve gelişmiş kayıt iş akışları."
        ]
      },
      {
        "title": "Arcade desteği neden Plus kapsamında",
        "body": "Arcade emülasyonu ayrı bir çalışma alanıdır: birden fazla kart, çok dosyalı setler, BIOS bağımlılıkları ve sete özel uyumluluk. Bunu ek bir yetenek olarak ele almak ücretsiz katmanı basit tutar ve el konsolu deneyimini herkes için ek bir ücret olmadan erişilebilir kılar.",
        "points": [
          "Arcade donanımı el konsolu donanımı değildir.",
          "Arcade setleri çok dosyalıdır ve bir BIOS gerektirebilir.",
          "El konsolu desteği Plus'a bağlı değildir."
        ]
      },
      {
        "title": "Oyunlar ve BIOS dosyaları hiçbir zaman dahil değildir",
        "body": "Retropa'nın hiçbir katmanı oyun veya BIOS dosyası sağlamaz, çünkü uygulama bir emülatördür. Kullanma hakkına sahip olduğunuz içeriği siz sağlarsınız ve bu koşul bir satın almayla değişmez. Abonelik içeriği değil, emülatör yeteneklerini açar.",
        "points": [
          "Hiçbir katmanda oyun bulunmaz.",
          "Hiçbir BIOS dosyası sağlanmaz.",
          "Yalnızca kullanma hakkına sahip olduğunuz içeriği içe aktarın."
        ]
      },
      {
        "title": "Güncel fiyatları nerede görebilirsiniz",
        "body": "Fiyatlar, mevcut planlar ve varsa bölgesel teklifler uygulama içinde gösterilir; App Store bunları yerel para biriminizde sunabilir. Bu sayfa bilinçli olarak fiyat listelemez, böylece bir fiyat değişikliği bu sayfayı hiçbir zaman güncelliğini yitirmiş hâle getirmez.",
        "points": [
          "Fiyatlandırma uygulama içinde gösterilir.",
          "Kullanılabilirlik bölgeye göre farklılık gösterebilir.",
          "Satın alımlar App Store tarafından yürütülür."
        ]
      },
      {
        "title": "Satın alımlar App Store tarafından yürütülür",
        "body": "Tüm satın alımlar ve abonelikler App Store üzerinden yürütülür. Retropa web üzerinden ödeme işlemez ve bu web sitesi hiçbir zaman kart bilgisi istemez. Yenilemeler, iptaller ve para iadeleri App Store tarafından kendi koşullarına göre yönetilir.",
        "points": [
          "Bu web sitesinde hiçbir ödeme tahsil edilmez.",
          "Bir aboneliği App Store ayarlarından yönetin veya iptal edin.",
          "Para iadeleri App Store politikasına tabidir."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Retropa'yı ödeme yapmadan kullanabilir miyim?",
        "answer": "Evet. Retropa'yı indirmek ücretsizdir ve el konsolu emülasyonu satın alma olmadan çalışır. Arcade aileleri, Plus'a özel temalar ve gelişmiş filtreler Retropa Plus gerektirir."
      },
      {
        "id": "price",
        "question": "Retropa Plus'ın ücreti ne kadar?",
        "answer": "Fiyatlar ve mevcut planlar uygulama içinde gösterilir; App Store bunları yerel para biriminizde sunabilir. Bu sayfa, fiyat değişiklikleri onu güncelliğini yitirmiş hâle getirmesin diye fiyat listelemez."
      },
      {
        "id": "buy-here",
        "question": "Bu web sitesinden abone olabilir miyim?",
        "answer": "Hayır. Satın alımlar tamamen App Store üzerinden yürütülür. Bu web sitesi hiçbir zaman ödeme bilgisi toplamaz."
      },
      {
        "id": "content",
        "question": "Plus oyunları içeriyor mu?",
        "answer": "Hayır. Retropa'nın hiçbir katmanı oyun veya BIOS dosyası sağlamaz. Kullanma hakkına sahip olduğunuz içeriği içe aktarırsınız."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
