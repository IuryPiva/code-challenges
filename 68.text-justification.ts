function fullJustify(words: string[], maxWidth: number): string[] {
  const lines: string[][] = [[]];

  const getLastLineWidth = () => {
    const lastLineLength = lines[lines.length - 1].length;

    return (
      lines[lines.length - 1].reduce((acc, cur) => acc + cur.length, 0) +
      lastLineLength
    );
  };

  const appendToLastLine = (word: string) => lines[lines.length - 1].push(word);
  const appendToNewLine = (word: string) => lines.push([word]);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (getLastLineWidth() + word.length <= maxWidth) {
      appendToLastLine(word);
    } else {
      appendToNewLine(word);
    }
  }

  const makeSpace = (n: number) => new Array(n).fill(" ").join("");

  const addSpaces = (ws: string[], index: number): string => {
    const width = ws.reduce((acc, cur) => acc + cur.length, 0);
    const spaceLeft = maxWidth - width;
    const spaces = ws.length - 1;

    if (!spaces || index == lines.length - 1) {
      return ws.join(" ") + makeSpace(spaceLeft - spaces);
    }

    const intSpaceBetween = Math.floor(spaceLeft / spaces);

    const distributedSpace = new Array(spaces).fill(intSpaceBetween);

    for (let i = 0; i < spaceLeft - intSpaceBetween * spaces; i++) {
      distributedSpace[i]++;
    }

    distributedSpace.push(0);

    return ws.reduce(
      (acc, cur, i) => acc + cur + makeSpace(distributedSpace[i]),
      ""
    );
  };

  return lines.map(addSpaces);
}

function test(words: string[], maxWidth: number, expected: string[]) {
  const r = fullJustify(words, maxWidth);

  for (let i = 0; i < r.length; i++) {
    const line = r[i];
    const expectedLine = expected[i];

    console.log("\n", line, "\n", expectedLine, line === expectedLine);
  }
}

test(["This", "is", "an", "example", "of", "text", "justification."], 16, [
  "This    is    an",
  "example  of text",
  "justification.  ",
]);

test(["What", "must", "be", "acknowledgment", "shall", "be"], 16, [
  "What   must   be",
  "acknowledgment  ",
  "shall be        ",
]);

test(
  [
    "Science",
    "is",
    "what",
    "we",
    "understand",
    "well",
    "enough",
    "to",
    "explain",
    "to",
    "a",
    "computer.",
    "Art",
    "is",
    "everything",
    "else",
    "we",
    "do",
  ],
  20,
  [
    "Science  is  what we",
    "understand      well",
    "enough to explain to",
    "a  computer.  Art is",
    "everything  else  we",
    "do                  ",
  ]
);
