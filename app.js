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
// const points = [40, 100, 1, 5, 25, 10];

// for (let i = points.length - 1; i > 0; i--) {
//   let j = Math.floor(Math.random() * (i + 1));
//   let k = points[i];
//   points[i] = points[j];
//   points[j] = k;
// }
// console.log(points);
const cars = [
  { type: 'Volvo', year: 2016 },
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
];
cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  // if (x < y) {
  //   return -1;
  // }
  // if (x > y) {
  //   return 1;
  // }
  // return 0;
  if (x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  } else {
    return 0;
  }
});
