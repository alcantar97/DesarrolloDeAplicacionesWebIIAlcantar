/*
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called:', res === 123);
});
promise.catch((err) => {
    
});
*/

const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo malo a pasado"));
});
promise.then((res) => {
    // lkm
});
promise.catch((err) => {
    console.log('Tengo una llamada: ', err.message); 
});

Promise.resolve(123)
    .then((res)=>{
        console.log(res);
        return 456;
    })
    .then((res)=>{
        console.log(res);
        return Promise.resolve(123);
    })
    .then((res)=>{
        console.log(res);
        return Promise.resolve(123);
    })

Promise.reject(new Error('something bad happened'))
    .then((res) => {
console.log(res); // not called
return 456;
    })
    .then((res) => {
        console.log(res);
        return Promise.resolve(123);
    })
    .then((res) => {
    console.log(res);
    return Promise.resolve(123);
    })
    .catch((err) => {
      console.log(err.message);
    });


Promise.reject(new Error('something bad happened'))
    .then((res) => {
    console.log(res); 
    return 456;
    })
    .catch((err) => {
    console.log(err.message);
    return Promise.resolve(123);
    })
    .then((res) => {
    console.log(res); 
    })

Promise.resolve(123)
    .then((res) => {
    throw new Error('something bad happened')
    return 456;
    })
    .then((res) => {
    console.log(res);
    return Promise.resolve(789);
    })
    .catch((err) => {
    console.log(err.message);
    })

function iReturnPromiseAfter1Second():Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Hello world!"), 1000);
    });
}
        
Promise.resolve(123)
    .then((res)=>{
        return iReturnPromiseAfter1Second();
    })
    .then((res) => {
        console.log(res);
    });

loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })
    .catch(function (err) {
         console.log('good.json error', err.message);
    })
    .then(function () {
        return loadJSONAsync('absent.json');
    })
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('absent.json error', err.message);
    })
    .then(function () {
        return loadJSONAsync('bad.json');
    })
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('bad.json error', err.message);
    });
