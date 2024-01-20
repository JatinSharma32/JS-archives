/*
By this code we understand that the setTimeout() function is sent to Web API (more specifically Timer API) when the timer ends then ONLY the function is sent to the callback queue so thats why 2nd callback is executed first and then 1st callback is executed.
Its not like the callbacks will executed in the order they are written in the code. 
*/
let callback1 = setTimeout(() => {
    console.log("hello");
}, 4000);

setTimeout(() => {
    console.log("deleted callback1");
    clearTimeout(callback1);
}, 2000);

//
let hex = "0123456789ABCDEF";
let color = "#";
for (let i = 0; i < 6; i++) {
    color += hex.charAt(Math.floor(Math.random() * hex.length));
}
console.log(color);
