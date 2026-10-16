# Robotika UNNES
Website resmi untuk Organisasi Mahasiswa yang bergerak di bidang Robotika (UKM RIPTEK Universitas Negeri Semarang).

## Developer
- Hilal Muzaki
- Muhammad Rifqi Fajar Adi Putra
- Fahri

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
├── public/                      -> aset statis (favicon, ikon)
├── src/
│   ├── assets/
│   │   └── Robotika/            -> aset gambar lokal resmi Robotika UNNES
│   │       ├── avatar-1.jpg
│   │       ├── avatar-2.jpg
│   │       ├── avatar-3.jpg
│   │       ├── hero-gathering.png
│   │       ├── hero-hexapod.png
│   │       ├── hero-kri-krti.png
│   │       ├── hero-workshop.png
│   │       └── logo.png
│   ├── components/              -> komponen tiap section halaman
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Faq.jsx
│   │   ├── Footer.jsx
│   │   ├── HangarPrototype.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Programs.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── StatusOverlay.jsx
│   │   └── TeamRibbon.jsx
│   ├── data/
│   │   └── content.js           -> seluruh teks konten (ID & EN) + import aset gambar lokal
│   ├── App.jsx                  -> komponen utama, menyusun semua section
│   ├── App.css                  -> style tiap section & komponen
│   ├── index.css                -> design system & style global
│   └── main.jsx                 -> entry point React
├── index.html
├── package.json
└── vite.config.js
```

## Project Details
- `App.jsx` -> menyimpan state bahasa (`id`/`en`) dan modal, lalu mengirim konten ke tiap section
- `data/content.js` -> pusat data teks website (dua bahasa) dan pemetaan aset gambar lokal dari `src/assets/Robotika/` (termasuk `LOGO_URL`)
- `assets/Robotika/` -> menyimpan seluruh aset visual lokal (foto filmstrip hero, foto section About & Hangar, avatar Team Ribbon, serta logo resmi)
- `components/Navbar.jsx` -> navigasi utama (termasuk switcher bahasa & menu mobile)
- `components/Hero.jsx` -> judul utama & galeri 4-frame filmstrip dengan sudut tajam (`border-radius: 0`)
- `components/About.jsx` -> profil organisasi, foto kegiatan, visi & misi
- `components/TeamRibbon.jsx` -> ribbon tim & slogan dengan badge avatar inline
- `components/Programs.jsx` -> daftar 5 program kerja utama
- `components/HangarPrototype.jsx` -> showcase prototipe unggulan (Agra Vidravana)
- `components/Faq.jsx` -> akordeon pertanyaan yang sering diajukan
- `components/Contact.jsx` -> informasi kontak, tombol WhatsApp, & formulir pesan
- `components/Footer.jsx` -> footer & tautan media sosial resmi
- `components/StatusOverlay.jsx` -> indikator status bawah (pengganti bahasa EN/ID & jam sistem real-time)
- `components/ProjectModal.jsx` -> modal spesifikasi teknis & telemetri prototipe