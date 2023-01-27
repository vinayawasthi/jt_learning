// named function

function add(a: number, b: number) {
    return a + b;
}

function addx(...args: number[]) {
    return args.reduce(function (total, v, i, _x) {
        return total + v;
    })
}

//arrow or expression function 
type mx = (a: number, b: number) => number;

const x2 = (a: number, b: number) => { return a + b; }
const x3 = (a: number, b: number) => { return a * b; }

const x02: mx = (a, b) => { return a + b; }
const x03: mx = (a, b) => { return a * b; }

// self invoking fuction 
(function () {
    console.log("self invoking fuction")
})();

const x4 = (function (a, b) {
    let x = a + b;
    return x;
})(1, 2);
console.log(x4);

// closer fuction
const increament = (function counter() {
    let counter: number = 0;
    return function () { counter += 1; return counter; }
})();

for (let index = 0; index < 4; index++) {
    console.log(increament());
}

console.log(addx(1, 3, 4, 5, 6, 7, 10));