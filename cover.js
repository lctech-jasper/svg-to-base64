const svg64 = require('svg64')
const { readFileSync } = require('fs')
const svg = readFileSync('./eric_sign.svg', 'utf-8');

const base64fromSVG = svg64(svg);

console.log(base64fromSVG)