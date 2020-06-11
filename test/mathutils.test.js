import { add, mult, sub, div } from '../mathutils.js';


const test = QUnit.test;

test('test add function', function(expect) {
    
    const input1 = 2;
    const input2 = 4;
    const expected = 6;
    
    const sum = add(input1, input2);
  
    expect.equal(expected, sum);
});

test('test mult function', function(expect) {

    const input1 = 6;
    const input2 = 4;
    const expected = 24;
   
    const sum = mult(input1, input2);

    expect.equal(expected, sum);

});

test('test sub function', function(expect) {

    const input1 = 8;
    const input2 = 3;
    const expected = 5;

    const sum = sub(input1, input2);

    expect.equal(expected, sum);
});

test('test div function', function(expect) {

    const input1 = 20;
    const input2 = 4;
    const expected = 5;

    const sum = div(input1, input2);

    expect.equal(expected, sum);
});

