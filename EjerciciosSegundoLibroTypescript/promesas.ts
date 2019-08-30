const promise1 = new Promise((resolve, reject) => {
    resolve(123);
});
promise1.then((res) => {
    console.log('I get called:', res === 123);
});
promise1.catch((err) => {
    
});

const promise2 = new Promise((resolve, reject) => {
    reject(new Error("Algo malo a pasado"));
});
promise2.then((res) => {
    // lkm
});
promise2.catch((err) => {
    console.log('Tengo una llamada: ', err.message); 
});
