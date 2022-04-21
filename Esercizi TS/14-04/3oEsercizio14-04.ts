let n1 : number = inputNumber("Inserisci un numero per le operazioni");

let n2 : number = inputNumber("Inseriscine un altro");

console.log(n1+n2);
console.log(n1-n2);
console.log(n1*n2);
console.log(n1/n2);

function addizione (n1,n2) : number{

	return n1+n2;

}

function sottrazione (n1,n2) : number{

	return n1-n2;

}

function moltiplicazione (n1,n2) : number{

	return n1*n2;

}

function divisione (n1,n2) : number{

	return n1/n2;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}