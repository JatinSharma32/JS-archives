let hello = () => {
    console.log("this1: ", this);
};
let hello2 = function () {
    console.log("this2: ", this);
};
let obj = {
    h1: () => {
        console.log("this1: ", this);
    },
    h2: function () {
        console.log("this2: ", this);
    },
};

// hello();
// hello2();

obj.h1();
obj.h2();

class hllo {
    fsfs = 0;
    hllo() {
        console.log("thisisit: ", this);
    }
}
let jfa = new hllo();
jfa.hllo();

function p() {}
