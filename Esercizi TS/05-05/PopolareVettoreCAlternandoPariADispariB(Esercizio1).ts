let n : number = dimensioneArray("Di che dimensione vuoi gli array?", 5, 10);

let A : number[] = [];
let B : number[] = [];
let C : number[] = [];

A = riempiArray(n);
B = riempiArray(n);
C = riempiPariDispari(A, B);

stampaArray(C);

function riempiPariDispari (A:number[], B:number[]) : number[]{

	let C : number[] = [];

	for( let i = 0; i < (A.length) ; i++ ){

		if(i%2==0)
			C[i] = A[i];
		else
			C[i] = B[i];

	}
	
	return C;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function dimensioneArray (frase:string, n:number, m:number) : number{
	
	let i : number;

	do{
		i = inputNumber(frase+" (Min " + n + ", max " + m +")");
	}
	while(i<n || i>m);

	return +i;

}

function riempiArray (n:number) : number[]{
	
	let A : number[] = [];

	for( let i = 0; i < n ; i++ ){

		A[i] = inputNumber("Inserisci numero " + (i+1) + " dell'array.");

	}

	return A;

}

function stampaArray (A:number[]) : void{

	for( let i = 0; i < A.length ; i++ ){
	
		console.log("Il numero in posizione " + (i+1) + " è " + A[i]);

	}

}