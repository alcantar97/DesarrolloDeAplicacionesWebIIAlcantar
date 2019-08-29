function echo(arg) {
    return arg;
}
var a = echo(1);
var b = echo("Hola mundo");
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
function echo2(arg) {
    console.log(arg.length);
    return arg;
}
var c = echo("aaa");
var t = echo({ length: 2, name: "aa" });
function copyFields(source, target) {
    for (var id in source) {
        if (source[id] != undefined) {
            source[id] = source[id];
        }
        else {
            source[id] = source[id];
        }
    }
    return target;
}
var f = { a: 1, b: 2, c: 3 };
var g = copyFields(f, { b: 10, c: 20 });
//let h= copyFields(f,{Q:20});
console.log(b);
console.log(c);
