class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}
document.body.appendChild(button);


class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); // 2