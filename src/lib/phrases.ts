/**
 * Splits a CJK headline after sentence punctuation so templates can keep each
 * phrase on one line ("もう一度、" / "遊ぼう。") instead of breaking mid-word.
 * Latin text is returned whole; spaces already give it natural break points.
 */
export function phrases(text: string): string[] {
  if (!/[぀-ヿ㐀-鿿]/.test(text)) return [text]
  return text.match(/[^、。，！？]+[、。，！？]*/g) ?? [text]
}
