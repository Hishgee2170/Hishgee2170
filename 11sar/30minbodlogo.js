// let students = [{
//         name: "Boldoo",
//         age: 34,
//         huis: "Male",
//     },
//     {
//         name: "batoo ",
//         age: 34,
//         huis: "Male",
//     },
//     {
//         name: " golgoo",
//         age: 12,
//         huis: "Female",
//     },
//     {
//         name: " golgoo2",
//         age: 42,
//         huis: "Female",
//     },
// ];
// function sameAge(sameAges) {
//     let output = [];
//     for (let i = 0; i < sameAges.length; i++) {
//         if (output[sameAges[i].age]) {
//             output[sameAges[i].age]++;
//         } else {
//             output[sameAges[i].age] = 1;
//         }
//     }
//     return output;
// }
// console.log("dawhtssan nasnuud:" + sameAge(students));
// function sameGender(Gender) {
//     let huisnud = {};
//     for (let i = 0; i < Gender.length; i++) {
//         if (huisnud[Gender[i].huis]) {
//             huisnud[Gender[i].huis]++;
//         } else {
//             huisnud[Gender[i].huis] = 1;
//         }
//     }
//     return huisnud;
// }
// console.log(sameGender(students));
// function numAge(numAge) {
//     let a = 0;
//     for (let i = 0; i < numAge.length; i++) {
//         a += numAge[i].age;
//     }
//     a = a / numAge.length;
//     return {
//         dundajAge: a,
//     };
// }
// console.log(numAge(students));
// function numName(numNames) {
//     let input = [];
//     input[0] = "bold";
//     input[1] = "erdene";
//     input[2] = "nogoi-1";
//     input[3] = "tom nohoi 007 hha";
//     for (let i = 0; i < numNames.length; i++) {
//         numNames[i]["Owogner"] = [`${input[i]}`];
//     }
//     return numNames;
// }
// console.log(numName(students));
// const arr = [-1, 5, 3, -2, 9, 21, -12, 12, 34, 2, 1, -2, -4, -12];
// function returnSecondArray(secondArray) {
//     let n = Math.floor(secondArray.length / 2);
//     let sum = new Array(n);
//     sum.fill(0);
//     for (let i = 0; i < secondArray.length; i++) {
//         if (i < secondArray.length / 2) {
//             for (let j = i; j < i + secondArray.length / 2; j++) {
//                 sum[i] = sum[i] + secondArray[j];
//             }
//         }
//     }
//     let output = sum[0];
//     for (let index = 0; index < sum.length; index++) {
//         if (output < sum[index]) {
//             output = sum[index];
//         }
//     }
//     return output;
// }
// console.log(returnSecondArray(arr));
// const arr = [1, 2, 3, 4, 5];
// function target(array) {
//   let index = [];
//   target = 9;
//   k = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (target == array[i] + array[j]) {
//         index.push(i);
//         index.push(j);
//         k++;
//       }
//     }
//   }
//   console.log(k + " ->" + "Bolomj bna!");
//   return index;
// }
// console.log(target(arr));
// const String = "The quick brown fox jumps over the lazy dog";
// function longString(str) {
//   const myArray = str.split(" ");
//   let char = [];
//   let go = new Array(myArray.length);
//   go.fill(0);
//   for (let i = 0; i < myArray.length; i++) {
//     char[i] = myArray[i].split(" ");
//   }
//   let long = 0;
//   let outputIndex = 0;
//   for (let j = 0; j < char.length; j++) {
//     for (let index = 0; index < char[j][0].length; index++) {
//       go[j] = go[j] + 1;
//     }
//     if (long < go[j]) {
//       long = go[j];
//       outputIndex++;
//     }
//   }
//   let outputString = myArray[outputIndex - 1];
//   return outputString;
// }
// console.log(longString(String));
// const bject = {
//     a: 1,
//     c: 3,
//     b: 2,
// };
// function maxValue(obj) {
//     let values = new Array(Object.keys(obj).length);
//     let keys = new Array(Object.keys(obj).length);
//     for (let i = 0; i < Object.keys(obj).length; i++) {
//         values[i] = Object.values(obj)[i];
//     }
//     for (var i = 0; i < values.length; i++) {
//         for (var j = 0; j < values.length - i - 1; j++) {
//             if (values[j] > values[j + 1]) {
//                 var temp = values[j];
//                 values[j] = values[j + 1];
//                 values[j + 1] = temp;
//             }
//         }
//     }
//     for (let g = 0; g < values.length; g++) {
//         keys[i] =
//     }
//     return values;
// }
// console.log(maxValue(bject));
// let daysInput = 1000;
// let year = 2023;
// let luna = 1;
// let day = 4;
// function newYear(daays) {
// }
