function riempiArray () : number[]{

	let A : number[] = []; 

	let i : number;

	A[0] = inputNumber("Inserisci il primo numero.");

	while(i != -1){

		if((i=inputNumber("Inserisci un numero. (-1 per terminare)"))!=-1)
			A.push(i);

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