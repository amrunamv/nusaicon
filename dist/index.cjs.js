/**
 * NusaIcons v1.0.0 - CommonJS Build
 * https://amrunamv.github.io/nusaicon/
 * License: MIT
 */
'use strict';

const icons = [
  {
    "name": "home",
    "category": "Navigasi",
    "path": "<path d=\"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/><polyline points=\"9 22 9 12 15 12 15 22\"/>"
  },
  {
    "name": "menu",
    "category": "Navigasi",
    "path": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>"
  },
  {
    "name": "search",
    "category": "Navigasi",
    "path": "<circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/>"
  },
  {
    "name": "arrow-left",
    "category": "Navigasi",
    "path": "<path d=\"m12 19-7-7 7-7\"/><path d=\"M19 12H5\"/>"
  },
  {
    "name": "arrow-right",
    "category": "Navigasi",
    "path": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>"
  },
  {
    "name": "chevron-down",
    "category": "Navigasi",
    "path": "<path d=\"m6 9 6 6 6-6\"/>"
  },
  {
    "name": "close",
    "category": "Navigasi",
    "path": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>"
  },
  {
    "name": "check",
    "category": "Navigasi",
    "path": "<polyline points=\"20 6 9 17 4 12\"/>"
  },
  {
    "name": "map-pin",
    "category": "Navigasi",
    "path": "<path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/>"
  },
  {
    "name": "user",
    "category": "User",
    "path": "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>"
  },
  {
    "name": "users",
    "category": "User",
    "path": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/>"
  },
  {
    "name": "lock",
    "category": "User",
    "path": "<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\"/><path d=\"M7 11V7a5 5 0 0 1 10 0v4\"/>"
  },
  {
    "name": "shield",
    "category": "User",
    "path": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/>"
  },
  {
    "name": "plus",
    "category": "Sistem",
    "path": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>"
  },
  {
    "name": "trash",
    "category": "Sistem",
    "path": "<path d=\"M3 6h18\"/><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\"/><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\"/><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\"/><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\"/>"
  },
  {
    "name": "edit",
    "category": "Sistem",
    "path": "<path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"/>"
  },
  {
    "name": "folder",
    "category": "Sistem",
    "path": "<path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/>"
  },
  {
    "name": "calendar",
    "category": "Sistem",
    "path": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" ry=\"2\"/><line x1=\"16\" x2=\"16\" y1=\"2\" y2=\"6\"/><line x1=\"8\" x2=\"8\" y1=\"2\" y2=\"6\"/><line x1=\"3\" x2=\"21\" y1=\"10\" y2=\"10\"/>"
  },
  {
    "name": "download",
    "category": "Sistem",
    "path": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"7 10 12 15 17 10\"/><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\"/>"
  },
  {
    "name": "upload",
    "category": "Sistem",
    "path": "<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\"/>"
  },
  {
    "name": "printer",
    "category": "Sistem",
    "path": "<polyline points=\"6 9 6 2 18 2 18 9\"/><path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\"/><rect width=\"12\" height=\"8\" x=\"6\" y=\"14\"/>"
  },
  {
    "name": "link",
    "category": "Sistem",
    "path": "<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"/><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"/>"
  },
  {
    "name": "settings",
    "category": "Sistem",
    "path": "<circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\"/>"
  },
  {
    "name": "image",
    "category": "Media",
    "path": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\"/><circle cx=\"8.5\" cy=\"8.5\" r=\"1.5\"/><polyline points=\"21 15 16 10 5 21\"/>"
  },
  {
    "name": "video",
    "category": "Media",
    "path": "<polygon points=\"23 7 16 12 23 17 23 7\"/><rect width=\"15\" height=\"14\" x=\"1\" y=\"5\" rx=\"2\" ry=\"2\"/>"
  },
  {
    "name": "eye",
    "category": "Media",
    "path": "<path d=\"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>"
  },
  {
    "name": "eye-off",
    "category": "Media",
    "path": "<path d=\"M9.88 9.88a3 3 0 1 0 4.24 4.24\"/><path d=\"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68\"/><path d=\"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>"
  },
  {
    "name": "sun",
    "category": "Media",
    "path": "<circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2\"/><path d=\"M12 20v2\"/><path d=\"m4.93 4.93 1.41 1.41\"/><path d=\"m17.66 17.66 1.41 1.41\"/><path d=\"M2 12h2\"/><path d=\"M20 12h2\"/><path d=\"m6.34 17.66-1.41 1.41\"/><path d=\"m19.07 4.93-1.41 1.41\"/>"
  },
  {
    "name": "moon",
    "category": "Media",
    "path": "<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\"/>"
  },
  {
    "name": "shopping-cart",
    "category": "Umum",
    "path": "<circle cx=\"8\" cy=\"21\" r=\"1\"/><circle cx=\"19\" cy=\"21\" r=\"1\"/><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\"/>"
  },
  {
    "name": "star",
    "category": "Umum",
    "path": "<polygon points=\"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2\"/>"
  },
  {
    "name": "bell",
    "category": "Umum",
    "path": "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/>"
  },
  {
    "name": "heart",
    "category": "Umum",
    "path": "<path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"/>"
  },
  {
    "name": "mail",
    "category": "Umum",
    "path": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"/>"
  },
  {
    "name": "camera",
    "category": "Umum",
    "path": "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>"
  },
  {
    "name": "share",
    "category": "Umum",
    "path": "<circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\"/><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\"/>"
  },
  {
    "name": "alert-circle",
    "category": "Umum",
    "path": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\"/>"
  },
  {
    "name": "info",
    "category": "Umum",
    "path": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"16\" y2=\"12\"/><line x1=\"12\" x2=\"12.01\" y1=\"8\" y2=\"8\"/>"
  }
];

const iconNames = ["home","menu","search","arrow-left","arrow-right","chevron-down","close","check","map-pin","user","users","lock","shield","plus","trash","edit","folder","calendar","download","upload","printer","link","settings","image","video","eye","eye-off","sun","moon","shopping-cart","star","bell","heart","mail","camera","share","alert-circle","info"];

const iconCategories = ["Navigasi","User","Sistem","Media","Umum"];

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
