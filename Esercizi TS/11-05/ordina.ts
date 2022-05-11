let A : number[] = [];
let n : number = inputNumber("Inserisci grandezza array");

A = riempiArray(n);

stampaArray(ordinaCrescente(n, A));
stampaArray(ordinaDecrescente(n, A));

function ordinaCrescente( n: number, A: number[]) : number[]{

	let tmp : number;

	for( let i = 0 ; i < n-1 ; i++ ){

		for ( let j = i+1 ; j < n ; j++){

			if ( A[i] > A[j] ){

				tmp = A[i];
				A[i] = A[j];
				A[j] = tmp;

			}

		}

	}

	return A;

}

function ordinaDecrescente( n: number, A: number[]) : number[]{

	let tmp : number;

	for( let i = 0 ; i < n-1 ; i++ ){

		for ( let j = i+1 ; j < n ; j++){

			if ( A[i] < A[j] ){

				tmp = A[i];
				A[i] = A[j];
				A[j] = tmp;

			}

		}

	}

	return A;

}

function riempiArray (n:number) : number[]{
	
	let A : number[] = [];

	for( let i = 0; i < n ; i++ ){

		A[i] = inputNumber("Inserisci numero " + (i+1) + " dell'array.");

	}

	return A;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function stampaArray (A:number[]) : void{
	
	let stampa : string = "";

	stampa = stampa + A[0];
	
	for( let i = 1; i < A.length ; i++ ){
	
		stampa = stampa + " " + A[i];

	}

	console.log(stampa);

}