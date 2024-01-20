console.log("hello");
function nam() {
    const s = 5;
    console.log("function");
    function jj() {
        console.log("function2");
        setTimeout(() => {
            console.log(`hello ${s}`);
        }, 0);
    }
    jj();
}
nam();
let p;
for (let i = 0; i < 10000; i++) {
    p = p + i;
    if (i >= 9999) {
        console.log("done");
        break;
    }
}
