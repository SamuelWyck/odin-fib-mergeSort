

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const mid = Math.floor(array.length / 2);

    const leftSide = mergeSort(array.slice(0, mid));
    const rightSide = mergeSort(array.slice(mid, array.length));

    return merge(leftSide, rightSide);
};

function merge(left, right) {
    const mergedArray = [];

    let leftIdx = 0;
    let rightIdx = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
        const leftValue = left[leftIdx];
        const rightValue = right[rightIdx];

        if (leftValue <= rightValue) {
            mergedArray.push(leftValue);
            leftIdx += 1;
        } else {
            mergedArray.push(rightValue);
            rightIdx += 1;
        }
    }

    if (rightIdx < right.length) {
        while (rightIdx < right.length) {
            mergedArray.push(right[rightIdx]);
            rightIdx += 1;
        }
    } else if (leftIdx < left.length) {
        while (leftIdx < left.length) {
            mergedArray.push(left[leftIdx]);
            leftIdx += 1;
        }
    }

    return mergedArray;
};

const test = [3, 2, 1, 13, 8, 5, 0, 1];
const test1 = [105, 70, 100, 110];

console.log(mergeSort(test1));
