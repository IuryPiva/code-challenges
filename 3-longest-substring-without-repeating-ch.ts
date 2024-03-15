export function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();
  let left = 0,
    right = 0,
    length = 0;

  while (right < s.length) {
    const rightChar = s.charAt(right);
    const charIndex = map.get(rightChar);
    console.log({ rightChar, charIndex, left, right, length });

    if (typeof charIndex == "number") {
      left = charIndex + 1;
    }

    map.set(rightChar, right);
    length = Math.max(length, right - left + 1);
    console.log({ rightChar, charIndex, left, right, length });
    right++;
  }

  return length || s.length;
}

export function test(s: string, expected: number) {
  const result = lengthOfLongestSubstring(s);

  console.log({ result, expected }, result == expected);
}

// test("abcabcbb", 3);
// test("bbbbb", 1);
// test("pwwkew", 3);
test("abba", 2);
