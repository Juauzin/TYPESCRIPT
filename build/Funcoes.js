"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// FUNÇOÊS
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(5, 5);
// pedir dois tipos de valores
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone(11959225709));
// ASYNC
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Joao";
    });
}
