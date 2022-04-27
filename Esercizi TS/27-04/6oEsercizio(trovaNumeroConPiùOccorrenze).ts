let A:number[] = [];

A = riempiArray();

console.log("Il numero con più occorrenze è " + trovaRicorrente(A));

function trovaRicorrente(A:number[]) : number{

	let i:number = 0;
	let k:number = 0;
	let numeroOccorrente : number;
	let maggioriOccorrenze : number = 0;

	for( i = 0 ; i<A.length ; i++){

		k = 1;

		for( let c = i+1 ; c<A.length ; c++){

			if(A[c] == A[i])
				k++;

		}

		if(maggioriOccorrenze < k){

			maggioriOccorrenze = k;
			numeroOccorrente = A[i];

		}

	}

	return numeroOccorrente;

}

function riempiArray () : number[]{

	let i:number = 0;
	let k:number = 0;
	let A : number[] = [];

	while(i!=-1){

		i = inputNumber("Inserisci numero. (Inserire -1 per terminare)");

		if(i!=-1){

			A[k] = i;

		}

		k++;

	}

	return A;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}