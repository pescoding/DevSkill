const i : number = inputNumber("Inserire i");
const j : number = inputNumber("Inserire j");

console.log(i + " " + j + " " + trovaCiclo(i,j));

function trovaCiclo (i:number,j:number) : number{

	let n : number = +i;
	let c : number = 1;
	let max : number = 0;

	while(i <= j){

		while(n != 1){

			c++;

			if(n%2!=0)
				n=((3*n)+1);
			else
				n=n/2;

		}

		if(c > max)
			max = c;

		i++;
		n = i;
		c = 1;

	}

	return max;

}

function inputNumber (frase:string) : number{
	
	let n : number = prompt(frase);
	
	return +n;

}