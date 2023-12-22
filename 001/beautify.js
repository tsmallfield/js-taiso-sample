/**
 * このファイルを JSON.parse() と JSON.stringify() を使用せずに
 * なるべく短い文字数で書き直してください♪
 *
 * @param {string} jsonString
 * @return {string}
 */
export default function beautify(jsonString) {
  return JSON.stringify(
    JSON.parse(jsonString),
    null,
    2,
  );
}
