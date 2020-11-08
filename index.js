let randomNumbers = [1, 2, 3, 1, 1, 1, 2];

function createObject(arr) {
  return arr.reduce(function(acc, current) {
    if (acc[current]) {
      acc[current]++
    } else {
      acc[current] = 1;
    }
    return acc 
  }, {})
}


console.log(createObject(randomNumbers))