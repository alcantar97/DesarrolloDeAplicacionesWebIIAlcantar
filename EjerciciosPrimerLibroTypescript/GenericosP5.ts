function randomIntElem(theArray:number[]):number{
    let randomIndex=Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
function randomStrElem(theArray:string[]):string{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
function randomElem<T>(theArray: T[]):T{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

let positions:number[]=[103,458,472,458];
//let randomPosition:number=randomIntElem(positions);
let randomPosition:number=randomElem(positions);

let colors:string[]=['violet','indigo','blue','green'];
//let randomColor:string = randomStrElem(colors);
let randomColor:string = randomElem(colors);

function removeChar(theString:string, theChar:string):string{
    let theRegex=new RegExp(theChar,"gi");
    return theString.replace(theRegex,'');
}
function removeIt<T>(theInput: T, theIt:string):T{
    let theRegex=new RegExp(theIt,"gi");
    return theInput.replace(theRegex,'');
}
