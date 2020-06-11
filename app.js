import { add } from './mathutils.js';
import { mult } from './mathutils.js';
import { sub } from './mathutils.js';
import { div } from './mathutils.js';


const addButton = document.getElementById('sum-button');

addButton.addEventListener('click', () => {
    const input1 = document.getElementById('add-one');
    const input2 = document.getElementById('add-two');
    const resultSpan = document.getElementById('sum-result');
    const firstValue = Number(input1.value);
    const seconValue = Number(input2.value);
    const sum = add(firstValue, seconValue);

    resultSpan.textContent = sum;
});

const multbutton = document.getElementById('prod-button');

multbutton.addEventListener('click', () => {
    const input3 = document.getElementById('mult-one');
    const input4 = document.getElementById('mult-two');
    const resultSpan2 = document.getElementById('prod-result');
    const firstValueA = Number(input3.value);
    const seconValueA = Number(input4.value);
    const sum = mult(firstValueA, seconValueA);

    resultSpan2.textContent = sum;
});

const subutton = document.getElementById('sub-button');

subutton.addEventListener('click', () => {
    const input5 = document.getElementById('sub-one');
    const input6 = document.getElementById('sub-two');
    const resultSpan3 = document.getElementById('sub-result');
    const firstValueB = Number(input5.value);
    const seconValueB = Number(input6.value);
    const sum = sub(firstValueB, seconValueB);

    resultSpan3.textContent = sum;
});


const divButton = document.getElementById('div-button');

divButton.addEventListener('click', () => {
    const input7 = document.getElementById('div-one');
    const input8 = document.getElementById('div-two');
    const resultSpan4 = document.getElementById('div-result');
    const firstValue = Number(input7.value);
    const seconValue = Number(input8.value);
    const sum = div(firstValue, seconValue);

    resultSpan4.textContent = sum;
});

