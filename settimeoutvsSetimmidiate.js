// the output of the above code is not guaranteed to be the same every time. It depends on the system and the preformance of the process.
// Tested locally :checked:

// Video explaination: https://vimeo.com/772860074
// Node resource:  https://nodejs.org/en/guides/event-loop-timers-and-nexttick

const fs = require("fs");

console.log("start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile(__filename, () => {
    console.log("readFile");
    setTimeout(() => {
        console.log("setTimeout inside readFile");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate inside readFile");
    });
    process.nextTick(() => {
        console.log("nextTick inside readFile");
    });
});

console.log("end");
