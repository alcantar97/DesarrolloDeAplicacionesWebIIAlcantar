function echo<T>(arg:T):T{
    return arg;
}
let a = echo<number>(1);
let b = echo<string>("Hola mundo");

class Generic<T> {
    add:(X: T, y:T) => T;
}
let myGeneric = new Generic<number>();
console.log(myGeneric.add=function(x,y){return x + y});
console.log(myGeneric.add(3,4));

interface withLength{
    length: number;
}
function echo2<T extends withLength>(arg:T): T{
    console.log(arg.length);
    return arg;
}

let c=echo("aaa");
let t= echo({length: 2, name:"aa"});

function copyFields <T extends U, U>(source: T, target: U):U{
    for(let id in source){
        if(source[id] != undefined){
            source[id] = source[id];
        }else{
            source[id]=source[id];
        }
    }
    return target;
}
let f = {a: 1, b:2, c:3};
let g = copyFields(f, {b:10, c:20});
//let h= copyFields(f,{Q:20});

console.log(b);
console.log(c);
