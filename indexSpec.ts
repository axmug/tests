const arrays = require('Full_Stack_JavaScript/NodeJS/TypeScript/utilities/arrays.ts');
const numbers = require('Full_Stack_JavaScript/NodeJS/TypeScript/utilities/numbers.ts');
const strings = require('Full_Stack_JavaScript/NodeJS/TypeScript/utilities/strings.ts');

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];

it('expect addArr(numArr) to equal 18', () => {
  expect(arrays.addArr(numArr)).toEqual(18);
});

describe("concatArr", () => {
    it("concatenate two arrays", () => {

      let actual = arrays.concatArr(numArr,wordArr);
      expect(actual).not.toEqual(numArr);
    
    });
})

it('expect third element to be cut', () => {
  expect(arrays.cut3(numArr)).not.toContain(5);
});

it('expect sum', () => {
  expect(numbers.sum(25,7)).toBe(32);
});

describe("capitalize a sentence", () => {
    it("sentence capitaleized", () => {
      
      let frase = "i want to play chess. but if it is not possible I will play draughts";
      expect(strings.capitalize(frase)).toEqual("I want to play chess. But if it is not possible I will play draughts");

    });
})

it('multiply two numbers', () => {
  expect(numbers.multiply(1,2)).toBeGreaterThan(1);
});

it('get the largest number of an array', () => {
  expect(arrays.lgNum(numArr)).toBeTruthy();
});
