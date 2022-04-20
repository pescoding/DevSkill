let statura : number = prompt("Inserisci la tua statura in piedi");
let peso : number = prompt("Inserisci il tuo peso in libre");

statura = +statura;
peso = +peso;

//5,80709
//143,3

statura/=3.281;
peso/=2.205;

let BMI : number = peso/(statura*statura);

let costituzione : string = "perfetta";

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

let opzione : string;

do
{

	opzione = prompt("Vuoi una misurazione più precisa? (si/no)");

}
while(opzione != "si" && opzione != "SI" && opzione != "Si" && opzione != "sI" && opzione != "sì" && opzione != "SÌ" && opzione != "Sì" && opzione != "sÌ" && opzione != "no" && opzione != "NO" && opzione != "No" && opzione != "nO"){}

if(opzione == "si" || opzione == "SI" || opzione == "Si" || opzione == "sI" || opzione == "sì" || opzione == "SÌ" || opzione == "Sì" || opzione == "sÌ")
{

	let circonferenzaPolso : number = prompt("Inserisci la circonferenza del tuo polso in centimetri");

	let sesso : string;

	do
	{

		sesso = prompt("Inserisci il tuo sesso (m/f)");

	}
	while(sesso != "m" && sesso != "M" && sesso != "f" && sesso != "F"){}

	if(sesso == "m" || sesso == "M")
	{

		switch(true)
		{

			case circonferenzaPolso  < 17:
				costituzione = "esile";
				break;

			case circonferenzaPolso  >= 17 && circonferenzaPolso <= 18:
				costituzione = "normale"
				break;

			case circonferenzaPolso  > 18:
				costituzione = "robusta";
				break;	

		}

	}
	else
	{

		switch(true)
		{

			case circonferenzaPolso  < 15:
				costituzione = "esile";
				break;

			case circonferenzaPolso  >= 16 && circonferenzaPolso <= 15:
				costituzione = "normale"
				break;

			case circonferenzaPolso  > 16:
				costituzione = "robusta";
				break;	

		}

	}

	console.log("La tua costituzione è: " + costituzione);

}

console.log("Arrivederci");