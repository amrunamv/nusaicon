# NusaIcons 🎨✨

**Ikon yang Didesain untuk Keseriusan.**  
NusaIcons adalah pustaka ikon SVG open-source modern dan ringan yang dirancang dengan teknik **CSS Masking**.

🌐 **Live Site:** [https://amrunamv.github.io/nusaicon/](https://amrunamv.github.io/nusaicon/)  
📦 **NPM:** [https://www.npmjs.com/package/nusaicons](https://www.npmjs.com/package/nusaicons)

![NusaIcons Banner](https://img.shields.io/badge/NusaIcons-v1.0.0-4f46e5?style=for-the-badge&logo=appveyor)
![npm](https://img.shields.io/npm/v/nusaicons?style=for-the-badge&color=cb0000)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Icons](https://img.shields.io/badge/Icons-38+-orange?style=for-the-badge)

---

## 🚀 Instalasi

### Via NPM
```bash
npm install nusaicons
```

### Via Yarn
```bash
yarn add nusaicons
```

### Via CDN (tanpa instalasi)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/amrunamv/nusaicon@main/nusaicons.css">
```

---

## 💻 Cara Penggunaan

### 1. HTML Biasa (via CDN CSS)
Setelah memasang stylesheet, gunakan tag `<i>` dengan class `icon-{nama-ikon}`:
```html
<button>
  <i class="icon-download"></i> Unduh File
</button>
```

### 2. JavaScript / Node.js (CommonJS)
```js
const { getSvg, getIcon, icons } = require('nusaicons');

// Dapatkan SVG sebagai string
const svgString = getSvg('home');
// → <svg ...>...</svg>

// Dengan opsi kustom
const customSvg = getSvg('heart', { size: 32, color: '#ef4444' });

// Dapatkan data ikon
const iconData = getIcon('star');
// → { name: 'star', category: 'Umum', path: '...' }

// Daftar semua ikon
console.log(icons.length); // 38
```

### 3. JavaScript ES Modules (ESM / Vite / Next.js)
```js
import { getSvg, getIcon, getByCategory, iconNames } from 'nusaicons';
import 'nusaicons/css'; // Import stylesheet

// Gunakan di komponen
const homeIcon = getSvg('home', { size: 24, className: 'text-indigo-600' });

// Filter berdasarkan kategori
const navIcons = getByCategory('Navigasi');

// Daftar semua nama ikon
console.log(iconNames); // ['home', 'menu', 'search', ...]
```

### 4. React (JSX)
```jsx
import { getSvg } from 'nusaicons';
import 'nusaicons/css';

function MyButton() {
  return (
    <button>
      <span dangerouslySetInnerHTML={{ __html: getSvg('download') }} />
      Unduh
    </button>
  );
}
```

### 5. Vue 3
```vue
<template>
  <button>
    <span v-html="downloadIcon" />
    Unduh
  </button>
</template>

<script setup>
import { getSvg } from 'nusaicons';
import 'nusaicons/css';

const downloadIcon = getSvg('download', { size: 20 });
</script>
```

---

## 🎨 Kustomisasi Warna & Ukuran

NusaIcons menggunakan **CSS Masking** — ikon menyerap warna dari teks (`currentColor`):

```html
<!-- Via style langsung -->
<i class="icon-heart" style="color: #ef4444; font-size: 32px;"></i>

<!-- Via Tailwind CSS -->
<i class="icon-star text-yellow-500 text-3xl"></i>

<!-- Via class CSS biasa -->
<style>
.my-icon { color: #4f46e5; font-size: 24px; }
</style>
<i class="icon-home my-icon"></i>
```

---

## 📦 Daftar Ikon (38 Ikon)

| Kategori | Ikon |
|---|---|
| **Navigasi** | `home`, `menu`, `search`, `arrow-left`, `arrow-right`, `chevron-down`, `close`, `check`, `map-pin` |
| **User** | `user`, `users`, `lock`, `shield` |
| **Sistem** | `plus`, `trash`, `edit`, `folder`, `calendar`, `download`, `upload`, `printer`, `link`, `settings` |
| **Media** | `image`, `video`, `eye`, `eye-off`, `sun`, `moon` |
| **Umum** | `shopping-cart`, `star`, `bell`, `heart`, `mail`, `camera`, `share`, `alert-circle`, `info` |

---

## 🛠️ API

| Fungsi | Parameter | Keterangan |
|---|---|---|
| `getSvg(name, options?)` | `name: string`, `options: {size, color, strokeWidth, className}` | Mengembalikan SVG string |
| `getIcon(name)` | `name: string` | Mengembalikan data ikon |
| `getByCategory(category)` | `category: string` | Filter ikon by kategori |
| `icons` | — | Array semua data ikon |
| `iconNames` | — | Array semua nama ikon |
| `iconCategories` | — | Array semua kategori |

---

## 📄 Lisensi

[MIT](./LICENSE) © 2026 [Amrunamv](https://github.com/amrunamv)

**Dibuat dengan ❤️ untuk komunitas Developer Indonesia.**
