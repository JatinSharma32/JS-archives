/* the setTimeout callback 'a' is sent to webAPI's timer API and immidiatly sent to callbackqueue then
after that the Promise(fetch) is executed and when the promise is fullfilled its callback 'p' is sent in microtask queue, mean while event loop already executed the function 'a'
then the 'p' is sent to call stack from microtask queue executed and then finally 's' is sent in microtask queue and then event loop puts it in call stack and it executes.  
*/
fetch("https://api.github.com/users/jatinsharma32")
    .then(function p(data) {
        return data.json();
    })
    .then(function s(data) {
        console.log(data);
    });

setTimeout(function a() {}, 0);

// for referance use: https://www.jsv9000.app/
