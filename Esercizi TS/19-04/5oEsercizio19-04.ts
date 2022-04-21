let anno : number = inputNumber("Inserisci un anno per sapere se è bisestile");

isBisestile(anno);

function isBisestile (anno:number) : void{

	if((anno%400==0)||((anno%100!=0)&&(anno%4==0))){

		console.log("L'anno e' bisestile");

	}
	else{

		console.log("L'anno non e' bisestile, mi dispiace");

	}

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

/*switch(true){

        case annoConvertito%400==0:
	        console.log("L'anno e' bisestile");
                break;
        
        case annoConvertito%100!=0 && annoConvertito%4==0:
                console.log("L'anno e' bisestile");
                break;

        default:
                console.log("L'anno non e' bisestile, mi dispiace");

}*/