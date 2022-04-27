console.log("Il numero maggiore tra quelli inseriti è: " + trovaMaggiore());

function trovaMaggiore () : void{

	let i : number;
	let k : number;

	k = inputNumber("Inserisci un numero. (-1 per terminare)");

	while(i != -1 && k != -1){

		i = inputNumber("Inserisci un numero. (-1 per terminare)");

		if(k < i && i != -1)
			k = i;

	}

	return k;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}