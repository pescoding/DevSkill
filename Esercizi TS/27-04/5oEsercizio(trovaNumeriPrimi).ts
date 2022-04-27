trovaPrimi(inputNumber("Quanti sono i numeri primi che vuoi trovare in ordine crescente?"));

function trovaPrimi (quanti:number) : void{
	
	let c : number = 2;
	let k : number = 0;
	let primi : number[] = [];
	let check : boolean;

	while( k != quanti ){

		check = true;

		for(let i = 2; i<c ; i++){

			if(c%i==0)
				check = false;

		}

		if(check){

			primi[k] = c;
			console.log(primi[k] + " è primo.");
			k++;
			
		}

		c++;

	}
}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}