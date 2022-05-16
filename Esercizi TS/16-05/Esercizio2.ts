console.log(controlla(inputNumber("Inserire numero da controllare"), riempiArray() ));


function controlla (N:number, A:number[]) : string{

	let c : number = 0;

	for( let i = 0 ; i < A.length ; i++){

		if(A[i] <= N){

			c++;

			if( c == N )
				return "OK";

		}
		else
			c = 0;

	}

	return "NO";

}

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