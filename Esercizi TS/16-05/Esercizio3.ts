console.log(controlla(riempiArray()));

function riempiArray () : number[]{

	let A : number[] = []; 

	let i : number;

	A[0] = inputNumber("Inserisci il primo numero.");

	while(i != 0 && A[0] != 0){

		if((i=inputNumber("Inserisci un numero. (0 per terminare)"))!=0)
			A.push(i);

	}

	return A;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function controlla( A:number[] ) : string{

	let option : boolean = false;

	if( A[0] < A[1]){

		for ( let i = 1 ; i < A.length-1 ; i++){

			for( let j = i ; j < A.length ; j++){

				if(A[i] < A[i+1]){
					
					if( option == true )
						return "NO";

				}
				else if(A[i] > A[i+1]){

					option = true;

				}
				else
					return "NO";

			}

		}

	}
	
	if(option == false)
		return "NO";

	return "SI";

}