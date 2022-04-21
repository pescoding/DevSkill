let base : number = inputNumber("Inserisci la base");

let altezza : number = inputNumber("Inserisci l'altezza");

console.log("L'area e' "+ area(base,altezza));
console.log("Il perimetro e' "+ perimetro(base,altezza);

function area (base:number, altezza:number) : number{

	return base*altezza;

}

function perimetro (base:number, altezza:number) : number{

	return ((base*2)+(altezza*2));

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}