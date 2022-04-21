let nome : string = prompt("Inserisci il tuo nome");
let cognome : string = prompt("Inserisci il tuo cognome");

console.log(maiuscolo(nome) + " " + maiuscolo(cognome));

function maiuscolo (parola:string) : string{

	return parola.toUpperCase();

}