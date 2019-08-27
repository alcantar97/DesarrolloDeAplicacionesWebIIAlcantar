class Person{
    name:string;
    constructor(theName:string){
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hi, I am "+this.name+"!");
    }
}
let personA= new Person("Sally");

personA.introduceSelf();