// generics
/*utilize <T> para escolher o tipo
isso é generic*/

function concatArray<T>(...itens: T[]): T[]{
     return new Array().concat(...itens);

}
// utilize <> e o tipo de varialvel
const numArray = concatArray<number[]>([1,5],[3]);
const stgArray = concatArray<string[]>(["Joao", "goku"],["vegita"]);
console.log(numArray);
console.log(stgArray);
