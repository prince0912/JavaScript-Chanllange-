
const throttle =(func, delay)=>{
    let throttled = false;
    return (...args) => {
        if(!throttle){
            func(...args);
            throttle = true;
            setTimeout(()=>throttled = false, delay);
        }
    }
}

const throttledLog = throttle((text) => console.log(text), 1000);
throttledLog('Hello'); 
throttledLog('World');