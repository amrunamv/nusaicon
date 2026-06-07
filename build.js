/**
 * NusaIcons - Build Script
 * Menghasilkan file dist/index.esm.js dan dist/index.cjs.js
 */

const fs = require('fs');
const path = require('path');
const icons = require('./icons.js');

// Pastikan folder dist ada
if (!fs.existsSync('dist')) fs.mkdirSync('dist');

// ─────────────────────────────────────────────────────────
// 1. Generate getSvg() helper
// ─────────────────────────────────────────────────────────
function buildSvgString(icon, { size = 24, color = 'currentColor', strokeWidth = 2, className = '' } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="nusaicon ${className}">${icon.path}</svg>`;
}

// ─────────────────────────────────────────────────────────
// 2. Build iconMap object  { name: { path, category, svg } }
// ─────────────────────────────────────────────────────────
const iconMap = {};
icons.forEach(icon => {
  iconMap[icon.name] = {
    name: icon.name,
    category: icon.category,
    path: icon.path,
    toSvg(options = {}) {
      return buildSvgString(icon, options);
    }
  };
});

const iconNames = icons.map(i => i.name);
const iconCategories = [...new Set(icons.map(i => i.category))];

// ─────────────────────────────────────────────────────────
// 3. ESM Output (dist/index.esm.js)
// ─────────────────────────────────────────────────────────
const esmContent = `/**
 * NusaIcons v1.0.0 - ESM Build
 * https://amrunamv.github.io/nusaicon/
 * License: MIT
 */

export const icons = ${JSON.stringify(icons, null, 2)};

export const iconNames = ${JSON.stringify(iconNames)};

export const iconCategories = ${JSON.stringify(iconCategories)};

/**
 * Dapatkan ikon sebagai string SVG
 * @param {string} name - nama ikon (contoh: 'home', 'heart')
 * @param {object} options - { size, color, strokeWidth, className }
 * @returns {string} SVG string
 */
export function getSvg(name, options = {}) {
  const {
    size = 24,
    color = 'currentColor',
    strokeWidth = 2,
    className = ''
  } = options;
  const icon = icons.find(i => i.name === name);
  if (!icon) {
    console.warn(\`[NusaIcons] Ikon "\${name}" tidak ditemukan.\`);
    return '';
  }
  return \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="0 0 24 24" fill="none" stroke="\${color}" stroke-width="\${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="nusaicon \${className}">\${icon.path}</svg>\`;
}

/**
 * Dapatkan data ikon berdasarkan nama
 * @param {string} name
 * @returns {object|null}
 */
export function getIcon(name) {
  return icons.find(i => i.name === name) || null;
}

/**
 * Filter ikon berdasarkan kategori
 * @param {string} category
 * @returns {Array}
 */
export function getByCategory(category) {
  return icons.filter(i => i.category === category);
}

export default { icons, iconNames, iconCategories, getSvg, getIcon, getByCategory };
`;

// ─────────────────────────────────────────────────────────
// 4. CJS Output (dist/index.cjs.js)
// ─────────────────────────────────────────────────────────
const cjsContent = `/**
 * NusaIcons v1.0.0 - CommonJS Build
 * https://amrunamv.github.io/nusaicon/
 * License: MIT
 */
'use strict';

const icons = ${JSON.stringify(icons, null, 2)};

const iconNames = ${JSON.stringify(iconNames)};

const iconCategories = ${JSON.stringify(iconCategories)};

function getSvg(name, options) {
  const { size = 24, color = 'currentColor', strokeWidth = 2, className = '' } = options || {};
  const icon = icons.find(function(i) { return i.name === name; });
  if (!icon) {
    console.warn('[NusaIcons] Ikon "' + name + '" tidak ditemukan.');
    return '';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="' + strokeWidth + '" stroke-linecap="round" stroke-linejoin="round" class="nusaicon ' + className + '">' + icon.path + '</svg>';
}

function getIcon(name) {
  return icons.find(function(i) { return i.name === name; }) || null;
}

function getByCategory(category) {
  return icons.filter(function(i) { return i.category === category; });
}

module.exports = { icons, iconNames, iconCategories, getSvg, getIcon, getByCategory };
`;

// ─────────────────────────────────────────────────────────
// 5. Dart Output untuk Flutter (dist/nusa_icons.dart)
// ─────────────────────────────────────────────────────────
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

let dartContent = `// NusaIcons v1.0.0 - Flutter/Dart Build
// Auto-generated. Disarankan digunakan dengan package 'flutter_svg' (SvgPicture.string)
// https://amrunamv.github.io/nusaicon/

class NusaIcons {
  NusaIcons._();\n\n`;

icons.forEach(icon => {
  const camelName = toCamelCase(icon.name);
  // Default SVG for Flutter string with fixed default size/color (can be overridden by flutter_svg)
  const svgString = buildSvgString(icon, { size: 24, color: 'currentColor', strokeWidth: 2 });
  dartContent += `  static const String ${camelName} = '''${svgString}''';\n`;
});

dartContent += `}\n`;

// ─────────────────────────────────────────────────────────
// 6. Tulis File
// ─────────────────────────────────────────────────────────
fs.writeFileSync(path.join('dist', 'index.esm.js'), esmContent, 'utf-8');
fs.writeFileSync(path.join('dist', 'index.cjs.js'), cjsContent, 'utf-8');
fs.writeFileSync(path.join('dist', 'nusa_icons.dart'), dartContent, 'utf-8');

console.log('✅ NusaIcons build selesai!');
console.log(`   📦 dist/index.esm.js  (ESM - import)`);
console.log(`   📦 dist/index.cjs.js  (CJS - require)`);
console.log(`   💙 dist/nusa_icons.dart (Flutter / Dart)`);
console.log(`   🎨 nusaicons.css      (CSS - link/import)`);
console.log(`   Total: ${icons.length} ikon tersedia`);
