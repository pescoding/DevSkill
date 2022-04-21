let nome : string = prompt("Inserisci il tuo nome");
let cognome : string = prompt("Inserisci il tuo cognome");

if(controllo(nome)&&controllo(cognome))
	console.log(minuscolo(nome) + " " + minuscolo(cognome));
else
	console.log("Nome e cognome non sono completamente in maiuscolo, di conseguenza non li ho convertiti in minuscolo");

function minuscolo (parola:string) : string{

	return parola.toLowerCase();

}

function controllo (parola:string) : boolean{

	if(parola == parola.toUpperCase()){
		return true;
	}else{
		return false;
	}
}