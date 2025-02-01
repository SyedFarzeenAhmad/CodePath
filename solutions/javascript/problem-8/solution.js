const processNumbers = arr => 
    arr
      .map(n => n * 2)
      .filter(n => n >= 10)
      .reduce((sum, n) => sum + n, 0);

console.log(processNumbers([2, 5, 8, 1, 9]));