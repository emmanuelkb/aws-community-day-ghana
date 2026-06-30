#!/usr/bin/env node
/**
 * Build script: compile each .jsx to a sibling .js wrapped in an IIFE.
 * This prevents top-level const/let declarations from colliding in the
 * global scope when multiple <script> tags are loaded on one page.
 *
 * Usage: node build.js
 * Or via npm: npm run build
 */

const { transformFileSync } = require('@babel/core');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const FILES = [
  'site-core.jsx',
  'site-hero.jsx',
  'site-program.jsx',
  'site-rest.jsx',
  'page-agenda.jsx',
  'page-cfp.jsx',
  'page-coc.jsx',
  'page-speakers.jsx',
  'page-sponsors.jsx',
  'page-venue.jsx',
  'page-volunteer.jsx',
  'boot-index.jsx',
  'boot-agenda.jsx',
  'boot-cfp.jsx',
  'boot-code-of-conduct.jsx',
  'boot-speakers.jsx',
  'boot-sponsors.jsx',
  'boot-venue.jsx',
  'boot-volunteer.jsx',
];

let compiled = 0;
for (const src of FILES) {
  const srcPath = path.join(ROOT, src);
  const destPath = path.join(ROOT, src.replace(/\.jsx$/, '.js'));

  const result = transformFileSync(srcPath, {
    presets: [['@babel/preset-react', { runtime: 'classic' }]],
    filename: src,
  });

  // Wrap in IIFE so top-level const/let don't leak into global scope.
  // Components export themselves via window.* inside each file.
  const wrapped = `(function(){\n${result.code}\n})();\n`;
  fs.writeFileSync(destPath, wrapped, 'utf8');
  console.log(`  compiled ${src} → ${path.basename(destPath)}`);
  compiled++;
}

console.log(`\nDone. ${compiled} files compiled.`);
console.log('Edit .jsx sources, run `npm run build`, commit the .js files.');
