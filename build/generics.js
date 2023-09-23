"use strict";
// generics
/*utilize <T> para escolher o tipo
isso é generic*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
// utilize <> e o tipo de varialvel
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Joao", "goku"], ["vegita"]);
console.log(numArray);
console.log(stgArray);
