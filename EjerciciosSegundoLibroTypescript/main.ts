/*
function loadItem(id: number): Promise<{id: number}> {
    return new Promise((resolve)=>{
        console.log('loading item', id);
        setTimeout(() => { // simulate a server delay
        resolve({ id: id });
         }, 1000);
    });
}
let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    }); 
Promise.all([loadItem(1),loadItem(2)])
    .then((res) => {
        [item1,item2] = res;
        console.log('done')
    }); 
    */

/*    
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}
var iterator = generator();
console.log('Starting iteration'); 
console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next()); 
*/

function* generator() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch(err) {
        console.log(err.message); // bar!
    }
}
var iterator = generator();
var foo = iterator.next();
console.log(foo.value);
var foo = iterator.next();


function getFirstName() {
    setTimeout(function(){
        gen.next('alex')
    }, 1000);
}
function getSecondName() {
    setTimeout(function(){
        gen.next('perry')
    }, 1000);
}
function *sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b); //alex perry
}
var gen = sayHello();
gen.next();