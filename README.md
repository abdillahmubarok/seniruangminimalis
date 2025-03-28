# SENI RUANG MINIMALIS PEKALONGAN

![SENI RUANG MINIMALIS PEKALONGAN](https://via.placeholder.com/1200x630/10B981/FFFFFF?text=SENI+RUANG+MINIMALIS+PEKALONGAN)

Website profesional untuk SENI RUANG MINIMALIS PEKALONGAN, spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik.

## 📋 Daftar Isi

- [Fitur Utama](#fitur-utama)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Komponen Kunci](#komponen-kunci)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
- [Customisasi](#customisasi)
- [Optimasi](#optimasi)
- [Kredit](#kredit)
- [Lisensi](#lisensi)

## ✨ Fitur Utama

- **Desain Modern & Responsif**: Tampilan yang optimal di semua perangkat (desktop, tablet, mobile)
- **Animasi Kustom**: Efek parallax, transisi halus, dan animasi scroll yang meningkatkan UX
- **Performa Tinggi**: Optimasi gambar, lazy loading, dan kode yang efisien
- **SEO-Friendly**: Struktur yang ramah mesin pencari dengan metadata yang dapat disesuaikan
- **Integrasi WhatsApp**: Kontak langsung melalui WhatsApp untuk konsultasi
- **UI/UX Premium**: Tampilan profesional yang mencerminkan kualitas layanan
- **Galeri Proyek**: Showcase portofolio proyek interior yang telah dikerjakan
- **Testimoni Klien**: Bagian testimoni untuk meningkatkan kepercayaan pengunjung

## 🚀 Teknologi

Proyek ini dibangun dengan teknologi modern:

- **[Next.js](https://nextjs.org/)**: Framework React dengan fitur SSR, SSG, dan routing
- **[React](https://reactjs.org/)**: Library JavaScript untuk membangun antarmuka pengguna
- **[TypeScript](https://www.typescriptlang.org/)**: JavaScript dengan sintaksis tipe data
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first
- **[Swiper](https://swiperjs.com/)**: Library modern untuk slider dan carousel
- **[Font Awesome](https://fontawesome.com/)**: Pustaka ikon untuk UI/UX yang lebih baik
- **[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)**: Untuk animasi scroll-triggered

## 📁 Struktur Proyek

```
seni-ruang-minimalis/
├── app/                       # Struktur Routing App
│   ├── page.tsx               # Homepage
│   ├── about/                 # Halaman Tentang Kami
│   ├── services/              # Halaman Layanan
│   ├── portfolio/             # Halaman Portofolio
│   └── contact/               # Halaman Kontak
├── components/                # Komponen React
│   ├── home/                  # Komponen spesifik Homepage
│   ├── about/                 # Komponen spesifik About
│   ├── services/              # Komponen spesifik Services
│   ├── layout/                # Komponen Layout (Header, Footer)
│   └── ui/                    # Komponen UI Reusable
├── public/                    # Aset Statis
│   ├── images/                # Gambar
│   │   ├── gallery/           # Galeri proyek
│   │   ├── headers/           # Gambar header halaman
│   │   └── section/           # Gambar untuk section
│   └── fonts/                 # Font kustom
├── styles/                    # Style Global
│   └── globals.css            # CSS Global (termasuk animasi)
├── types/                     # Type definitions
└── package.json               # Dependencies
```

## 🧩 Komponen Kunci

### Layout Components
- **Header**: Navigasi responsif dengan efek scroll
- **Footer**: Footer multi-kolom dengan peta lokasi dan watermark
- **PageHeader**: Header halaman dengan gambar latar dan efek parallax

### UI Components
- **AnimatedHeadline**: Judul dengan animasi teks bergantian
- **CTASection**: Call-to-action dengan efek parallax dan animasi
- **TestimonialsSection**: Carousel testimoni klien

### Home Components
- **HeroSection**: Bagian hero dengan animasi
- **ServicesSection**: Showcase layanan yang ditawarkan
- **WhyChooseUsSection**: Fitur keunggulan bisnis
- **QuotationSection**: Bagian ajakan untuk mendapatkan penawaran
- **CallToAction**: CTA untuk kontak langsung

## 🔧 Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/username/seni-ruang-minimalis.git
   cd seni-ruang-minimalis
   ```

2. Install dependencies:
   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) dengan browser untuk melihat hasilnya.

## 💻 Penggunaan

### Menambahkan Halaman Baru

1. Buat folder baru di direktori `app/`:
   ```bash
   mkdir app/new-page
   ```

2. Buat file `page.tsx` di dalam folder tersebut:
   ```tsx
   import React from 'react'
   import PageHeader from '@/components/ui/PageHeader'

   export default function NewPage() {
     return (
       <main>
         <PageHeader 
           title="Judul Halaman" 
           description="Deskripsi halaman."
           backgroundImage="/images/headers/newpage-header.jpg"
         />
         {/* Konten halaman lainnya */}
       </main>
     )
   }
   ```

### Mengubah Konten

Sebagian besar konten dapat diubah langsung di komponen-komponen. Contoh mengubah data testimoni di `TestimonialsSection.tsx`:

```tsx
// Testimoni data
const testimonials = [
  {
    id: 1,
    name: "Nama Klien",
    title: "Profesi",
    content: "Testimoni klien...",
    image: "/images/testimonials/client1.jpg"
  },
  // Tambahkan testimoni lainnya...
]
```

## 🎨 Customisasi

### Mengubah Tema Warna

Edit file `tailwind.config.js` untuk mengubah skema warna:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#10B981',   // Ubah dengan warna primer pilihan Anda
        secondary: '#F59E0B', // Ubah dengan warna sekunder pilihan Anda
        'primary-dark': '#059669',
        'secondary-dark': '#D97706',
      }
    }
  }
}
```

### Menambahkan Font Kustom

1. Tambahkan font ke folder `public/fonts/`
2. Edit file `globals.css` untuk menambahkan font:
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/CustomFont.woff2') format('woff2');
     font-weight: normal;
     font-style: normal;
     font-display: swap;
   }
   ```

3. Update `tailwind.config.js`:
   ```js
   module.exports = {
     theme: {
       extend: {
         fontFamily: {
           sans: ['CustomFont', 'sans-serif'],
         }
       }
     }
   }
   ```

## ⚡ Optimasi

### Optimasi Gambar

Gunakan format gambar modern (WebP) dan pastikan menggunakan komponen `Image` dari Next.js untuk optimasi otomatis:

```tsx
import Image from 'next/image'

<Image 
  src="/images/project.jpg" 
  alt="Deskripsi" 
  width={800} 
  height={600} 
  quality={85}
  placeholder="blur" 
  blurDataURL="data:image/jpeg;base64,..." 
/>
```

### Lighthouse Score

Website ini dioptimasi untuk mencapai skor tinggi di semua metrik Lighthouse:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## 👏 Kredit

- Website didesain dan dikembangkan oleh [PT MUBAROKAH DIGITAL NUSANTARA](https://mubarokah.com)
- Gambar dari [Pexels](https://pexels.com) dan aset bisnis SENI RUANG MINIMALIS PEKALONGAN
- Ikon dari [Font Awesome](https://fontawesome.com)

## 📄 Lisensi

© 2025 SENI RUANG MINIMALIS PEKALONGAN. Seluruh Hak Dilindungi.