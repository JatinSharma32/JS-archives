// Read lines from the command line
process.stdin.resume();
process.stdin.setEncoding("utf8");

let inputString = "";

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
    console.log("add");
});

process.stdin.end();
process.stdin.on("end", function () {
    let num = parseInt(inputString.trim(), 10);
    let result = factorial(num);
    console.log(`Factorial of ${num} is ${result}`);
});

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
