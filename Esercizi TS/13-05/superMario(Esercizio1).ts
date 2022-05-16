let n : number;

do{

	n = inputNumber("Quante mura ci sono? (Max 50)");

}
while(n<0 || n>50);

let A : number[] = mura(riempiArray(n));

console.log(A[0] + " " + A[1]);

function mura (A: number[]) :number[]{

	let jumps : number[] = [0,0];

	for(let i = 0 ; i < n-1 ; i++){

		if( A[i] < A[i+1] )
			jumps[0]++;
		else if( A[i] > A[i+1])
			jumps[1]++;

	}

	return jumps;

}

function riempiArray (n:number) : number[]{
	
	let A : number[] = [];

	for( let i = 0; i < n ; i++ ){

		A[i] = inputNumber("Inserisci altezza del muro " + (i+1));

	}

	return A;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}