

function fibs(n) {
    const result = [];

    for (let i = 0; i < n; i += 1) {
        if (result.length === 0) {
            result.push(0);
            continue;
        } else if (result.length === 1) {
            result.push(1);
            continue;
        }
        
        const length = result.length;
        const first = result[length - 1];
        const second = result[length - 2];
        result.push(first + second);
    }

    return result;
};

console.log(fibs(8));

function fibsRec(n) {
    const array = [];
    fibRecursive(n, 0, 1, array);
    return array;
};

function fibRecursive(n, first, second, array) {
    if (n <= 0) {
        return;
    }

    if (array.length < 1) {
        array.push(first);
    } else if (array.length < 2) {
        array.push(second);
    } else {
        array.push(first + second);
        first = array[array.length - 2];
        second = array[array.length - 1];
    }
    fibRecursive(n - 1, first, second, array);
};

console.log(fibsRec(8));

function fib(n) {
    return fibSanity(n, {});
}

function fibSanity(n, memo) {
    if (n in memo) {
        return memo[n];
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    const result = fibSanity(n - 1, memo) + fibSanity(n - 2, memo);
    memo[n] = result;
    return result;
};

console.log(fib(40));