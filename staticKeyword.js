class User {
    /*
    Static functions/variables are only not accessible on the 
    instance/object derived from class,
    It can be used to define utility function of which can only be accessed from class itself
    */
    static username;
    constructor(usernameInput) {
        this.username = usernameInput;
    }
    printName = () => {
        console.log("Username: ", this.username);
    };
    static hello = () => {
        return this.username;
    };
}

console.log(User.hello());
console.log(User.username);

let jatin = new User("jatin");
console.log(jatin.username);
jatin.printName();
