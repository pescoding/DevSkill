let n1 : number = inputNumber("Inserisci il primo numero");
let n2 : number = inputNumber("Inserisci il secondo numero");
let n3 : number = inputNumber("Inserisci il terzo numero");

maggiore(n1,n2,n3);

function maggiore(n1, n2, n3){

	if(n1<n2){

		n1 = n2;

	}
	if(n1<n3){

		n1 = n3;

	}

	console.log("Il numero maggiore e' " + n1);

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}

/*switch(c<n2Convertito){

	case true:
        c = n2Convertito;
        break;

}

switch(c<n3Convertito){

	case true:
        c = n3Convertito;
        break;

}*/