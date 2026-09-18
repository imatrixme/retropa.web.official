import type { StartPageContent } from "@/content/start-page/types"

/**
 * Start-page copy and questions for this locale. A locale without this file falls
 * back to the English source, so a page is only claimed as translated when it is.
 */
export const content: StartPageContent = {
  "metaTitle": "Cara mengimpor ROM di Retropa | Panduan iPhone dan iPad",
  "description": "Impor game GBA, DS, dan arcade di iPhone dan iPad. Jawaban seputar ROM, BIOS, skin Delta, kontroler, penyimpanan, Plus, dan filter lanjutan tanpa skala bilangan bulat.",
  "title": "Game pertama Anda di Retropa.",
  "intro": "Dari berkas yang Anda miliki menjadi game yang dapat dimainkan. Mulailah dari sistem perangkat genggam yang didukung, lalu sesuaikan kontrol dan gambarnya menurut selera Anda.",
  "steps": [
    [
      "Dapatkan Retropa",
      "Pasang Retropa dari App Store di iPhone atau iPad dengan iOS 18 atau lebih baru. Aplikasi ini gratis diunduh; sebagian fitur memerlukan Plus."
    ],
    [
      "Impor game Anda",
      "Buka entri impor di pustaka Anda dan pilih ROM yang didukung dari aplikasi Files. Untuk GBA, pakai berkas .gba; untuk DS, pakai berkas .nds. Simpan berkas aslinya sebagai cadangan. ROM dan berkas BIOS tidak disediakan."
    ],
    [
      "Buka dari pustaka Anda",
      "Pilih game yang sudah diimpor dan mulai bermain. Periksa kontrol di layar sebelum mengganti skin atau filter. Jika sebuah game tidak dapat dijalankan, periksa sistemnya, format berkasnya, dan BIOS yang diperlukan bila ada."
    ]
  ],
  "faqTitle": "Sebelum Anda mulai",
  "systems": "Periksa sistem yang didukung",
  "support": "Butuh bantuan?",
  "faqs": [
    {
      "id": "devices",
      "question": "iPhone dan iPad mana saja yang dapat menjalankan Retropa?",
      "answer": "Retropa tersedia melalui App Store untuk iPhone dan iPad dengan iOS 18 atau lebih baru. Periksa bagian kompatibilitas di App Store untuk perangkat Anda. Inti emulator arcade yang lebih berat dan filter tampilan berlapis dapat menuntut performa lebih tinggi daripada game perangkat genggam sederhana."
    },
    {
      "id": "systems",
      "question": "Apakah Retropa dapat memainkan game GBA, Nintendo DS, dan arcade?",
      "answer": "Retropa mendukung GBA, DS, serta sistem perangkat genggam dan konsol lain yang terdaftar, bersama keluarga arcade yang didukung seperti CPS, PGM, dan M92. Kompatibilitas bergantung pada aplikasi yang terpasang, inti emulator, dan format game; ini tidak berarti setiap game atau arsip arcade didukung.",
      "link": "cores",
      "linkLabel": "Lihat sistem dan format berkas yang didukung"
    },
    {
      "id": "games",
      "question": "Apakah Retropa menyertakan game atau ROM yang dapat diunduh?",
      "answer": "Tidak. Retropa adalah emulator, bukan layanan langganan game komersial atau toko ROM. Bawalah konten yang berhak Anda pakai, misalnya proyek Anda sendiri atau game homebrew yang diedarkan dengan izin. ROM komersial dan berkas BIOS tidak disediakan."
    },
    {
      "id": "import",
      "question": "Bagaimana cara mengimpor ROM GBA atau DS di iPhone?",
      "answer": "Simpan berkas game di lokasi yang dapat diakses melalui aplikasi Files di iOS. Buka entri impor di pustaka Retropa, pilih berkas yang didukung, lalu buka game hasil impor dari pustaka. GBA memakai .gba dan DS memakai .nds. Mengganti nama ekstensi berkas lain tidak mengubah game ke format yang benar."
    },
    {
      "id": "bios",
      "question": "Apakah saya memerlukan berkas BIOS untuk Retropa?",
      "answer": "Persyaratan BIOS berbeda-beda menurut sistem dan inti emulator. Jika Retropa melaporkan BIOS tidak ada, periksa persyaratan sistem tersebut dan sediakan berkas yang benar melalui alur yang didukung aplikasi. BIOS untuk sistem lain bukan penggantinya. Retropa tidak menyediakan unduhan BIOS.",
      "link": "cores",
      "linkLabel": "Periksa persyaratan sistem"
    },
    {
      "id": "arcade-zip",
      "question": "Mengapa ZIP atau ROM set arcade saya tidak mau dijalankan?",
      "answer": "Arsip arcade harus cocok dengan papan dan ROM set yang diharapkan inti emulatornya. Sebagian set juga bergantung pada set induk atau BIOS, sehingga ZIP klon saja bisa tidak lengkap. Simpan arsipnya utuh kecuali aplikasi meminta ekstraksi. Menjalankan arcade juga memerlukan Plus; langganan tidak dapat memperbaiki data ROM yang hilang atau tidak kompatibel."
    },
    {
      "id": "missing-file",
      "question": "Mengapa saya dapat melihat game di aplikasi Files tetapi tidak dapat mengimpornya?",
      "answer": "Pastikan berkas sebenarnya tersedia di perangkat, bukan hanya penanda di penyimpanan awan, dan formatnya cocok dengan sistem yang didukung. Periksa pesan galat yang ditampilkan Retropa. Simpan cadangan berkas asli selama menelusuri masalah impor, dan jangan menganggap ZIP yang diganti nama atau unduhan yang belum selesai sebagai ROM yang sah."
    },
    {
      "id": "offline",
      "question": "Dapatkah saya memainkan game yang tersimpan di perangkat tanpa streaming?",
      "answer": "Retropa menjalankan berkas game yang didukung di perangkat Anda, bukan streaming gambar permainan dari emulator di awan. Impor lebih dulu berkas game dan BIOS yang diperlukan. Mengunduh paket, mengambil informasi online, dan memakai fitur awan tetap memerlukan koneksi internetnya sendiri."
    },
    {
      "id": "delta-skins",
      "question": "Dapatkah saya memakai skin Delta di Retropa?",
      "answer": "Retropa mendukung impor paket .deltaskin. Gunakan paket yang lengkap, pilih tata letak untuk sistem yang sesuai, dan periksa dukungan posisi tegak atau mendatarnya. Dukungan format tidak menjamin setiap skin pihak ketiga pas untuk setiap iPhone. Kompatibilitas Delta menggambarkan sebuah format berkas, bukan keterkaitan.",
      "link": "delta-skins",
      "linkLabel": "Baca panduan impor skin Delta"
    },
    {
      "id": "controllers",
      "question": "Apakah Retropa mendukung kontroler Bluetooth atau kontroler eksternal?",
      "answer": "Retropa mendukung kontroler eksternal yang kompatibel dan pemetaan tombol yang dapat diatur. Hubungkan kontroler melalui iOS lebih dulu, lalu periksa pemetaannya di Retropa. Untuk game arcade, pastikan penetapan tombol koin dan mulai, bukan hanya tombol aksi. Kompatibilitas bergantung pada kontroler dan dukungan iOS."
    },
    {
      "id": "saves",
      "question": "Apakah penyimpanan di dalam game dan status penyimpanan emulator itu sama?",
      "answer": "Tidak. Penyimpanan di dalam game dibuat oleh game itu sendiri; status penyimpanan merekam jalannya emulator. Status penyimpanan dapat bergantung pada inti emulator dan versi yang tepat, jadi jangan menganggapnya dapat dipindahkan antar aplikasi atau inti emulator. Simpan berkas asli dan cadangan Anda sebelum memindahkan atau mengganti penyimpanan."
    },
    {
      "id": "plus",
      "question": "Apakah Retropa gratis, dan apa yang dibuka oleh Plus?",
      "answer": "Retropa gratis diunduh. Inti emulator arcade, skin premium, dan filter lanjutan memerlukan Retropa Plus. Paket langganan yang berlaku, harga menurut wilayah, dan syarat pembelian ditampilkan di dalam aplikasi sebelum pembelian. Unduhan gratis tidak berarti semua inti emulator atau sumber daya ikut disertakan."
    },
    {
      "id": "restore",
      "question": "Bagaimana cara memulihkan pembelian Retropa Plus sebelumnya?",
      "answer": "Gunakan tindakan pemulihan pembelian di aplikasi dengan Apple Account yang dipakai untuk pembelian awal. Pastikan pembelian atau langganan itu masih berlaku. Memulihkan hak akses tidak mengembalikan berkas ROM atau penyimpanan game yang hilang. Saat menghubungi dukungan, sertakan versi aplikasi dan masalah pembeliannya, bukan kata sandi akun."
    },
    {
      "id": "advanced-filters",
      "question": "Apa bedanya filter lanjutan Retropa dengan filter CRT biasa?",
      "answer": "Filter tampilan sederhana sering kali hanya melapisi garis pindai atau kisi piksel hasil sampel. Preset lanjutan Retropa seperti CRT V4 dan Trinitron memodelkan berkas sinar serta struktur fosfor dengan integrasi piksel keluaran atau penyaringan terbatas pita. DMG menyertakan sel kristal cair terintegrasi dan lapisan dasar reflektif. Semuanya adalah model layar, bukan sekadar lapisan warna.",
      "link": "crt-filters",
      "linkLabel": "Bandingkan filter tampilan lanjutan"
    },
    {
      "id": "integer-scaling",
      "question": "Apakah filter lanjutan Retropa memerlukan skala bilangan bulat?",
      "answer": "Tidak. Filter lanjutan Retropa memperhitungkan ukuran keluaran yang sebenarnya, bukan mengharuskan skala 2 kali, 3 kali, atau kelipatan bilangan bulat lain. Ini memberi Anda lebih banyak kebebasan menyesuaikan game dengan area tampilan ponsel, orientasi, atau skin pilihan Anda. Rasio aspek aslinya dapat tetap utuh. Hasilnya tetap bergantung pada preset dan perangkat; filter tidak menambah resolusi sumber.",
      "link": "crt-filters",
      "linkLabel": "Pelajari rendering berskala pecahan"
    },
    {
      "id": "shader-import",
      "question": "Dapatkah Retropa mengimpor shader .slang dan .slangp RetroArch?",
      "answer": "Retropa mendukung alur shader .slang dan .slangp. Satu preset dapat merujuk ke beberapa tahap atau tekstur; simpan berkas acuan itu bersama-sama saat mengimpor. Tidak setiap preset pihak ketiga dijamin berfungsi. Jika ada yang gagal, periksa berkas dan kompatibilitasnya, bukan mengganti namanya atau mengganti game.",
      "link": "crt-filters",
      "linkLabel": "Baca tentang kompatibilitas shader"
    },
    {
      "id": "performance",
      "question": "Apakah filter lanjutan memengaruhi laju bingkai atau daya tahan baterai?",
      "answer": "Bisa. Rendering berlapis memerlukan lebih banyak kerja GPU daripada gambar tanpa filter, dan biayanya berbeda-beda menurut preset, ukuran keluaran, perangkat, dan inti emulator. Bandingkan dengan gambar aslinya jika Anda merasa lambat, lalu coba filter yang lebih ringan. Skala tanpa bilangan bulat adalah fitur kualitas tampilan, bukan janji performa GPU tanpa batas."
    },
    {
      "id": "packages",
      "question": "Dari mana saya mendapatkan paket skin dan filter Retropa?",
      "answer": "Jelajahi paket skin dan shader di PackHub. Tinjau sistem, format, dan persyaratan Plus paket itu di dalam aplikasi. Sumber daya yang diimpor tidak melewati pemeriksaan hak akses. Jika Anda butuh bantuan, sertakan versi aplikasi, nama paket, dan pesan galat, tetapi jangan mengirim ROM komersial atau berkas BIOS."
    }
  ]
}
