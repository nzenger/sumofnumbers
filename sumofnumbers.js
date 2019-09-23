const sample = [4,6,5,5];

function sumFor(array){
  let total = 0;
  array.forEach(function (value) {
    total += value;
  });
  return total;
}
console.log(sumFor(sample));

function sumWhile(array){
  let i = 0;
  let total = 0;
  while (i < array.length){
    total += array[i];
    i++;
  }
  return total;
}

console.log(sumWhile(sample));

function sumRecursion(array){
  if (array.length === 0){
    return 0;
  }
  return array[0] + sumRecursion(array.slice(1,array.length));
}

console.log(sumRecursion(sample));

function sumTheSimpleWay(array){
  return _.reduce(array, function(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(sample));
