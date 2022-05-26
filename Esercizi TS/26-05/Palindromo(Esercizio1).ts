let parola : string = "onno";
let ok : boolean = true;

for ( let i = 0 ; i < parola.length/2-1 ; i++){

    if( parola.charAt(i) != parola.charAt(parola.length-i-1) )
        ok = false;

}

if(ok)
    console.log("Palindromo");
else
    console.log("Non è palindromo");