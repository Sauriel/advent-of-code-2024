import { TEST_DATA_1, TEST_DATA_2 } from "./day-1-data";

// https://adventofcode.com/2024/day/1

const testArray1 = [3,4,2,1,3,3];
const testArray2 = [4,3,5,3,9,3];

function calculateTotalDistance(array1: number[], array2: number []) : number {
    if (array1.length !== array2.length) {
      throw new Error('arrays must be of the same length');
    }

    const sortedArray1 = array1.toSorted();
    const sortedArray2 = array2.toSorted();
    let distance = 0;

    for (let i = 0; i < sortedArray1.length; ++i) {
      distance += Math.abs(sortedArray1[i] - sortedArray2[i]);
    }

    return distance;
}

const totalDistance = calculateTotalDistance(TEST_DATA_1, TEST_DATA_2);

console.log(`The total distance between the points is: "${totalDistance}"`); // Result: 2756096

// https://adventofcode.com/2024/day/1#part2

function calculateSimilarityScore(array1: number[], array2: number []) : number {
  const appearenceMap: Map<number, number> = new Map();

  array2.forEach((value) => {
    const appearence = appearenceMap.get(value) ?? 0;
    appearenceMap.set(value, appearence + 1);
  });

  let similarityScore = 0;

  array1.forEach((value) => {
    const appearence = appearenceMap.get(value) ?? 0;
    similarityScore += value * appearence;
  });

  return similarityScore;
}

const similarityScore = calculateSimilarityScore(TEST_DATA_1, TEST_DATA_2);

console.log(`The total similarity score is: "${similarityScore}"`); // Result: 23117829