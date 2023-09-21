// // let js = 'amazing';
// // console.log(40 + 8 - 10);

// // console.log('Jonas');
// // console.log(23);

// // let firstName = 'John';
// // console.log(firstName);

// // // Declare variables and assign values
// // let country = "United States";
// // let continent = "North America";
// // let population = 331;

// // // Log values to the console
// // console.log("Country:", country);
// // console.log("Continent:", continent);
// // console.log("Population:", population);


// // // data types 
// // // Declare variables and set values
// // let isIsland = false;
// // let language;

// // // Log types to the console
// // console.log("Type of 'isIsland':", typeof isIsland);
// // console.log("Type of 'population':", typeof population);
// // console.log("Type of 'country':", typeof country);
// // console.log("Type of 'language':", typeof language);

// // // // let, const
// // let age = 19;
// // age = 29;
// // const yearBirth = 1900;

// // // // lecture assignment
// // language = "Portuguese";

// // // Basic Operators
// // const year = 2037
// // const ageJonas = year - 1991;
// // const ageSarah = year - 2018;
// // console.log(ageJonas, ageSarah);

// // // 2 ** means 2 to the power of 3
// // console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)

// // const newFirstName = "Jonas";
// // const newLastName = "schmed";
// // console.log(newFirstName + " " + newLastName)

// // let x = 10 + 5
// // x += 10;
// // x++;
// // console.log(x)

// // // comparison operators

// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);

// // const isFullAge = ageSarah >= 18;
// // console.log(year - 1991 > year - 2018)

// // // operator precedence

// // let y, i;
// // y = i = 25 - 10 - 5
// // console.log(y, i);

// // const averageAge = ageJonas + ageSarah / 2
// // console.log(ageJonas, ageSarah, averageAge)

// // //Challenge 1

// // let markWeight = 78;
// // let markHeight = 1.69;
// // let johnWeight = 92;
// // let johnHeight = 1.95;

// // let markBMI = markWeight / (markHeight ** 2);
// // let johnBMI = johnWeight / (johnHeight ** 2);

// // let markHigherBMI = markBMI > johnBMI;

// // console.log(markHigherBMI);

// // practice strings
// const firstNom = 'Jonas';
// const job = 'teacher';
// const birth = 1991;
// const yearAge = 2037;

// const jonas = "I am " + firstNom + ", a " + job + " and my age is " + (yearAge - birth) + " years old "
// const jonasNew = `I am ${firstNom} and my age is ${yearAge - birth} years old. I work as a ${job}`;
// console.log(jonasNew);

// taking decisions using if statements
// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//     console.log(`you are old enough to drive 🚘`);
// } else {
//     console.log(`you are not old enough to drive 😵‍💫 `);
// }

// const birthYear = 1991;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(String(23));

// Type coercion
console.log("I am " + 23 + " years old")
console.log('23' - '10 ' - 3);

let n = 1 + '1'; // this turns to a string
n = n - 1; // the minus operator converts strings to numbers
console.log(n);