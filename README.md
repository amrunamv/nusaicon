# NusaIcons 🎨✨

**Ikon yang Didesain untuk Keseriusan.**  
NusaIcons adalah pustaka ikon *open-source* modern dan ringan yang dirancang dengan teknik **CSS Masking**. Ikon-ikon ini mewarisi warna dari *parent text* (`currentColor`) sehingga sangat fleksibel dan mudah digunakan di segala framework UI, termasuk Tailwind CSS.

![NusaIcons Banner](https://img.shields.io/badge/NusaIcons-v1.0-4f46e5?style=for-the-badge&logo=appveyor)
![CSS](https://img.shields.io/badge/Pure_CSS-Yes-emerald?style=for-the-badge)

## 🚀 Instalasi Cepat (via CDN)

Tidak perlu mengunduh file, cukup tambahkan tag `<link>` berikut di dalam `<head>` dokumen HTML Anda:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/amrunamv/nusaicon@main/nusaicons.css">
```

## 💻 Cara Penggunaan

Gunakan tag `<i>` dengan class `icon-{nama-ikon}`. Ikon akan secara otomatis menyesuaikan ukuran font dan warna dari elemen di sekitarnya.

```html
<button>
  <i class="icon-download"></i> Unduh File
</button>
```

### Kustomisasi Warna & Ukuran (Contoh Tailwind CSS)

Karena menggunakan `currentColor`, Anda dapat mewarnainya semudah mewarnai teks biasa.

```html
<!-- Ikon berwarna merah dengan ukuran besar -->
<i class="icon-heart text-rose-500 text-3xl"></i>

<!-- Ikon menyesuaikan warna teks parent -->
<div class="text-indigo-600 font-bold text-lg">
  <i class="icon-user"></i> Profil Saya
</div>
```

## 📦 Daftar Ikon (Saat Ini 38 Ikon)

*   **Navigasi**: `home`, `menu`, `search`, `arrow-left`, `arrow-right`, `chevron-down`, `close`, `check`, `map-pin`
*   **User & Keamanan**: `user`, `users`, `lock`, `shield`
*   **Aksi & Sistem**: `plus`, `trash`, `edit`, `folder`, `calendar`, `download`, `upload`, `printer`, `link`
*   **Media & UI**: `image`, `video`, `eye`, `eye-off`, `sun`, `moon`, `alert-circle`, `info`
*   **Umum**: `shopping-cart`, `star`, `bell`, `settings`, `heart`, `mail`, `camera`, `share`

Lihat galeri interaktifnya di halaman `index.html`.

## 🛠️ Pengembangan

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/amrunamv/nusaicon.git
   ```
2. Buka `index.html` di browser Anda.
3. Untuk menambahkan ikon baru, update *array* `icons` di `index.html` dan tambahkan pemetaan Base64 SVG di `nusaicons.css`.

---
**Dibuat dengan ❤️ untuk komunitas Developer Indonesia.**
