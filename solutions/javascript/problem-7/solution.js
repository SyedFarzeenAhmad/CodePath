function createCalculator() {
    return {
        add: function(a, b) { return a + b; },
        subtract: function(a, b) { return a - b; },
        multiply: function(a, b) { return a * b; },
        divide: function(a, b) { return a / b; }
      };
}

console.log(createCalculator().add(2, 3));
