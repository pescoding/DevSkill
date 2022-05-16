let N : number = inputNumber("Inserisci intero N");

console.log(N-inverti(N));

function inverti (n : number): number{

	let tmp : string = "" + n;
	let res : string[] = [];
	let resN : number;

	res = tmp.split("");

	tmp = "";

	for( let i = res.length-1 ; i >= 0 ; i--){

		tmp += res[i];

	}

	resN = +tmp;

	return resN;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}