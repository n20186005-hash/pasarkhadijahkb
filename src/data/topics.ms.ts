/**
 * Malay (Bahasa Melayu) translations for the 38 topic pages.
 * Each entry overrides only the localisable fields of the matching English topic.
 * Slugs, group, updated and related stay the same (language-neutral).
 */
import { getTopic, type Topic } from './topics';

export const TOPICS_MS: Record<string, Partial<Topic>> = {
  // ===================== A. VISIT =====================
  'opening-hours': {
    title: 'Waktu Operasi Pasar Siti Khadijah 2026 — Bila Buka & Tutup',
    h1: 'Waktu Operasi Pasar Siti Khadijah',
    description:
      'Waktu buka dan tutup harian Pasar Siti Khadijah, perbezaan mengikut aras, rehat solat Jumaat dan perubahan musim perayaan, dengan rujukan Tourism Kelantan dan Google Maps.',
    intro:
      'Pasar Siti Khadijah ialah pasar awam yang beroperasi, jadi waktu berubah mengikut aras, gerai dan musim. Gunakan panduan ini untuk mengurus jangkaan, kemudian sahkan pada hari lawatan.',
    sections: [
      {
        id: 'daily',
        heading: 'Waktu harian lazim',
        body: 'Semakan Google Maps pada 19 Oktober 2026 menyenaraikan pasar pada 07:30–17:30 setiap hari, manakala Tourism Kelantan menyatakan 07:00–18:00. Anggap ini sebagai julat rujukan, bukan jaminan bagi setiap gerai.',
      },
      {
        id: 'floors',
        heading: 'Waktu berbeza mengikut aras',
        body: 'Pasar hasil segar di aras bawah dan medan selera di atas biasanya mula paling awal dan ditutup dahulu. Gerai kain, cenderamata dan kraftangan mungkin buka lewat serta kekal dibuka sehingga lewat petang.',
      },
      {
        id: 'changes',
        heading: 'Bila waktu berubah',
        body: 'Cuti umum, Ramadan dan rehat peniaga boleh mengubah gerai individu. Tiada waktu tutup seragam yang disahkan, jadi semak peniaga yang ingin dikunjungi sebelum bertolak.',
      },
    ],
    faq: [
      { q: 'Pukul berapa Pasar Siti Khadijah dibuka?', a: 'Sumber menyatakan 07:00–07:30. Pasar hasil segar paling sibuk dari sekitar 08:00; datang ketika itu untuk pilihan paling lengkap.' },
      { q: 'Pukul berapa pasar ini tutup?', a: 'Sumber mencadangkan 17:30–18:00, tetapi tidak semua gerai kekal dibuka sehingga waktu itu. Rancang pembelian pada pagi dan awal petang.' },
      { q: 'Adakah pasar dibuka setiap hari?', a: 'Google Maps menyenaraikan operasi Isnin hingga Ahad. Gerai individu mungkin tutup pada cuti umum atau Ramadan; sahkan sebelum lawatan khas.' },
    ],
  },
  'friday-hours': {
    title: 'Jumaat di Pasar Siti Khadijah — Rehat Solat & Yang Masih Buka',
    h1: 'Jumaat di Pasar Siti Khadijah',
    description:
      'Cara solat Jumaat (Zohor) menjejaskan gerai di Pasar Siti Khadijah, apa yang kekal dibuka pada tengah hari, dan masa terbaik untuk datang pada Jumaat.',
    intro:
      'Jumaat ialah hari solat berjemaah mingguan di Kelantan, dan ia membentuk rentak pasar. Mengetahui corak ini membantu anda mengelak tiba pada waktu yang sunyi.',
    sections: [
      {
        id: 'prayer',
        heading: 'Tingkap solat tengah hari',
        body: 'Ramai peniaga berehat sekitar solat Zohor, lazimnya hampir 13:00–14:30. Sesetengah gerai tutup sepenuhnya; yang lain membiarkan ahli keluarga menjaga gerai.',
      },
      {
        id: 'open',
        heading: 'Apa yang kekal dibuka',
        body: 'Pasar hasil segar di aras bawah dan gerai makanan di atas cenderung kekal beroperasi, manakala peniaga kain dan cenderamata di aras atas lebih berkemungkinan berehat seketika.',
      },
      {
        id: 'tip',
        heading: 'Menentu masa lawatan Jumaat',
        body: 'Datang sebelum lewat pagi atau selepas lewat petang untuk menjumpai pelbagai gerai paling lengkap. Pagi lebih tenang dan sejuk.',
      },
    ],
    faq: [
      { q: 'Adakah pasar tutup pada Jumaat?', a: 'Tidak. Ia beroperasi pada Jumaat, tetapi jangkaan tingkap tengah hari yang lebih sunyi sekitar waktu solat.' },
      { q: 'Pukul berapa rehat solat Jumaat?', a: 'Lebih kurang 13:00–14:30, walaupun tingkap sebenar berbeza mengikut peniaga dan musim.' },
      { q: 'Adakah Jumaat masa yang baik untuk membeli-belah?', a: 'Ya, terutama sebelum lewat pagi atau selepas lewat petang. Elak bergantung pada tengah hari untuk gerai khusus.' },
    ],
  },
  'ramadan-hours': {
    title: 'Melawat Pasar Siti Khadijah Semasa Ramadan & Musim Perayaan',
    h1: 'Ramadan & Musim Perayaan',
    description:
      'Cara Ramadan dan cuti umum mengubah urusan niaga di Pasar Siti Khadijah, kehadiran membeli-belah sebelum Aidilfitri, dan peringatan untuk sahkan pada hari.',
    intro:
      'Semasa Ramadan dan sekitar Hari Raya, rentak pasar berubah. Urusan siang hari boleh lebih ringan, manakala petang dan hari sebelum Aidilfitri menjadi sibuk dengan membeli-belah perayaan.',
    sections: [
      {
        id: 'ramadan',
        heading: 'Urusan siang Ramadan',
        body: 'Sesetengah gerai mengurangkan waktu siang semasa Ramadan dan berurusan lebih pada waktu petang. Medan selera dan pasar hasil segar kekal paling aktif.',
      },
      {
        id: 'eid',
        heading: 'Kelompok sebelum Aidilfitri',
        body: 'Pada hari sebelum Hari Raya Aidilfitri, pasar dipenuhi pembeli yang membeli makanan, pakaian dan hadiah. Jangkaan orang ramai dan parkir terhad.',
      },
      {
        id: 'verify',
        heading: 'Sahkan sebelum pergi',
        body: 'Kerana waktu perayaan tidak seragam, semak dengan peniaga tertentu atau papan notis majlis perbandaran di lokasi sebelum membuat perjalanan jauh.',
      },
    ],
    faq: [
      { q: 'Adakah pasar dibuka semasa Ramadan?', a: 'Separa. Ramai gerai berurusan, selalunya dengan waktu siang dikurangkan dan lebih banyak aktiviti petang.' },
      { q: 'Bila ia paling sibuk sebelum Aidilfitri?', a: 'Beberapa hari sebelum Hari Raya ialah kemuncak membeli-belah perayaan.' },
      { q: 'Patutkah saya elak Ramadan untuk lawatan?', a: 'Tidak, tetapi pergi pada petang atau sahkan waktu gerai jika anda perlukan sesuatu tertentu.' },
    ],
  },
  'getting-there': {
    title: 'Cara ke Pasar Siti Khadijah — Teksi, Grab, Bas & Berjalan Kaki',
    h1: 'Cara ke Pasar',
    description:
      'Cara menuju ke Pasar Siti Khadijah dari lapangan terbang Kota Bharu, stesen pusat dan Wakaf Bharu, termasuk arah berjalan kaki dan petua teksi atas talian.',
    intro:
      'Pasar terletak di pusat bandar Kota Bharu di Jalan Buluh Kubu, dalam jarak berjalan kaki ke banyak bangunan warisan. Berikut ialah cara masuk yang praktikal.',
    sections: [
      {
        id: 'ride',
        heading: 'Perkhidmatan atas talian dan teksi',
        body: 'Aplikasi seperti Grab dan teksi tempatan menghubungkan pusat bandar. Tetapkan destinasi kepada “Pasar Siti Khadijah, Jalan Buluh Kubu” dan sahkan tambang sebelum bertolak.',
      },
      {
        id: 'station',
        heading: 'Dari stesen dan Wakaf Bharu',
        body: 'Stesen bas pusat Kota Bharu dan kawasan kereta api Wakaf Bharu menghubungkan ke bandar lain; dari situ, perjalanan singkat atau bas bandar membawa anda ke pasar.',
      },
      {
        id: 'walk',
        heading: 'Berjalan kaki dari pusat',
        body: 'Jika anda sudah berhampiran Dataran Merdeka, Masjid Muhammadi atau tebing sungai, pasar boleh dijalan kaki. Pakai pakaian ringan dan bawa air dalam cuaca panas.',
      },
    ],
    faq: [
      { q: 'Adakah pasar berhampiran pusat bandar?', a: 'Ya, ia di Bandar Kota Bharu, boleh dijalan kaki dari tarikan warisan utama.' },
      { q: 'Bolehkah saya guna Grab ke pasar?', a: 'Aplikasi atas talian dan teksi beroperasi di Kota Bharu; tetapkan pasar sebagai titik turun.' },
      { q: 'Bolehkah ia dijalan kaki dari masjid?', a: 'Masjid Muhammadi dan pasar berdekatan untuk dijalan kaki.' },
    ],
  },
  parking: {
    title: 'Tempat Letak Kereta Berhampiran Pasar Siti Khadijah — Di Mana Meletak Kereta',
    h1: 'Tempat Letak Kereta Berhampiran Pasar',
    description:
      'Parkir awam dan tepi jalan berhampiran Pasar Siti Khadijah, mengapa petak terdekat cepat penuh, dan petua meletak kereta beberapa jalan jauh.',
    intro:
      'Memandu ke pusat bandar Kota Bharu memerlukan perancangan parkir. Petak paling hampir dengan pasar cepat penuh pada waktu sibuk; berjalan kaki sejauh kecil sering menjimatkan masa.',
    sections: [
      {
        id: 'options',
        heading: 'Di mana meletak kereta',
        body: 'Parkir berbayar majlis perbandaran dan petak tepi jalan mengelilingi pusat bandar. Kadar dan ketersediaan mengikut papan tanda setempat yang ditetapkan oleh majlis perbandaran (MPKB-BRI); sahkan di lokasi.',
      },
      {
        id: 'peak',
        heading: 'Atasi waktu puncak',
        body: 'Pagi dan hujung minggu paling sibuk. Tiba sebelum 09:00 atau letak kereta beberapa jalan dari pasar dan berjalan kaki masuk.',
      },
      {
        id: 'pay',
        heading: 'Membayar parkir',
        body: 'Banyak petak menggunakan kupon atau mesin bayaran. Simpan wang kecil dan baca papan tanda; peraturan berbeza mengikut jalan dan masa.',
      },
    ],
    faq: [
      { q: 'Adakah parkir di pasar?', a: 'Terdapat parkir majlis perbandaran dan tepi jalan berhampiran, tetapi tiada lot besar khusus di bangunan.' },
      { q: 'Adakah parkir percuma?', a: 'Kebanyakan petak pusat bandar berbayar pada waktu operasi; semak papan tanda.' },
      { q: 'Di mana patut saya parkir elak orang ramai?', a: 'Beberapa jalan jauh dari pasar dan berjalan kaki masuk, terutama hujung minggu.' },
    ],
  },
  'best-time-to-visit': {
    title: 'Masa Terbaik Melawat Pasar Siti Khadijah — Waktu, Hari & Musim',
    h1: 'Masa Terbaik Melawat',
    description:
      'Waktu, hari dan musim terbaik untuk melawat Pasar Siti Khadijah, mengapa pagi sesuai untuk pasar hasil segar, dan bagaimana musim hujan Kelantan mempengaruhi rancangan.',
    intro:
      'Pemasaan mengubah apa yang anda lihat. Pagi memihak kepada pasar hasil segar dan berjalan kaki lebih sejuk, manakala hujung minggu lebih meriah tetapi sibuk.',
    sections: [
      {
        id: 'hour',
        heading: 'Waktu terbaik hari',
        body: 'Sasar 08:00–10:00. Pasar hasil segar paling lengkap, aras atas dibuka, dan haba lebih lembut berbanding tengah hari.',
      },
      {
        id: 'day',
        heading: 'Hari terbaik minggu',
        body: 'Hari bekerja lebih tenang; hujung minggu menarik lebih ramai pembeli. Jumaat mempunyai tingkap tengah hari yang lebih sunyi (lihat panduan Jumaat).',
      },
      {
        id: 'season',
        heading: 'Musim terbaik',
        body: 'Bulan lebih kering Kelantan (lebih kurang November hingga Februari) paling selesa. Musim hujan (lebih kurang Mei hingga Oktober) masih berfungsi kerana pasar berciri bumbung dan tertutup.',
      },
    ],
    faq: [
      { q: 'Apakah masa terbaik sehari?', a: 'Lebih kurang 08:00–10:00 untuk pilihan dan cuaca lebih sejuk.' },
      { q: 'Adakah pasar baik pada musim hujan?', a: 'Ya — ia bangunan berciri bumbung bertingkat, jadi hujan jarang merosakkan lawatan.' },
      { q: 'Berapa lama patut diperuntukkan?', a: 'Sekitar 1 hingga 2 jam untuk pasar sendiri, lebih lagi dengan muzium berhampiran.' },
    ],
  },
  'directions-from-kl': {
    title: 'Kota Bharu dari Kuala Lumpur — Penerbangan, Kereta Api & Memandu ke Pasar',
    h1: 'Ke Kota Bharu dari Kuala Lumpur',
    description:
      'Pilihan mengembara dari Kuala Lumpur ke Kota Bharu — terbang ke Lapangan Terbang Sultan Ismail Petra, kereta api ke Wakaf Bharu, atau memandu — dan perjalanan terakhir ke pasar.',
    intro:
      'Kota Bharu boleh dihubungi dari Kuala Lumpur melalui udara, rel dan jalan raya. Panduan ini merangkumi pilihan jarak jauh dan tunggangan terakhir ke pasar.',
    sections: [
      {
        id: 'fly',
        heading: 'Terbang',
        body: 'Lapangan Terbang Sultan Ismail Petra (KBR) berhampiran Kota Bharu dilayan oleh penerbangan domestik dari Kuala Lumpur. Dari lapangan terbang, perjalanan singkat ke pusat bandar dan pasar.',
      },
      {
        id: 'train',
        heading: 'Kereta api melalui Wakaf Bharu',
        body: 'Keretapi Tanah Melayu (KTM) menghubungkan Wakaf Bharu berhampiran Kota Bharu. Dari stesen, teruskan dengan teksi atau perkhidmatan atas talian ke pasar.',
      },
      {
        id: 'drive',
        heading: 'Memandu',
        body: 'Pemanduan dari Kuala Lumpur adalah jauh (lebih kurang lima hingga enam jam bergantung kepada hentian). Rancang hentian rehat dan ambil perhatian lebuh raya pantai timur menuju Kelantan.',
      },
    ],
    faq: [
      { q: 'Berapa jauh Kota Bharu dari Kuala Lumpur?', a: 'Melalui jalan raya lebih kurang lima hingga enam jam; terbang kira-kira sejam.' },
      { q: 'Lapangan terbang mana yang melayan Kota Bharu?', a: 'Lapangan Terbang Sultan Ismail Petra (KBR), jarak pendek dari pusat bandar.' },
      { q: 'Bolehkah saya naik kereta api?', a: 'Ya, KTM ke Wakaf Bharu, kemudian terus melalui jalan raya ke pasar.' },
    ],
  },
  'entrance-fee': {
    title: 'Pasar Siti Khadijah Percuma? Tiket Masuk, Membeli-belah & Kos',
    h1: 'Tiket Masuk & Kos',
    description:
      'Sama ada Pasar Siti Khadijah mengenakan bayaran tiket masuk, apa yang anda bayar, dan bagaimana harga berfungsi untuk makanan dan cenderamata di pasar awam.',
    intro:
      'Pasar Siti Khadijah ialah pasar awam, bukan tarikan berbayar tiket. Anda biasanya hanya membayar apa yang dibeli.',
    sections: [
      {
        id: 'free',
        heading: 'Tiada bayaran masuk',
        body: 'Berjalan melalui pasar dan melihat secara amnya tidak berkos. Hanya makanan, barangan dan perkhidmatan yang anda pilih untuk beli datang dengan harga.',
      },
      {
        id: 'pay',
        heading: 'Apa yang anda bayar',
        body: 'Jangkaan untuk membayar hidangan, hasil segar, tekstil, kraftangan dan cenderamata. Harga biasanya ditetapkan setiap gerai; sesetengah boleh dirunding, terutama pembelian besar.',
      },
      {
        id: 'cash',
        heading: 'Tunai dan pembayaran',
        body: 'Gerai kecil sering memilih tunai. Sesetengah peniaga menerima pembayaran tanpa tunai, tetapi bawa wang kecil supaya anda tidak terkandas di gerai yang tidak menerimanya.',
      },
    ],
    faq: [
      { q: 'Adakah bayaran tiket masuk?', a: 'Biasanya tidak — ia pasar awam yang boleh dimasuki dan dilihat secara percuma.' },
      { q: 'Perlukah saya bayar untuk mengambil gambar?', a: 'Tiada bayaran, tetapi minta peniaga sebelum memotret mereka atau barangan mereka sebagai tanda hormat.' },
      { q: 'Adakah harga tetap?', a: 'Ramai yang tetap; tawar-menawar lebih biasa untuk cenderamata dan pembelian pukal berbanding makanan.' },
    ],
  },
  accessibility: {
    title: 'Kebolehcapaian di Pasar Siti Khadijah — Lif, Warga Emas & Troli',
    h1: 'Kebolehcapaian & Keselesaan Keluarga',
    description:
      'Nota kebolehcapaian praktikal untuk Pasar Siti Khadijah: lif antara aras, petua troli dan warga emas, serta amaran lantai basah di pasar sibuk.',
    intro:
      'Pasar merangkumi beberapa aras, jadi rancang pergerakan dengan lif dan eskalator jika ada. Keadaan berbeza, jadi beri masa tambahan.',
    sections: [
      {
        id: 'lifts',
        heading: 'Bergerak antara aras',
        body: 'Bangunan menghubungkan aras dengan lif dan eskalator, tetapi ketersediaan dan panjang giliran berubah sepanjang hari. Sahkan di lokasi dan biarkan rakan kurang upaya atau warga emas menentu rentak.',
      },
      {
        id: 'stroller',
        heading: 'Troli dan kanak-kanak kecil',
        body: 'Troli teguh berfungsi di laluan lebih luas, walaupun lorong sempit apabila sibuk. Pembawa bayi boleh lebih mudah pada waktu puncak.',
      },
      {
        id: 'floor',
        heading: 'Lantai basah dan tapak',
        body: 'Lantai pasar hasil segar boleh basah dan licin. Pakai kasut melekat, awasi tepi anak tangga, dan jaga kanak-kanak berhampiran bahagian hasil.',
      },
    ],
    faq: [
      { q: 'Adakah terdapat lif?', a: 'Pasar menghubungkan aras dengan lif dan eskalator, walaupun ketersediaan berbeza; semak di lokasi.' },
      { q: 'Adakah mesra troli?', a: 'Sebahagian besarnya ya, tetapi lorong sempit apabila sibuk; pembawa mungkin lebih mudah pada waktu puncak.' },
      { q: 'Adakah sesuai untuk warga emas?', a: 'Ya, dengan lif dan rentak lebih perlahan; elak kesesakan tengah hari pada hujung minggu.' },
    ],
  },
  'floors-guide': {
    title: 'Panduan Aras Pasar Siti Khadijah — Apa di Setiap Tingkat',
    h1: 'Panduan Mengikut Aras',
    description:
      'Panduan aras demi aras Pasar Siti Khadijah: hasil segar, medan selera, tekstil dan kraftangan, dengan nota susun atur dan kemudahan.',
    intro:
      'Pasar paling difahami aras demi aras. Panduan ini memetakan kategori luas supaya anda boleh merancang aras mana hendak dimulakan.',
    sections: [
      {
        id: 'ground',
        heading: 'Aras bawah — pasar hasil segar',
        body: 'Aras tanah dan dagangan bawah memegang hasil segar, herba, rempah, daging, ikan dan bahan dapur — pusat berwarna pasar yang beroperasi.',
      },
      {
        id: 'food',
        heading: 'Aras medan selera',
        body: 'Aras khusus menghidang makanan Kelantan dimasak dan kudapan. Tempat mencuba nasi kerabu, laksam dan kuih tradisional pada harga tempatan.',
      },
      {
        id: 'upper',
        heading: 'Aras atas — tekstil dan kraf',
        body: 'Aras lebih tinggi memusatkan tekstil, pakaian Muslim wanita, songket, batik dan kraftangan. Di sinilah ramai peniaga wanita beroperasi.',
      },
    ],
    faq: [
      { q: 'Aras mana ada makanan?', a: 'Aras medan selera pasar menghidang hidangan masak dan kudapan.' },
      { q: 'Di mana cenderamata?', a: 'Kraftangan, songket dan batik berada di aras dagangan atas.' },
      { q: 'Adakah terdapat direktori gerai?', a: 'Direktori penyewa yang disahkan tidak diterbitkan; ikut papan tanda aras dan tanya peniaga di lokasi.' },
    ],
  },
  'what-to-buy': {
    title: 'Apa Nak Dibeli di Pasar Siti Khadijah — Cenderamata & Barangan Kelantan',
    h1: 'Apa Nak Dibeli',
    description:
      'Senarai membeli-belah praktikal untuk Pasar Siti Khadijah: songket, batik, perak, rotan, snek tempatan dan apa hendak semak sebelum beli.',
    intro:
      'Aras atas ialah persinggahan pemburu cenderamata. Fokus kepada barangan Kelantan yang tersendiri dan sahkan bahan, saiz dan harga sebelum membayar.',
    sections: [
      {
        id: 'textiles',
        heading: 'Tekstil dan pakaian',
        body: 'Cari songket (tenunan benang emas dan perak), batik, telekung dan pakaian Melayu. Semak tenunan, berat dan penjagaan sebelum membeli.',
      },
      {
        id: 'crafts',
        heading: 'Kraftangan dan hadiah',
        body: 'Perak, rotan, kerja kayu dan produk tempatan menjadikan hadiah mudah dibawa. Tanya tentang keaslian dan sama ada item buatan tangan.',
      },
      {
        id: 'food',
        heading: 'Hadiah makanan',
        body: 'Serunding (daging atau ikan pedas kering), snek dibungkus dan rempah tahan perjalanan. Sahkan tarikh luput dan meterai untuk perjalanan pulang.',
      },
    ],
    faq: [
      { q: 'Apa yang Kelantan terkenal?', a: 'Songket, batik dan kuih tradisional adalah pembelian tandatangan.' },
      { q: 'Bolehkah saya tawar?', a: 'Sedikit rundingan adalah biasa untuk kraf dan pembelian pukal; harga makanan biasanya tetap.' },
      { q: 'Apa yang tahan perjalanan sebagai hadiah?', a: 'Snek meterai, serunding dan kraf kecil paling mudah dibawa pulang.' },
    ],
  },
  'visitor-tips': {
    title: 'Petua Pelawat Pasar Siti Khadijah — 10 Perkara Sebelum Pergi',
    h1: 'Petua Pelawat',
    description:
      'Sepuluh petua praktikal melawat Pasar Siti Khadijah: pakaian, tunai, etika tawar-menawar, fotografi, keselamatan dan pemasaan, dengan pautan ke panduan lanjut.',
    intro:
      'Senarai semak pantas sebelum pergi, diambil daripada panduan praktikal di laman ini. Tiada nasihat komersial — hanya cara bergerak dengan selesa.',
    sections: [
      {
        id: 'prepare',
        heading: 'Sebelum anda keluar',
        body: 'Bawa wang tunai kecil, pakai pakaian ringan bernafas dan kasut melekat, dan sasar ketibaan pagi. Cas telefon untuk peta dan gambar.',
      },
      {
        id: 'onsite',
        heading: 'Semasa membeli-belah',
        body: 'Tanya harga dengan sopan, beri ruang kepada peniaga, dan sahkan bahan serta saiz untuk kraf. Fotografi orang hanya selepas meminta.',
      },
      {
        id: 'safety',
        heading: 'Keselesaan dan keselamatan',
        body: 'Awasi lantai basah, jaga barang berharga dalam orang ramai, dan kekal terhidrat. Pasar berciri bumbung, jadi haba dan hujan jarang menjadi masalah di dalam.',
      },
    ],
    faq: [
      { q: 'Apa yang patut saya pakai?', a: 'Pakaian ringan dan sopan sesuai untuk pasar dan masjid berhampiran; kasut selesa membantu di lantai basah.' },
      { q: 'Adakah selamat untuk pelancong?', a: 'Ia pasar awam yang sibuk; kekal sedar barang dalam orang ramai dan anda akan baik.' },
      { q: 'Ada apa yang tidak patut saya lepaskan?', a: 'Medan selera dan tekstil aras atas adalah pengalaman paling tersendiri.' },
    ],
  },

  // ===================== B. FOOD =====================
  'food-near-market': {
    title: 'Makanan Berhampiran Pasar Siti Khadijah — Tempat Penduduk Makan',
    h1: 'Makanan Berhampiran Pasar',
    description:
      'Di mana hendak makan sekitar Pasar Siti Khadijah: medan selera dalam pasar ditambah kedai makan Kelantan berhampiran, dikelompokkan mengikut jenis.',
    intro:
      'Lapar adalah sebahagian daripada pengalaman pasar. Panduan ini merangkumi medan selera di dalam dan kedai makan santai dalam jarak berjalan kaki.',
    sections: [
      {
        id: 'incourt',
        heading: 'Di dalam medan selera',
        body: 'Aras makanan pasar menghidang makanan ruji Kelantan pada harga tempatan. Pergi awal untuk pilihan masakan segar paling luas.',
      },
      {
        id: 'around',
        heading: 'Dalam jarak berjalan kaki',
        body: 'Jalan sekitar pasar memegang kedai makan kecil dan kelompok gerai. Cari pakar nasi, mi dan kuih dan bukannya mengejar satu alamat terkenal.',
      },
      {
        id: 'types',
        heading: 'Apa hendak cari',
        body: 'Utamakan nasi kerabu, nasi dagang, laksam, ayam percik dan kuih tradisional. Ini rasa yang mentakrifkan berjalan kaki makanan Kota Bharu.',
      },
    ],
    faq: [
      { q: 'Adakah terdapat makanan di dalam pasar?', a: 'Ya, aras medan selera menghidang hidangan dan kudapan Kelantan dimasak.' },
      { q: 'Adakah pilihan halal?', a: 'Kedai makan Kelantan sangat halal; lihat panduan makanan halal untuk konteks.' },
      { q: 'Apa patut saya cuba dahulu?', a: 'Nasi kerabu atau nasi dagang dari medan selera adalah permulaan klasik.' },
    ],
  },
  'nasi-kerabu': {
    title: 'Nasi Kerabu Kota Bharu — Panduan Nasi Biru Kelantan',
    h1: 'Nasi Kerabu',
    description:
      'Apa itu nasi kerabu, mengapa ia biru, cara dihidang di Kota Bharu, dan di mana menjumpainya berhampiran Pasar Siti Khadijah, dengan nota budaya.',
    intro:
      'Nasi kerabu ialah hidangan panggilan kad Kelantan: nasi dicelup bunga telang dan ditimbun dengan herba, sambal dan protein.',
    sections: [
      {
        id: 'what',
        heading: 'Apa ia',
        body: 'Nasi mendapat warna biru daripada bunga telang (clitoria). Ia dihidang dengan ulam (herba), sambal, keropok dan pilihan seperti ayam goreng, daging atau ikan.',
      },
      {
        id: 'where',
        heading: 'Di mana menjumpainya',
        body: 'Medan selera pasar dan gerai berhampiran menghidang nasi kerabu, selalunya dari awal pagi. Ketersediaan mengikut waktu buka gerai.',
      },
      {
        id: 'culture',
        heading: 'Nota budaya',
        body: 'Nasi kerabu mencerminkan masakan Melayu Kelantan yang kaya herba. Tourism Kelantan menonjolkannya sebagai tandatangan negeri; cubanya sebagai sebahagian berjalan kaki makanan.',
      },
    ],
    faq: [
      { q: 'Mengapa nasi biru?', a: 'Ia diwarnakan secara semula jadi dengan bunga telang, bukan pewarna tiruan.' },
      { q: 'Adakah nasi kerabu pedas?', a: 'Ia datang dengan sambal, jadi kepedasan berbeza; minta kurang jika anda suka ringan.' },
      { q: 'Adakah ia tersedia di pasar?', a: 'Ya, aras medan selera biasanya menawarkannya pada waktu pagi.' },
    ],
  },
  'nasi-dagang': {
    title: 'Nasi Dagang di Kelantan — Nasi Santan & Kari Ikan',
    h1: 'Nasi Dagang',
    description:
      'Nasi dagang Kelantan dijelaskan: nasi santan, kari ikan, bagaimana ia berbeza dari nasi kerabu, dan di mana memakannya berhampiran pasar.',
    intro:
      'Nasi dagang ialah ruji nasi Kelantan yang lain — nasi pulut-santan berpasangan dengan kari ikan berempah kaya.',
    sections: [
      {
        id: 'what',
        heading: 'Apa ia',
        body: 'Nasi ialah campuran bijirin putih dan pulut dimasak dalam santan, dihidang dengan kari ikan (gulai) masam berempah, sambal dan tambahan.',
      },
      {
        id: 'vs',
        heading: 'Nasi dagang berbanding nasi kerabu',
        body: 'Nasi kerabu biru dan kering; nasi dagang kaya santan dengan kari. Kedua-duanya adalah ruji sarapan condong di Kelantan.',
      },
      {
        id: 'where',
        heading: 'Di mana memakannya',
        body: 'Carinya di medan selera pasar dan kelompok gerai pagi. Ia habis dijual, jadi lebih awal lebih baik.',
      },
    ],
    faq: [
      { q: 'Adakah nasi dagang sama dengan nasi kerabu?', a: 'Tidak — nasi dagang nasi santan dengan kari ikan; nasi kerabu nasi biru herba.' },
      { q: 'Bila ia dihidang?', a: 'Kebanyakannya sarapan dan pagi; ia boleh habis dijual menjelang tengah hari.' },
      { q: 'Adakah pedas?', a: 'Kari ada kehangatan; minta lebih ringan jika perlu.' },
    ],
  },
  'kelantan-street-food': {
    title: 'Makanan Jalanan Kelantan — Laksam, Nasi Berlauk & Lagi',
    h1: 'Makanan Jalanan Kelantan',
    description:
      'Panduan medan makanan jalanan Kelantan: laksam, nasi berlauk, roti titab dan gigitan tempatan lain, dengan nota pemasaan dan etika.',
    intro:
      'Di sebalik dua hidangan nasi terkenal, jalanan Kelantan menawarkan mi sedut dan plat snek yang patut diburu.',
    sections: [
      {
        id: 'laksam',
        heading: 'Laksam',
        body: 'Gulungan mi beras lembut dalam kuah ikan bersantan pekat, ditambah herba. Ia kegemaran sarapan dan brunch di seluruh negeri.',
      },
      {
        id: 'berlauk',
        heading: 'Nasi berlauk',
        body: 'Nasi kosong atau santan dihidang dengan pelbagai kari kecil dan lauk — plat fleksibel, berpatutan yang anda bina mengikut rasa.',
      },
      {
        id: 'snacks',
        heading: 'Snek dan gigitan kecil',
        body: 'Roti titab (roti dengan santan dan telur) dan pelbagai kuih goreng atau kukus muncul di kelompok gerai pagi dan medan selera pasar.',
      },
    ],
    faq: [
      { q: 'Apa itu laksam?', a: 'Gulungan mi beras dalam kuah ikan bersantan, klasik sarapan Kelantan.' },
      { q: 'Adakah makanan jalanan murah?', a: 'Secara amnya ya; ia berharga tempatan, jadi bawa wang tunai kecil.' },
      { q: 'Bila makanan jalanan tersedia?', a: 'Pagi adalah terbaik; banyak gerai tutup menjelang petang.' },
    ],
  },
  'halal-food': {
    title: 'Makanan Halal Berhampiran Pasar Siti Khadijah & Kota Bharu',
    h1: 'Makanan Halal Berhampiran Pasar',
    description:
      'Konteks makanan halal untuk pelawat Muslim berhampiran Pasar Siti Khadijah: mengapa kebanyakan makanan Kota Bharu halal, apa hendak semak, dan nota etika.',
    intro:
      'Kelantan ialah negeri majoriti Muslim, jadi makanan halal adalah norma dan bukan pengecualian. Panduan ini menerangkan apa dijangka.',
    sections: [
      {
        id: 'norm',
        heading: 'Lalai ialah halal',
        body: 'Majoriti kedai makan dan gerai pasar di Kota Bharu menghidang makanan halal. Medan selera pasar mengikut jangkaan sama.',
      },
      {
        id: 'check',
        heading: 'Apa hendak semak',
        body: 'Jika ragu, cari tanda halal atau tanya peniaga. Item import atau istimewa mungkin berbeza, jadi sahkan untuk diet yang diperhatikan ketat.',
      },
      {
        id: 'etiquette',
        heading: 'Etika',
        body: 'Semasa Ramadan, makan di khalayak awam pada siang hari adalah sensitif; petang ialah masa sosial untuk makan di luar. Berpakaian sopan berhampiran kawasan makan dan masjid.',
      },
    ],
    faq: [
      { q: 'Adakah makanan pasar halal?', a: 'Ya, medan selera dan kedai berhampiran menghidang makanan halal secara lalai.' },
      { q: 'Perlukah saya risau halal?', a: 'Jarang, tetapi semak tanda atau tanya untuk diet diperhatikan ketat.' },
      { q: 'Ada nota Ramadan?', a: 'Elak makan awam siang hari semasa Ramadan sebagai tanda hormat.' },
    ],
  },
  'cafes-nearby': {
    title: 'Kafe Berhampiran Pasar Siti Khadijah — Kopi & Rehat Berpenyaman',
    h1: 'Kafe Berhampiran Pasar',
    description:
      'Di mana mengambil kopi dan rehat berpenyaman berhampiran Pasar Siti Khadijah, jenis kafe di Kota Bharu, dan bagaimana ia sesuai lawatan pasar.',
    intro:
      'Selepas berjalan kaki pasar yang berpeluh, kafe adalah set semula yang dialu-alukan. Pusat bandar Kota Bharu mempunyai penyebaran kafe santai yang semakin bertambah.',
    sections: [
      {
        id: 'types',
        heading: 'Apa dijangka',
        body: 'Jangkakan kedai kopi santai dan kopitiam moden yang menawarkan minuman sejuk, pencuci mulut tempatan dan penyaman udara. Mereka berada dalam jarak singkat atau tunggangan dari pasar.',
      },
      {
        id: 'when',
        heading: 'Bila menggunakannya',
        body: 'Pagi tengah atau selepas medan selera adalah masa baik untuk menyejukkan dan mengecas semula serta merancang perhentian seterusnya.',
      },
      {
        id: 'note',
        heading: 'Nota neutral',
        body: 'Panduan ini menerangkan jenis kafe dan kawasan, bukan perniagaan tertentu, supaya anda boleh memilih yang sesuai laluan dan bajet.',
      },
    ],
    faq: [
      { q: 'Adakah terdapat kafe berhampiran pasar?', a: 'Ya, pusat bandar sekitar pasar mempunyai kafe santai dan kopitiam.' },
      { q: 'Adakah kafe menghidang minuman tempatan?', a: 'Ramai menawarkan kedua-dua kopi dan minuman sejuk serta pencuci mulut tempatan.' },
      { q: 'Baik untuk rehat?', a: 'Ya — penyaman udara dan minuman sejuk menjadikan set semula tengah lawatan semula jadi.' },
    ],
  },
  'budu-tempoyak': {
    title: 'Budu & Tempoyak — Perisa Fermentasi Kelantan Diterangkan',
    h1: 'Budu & Tempoyak',
    description:
      'Perisa tandatangan Kelantan budu dan tempoyak: apa ia, cara penduduk memakannya, dan di mana membelinya di Pasar Siti Khadijah.',
    intro:
      'Dua perisa fermentasi mentakrifkan meja Kelantan — budu (sos ikan bilis) dan tempoyak (durian fermentasi). Kedua-duanya dijual di pasar.',
    sections: [
      {
        id: 'budu',
        heading: 'Budu',
        body: 'Budu ialah sos bilis fermentasi masin, umami, dimakan dengan nasi, limau, cili dan herba. Sedikit pergi jauh; cubanya dengan nasi kerabu.',
      },
      {
        id: 'tempoyak',
        heading: 'Tempoyak',
        body: 'Tempoyak ialah durian fermentasi, digunakan sebagai asas memasak atau lauk pedas. Rasanya kuat dan diperoleh — cuba sampel sebelum membeli bekas.',
      },
      {
        id: 'buy',
        heading: 'Membeli di pasar',
        body: 'Kedua-duanya muncul di kalangan gerai hasil segar dan dibungkus. Semak meterai dan kesegaran, terutama tempoyak, jika anda merancang membawanya.' },
    ],
    faq: [
      { q: 'Apa itu budu?', a: 'Sos bilis fermentasi masin, umami, digunakan sebagai perisa dengan nasi.' },
      { q: 'Apa itu tempoyak?', a: 'Durian fermentasi, berperisa kuat, digunakan dalam memasak atau sebagai lauk.' },
      { q: 'Bolehkah saya beli di pasar?', a: 'Ya, di gerai hasil segar dan dibungkus; semak meterai untuk perjalanan.' },
    ],
  },
  'kelantan-kuih': {
    title: 'Kuih Tradisional Kelantan — Akok, Jala Mas & Tahi Itik',
    h1: 'Kuih Tradisional Kelantan',
    description:
      'Kuih tradisional Kelantan — akok, jala mas, tahi itik dan lagi — apa ia, bila membeli, dan mengapa pasar adalah sumber baik.',
    intro:
      'Kuih Kelantan adalah kecil, kaya telur dan keemasan. Gerai snek pasar adalah tempat yang boleh dipercayai untuk melihat dan merasanya.',
    sections: [
      {
        id: 'akok',
        heading: 'Akok',
        body: 'Akok ialah kek bertekstur lembut seperti kustard telur dan gula Melaka, dibakar dalam acuan. Ia terbaik pada pagi ia dibuat.',
      },
      {
        id: 'jala',
        heading: 'Jala mas dan tahi itik',
        body: 'Jala mas ialah “jaring” emas telur halus; tahi itik ialah gigitan telur rangup kecil. Kedua-duanya snek tradisional dijual mengikut berat.',
      },
      {
        id: 'buy',
        heading: 'Bila membeli',
        body: 'Kuih bergerak paling pantas pada pagi. Beli awal untuk kesegaran dan pilihan paling luas di medan selera dan gerai pasar.',
      },
    ],
    faq: [
      { q: 'Apa itu akok?', a: 'Kek kustard telur dan gula Melaka, lembut dan manis, terbaik segar pagi.' },
      { q: 'Apa itu jala mas?', a: '“Sarang” emas telur halus — snek tradisional Kelantan.' },
      { q: 'Adakah ia tersedia setiap hari?', a: 'Sering, tetapi pagi memberikan kesegaran dan pilihan terbaik.' },
    ],
  },
  'ayam-percik': {
    title: 'Ayam Percik Kelantan — Ayam Panggang dengan Sos Santan Berempah',
    h1: 'Ayam Percik',
    description:
      'Ayam percik, ayam panggang Kelantan dengan sos santan berempah: apa ia, di mana menjumpainya, dan bagaimana ia berbeza dari versi negeri lain.',
    intro:
      'Ayam percik ialah ayam panggang arang dilakur dengan sos santan dan rempah — kegemaran perayaan di seluruh Kelantan.',
    sections: [
      {
        id: 'what',
        heading: 'Apa ia',
        body: 'Ayam dipanggang di atas arang, kemudian disapu dengan sos santan, cili, asam jawa dan rempah. Hasilnya berasap dan kaya.',
      },
      {
        id: 'where',
        heading: 'Di mana menjumpainya',
        body: 'Ia muncul di gerai makan pasar, bazar petang dan semasa musim perayaan. Medan selera pasar adalah tempat munasabah untuk mencari pada waktu operasi.',
      },
      {
        id: 'note',
        heading: 'Nota untuk pelawat',
        body: 'Tahap sos dan rempah berbeza mengikut gerai. Tanya tentang tahap kepedasan jika anda suka lebih ringan.',
      },
    ],
    faq: [
      { q: 'Apa itu ayam percik?', a: 'Ayam panggang arang dengan sos santan berempah.' },
      { q: 'Adakah pedas?', a: 'Biasanya hangat; minta bahagian lebih ringan jika anda suka.' },
      { q: 'Bolehkah saya dapat di pasar?', a: 'Sering di medan selera dan gerai, terutama sekitar musim perayaan.' },
    ],
  },
  'market-food-court': {
    title: 'Makan di Dalam Pasar Siti Khadijah — Medan Selera Aras Atas',
    h1: 'Medan Selera Pasar',
    description:
      'Panduan praktikal medan selera di dalam Pasar Siti Khadijah: susun atur, apa hendak makan, harga, pembayaran dan kebersihan, serta cara ia sesuai lawatan.',
    intro:
      'Medan selera pasar adalah tempat lawatan pasar menjadi hidangan. Berikut cara menggunakannya dengan selesa.',
    sections: [
      {
        id: 'layout',
        heading: 'Cara ia berfungsi',
        body: 'Gerai berbaris di kawasan duduk dikongsi. Pesan di kaunter, bayar, dan cari meja. Pagi paling sibuk dengan perdagangan sarapan dan kuih.',
      },
      {
        id: 'pay',
        heading: 'Pembayaran dan harga',
        body: 'Harga adalah tempatan dan sederhana. Wang tunai kecil berguna; sesetengah gerai mengambil pembayaran tanpa tunai tetapi jangan bergantung sepenuhnya.',
      },
      {
        id: 'hygiene',
        heading: 'Keselesaan dan kebersihan',
        body: 'Ia pasar yang beroperasi, jadi standard berbeza mengikut gerai. Pilih gerai sibuk dengan perolehan tinggi dan jaga barang anda.',
      },
    ],
    faq: [
      { q: 'Di mana medan selera?', a: 'Di aras makanan khusus pasar, dicapai melalui lif dan tangga bangunan.' },
      { q: 'Adakah murah?', a: 'Ya, ia berharga tempatan; bawa wang tunai kecil.' },
      { q: 'Bila ia paling sibuk?', a: 'Pagi, terutama untuk sarapan dan kuih segar.' },
    ],
  },

  // ===================== C. CULTURE =====================
  history: {
    title: 'Sejarah Pasar Siti Khadijah — Pasar Ikonik Kota Bharu',
    h1: 'Sejarah Pasar',
    description:
      'Latar belakang Pasar Siti Khadijah: namanya, bila dibina, peranannya di Kota Bharu, dan sumber sivil yang mendokumentasikannya.',
    intro:
      'Pasar Siti Khadijah ialah salah satu bangunan paling dikenali Kota Bharu. Namanya dan reka bentuk mencerminkan budaya perdagangan bandar.',
    sections: [
      {
        id: 'name',
        heading: 'Mengapa “Siti Khadijah”',
        body: 'Pasar dinamakan sempena Siti Khadijah, menghormati wanita dalam perdagangan — sesuai untuk pasar yang lama dikaitkan dengan peniaga wanita. Ia nama simbolik, bukan agama.',
      },
      {
        id: 'built',
        heading: 'Bangunan pasar moden',
        body: 'Pasar bertingkat moden semasa dibangunkan pada akhir abad ke-20 untuk mengumpulkan urusan di pusat bandar. Tarikh tepat berbeza mengikut sumber; Tourism Kelantan dan rujukan majlis paling boleh dipercayai.',
      },
      {
        id: 'role',
        heading: 'Peranannya hari ini',
        body: 'Ia kekal pasar awam yang beroperasi dan mercu tanda sivil, menarik penduduk yang membeli-belah dan pelawat meneroka budaya makanan dan kraf Kelantan.',
      },
    ],
    faq: [
      { q: 'Siapakah Siti Khadijah?', a: 'Pasar dinamakan sempena figura yang menghormati wanita dalam perdagangan; ia nama simbolik.' },
      { q: 'Bila pasar dibina?', a: 'Bangunan moden bertarikh akhir abad ke-20; sahkan tarikh tepat dengan Tourism Kelantan.' },
      { q: 'Adakah ia tarikan pelancong?', a: 'Ia pasar yang beroperasi dan mercu tanda bandar, popular dengan pelawat untuk makanan dan kraf.' },
    ],
  },
  'women-traders': {
    title: 'Peniaga Wanita Pasar Siti Khadijah — Tradisi Kelantan',
    h1: 'Peniaga Wanita',
    description:
      'Mengapa Pasar Siti Khadijah dikenali dengan peniaga wanita, latar belakang budaya di Kelantan, dan petua fotografi serta etika hormat.',
    intro:
      'Salah satu ciri tersendiri pasar ialah keutamaan peniaga wanita, terutama di aras tekstil dan kraf atas.',
    sections: [
      {
        id: 'tradition',
        heading: 'Tradisi perdagangan tempatan',
        body: 'Kelantan mempunyai corak lama wanita mengambil bahagian aktif dalam perdagangan pasar. Nama pasar meraikan peranan itu, dan banyak gerai dijalankan oleh wanita.',
      },
      {
        id: 'floors',
        heading: 'Di mana mereka berdagang',
        body: 'Peniaga wanita amat kelihatan di aras tekstil, pakaian dan kraftangan, di mana songket, batik dan pakaian dijual.',
      },
      {
        id: 'respect',
        heading: 'Melawat dengan hormat',
        body: 'Minta sebelum memotret orang atau barangan mereka sebagai tanda hormat. Sapaan sopan dan minat tulen terhadap kraf pergi jauh dengan peniaga.',
      },
    ],
    faq: [
      { q: 'Mengapa ramai peniaga wanita?', a: 'Ia mencerminkan tradisi Kelantan wanita dalam perdagangan pasar, diraikan oleh nama pasar.' },
      { q: 'Bolehkah saya memotret mereka?', a: 'Tanya dahulu; ramai baik jika anda hormat dan ingin tahu.' },
      { q: 'Aras mana mereka berada?', a: 'Terutama aras tekstil dan kraftangan atas.' },
    ],
  },
  architecture: {
    title: 'Seni Bina Pasar Siti Khadijah — Bangunan Pasar Bertingkat Empat',
    h1: 'Bangunan & Seni Bina',
    description:
      'Reka bentuk Pasar Siti Khadijah: tingkat bertindan, atrium tengah dan pengudaraan semula jadi, serta bagaimana susun atur membentuk lawatan.',
    intro:
      'Reka bentuk bertingkat dan terbuka pasar adalah sebahagian daripada cirinya — bangunan dibuat untuk aliran udara dan pergerakan, bukan membeli-belah tertutup.',
    sections: [
      {
        id: 'form',
        heading: 'Pasaran terbuka bertingkat',
        body: 'Bangunan naik melalui beberapa aras dagangan mengelilingi atrium tengah, membiarkan cahaya dan udara bergerak. Ia dibaca sebagai pasar, bukan pusat membeli-belah.',
      },
      {
        id: 'air',
        heading: 'Pengudaraan dan keselesaan',
        body: 'Sisi terbuka dan atrium membantu dengan haba dan bau di pasar hasil segar. Walaupun begitu, aras atas lebih sejuk daripada aras tanah sibuk pada waktu puncak.',
      },
      {
        id: 'movement',
        heading: 'Bergerak',
        body: 'Lif, eskalator dan tangga menghubungkan aras. Mulakan rendah untuk hasil, tamatkan tinggi untuk kraf, dan gunakan pandangan atrium untuk berorientasi.',
      },
    ],
    faq: [
      { q: 'Berapa tingkat ada?', a: 'Ia pasar bertingkat pelbagai di sekitar atrium terbuka; penggunaan aras mengikut panduan di atas.' },
      { q: 'Adakah ia berpenyaman udara?', a: 'Ia bergantung pada pengudaraan terbuka dan bukannya penyaman udara penuh, tipikal pasar yang beroperasi.' },
      { q: 'Adakah susun atur mudah dinavigasi?', a: 'Atrium membantu berorientasi; lif dan tangga menghubungkan aras.' },
    ],
  },
  'batik-songket': {
    title: 'Membeli-belah Batik & Songket di Pasar Siti Khadijah',
    h1: 'Batik & Songket',
    description:
      'Cara membeli batik dan songket di Pasar Siti Khadijah: apa setiap satunya, cara menilai kualiti, harga adil dan etika tawar-menawar.',
    intro:
      'Kelantan ialah jantung batik dan songket. Aras atas pasar adalah tempat praktikal untuk membandingkan kedua-duanya.',
    sections: [
      {
        id: 'difference',
        heading: 'Batik berbanding songket',
        body: 'Batik ialah kain celup rintangan lilin; songket ditenun dengan benang emas atau perak. Songket biasanya lebih mahal kerana tenunan logam dan tenaga kerja.',
      },
      {
        id: 'quality',
        heading: 'Menyemak kualiti',
        body: 'Untuk batik, lihat penembusan warna dan butiran. Untuk songket, semak ketumpatan dan keseimbangan benang logam serta rasa tenunan.',
      },
      {
        id: 'buy',
        heading: 'Membeli dengan baik',
        body: 'Bandikan beberapa gerai, sahkan fabrik dan saiz, dan tanya tentang penjagaan. Rundingan sopan adalah biasa untuk kepingan lebih besar; gerai makanan harga tetap berbeza.',
      },
    ],
    faq: [
      { q: 'Apa itu songket?', a: 'Kain ditenun tangan dengan benang emas atau perak, tradisional kepada istana Melayu termasuk Kelantan.' },
      { q: 'Adakah batik lebih murah daripada songket?', a: 'Secara amnya ya; tenunan logam songket lebih intensif tenaga kerja.' },
      { q: 'Bolehkah saya tawar?', a: 'Ya, dengan sopan, terutama untuk pembelian tekstil lebih besar.' },
    ],
  },
  'kelantan-culture': {
    title: 'Pengenalan Budaya Kelantan — Apa yang Membuat Negeri Unik',
    h1: 'Budaya Kelantan',
    description:
      'Pengenalan budaya Kelantan — tradisi Melayunya, seni persembahan, kraf dan bagaimana pasar menghubungkannya, dengan rujukan rasmi.',
    intro:
      'Kelantan sering dipanggil jantung budaya pantai timur Malaysia. Pasar ialah tingkap hidup kepada warisan itu.',
    sections: [
      {
        id: 'arts',
        heading: 'Seni dan persembahan',
        body: 'Negeri ini terkenal dengan wayang kulit (wayang bayang), teater mak yong, wau (lelayang) dan gasing (gasing berputar) — bentuk tradisional didokumentasikan oleh badan budaya.',
      },
      {
        id: 'craft',
        heading: 'Warisan kraf',
        body: 'Batik, songket dan perak ialah kraf hidup yang anda boleh lihat dan beli di pasar, menghubungkan perdagangan harian dengan tradisi lebih luas.',
      },
      {
        id: 'food',
        heading: 'Makanan sebagai budaya',
        body: 'Hidangan seperti nasi kerabu dan budu bukan sekadar makanan tetapi penanda budaya — sebahagian sebab aras makanan pasar penting.',
      },
    ],
    faq: [
      { q: 'Apa Kelantan terkenal?', a: 'Seni persembahan Melayu, batik, songket dan masakan tersendiri.' },
      { q: 'Bagaimana pasar menghubungkan budaya?', a: 'Ia tempat kraf dan tradisi makanan dibeli dan dijual setiap hari.' },
      { q: 'Di mana saya boleh belajar lebih?', a: 'Tourism Kelantan dan badan budaya negeri mendokumentasikan seni dan kraf.' },
    ],
  },
  handicrafts: {
    title: 'Kraftangan & Cenderamata Kelantan — Apa Nak Dibawa Pulang',
    h1: 'Kraftangan & Cenderamata',
    description:
      'Panduan kraftangan Kelantan di Pasar Siti Khadijah: perak, rotan, kerja kayu, songket dan nota membeli serta penghantaran praktikal.',
    intro:
      'Jika anda mahu cenderamata dengan rasa tempat, aras kraf pasar adalah tempat membandingkan kraf Kelantan tulen.',
    sections: [
      {
        id: 'types',
        heading: 'Apa hendak cari',
        body: 'Perak, rotan dan item anyaman, kerja kayu dan songket adalah ruji. Setiap membawa harga dan berat berbeza untuk perjalanan.',
      },
      {
        id: 'authentic',
        heading: 'Semakan keaslian',
        body: 'Tanya sama ada item buatan tangan, dari apa ia dibuat, dan cara menjaganya. Kraf tulen berharga lebih daripada tiruan dihasilkan pukal.',
      },
      {
        id: 'travel',
        heading: 'Membawanya pulang',
        body: 'Kepingan rapuh perlu pelapik; semak peraturan syarikat penerbangan dan kastam untuk makanan dan item berasaskan tumbuhan. Meterai hadiah makanan dengan baik.',
      },
    ],
    faq: [
      { q: 'Apakah cenderamata terbaik?', a: 'Songket, batik, perak dan kraf rotan atau kayu kecil.' },
      { q: 'Bagaimana saya elak tiruan?', a: 'Tanya tentang bahan dan pembuatan; banding beberapa gerai dan harga.' },
      { q: 'Bolehkah saya pos item?', a: 'Ramai pelawat membawanya; untuk kepingan rapuh atau besar tanya tentang pembungkusan dan penghantaran di lokasi.' },
    ],
  },
  'nearby-attractions': {
    title: 'Tarikan Berhampiran Pasar Siti Khadijah — Istana Jahar, Masjid & Lagi',
    h1: 'Tarikan Berhampiran',
    description:
      'Tempat warisan dalam jarak berjalan kaki dari Pasar Siti Khadijah: Istana Jahar, Istana Batu, Masjid Muhammadi dan lagi, dengan konteks lawatan.',
    intro:
      'Pasar terletak di Kota Bharu lama, di mana beberapa bangunan warisan berkelompok. Padankan lawatan pasar dengan berjalan kaki warisan pendek.',
    sections: [
      {
        id: 'istana',
        heading: 'Istana Jahar & Istana Batu',
        body: 'Bangunan diraja ini menempatkan muzium adat dan alat diraja Kelantan. Ia berjalan kaki pendek dari pasar dan memberi konteks budaya negeri.',
      },
      {
        id: 'mosque',
        heading: 'Masjid Muhammadi',
        body: 'Masjid negeri ialah mercu tanda bandar berhampiran pasar. Pelawat patut berpakaian sopan dan melawat di luar waktu solat jika boleh.',
      },
      {
        id: 'square',
        heading: 'Dataran Merdeka',
        body: 'Ruang terbuka pusat yang menghubungkan daerah warisan; berguna sebagai tegak rujukan antara pasar dan muzium.',
      },
    ],
    faq: [
      { q: 'Apa yang berhampiran pasar?', a: 'Istana Jahar, muzium Istana Batu, Masjid Muhammadi dan Dataran Merdeka.' },
      { q: 'Bolehkah saya berjalan kaki di antara mereka?', a: 'Ya, mereka berdekatan di pusat bandar; pakai pakaian ringan.' },
      { q: 'Adakah muzium percuma?', a: 'Semak kemasukan muzium negeri semasa di lokasi atau dengan Tourism Kelantan.' },
    ],
  },
  'kelantan-river': {
    title: 'Sungai Kelantan & Berjalan Tepi Sungai Berhampiran Pasar',
    h1: 'Sungai Kelantan',
    description:
      'Sungai Kelantan di sisi Kota Bharu: peranannya dalam perdagangan sejarah, berjalan kaki tepi sungai dari pasar, dan bagaimana air membentuk bandar.',
    intro:
      'Sungai Kelantan telah lama membentuk kehidupan dan perdagangan di Kota Bharu. Lokasi pasar berhampiran air bukan kebetulan.',
    sections: [
      {
        id: 'history',
        heading: 'Laluan air perdagangan',
        body: 'Secara sejarah sungai menggerakkan barangan dan orang sebelum jalan moden. Pasar tumbuh berhampirannya untuk akses — corak yang bandar masih tunjukkan.',
      },
      {
        id: 'walk',
        heading: 'Berjalan kaki tepi sungai',
        body: 'Dari pasar anda boleh berjalan ke arah sungai dan ruang terbuka untuk penamat lebih tenang lawatan pasar, terutama petang yang lebih sejuk.',
      },
      {
        id: 'note',
        heading: 'Nota praktikal',
        body: 'Tebing sungai adalah awam dan tidak formal; kekal pada laluan terbuka, awasi kanak-kanak berhampiran air, dan elak tengah hari paling panas jika berjalan jauh.',
      },
    ],
    faq: [
      { q: 'Adakah pasar berhampiran sungai?', a: 'Ya, ia di pusat bandar berhampiran Sungai Kelantan.' },
      { q: 'Bolehkah saya berjalan di tepi sungai?', a: 'Ya, terdapat kawasan tepi sungai terbuka dalam jarak berjalan dari pasar.' },
      { q: 'Adakah berjalan kaki sungai selamat?', a: 'Kekal pada laluan terbuka dan awasi kanak-kanak berhampiran air.' },
    ],
  },

  // ===================== D. ITINERARY =====================
  'kota-bharu-half-day': {
    title: 'Itinerari Separuh Hari Kota Bharu — Pasar + Muzium',
    h1: 'Itinerari Separuh Hari Kota Bharu',
    description:
      'Rancangan separuh hari Kota Bharu: pagi di Pasar Siti Khadijah, sarapan medan selera, dan berjalan kaki ke muzium berhampiran, dengan nota pemasaan dan bajet.',
    intro:
      'Kekurangan masa? Gelung separuh hari ini menggabungkan pasar dengan muzium warisan beberapa minit jauh.',
    sections: [
      {
        id: 'plan',
        heading: 'Laluan (lebih kurang 4 jam)',
        body: '08:00 tiba di pasar; 08:15 sarapan di medan selera; 09:00 lihat aras hasil segar dan kraf; 10:30 berjalan ke muzium Istana Jahar dan Istana Batu; 11:30 rehat tepi sungai atau dataran.',
      },
      {
        id: 'budget',
        heading: 'Nota bajet',
        body: 'Pasar sendiri percuma untuk dimasuki; bajet untuk makanan dan sebarang kraf. Kemasukan muzium, jika ada, ditetapkan oleh negeri — semak di lokasi.',
      },
      {
        id: 'tip',
        heading: 'Petua pemasaan',
        body: 'Mulakan awal untuk medan selera dan cuaca sejuk, dan simpan muzium untuk lewat pagi. Lihat panduan masa terbaik untuk butiran.',
      },
    ],
    faq: [
      { q: 'Bolehkah saya buat dalam separuh hari?', a: 'Ya — lebih kurang empat jam meliputi pasar dan muzium terdekat.' },
      { q: 'Pukul berapa patut saya mula?', a: 'Lebih kurang 08:00 untuk mendapat medan selera dan elak haba.' },
      { q: 'Adakah ia boleh dijalan kaki?', a: 'Pasar dan muzium berdekatan di pusat bandar.' },
    ],
  },
  'kota-bharu-itinerary': {
    title: 'Itinerari Sepenuh Hari Kota Bharu — Pasar, Budaya & Makanan',
    h1: 'Itinerari Sepenuh Hari Kota Bharu',
    description:
      'Rancangan sehari penuh Kota Bharu berpusat Pasar Siti Khadijah, muzium warisan, makanan tempatan dan petang di pasar malam Wakaf Che Yeh.',
    intro:
      'Hari lengkap yang menggabungkan pasar, budaya, makanan dan bazar petang — bentuk satu hari terbaik untuk pelawat kali pertama.',
    sections: [
      {
        id: 'plan',
        heading: 'Hari (lebih kurang 8–9 jam)',
        body: 'Pagi: pasar + medan selera. Lepas pagi: Istana Jahar, Istana Batu, Masjid Muhammadi. Petang: rehat kafe dan membeli kraf. Petang: pasar malam Wakaf Che Yeh.',
      },
      {
        id: 'logistics',
        heading: 'Bergerak antara perhentian',
        body: 'Perhentian pusat bandar boleh dijalan kaki; Wakaf Che Yeh perjalanan singkat pada petang. Gunakan perkhidmatan atas talian atau teksi untuk pasar malam.',
      },
      {
        id: 'budget',
        heading: 'Nota bajet',
        body: 'Rancang untuk makanan sepanjang hari, sebarang kraf, dan pengangkutan ke Wakaf Che Yeh. Tiada tapak awam memerlukan tempahan komersial.',
      },
    ],
    faq: [
      { q: 'Adakah satu hari mencukupi?', a: 'Ya untuk mercu tanda: pasar, muzium, makanan dan pasar malam.' },
      { q: 'Bagaimana saya ke Wakaf Che Yeh?', a: 'Perjalanan singkat dari pusat bandar dengan teksi atau perkhidmatan atas talian pada petang.' },
      { q: 'Apa yang tidak patut saya lepaskan?', a: 'Medan selera pasar dan pasar malam petang adalah pengakhiran buku.' },
    ],
  },
  'rainy-day': {
    title: 'Hari Hujan di Kota Bharu — Mengapa Pasar Sempurna di Dalam',
    h1: 'Rancangan Hari Hujan',
    description:
      'Rancangan hari hujan untuk Kota Bharu berpusat pasar tertutup bertingkat Pasar Siti Khadijah, dengan muzium dan kafe sebagai sandaran kering.',
    intro:
      'Musim hujan Kelantan (lebih kurang Mei hingga Oktober) membawa hujan lebat. Reka bentuk bertingkat berciri bumbung pasar menjadikannya tegak utama hujan semula jadi.',
    sections: [
      {
        id: 'market',
        heading: 'Mula di bawah bumbung',
        body: 'Habiskan bahagian hari paling hujan di pasar — makanan segar, hidangan masak dan kraf semuanya di dalam mengikut aras.',
      },
      {
        id: 'museums',
        heading: 'Tambah budaya dalam',
        body: 'Muzium Istana Jahar dan Istana Batu adalah berjalan kaki singkat, kebanyakannya perlindungan, dan melengkapkan pagi hujan.',
      },
      {
        id: 'cafe',
        heading: 'Rehat di kafe',
        body: 'Masuk ke kafe pusat bandar antara hujan untuk mengecas semula. Simpan berjalan kaki tepi sungai untuk tingkap lebih kering.',
      },
    ],
    faq: [
      { q: 'Adakah pasar baik dalam hujan?', a: 'Ya — ia berciri bumbung dan bertingkat, jadi hujan jarang merosakkannya.' },
      { q: 'Apa lagi di dalam?', a: 'Muzium warisan berhampiran pasar adalah sandaran kering yang baik.' },
      { q: 'Bila musim hujan?', a: 'Lebih kurang Mei hingga Oktober, dengan ribut petang biasa.' },
    ],
  },
  'wakaf-che-yeh': {
    title: 'Pasar Malam Wakaf Che Yeh — Bazar Petang Kelantan',
    h1: 'Pasar Malam Wakaf Che Yeh',
    description:
      'Pasar malam Wakaf Che Yeh berhampiran Kota Bharu: apa dijual, bila dibuka, cara ke sana dari pusat bandar, dan bagaimana ia berbeza dari pasar siang.',
    intro:
      'Wakaf Che Yeh ialah bazar petang terkenal perjalanan singkat dari pusat bandar — lawan meriah kepada lawatan pasar siang.',
    sections: [
      {
        id: 'what',
        heading: 'Apa ia',
        body: 'Bazar petang pakaian, barangan rumah, snek dan makanan jalanan. Ia hidup selepas gelap dan paling sibuk pada malam hujung minggu.',
      },
      {
        id: 'when',
        heading: 'Bila ia beroperasi',
        body: 'Ia beroperasi pada petang; bukaan tepat mengikut peniaga dan musim. Pergi selepas pasar siang ditutup.',
      },
      {
        id: 'how',
        heading: 'Cara ke sana',
        body: 'Ia perjalanan singkat dari pusat bandar Kota Bharu dengan teksi atau perkhidmatan atas talian. Rancang pulang anda, kerana pengangkutan lewat malam menipis.',
      },
    ],
    faq: [
      { q: 'Berapa jauh Wakaf Che Yeh?', a: 'Perjalanan singkat dari pusat bandar, lebih kurang beberapa kilometer.' },
      { q: 'Bila ia dibuka?', a: 'Petang; ia bazar selepas gelap, paling sibuk pada hujung minggu.' },
      { q: 'Adakah ia seperti Pasar Siti Khadijah?', a: 'Tidak — ia bazar petang pakaian, barangan dan makanan jalanan, bukan pasar hasil siang.' },
    ],
  },
  'islamic-heritage': {
    title: 'Laluan Warisan Islam di Kota Bharu — Masjid & Pasar',
    h1: 'Laluan Warisan Islam',
    description:
      'Berjalan kaki warisan Islam yang hormat di Kota Bharu menghubungkan Masjid Muhammadi, pasar dinamakan peniaga wanita, dan etika pakaian sopan.',
    intro:
      'Identiti Kota Bharu terjalin dengan budaya Islam. Laluan ini menghubungkan mercu tanda dengan pasar dalam laluan praktikal dan hormat.',
    sections: [
      {
        id: 'mosque',
        heading: 'Masjid Muhammadi',
        body: 'Masjid negeri ialah tegak rohani bandar. Lawati di luar waktu solat dan berpakaian sopan; wanita mungkin diminta menutup dengan sesuai.',
      },
      {
        id: 'market',
        heading: 'Nama sepadan pasar',
        body: 'Siti Khadijah menghormati wanita dalam perdagangan, melengkapkan warisan Islam bandar. Pasar ialah perhentian sesuai pada berjalan kaki budaya.',
      },
      {
        id: 'etiquette',
        heading: 'Etika',
        body: 'Berpakaian konservatif, minta sebelum memotret orang, dan kekal senyap berhampiran ruang solat. Jumaat berpusat pada solat berjemaah.',
      },
    ],
    faq: [
      { q: 'Bolehkah pelawat masuk masjid?', a: 'Secara amnya ya di luar waktu solat dan dengan pakaian sopan; sahkan di lokasi.' },
      { q: 'Mengapa sertakan pasar?', a: 'Namanya menghormati peniaga wanita, mengikat perdagangan ke warisan bandar.' },
      { q: 'Ada nasihat Jumaat?', a: 'Jangkaan tingkap tengah hari yang lebih sunyi sekitar solat; lihat panduan Jumaat.' },
    ],
  },
  'family-itinerary': {
    title: 'Itinerari Keluarga di Kota Bharu bersama Kanak-kanak',
    h1: 'Itinerari Keluarga',
    description:
      'Hari mesra kanak-kanak Kota Bharu: warna dan makanan pasar, muzium, rehat tepi sungai dan petua keselamatan untuk keluarga.',
    intro:
      'Pasar ialah pengalaman deria untuk kanak-kanak — warna, bau dan snek — jika anda merancang sekitar orang ramai, haba dan tapak.',
    sections: [
      {
        id: 'plan',
        heading: 'Hari mesra keluarga',
        body: 'Berjalan kaki pagi pasar dengan perhentian snek, lawatan muzium pendek, kemudian rehat tepi sungai atau dataran. Kekalkan sesi pendek dan berlindung.',
      },
      {
        id: 'safety',
        heading: 'Keselamatan dengan kanak-kanak',
        body: 'Pegang tangan berhampiran lantai hasil basah, awasi barang dalam orang ramai, dan bawa air. Pembawa bayi mengatasi troli pada kesesakan puncak.',
      },
      {
        id: 'food',
        heading: 'Makanan untuk pemilih',
        body: 'Medan selera mempunyai nasi kosong dan pilihan panggang di samping hidangan berani, jadi kebanyakan kanak-kanak menjumpai sesuatu biasa.',
      },
    ],
    faq: [
      { q: 'Adakah pasar baik untuk kanak-kanak?', a: 'Ya sebagai lawatan deria pendek; awasi lantai basah dan orang ramai.' },
      { q: 'Pembawa atau troli?', a: 'Pembawa lebih mudah pada waktu sibuk; lorong menjadi sempit.' },
      { q: 'Adakah terdapat makanan mesra kanak-kanak?', a: 'Nasi kosong dan item panggang di medan selera biasanya berfungsi.' },
    ],
  },
  'weekend-itinerary': {
    title: 'Hujung Minggu di Kota Bharu — Rancangan 2 Hari dengan Pasar',
    h1: 'Hujung Minggu di Kota Bharu',
    description:
      'Rancangan dua hari Kota Bharu: hari satu pasar, muzium dan makanan; hari dua pantai berhampiran atau Wakaf Che Yeh, dengan nota pengangkutan dan pemasaan.',
    intro:
      'Hujung minggu membenarkan anda menikmati pasar pada rentak santai dan menambah perjalanan hari kedua tanpa tergesa-gesa.',
    sections: [
      {
        id: 'day1',
        heading: 'Hari satu — bandar dan pasar',
        body: 'Pasar dan medan selera pada pagi, muzium dan masjid pada lewat pagi, rehat kafe, kemudian Wakaf Che Yeh pada malam.',
      },
      {
        id: 'day2',
        heading: 'Hari dua — luar pusat',
        body: 'Gunakan hari kedua untuk perjalanan pantai atau luar bandar, atau membeli kraf lebih lanjut. Kekalkan pengangkutan mudah dengan perkhidmatan atas talian.',
      },
      {
        id: 'tip',
        heading: 'Petua hujung minggu',
        body: 'Hujung minggu lebih meriah tetapi sibuk di pasar; tiba awal. Jangan tempah apa-apa komersial — ini rancangan pasar awam.',
      },
    ],
    faq: [
      { q: 'Adakah dua hari mencukupi?', a: 'Ya untuk mercu tanda bandar ditambah satu perjalanan.' },
      { q: 'Apa hendak buat hari dua?', a: 'Perjalanan pantai atau luar bandar, atau membeli kraf lebih mendalam.' },
      { q: 'Adakah hujung minggu sesak?', a: 'Ya di pasar; pergi awal dan gunakan medan selera sebelum puncak.' },
    ],
  },
  'from-kota-bharu-airport': {
    title: 'Dari Lapangan Terbang Kota Bharu ke Pasar Siti Khadijah',
    h1: 'Lapangan Terbang ke Pasar',
    description:
      'Cara dari Lapangan Terbang Sultan Ismail Petra ke Pasar Siti Khadijah: jarak, pilihan teksi atas talian, dan masa perjalanan ke pusat bandar.',
    intro:
      'Jika anda mendarat di lapangan terbang Kota Bharu, pasar perjalanan singkat ke pusat bandar. Berikut perjalanan terakhir dibuat mudah.',
    sections: [
      {
        id: 'distance',
        heading: 'Jarak dan masa',
        body: 'Lapangan terbang jarak pendek dari pusat bandar; perjalanan ke pasar biasanya cepat di luar trafik puncak. Sahkan tambang sebelum bertolak.',
      },
      {
        id: 'ride',
        heading: 'Pilihan tunggangan',
        body: 'Teksi dan aplikasi atas talian bertemu penerbangan di lapangan terbang. Tetapkan destinasi kepada “Pasar Siti Khadijah, Jalan Buluh Kubu”.',
      },
      {
        id: 'tip',
        heading: 'Petua ketibaan',
        body: 'Jika anda tiba awal, terus ke pasar untuk medan selera pagi; jika lewat, simpan pasar untuk pagi berikutnya.',
      },
    ],
    faq: [
      { q: 'Berapa jauh lapangan terbang dari pasar?', a: 'Jarak pendek; perjalanan ke pusat bandar cepat.' },
      { q: 'Adakah terdapat Grab di lapangan terbang?', a: 'Aplikasi atas talian dan teksi melayan lapangan terbang; sahkan tambang.' },
      { q: 'Bila patut saya ke pasar?', a: 'Pagi adalah terbaik; jika tiba lewat, pergi pagi berikutnya.' },
    ],
  },
};

export function getTopicMs(slug: string): Topic {
  const base = getTopic(slug);
  if (!base) {
    throw new Error(`Unknown topic slug: ${slug}`);
  }
  return { ...base, ...TOPICS_MS[slug] } as Topic;
}
