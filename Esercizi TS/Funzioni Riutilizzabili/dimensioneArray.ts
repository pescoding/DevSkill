function dimensioneArray (frase:string, n:number, m:number) : number{
	
	let i : number;

	do{
		i = inputNumber(frase+" (Min " + n + ", max " + m +")");
	}
	while(i<n || i>m);

	return +i;

}