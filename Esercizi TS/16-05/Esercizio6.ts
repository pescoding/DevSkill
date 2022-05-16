controllo(riempiArray());

function controllo (A:number[]) : void{

	if(A.length != 0){

		let str : string = "";

		for ( let i = 0 ; i < A.length ; i++){

			if( A[i] < 0 || A[i] > 9){

				console.log("ERRORE");
				return;

			}

			str += A[i];

		}

		console.log(str);

		if((+str)%3==0)
			console.log("SI");
		else
			console.log("NO");

	}
	else
		console.log("VUOTO");

}

function riempiArray () : number[]{

	let A : number[] = []; 

	let i : number;

	i = inputNumber("Inserisci il primo numero.");

	if( i == -1)
		return A;

	A.push(i);

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