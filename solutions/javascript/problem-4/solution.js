function sumOfNumbers(arr) {
    // Declaration
    let sum = 0;
    // Logic of loop
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Example
console.log(sumOfNumbers([1, 2, 3]));