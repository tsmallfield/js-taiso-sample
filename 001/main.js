//
// 「JS体操」のサンプル問題
//
// JSON 文字列を綺麗に整形する問題です♪
// beautify.js のエラーを解消し、且つ、コードゴルフをしてください♪
// 文字数はコンソールに表示されます♪
//
// ※ beautify.js のみを編集してください。
// ※ beautify.js 以外のファイルは編集しないでください♪
// ※ JSON.parse() と JSON.stringify() は使用禁止です♪
// ※ 他の window の JSON.parse() と JSON.stringify() を使うなども禁止です♪
//

import beautify from './beautify.js';

const a = await fetch('./ugly.json').then(res => res.text());
const b = JSON.stringify(JSON.parse(a), null, 2);

JSON.parse = JSON.stringify = () => {
  throw new Error('JSON.parse() も JSON.stringify() も使用禁止だよ！');
};

const result = beautify(a);

console.assert(result === b, `\n${result}`, `\n${b}`);

const { length } = await fetch('beautify.js').then(res => res.text());

console.log(
  `現在の文字数(≒length)\n%c${length}%c文字`,
  'color:#0af;font-weight:bold;font-size:800%;',
  'font-size:100%;',
);
