class Calciatore {

	nome: string;
	attacco: number;
	difesa: number;

  constructor(nome: string, attacco: number, difesa: number) {

    this.nome = nome;
	this.attacco = attacco;
	this.difesa = difesa;

  }
  
}

function inputString (frase:string) : string{
	
	let n : string = prompt(frase);
	
	return n;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function ordinaCrescente( n:number, A: Calciatore[]) : Calciatore[]{

	let k : number = 0;

	while( k < 6){

		for( let i = k ; i < (n+k-1) ; i++ ){

			for ( let j = i+1 ; j < n+k ; j++){

				if ( A[i].nome > A[j].nome ){

					swap( A, i, j);

				}

			}

		}

		k+=n;

	}

	return A;

}

function swap (A: Calciatore[], i:number, j:number) : Calciatore[]{

	let temp : string;
	let tempN : number;

	temp = A[i].nome;
	A[i].nome = A[j].nome;
	A[j].nome = temp;

	tempN = A[i].attacco;
	A[i].attacco = A[j].attacco;
	A[j].attacco = tempN;

	tempN = A[i].difesa;
	A[i].difesa = A[j].difesa;
	A[j].difesa = tempN;

	return A;

}

function sceltaCalciatori( n:number, A: Calciatore[]) : Calciatore[]{

	let k : number = 0;

	while( k < 6){

		for( let i = k ; i < (n+k-1) ; i++ ){

			for ( let j = i+1 ; j < n+k ; j++){

				if ( A[i].attacco < A[j].attacco ){
					
					A = swap(A, i, j);

				}
				else if( A[i].attacco == A[j].attacco ){

					if( A[i].difesa > A[j].difesa){

						A = swap(A, i, j);

					}
					else if (A[i].difesa == A[j].difesa){

						if( A[i].nome > A[j].nome){

							A = swap(A, i, j);

						}

					}

				}

			}

		}

		k+=n;

	}

	return A;

}

function stampa (calciatori : Calciatore[]) : void{

	console.log("(" + calciatori[0].nome + ", " + calciatori[1].nome + ", " + calciatori[2].nome + ", " + calciatori[3].nome + ", " + calciatori[4].nome + ")" );
	console.log("(" + calciatori[5].nome + ", " + calciatori[6].nome + ", " + calciatori[7].nome + ", " + calciatori[8].nome + ", " + calciatori[9].nome + ")" );

}

let calciatori: Calciatore[] = [];

let A : string[] = [];

for( let i = 0 ; i < 10 ; i++){

	A = inputString("Inserisci: nome calciatore + valore di attacco + valore di difesa. (Esempio: Totti 98 70)").split(" ");

	calciatori[i] = new Calciatore(A[0], +A[1], +A[2]);

}

calciatori = ordinaCrescente(5,sceltaCalciatori(10,calciatori));

stampa(calciatori);