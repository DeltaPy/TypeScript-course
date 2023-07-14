"use strict";
//convert to more or less specific
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful! TS sees no prolbme - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string // Error
10;
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#myId');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
