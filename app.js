// let a = 10;
// console.log(a);
// const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];

// const newFruits = ['kiwi', 'Pineapple'];
// finalFruits = newFruits.concat(fruits);
// console.log(finalFruits);
// const points = [30, 40, 100, 1, 5, 25, 10, 200];
// // points.sort((a, b) => a - b);
// points.sort(function (a, b) {
//   // console.log(a, b, a - b);
//   return a - b;
// });
//console.log(points);
const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);
