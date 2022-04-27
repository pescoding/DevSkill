let A:number[] = [];

for( let i:number = 0; i < 10 ; i++){

	A[i] = inputNumber("Inserisci numero " + (i+1));

}

console.log("Il numero maggiore all'interno dell'array è: " + trovaMaggiore(A));

function trovaMaggiore (A:number[]) : number{

	let l:number = A.length;

	let k:number = A[0];

	for( let i = 0; i<l ; i++){

		if(k < A[i])
			k = A[i];

	}

	return k;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}