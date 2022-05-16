let X: number = inputNumber("Inserisci il divisore da checkare");
let A: number[] = riempiArray(10);

console.log(controlla(A, X));

function controlla (A: number[], x: number) : string{

	for(let i = 0 ; i < A.length ; i++){

		if(A[i]%x == 0)
			return "NO";

	}

	return "OK";

}

function riempiArray(n:number): number[]{

	let A: number[] = [];

	for(let i = 0 ; i < n ; i++){

		A[i] = inputNumber("Inserisci numero " + (i+1) + " da inserire nell'array");

	}

	return A;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}