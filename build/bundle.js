var myModules = [
  function() {
    const sum = (a, b) => a + b;
    return sum;
  },

  function() {
    const sum = myModules[0]();
    const total = sum(2, 3);
    console.log(total);
  }
];

var entryPointIndex = 1;
myModules[entryPointIndex]();
