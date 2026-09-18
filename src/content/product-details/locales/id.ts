import type { ProductDetail } from "@/content/product-details/types"

/**
 * Product page bodies for this locale. A locale missing this file falls back to
 * the English source, so a page is only translated when it really is.
 */
export const pages: Record<string, ProductDetail> = {
  "gba-emulator": {
    "title": "Emulator GBA untuk iPhone dan iPad",
    "label": "GBA",
    "image": "material",
    "summary": "Bawa berkas .gba milik Anda sendiri ke Retropa. Mulailah dari game yang sudah berjalan, lalu pilih skin perangkat genggam, petakan kontroler, dan temukan pemrosesan layar yang terasa pas.",
    "imageAlt": "Gambar produk Retropa dengan tata letak kontrol perangkat genggam dalam posisi tegak dan mendatar",
    "sections": [
      {
        "title": "Mulai dari berkas game .gba",
        "body": "Retropa menjalankan game GBA yang didukung di iPhone dan iPad dengan iOS 18 atau lebih baru. Aplikasi ini gratis diunduh, tetapi tidak menyertakan game atau berkas BIOS. Gunakan berkas game yang berhak Anda pakai, dan simpan salinan asli di luar aplikasi sebagai cadangan.",
        "points": [
          "Game GBA biasanya memakai ekstensi .gba.",
          "Berkas .gb atau .gbc termasuk GB atau GBC, bukan GBA.",
          "Mengganti ekstensi berkas tidak mengubah game ke sistem lain."
        ]
      },
      {
        "title": "Impor dari aplikasi Files",
        "body": "Pastikan berkas benar-benar tersedia di perangkat dalam aplikasi Files, bukan hanya tampil sebagai penanda di penyimpanan awan. Buka entri impor di pustaka Retropa lalu pilih game tersebut. Setelah game muncul di pustaka, buka dan pastikan gambar, suara, serta kontroler bawaan berjalan sebelum Anda menyesuaikan tata letaknya."
      },
      {
        "title": "Pilih tata letak perangkat genggam yang tepat",
        "body": "Tata letak GBA memerlukan ruang untuk tombol arah, A dan B, tombol bahu, serta Start dan Select. Cobalah tombolnya, bukan hanya gambar tampilannya. Retropa mendukung impor .deltaskin, tetapi skin DS bukan pengganti tata letak GBA. Periksa apakah paket tersebut mendukung orientasi perangkat Anda.",
        "points": [
          "Jaga agar area layar game tidak terhalang pada kedua orientasi yang Anda pakai.",
          "Pasangkan kontroler fisik yang kompatibel di iOS, lalu periksa pemetaannya di Retropa.",
          "Skin premium dan filter lanjutan memerlukan Plus; mengimpor berkas tidak membuka fitur berbayar."
        ]
      },
      {
        "title": "Karakter LCD atau piksel bersih?",
        "body": "Mulailah dari gambar asli. Pemrosesan LCD yang ringan dapat mengingatkan pada layar perangkat genggam, sedangkan pemrosesan CRT memberi tampilan yang berbeda. Filter lanjutan Retropa memperhitungkan area keluaran yang sebenarnya tanpa mengharuskan skala bilangan bulat. Filter mengubah tampilan gambar, bukan resolusi game atau kompatibilitas berkasnya."
      },
      {
        "title": "Saat impor atau penyimpanan tidak berhasil",
        "body": "Periksa dulu ekstensi berkas, sistem yang dipilih, dan pesan galat yang tepat. Jika aplikasi Files tidak dapat membuka atau mengunduh berkas aslinya, selesaikan langkah itu sebelum mengimpor lagi. Untuk galat BIOS, ikuti persyaratan inti emulator yang dipilih; neogeo.zip untuk arcade bukan BIOS GBA. Penyimpanan milik game dan status penyimpanan emulator adalah dua hal yang berbeda: jangan mengganti nama yang satu menjadi yang lain, dan simpan cadangan sebelum berpindah inti emulator atau aplikasi.",
        "points": [
          "Coba skin bawaan dan filter sederhana saat memisahkan masalah kontrol atau tampilan.",
          "Catat versi aplikasi, sistem, inti emulator, dan pesan galat untuk keperluan dukungan.",
          "Jangan melampirkan ROM komersial atau berkas BIOS pada permintaan dukungan."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Lihat berkas dan inti emulator GBA yang didukung"
  },
  "ds-emulator": {
    "title": "Emulator DS untuk iPhone dan iPad",
    "label": "DS",
    "image": "library",
    "summary": "Impor game .nds milik Anda ke Retropa dan sediakan ruang untuk kedua layar. Periksa masukan sentuh, kontroler, dan persyaratan berkas sebelum memilih tata letak atau filter baru.",
    "imageAlt": "Gambar produk Retropa yang menampilkan pustaka game dan pengaturan di iPhone",
    "sections": [
      {
        "title": "Siapkan game .nds",
        "body": "DS dan GBA adalah dua sistem yang berbeda. Retropa mendukung berkas .nds untuk DS di iPhone dan iPad dengan iOS 18 atau lebih baru. Gunakan berkas yang berhak Anda pakai dan simpan cadangan terpisah. Aplikasi ini tidak menyediakan unduhan ROM atau BIOS, dan berkas .gba tidak dapat menjadi game DS hanya dengan diganti namanya."
      },
      {
        "title": "Impor dan periksa kedua layar",
        "body": "Unduh berkas game ke perangkat di aplikasi Files, lalu pilih dari entri impor di pustaka Retropa. Buka game yang diimpor dengan tata letak bawaan. Periksa kedua area tampilan dan uji masukan sentuh pada bagian game yang memakainya. Layar judul saja tidak cukup untuk memastikan setiap masukan yang diperlukan dapat dijangkau.",
        "points": [
          "Mulailah dengan sistem yang terdeteksi atau dipilih untuk berkas .nds.",
          "Ikuti persyaratan BIOS atau firmware yang dilaporkan inti emulator yang terpasang.",
          "Simpan salinan berkas asli selama Anda menelusuri penyebab galat."
        ]
      },
      {
        "title": "Beri ruang cukup untuk layar sentuh",
        "body": "Dua layar memerlukan tata letak yang berbeda dari perangkat genggam satu layar. Pilih skin DS yang menampilkan kedua layar sekaligus kontrol yang diperlukan. Posisi tegak dapat menata kedua layar secara vertikal secara alami; dukungan posisi mendatar bergantung pada skin yang dipilih. Periksa sasaran sentuh yang kecil pada ukuran yang benar-benar Anda mainkan, terutama di iPhone yang lebih kecil."
      },
      {
        "title": "Kontroler tidak menggantikan setiap aksi sentuh",
        "body": "Retropa mendukung kontroler eksternal yang kompatibel dan pemetaan tombol. Pasangkan kontroler dengan iOS lalu pastikan penetapannya di aplikasi. Tombol arah dan tombol aksi fisik tidak otomatis menggantikan interaksi layar sentuh pada game. Periksa interaksi tersebut sebelum memutuskan bermain hanya dengan kontroler."
      },
      {
        "title": "Jaga sesi pertama tetap sederhana",
        "body": "Pastikan game dan masukan sudah kompatibel sebelum menerapkan rangkaian shader yang rumit. Jika gambar atau irama bingkai berubah setelah memilih filter, kembalilah ke preset sederhana untuk membandingkan. Perangkat, inti emulator, dan ukuran keluaran semuanya memengaruhi performa; dukungan DS bukan janji bahwa hasilnya akan sama untuk setiap game dan setiap ponsel.",
        "points": [
          "Skin premium dan filter lanjutan memerlukan Retropa Plus.",
          "Simpan cadangan penyimpanan game dan status penyimpanan; keduanya bukan format berkas yang dapat saling ditukar.",
          "Untuk dukungan, sertakan versi aplikasi, inti emulator yang dipilih, dan pesan galat yang tepat, bukan berkas game atau BIOS."
        ]
      }
    ],
    "link": "/cores/",
    "linkLabel": "Lihat berkas dan inti emulator DS yang didukung"
  },
  "arcade": {
    "title": "Emulator arcade untuk iPhone dan iPad",
    "label": "Arcade",
    "image": "library",
    "summary": "Mainkan berkas arcade CPS, Neo Geo, PGM, dan M92 yang didukung di Retropa, dengan kontrol sentuh, kontroler eksternal, dan filter CRT. Bermain arcade memerlukan Plus; game dan berkas BIOS tidak disertakan.",
    "imageAlt": "Gambar produk Retropa yang menampilkan pustaka game dan pengaturan",
    "sections": [
      {
        "title": "CPS, Neo Geo, dan papan arcade",
        "body": "Retropa mendukung beberapa keluarga arcade, termasuk CPS I, CPS II, CPS III, Neo Geo, PGM, dan M92. Cocokkan game Anda dengan papan dan ROM set yang diharapkan inti emulator yang terpasang. Dukungan untuk sebuah keluarga tidak menjamin setiap arsip dapat berjalan.",
        "points": [
          "Pastikan sistemnya di aplikasi sebelum memilih berkas.",
          "Menjalankan arcade memerlukan Retropa Plus.",
          "Retropa tidak menyertakan ROM komersial atau berkas BIOS."
        ]
      },
      {
        "title": "Neo Geo arcade bukan Neo Geo Pocket",
        "body": "Game arcade Neo Geo dan game perangkat genggam Neo Geo Pocket memakai sistem serta berkas yang berbeda. Untuk game arcade yang melaporkan BIOS Neo Geo tidak ada, buka BIOS arcade di Retropa dan impor paket neogeo.zip yang diperlukan, lalu coba jalankan game itu lagi. ROM Pocket atau ZIP yang diganti nama bukan penggantinya.",
        "points": [
          "Gunakan berkas BIOS yang berhak Anda pakai; Retropa tidak menyediakan unduhannya.",
          "Paket BIOS tidak menggantikan data ROM game, induk, atau klon yang hilang.",
          "Periksa pesan galat yang tepat dan simpan arsip aslinya sebelum melakukan perubahan."
        ]
      },
      {
        "title": "Mengapa ZIP arcade berbeda",
        "body": "ROM perangkat genggam biasanya berupa satu citra game. Satu set arcade dapat berisi beberapa chip ROM dan bergantung pada set induk atau BIOS. Mengganti nama arsip yang tidak berkaitan menjadi .zip tidak membuatnya kompatibel. Simpan arsip yang diberikan apa adanya, kecuali alur impor secara jelas meminta ekstraksi."
      },
      {
        "title": "Saat game tidak mau dijalankan",
        "body": "Periksa dulu papan yang dipilih dan pesan galat yang ditampilkan Retropa. Berikutnya, periksa apakah set Anda sudah lengkap dan apakah berkas BIOS atau induk yang diperlukan tersedia. Arsip klon saja mungkin tidak memuat semua berkas yang dibutuhkan inti emulator. Mengganti filter atau membeli skin lain tidak dapat memperbaiki data ROM yang hilang.",
        "points": [
          "Simpan berkas asli Anda selama menelusuri masalah impor.",
          "Catat versi aplikasi, sistem, dan pesan galat yang tampil saat menghubungi dukungan.",
          "Jangan mengirim ROM komersial atau berkas BIOS bersama permintaan dukungan."
        ]
      },
      {
        "title": "Siapkan sesi pertama",
        "body": "Setelah game berjalan, kenali kontrol koin, mulai, dan aksi. Dengan kontroler eksternal, periksa pemetaannya sekaligus label di layar. Mulailah dengan preset tampilan sederhana; pilih pemrosesan CRT setelah Anda memastikan game dan kontrolnya berjalan dengan benar."
      }
    ],
    "link": "/cores/",
    "linkLabel": "Periksa katalog sistem dan inti emulator"
  },
  "delta-skins": {
    "title": "Impor skin Delta di iPhone dan iPad",
    "label": "Skin",
    "image": "material",
    "summary": "Ubah kontrol di sekitar game Anda, bukan hanya latar belakangnya. Retropa mengimpor paket .deltaskin dan menyediakan koleksi skin sendiri untuk iPhone dan iPad.",
    "imageAlt": "Gambar produk Retropa yang menampilkan skin kontrol tegak dan mendatar dalam berbagai bahan",
    "sections": [
      {
        "title": "Skin adalah tata letak kontrol",
        "body": "Layar game, tombol arah, tombol aksi, dan kontrol menu semuanya memerlukan ruang. Skin menentukan di mana unsur-unsur itu diletakkan. Pilih skin untuk sistem yang Anda mainkan dan orientasi yang Anda pakai, bukan hanya berdasarkan warnanya.",
        "points": [
          "Periksa sistem yang dituju sebelum mengimpor paket.",
          "Dukungan posisi tegak dan mendatar bergantung pada tata letak yang disediakan skin tersebut.",
          "Format paket yang didukung tidak menjamin setiap tata letak pihak ketiga pas untuk setiap perangkat."
        ]
      },
      {
        "title": "Impor paket .deltaskin",
        "body": "Simpan berkas skin aslinya, buka entri impor skin di Retropa, dan pilih paket dari aplikasi Files. Setelah diimpor, pilih skin itu untuk sistem yang sesuai. Jalankan sebuah game dan periksa area layar, kontrol arah, serta setiap tombol aksi sebelum menjadikannya tata letak tetap Anda.",
        "points": [
          "Gunakan paket .deltaskin yang lengkap, bukan tangkapan layar sebuah skin.",
          "Jika paket gagal, periksa format dan sistem yang dituju sebelum mencoba tata letak lain.",
          "Kembalilah ke skin yang berfungsi jika kontrol penting terhalang."
        ]
      },
      {
        "title": "Kontrol sentuh dan kontroler fisik",
        "body": "Retropa juga mendukung kontroler eksternal yang kompatibel dan pemetaan tombol yang dapat diatur. Pasangkan kontroler dengan iOS lebih dulu, lalu periksa pemetaannya di Retropa. Skin tampilan dan profil kontroler memiliki fungsi berbeda: mengganti gambar tampilannya tidak menggantikan pemeriksaan penetapan tombol fisik Anda."
      },
      {
        "title": "Batas paket dan pembelian",
        "body": "PackHub adalah tempat menjelajahi paket skin Retropa. Skin premium memerlukan Plus; paket yang diimpor tidak melewati pemeriksaan hak akses. Periksa paket langganan yang berlaku dan persyaratan paket di aplikasi sebelum membeli. Kompatibilitas Delta menggambarkan sebuah format berkas, bukan keterkaitan dengan proyek Delta."
      }
    ],
    "link": "https://hub.retropa.com/skins",
    "linkLabel": "Jelajahi skin di PackHub"
  },
  "crt-filters": {
    "title": "Filter CRT untuk emulator di iPhone dan iPad",
    "label": "Filter",
    "image": "filter",
    "summary": "Filter CRT dan LCD lanjutan Retropa menyesuaikan area tampilan Anda yang sebenarnya tanpa mengharuskan skala bilangan bulat. Pertahankan karakter layar retro di berbagai ukuran iPhone, tata letak iPad, dan orientasi.",
    "imageAlt": "Gambar produk Retropa yang menampilkan pemilihan filter tampilan dan efek layar CRT",
    "sections": [
      {
        "title": "Pilih tampilannya, lalu kekuatannya",
        "body": "Tampilan piksel terdekat menjaga batas piksel asli tetap jelas. Pemrosesan CRT memakai garis pindai, masker, dan peneduhan tepi; pemrosesan LCD menambahkan struktur piksel atau subpiksel. Pilihan ini mengubah tampilan, bukan resolusi game yang mendasarinya.",
        "points": [
          "Mulailah dari gambar tanpa filter sebagai acuan.",
          "Periksa teks kecil, tepi terang, dan area gelap, bukan hanya layar judul.",
          "Nilai hasilnya pada ukuran dan orientasi yang benar-benar Anda mainkan."
        ]
      },
      {
        "title": "Tanpa keharusan skala bilangan bulat",
        "body": "Skala bilangan bulat memetakan setiap piksel game ke bilangan bulat piksel layar. Cara ini berguna untuk hasil piksel terdekat yang tajam, tetapi bisa menyisakan ruang yang tidak terpakai. Filter lanjutan Retropa memperhitungkan area keluaran yang sebenarnya, sehingga struktur tampilannya tidak terbatas pada kelipatan 2, 3, atau bilangan bulat lain. Anda dapat mempertahankan rasio aspek game sambil memakai area pandang yang pas dengan ponsel atau skin Anda.",
        "points": [
          "CRT V4 menyusun ulang cakupan berkas sinar dan menyaring struktur fosfor secara analitis memakai jejak piksel keluaran.",
          "Trinitron memakai berkas sinar garis pindai terintegrasi dan harmonik kisi apertur yang dibatasi pita.",
          "DMG mengintegrasikan cakupan sel kristal cair, bukan sekadar mengambil sampel titik pada kisi."
        ]
      },
      {
        "title": "Lebih dari sekadar lapisan garis pindai",
        "body": "Preset dasar CRT Lite, LCD Grid, dan Scanline menawarkan pemrosesan tampilan yang lebih ringan. Preset lanjutan memodelkan lebih banyak bagian dari layar itu sendiri: lebar berkas sinar, transmisi fosfor, atau bahan kristal cair reflektif. Kisi yang disampel langsung dapat menjadi tidak rata pada skala pecahan; integrasi yang memperhitungkan piksel keluaran membantu detail yang tak terjangkau menyatu secara alami. Ini bukan klaim bahwa setiap filter konvensional memerlukan skala bilangan bulat, atau bahwa setiap perangkat dan preset akan bebas dari artefak."
      },
      {
        "title": "Apa yang ditunjukkan perbandingan di peramban",
        "body": "Pratinjau di televisi menampilkan filter dasar serta CRT V4, Trinitron V1, dan DMG yang mengacu pada rumus asli. Mode lanjutan mengadopsi sebagian rumus asli, termasuk integrasi jejak piksel, dengan satu kurva tampilan yang sama. Penampil web menghilangkan kesan sisa waktu, rangkaian pendar cahaya berlapis yang lengkap, dan pengelolaan warna asli. Tujuannya memperagakan ciri tampilan, bukan hasil Metal yang identik piksel demi piksel, dan bukan rekaman permainan sungguhan."
      },
      {
        "title": "Impor preset shader RetroArch",
        "body": "Satu preset .slangp dapat merujuk ke beberapa tahap shader, tekstur, dan nilai parameter. Simpan berkas yang menjadi acuannya bersama-sama saat mengimpor. Berkas preset saja mungkin belum lengkap; berkas .slang menjelaskan sebuah shader, bukan keseluruhan koleksi.",
        "points": [
          "Gunakan paket yang ditujukan untuk alur shader yang didukung.",
          "Jika preset tidak dapat dimuat, periksa berkas acuan dan kompatibilitasnya sebelum mengganti game.",
          "Coba preset yang lebih ringan jika rangkaian rumit memengaruhi irama bingkai atau pemakaian baterai."
        ]
      },
      {
        "title": "Kualitas gambar memiliki biaya performa",
        "body": "Filter berlapis dapat memerlukan lebih banyak kerja GPU daripada tampilan piksel terdekat. Performa bergantung pada perangkat, inti emulator, resolusi keluaran, dan preset. Retropa tidak menjanjikan setiap shader yang diimpor berjalan sama baiknya di setiap iPhone. Filter lanjutan memerlukan Plus; pastikan pilihan yang tersedia di dalam aplikasi."
      }
    ],
    "link": "https://hub.retropa.com/shaders",
    "linkLabel": "Jelajahi filter di PackHub"
  }
}
