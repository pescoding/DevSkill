let a : string = prompt("Inserisci una parola");

let b : string = prompt("Inseriscine un'altra");

sommaStringhe(a,b);
sommaStringhe(b,a);

function sommaStringhe (a:string, b:string) : void{

	console.log(a+" "+b);

}