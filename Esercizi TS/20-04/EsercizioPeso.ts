BMI();
if(domanda())
	misurazionePrecisa();
arrivederci();

//5.80709
//143.3

function BMI() : void{

	let statura : number = piediToCm(inputNumber("Inserisci la tua statura in piedi"));
	let peso : number = libreToKg(inputNumber("Inserisci il tuo peso in libre"));

	calcoloCostituzioneBMI(calcoloBMI(statura, peso));

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function piediToCm (statura:number) : number{

	return statura/3.281;

}

function libreToKg (peso:number) : number{

	return peso/2.205;

}

function calcoloBMI (statura:number, peso:number ) : number{

	return (peso/(statura*statura));

} 

function calcoloCostituzioneBMI (BMI : number) : void{

	let costituzione : string;

	switch(true){

		case BMI<16.5:
			costituzione = "sottopeso severo";
			break;
		case BMI >= 16.5 && BMI <= 18.4:
			costituzione = "sottopeso";
			break;
		case BMI > 18.5 && BMI <= 24.9:
			costituzione = "normale";
			break;
		case BMI > 25 && BMI <= 30:
			costituzione = "sovrappeso";
			break;
		case BMI > 30.1 && BMI <= 34.9:
			costituzione = "obesità primo grado";
			break;
		case BMI > 35 && BMI <= 40:
			costituzione = "obesità secondo grado";
			break;
		case BMI > 40:
			costituzione = "IL MAESTRO GSKIANTO";
			break;		

	}

	console.log("Il tuo BMI è: " + BMI + ", la tua costituzione è: " + costituzione);

}

function domanda() : boolean{

	let opzione : string;

	do
	{

		opzione = prompt("Vuoi una misurazione più precisa? (si/no)");

	}
	while(opzione != "si" && opzione != "SI" && opzione != "Si" && opzione != "sI" && opzione != "sì" && opzione != "SÌ" && opzione != "Sì" && opzione != "sÌ" && opzione != "no" && opzione != "NO" && opzione != "No" && opzione != "nO"){}
	
	if(opzione == "si" || opzione == "SI" || opzione == "Si" || opzione == "sI" || opzione == "sì" || opzione == "SÌ" || opzione == "Sì" || opzione == "sÌ")
		return true;
	else
		return false;
	
}

function misurazionePrecisa() : void{

	let circonferenzaPolso : number = inputNumber("Inserisci la circonferenza del tuo polso in centimetri");

	if(inserisciSesso())
		console.log("La tua costituzione è: " + costituzioneUomo(circonferenzaPolso));
	else
		console.log("La tua costituzione è: " + costituzioneDonna(circonferenzaPolso));

}

function inserisciSesso() : boolean{

	let sesso : string;

	do
	{

		sesso = prompt("Inserisci il tuo sesso (m/f)");

	}
	while(sesso != "m" && sesso != "M" && sesso != "f" && sesso != "F"){}

	if(sesso == "m" || sesso == "M")
		return true;
	else
		return false;

} 

function costituzioneUomo(circonferenzaPolso) : string{

	switch(true)
		{

			case circonferenzaPolso  < 17:
				return "esile";
				
			case circonferenzaPolso  >= 17 && circonferenzaPolso <= 18:
				return "normale";

			case circonferenzaPolso  > 18:
				return "robusta";	

		}

} 

function costituzioneDonna(circonferenzaPolso) : string{

	switch(true)
		{

			case circonferenzaPolso  < 15:
				return "esile";

			case circonferenzaPolso  >= 15 && circonferenzaPolso <= 16:
				return "normale";

			case circonferenzaPolso  > 16:
				return "robusta";

		}

} 

function arrivederci() : void {

	console.log("Arrivederci");

}