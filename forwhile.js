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

//4번. 생략

//5번. 5번 6번은 솔루션만 확인해보고 생략. 제출시 시간초과 오류가 발생함
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    for(let i = 1; i <= N; ++i) {
        console.log(i);
    }
};

///////////////////////////////////////////////////////////////////////////
//5번 readline으로 읽기
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    input = input.map((item) => +item);
    solution(input[0])
	process.exit();
});

function solution(N) {
    for(let i = 1; i <= N; ++i) {
        console.log(i);
    }
};

//6번, 5번 6번 문제는 문제풀때 입력단에서 시간이 오래걸리는 node.js 시간초과가 걸리므로 생략. 방법은 맞음
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
    for(let i = N; i >= 1; --i) {
        console.log(i);
    }
};

