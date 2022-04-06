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

//7번
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
        console.log(`Case #${i+1}: ${A+B}`);
    }
};

//8번
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i){
    const tempValue = input[i].split(' ').map((item) => +item);
    testCaseArray.push({A: tempValue[0], B:tempValue[1]});
};

solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
    for (let i = 0; i < T; ++i) {
        const A = testCaseArray[i].A;
        const B = testCaseArray[i].B;
        console.log(`Case #${i+1}: ${A} + ${B} = ${A+B}`);
    }
};

//9번
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {

    for(let line = 1; line <= N; ++line) {
        const starCount = line;
        const spaceCount = N-line;
        let printString = '';

        for let( i = 0; i < starCount; ++i) {
            printString += "*";
        }
        for let( i = 0; i < spaceCount; ++i) {
            printString += " ";
        }
        console.log(printString)
    }
};

//9번 다른 방식. 런타임 에러 안나는 방식
let input = require('fs').readFileSync('/dev/stdin').toString();

let star = "";

for (let i = 0; i < input; i++) {
    star += "*"
    console.log(star); 
}


//10번. 9번의 반대
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {

    for(let line = 1; line <= N; ++line) {
        const starCount = line;
        const spaceCount = N-line;
        let printString = '';

        for let( i = 0; i < starCount; ++i) {
            printString += " ";
        }
        for let( i = 0; i < spaceCount; ++i) {
            printString += "*";
        }
        console.log(printString)
    }
};

//10번 다른방식. 런타임에러 안나게
let input = require('fs').readFileSync('/dev/stdin').toString();

let num = Number(input);

for (let i = 0; i < num; i++) {
    let star = '';
    for (let j = num - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
    }
    console.log(star);
}

//아래껀 9번으로, 9번과 비교하며 한눈에 보기위해 작성
let input = require('fs').readFileSync('/dev/stdin').toString();

let star = "";

for (let i = 0; i < input; i++) {
    star += "*"
    console.log(star); 
}