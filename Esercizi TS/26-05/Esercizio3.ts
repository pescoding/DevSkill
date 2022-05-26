let parola1 : string = "ciaop";
let parola2 : string = "pizza";
let parola3 : string = "";

for ( let i = 0 ; i < parola1.length  ; i++){

    if(i%2==0)
        parola3 += parola1.charAt(i);
    else
        parola3 += parola2.charAt(i);

}

console.log(parola3);