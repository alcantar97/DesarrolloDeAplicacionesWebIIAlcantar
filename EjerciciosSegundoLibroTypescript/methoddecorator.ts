function MethodDecorator(
    target: Object, 
    propertyKey: string, 
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
class MethodDecoratorExample {
    @MethodDecorator
    method() {
    }
}
function StaticMethodDecorator(
    target: Function, 
    propertyKey: string | symbol, 
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod() {
    }
}

function ParameterDecorator(
    target: Function, 
    propertyKey: string | symbol, 
    parameterIndex: number 
    ) {
    console.log("ParameterDecorator called on: ", target, propertyKey, parameterIndex);
    }
class ParameterDecoratorExample {
    method(@ParameterDecorator param1: string, @ParameterDecorator param2: number) {
    }
}