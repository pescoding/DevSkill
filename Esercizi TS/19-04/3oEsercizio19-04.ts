let n : number[] = [];

n[0] = inputNumber("Inserisci il primo numero");
n[1] = inputNumber("Inserisci il secondo numero");
n[2] = inputNumber("Inserisci il terzo numero");

maggiore(n[0],n[1],n[2]);

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