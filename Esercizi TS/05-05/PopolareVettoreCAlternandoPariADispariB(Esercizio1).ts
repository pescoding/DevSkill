let n : number = dimensioneArray("Di che dimensione vuoi gli array?", 5, 10);

let A : number[] = [];
let B : number[] = [];

A = riempiArray(A, n);
B = riempiArray(B, n);

riempiPariDispari(A, B);

function riempiPariDispari (A:number[], B:number[]) : void{

	let C : number[] = [];

	for( let i = 0; i < (A.length) ; i++ ){

		if(i%2==0)
			C[i] = A[i];
		else
			C[i] = B[i];
	
		console.log("Il numero in posizione " + (i+1) + " del terzo array è " + C[i]);

	}

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

function riempiArray (A:number[], n:number) : number[]{

	for( let i = 0; i < n ; i++ ){

		A[i] = inputNumber("Inserisci numero " + (i+1) + " dell'array.");

	}

	return A;

}