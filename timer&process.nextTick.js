/**
 * setInterval() - It starts its callback after a delay, and then calls the callback
 * repeatedly with a fixed time delay between each call
 * but the call back execution time can fluctuate/not fixed, so an alternative is
 * using setTimtout() with reccursive call to the same function.
 */

function reccursive() {
    // here may be some network calls which may take long time
    console.log("Hello");
    setTimeout(reccursive, 1000);
}
setTimeout(reccursive, 1000);

/**
 * setImmediate: This function schedules a callback to be run after the current event loop cycle has completed. It's essentially saying: "do this after all current events have been handled".
 *
 * setTimeout: This function schedules a callback to be run after a certain number of milliseconds. However, due to the nature of the event loop and other factors, it's not guaranteed to execute exactly after the specified delay.
 *
 * process.nextTick: This function schedules a callback to be run on the next iteration of the event loop, before any I/O events or timers are processed. It's essentially saying: "do this as soon as possible, but not now"
 */

console.log("start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

console.log("end");

/**
 * OUTPUT:
 * start
 * end
 * process.nextTick
 * setTimeout
 * setImmediate
 */
