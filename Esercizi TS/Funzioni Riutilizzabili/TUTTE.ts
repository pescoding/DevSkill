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

function riempiArray (n:number) : number[]{
	
	let A : number[] = [];

	for( let i = 0; i < n ; i++ ){

		A[i] = inputNumber("Inserisci numero " + (i+1) + " dell'array.");

	}

	return A;

}