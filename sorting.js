function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        const currentElement = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = currentElement;
    }
}

// Example usage
const arrayToSort = [12, 11, 13, 5, 6];
insertionSort(arrayToSort);
console.log("Sorted array:", arrayToSort);
