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
    "title": "Emulator Game Boy untuk iPhone & iPad | Retropa",
    "description": "Jalankan berkas .gb milik Anda sendiri di iPhone dan iPad dengan Retropa. Inti emulator mana yang menangani GB, cara mengimpor game, cara mengatur layar dan kontroler, serta apa yang perlu diperiksa saat berkas tidak dapat dibuka.",
    "summary": "Retropa menjalankan game Game Boy dari berkas .gb milik Anda sendiri di iPhone dan iPad, dengan empat inti emulator yang dapat ditukar, skin perangkat genggam, pemrosesan LCD dan CRT, serta pemetaan kontroler.",
    "sections": [
      {
        "title": "Mulai dengan berkas .gb",
        "body": "Retropa memainkan game Game Boy dari berkas yang sudah Anda miliki. Aplikasi ini gratis untuk diunduh dan tidak menyertakan game atau berkas BIOS, jadi siapkan berkas game sebelum memulai dan simpan salinan yang tidak diubah di luar aplikasi sebagai cadangan.",
        "points": [
          ".gb adalah game Game Boy; .gbc milik Game Boy Color.",
          "Mengganti nama ekstensi berkas tidak mengubah game ke sistem lain.",
          "Simpan arsip asli sampai game berjalan dengan benar."
        ]
      },
      {
        "title": "Inti emulator mana yang menjalankan game Game Boy",
        "body": "Retropa menyertakan lebih dari satu inti emulator yang dapat menjalankan game Game Boy, dan Anda dapat berpindah di antara inti tersebut untuk setiap game. mGBA dan SkyEmu sama-sama mendukung GB, GBC dan GBA, SameBoy secara khusus menangani GB dan GBC, dan JGenesis mencakup GB bersama sistem Sega-nya. Jika satu inti emulator menunjukkan masalah pada judul tertentu, coba inti lain sebelum menganggap berkasnya rusak.",
        "points": [
          "mGBA adalah pilihan pertama yang baik untuk bermain sehari-hari.",
          "SameBoy berfokus pada akurasi GB dan GBC.",
          "Inti emulator yang dipilih diingat untuk setiap game."
        ]
      },
      {
        "title": "Impor game dari aplikasi Files",
        "body": "Pastikan berkas sudah diunduh secara lokal, bukan hanya ditampilkan sebagai placeholder cloud di aplikasi Files. Buka menu impor di pustaka Retropa dan pilih game tersebut. Setelah muncul, buka game itu dan pastikan gambar, suara, serta kontrol di layar bawaan berfungsi sebelum Anda mulai menyesuaikan apa pun."
      },
      {
        "title": "Pilih tata letak yang sesuai dengan layar asli",
        "body": "Tata letak Game Boy memerlukan tombol arah, A dan B, serta Start dan Select. Orientasi portrait menempatkan layar di atas kontrol, yang cocok untuk bermain dengan satu tangan; orientasi landscape memberi tombol lebih banyak ruang. Pastikan tampilan game tidak tertutup skin pada kedua orientasi, dan keenam tombol dapat dijangkau.",
        "points": [
          "Periksa setiap tombol, bukan hanya tampilannya.",
          "Paket .deltaskin dari Delta dapat diimpor, tetapi skin DS atau GBA bukan tata letak GB.",
          "Skin premium dan filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Layar hijau, kisi LCD, atau piksel bersih",
        "body": "Mulailah dengan gambar asli agar Anda memiliki acuan. Preset DMG mengingatkan pada LCD reflektif empat nada dari perangkat genggam asli, preset LCD Grid menambahkan struktur subpiksel, dan pemrosesan CRT memberikan tampilan yang sama sekali berbeda. Filter lanjutan Retropa menyesuaikan diri dengan area keluaran yang sebenarnya, bukan mengharuskan faktor skala bilangan bulat, sehingga proporsi gambar tetap terjaga di berbagai ukuran iPhone dan iPad.",
        "points": [
          "Filter mengubah tampilan, bukan resolusi game.",
          "Filter tidak akan memperbaiki masalah kompatibilitas berkas.",
          "Bandingkan dengan gambar asli sebelum menyimpan preset."
        ]
      },
      {
        "title": "Saat impor atau penyimpanan Game Boy gagal",
        "body": "Periksa dulu ekstensi berkas, sistem yang dipilih, dan pesan galat yang persis. Jika Files belum selesai mengunduh berkas asli, selesaikan langkah itu sebelum mengimpor lagi. Data simpan milik game dan status simpan emulator adalah dua hal yang berbeda; jangan mengganti nama yang satu menjadi yang lain, dan simpan cadangan sebelum memindahkan simpanan antar inti emulator atau aplikasi.",
        "points": [
          "Catat versi aplikasi, sistem, inti emulator, dan galat untuk keperluan dukungan.",
          "Jangan lampirkan berkas ROM atau BIOS komersial pada permintaan dukungan.",
          "Coba skin bawaan dan filter sederhana saat menelusuri masalah."
        ]
      }
    ],
    "faqs": [
      {
        "id": "roms-included",
        "question": "Apakah Retropa menyertakan game Game Boy?",
        "answer": "Tidak. Retropa adalah emulator dan tidak menyediakan game atau berkas BIOS. Anda mengimpor berkas yang berhak Anda gunakan, dan hanya berkas itu."
      },
      {
        "id": "bios-needed",
        "question": "Apakah emulasi Game Boy memerlukan berkas BIOS?",
        "answer": "Judul GB dan GBC umumnya berjalan tanpa berkas BIOS pada inti emulator yang disertakan Retropa. Jika sebuah inti emulator melaporkan kebutuhan BIOS, ikuti perintah yang ditampilkan untuk inti tersebut, bukan mengimpor berkas yang tidak berkaitan."
      },
      {
        "id": "gb-vs-gbc",
        "question": "Dapatkah Retropa membuka berkas .gbc sebagai game Game Boy?",
        "answer": "Berkas .gbc termasuk untuk Game Boy Color. Retropa menjalankannya pada sistem yang sesuai, dan mengganti nama ekstensinya tidak mengubah isi berkas tersebut."
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
    "title": "Emulator Game Boy Color untuk iPhone & iPad | Retropa",
    "description": "Mainkan game .gbc milik Anda sendiri di iPhone dan iPad. Palet warna, judul khusus GBC, pilihan inti emulator, langkah impor, dan pemeriksaan yang perlu dilakukan saat game Game Boy Color gagal dijalankan.",
    "summary": "Retropa memainkan game Game Boy Color dari berkas .gbc milik Anda sendiri, dengan penanganan palet, pemilihan inti emulator untuk setiap game, dan pemrosesan tampilan yang cocok untuk layar reflektif aslinya.",
    "sections": [
      {
        "title": "Siapkan berkas .gbc",
        "body": "Game untuk Game Boy Color menggunakan ekstensi .gbc. Retropa tidak menyertakan game atau berkas BIOS, jadi siapkan sendiri berkasnya, simpan cadangan terpisah, dan hanya impor konten yang berhak Anda gunakan.",
        "points": [
          ".gbc adalah game Game Boy Color.",
          "Game untuk Game Boy asli memakai .gb dan juga berjalan di Retropa.",
          "Jangan mengganti nama berkas .gb menjadi .gbc untuk memaksa warna."
        ]
      },
      {
        "title": "Pilihan inti emulator untuk Game Boy Color",
        "body": "SameBoy adalah inti emulator yang berfokus pada GB dan GBC, dan mGBA serta SkyEmu juga mendukung Game Boy Color. Jika sebuah judul menampilkan warna atau timing yang keliru, mengganti inti emulator adalah langkah uji pertama yang wajar, karena setiap inti emulator menangani perangkat keras dengan cara yang sedikit berbeda.",
        "points": [
          "SameBoy adalah pilihan pertama yang wajar untuk judul GBC.",
          "mGBA mendukung GB, GBC, dan GBA dalam satu inti emulator.",
          "Pilihan inti emulator disimpan untuk setiap game."
        ]
      },
      {
        "title": "Impor dan peluncuran pertama",
        "body": "Unduh berkas ke penyimpanan lokal agar aplikasi Files tidak menyajikan placeholder, lalu pilih berkas itu dari menu impor di pustaka Retropa. Buka game dan verifikasi warna, suara, serta tata letak sentuh bawaan sebelum menerapkan skin atau filter, supaya masalah yang muncul kemudian mudah ditelusuri asalnya.",
        "points": [
          "Uji adegan yang menggunakan warna, bukan hanya layar judul.",
          "Periksa saluran suara sekaligus gambarnya.",
          "Biarkan berkas asli tidak tersentuh selama menelusuri masalah."
        ]
      },
      {
        "title": "Gambar dan tata letak untuk perangkat genggam berwarna",
        "body": "Layar Game Boy Color kecil dan reflektif. Preset LCD Grid menambahkan struktur subpiksel yang cocok untuknya, sedangkan preset DMG sengaja mengingatkan pada panel monokrom yang lebih tua. Filter lanjutan Retropa bekerja dari area keluaran yang sebenarnya, bukan dari kelipatan bilangan bulat yang tetap, sehingga proporsinya tetap terjaga di berbagai ukuran perangkat.",
        "points": [
          "Bandingkan setiap preset dengan gambar asli.",
          "Filter lanjutan memerlukan Retropa Plus.",
          "Pastikan skin tidak menghalangi tampilan game."
        ]
      },
      {
        "title": "Kontrol dan orientasi",
        "body": "Tata letak Game Boy Color memerlukan tombol arah, A dan B, serta Start dan Select. Orientasi portrait cocok untuk sesi singkat; orientasi landscape memberi tombol lebih banyak ruang dan bisa lebih nyaman di iPhone yang lebih besar. Pastikan setiap tombol dapat dijangkau pada orientasi yang benar-benar Anda gunakan."
      },
      {
        "title": "Saat game Game Boy Color gagal dijalankan",
        "body": "Periksa dulu ekstensi dan sistem yang dipilih, lalu baca pesan galat yang persis. Jika region atau palet tampak salah, bandingkan inti emulator sebelum mengubah pengaturan. Simpanan yang dibuat di satu inti emulator mungkin tidak terbaca di inti lain, jadi buat cadangan sebelum berpindah.",
        "points": [
          "Catat versi aplikasi, sistem, inti emulator, dan galat.",
          "Jangan mengirim berkas ROM atau BIOS komersial ke dukungan.",
          "Kembali ke skin bawaan dan filter sederhana untuk menelusuri masalah."
        ]
      }
    ],
    "faqs": [
      {
        "id": "gbc-included",
        "question": "Apakah game Game Boy Color disertakan?",
        "answer": "Tidak. Retropa adalah emulator dan tidak menyediakan game atau berkas BIOS. Impor hanya berkas yang berhak Anda gunakan."
      },
      {
        "id": "gb-on-gbc",
        "question": "Bisakah saya memainkan game Game Boy asli juga?",
        "answer": "Bisa. Berkas .gb Game Boy asli juga berjalan di Retropa, pada inti emulator yang sama yang menangani Game Boy Color."
      },
      {
        "id": "force-colour",
        "question": "Apakah mengganti nama berkas .gb menjadi .gbc menambahkan warna?",
        "answer": "Tidak. Ekstensi tidak mengubah isi berkas, jadi mengganti nama tidak mengaktifkan fitur Game Boy Color."
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
    "title": "Emulator NES untuk iPhone & iPad | Retropa",
    "description": "Jalankan game NES milik Anda sendiri di iPhone dan iPad. Format berkas yang didukung termasuk .nes, .fds, dan .nsf, pemilihan inti emulator, langkah impor, pemetaan kontroler, dan penelusuran masalah.",
    "summary": "Retropa menjalankan game NES dari berkas milik Anda sendiri, mencakup format audio .nes, .fds, dan NSF pada dua inti emulator khusus, dengan pemetaan gamepad dan pemrosesan CRT.",
    "sections": [
      {
        "title": "Format berkas yang diterima Retropa untuk NES",
        "body": "Dukungan NES di Retropa mencakup lebih dari satu ekstensi. Selain image kartrid .nes yang umum, inti emulator juga menerima image Famicom Disk System dan berkas suara NSF, plus varian kontainer iNES biasa dan unified.",
        "points": [
          ".nes adalah image kartrid NES standar.",
          ".fds mencakup konten Famicom Disk System.",
          ".nsf dan .nsfe adalah berkas suara, bukan game yang dapat dimainkan.",
          "Kontainer ZIP dan RetroPack dapat diimpor dan dibuka langsung."
        ]
      },
      {
        "title": "Dua inti emulator, satu sistem",
        "body": "Retropa menyertakan RusticoNES dan TetaNES untuk judul NES, dan JGenesis juga mendukung sistem ini. Mencoba inti emulator kedua adalah cara tercepat untuk membedakan ROM yang bermasalah dari perbedaan emulasi yang sesungguhnya, dan pilihan tersebut diingat untuk setiap game.",
        "points": [
          "RusticoNES adalah pilihan bawaan yang andal untuk game kartrid.",
          "TetaNES adalah alternatif yang diuji saat ada yang tidak berjalan semestinya.",
          "Berkas audio NSF berperilaku berbeda dari game di setiap inti emulator."
        ]
      },
      {
        "title": "Impor game NES",
        "body": "Unduh dulu berkasnya secara lokal agar Files tidak mengembalikan placeholder, lalu buka menu impor di pustaka Retropa. Jalankan game dengan tata letak bawaan dan pastikan gambar, audio, serta tombol bawaan berfungsi sebelum mengubah skin atau filter."
      },
      {
        "title": "Menangani kontroler dua tombol",
        "body": "Kontroler NES sengaja dibuat minimal: tombol arah, A, B, Start, dan Select. Di layar sentuh, godaan untuk mendekatkan tombol satu sama lain cukup besar, jadi pastikan input diagonal masih terbaca dan Start serta Select tidak tersentuh tanpa sengaja saat bermain. Kontroler fisik yang dipasangkan mengatasi sebagian besar masalah ini.",
        "points": [
          "Pasangkan kontroler di iOS terlebih dahulu, lalu periksa pemetaannya di Retropa.",
          "Verifikasi arah diagonal, bukan hanya empat arah utama.",
          "Periksa orientasi portrait dan landscape jika Anda bermain pada keduanya."
        ]
      },
      {
        "title": "Mendapatkan tampilan yang tepat",
        "body": "Keluaran NES ditujukan untuk televisi definisi standar, sehingga pemrosesan CRT sering kali tampak lebih dekat ke pengalaman asli daripada kisi piksel yang bersih. Preset Scanline dan aperture-grille tersedia, dan filter lanjutan Retropa menyesuaikan diri dengan area keluaran yang nyata, bukan kelipatan bilangan bulat yang tetap.",
        "points": [
          "Mulailah dari gambar asli sebagai acuan.",
          "Overlay scanline konvensional dapat berkedip pada skala pecahan.",
          "Filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Saat game NES tidak dapat dimuat",
        "body": "Baca pesan galat yang persis sebelum mengubah apa pun. Dump yang rusak, mapper yang tidak didukung, image tanpa header, atau game disk-system yang kehilangan BIOS adalah masalah yang berbeda-beda. Periksa ekstensi dan sistem yang dipilih, lalu coba inti emulator NES yang lain.",
        "points": [
          "Catat versi aplikasi, inti emulator, dan teks galat lengkap untuk keperluan dukungan.",
          "Biarkan berkas asli tidak tersentuh selama menelusuri masalah.",
          "Jangan lampirkan berkas ROM atau BIOS komersial pada permintaan dukungan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "format",
        "question": "Format NES apa saja yang dapat dibuka Retropa?",
        "answer": "Retropa menerima berkas .nes, .fds, .nsf, .nsfe, .unf, dan .unif, serta dapat membuka kontainer ZIP dan RetroPack secara langsung."
      },
      {
        "id": "nsf",
        "question": "Bisakah berkas .nsf dimainkan seperti game?",
        "answer": "Tidak. Berkas NSF adalah data suara, jadi yang diputar adalah audio, bukan game. Gunakan berkas .nes atau .fds untuk memainkan sebuah judul."
      },
      {
        "id": "gamepad",
        "question": "Apakah kontroler fisik berfungsi dengan game NES?",
        "answer": "Ya. Kontroler yang kompatibel dapat dipasangkan dengan iOS dan dipetakan di dalam Retropa. Periksa pemetaannya setelah dipasangkan, karena urutan tombol tidak selalu seperti yang Anda harapkan."
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
    "title": "Emulator SNES untuk iPhone & iPad | Retropa",
    "description": "Mainkan game SNES milik Anda sendiri di iPhone dan iPad. Format .sfc dan .smc yang didukung, inti emulator LakeSnes, pemetaan kontroler enam tombol, dan langkah penelusuran masalah.",
    "summary": "Retropa menjalankan game SNES dari berkas .sfc dan .smc milik Anda sendiri pada inti emulator LakeSnes, dengan pemetaan kontroler enam tombol, status simpan, dan pemrosesan tampilan CRT.",
    "sections": [
      {
        "title": "Format berkas SNES",
        "body": "Image Super Nintendo biasanya didistribusikan sebagai .sfc atau .smc, dan Retropa juga menerima beberapa format kontainer serta format copier terkait. Jika berkas gagal, ekstensi adalah hal pertama yang perlu diperiksa, karena header yang tidak cocok sering menjadi penyebab game tidak dapat boot.",
        "points": [
          ".sfc dan .smc adalah image SNES standar.",
          "Retropa juga mencantumkan dukungan .fig, .swc, .bs, dan .st.",
          "Kontainer ZIP dan RetroPack dapat dibuka secara langsung."
        ]
      },
      {
        "title": "Inti emulator LakeSnes",
        "body": "Retropa menjalankan judul SNES pada LakeSnes, dan JGenesis juga mencantumkan sistem ini. Jika game tertentu menunjukkan masalah timing atau grafis, pastikan berkasnya adalah image yang bersih sebelum menganggap inti emulator yang bermasalah, dan bandingkan versi aplikasi saat ini dengan catatan rilis.",
        "points": [
          "LakeSnes adalah inti emulator khusus SNES.",
          "Sebagian judul bergantung pada koprosesor kartrid tertentu.",
          "Pemilihan inti emulator untuk setiap game diingat."
        ]
      },
      {
        "title": "Impor dan pengoperasian pertama",
        "body": "Simpan berkas di penyimpanan lokal, bukan sebagai placeholder cloud, lalu pilih berkas itu dari menu impor di pustaka Retropa. Buka game dan verifikasi gambar, audio, serta kontrol sentuh bawaan sebelum mengubah pengaturan tampilan apa pun, supaya masalah yang muncul kemudian memiliki penyebab yang jelas."
      },
      {
        "title": "Enam tombol memerlukan ruang yang cukup",
        "body": "Kontroler SNES menambahkan X, Y, L, dan R di atas tombol arah, A, B, Start, dan Select, dan banyak game mengharapkan penekanan tombol secara bersamaan. Di layar sentuh, menyebarkan tata letak pada orientasi landscape dan memeriksa setiap kombinasi sepadan dengan waktunya. Kontroler fisik yang dipasangkan adalah pilihan yang lebih andal untuk judul aksi.",
        "points": [
          "Verifikasi L dan R, yang mudah terlupakan saat memetakan.",
          "Uji arah diagonal bersamaan dengan tombol bahu.",
          "Pastikan skin tidak menghalangi tampilan game."
        ]
      },
      {
        "title": "Memilih pemrosesan tampilan",
        "body": "Grafis SNES dirancang untuk CRT, sehingga preset scanline dan aperture-grille biasanya tampak lebih dekat ke aslinya daripada kisi piksel mentah. Filter lanjutan Retropa memperhitungkan area keluaran yang sebenarnya alih-alih mengharuskan kelipatan bilangan bulat, hal yang penting pada ponsel yang tinggi layarnya jarang terbagi rata.",
        "points": [
          "Gunakan gambar asli sebagai acuan dasar.",
          "Overlay scanline sederhana dapat berkedip pada skala pecahan.",
          "Filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Saat game SNES gagal dijalankan",
        "body": "Periksa ekstensi, sistem yang dipilih, dan teks galat yang persis. Judul yang bergantung pada chip kartrid khusus biasanya menjadi tersangka utama saat satu game gagal sementara game lain berjalan. Biarkan berkas asli tetap utuh selama pengujian, dan coba beralih ke inti emulator alternatif.",
        "points": [
          "Catat versi aplikasi, inti emulator, dan galat untuk keperluan dukungan.",
          "Perubahan filter tidak akan memperbaiki masalah chip kartrid.",
          "Jangan mengirim berkas ROM atau BIOS komersial ke dukungan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sfc-vs-smc",
        "question": "Apakah .sfc atau .smc berpengaruh?",
        "answer": "Keduanya adalah image SNES standar dan Retropa menerima salah satunya. Ekstensi itu sendiri tidak mengubah game."
      },
      {
        "id": "chip-games",
        "question": "Mengapa satu game gagal sementara yang lain berjalan?",
        "answer": "Sebagian judul bergantung pada perangkat keras kartrid tambahan. Jika berkasnya image yang bersih dan game lain berjalan, ketergantungan itu kemungkinan besar penyebabnya, dan beralih inti emulator adalah uji berikutnya."
      },
      {
        "id": "saves",
        "question": "Apakah status simpan dapat dipindahkan antar inti emulator?",
        "answer": "Tidak secara andal. Simpanan baterai dan status simpan adalah hal yang berbeda, dan status yang ditulis oleh satu inti emulator mungkin tidak dapat dimuat di inti lain, jadi simpan cadangan sebelum berpindah."
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
    "title": "Emulator Sega Genesis & Mega Drive untuk iPhone | Retropa",
    "description": "Mainkan game Sega Genesis dan Mega Drive milik Anda sendiri di iPhone dan iPad. Format .md, .smd, dan .gen, inti emulator JGenesis, pemetaan enam tombol, dan penelusuran masalah.",
    "summary": "Retropa menjalankan game Sega Genesis dan Mega Drive dari berkas milik Anda sendiri pada inti emulator JGenesis, dengan dukungan kontroler enam tombol, status simpan, dan pemrosesan tampilan CRT.",
    "sections": [
      {
        "title": "Genesis dan Mega Drive adalah sistem yang sama",
        "body": "Konsol ini dirilis sebagai Mega Drive di Eropa, Jepang, dan sebagian besar Asia, serta sebagai Genesis di Amerika Utara. Perangkat kerasnya sama, jadi berkas game tetap berfungsi pada keduanya; hanya nama pada kotaknya yang berbeda. Retropa mencantumkan keduanya, itulah sebabnya ekstensi berkas sedikit berbeda antar wilayah.",
        "points": [
          ".md dan .smd adalah image Mega Drive yang umum.",
          ".gen adalah ekstensi umum di Amerika Utara.",
          "Ekstensi tidak mengubah perangkat keras yang diharapkan game."
        ]
      },
      {
        "title": "Inti emulator JGenesis",
        "body": "Retropa menjalankan judul Genesis dan Mega Drive pada JGenesis, yang juga mendukung Master System, Game Gear, dan beberapa sistem genggam. Karena satu inti emulator melayani beberapa platform, sistem yang dipilih untuk setiap game menjadi penting: mengimpor judul Master System saat sistem diatur ke Genesis adalah sumber kebingungan yang umum.",
        "points": [
          "JGenesis mendukung MD, GEN, SMS, dan GG.",
          "Pastikan sistem yang terdeteksi sebelum melaporkan masalah.",
          "Pilihan inti emulator dan sistem diingat untuk setiap game."
        ]
      },
      {
        "title": "Impor game Mega Drive",
        "body": "Simpan berkas secara lokal, jangan biarkan sebagai placeholder cloud, lalu pilih berkas itu dari menu impor di pustaka Retropa. Buka game dan pastikan gambar, audio, serta tata letak sentuh bawaan berfungsi sebelum menerapkan skin atau filter."
      },
      {
        "title": "Memetakan pad enam tombol",
        "body": "Kontroler Genesis tersedia dalam versi tiga tombol dan enam tombol, dan sebagian game berperilaku berbeda tergantung versi yang terdeteksi. Pada tata letak sentuh, pastikan A, B, C dan, bila tersedia, X, Y, Z, serta Mode semuanya dapat dijangkau, dan uji kombinasi yang benar-benar digunakan sebuah game.",
        "points": [
          "Verifikasi pemetaan tiga tombol dan enam tombol.",
          "Periksa Start, yang juga berfungsi sebagai kontrol jeda pada banyak judul.",
          "Kontroler fisik yang dipasangkan menghindari sebagian besar masalah salah tekan."
        ]
      },
      {
        "title": "Pemrosesan tampilan untuk konsol 16-bit",
        "body": "Keluaran Mega Drive ditujukan untuk CRT, sehingga preset scanline atau aperture-grille biasanya tampak lebih dekat ke aslinya daripada kisi piksel mentah, terutama untuk dithering yang akan dilebur oleh televisi. Filter lanjutan Retropa bekerja dari area keluaran yang nyata, bukan kelipatan bilangan bulat yang tetap.",
        "points": [
          "Mulailah dari gambar asli, lalu bandingkan.",
          "Pola dithering adalah uji yang baik untuk sebuah preset filter.",
          "Filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Saat game Genesis gagal dijalankan",
        "body": "Periksa ekstensi, pilihan sistem, dan pesan galat yang persis. Ketidakcocokan region dan sistem lebih umum terjadi di sini daripada pada sistem satu platform, karena satu inti emulator melayani beberapa konsol. Biarkan berkas asli tetap utuh dan pastikan sistem yang terdeteksi sebelum melakukan perubahan yang lebih mendalam.",
        "points": [
          "Catat versi aplikasi, sistem yang terdeteksi, inti emulator, dan galat.",
          "Jangan mengirim berkas ROM atau BIOS komersial ke dukungan.",
          "Simpan cadangan terpisah sebelum memindahkan simpanan antar inti emulator."
        ]
      }
    ],
    "faqs": [
      {
        "id": "md-vs-genesis",
        "question": "Apakah Mega Drive sama dengan Genesis?",
        "answer": "Ya. Ini adalah satu konsol dengan dua nama regional, jadi berkas game berjalan dengan nama mana pun."
      },
      {
        "id": "six-button",
        "question": "Apakah Retropa mendukung kontroler enam tombol?",
        "answer": "Tata letak sentuh dan pemetaan kontroler eksternal mencakup tombol tambahan, dan sebagian game mengubah perilakunya tergantung varian pad yang terdeteksi."
      },
      {
        "id": "system-detect",
        "question": "Mengapa game saya dianggap sistem yang salah?",
        "answer": "Satu inti emulator melayani beberapa platform Sega, jadi periksa sistem yang terdeteksi untuk game tersebut dan perbaiki sebelum melaporkan masalah kompatibilitas."
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
    "title": "Emulator Game Gear untuk iPhone & iPad | Retropa",
    "description": "Mainkan gim Game Gear dari berkas .gg milik Anda di iPhone dan iPad. Inti emulator yang menjalankannya, cara mengimpor berkas, cara mengatur layar, dan hal yang perlu diperiksa saat gim gagal dibuka.",
    "summary": "Retropa menjalankan gim Game Gear dari berkas .gg milik Anda melalui inti emulator JGenesis, dengan tampilan layar berlampu latar, skin genggam, dan pemetaan kontroler lengkap.",
    "sections": [
      {
        "title": "Menyiapkan berkas .gg",
        "body": "Gim Game Gear memakai ekstensi .gg. Retropa tidak menyertakan gim atau berkas BIOS, jadi siapkan berkas tersebut dan simpan salinannya di luar aplikasi sebelum mengimpor.",
        "points": [
          ".gg adalah ekstensi Game Gear.",
          "Berkas .sms milik Master System, bukan Game Gear.",
          "Mengganti nama berkas tidak mengubah format keduanya."
        ]
      },
      {
        "title": "Inti emulator mana yang menangani Game Gear",
        "body": "JGenesis menangani Game Gear bersama Mega Drive, Genesis, dan Master System. Karena satu inti emulator melayani beberapa platform Sega, pastikan gim terdeteksi sebagai Game Gear sebelum menyelidiki masalah kompatibilitas."
      },
      {
        "title": "Impor dan peluncuran pertama",
        "body": "Unduh berkas secara lokal, lalu pilih berkas itu dari entri impor pustaka Retropa. Pastikan gambar, audio, dan kontroler bawaan sudah benar sebelum menerapkan skin, agar setiap masalah yang muncul kemudian memiliki penyebab yang jelas."
      },
      {
        "title": "Layar kecil berlampu latar",
        "body": "Panel Game Gear berlampu latar dan berukuran kecil, sehingga perlakuan LCD Grid cenderung cocok, sementara preset CRT yang lebih kuat akan terlihat jauh lebih berat daripada perangkat aslinya. Filter lanjutan Retropa menyesuaikan diri dengan area keluaran sebenarnya, bukan mengharuskan kelipatan bilangan bulat.",
        "points": [
          "Bandingkan setiap preset dengan gambar aslinya.",
          "Filter lanjutan memerlukan Retropa Plus.",
          "Pastikan tampilan gim tidak tertutup skin."
        ]
      },
      {
        "title": "Kontroler dan orientasi",
        "body": "Perangkat Game Gear menyediakan tombol arah, dua tombol aksi, dan Start. Jumlah tombol yang sedikit membuat tata letak potret terasa nyaman, tetapi pastikan Start dapat dijangkau tanpa menggeser pegangan Anda, dan uji arah diagonal."
      },
      {
        "title": "Saat gim Game Gear tidak dapat berjalan",
        "body": "Pastikan ekstensi, sistem yang terdeteksi, dan teks kesalahan yang tepat. Berkas Master System yang diimpor sebagai Game Gear, atau sebaliknya, sering menjadi penyebabnya. Jaga berkas asli tetap utuh selama pengujian.",
        "points": [
          "Catat versi aplikasi, sistem yang terdeteksi, inti emulator, dan kesalahan.",
          "Jangan kirim berkas ROM atau BIOS komersial ke dukungan.",
          "Simpan cadangan sebelum memindahkan simpanan antar inti emulator."
        ]
      }
    ],
    "faqs": [
      {
        "id": "sms-vs-gg",
        "question": "Apakah Game Gear sama dengan Master System?",
        "answer": "Keduanya sangat terkait, tetapi merupakan sistem yang berbeda dengan ekstensi berkas yang berbeda. Satu inti emulator menjalankan keduanya, jadi periksa sistem mana yang terdeteksi untuk sebuah berkas."
      },
      {
        "id": "bios",
        "question": "Apakah Game Gear memerlukan berkas BIOS?",
        "answer": "Tidak pada inti emulator yang disertakan Retropa. Jika sebuah inti emulator melaporkan persyaratan, ikuti petunjuk inti emulator tersebut, bukan mengimpor berkas yang tidak berkaitan."
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
    "title": "Emulator Master System untuk iPhone & iPad | Retropa",
    "description": "Jalankan gim Sega Master System .sms milik Anda di iPhone dan iPad. Cakupan inti emulator, langkah impor, tata letak kontroler, dan hal yang perlu diperiksa saat judul gagal dimulai.",
    "summary": "Retropa menjalankan gim Sega Master System dari berkas .sms milik Anda pada inti emulator JGenesis, dengan skin genggam, perlakuan tampilan, dan pemetaan kontroler.",
    "sections": [
      {
        "title": "Menyiapkan berkas .sms",
        "body": "Gim Master System memakai ekstensi .sms. Retropa tidak menyediakan gim atau berkas BIOS, jadi siapkan berkas tersebut dan simpan cadangan di luar aplikasi.",
        "points": [
          ".sms adalah ekstensi Master System.",
          ".gg milik Game Gear dan merupakan sistem yang berbeda.",
          "Wadah ZIP dan RetroPack dapat dibuka langsung."
        ]
      },
      {
        "title": "Cakupan inti emulator",
        "body": "JGenesis menangani Master System bersama Mega Drive, Genesis, dan Game Gear. Karena satu inti emulator melayani beberapa platform, memastikan sistem yang terdeteksi adalah langkah diagnostik pertama ketika sebuah berkas berperilaku tidak seperti yang diharapkan."
      },
      {
        "title": "Impor dan verifikasi",
        "body": "Simpan berkas di penyimpanan lokal, lalu pilih berkas itu dari entri impor pustaka Retropa. Periksa gambar, audio, dan tata letak bawaan sebelum menerapkan skin atau preset tampilan."
      },
      {
        "title": "Dua tombol, satu tombol arah",
        "body": "Kontroler Master System memakai tombol arah, dua tombol aksi, dan pada beberapa model tombol jeda di konsol itu sendiri. Pada tata letak sentuh, ada baiknya memastikan tombol jeda dipetakan di tempat yang dapat dijangkau, karena tombol ini mudah terlewat."
      },
      {
        "title": "Perlakuan gambar",
        "body": "Judul Master System ditujukan untuk layar CRT. Preset Scanline dan kisi apertur umumnya terlihat lebih dekat ke aslinya daripada kisi piksel mentah, dan filter lanjutan Retropa menyesuaikan diri dengan area keluaran sebenarnya, bukan pada kelipatan bilangan bulat yang tetap.",
        "points": [
          "Bandingkan preset dengan gambar aslinya.",
          "Filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Saat gim Master System tidak dapat dimulai",
        "body": "Periksa ekstensi, sistem yang terdeteksi, dan kesalahan yang tepat. Perbedaan wilayah serta ketidakcocokan Master System dengan Game Gear adalah penyebab yang biasa. Jaga berkas asli tetap tidak tersentuh selama mendiagnosis.",
        "points": [
          "Catat versi aplikasi, sistem yang terdeteksi, inti emulator, dan kesalahan.",
          "Jangan lampirkan berkas ROM atau BIOS komersial pada permintaan dukungan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "differences",
        "question": "Bagaimana cara mengetahui apakah suatu berkas termasuk Master System atau Game Gear?",
        "answer": "Periksa ekstensinya: .sms adalah Master System dan .gg adalah Game Gear. Retropa menampilkan sistem yang terdeteksi untuk gim yang diimpor."
      },
      {
        "id": "pause",
        "question": "Di mana tombol jeda?",
        "answer": "Pada perangkat aslinya, tombol itu berada di konsol, bukan di kontroler. Di Retropa, tombol tersebut merupakan bagian dari tata letak di layar, jadi pastikan tombol itu dipetakan ke tombol yang dapat Anda jangkau."
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
    "title": "Emulator WonderSwan untuk iPhone & iPad | Retropa",
    "description": "Mainkan gim WonderSwan .ws milik Anda di iPhone dan iPad. Inti emulator Ares, orientasi vertikal, langkah impor, dan penanganan masalah untuk perangkat genggam yang kurang umum.",
    "summary": "Retropa menjalankan gim WonderSwan dari berkas .ws milik Anda pada inti emulator Ares, termasuk orientasi vertikal yang menjadi dasar perancangan perangkatnya.",
    "sections": [
      {
        "title": "Menyiapkan berkas .ws",
        "body": "Gim WonderSwan memakai ekstensi .ws, sedangkan WonderSwan Color memakai .wsc. Retropa tidak menyertakan gim atau berkas BIOS; siapkan berkas tersebut dan simpan cadangan.",
        "points": [
          ".ws adalah WonderSwan; .wsc adalah WonderSwan Color.",
          "Keduanya adalah sistem berbeda dengan kemampuan yang berbeda.",
          "Mengganti nama tidak meningkatkan gim ke model warna."
        ]
      },
      {
        "title": "Inti emulator Ares",
        "body": "Ares menangani WonderSwan dan WonderSwan Color di Retropa, bersama sistem genggam lainnya. Jika sebuah judul gagal dimuat, pastikan berkasnya merupakan citra yang bersih dan sistem yang terdeteksi sesuai dengan ekstensi berkas sebelum mengubah pengaturan."
      },
      {
        "title": "Impor dan penjalanan pertama",
        "body": "Simpan berkas secara lokal, lalu pilih berkas itu dari entri impor pustaka Retropa. Verifikasi gambar, audio, dan kontroler bawaan sebelum menerapkan skin atau preset tampilan."
      },
      {
        "title": "Perangkat genggam yang dirancang untuk dipegang secara vertikal",
        "body": "WonderSwan dirancang untuk bekerja pada kedua orientasi, dan banyak judul dibuat untuk permainan vertikal. Retropa mendukung tata letak potret, jadi periksa apakah gim yang Anda mainkan mengharapkan layar yang diputar sebelum memutuskan bahwa gambarnya terlihat salah.",
        "points": [
          "Coba potret maupun lanskap.",
          "Tidak setiap judul memakai orientasi yang sama.",
          "Pastikan semua masukan dapat dijangkau pada orientasi yang Anda pilih."
        ]
      },
      {
        "title": "Perlakuan tampilan",
        "body": "WonderSwan memakai panel monokrom reflektif dengan struktur piksel yang khas. Preset LCD Grid cenderung cocok dengannya, sedangkan preset CRT akan terlihat lebih berat daripada perangkat aslinya. Filter lanjutan menyesuaikan diri dengan area keluaran yang sebenarnya.",
        "points": [
          "Gunakan gambar asli sebagai acuan.",
          "Filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Saat gim WonderSwan tidak dapat dimulai",
        "body": "Periksa ekstensi, sistem yang terdeteksi, dan kesalahan yang tepat. Memasang berkas .wsc sebagai WonderSwan, atau sebaliknya, adalah kekeliruan yang umum. Jaga berkas asli tetap utuh selama pengujian.",
        "points": [
          "Catat versi aplikasi, sistem yang terdeteksi, inti emulator, dan kesalahan.",
          "Jangan kirim berkas ROM atau BIOS komersial ke dukungan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ws-vs-wsc",
        "question": "Apakah model warna mengubah berkasnya?",
        "answer": "Ya. WonderSwan dan WonderSwan Color memakai ekstensi yang berbeda, dan judul berwarna mungkin tidak berperilaku benar pada sistem monokrom."
      },
      {
        "id": "orientation",
        "question": "Mengapa layarnya terlihat diputar?",
        "answer": "Banyak judul WonderSwan dirancang untuk permainan vertikal. Coba tata letak potret sebelum menganggap gambarnya salah."
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
    "title": "Emulator Neo Geo Pocket untuk iPhone & iPad | Retropa",
    "description": "Jalankan gim Neo Geo Pocket .ngp dan .ngpc milik Anda di iPhone dan iPad. Cakupan inti emulator, kontroler bergaya tuas, dan perbedaannya dari arkade Neo Geo.",
    "summary": "Retropa menjalankan gim Neo Geo Pocket dan Neo Geo Pocket Color dari berkas milik Anda pada inti emulator Ares, dan terpisah dari emulasi arkade Neo Geo.",
    "sections": [
      {
        "title": "Neo Geo Pocket bukan arkade Neo Geo",
        "body": "Neo Geo Pocket dan Neo Geo Pocket Color adalah konsol genggam. Keduanya berbagi merek dengan perangkat arkade Neo Geo MVS dan AES, tetapi merupakan sistem yang sepenuhnya berbeda dengan berkas dan inti emulator yang berbeda. Dukungan arkade di Retropa memerlukan Plus; emulasi Pocket tidak.",
        "points": [
          ".ngp adalah Neo Geo Pocket; .ngpc dan .ngc adalah model warnanya.",
          "neogeo.zip arkade bukan gim Pocket.",
          "Pustaka arkade dan Pocket terpisah."
        ]
      },
      {
        "title": "Menyiapkan berkas yang tepat",
        "body": "Periksa ekstensi sebelum mengimpor. Gim Pocket adalah satu citra genggam, sedangkan set arkade Neo Geo biasanya terdiri dari beberapa berkas chip ditambah BIOS opsional. Menganggap keduanya sama adalah kesalahan yang paling umum pada sistem ini."
      },
      {
        "title": "Inti emulator Ares",
        "body": "Ares menangani Neo Geo Pocket dan Neo Geo Pocket Color bersama platform genggam lain di Retropa. Jika gim tidak dapat dimuat, pastikan ekstensi dan sistem yang terdeteksi, lalu pertimbangkan apakah berkasnya merupakan citra yang bersih."
      },
      {
        "title": "Tuas mikrosakelar, bukan tombol arah",
        "body": "Neo Geo Pocket memakai tuas mikrosakelar yang berbunyi klik, bukan tombol arah konvensional. Dalam praktiknya, ini berarti arah diagonal yang presisi lebih penting daripada biasanya, jadi saat menguji tata letak sentuh, pastikan masukan diagonal tercatat dengan bersih, bukan hanya memeriksa empat arah utamanya.",
        "points": [
          "Uji arah diagonal secara eksplisit.",
          "Pastikan kedua tombol aksi nyaman untuk sesi panjang.",
          "Kontroler fisik yang dipasangkan layak dipakai untuk gim pertarungan."
        ]
      },
      {
        "title": "Perlakuan tampilan",
        "body": "Panel warna Pocket berukuran kecil dan beresolusi rendah, sehingga perlakuan LCD yang ringan biasanya lebih cocok daripada preset CRT yang berat. Filter lanjutan Retropa bekerja dari area keluaran yang sebenarnya, bukan mengharuskan kelipatan bilangan bulat.",
        "points": [
          "Bandingkan dengan gambar aslinya.",
          "Filter lanjutan memerlukan Retropa Plus."
        ]
      },
      {
        "title": "Saat gim Pocket tidak dapat dimulai",
        "body": "Pastikan ekstensi, sistem yang terdeteksi, dan kesalahan yang tepat. Jika Anda memiliki berkas arkade di pustaka, periksa apakah Anda tidak memilih salah satunya. Jaga berkas asli tetap utuh selama mendiagnosis.",
        "points": [
          "Catat versi aplikasi, sistem yang terdeteksi, inti emulator, dan kesalahan.",
          "Jangan kirim berkas ROM atau BIOS komersial ke dukungan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "vs-arcade",
        "question": "Dapatkah saya memainkan gim arkade Neo Geo di sini?",
        "answer": "Itu sistem terpisah dengan inti emulator dan berkasnya sendiri. Retropa mendukung keluarga arkade, dan itu memerlukan Retropa Plus; emulasi Neo Geo Pocket terpisah."
      },
      {
        "id": "neogeo-zip",
        "question": "Apakah saya perlu neogeo.zip untuk gim Pocket?",
        "answer": "Tidak. Berkas itu berkaitan dengan perangkat arkade Neo Geo. Gim Pocket tidak memakainya."
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
    "title": "Emulator Neo Geo untuk iPhone & iPad | Retropa",
    "description": "Mainkan berkas arkade Neo Geo MVS yang didukung di iPhone dan iPad dengan Retropa. Struktur set, kebutuhan BIOS, set induk dan klon, serta hal yang perlu diperiksa saat gim tidak dapat dimuat.",
    "summary": "Retropa menjalankan set arkade Neo Geo yang didukung di iPhone dan iPad dengan kontroler sentuh dan eksternal serta filter CRT. Permainan arkade memerlukan Retropa Plus; gim dan berkas BIOS tidak disertakan.",
    "sections": [
      {
        "title": "Arkade Neo Geo memerlukan Plus",
        "body": "Emulasi arkade Neo Geo adalah bagian dari keluarga arkade Retropa, dan inti emulator arkade memerlukan Retropa Plus. Ini terpisah dari Neo Geo Pocket, yaitu sistem genggam yang tercakup dalam dukungan Pocket standar.",
        "points": [
          "Keluarga arkade memerlukan Retropa Plus.",
          "Neo Geo Pocket adalah sistem genggam yang berbeda.",
          "Gim dan berkas BIOS tidak disertakan dalam keadaan apa pun."
        ]
      },
      {
        "title": "Set arkade bukan satu berkas",
        "body": "Emulasi konsol biasanya berarti satu berkas per gim. Perangkat arkade bekerja secara berbeda: sebuah gim adalah kumpulan berkas chip, sering dikelompokkan dalam ZIP, dan banyak gim bergantung pada set induk atau sebuah BIOS. Itulah sebabnya ZIP arkade berperilaku berbeda dari ROM genggam.",
        "points": [
          "Jaga ZIP tetap utuh kecuali alur impor meminta Anda membongkarnya.",
          "Arsip BIOS terpisah mungkin diperlukan.",
          "Set klon mungkin tidak memuat semua berkas yang dibutuhkan inti emulator."
        ]
      },
      {
        "title": "Mengimpor dan peluncuran pertama",
        "body": "Pilih set dari entri impor pustaka Retropa, lalu jalankan dengan tata letak bawaan. Jika inti emulator melaporkan berkas atau BIOS yang hilang, baca pesan itu dengan cermat: set induk yang hilang dan BIOS yang hilang memerlukan perbaikan yang berbeda.",
        "points": [
          "Baca kesalahan yang tepat sebelum mengubah apa pun.",
          "Pertahankan arsip asli selama mendiagnosis.",
          "Pastikan masukan koin dan start dapat dijangkau."
        ]
      },
      {
        "title": "Berkas Neo Geo Pocket tidak akan berfungsi di sini",
        "body": "Jika Anda memiliki berkas .ngp atau .ngpc, berkas itu milik sistem Pocket, bukan keluarga arkade. ROM Pocket atau ZIP yang diganti namanya tidak dapat menggantikan set arkade, dan sebaliknya juga berlaku.",
        "points": [
          ".ngp dan .ngpc adalah berkas Pocket genggam.",
          "Set arkade terdiri dari banyak berkas dan mungkin memerlukan BIOS.",
          "Periksa sistem yang terdeteksi sebelum melaporkan masalah."
        ]
      },
      {
        "title": "Kontroler dan tampilan arkade",
        "body": "Perangkat arkade mengharapkan tuas kontrol ditambah beberapa tombol aksi, dan banyak judul bergantung pada penekanan tombol secara bersamaan. Retropa mendukung kontroler di layar dan kontroler eksternal yang kompatibel, serta menyertakan perlakuan CRT yang cocok untuk keluaran arkade. Filter lanjutan memerlukan Plus.",
        "points": [
          "Pasangkan kontroler di iOS sebelum memetakannya.",
          "Uji arah diagonal bersamaan dengan sebuah tombol.",
          "Preset CRT biasanya lebih cocok untuk keluaran arkade daripada kisi mentah."
        ]
      },
      {
        "title": "Saat gim Neo Geo tidak dapat dimulai",
        "body": "Periksa papan yang dipilih, isi set, dan persyaratan BIOS yang dilaporkan inti emulator. Set klon mandiri tanpa set induknya, atau set yang kehilangan berkas wajib, tidak akan dimuat, apa pun filter atau skin yang diterapkan.",
        "points": [
          "Catat versi aplikasi, pilihan papan, inti emulator, dan kesalahan yang tepat.",
          "Perubahan filter atau skin tidak dapat memperbaiki data ROM yang hilang.",
          "Jangan lampirkan berkas ROM atau BIOS komersial pada permintaan dukungan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "plus",
        "question": "Mengapa inti emulator arkade memerlukan Plus?",
        "answer": "Keluarga arkade adalah bagian dari rangkaian fitur berbayar, bersama skin premium dan filter lanjutan. Sistem Pocket dan kartrid tidak memerlukannya."
      },
      {
        "id": "bios",
        "question": "Apakah saya perlu BIOS Neo Geo?",
        "answer": "Banyak set arkade mengharapkannya, dan inti emulator akan memberi tahu Anda jika berkas itu hilang. Gunakan BIOS yang berhak Anda pakai; Retropa tidak menyediakan unduhan."
      },
      {
        "id": "pocket-confusion",
        "question": "Apakah Neo Geo Pocket hal yang sama?",
        "answer": "Tidak. Pocket adalah konsol genggam dengan berkasnya sendiri. Set arkade dan gim Pocket tidak dapat saling dipertukarkan."
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
    "title": "Inti mGBA di iPhone & iPad | Retropa",
    "description": "Gunakan mGBA di Retropa untuk Game Boy, Game Boy Color dan Game Boy Advance. Periksa format katalog, pemeriksaan saat peluncuran pertama, langkah pengamanan simpanan dan penggantian inti dengan Retropa Plus.",
    "summary": "mGBA mencakup keluarga konsol genggam Game Boy di Retropa. Mulailah dengan tata letak bawaan dan gambar asli, lalu periksa adegan permainan yang nyata sebelum mengubah pengaturan tampilan.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek asal mGBA: https://github.com/mgba-emu/mgba. Cakupan di bawah ini berasal dari katalog Retropa, bukan dari daftar fitur lengkap proyek asalnya. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba"
        ]
      },
      {
        "title": "Peluncuran pertama di berbagai generasi konsol genggam",
        "body": "Unduh berkas Anda secara lokal di Files, impor dari pustaka Retropa dan pastikan sistem yang terdeteksi. Judul Game Boy Color memerlukan mode perangkat keras berwarna; mengubah nama berkas bukan cara untuk menambah atau menghapus fitur warna. Untuk Game Boy Advance, uji tombol L dan R sekaligus tombol aksi, karena tata letak yang dirancang untuk konsol genggam generasi lama mungkin tidak menyertakannya.",
        "points": [
          "Periksa suara dan masukan setelah layar judul.",
          "Uji Skin bawaan sebelum mengimpor tata letak khusus.",
          "Simpan berkas asli di luar aplikasi."
        ]
      },
      {
        "title": "Pisahkan emulasi dari efek tampilan",
        "body": "Jika suatu adegan terlihat salah, bandingkan dulu dengan Filter dinonaktifkan. Perlakuan layar hijau sengaja mengubah warna dan kisi LCD sengaja mengubah tampilan piksel. Efek tersebut tidak dapat memastikan apakah mGBA salah merender game. Untuk masalah audio atau pewaktuan, catat adegan yang dapat diulang dan versi aplikasi, bukan menilai hanya dari logo pembuka."
      },
      {
        "title": "Penggantian inti dan menjaga kemajuan",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, meskipun sistem konsol genggamnya sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; buat cadangan simpanan milik game dan status simpan dari inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar inti.",
          "Buat cadangan dan verifikasi juga simpanan di dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang tidak ada."
        ]
      },
      {
        "title": "Batasan cakupan konsol genggam",
        "body": "mGBA bukan jalur Nintendo DS di Retropa. Berkas DS memerlukan inti DS dari katalog, bukan citra Game Boy Advance yang namanya diubah. Demikian pula, status simpan dari emulator lain bukan berkas game dan tidak boleh diimpor sebagai berkas game. Ikuti perintah BIOS untuk sistem yang dipilih jika muncul; Retropa tidak menyediakan firmware."
      }
    ],
    "faqs": [
      {
        "id": "switch",
        "question": "Dapatkah saya mengganti inti hanya untuk satu game?",
        "answer": "Ya, dengan Retropa Plus. Pilihan disimpan per game, tetapi buat cadangan simpanan sebelum mengubahnya dan jangan berharap status simpan dapat bekerja lintas inti."
      },
      {
        "id": "display",
        "question": "Apakah Filter lain dapat memperbaiki masalah kompatibilitas?",
        "answer": "Tidak. Uji dulu dengan gambar asli. Filter mengubah tampilan, bukan perangkat keras yang diemulasi atau isi berkas game."
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
    "title": "Inti SkyEmu di iPhone & iPad | Retropa",
    "description": "SkyEmu mencakup keluarga Game Boy dan Nintendo DS di Retropa. Periksa format, kontrol sentuh dua layar, batasan cakupan dan penggantian inti dengan Retropa Plus.",
    "summary": "SkyEmu menangani Nintendo DS sekaligus konsol genggam Game Boy di Retropa. Kompatibilitas DS bergantung pada judul, bukan janji bahwa setiap game atau interaksi sentuh bekerja dengan benar.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek asal SkyEmu: https://github.com/skylersaleh/SkyEmu. Cakupan di bawah ini berasal dari katalog Retropa, bukan dari daftar fitur lengkap proyek asalnya. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc",
          "Game Boy Advance: .gba",
          "Nintendo DS: .nds"
        ]
      },
      {
        "title": "Nintendo DS dengan SkyEmu",
        "body": "Perlakukan kompatibilitas DS sebagai hal yang khusus per judul. Impor berkas yang diunduh secara lokal, pastikan Nintendo DS terdeteksi, dan uji di luar layar pembuka. Periksa satu adegan dengan masukan sentuh dan satu adegan dengan suara sebelum mengandalkan sesi panjang. Catat versi aplikasi dan kegagalan yang tepat jika suatu judul macet; mengganti Skin tidak dapat memperbaiki masalah kompatibilitas inti.",
        "points": [
          "Katalog hanya mencantumkan SkyEmu untuk Nintendo DS.",
          "Penggantian inti dengan Plus tidak membuat inti DS alternatif.",
          "Simpan cadangan terpisah saat menguji judul DS."
        ]
      },
      {
        "title": "Dua layar dan masukan sentuh",
        "body": "Pilih tata letak yang membuat kedua layar tetap terlihat. Orientasi potret dapat menumpuk keduanya secara vertikal; orientasi lanskap bergantung pada Skin. Uji sasaran sentuh yang kecil pada ukuran yang benar-benar Anda mainkan dan periksa layar mana yang menerima masukan sentuh. Kontroler fisik dapat menangani tombol yang dipetakan tetapi tidak dapat menggantikan setiap interaksi sentuh.",
        "points": [
          "Uji kedua layar, bukan hanya tampilan game utama.",
          "Pastikan kontrol sentuh tetap terjangkau dengan kontroler eksternal.",
          "Skin konsol genggam satu layar bukan tata letak DS."
        ]
      },
      {
        "title": "Menggunakan SkyEmu untuk konsol genggam generasi lama",
        "body": "Keluarga Game Boy menggunakan tata letak satu layar. Pastikan sistem yang terdeteksi dan gunakan Skin yang sesuai sebelum menyelidiki masalah warna atau tombol yang hilang. ZIP dan RetroPack adalah wadah impor, bukan sistem tambahan yang diemulasi; berkas di dalamnya tetap harus cocok dengan katalog. Mengubah nama berkas Game Boy Advance tidak menjadikannya game DS."
      },
      {
        "title": "Penggantian inti dan menjaga kemajuan",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, meskipun sistem konsol genggamnya sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; buat cadangan simpanan milik game dan status simpan dari inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar inti.",
          "Buat cadangan dan verifikasi juga simpanan di dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang tidak ada."
        ]
      }
    ],
    "faqs": [
      {
        "id": "ds",
        "question": "Inti mana yang menjalankan game Nintendo DS?",
        "answer": "SkyEmu adalah inti Nintendo DS yang tercantum di katalog Retropa. Kompatibilitasnya khusus per judul dan katalog tidak mencantumkan inti DS lain."
      },
      {
        "id": "touch",
        "question": "Apakah game DS tetap memerlukan masukan sentuh saat memakai kontroler?",
        "answer": "Ya. Pastikan layar sentuh tetap terjangkau untuk game yang menggunakannya; kontroler tidak menggantikan semua tindakan sentuh."
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
    "title": "Inti SameBoy di iPhone & iPad | Retropa",
    "description": "SameBoy berfokus pada Game Boy dan Game Boy Color di Retropa. Periksa perilaku warna, cakupan berkas, batas status simpan dan syarat Retropa Plus untuk mengganti inti.",
    "summary": "SameBoy berfokus pada perangkat keras Game Boy monokrom dan warna yang asli. Cakupannya yang lebih sempit menjadikannya titik pembanding yang berguna, bukan jaminan bahwa inti lain kurang akurat.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek asal SameBoy: https://github.com/LIJI32/SameBoy. Cakupan di bawah ini berasal dari katalog Retropa, bukan dari daftar fitur lengkap proyek asalnya. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "Game Boy: .gb",
          "Game Boy Color: .gbc"
        ]
      },
      {
        "title": "Periksa warna tanpa Filter",
        "body": "Impor berkas yang tersimpan secara lokal dan pastikan apakah Retropa mengenalinya sebagai Game Boy atau Game Boy Color. Mulailah dengan gambar asli: perlakuan DMG dapat sengaja membuat judul berwarna tampak monokrom. Gunakan adegan dengan perubahan warna yang diketahui dan bandingkan adegan yang sama, bukan dua titik berbeda di dalam game."
      },
      {
        "title": "Menguji pewaktuan dan masukan",
        "body": "Gunakan Skin bawaan untuk memeriksa tombol arah, A, B, Start dan Select. Jika pewaktuan atau suara tampak salah, catat dengan tepat kapan hal itu terjadi dan apakah hal itu tetap ada dengan efek tampilan dinonaktifkan. Dengan Retropa Plus, perbandingan dengan inti lain yang kompatibel dapat membantu mengisolasi implementasinya, tetapi perbedaan yang terlihat saja tidak membuktikan inti mana yang sesuai dengan perangkat kerasnya."
      },
      {
        "title": "Penggantian inti dan menjaga kemajuan",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, meskipun sistem konsol genggamnya sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; buat cadangan simpanan milik game dan status simpan dari inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar inti.",
          "Buat cadangan dan verifikasi juga simpanan di dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang tidak ada."
        ]
      },
      {
        "title": "Bukan inti Game Boy Advance",
        "body": "SameBoy tidak mencakup Game Boy Advance di Retropa. Gunakan inti yang tercantum di katalog dan mendukung GBA untuk citra GBA; mengubah ekstensinya tidak menjadikannya game Game Boy. Demikian pula, beralih ke SameBoy tidak akan membuat status simpan dari inti lain dapat dipindahkan. Simpan status lama dan uji cadangan simpanan di dalam game secara terpisah."
      }
    ],
    "faqs": [
      {
        "id": "gba",
        "question": "Dapatkah SameBoy menjalankan game Game Boy Advance?",
        "answer": "Tidak. Entri katalog SameBoy di Retropa mencakup Game Boy dan Game Boy Color, bukan Game Boy Advance."
      },
      {
        "id": "why",
        "question": "Kapan saya sebaiknya membandingkan SameBoy dengan inti lain?",
        "answer": "Dengan Retropa Plus, bandingkan masalah pewaktuan, warna atau suara yang dapat diulang setelah memeriksa berkas dan menonaktifkan Filter. Buat cadangan simpanan terlebih dahulu."
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
    "title": "Inti RusticoNES untuk NES di iPhone & iPad | Retropa",
    "description": "RusticoNES di Retropa: format kartrid dan disk NES serta Famicom, pemeriksaan mapper, peluncuran pertama, langkah pengamanan simpanan dan penggantian inti dengan Plus.",
    "summary": "RusticoNES adalah jalur NES bawaan di Retropa. Gunakan untuk format NES / Famicom yang tercantum di katalog, dengan memeriksa metadata kartrid dan kebutuhan disk sebelum menganggap kegagalan boot sebagai masalah tampilan.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek asal RusticoNES: https://github.com/zeta0134/rustico. Cakupan di bawah ini berasal dari katalog Retropa, bukan dari daftar fitur lengkap proyek asalnya. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "NES / Famicom: .nes, .fds, .unf, .unif"
        ]
      },
      {
        "title": "Kartrid, UNIF dan citra disk",
        "body": "Citra kartrid NES / Famicom dan citra Famicom Disk System adalah masukan yang berbeda. UNIF adalah format wadah kartrid, bukan nama lain untuk header iNES. Pertahankan header dan ekstensi asli saat mengimpor; mengganti nama atau menghapus byte agar berkas tampak seperti format lain dapat membuang informasi yang dipakai untuk mengenali papan sirkuitnya.",
        "points": [
          "Simpan salinan terpisah dari citra asli.",
          "Baca setiap perintah BIOS sistem disk; Retropa tidak menyediakan BIOS tersebut.",
          "Format audio NSF tidak tercantum untuk RusticoNES; periksa TetaNES sebagai gantinya."
        ]
      },
      {
        "title": "Peluncuran pertama dan pemeriksaan kontroler",
        "body": "Unduh citra secara lokal di Files, impor melalui pustaka Retropa dan pastikan NES terdeteksi. Mulailah dengan Skin bawaan dan tanpa efek tampilan. Uji tombol arah, A, B, Start dan Select, termasuk arah diagonal dan penekanan bersamaan. Masukan yang hilang pada tata letak khusus bukan bukti mapper yang buruk."
      },
      {
        "title": "Saat satu kartrid gagal tetapi yang lain berjalan",
        "body": "Kartrid NES dapat memuat perangkat keras mapper yang berbeda. Ekstensi yang dikenali tidak membuktikan bahwa papan sirkuit yang dipakai game tertentu sudah diimplementasikan. Catat kesalahan yang tepat dan, jika diketahui dari metadata hasil salinan Anda sendiri, mapper dan wilayahnya. Jangan menambal header secara acak atau menganggap BIOS memperbaiki masalah papan kartrid. Untuk game disk, bedakan antara BIOS yang tidak ada dan data disk yang tidak ada."
      },
      {
        "title": "Penggantian inti dan menjaga kemajuan",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, meskipun sistem konsol genggamnya sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; buat cadangan simpanan milik game dan status simpan dari inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar inti.",
          "Buat cadangan dan verifikasi juga simpanan di dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang tidak ada."
        ]
      },
      {
        "title": "Bandingkan hanya format yang tumpang tindih",
        "body": "Halaman sistem NES mencantumkan gabungan format dari semua intinya, bukan janji bahwa setiap inti menerima semuanya. Sebelum memakai Plus untuk membandingkan RusticoNES dengan TetaNES atau JGenesis, periksa kedua entri katalog untuk format berkas aslinya. Pertahankan adegan yang sama dan pengaturan tampilan bawaan agar Skin atau Filter yang berubah tidak mengaburkan hasilnya."
      }
    ],
    "faqs": [
      {
        "id": "nsf",
        "question": "Apakah RusticoNES inti yang tercantum untuk audio NSF?",
        "answer": "Tidak. Katalog Retropa mencantumkan NSF dan NSFE di bawah TetaNES, bukan RusticoNES. Berkas audio bukan game kartrid yang dapat dimainkan."
      },
      {
        "id": "mapper",
        "question": "Apakah ekstensi yang didukung menjamin sebuah game dapat boot?",
        "answer": "Tidak. Mapper kartrid, keutuhan berkas dan persyaratan sistem disk tetap penting. Catat kesalahan yang tepat sebelum mengubah berkas."
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
    "title": "Inti TetaNES untuk NES di iPhone & iPad | Retropa",
    "description": "TetaNES di Retropa: game NES / Famicom, citra disk dan audio NSF, pemeriksaan khusus format, penyiapan kontroler dan syarat Plus untuk mengganti inti emulator.",
    "summary": "TetaNES adalah inti NES alternatif di Retropa dengan cakupan kartrid, disk dan berkas musik yang tercantum di katalog. Periksa jenis berkas yang Anda impor sebelum mengharapkan layar game yang dapat dimainkan.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek asal TetaNES: https://github.com/lukexor/tetanes. Cakupan di bawah ini berasal dari katalog Retropa, bukan dari daftar fitur lengkap proyek asalnya. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "NES / Famicom: .nes, .fds, .nsf, .nsfe"
        ]
      },
      {
        "title": "Berkas musik bukan game kartrid",
        "body": "NSF dan NSFE menyimpan data musik NES. Jika Anda mengimpornya, tidak adanya tingkat permainan seperti biasa bukan berarti kegagalan. Periksa keluaran audio dan kontrol yang benar-benar disediakan aplikasi; jangan menganggap antarmuka pemutar musik desktop dari proyek asal tersedia di Retropa. Untuk bermain, mulailah dengan kartrid atau citra disk yang berhak Anda gunakan.",
        "points": [
          "Periksa volume perangkat dan keluaran audio saat menguji musik.",
          "Mengganti nama berkas audio tidak dapat mengubahnya menjadi citra kartrid.",
          "Ekstensi UNIF termasuk entri katalog RusticoNES, bukan entri TetaNES."
        ]
      },
      {
        "title": "Impor kartrid atau citra disk",
        "body": "Unduh berkas ke perangkat sebelum memakai entri impor pustaka. Pastikan NES terdeteksi dan biarkan citra asli tidak berubah. Famicom adalah nama sistem di Jepang; Famicom Disk System menambahkan persyaratan disk tersendiri. Jika inti yang dipilih melaporkan masalah BIOS atau data disk, selesaikan persyaratan yang tepat itu alih-alih mengganti berkas dengan citra kartrid yang tidak berkaitan."
      },
      {
        "title": "Uji masukan dan adegan yang dapat diulang",
        "body": "Gunakan tata letak NES / Famicom dengan tombol arah, dua tombol aksi, Start dan Select. Pastikan arah diagonal dengan Skin bawaan, lalu uji adegan yang memperlihatkan masalahnya. Bandingkan gambar asli sebelum menerapkan efek CRT: garis pindai dapat mengubah detail yang terlihat tanpa mengubah apa yang diemulasi inti."
      },
      {
        "title": "Penggantian inti dan menjaga kemajuan",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, meskipun sistem konsol genggamnya sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; buat cadangan simpanan milik game dan status simpan dari inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar inti.",
          "Buat cadangan dan verifikasi juga simpanan di dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang tidak ada."
        ]
      },
      {
        "title": "Alternatif bukan perbaikan universal",
        "body": "TetaNES dan RusticoNES memiliki daftar format dan implementasi yang berbeda. Penggantian dapat membantu mengisolasi masalah pewaktuan atau mapper hanya jika berkas valid untuk keduanya; penggantian itu tidak dapat menjamin dukungan untuk papan sirkuit tertentu. Status simpan dari inti sebelumnya sebaiknya tetap dicadangkan bersama inti tersebut, bukan dianggap sebagai berkas yang dapat dipertukarkan."
      }
    ],
    "faqs": [
      {
        "id": "music",
        "question": "Mengapa berkas NSF saya tidak menampilkan game yang dapat dimainkan?",
        "answer": "NSF adalah data musik. Uji audio alih-alih mengharapkan tingkat permainan biasa; gunakan kartrid atau citra disk untuk bermain."
      },
      {
        "id": "switch",
        "question": "Dapatkah saya mengganti game NES ke TetaNES secara gratis?",
        "answer": "Mengganti inti emulator memerlukan Retropa Plus. Periksa cakupan format inti tujuan dan buat cadangan kemajuan terlebih dahulu."
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
    "title": "Inti LakeSnes untuk SNES di iPhone & iPad | Retropa",
    "description": "LakeSnes di Retropa: format SNES / Super Famicom, batasan chip kartrid, kontrol enam tombol, cadangan simpanan, dan pengalihan inti dengan Plus.",
    "summary": "LakeSnes adalah inti Retropa yang berfokus pada SNES. Katalognya mencakup beberapa format image dan copier, tetapi pengenalan berkas dan dukungan perangkat keras kartrid sebuah game merupakan dua hal yang terpisah.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek upstream LakeSnes: https://github.com/dinkc64/LakeSnes. Cakupan di bawah ini berasal dari katalog Retropa, bukan daftar fitur lengkap proyek upstream. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "SNES / Super Famicom: .sfc, .smc, .fig, .swc, .bs, .st"
        ]
      },
      {
        "title": "Jaga keutuhan image dan header-nya",
        "body": "SNES dikenal sebagai Super Famicom di Jepang. Image kartrid yang umum memakai ekstensi SFC atau SMC; katalog juga mencantumkan format copier lain dan format terkait. Ekstensi saja tidak membuktikan apakah sebuah berkas memiliki header copier atau memerlukan perangkat keras kartrid khusus. Impor image asli yang tersimpan secara lokal dan simpan cadangannya, bukan menghapus header sebagai langkah pertama penanganan masalah."
      },
      {
        "title": "Periksa seluruh kontroler",
        "body": "Setelah impor ke pustaka, periksa sistem yang terdeteksi dan mulailah dengan tata letak bawaan. SNES menambahkan X, Y, L, dan R pada pola handheld dua tombol. Uji tombol bahu, diagonal, dan penekanan bersamaan yang dipakai game; skin menarik yang menghilangkan L atau R dapat membuat game yang sebenarnya berjalan tampak macet.",
        "points": [
          "Uji Start dan Select serta keenam tombol permainan.",
          "Petakan kontroler yang sudah dipasangkan sebelum menilai keterbatasan tata letak sentuh.",
          "Gunakan gambar asli untuk memisahkan masalah masukan dan masalah tampilan."
        ]
      },
      {
        "title": "Batas chip kartrid dan format khusus",
        "body": "Sebagian judul SNES bergantung pada prosesor kartrid tambahan atau perangkat keras lain. Daftar ekstensi katalog bukan daftar kompatibilitas per chip, dan berkas BS atau ST yang dikenali tidak membuktikan bahwa setiap alur aksesori tersedia di Retropa. Jika hanya satu judul yang gagal, catat kebutuhan perangkat kerasnya bila diketahui dan pesan galat yang tepat. Jangan menyatakan bahwa filter atau ekstensi yang diganti nama dapat menambah dukungan perangkat keras yang belum ada."
      },
      {
        "title": "Pengalihan inti dan menjaga progres",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, bahkan ketika sistem handheld itu sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; cadangkan simpanan game itu sendiri dan status simpan inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar, dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar-inti.",
          "Cadangkan dan verifikasi juga simpanan dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang belum ada."
        ]
      },
      {
        "title": "Membandingkan LakeSnes dengan JGenesis",
        "body": "JGenesis juga mencantumkan SNES, tetapi cakupan ekstensi SNES-nya lebih sempit daripada LakeSnes. Dengan Plus, bandingkan hanya format berkas yang tercantum di kedua entri. Kembali ke adegan yang sama dengan kontrol yang sama dan tanpa filter, lalu pisahkan status simpan tiap inti. Perbandingan yang berhasil untuk satu kartrid tidak membuktikan kompatibilitas untuk setiap judul dengan chip khusus."
      }
    ],
    "faqs": [
      {
        "id": "formats",
        "question": "Apakah setiap format LakeSnes juga dapat berjalan di JGenesis?",
        "answer": "Jangan berasumsi demikian. Periksa entri katalog tiap inti; format tingkat sistem menggabungkan cakupan dari beberapa inti."
      },
      {
        "id": "chips",
        "question": "Apakah daftar format menjamin kompatibilitas chip khusus?",
        "answer": "Tidak. Pengenalan berkas dan emulasi perangkat keras kartrid merupakan dua hal yang terpisah. Periksa pesan galat yang tepat dan inti yang dipilih sebelum mengubah image."
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
    "title": "Inti JGenesis di iPhone & iPad | Retropa",
    "description": "JGenesis di Retropa: sistem Sega dan Nintendo yang tercantum, penamaan Genesis / Mega Drive, batas format, deteksi sistem, dan pengalihan inti dengan Plus.",
    "summary": "JGenesis melayani beberapa sistem melalui satu keluarga inti di Retropa. Sistem yang terdeteksi tetap menentukan perangkat keras, kontrol, dan konteks simpanan; berbagi inti tidak membuat berkas dapat saling ditukar.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek upstream JGenesis: https://github.com/jsgroth/jgenesis. Cakupan di bawah ini berasal dari katalog Retropa, bukan daftar fitur lengkap proyek upstream. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
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
        "title": "Penamaan Genesis dan Mega Drive",
        "body": "Genesis adalah nama Amerika Utara untuk konsol yang dikenal sebagai Mega Drive di Jepang dan Eropa. Katalog Retropa memiliki entri dengan kedua nama itu. Ekstensi berkas hanyalah petunjuk format image, bukan penanda wilayah yang andal: nama berkas saja tidak memberi tahu kebutuhan waktu atau wilayah sebuah game. Pertahankan berkas asli dan pastikan sistem yang terdeteksi, bukan mengganti namanya untuk memilih pasar."
      },
      {
        "title": "Impor untuk perangkat keras yang tepat",
        "body": "Unduh image Anda secara lokal di app Berkas lalu impor melalui pustaka. Sebelum memulai, bedakan Master System dari Game Gear, dan NES / Famicom dari SNES / Super Famicom. Inti multi-sistem tetap memerlukan jalur perangkat keras yang sesuai. Jika sistem yang terdeteksi tidak terduga, periksa identitas berkas sebelum mengubah pengaturan tampilan atau kontroler.",
        "points": [
          "Master System dan Game Gear adalah sistem yang berkerabat, bukan sistem yang identik.",
          "Daftar format tingkat sistem dapat memuat format dari inti lain.",
          "Cakupan di sini adalah katalog Retropa, bukan setiap fitur JGenesis di upstream."
        ]
      },
      {
        "title": "Kontrol berbeda-beda sesuai sistem yang dipilih",
        "body": "Untuk Genesis, uji A, B, C, dan masukan enam tombol tambahan yang disediakan tata letak. Untuk Game Gear, pastikan Start; untuk Master System, periksa masukan jeda. Tata letak SNES memerlukan tombol bahu yang tidak diperlukan tata letak NES. Validasi kombinasi kontroler pada adegan game yang nyata sebelum menganggap inti telah menghilangkan sebuah masukan."
      },
      {
        "title": "Pengalihan inti dan menjaga progres",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, bahkan ketika sistem handheld itu sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; cadangkan simpanan game itu sendiri dan status simpan inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar, dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar-inti.",
          "Cadangkan dan verifikasi juga simpanan dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang belum ada."
        ]
      },
      {
        "title": "Cakupan Sega tidak berarti ada inti alternatif",
        "body": "Katalog Retropa mencantumkan JGenesis sebagai satu-satunya inti untuk sistem kartrid Sega. Plus membuka pengalihan inti di tempat yang memiliki alternatif; Plus tidak menambahkan implementasi yang tidak tercantum. Dukungan multi-sistem di upstream juga tidak berarti bahwa CD, perangkat keras tambahan, atau setiap opsi desktop tersedia di dalam Retropa. Gunakan katalog dan perintah yang muncul di app untuk memastikan jalur yang didukung."
      }
    ],
    "faqs": [
      {
        "id": "region",
        "question": "Apakah ekstensi .gen membuktikan sebuah game berasal dari Amerika Utara?",
        "answer": "Tidak. Genesis dan Mega Drive adalah nama regional, tetapi ekstensi tidak dapat memastikan wilayah atau kebutuhan waktu sebuah game secara andal."
      },
      {
        "id": "upstream",
        "question": "Apakah Retropa menyediakan setiap sistem JGenesis di upstream?",
        "answer": "Jaminan seperti itu tidak diberikan. Halaman ini mengambil cakupannya dari katalog Retropa sendiri, bukan dari daftar fitur lengkap upstream."
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
    "title": "Inti Ares di iPhone & iPad | Retropa",
    "description": "Ares di Retropa: cakupan GBA, WonderSwan, dan Neo Geo Pocket yang tercantum, deteksi model warna, tata letak yang diputar, kewaspadaan soal simpanan, dan pengalihan inti dengan Plus.",
    "summary": "Ares mencakup keluarga handheld tertentu di Retropa. Identitas upstream-nya yang luas tidak berarti setiap sistem atau aksesori upstream sudah terintegrasi ke dalam app.",
    "sections": [
      {
        "title": "Sistem dan format dalam katalog",
        "body": "Proyek upstream Ares: https://github.com/ares-emulator/ares. Cakupan di bawah ini berasal dari katalog Retropa, bukan daftar fitur lengkap proyek upstream. Ekstensi yang tercantum tidak menjamin kompatibilitas dengan setiap judul. Retropa tidak menyediakan game atau berkas BIOS; impor hanya berkas yang berhak Anda gunakan.",
        "points": [
          "Game Boy Advance: .gba",
          "WonderSwan: .ws",
          "WonderSwan Color: .wsc",
          "Neo Geo Pocket: .ngp",
          "Neo Geo Pocket Color: .ngpc, .ngc"
        ]
      },
      {
        "title": "Cocokkan model monokrom atau model warna",
        "body": "Impor image yang diunduh secara lokal dan periksa apakah Retropa mendeteksi WonderSwan atau WonderSwan Color asli, serta Neo Geo Pocket atau Neo Geo Pocket Color. Model warna memiliki kemampuan yang tidak dimiliki perangkat keras monokrom. Mengganti nama berkas bukan konversi dan tidak dapat membuat judul khusus model warna berjalan sebagai game model asli.",
        "points": [
          "Simpan image asli dan cadangan progres yang terpisah.",
          "Periksa model yang terdeteksi sebelum mendiagnosis masalah palet.",
          "Ikuti perintah firmware khusus sistem bila muncul; tidak ada BIOS yang disediakan."
        ]
      },
      {
        "title": "Orientasi WonderSwan butuh lebih dari sekadar potret",
        "body": "Game WonderSwan dapat dirancang untuk dimainkan secara horizontal atau vertikal. Periksa orientasi yang diharapkan game, kedua kelompok tombol arah, dan tata letak skin yang tersedia. Memutar ponsel ke posisi potret saja tidak membuktikan bahwa layar emulasi dan semua kontrol telah diputar dengan tepat. Jika sebuah tata letak tidak dapat menyediakan masukan yang diperlukan, gunakan tata letak lain yang sesuai daripada menganggap inti dapat memetakan ulang masukan itu secara otomatis."
      },
      {
        "title": "Pocket bukan arcade Neo Geo",
        "body": "Neo Geo Pocket memakai image handheld, bukan set arcade multi-berkas yang terkait dengan Neo Geo MVS. Arsip BIOS arcade tidak dapat menggantikan image Pocket. Uji diagonal dan kedua tombol aksi dengan tata letak bawaan. Layar Pocket asli bersifat monokrom; hanya Pocket Color yang semestinya menampilkan grafis model warna. Menjalankan arcade adalah kemampuan Plus yang terpisah."
      },
      {
        "title": "Pengalihan inti dan menjaga progres",
        "body": "Mengganti inti emulator memerlukan Retropa Plus, bahkan ketika sistem handheld itu sendiri tersedia tanpa pembelian. Bandingkan hanya inti yang mencakup sistem dan format berkas sekaligus. Pilihan diingat per game; cadangkan simpanan game itu sendiri dan status simpan inti asal sebelum menguji adegan yang sama untuk perbedaan suara, gambar, dan masukan.",
        "points": [
          "Status simpan merekam keadaan internal inti tertentu; jangan berharap ada kompatibilitas antar-inti.",
          "Cadangkan dan verifikasi juga simpanan dalam game; migrasi otomatis tidak dijamin.",
          "Mengganti inti tidak mengonversi berkas game atau menyediakan BIOS yang belum ada."
        ]
      },
      {
        "title": "Di mana perbandingan tersedia dan tidak tersedia",
        "body": "Katalog mencantumkan alternatif untuk Game Boy Advance, tetapi hanya mencantumkan Ares untuk model WonderSwan dan Neo Geo Pocket. Pengalihan inti dengan Plus tidak menambahkan implementasi lain untuk sistem tersebut. Ares juga memiliki cakupan upstream yang jauh lebih luas daripada integrasi ini; gunakan hanya cakupan Retropa yang tercantum di sini daripada menganggap sistem upstream lain dapat diaktifkan dengan mengganti ekstensi."
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Dapatkah dukungan Pocket pada Ares menjalankan set arcade Neo Geo saya?",
        "answer": "Tidak. Pocket dan arcade Neo Geo adalah keluarga perangkat keras yang berbeda dengan kebutuhan berkas yang berbeda. Menjalankan arcade memerlukan Retropa Plus."
      },
      {
        "id": "alternate",
        "question": "Apakah Plus menambahkan inti WonderSwan atau Pocket lain?",
        "answer": "Tidak. Sistem tersebut saat ini hanya mencantumkan Ares di katalog Retropa. Pengalihan berlaku jika ada alternatif yang kompatibel."
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
    "label": "Alternatif Delta",
    "title": "Alternatif Emulator Delta untuk iPhone & iPad | Retropa",
    "description": "Mencari alternatif Delta untuk iPhone dan iPad? Bandingkan dukungan arcade, impor skin Delta, filter layar, dan mode konsol, termasuk saat Delta menjadi pilihan yang lebih kuat.",
    "summary": "Retropa adalah emulator arcade & handheld untuk iPhone dan iPad yang mengimpor skin Delta secara langsung, menambahkan keluarga arcade dan filter layar tanpa skala bilangan bulat, serta mempertahankan antarmuka yang mengutamakan handheld.",
    "sections": [
      {
        "title": "Apa yang terbawa dari Delta",
        "body": "Beralih emulator hanya bermanfaat jika pengaturan Anda yang sudah ada tetap terbawa. Retropa mengimpor paket .deltaskin Delta, sehingga tata letak yang sudah Anda sesuaikan tidak perlu dibangun ulang dari awal. Periksa bahwa paket itu menyasar sistem dan orientasi yang Anda mainkan, lalu pastikan tampilan game tidak terhalang.",
        "points": [
          "Paket .deltaskin dapat diimpor langsung.",
          "Periksa sistem yang dituju sebelum mengandalkan sebuah skin.",
          "Dukungan lanskap dan potret bergantung pada paketnya."
        ]
      },
      {
        "title": "Di mana Retropa menambah sesuatu yang tidak dimiliki Delta",
        "body": "Perbedaan yang paling jelas adalah dukungan arcade. Retropa menjalankan keluarga arcade CPS I, CPS II, CPS III, Neo Geo, PGM, dan M92 yang didukung bersama sistem handheld, sehingga satu pustaka mencakup keduanya. Inti arcade memerlukan Retropa Plus, dan game serta berkas BIOS tidak disertakan.",
        "points": [
          "Keluarga arcade berada di pustaka yang sama dengan handheld.",
          "Retropa Plus diperlukan untuk inti arcade.",
          "Set arcade terdiri dari banyak berkas dan mungkin memerlukan BIOS."
        ]
      },
      {
        "title": "Filter layar tanpa syarat skala bilangan bulat",
        "body": "Banyak filter retro mengasumsikan gambar game dipetakan ke jumlah piksel layar yang bulat. Pada iPhone modern, area yang tersedia jarang terbagi rata, sehingga menyisakan ruang kosong atau garis pindai yang tidak rata. Filter lanjutan Retropa bekerja dari area keluaran yang sebenarnya, di semua orientasi dan tata letak skin. App iOS adalah acuannya; pratinjau peramban di situs ini hanyalah perkiraan.",
        "points": [
          "Filter mengubah penyajian, bukan resolusi game.",
          "Filter lanjutan memerlukan Retropa Plus.",
          "Lapisan garis pindai konvensional dapat berkedip pada skala pecahan."
        ]
      },
      {
        "title": "Di mana Delta menjadi pilihan yang lebih kuat",
        "body": "Delta memiliki basis pengguna yang jauh lebih besar, rekam jejak yang lebih panjang di App Store, dan komunitas skin terbitan yang lebih luas. Jika Anda menginginkan opsi yang paling banyak digunakan, katalog skin yang paling lengkap, atau tutorial pihak ketiga terbanyak, Delta adalah pilihan yang wajar dan halaman ini tidak akan berpura-pura sebaliknya.",
        "points": [
          "Delta memiliki komunitas yang lebih besar dan materi pihak ketiga yang lebih banyak.",
          "Delta mendapat manfaat dari efek jaringan di sekitar skin.",
          "Retropa adalah produk yang lebih baru dengan katalog yang lebih kecil."
        ]
      },
      {
        "title": "Mencoba keduanya tidak memerlukan biaya",
        "body": "Kedua app dapat diunduh gratis dengan pembelian dalam app yang bersifat opsional. Pendekatan praktisnya adalah mengimpor skin Delta ke Retropa, memuat satu game handheld dan satu set arcade, lalu memutuskan berdasarkan bagaimana kontrol dan gambar terasa di perangkat Anda.",
        "points": [
          "Gratis diunduh untuk keduanya.",
          "Simpan berkas dan skin asli Anda dalam kedua pilihan.",
          "Nilai di perangkat Anda sendiri, bukan dari tabel perbandingan."
        ]
      }
    ],
    "faqs": [
      {
        "id": "import-skins",
        "question": "Dapatkah Retropa mengimpor skin Delta saya yang sudah ada?",
        "answer": "Ya. Retropa mengimpor paket .deltaskin. Simpan berkas paket aslinya dan periksa bahwa paket tersebut menyasar sistem dan orientasi yang Anda mainkan."
      },
      {
        "id": "free",
        "question": "Apakah Retropa gratis?",
        "answer": "Retropa dapat diunduh gratis dengan pembelian dalam app yang opsional. Inti arcade, skin premium, dan filter lanjutan memerlukan Retropa Plus. Harga ditampilkan di dalam app."
      },
      {
        "id": "roms",
        "question": "Apakah Retropa menyertakan game?",
        "answer": "Tidak. Retropa adalah emulator dan tidak menyediakan game atau berkas BIOS. Impor hanya konten yang berhak Anda gunakan."
      },
      {
        "id": "which-better",
        "question": "Emulator mana yang lebih baik?",
        "answer": "Keduanya dioptimalkan untuk hal yang berbeda. Delta memiliki komunitas dan katalog skin yang lebih besar; Retropa menambahkan keluarga arcade, filter tanpa skala bilangan bulat, dan impor skin Delta. Coba keduanya di perangkat Anda sendiri."
      }
    ],
    "attribution": "Delta adalah produk pihak ketiga. Semua nama produk dan perusahaan yang disebutkan di halaman ini adalah merek dagang milik pemiliknya masing-masing, dan penggunaannya di sini hanya untuk identifikasi dan perbandingan faktual. Retropa tidak berafiliasi dengan, tidak didukung oleh, dan tidak disponsori oleh pihak mana pun di atas.",
    "related": [
      "retropa-vs-delta",
      "arcade",
      "delta-skins"
    ]
  },
  "retropa-vs-delta": {
    "kind": "compare",
    "slug": "retropa-vs-delta",
    "label": "Retropa dan Delta",
    "title": "Retropa vs Delta: Perbandingan Arcade, Filter & Skin",
    "description": "Perbandingan langsung Retropa dan Delta di iPhone dan iPad: sistem yang diemulasi, dukungan arcade, kompatibilitas skin, filter layar, dan mana yang lebih cocok untuk kebutuhan Anda.",
    "summary": "Retropa dan Delta sama-sama emulator iOS, tetapi keduanya dioptimalkan secara berbeda: Delta menawarkan komunitas dan katalog skin yang lebih besar, sedangkan Retropa menambahkan keluarga arcade dan filter layar tanpa skala bilangan bulat.",
    "sections": [
      {
        "title": "Sistem yang diemulasi",
        "body": "Kedua app mencakup sistem handheld yang paling banyak dicari orang. Retropa juga menjalankan keluarga arcade yang didukung, dan inilah perbedaan fungsional yang paling besar. Inti arcade memerlukan Retropa Plus; sistem handheld tidak.",
        "points": [
          "Cakupan handheld sebagian besar tumpang tindih.",
          "Keluarga arcade hanya ada di Retropa.",
          "Bermain arcade memerlukan Plus."
        ]
      },
      {
        "title": "Skin dan tata letak",
        "body": "Retropa mengimpor paket .deltaskin Delta, sehingga tata letak yang sudah Anda pakai dapat dipindahkan. Selain itu, ekosistem skin terbitan Delta lebih besar, dan hal ini penting jika menelusuri katalog yang luas termasuk yang Anda inginkan.",
        "points": [
          "Retropa mengimpor paket .deltaskin.",
          "Delta memiliki katalog terbitan yang lebih besar.",
          "Selalu pastikan paket mendukung sistem dan orientasi Anda."
        ]
      },
      {
        "title": "Filter layar",
        "body": "Retropa menyediakan filter CRT dan LCD lanjutan yang menyesuaikan diri dengan area keluaran sebenarnya, bukan menuntut faktor skala bilangan bulat, dan app ini dapat memakai rangkaian shader RetroArch termasuk preset .slang dan .slangp. Filter lanjutan memerlukan Plus. Pratinjau di situs web hanyalah perkiraan; app iOS adalah acuannya.",
        "points": [
          "Tidak ada syarat skala bilangan bulat untuk filter lanjutan.",
          "Dukungan rangkaian shader RetroArch tercantum untuk Retropa.",
          "Filter lanjutan memerlukan Plus."
        ]
      },
      {
        "title": "Komunitas, dokumentasi, dan rekam jejak",
        "body": "Delta sudah lebih lama ada di App Store, memiliki jauh lebih banyak pengguna, dan karena itu jauh lebih banyak dokumentasi komunitas, jawaban forum, serta panduan pihak ketiga. Retropa lebih baru dan lebih kecil. Siapa pun yang menyatakan sebaliknya tidak menggambarkan keadaan kedua produk saat ini.",
        "points": [
          "Delta memiliki riwayat App Store yang lebih panjang.",
          "Delta memiliki lebih banyak jawaban komunitas yang tersedia.",
          "Retropa memiliki basis pengguna yang lebih kecil saat ini."
        ]
      },
      {
        "title": "Cara memilih",
        "body": "Jika judul arcade penting bagi Anda, atau Anda menginginkan filter layar yang tidak mengasumsikan skala bilangan bulat, Retropa layak dipasang. Jika Anda menginginkan katalog skin terbesar dan materi komunitas terbanyak, Delta adalah pilihan yang lebih aman. Keduanya gratis diunduh, jadi saran yang jujur adalah menguji keduanya dengan berkas Anda sendiri.",
        "points": [
          "Gratis diunduh untuk keduanya.",
          "Tidak ada komitmen untuk menilai salah satunya.",
          "Keduanya mengharuskan Anda menyediakan berkas game sendiri."
        ]
      }
    ],
    "faqs": [
      {
        "id": "arcade",
        "question": "Apakah Delta mendukung game arcade?",
        "answer": "Perbandingan itu bukan hal yang dapat diverifikasi halaman ini. Yang dapat dinyatakan halaman ini adalah bahwa Retropa menjalankan keluarga arcade CPS, Neo Geo, PGM, dan M92 yang didukung, serta inti arcade memerlukan Retropa Plus."
      },
      {
        "id": "skins",
        "question": "Dapatkah saya memakai skin yang sama di keduanya?",
        "answer": "Retropa mengimpor paket .deltaskin Delta, sehingga paket yang berfungsi di Delta umumnya dapat diimpor ke Retropa. Periksa sistem tujuan dan orientasinya setelah impor."
      },
      {
        "id": "price",
        "question": "Berapa biayanya?",
        "answer": "Retropa dapat diunduh gratis dengan pembelian dalam app yang opsional. Retropa Plus diperlukan untuk inti arcade, skin premium, dan filter lanjutan. Harga terkini ditampilkan di dalam app."
      }
    ],
    "attribution": "Delta adalah produk pihak ketiga. Semua nama produk dan perusahaan yang disebutkan di halaman ini adalah merek dagang milik pemiliknya masing-masing, dan penggunaannya di sini hanya untuk identifikasi dan perbandingan faktual. Retropa tidak berafiliasi dengan, tidak didukung oleh, dan tidak disponsori oleh pihak mana pun di atas.",
    "related": [
      "delta-alternative",
      "delta-skins",
      "crt-filters"
    ]
  },
  "import-roms-iphone": {
    "kind": "guide",
    "slug": "import-roms-iphone",
    "label": "Impor game",
    "title": "Cara Impor Game di Retropa pada iPhone & iPad",
    "description": "Impor berkas game milik Anda ke Retropa di iPhone dan iPad: letak menu impor, penyebab gagal pada placeholder cloud, format yang didukung, serta langkah saat berkas ditolak.",
    "summary": "Panduan langkah demi langkah untuk mengimpor berkas game milik Anda ke Retropa, termasuk format berkas yang didukung, cara kerja wadah ZIP, dan cara memulihkan impor yang gagal.",
    "sections": [
      {
        "title": "Sebelum memulai",
        "body": "Retropa tidak menyertakan game atau berkas BIOS. Anda memerlukan berkas game yang berhak Anda gunakan dan tersimpan di perangkat itu sendiri. Simpan salinan asli di luar aplikasi agar kesalahan saat impor tidak pernah menghilangkan berkas aslinya.",
        "points": [
          "Impor hanya konten yang berhak Anda gunakan.",
          "Simpan cadangan terpisah untuk setiap berkas asli.",
          "Aplikasi ini gratis diunduh; game tidak disediakan."
        ]
      },
      {
        "title": "Langkah satu: pindahkan berkas ke perangkat",
        "body": "Unduh berkas tersebut sehingga tersimpan di penyimpanan lokal, bukan sebagai placeholder cloud. Inilah penyebab paling umum impor gagal: aplikasi Files menampilkan itemnya, tetapi datanya belum ada di perangkat, sehingga emulator tidak menerima apa pun yang dapat dipakai.",
        "points": [
          "Buka berkas sekali di aplikasi Files untuk memastikan sudah terunduh.",
          "Berkas yang tampak redup atau masih perlu diunduh adalah placeholder.",
          "Selesaikan unduhan sebelum mengimpor."
        ]
      },
      {
        "title": "Langkah dua: impor dari pustaka",
        "body": "Buka menu impor di pustaka Retropa lalu pilih berkasnya. Pastikan sistem terdeteksi dengan benar, kemudian jalankan game dengan tata letak bawaan sebelum mengganti skin atau filter, agar setiap masalah yang muncul nanti punya penyebab yang jelas."
      },
      {
        "title": "Format berkas yang didukung",
        "body": "Retropa menerima format berkas yang sesuai dengan sistem yang didukungnya, dan juga dapat membuka wadah ZIP serta RetroPack secara langsung. Ekstensi harus sesuai dengan sistemnya: berkas Game Boy adalah .gb, Game Boy Color adalah .gbc, Game Boy Advance adalah .gba, dan DS adalah .nds.",
        "points": [
          "Mengubah ekstensi tidak mengubah game dari satu sistem ke sistem lain.",
          "Wadah ZIP dan RetroPack dapat dibuka tanpa perlu diekstrak.",
          "Set arcade terdiri atas banyak berkas dan ditangani dengan cara berbeda."
        ]
      },
      {
        "title": "Saat impor gagal",
        "body": "Baca pesan kesalahan dengan saksama lebih dulu, lalu periksa tiga hal secara berurutan: apakah berkas sudah terunduh sepenuhnya, apakah ekstensinya sesuai dengan sistem, dan apakah berkasnya utuh dan bukan hasil unduhan yang belum selesai. Baru setelah pemeriksaan itu Anda perlu menduga ada masalah pada inti emulator.",
        "points": [
          "Selesaikan dulu unduhan yang belum tuntas.",
          "Pastikan ekstensi sesuai dengan sistem.",
          "Coba inti emulator alternatif untuk sistem tersebut sebelum menyerah."
        ]
      },
      {
        "title": "Berkas, simpanan, dan simpan status",
        "body": "Berkas game Anda, data simpanan milik game itu sendiri, dan simpan status emulator adalah tiga hal yang berbeda. Mengganti nama salah satunya menjadi nama lain tidak mengubah jenisnya. Cadangkan ketiganya sebelum berpindah inti emulator atau aplikasi, karena format simpan status tidak dapat dipindahkan ke semua inti.",
        "points": [
          "Simpan berkas game asli tanpa diubah.",
          "Cadangkan simpanan baterai dan simpan status secara terpisah.",
          "Jangan berharap simpan status dari satu inti dapat dimuat di inti lain."
        ]
      }
    ],
    "faqs": [
      {
        "id": "included",
        "question": "Apakah Retropa menyertakan game?",
        "answer": "Tidak. Retropa adalah emulator dan tidak menyediakan game atau berkas BIOS. Anda mengimpor berkas yang berhak Anda gunakan."
      },
      {
        "id": "cloud",
        "question": "Mengapa berkas saya tidak dapat diimpor?",
        "answer": "Penyebab paling umum adalah placeholder cloud, bukan berkas yang sudah terunduh. Buka berkas tersebut di aplikasi Files untuk memaksa unduhan, lalu impor kembali."
      },
      {
        "id": "zip",
        "question": "Bisakah saya mengimpor berkas ZIP?",
        "answer": "Retropa dapat membuka wadah ZIP dan RetroPack secara langsung, jadi mengekstrak biasanya tidak perlu kecuali alur impor tertentu memintanya."
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
    "label": "Kontroler",
    "title": "Menghubungkan Kontroler ke Retropa di iPhone & iPad",
    "description": "Pasangkan kontroler Bluetooth atau berkabel dengan iOS dan petakan di dalam Retropa, termasuk cara mendiagnosis tombol yang tidak terbaca atau pemetaan yang berubah tiap game.",
    "summary": "Pasangkan kontroler yang kompatibel dengan iOS terlebih dahulu, lalu verifikasi pemetaannya di dalam Retropa untuk setiap sistem dan game. Panduan ini membahas urutan pemasangan, kesalahan pemetaan yang umum, dan penggunaan kontroler bersama kontrol sentuh.",
    "sections": [
      {
        "title": "Pasangkan dengan iOS sebelum membuka Retropa",
        "body": "Kontroler harus dikenali iOS terlebih dahulu. Pasangkan di pengaturan sistem, pastikan kontroler merespons di sana, baru kemudian buka Retropa. Kontroler yang belum pernah dipasangkan di tingkat sistem tidak akan muncul di dalam aplikasi, apa pun yang Anda lakukan di pengaturannya.",
        "points": [
          "Pasangkan lebih dulu di pengaturan iOS.",
          "Pastikan kontroler merespons di tingkat sistem.",
          "Setelah itu, periksa kontroler di dalam Retropa."
        ]
      },
      {
        "title": "Pemetaan diperiksa per sistem, bukan sekali untuk semua",
        "body": "Retropa menyimpan tata letak kontrol per sistem, karena Game Boy membutuhkan enam masukan sedangkan pad SNES membutuhkan sepuluh. Perlakukan pemetaan sebagai pekerjaan per sistem: setelah memasangkan sekali, verifikasi penetapan tombol untuk setiap sistem yang benar-benar Anda mainkan.",
        "points": [
          "Game Boy: tombol arah, A, B, Start, Select.",
          "SNES menambahkan X, Y, L, dan R.",
          "Tata letak arcade menambahkan beberapa tombol aksi."
        ]
      },
      {
        "title": "Tombol yang sering terlupakan saat pengujian",
        "body": "Dalam praktiknya, kegagalan sering menumpuk pada masukan yang sama: tombol bahu pada pad enam tombol, Start dan Select yang mudah ditempatkan di luar jangkauan, serta arah diagonal yang lebih penting pada sistem yang kontroler aslinya memakai stik microswitch.",
        "points": [
          "Uji L dan R secara khusus saat memetakan.",
          "Pastikan Start dan Select mudah dijangkau.",
          "Uji arah diagonal, bukan hanya empat arah utama."
        ]
      },
      {
        "title": "Kontrol sentuh dan kontroler dapat digunakan bersama",
        "body": "Sebagian game membutuhkan interaksi sentuh yang tidak dapat digantikan pad fisik, terutama pada sistem dua layar. Membiarkan tata letak di layar tetap tersedia bersama kontroler yang sudah dipasangkan biasanya lebih praktis daripada bergantian antara keduanya.",
        "points": [
          "Jangan menonaktifkan kontrol sentuh jika game memakai layar sentuh.",
          "Pastikan overlay tidak menutupi tampilan game.",
          "Getaran dan tata letak sentuh dapat diatur secara terpisah."
        ]
      },
      {
        "title": "Saat tombol tidak terbaca",
        "body": "Periksa secara berurutan mulai dari kontroler: pastikan kontroler merespons di iOS, lalu di Retropa, kemudian di game yang jelas memakai tombol tersebut. Jika pemetaan tampak benar tetapi game mengabaikan masukan itu, bisa jadi game tersebut memang tidak memakai masukan tersebut, dan hal itu umum pada judul handheld generasi awal.",
        "points": [
          "Verifikasi kontroler lebih dulu di pengaturan iOS.",
          "Periksa pemetaan di dalam Retropa.",
          "Pastikan game benar-benar memakai tombol tersebut."
        ]
      }
    ],
    "faqs": [
      {
        "id": "which-controllers",
        "question": "Kontroler apa saja yang berfungsi?",
        "answer": "Kontroler yang didukung iOS dapat dipakai bersama Retropa. Pasangkan lebih dulu di pengaturan iOS, lalu periksa pemetaannya di dalam aplikasi."
      },
      {
        "id": "mapping-lost",
        "question": "Mengapa pemetaan saya berubah?",
        "answer": "Tata letak disimpan per sistem dan per game, jadi pemetaan yang Anda atur untuk satu sistem tidak otomatis berlaku pada sistem lain. Periksa pemetaan untuk sistem yang sedang Anda mainkan."
      },
      {
        "id": "touch",
        "question": "Apakah kontrol sentuh berhenti berfungsi saat memakai kontroler?",
        "answer": "Tidak. Kontrol sentuh tetap tersedia, dan itu berguna pada sistem yang gamenya memerlukan interaksi sentuh atau layar kedua."
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
    "label": "Simpanan",
    "title": "Simpan Status dan Putar Balik di Retropa | iPhone & iPad",
    "description": "Pahami perbedaan antara simpanan di dalam game, simpan status, dan putar balik di Retropa, cara memindahkan simpanan antar inti dengan aman, serta hal yang perlu diperiksa saat simpanan gagal dimuat.",
    "summary": "Simpanan di dalam game, simpan status emulator, dan putar balik adalah tiga mekanisme berbeda dengan tingkat portabilitas yang berlainan. Panduan ini menjelaskan fungsi masing-masing dan cara mencadangkannya dengan aman.",
    "sections": [
      {
        "title": "Tiga hal berbeda yang disebut simpanan",
        "body": "Simpanan milik game ditulis oleh game itu sendiri, simpan status merekam seluruh kondisi emulator pada satu waktu, dan putar balik memutar ulang riwayat terakhir. Ketiganya berperilaku berbeda, disimpan dengan cara berbeda, dan mengganti nama salah satunya menjadi nama lain tidak mengubah jenisnya.",
        "points": [
          "Simpanan di dalam game dibuat oleh game itu sendiri.",
          "Simpan status merekam seluruh kondisi emulator pada satu momen.",
          "Putar balik bergantung pada riwayat terakhir, bukan pada berkas tersimpan."
        ]
      },
      {
        "title": "Membuat dan memakai simpan status",
        "body": "Simpan status berguna sebelum bagian yang sulit, sebelum mengganti inti emulator, atau sebelum menerapkan filter baru, karena Anda dapat kembali ke momen yang sudah dipastikan aman. Simpan cepat dan muat cepat memang ditujukan untuk titik pemeriksaan jangka pendek semacam itu.",
        "points": [
          "Buat simpan status sebelum mengganti inti emulator.",
          "Simpan status adalah cara tercepat untuk membandingkan dua prasetel.",
          "Jadikan simpanan milik game sebagai catatan jangka panjang."
        ]
      },
      {
        "title": "Memindahkan simpanan antar inti emulator",
        "body": "Simpan status tidak dapat dipindahkan ke semua inti emulator, karena simpan status merekam kondisi internal satu implementasi tertentu. Simpanan baterai yang ditulis oleh game jauh lebih besar kemungkinannya berhasil dipindahkan. Cadangkan keduanya sebelum mengganti inti yang dipilih.",
        "points": [
          "Anggap simpan status sebagai khusus untuk inti tertentu.",
          "Simpanan baterai lebih andal saat dipindahkan.",
          "Cadangkan sebelum berganti inti emulator."
        ]
      },
      {
        "title": "Saat simpanan gagal dimuat",
        "body": "Periksa apakah simpanan tersebut data dalam game atau simpan status, apakah inti emulator berubah sejak simpanan dibuat, dan apakah versi aplikasi berubah. Jika simpan status gagal, muat simpanan milik game sebagai gantinya, karena jalur itu tidak bergantung pada format kondisi internal emulator.",
        "points": [
          "Pastikan inti emulator tidak berubah.",
          "Pastikan jenis simpanannya.",
          "Gunakan simpanan milik game sebagai cadangan bila memungkinkan."
        ]
      },
      {
        "title": "Membuat cadangan yang tetap bertahan",
        "body": "Simpan berkas game asli, simpanan milik game, dan setiap simpan status yang penting di tempat terpisah. iCloud atau salinan di komputer sama-sama baik; yang penting adalah satu kegagalan di aplikasi atau di perangkat tidak menghapus semua salinan sekaligus.",
        "points": [
          "Cadangkan berkas gamenya sendiri, bukan hanya simpanannya.",
          "Simpan simpanan terpisah dari berkas simpan status.",
          "Simpan setidaknya satu salinan di luar perangkat."
        ]
      }
    ],
    "faqs": [
      {
        "id": "difference",
        "question": "Apa perbedaan simpanan dan simpan status?",
        "answer": "Simpanan ditulis oleh game dan mewakili kemajuan dalam format milik game itu sendiri. Simpan status merekam seluruh kondisi emulator pada satu momen dan khusus untuk inti emulator yang membuatnya."
      },
      {
        "id": "rewind",
        "question": "Seberapa jauh saya dapat memutar balik?",
        "answer": "Putar balik memutar ulang riwayat terakhir dari memori, bukan memulihkan berkas tersimpan, sehingga jangkauannya dibatasi oleh buffer, bukan oleh jumlah slot simpanan yang tetap."
      },
      {
        "id": "transfer",
        "question": "Bisakah saya memindahkan simpanan ke emulator lain?",
        "answer": "Simpanan milik game lebih mudah dipindahkan. Simpan status bergantung pada format internal inti emulator tertentu dan tidak dapat diharapkan termuat di tempat lain."
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
    "label": "Pemecahan masalah",
    "title": "Game Tidak Mau Dimuat di Retropa? Hal yang Perlu Diperiksa",
    "description": "Urutan diagnosis untuk game yang tidak mau berjalan di Retropa: unduhan belum lengkap, ekstensi keliru, sistem terdeteksi salah, BIOS tidak ada, mapper tidak didukung, dan masalah khusus inti emulator.",
    "summary": "Ikuti urutan pemeriksaan yang tetap — kelengkapan unduhan, ekstensi, sistem yang terdeteksi, kebutuhan BIOS, lalu pilihan inti emulator — sebelum menyimpulkan bahwa sebuah berkas tidak dapat dipakai.",
    "sections": [
      {
        "title": "Ikuti urutan tetap, bukan dugaan",
        "body": "Sebagian besar kegagalan pemuatan berasal dari sedikit penyebab, dan memeriksanya dalam urutan yang konsisten menghindarkan pemborosan waktu. Urutan di bawah bergerak dari pemeriksaan termurah ke termahal, sehingga Anda berhenti begitu menemukan penyebab sebenarnya.",
        "points": [
          "Kelengkapan unduhan lebih dulu.",
          "Lalu ekstensi dan sistem yang terdeteksi.",
          "Kemudian BIOS dan pilihan inti emulator."
        ]
      },
      {
        "title": "Pemeriksaan satu: apakah berkas benar-benar ada di perangkat?",
        "body": "Jika berkas berupa placeholder cloud, emulator tidak menerima apa pun yang dapat dipakai meskipun berkas itu tampil di pustaka. Buka di aplikasi Files untuk memaksa unduhan, tunggu hingga selesai, lalu impor kembali.",
        "points": [
          "Item yang tampak redup atau berstatus menunggu belum terunduh.",
          "Selesaikan unduhan sebelum mencoba lagi.",
          "Inilah penyebab tunggal yang paling umum."
        ]
      },
      {
        "title": "Pemeriksaan dua: apakah ekstensi sesuai dengan sistem?",
        "body": "Setiap sistem punya ekstensi sendiri, dan ketidaksesuaian menghasilkan berkas yang tidak dapat ditafsirkan inti emulator. Mengganti nama ekstensi tidak mengubah apa pun, jadi berkas .gb yang diganti nama menjadi .gba tetap game Game Boy dan tidak akan berperilaku seperti judul Game Boy Advance.",
        "points": [
          ".gb, .gbc, .gba, dan .nds adalah sistem yang berbeda.",
          "Mengganti nama tidak pernah mengubah game.",
          "Pastikan sistem yang terdeteksi di pustaka."
        ]
      },
      {
        "title": "Pemeriksaan tiga: apakah BIOS atau set induk tidak ada?",
        "body": "Sebagian sistem dan keluarga arcade membutuhkan berkas BIOS tambahan, dan set arcade dapat bergantung pada set induk. Inti emulator melaporkan apa yang tidak ada; baca pesan itu dengan saksama, karena BIOS yang tidak ada dan set induk yang tidak ada adalah masalah berbeda dengan solusi berbeda.",
        "points": [
          "Baca teks kesalahan dengan saksama.",
          "neogeo.zip arcade bukan BIOS handheld.",
          "Retropa tidak menyediakan unduhan BIOS."
        ]
      },
      {
        "title": "Pemeriksaan empat: coba inti emulator lain",
        "body": "Beberapa sistem memiliki lebih dari satu inti emulator. Jika berkas sudah lengkap, namanya benar, dan tidak ada dependensi yang hilang, mengganti inti emulator adalah uji berikutnya, karena setiap inti berbeda dalam seberapa ketat meniru perangkat keras aslinya.",
        "points": [
          "Catat inti emulator mana yang gagal.",
          "Ganti inti emulator dan coba sekali lagi.",
          "Bandingkan dengan game kedua pada inti emulator yang sama."
        ]
      },
      {
        "title": "Apa yang perlu disertakan dalam permintaan dukungan",
        "body": "Jika game tetap tidak mau berjalan, informasi yang berguna adalah versi aplikasi, sistem, inti emulator yang dipilih, dan teks kesalahan yang muncul persis. Jangan lampirkan berkas game komersial atau BIOS, karena hal itu tidak diperlukan untuk mendiagnosis masalah dan tidak boleh dibagikan.",
        "points": [
          "Versi aplikasi dan sistem.",
          "Inti emulator yang dipilih dan teks kesalahan.",
          "Jangan pernah melampirkan berkas ROM atau BIOS komersial."
        ]
      }
    ],
    "faqs": [
      {
        "id": "black-screen",
        "question": "Game terbuka dengan layar hitam. Apa artinya?",
        "answer": "Biasanya unduhan belum lengkap, varian berkas tidak didukung, atau dependensi seperti BIOS tidak ada. Periksa unduhan lebih dulu, lalu ekstensi, kemudian teks kesalahan yang dilaporkan inti emulator."
      },
      {
        "id": "worked-before",
        "question": "Game tadinya berjalan, sekarang tidak. Mengapa?",
        "answer": "Periksa apakah versi aplikasi, inti emulator yang dipilih, atau lokasi berkas berubah. Simpan status bersifat khusus untuk inti tertentu, jadi simpan status yang dibuat inti lain dapat gagal dimuat meskipun gamenya sendiri masih berjalan."
      },
      {
        "id": "support",
        "question": "Apa yang sebaiknya saya sertakan saat meminta dukungan?",
        "answer": "Versi aplikasi, sistem, inti emulator yang dipilih, dan teks kesalahan yang muncul. Jangan lampirkan berkas game komersial atau BIOS."
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
    "title": "Retropa Plus: Yang Gratis dan Yang Perlu Plus",
    "description": "Fitur Retropa yang gratis dan yang memerlukan Retropa Plus: sistem handheld, keluarga arcade, skin premium, filter lanjutan, dan mode konsol. Harga terkini ditampilkan di dalam aplikasi.",
    "summary": "Retropa gratis diunduh. Emulasi handheld tersedia tanpa membayar; keluarga arcade, skin premium, dan filter tampilan lanjutan adalah bagian dari Retropa Plus. Harga terkini dan paket yang tersedia ditampilkan di dalam aplikasi.",
    "sections": [
      {
        "title": "Apa yang tersedia gratis",
        "body": "Mengunduh Retropa tidak memerlukan biaya, dan emulasi handheld berfungsi tanpa pembelian. Anda dapat mengimpor berkas game sendiri, memakai skin standar, memakai prasetel tampilan konvensional, serta menyiapkan simpan status dan pemetaan kontroler. Tidak ada bagian dari proses impor berkas yang memicu pembayaran.",
        "points": [
          "Unduhan gratis.",
          "Sistem handheld tersedia tanpa pembelian.",
          "Skin standar dan prasetel tampilan konvensional sudah termasuk.",
          "Mengimpor game tidak pernah membuka atau mewajibkan fitur berbayar."
        ]
      },
      {
        "title": "Apa yang memerlukan Retropa Plus",
        "body": "Retropa Plus mencakup keluarga arcade, skin premium, dan filter tampilan lanjutan. Semuanya adalah kemampuan tambahan, bukan pembatasan atas apa yang sudah Anda miliki: permainan handheld tetap berfungsi baik Anda berlangganan maupun tidak.",
        "points": [
          "Keluarga arcade: CPS I, CPS II, CPS III, Neo Geo, PGM, M92.",
          "Skin premium.",
          "Filter CRT dan LCD lanjutan.",
          "Mode konsol dan alur kerja simpan yang lanjutan."
        ]
      },
      {
        "title": "Mengapa dukungan arcade menjadi bagian dari Plus",
        "body": "Emulasi arcade adalah bidang kerja tersendiri: beragam papan, set multi-berkas, dependensi BIOS, dan kompatibilitas per set. Dengan memperlakukannya sebagai kemampuan tambahan, tingkatan gratis tetap sederhana dan pengalaman handheld tetap tersedia untuk semua orang tanpa biaya.",
        "points": [
          "Perangkat keras arcade bukan perangkat keras handheld.",
          "Set arcade terdiri atas banyak berkas dan mungkin memerlukan BIOS.",
          "Dukungan handheld tidak bergantung pada Plus."
        ]
      },
      {
        "title": "Game dan berkas BIOS tidak pernah disertakan",
        "body": "Tidak ada tingkatan Retropa yang menyediakan berkas game atau berkas BIOS, karena aplikasi ini adalah emulator. Anda menyediakan sendiri konten yang berhak Anda gunakan, dan ketentuan itu tidak berubah dengan adanya pembelian. Langganan membuka kemampuan emulator, bukan konten.",
        "points": [
          "Tidak ada game yang disertakan pada tingkatan mana pun.",
          "Tidak ada berkas BIOS yang disediakan.",
          "Impor hanya konten yang berhak Anda gunakan."
        ]
      },
      {
        "title": "Di mana melihat harga terkini",
        "body": "Harga, paket yang tersedia, dan penawaran regional apa pun ditampilkan di dalam aplikasi, tempat App Store dapat menampilkannya dalam mata uang lokal Anda. Halaman ini sengaja tidak mencantumkan harga, agar perubahan harga tidak pernah membuat halaman ini usang.",
        "points": [
          "Harga ditampilkan di dalam aplikasi.",
          "Ketersediaan dapat berbeda menurut wilayah.",
          "Pembelian ditangani oleh App Store."
        ]
      },
      {
        "title": "Pembelian ditangani oleh App Store",
        "body": "Semua pembelian dan langganan diproses melalui App Store. Retropa tidak memproses pembayaran di web, dan situs ini tidak pernah meminta detail kartu. Perpanjangan, pembatalan, dan pengembalian dana diatur oleh App Store sesuai ketentuannya sendiri.",
        "points": [
          "Tidak ada pembayaran yang dipungut di situs ini.",
          "Kelola atau batalkan langganan di pengaturan App Store.",
          "Pengembalian dana mengikuti kebijakan App Store."
        ]
      }
    ],
    "faqs": [
      {
        "id": "free-enough",
        "question": "Bisakah saya memakai Retropa tanpa membayar?",
        "answer": "Bisa. Mengunduh Retropa gratis dan emulasi handheld berfungsi tanpa pembelian. Keluarga arcade, skin premium, dan filter lanjutan memerlukan Retropa Plus."
      },
      {
        "id": "price",
        "question": "Berapa biaya Retropa Plus?",
        "answer": "Harga dan paket yang tersedia ditampilkan di dalam aplikasi, tempat App Store dapat menampilkannya dalam mata uang lokal Anda. Halaman ini tidak mencantumkan harga agar perubahan harga tidak pernah membuatnya usang."
      },
      {
        "id": "buy-here",
        "question": "Bisakah saya berlangganan di situs ini?",
        "answer": "Tidak. Pembelian sepenuhnya ditangani melalui App Store. Situs ini tidak pernah memungut detail pembayaran."
      },
      {
        "id": "content",
        "question": "Apakah Plus menyertakan game?",
        "answer": "Tidak. Tidak ada tingkatan Retropa yang menyediakan berkas game atau BIOS. Anda mengimpor konten yang berhak Anda gunakan."
      }
    ],
    "related": [
      "arcade",
      "delta-skins",
      "crt-filters"
    ]
  },
}
