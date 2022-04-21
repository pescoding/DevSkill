let anno : number = inputNumber("Inserisci il tuo anno di nascita");

calcolaEtà(anno);

function calcolaEtà (anno:number) : void{

	console.log("Hai " + (2022-anno) + " anni");

} 

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}