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
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on("line", function (line) {
	let input = line.split(" ");
    ////////////////////////////////////////
    let H = Number(input[0]);
    let M = Number(input[1]);
    
    if (M - 45 < 0) {
        M = 60 + (num2 - 45);
        H -= 1;
        
        if (H === -1) {
            H = 23;
        }
	} else {
		M -= 45;
    }
    
    console.log(H + " " + M);
}).on("close", function () {
	process.exit();
});

//5번 다른 방법, 좀 더 직관적인. 마찬가지로 입력부분은 생략하고 solution에 집중
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(H, M) {
    M -= 45;

    if (M < 0) {
        M += 60;
        H -= 1;
    }

    if (H < 0) { // 이부분 else if로 합치면 안됨.
        H = 23;
    }
    console.log(H, M);
}

//6번
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(H, M, T) {
    if (T > 60) {
        H += 1
        T -= 60    
    }

    M += M+T;

    if (M > 60) {
        H += 1;
        M -= 60;
    }

    if (H >= 24) {
        H -= 24;
    }
}