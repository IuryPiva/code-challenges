// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

function candy(ratings: number[]): number {
  const candies = new Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i++) {
    const current = ratings[i];

    const prev = ratings[i - 1];
    const prevAward = candies[i - 1];
    const isPrevSmaller = !!(typeof prev !== "undefined" && current > prev);

    if (isPrevSmaller) {
      candies[i] = prevAward + 1;
    }
  }

  for (let i = ratings.length; i >= 0; i--) {
    const current = ratings[i];

    const prev = ratings[i + 1];
    const prevAward = candies[i + 1];
    const isPrevSmaller = !!(typeof prev !== "undefined" && current > prev);

    if (isPrevSmaller && candies[i] <= prevAward) {
      candies[i] = prevAward + 1;
    }
  }

  return candies.reduce((acc, curr) => acc + curr, 0);
}

function test(ratings: number[], result: number) {
  const r = candy(ratings);
  console.log(r, result, r == result);
}

test([1, 0, 2], 5);
test([1, 2, 2], 4);
test([60, 80, 100, 100, 100, 100, 100], 10);
test([60, 80, 100, 90, 80, 100, 100], 12);
test([60, 80, 100, 90, 80, 70, 100], 15);
test([1, 3, 4, 5, 2], 11);
//    1  2  3  4  1
