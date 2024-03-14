// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
function trap(height: number[]): number {
  if (!height.length) return 0;

  let rainCount = 0;

  const highestValue = Math.max(...height);
  let highestValueIndex;

  let leftWall = height[0];
  let i = 0;
  while (typeof highestValueIndex == "undefined") {
    const current = height[i];

    if (current == highestValue) {
      highestValueIndex = i;
      i = height.length;
      break;
    }

    if (current >= leftWall) {
      leftWall = current;
      i++;
      continue;
    }

    rainCount += leftWall - current;
    i++;
  }

  let rightWall = height[height.length - 1];
  for (let j = height.length - 1; j > highestValueIndex; j--) {
    const current = height[j];

    if (current >= rightWall) {
      rightWall = current;
      continue;
    }

    rainCount += rightWall - current;
  }

  return rainCount;
}

function test(height: number[], result: number) {
  const r = trap(height);
  console.log(r, result, r == result);
}

test([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6);
test([4, 2, 0, 3, 2, 5], 9);
test([], 0);
test([2, 0, 2], 2);
test([0, 0, 2], 0);
test([1, 0, 2, 0, 1], 2);
