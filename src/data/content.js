// Data content for Robotika UNNES Landing Page
// Supports both Indonesian (ID) and English (EN)

import avatar1 from "../assets/Robotika/avatar-1.jpg";
import avatar2 from "../assets/Robotika/avatar-2.jpg";
import avatar3 from "../assets/Robotika/avatar-3.jpg";
import heroGathering from "../assets/Robotika/hero-gathering.png";
import heroHexapod from "../assets/Robotika/hero-hexapod.png";
import heroKriKrti from "../assets/Robotika/hero-kri-krti.png";
import heroWorkshop from "../assets/Robotika/hero-workshop.png";
import logo from "../assets/Robotika/logo.png";

export const contentData = {
  id: {
    nav: {
      about: "ABOUT US",
      programs: "PROGRAMS",
      hangar: "HANGAR",
      faq: "FAQ",
      contact: "CONTACT",
      getInTouch: "HUBUNGI KAMI",
    },
    hero: {
      titleLine1: "I DO AND",
      titleLine2: "I UNDERSTAND",
      tagline: "WADAH MAHASISWA BERPRESTASI DI BIDANG ROBOTIKA & TALENTA TEKNOLOGI UNNES",
      filmstrip: [
        {
          id: 1,
          title: "KRI & KRTI Competition Flight Delegation",
          img: heroKriKrti,
          tall: false,
          grayscale: true,
        },
        {
          id: 2,
          title: "Workshop & Pameran Delegasi Robotika UNNES",
          img: heroWorkshop,
          tall: true,
          tintRed: true,
        },
        {
          id: 3,
          title: "Hexapod & Field Robot Prototyping Review",
          img: heroHexapod,
          tall: true,
        },
        {
          id: 4,
          title: "Gathering & Konsolidasi Tim Robotika RIPTEK",
          img: heroGathering,
          tall: false,
          grayscale: true,
        },
      ],
    },
    about: {
      label: "TENTANG KAMI — KREATIVITAS, KEBERANIAN, MASA DEPAN",
      heading: "WADAH TALENTA ROBOTIKA & TEKNOLOGI UNNES",
      image: heroHexapod,
      visionTag: "TENTANG & VISI",
      description: "Robotika UNNES merupakan sub-organisasi kemahasiswaan yang bernaung di bawah UKM RIPTEK Universitas Negeri Semarang yang berfungsi sebagai inkubator talenta teknologi untuk mencetak inovator, programmer, dan perekayasa unggul. Melalui riset aplikatif dan kompetisi tingkat nasional, anggota menguasai sistem benam (embedded systems), desain mekanikal, kecerdasan buatan, serta otomatisasi perangkat lunak.",
      vision: "VISI: Terwujudnya Komunitas Robotika UNNES yang Inovatif, Kreatif, dan Berprestasi Unggul di Tingkat Nasional.",
      missions: [
        {
          num: "01",
          title: "MISI 01",
          desc: "Meningkatkan minat, wawasan, dan kapabilitas anggota dalam bidang rekayasa robotika terpadu.",
        },
        {
          num: "02",
          title: "MISI 02",
          desc: "Menjalin kemitraan kolaboratif dengan berbagai institusi dan industri dalam mendukung aktivitas robotika.",
        },
        {
          num: "03",
          title: "MISI 03",
          desc: "Mempersiapkan tim kontingen robotika UNNES untuk berkompetisi dan meraih podium di tingkat nasional.",
        },
      ],
    },
    teamRibbon: {
      text1: "TIM KAMI MEMAJUKAN",
      text2: "ROBOTIKA OTONOM",
      text3: "DENGAN",
      text4: "PRESISI",
      text5: "& KEUNGGULAN",
      avatars: [
        avatar1,
        avatar2,
        avatar3,
      ],
    },
    programs: {
      label: "PROGRAM KERJA & GALERI KAMI",
      headingLine1: "MELAMPAUI",
      headingLine2: "ROBOTIKA",
      subtitle: "PROTOTIPING KOMPREHENSIF & BERBAGI PENGETAHUAN. SPEKTRUM PENUH AKTIVITAS RISET UNTUK MEMASTIKAN PERJALANAN TEKNOLOGI YANG SOLID.",
      list: [
        {
          id: "lri",
          title: "LRI (Lomba Robot Indonesia)",
          desc: "Meresmikan wahana robot yang akan digunakan tim Robotika Universitas Negeri Semarang ke Kontes Robot Indonesia yang diselenggarakan oleh BPTI. Serta pendelegasian resmi kontingen Robotika UNNES.",
          type: "circle",
        },
        {
          id: "orobo",
          title: "O-Robo (Orientasi Robotika)",
          desc: "Kegiatan pengenalan komprehensif yang bertujuan untuk mengedukasi dan mempromosikan tiap divisi teknis, mekanik, elektronika, dan pemrograman dari Robotika UNNES kepada mahasiswa baru.",
          type: "bars",
        },
        {
          id: "school",
          title: "Robotic School",
          desc: "Program akselerasi skill untuk mengajarkan dan membagikan keilmuan robotika terapan kepada mahasiswa UNNES yang memiliki minat mendalam di bidang rekayasa teknologi dan otomasi.",
          type: "dot",
        },
        {
          id: "studibanding",
          title: "Studi Banding",
          desc: "Eksplorasi benchmarking untuk bertukar wawasan teknis, best practices riset, serta mempererat jejaring sinergi antara Robotika UNNES dengan laboratorium robotika perguruan tinggi mitra di Indonesia.",
          type: "line",
        },
        {
          id: "sponsorship",
          title: "Sponsorship & Partnership",
          desc: "Bentuk kolaborasi strategis dengan entitas industri, BUMN, dan mitra korporat guna mendukung pendanaan serta penyediaan komponen riset wahana robot untuk kompetisi nasional BPTI.",
          type: "rhombus",
          featured: true,
        },
      ],
    },
    hangar: {
      label: "DALAM HANGAR",
      title: "AGRA VIDRAVANA",
      btn: "DETAIL PROYEK",
      img: heroKriKrti,
      caption: "Wahana nirawak taktis otonom dengan transmisi telemetri real-time, navigasi waypoint cerdas, dan struktur komposit serat karbon berkekuatan tinggi.",
      badge: "PROTOTIPE V7 // KELAS KRI & KRTI",
      specs: [
        { label: "Klasifikasi", value: "Tactical VTOL UAV" },
        { label: "Wingspan", value: "2.400 mm" },
        { label: "Flight Controller", value: "Pixhawk 4 ArduPilot" },
        { label: "Daya Tahan Terbang", value: "90 Menit" },
        { label: "Bobot Maks (MTOW)", value: "8.5 Kg" },
        { label: "Telemetri", value: "915MHz + 4G LTE" },
      ],
    },
    faq: {
      label: "BUTUH JAWABAN",
      heading: "PERTANYAAN YANG SERING DIAJUKAN",
      items: [
        {
          q: "Apa itu Robotika di UKM RIPTEK UNNES?",
          a: "Robotika UNNES adalah komunitas dan divisi riset di bawah naungan UKM RIPTEK Universitas Negeri Semarang yang berfokus pada pengembangan riset teknologi terapan, sistem otonom, dan pendelegasian resmi ke Kontes Robot Indonesia (KRI & KRTI).",
        },
        {
          q: "Apa saja yang dipelajari di Robotika UNNES?",
          a: "Anggota mempelajari pemrograman mikrokontroler (C++/Python/ROS), perancangan sirkuit elektronika & PCB, desain mekanik CAD/CAM 3D printing, visi komputer (AI/OpenCV), serta sistem kendali otomatis.",
        },
        {
          q: "Apakah robotika hanya merakit fisik robot?",
          a: "Tidak. Robotika mencakup integrasi multidisiplin ilmu: algoritma kecerdasan buatan, pemrosesan sensor real-time, simulasi dinamika fisika, arsitektur firmware, dan perakitan mekanikal presisi.",
        },
        {
          q: "Apa tujuan utama mempelajari robotika?",
          a: "Menciptakan otomasi dan solusi cerdas yang mampu menyelesaikan tantangan praktis manusia, mengoptimalkan efisiensi industri, serta membawa prestasi bagi almamater dan bangsa.",
        },
        {
          q: "Siapa saja yang bisa bergabung dengan Robotika UNNES?",
          a: "Seluruh mahasiswa aktif Universitas Negeri Semarang dari berbagai fakultas dan jurusan yang memiliki minat, dedikasi, serta komitmen tinggi di bidang sains, teknologi, rekayasa, dan matematika (STEM).",
        },
      ],
    },
    contact: {
      label: "KONTAK KAMI",
      heading: "KIRIMKAN PESAN KEPADA KAMI!",
      hqLabel: "Kantor Pusat / Sekretariat",
      hqValue: "Kampus UNNES, Jl. Raya Banaran, Sekaran, Kec. Gunung Pati, Kota Semarang, Jawa Tengah 50229",
      hqSub: "Gedung UKM RIPTEK — Universitas Negeri Semarang",
      picLabel: "Koordinator / PIC",
      picName: "Syauqi Irfan R.",
      picPhone: "081225735949",
      emailLabel: "Email Resmi",
      emailValue: "robotika@mail.unnes.ac.id",
      socialLabel: "Kanal Media Sosial",
      socialValue: "@robotikaunnes",
      chatWa: "CHAT VIA WHATSAPP",
      form: {
        name: "Nama Lengkap",
        email: "Alamat Email",
        interest: "Divisi atau Minat Proyek",
        message: "Pesan / Keterangan Kerjasama",
        upload: "Unggah Dokumen / Proposal",
        send: "KIRIM PESAN",
        success: "Pesan Anda berhasil dikirim ke tim Robotika UNNES! Kami akan segera menghubungi Anda.",
      },
    },
    footer: {
      rights: "© 2026 Robotika UNNES. Hak cipta dilindungi undang-undang.",
    },
  },
  en: {
    nav: {
      about: "ABOUT US",
      programs: "PROGRAMS",
      hangar: "HANGAR",
      faq: "FAQ",
      contact: "CONTACT",
      getInTouch: "GET IN TOUCH",
    },
    hero: {
      titleLine1: "I DO AND",
      titleLine2: "I UNDERSTAND",
      tagline: "TALENT INCUBATOR & HIGH-PERFORMANCE ROBOTICS COMMUNITY OF UNNES",
      filmstrip: [
        {
          id: 1,
          title: "KRI & KRTI Competition Flight Delegation",
          img: heroKriKrti,
          tall: false,
          grayscale: true,
        },
        {
          id: 2,
          title: "Robotika UNNES Workshop & Delegation Showcase",
          img: heroWorkshop,
          tall: true,
          tintRed: true,
        },
        {
          id: 3,
          title: "Hexapod & Field Robot Prototyping Review",
          img: heroHexapod,
          tall: true,
        },
        {
          id: 4,
          title: "Riptek UNNES Robotics Team Gathering",
          img: heroGathering,
          tall: false,
          grayscale: true,
        },
      ],
    },
    about: {
      label: "ABOUT US — CREATIVITY, COURAGE, FUTURE",
      heading: "HOME OF ROBOTICS TALENT & TECHNOLOGY AT UNNES",
      image: heroHexapod,
      visionTag: "ABOUT & VISION",
      description: "Robotika UNNES is a student research sub-organization under UKM RIPTEK Universitas Negeri Semarang serving as an incubator for engineering talent. Through applied prototyping and national competitions, members master embedded systems, mechanical design, artificial intelligence, and automated software workflows.",
      vision: "VISION: To cultivate an innovative, creative, and nationally acclaimed UNNES Robotics Community.",
      missions: [
        {
          num: "01",
          title: "MISSION 01",
          desc: "To enhance members' passion, technical knowledge, and skills in applied robotics.",
        },
        {
          num: "02",
          title: "MISSION 02",
          desc: "To establish strategic partnerships with industry and academic institutions to empower robotics endeavors.",
        },
        {
          num: "03",
          title: "MISSION 03",
          desc: "To prepare elite UNNES robotics contingents to compete and excel in national championships.",
        },
      ],
    },
    teamRibbon: {
      text1: "OUR TEAM ADVANCES",
      text2: "AUTONOMOUS ROBOTICS",
      text3: "WITH",
      text4: "PRECISION",
      text5: "& EXCELLENCE",
      avatars: [
        avatar1,
        avatar2,
        avatar3,
      ],
    },
    programs: {
      label: "OUR PROGRAMS & GALLERY",
      headingLine1: "BEYOND",
      headingLine2: "ROBOTICS",
      subtitle: "COMPREHENSIVE PROTOTYPING & KNOWLEDGE SHARING. FULL SPECTRUM OF RESEARCH ACTIVITIES, ENSURING A SEAMLESS JOURNEY.",
      list: [
        {
          id: "lri",
          title: "LRI (Indonesian Robot Contest)",
          desc: "Inauguration and official delegation of the UNNES Robotics contingent representing the university in the national Indonesian Robot Contest organized by BPTI.",
          type: "circle",
        },
        {
          id: "orobo",
          title: "O-Robo (Robotics Orientation)",
          desc: "Orientation event organized to introduce each technical sub-division of Robotika UNNES to prospective student engineers.",
          type: "bars",
        },
        {
          id: "school",
          title: "Robotic School",
          desc: "Comprehensive workshop series designed to teach and equip university students with fundamental and advanced robotics and coding proficiencies.",
          type: "dot",
        },
        {
          id: "studibanding",
          title: "Comparative Study",
          desc: "Benchmarking program to exchange knowledge, explore advanced lab practices, and foster relationships with university robotics teams nationwide.",
          type: "line",
        },
        {
          id: "sponsorship",
          title: "Sponsorship & Partnership",
          desc: "Strategic synergy with industry partners and corporations to support R&D funding and component procurement for national competitions.",
          type: "rhombus",
          featured: true,
        },
      ],
    },
    hangar: {
      label: "ON HANGAR",
      title: "AGRA VIDRAVANA",
      btn: "ABOUT PROJECT",
      img: heroKriKrti,
      caption: "Autonomous tactical unmanned aerial vehicle equipped with real-time telemetry streaming, smart waypoint routing, and carbon-fiber composite architecture.",
      badge: "PROTOTYPE V7 // KRI & KRTI CLASS",
      specs: [
        { label: "Classification", value: "Tactical VTOL UAV" },
        { label: "Wingspan", value: "2,400 mm" },
        { label: "Flight Controller", value: "Pixhawk 4 ArduPilot" },
        { label: "Flight Endurance", value: "90 Minutes" },
        { label: "Max Takeoff Weight", value: "8.5 Kg" },
        { label: "Telemetry Link", value: "915MHz + 4G LTE" },
      ],
    },
    faq: {
      label: "NEED ANSWERS",
      heading: "FREQUENTLY ASKED QUESTIONS",
      items: [
        {
          q: "What is robotics at UKM RIPTEK UNNES?",
          a: "Robotika UNNES is the premier technology research club under UKM RIPTEK Universitas Negeri Semarang, focusing on autonomous systems, embedded electronics, and representing UNNES at the Indonesian Robot Contest (KRI & KRTI).",
        },
        {
          q: "What do you learn in robotics?",
          a: "You master computer programming (C++, Python, ROS), embedded circuit board design, 3D mechanical CAD drafting, computer vision, and automation control systems.",
        },
        {
          q: "Is robotics only about assembling hardware?",
          a: "No. Robotics is an intricate blend of software algorithms, artificial intelligence, real-time sensor processing, and precision mechanical engineering.",
        },
        {
          q: "What is the main goal of studying robotics?",
          a: "To invent intelligent automated systems that resolve engineering challenges, enhance productivity, and achieve national pride for UNNES.",
        },
        {
          q: "Who can join Robotika UNNES?",
          a: "All active students of Universitas Negeri Semarang across all faculties and departments who possess curiosity, dedication, and enthusiasm for STEM disciplines.",
        },
      ],
    },
    contact: {
      label: "CONTACT US",
      heading: "DROP US A LINE!",
      hqLabel: "Headquarters",
      hqValue: "UNNES Campus, Jl. Raya Banaran, Sekaran, Gunung Pati, Semarang, Central Java 50229",
      hqSub: "UKM RIPTEK Building — Universitas Negeri Semarang",
      picLabel: "PIC / Coordinator",
      picName: "Syauqi Irfan R.",
      picPhone: "+62 812-2573-5949",
      emailLabel: "Official Email",
      emailValue: "robotika@mail.unnes.ac.id",
      socialLabel: "Social Channels",
      socialValue: "@robotikaunnes",
      chatWa: "CHAT VIA WHATSAPP",
      form: {
        name: "Full Name",
        email: "Email Address",
        interest: "Division or Project Interest",
        message: "Message / Partnership Inquiries",
        upload: "Upload Documents / RFP",
        send: "SEND MESSAGE",
        success: "Your message has been sent successfully to Robotika UNNES! We will get in touch with you shortly.",
      },
    },
    footer: {
      rights: "© 2026 Robotika UNNES. All rights reserved.",
    },
  },
};

export const LOGO_URL = logo;
