let A : number[] = riempiArray();

A = sequenzaRipetuta(A);

stampaLunghezza(A[0], A[1]);

function sequenzaRipetuta (A:number[]) : number[]{

	let k: number = A[0];
	let j: number = 1;
	let max: number = 0;
	let numeroMassimo : number = k;

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

	let B : number[] = [];

	B[0] = numeroMassimo;
	B[1] = max;

	return B;

}

function stampaLunghezza (max:number, numeroMassimo:number) : void{

	if(max >= 2)
		console.log(numeroMassimo + " con lunghezza " + max);
	else
		console.log("Non esiste una sequenza valida");

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

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