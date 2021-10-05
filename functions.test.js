const { returnTwo, greeting, add, subtract, divide, multiply}
 = require('./functions');

test('return the number 2' , () => {
    expect(returnTwo()).toEqual(2);
});
    
test("greeting should return hello and the name parameter", () => {
    expect(greeting('James')).toEqual('hello, James.');
    expect(greeting('Jill')).toEqual('hello, Jill.');
});

describe('math functions', () => {
    test('add should add two numbers', () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
        expect(add(12, 12)).toEqual(24);
    });
    
    test('subtract should subtract two numbers', () => {
        expect(subtract(9, 5)).toEqual(4);
        expect(subtract(20, 10)).toEqual(10);
    });
    
    test('divide should divide two numbers', () => {
        expect(divide(15, 5)).toEqual(3);
        expect(divide(20, 10)).toEqual(2);
    });
    test('Multiply should multiply two numbers', () => {
        expect(multiply(15, 5)).toEqual(75);
        expect(multiply(20, 10)).toEqual(200);
})

// test('add should add two numbers', () => {
//     expect(add(1, 2)).toEqual(3);
//     expect(add(5, 9)).toEqual(14);
//     expect(add(12, 12)).toEqual(24);
// });

// test('subtract should subtract two numbers', () => {
//     expect(subtract(9, 5)).toEqual(4);
//     expect(subtract(20, 10)).toEqual(10);
// });

// test('divide should divide two numbers', () => {
//     expect(divide(15, 5)).toEqual(3);
//     expect(divide(20, 10)).toEqual(2);
// });
// test('Multiply should multiply two numbers', () => {
//     expect(multiply(15, 5)).toEqual(75);
//     expect(multiply(20, 10)).toEqual(200);
});