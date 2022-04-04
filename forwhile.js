//for, 반복문

//1번
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(num) {
    for(let i = 1; i <= 9; ++i) {
        console.log(`${num} * ${i} = ${num * i}`);
    };
};

//2번. 구구단
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= input[0]; ++i){
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({A: tempValue[0], B:tempValue[1]});
};

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testCaseArray[i].A;
        const B = testCaseArray[i].B;
        console.log(A+B);
    }
};

//3번. 합
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {
    let sum = 0
    for(let i = 1; i <= n; ++i) {
        sum += i;
    };
    console.log(sum);
};