const array = [1, 2, 3, 4, 5, "hi"];

function findIndex(array, num) {
  return array.indexOf(num);
}

console.log(findIndex(array, 5));

const addNumbersArrowFn = (num1, num2) => {
    return num1 + num2;
  };
  
console.log(addNumbersArrowFn(1, 2));

const addNumbersArrowFnShort = (num1, num2) => num1 + num2;

console.log(addNumbersArrowFnShort(1, 7));

function addNumbersNested(num1) {
    return function (num2) {
      return num1 + num2;
    };
  }
  
console.log(addNumbersNested(3)(7));

const greet = (name = "World") => `Hello ${name}`;

console.log(greet());
console.log(greet("Raimo"));

const newArray = [1, 2, 3, 4, 5];

const addedArray = newArray.map((element) => element + 5);

console.log(addedArray);