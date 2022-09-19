/* //SINTAXE TYPESCRIPT

class nomeDaClasse {
    //variáveis
    //métodos construtores
    //funções
} */

class Estudante{
    chamada: number
    nome: string

constructor(chamada: number, nome: string){
    this.chamada = chamada;
    this.nome = nome;
}
mostrarInformacoes(): void{
    console.log(`Nome: ${this.nome}\nNúmero da chamada: ${this.chamada}`);
 }
}

let fun: Estudante = new Estudante(146,"Rodrigo");
fun.mostrarInformacoes();