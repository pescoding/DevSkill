let n : number = inputNumber("Inserisci un numero per le operazioni");

isPari(n);

function isPari (n:number) : void{
	
	if(n%2==0){

		console.log("Il numero è pari");

	}
	else{

		console.log("Il numero è dispari");

	}

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

/*switch ( nConvertito%2==0 ) {
   case true:
       console.log("Il numero è pari");
       break;
   case false:
       console.log("Il numero è dispari");
       break;
}*/
