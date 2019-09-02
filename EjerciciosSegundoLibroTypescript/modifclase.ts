class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
var foo = new FooBase();
foo.x;

class FooChild extends FooBase {
    constructor() {
        super();
        this.x;
        this.z; 
    }
}