//1번
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>+val);
const [a,b] = inputData;

if (a>b) {
    console.log(">");
} else if (a<b) {
    console.log("<");
} else if (a===b) { //여기서 그냥 else 만 써도 크고 작고 같음 중 남은게 같음 뿐이라 정답으로 처리됨.
    console.log("==");
};

//2번
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin');
const a = inputData; // 여기서 a를 [a] 배열로 두면 오답이 됨.

if (100 >= a && a >= 90) {
    console.log("A");
} else if (89 >= a && a >= 80) {
    console.log("B");
} else if (79 >=a && a >= 70) {
    console.log("C");
} else if (69 >= a && a >= 60) {
    console.log("D");
} else {
    console.log("F");
};

//3번
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin');
const a = inputData;

if (a % 4 == 0 && a % 100 != 0) {
    console.log("1");
} else if (a % 4 == 0 && a % 400 == 0) {
    console.log("1")
} else {
    console.log("0");
};

//4번
const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(val=>+val);
const [a,b] = inputData;

if (a > 0 && b > 0) {
    console.log("1");
} else if (a < 0 && b > 0) {
    console.log("2");
} else if (a < 0 && b < 0) {
    console.log("3");
} else if (a > 0 && b < 0) {
    console.log("4");
};


//4번을 fs로 입력을 받으면 런타임 오류가 난다. readline으로 입력을 받아야 동작이됨. solution에 집중.
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
    input.push(parseInt(line));
}).on("close", function () {
    const x = input[0];
    const y = input[1];

    if (x > 0 && y > 0) {
        console.log(1);
    } else if (x < 0 && y > 0) {
        console.log(2);
    } else if (x < 0 && y < 0) {
        console.log(3);
    } else if (x > 0 && y < 0) {
        console.log(4);
    }

    process.exit();
});

//5번