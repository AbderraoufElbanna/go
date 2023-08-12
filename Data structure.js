function sumOfDistinctElements(set1, set2) {
    const distinctElements = new Set();

    for (const num of set1) {
        distinctElements.add(num);
    }

    for (const num of set2) {
        distinctElements.add(num);
    }

    let sum = 0;
    for (const num of distinctElements) {
        sum += num;
    }

    return sum;
}

// Example usage
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result);
