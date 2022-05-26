let parola1 : string = "ciao";
let parola2 : string = "pizza";
let parola3 : string = parola1;

for ( let i = parola2.length-1 ; i >= 0  ; i--){

    parola3 += parola2.charAt(i);

}

console.log(parola3);