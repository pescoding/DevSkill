let anno : number = inputNumber("Inserisci il tuo anno di nascita");

calcolaEtÃ (anno);

function calcolaEtÃ  (anno:number) : void{

	console.log("Hai " + (2022-anno) + " anni");

} 

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}