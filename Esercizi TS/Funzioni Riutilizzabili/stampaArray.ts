function stampaArray (A:number[], n:number) : void{

	for( let i = 0; i < n ; i++ ){
	
		console.log("Il numero in posizione " + (i+1) + " è " + A[i]);

	}

}

function stampaArray (A:number[]) : void{

	for( let i = 0; i < A.length ; i++ ){
	
		console.log("Il numero in posizione " + (i+1) + " è " + A[i]);

	}

}

function stampaArray (A:string[]) : void{
	
	let stampa : string = "";

	stampa+= A[0];
	
	for( let i = 1; i < A.length ; i++ ){
	
		stampa = stampa + A[i];

	}

	console.log(stampa);

}