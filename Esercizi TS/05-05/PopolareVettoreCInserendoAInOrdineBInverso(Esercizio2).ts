let n : number = dimensioneArray("Di che dimensione vuoi il primo array?", 5, 10);

let m : number = dimensioneArray("Di che dimensione vuoi il secondo array?", 5, 10);

let A : number[] = [];
let B : number[] = [];
let C : number[] = [];

A = riempiArray(A, n);
B = riempiArray(B, m);

C = riempiSpecial(A, B, C, n, m );

stampaArray(C, C.length);

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

function stampaArray (A:number[], n:number) : void{

	for( let i = 0; i < n ; i++ ){
	
		console.log("Il numero in posizione " + (i+1) + " è " + A[i]);

	}

}

function riempiArray (A:number[], n:number) : number[]{

	for( let i = 0; i < n ; i++ ){

		A[i] = inputNumber("Inserisci numero " + (i+1) + " dell'array.");

	}

	return A;

}

function riempiSpecial (A:number[], B:number[], C:number[], n:number, m:number) : number[]{

	let k : number;

	for( let i = 0; i < n ; i++ ){

		C[i] = A[i];

		k = i;

	}

	for( let i = m-1; i >= 0 ; i-- ){

		k++;
		
		C[k] = B[i];

	}

	return C;

}