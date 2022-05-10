//1536 è il 100, 859963392

let k : number = 1;
let i : number = 1;

let o = performance.now();

while( k != 1500 ){

	i++;

	if(isUgly(i))
		k++;

}

console.log("Il 1500’th brutto è " + i);

let p = performance.now();

console.log(p-o);

function isUgly ( n: number) : boolean{

	let i : boolean = true;

	while(  n != 1 ){

		if( n%2==0 )
			n = n/2;
		else if( n%3==0 )
			n = n/3;
		else if( n%5==0 )
			n = n/5;
		else{

			n = 1;
			i = false;

		}
		

	}

	return i;

}