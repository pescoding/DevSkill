let A : number[] = riempiArrayCasuale();

sequenzaRipetuta(A);

function sequenzaRipetuta (A:number[]) : void{

	let k: number = 0;
	let j: number = 1;
	let max: number = 0;
	let numeroMassimo : number;

	k = A[0];

	for(let i = 1; i < A.length ; i++){

		if(A[i] == k)
			j++;
		else{

			j = 1;
			k = A[i];

		}

		if(j > max){

			max = j;
			numeroMassimo = A[i];

		}

	}

	if(max >= 2)
		console.log(numeroMassimo + " con lunghezza " + max);
	else
		console.log("Non esiste una sequenza valida");

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function riempiArrayCasuale () : number[]{

	let A : number[] = []; 

	let i : number;

	A[0] = inputNumber("Inserisci il primo numero.");

	while(i != -1){

		if((i=inputNumber("Inserisci un numero. (-1 per terminare)"))!=-1)
			A.push(i);

	}

	return A;

}