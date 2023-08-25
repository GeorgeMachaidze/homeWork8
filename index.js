function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    return "Dimensions must be positive values.";
  }

  if (length !== width) {
    return "This is not a square. Length and width must be equal.";
  }

  const area = length * width;
  return area;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(numbers) {
  const evenNumbers = numbers.filter((number) => number % 2 === 0);
  return evenNumbers;
}

const evenNumbersArray = getEvenNumbers(numbersArray);
console.log("Even numbers:", evenNumbersArray);

function getOddNumbers(numbers) {
  const oddNumbers = numbers.filter((number) => number % 2 !== 0);
  return oddNumbers;
}

const oddNumbersArray = getOddNumbers(numbersArray);
console.log("Odd numbers:", oddNumbersArray);

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const totalSum = sumArray(numbersArray);
console.log("Sum of the array:", totalSum);

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const maxNumber = findMax(numbersArray);
console.log("Maximum number:", maxNumber);
const people = [
  { firstName: "John", lastName: "Doe", age: 30 },
  { firstName: "Jane", lastName: "Smith", age: 25 },
  { firstName: "Michael", lastName: "Johnson", age: 40 },
  { firstName: "Emily", lastName: "Williams", age: 22 },
];
function logPerson(person) {
  console.log(
    `Hello, I am ${person.firstName} ${person.lastName} and I'm ${person.age} years old.`
  );
}

for (let i = 0; i < people.length; i++) {
  logPerson(people[i]);
}
