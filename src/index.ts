// tipos primitivo

// trava para aceitar so valor boolean
let ligado:boolean = true;
let nome: string ="joao";
let idade: number = 19;

// aceita qualquer valor
let Desligado = false;
let ano = 2004;
let escola ="Major";


//   any e void

let retorno: void;
 
// aceita qualquer coisa
let retonoView: any = false;



// OBJECT - sem previsibilidade
let produto:object = {
 name:"joâo",
 idade:19,
}

// OBJECT - com previsibilidade
type ProdutoExtra = {
    nome: string;
    local: string;
    valor:number;
}
let meuProduto: ProdutoExtra ={
    nome:"Rexona",
    valor:15.97,
    local:"Miguel Estéfano"
}

// ARRAY

let dados: number  []=[
    10,
    20,
    30,
    40,
    50
];

// multivo dados
let infos:(string | number)[]=["joao",19];
// ------------------------------------------

// Tuplas
// respeitar as ordens de informacao
let boleto:[string, number, number]=["Conta de Luz", 75.90, 2210];

// DATAS
let  aniversário:Date = new Date("2023-10-25");
// console.log(aniversário.toString());


