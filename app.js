// let a = 10;
// console.log(a);
// const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];

// const newFruits = ['kiwi', 'Pineapple'];
// finalFruits = newFruits.concat(fruits);
// console.log(finalFruits);
const points = [30, 40, 100, 1, 5, 25, 10, 200];
points.sort(function (a, b) {
  // console.log(a, b, a - b);
  return a - b;
});
console.log(points);
