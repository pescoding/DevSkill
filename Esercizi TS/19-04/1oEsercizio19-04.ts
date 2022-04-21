let n : number = inputNumber("Inserisci un numero per le operazioni");

controllo(n);

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

function controllo (n:number) : void{

	if(n>0){

		console.log("Il numero è positivo");

	}
	else if(n<0){
		
		console.log("Il numero è negativo");	

	}
	else{

		console.log("Il numero è neutro");

	}

}

/*switch ( true ) {
   case nConvertito>0:
       console.log("Il numero è positivo");
       break;
   case nConvertito<0:
       console.log("Il numero è negativo");
       break;
    default:
        console.log("Il numero e' 0, quindi neutro");
}*/