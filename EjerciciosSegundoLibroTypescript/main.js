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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function generator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Execution started');
                return [4 /*yield*//*, 0];
            case 1:
                _a.sent();
                console.log('Execution resumed');
                return [4 /*yield*//*, 1];
            case 2:
                _a.sent();
                console.log('Execution resumed');
                return [2 /*return*//*];
        }
    });
}
var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

//Tipos de carga de módulos
/*
import { sumar, restar } from 'calculos';
console.log(sumar(2, 3)); 
console.log(restar(4, 3)); 

import * as calc from 'calculos';
console.log(calc.sumar(2, 3)); 
console.log(calc.restar(4, 3)); 
*/
//CommonJS
var importacion = require('./importacion');
console.log('Este es el resultado de la importación ' + importacion);
var tipo = typeof importacion;
console.log('Este es el tipo del contenido importado ' + tipo);

//Healthcomponent
var HealthComponent = require('./HealthComponent.js');
var myHealthComponent = new HealthComponent(10);
También
