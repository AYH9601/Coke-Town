//1번
console.log("Hello World!");

//2번
console.log("강한친구 대한육군");
console.log("강한친구 대한육군");

//3번
console.log(`\\    /\\`);
console.log(` )  ( ')`);
console.log(`(  /  )`);
console.log(` \\(__)|`);

console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`)

//4번
console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`)

//5번
const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value)
const [a,b] = inputData

console.log(a+b)