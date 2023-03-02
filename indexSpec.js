var arrays = require('Full_Stack_JavaScript/NodeJS/TypeScript/utilities/arrays.ts');
var numbers = require('Full_Stack_JavaScript/NodeJS/TypeScript/utilities/numbers.ts');
var strings = require('Full_Stack_JavaScript/NodeJS/TypeScript/utilities/strings.ts');
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
it('expect addArr(numArr) to equal 18', function () {
    expect(arrays.addArr(numArr)).toEqual(18);
});
describe("concatArr", function () {
    it("concatenate two arrays", function () {
        var actual = arrays.concatArr(numArr, wordArr);
        expect(actual).not.toEqual(numArr);
    });
});
it('expect third element to be cut', function () {
    expect(arrays.cut3(numArr)).not.toContain(5);
});
it('expect sum', function () {
    expect(numbers.sum(25, 7)).toBe(32);
});
describe("capitalize a sentence", function () {
    it("sentence capitaleized", function () {
        var frase = "i want to play chess. but if it is not possible I will play draughts";
        expect(strings.capitalize(frase)).toEqual("I want to play chess. But if it is not possible I will play draughts");
    });
});
it('multiply two numbers', function () {
    expect(numbers.multiply(1, 2)).toBeGreaterThan(1);
});
it('get the largest number of an array', function () {
    expect(arrays.lgNum(numArr)).toBeTruthy();
});
