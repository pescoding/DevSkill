let X : number = inputNumber("Inserisci intero X");
let N : number = inputNumber("Inserisci grandezza array");

stampaNumeri(prendiNumeri(riempiArray(N), X));


function stampaNumeri (A:number[]): void{

	let res : string = "";

	for( let i = 0 ; i < A.length ; i++ ){

		res += A[i];

	}

	if(res != "")
		console.log(res);

}

function prendiNumeri (A:number[], X:number) : number[]{

	let B : number[] = [];

	for( let i = 0 ; i < A.length ; i++){

		if( A[i] < X && A[i]%2 == 0)
			B.push(A[i]);

	}

	return B;

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