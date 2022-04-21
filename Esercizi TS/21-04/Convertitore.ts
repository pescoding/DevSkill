converti(selezionaMisurazione());

function selezionaMisurazione () : number{

	let scelta : number;

	do{

		scelta = inputNumber("Vuoi convertire gradi o distanza? 1 per gradi, 2 per distanza");

	}
	while(scelta!=1&&scelta!=2){};

	return scelta;

}

function converti (opzione:number) : void{

	if(opzione==1)
		convertiGradi();
	else
		convertiDistanza();
}

function convertiGradi () : void{

	let misuraOriginale : number = inputNumber("Inserisci la misurazione originale");

	let unitaDiMisura : string;

	do{

		unitaDiMisura = prompt("Inserisci l'unità di misura originale. C per centigradi, F per fahrenheit");

	}
	while(unitaDiMisura!="C"&&unitaDiMisura!="c"&&unitaDiMisura!="f"&&unitaDiMisura!="F"){};

	if(unitaDiMisura=="C"||unitaDiMisura=="c")
	{
		console.log("Il valore convertito è: " + cToF(misuraOriginale) + "F");
	}
	else
	{
		console.log("Il valore convertito è: " + fToC(misuraOriginale) + "C");
	}

}

function convertiDistanza () : void{

	let misuraOriginale : number = inputNumber("Inserisci la misurazione originale");

	let unitaDiMisura : string;

	do{

		unitaDiMisura = prompt("Inserisci l'unità di misura originale. KM per kilometri, MI per miglia");

	}
	while(unitaDiMisura!="KM"&&unitaDiMisura!="km"&&unitaDiMisura!="MI"&&unitaDiMisura!="mi"){};

	if(unitaDiMisura=="KM"||unitaDiMisura=="km")
	{
		console.log("Il valore convertito è: " + kmToMi(misuraOriginale) + "MI");
	}
	else
	{
		console.log("Il valore convertito è: " + miToKm(misuraOriginale) + "KM");
	}

}

function cToF (misuraOriginale:number) : number{

	return ((misuraOriginale * (9/5)) + 32);

}

function fToC (misuraOriginale:number) : number{

	return ((misuraOriginale - 32) * 5/9);

}

function kmToMi (misuraOriginale:number) : number{

	return misuraOriginale/1.609;

}

function miToKm (misuraOriginale:number) : number{

	return misuraOriginale*1.609;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}