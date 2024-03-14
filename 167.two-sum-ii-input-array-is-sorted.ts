function twoSum(numbers: number[], target: number): number[] {
  let i = 0,
    j = numbers.length - 1;

  while (i <= j) {
    const sum = numbers[i] + numbers[j];

    if (sum == target) {
      return [i + 1, j + 1];
    }

    if (sum > target) j--;
    else i++;
  }

  return [];
}

function test(numbers: number[], target: number, expected: number[]) {
  console.log("\n");
  const r = twoSum(numbers, target);

  for (let i = 0; i < r.length; i++) {
    const line = r[i];
    const expectedLine = expected[i];

    console.log(line, expectedLine, line === expectedLine);
  }
}

test([2, 7, 11, 15], 9, [1, 2]);

test([2, 3, 4], 6, [1, 3]);

test([-1, 0], -1, [1, 2]);
