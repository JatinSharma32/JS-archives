function parentFunction() {
    let privateVar = "Secret";

    return function () {
        function updatePrivateVar(value) {
            if (isNaN(value)) {
                console.log("Value provided is invalid number.");
                return;
            }
            console.log("Value updated.");
            privateVar = value;
            return;
        }
        return { privateVar, updatePrivateVar };
    };
}

const privateFunction = parentFunction();
// We can access that private var by called the below function
console.log(privateFunction().privateVar);
privateFunction().updatePrivateVar("hjk");
console.log(privateFunction().privateVar);
privateFunction().updatePrivateVar(10);
console.log(privateFunction().privateVar);
