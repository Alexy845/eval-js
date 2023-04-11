const manipArray = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }
    const array0 = array.map((num) => {
        if (typeof num !== "number") {
            return null
        }
        return num % 2 === 0 ? num : num * 2;
    });
    const array1 = array.filter((num) => typeof num === "number").map((num) => num - 5);
    const array2 = array.filter((num) => typeof num === "number").filter((num) => num % 3 === 0 && num % 5 !== 0);
    const array3 = array.filter((num) => typeof num === "number").sort((a, b) => b - a);
    const resultArray = [array0, array1, array2, array3];
    return resultArray;
};

module.exports = manipArray;

console.log(manipArray([])); // []

console.log(manipArray([1, 2, 3, 4, 5])); // [ [ 2, 2, 6, 4, 10 ], [ -4, -3, -2, -1, 0 ], [ 3 ], [ 5, 4, 3, 2, 1 ] ]

console.log(manipArray([50, 5, 42, 86, 2, 1])); // [[ 50, 10, 42, 86, 2, 2 ], [ 45, 0, 37, 81, -3, -4 ], [ 42 ], [ 86, 50, 42, 5, 2, 1 ]]

console.log(manipArray([10, 5, 2, 13])); // [ [ 10, 10, 2, 26 ], [ 5, 0, -3, 8 ], [], [ 13, 10, 5, 2 ] ]

console.log(manipArray([45, "z", 66, "a", 33, null, 30, undefined])); // [[ 90, 66, 66, 30 ], [ 40, 61, 28, 25 ], [ 66, 33 ], [ 66, 45, 33, 30 ]]
