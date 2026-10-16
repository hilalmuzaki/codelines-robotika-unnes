## Project Details
- layouts/PrimaryLayout.jsx -> untuk layout utama
- navigations/PrimaryNav.jsx -> untuk navigasi utama
- components/Navlink.jsx -> link yang ada di dalam navigasi utama
- components -> untuk beberapa bagian kecil seperti navlink maupun data-data kecil
- cards -> untuk bagian berupa kartu
- pages -> tempatnya halaman utama

## Teknologi
- React 19
- Vite 8
- CSS (CSS variables sebagai design token)
- Google Fonts: Syne, Inter, JetBrains Mono
- Oxlint

## Menjalankan Project
```bash
npm install
npm run dev      # menjalankan dev server
npm run build    # build produksi ke folder dist/
npm run preview  # melihat hasil build
npm run lint     # cek kode dengan oxlint
```

## Struktur Project
```
robotika-unnes/
├── public/              -> aset statis (favicon, ikon)
├── src/
│   ├── assets/          -> gambar lokal
│   ├── components/      -> komponen tiap section halaman
│   ├── data/
│   │   └── content.js   -> seluruh teks konten (Bahasa Indonesia & Inggris)
│   ├── App.jsx          -> komponen utama, menyusun semua section
│   ├── App.css          -> style tiap section
│   ├── index.css        -> design system & style global
│   └── main.jsx         -> entry point React
├── index.html
├── package.json
└── vite.config.js
```

## Project Details
- App.jsx -> menyimpan state bahasa (ID/EN) dan modal, lalu mengirim konten ke tiap section
- data/content.js -> tempat mengubah teks website tanpa menyentuh komponen
- components/Navbar.jsx -> navigasi utama (termasuk menu mobile)
- components/Hero.jsx -> judul utama & galeri filmstrip
- components/About.jsx -> tentang, visi & misi
- components/TeamRibbon.jsx -> ribbon tim & slogan
- components/Programs.jsx -> program kerja
- components/HangarPrototype.jsx -> prototipe unggulan
- components/Faq.jsx -> pertanyaan yang sering diajukan
- components/Contact.jsx -> informasi kontak & formulir
- components/Footer.jsx -> footer & media sosial
- components/StatusOverlay.jsx -> pengganti bahasa EN/ID & jam
- components/ProjectModal.jsx -> modal detail prototipe
