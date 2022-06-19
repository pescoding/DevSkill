public class Variabile {

    int valore;
    String tipo;
    String misura;

    Variabile(){}

    Variabile(int valore, String tipo, String misura){

        this.valore = valore;
        this.tipo = tipo;
        this.misura = misura;

    }

    String converti(){

        if( this.tipo.equals("distanza") ){

            Distanza distanza = new Distanza();

            return this.valore + this.misura + " = " + (distanza.converti(valore, misura) + distanza.misura);

        }
        else{

            Temperatura temperatura = new Temperatura();

            return this.valore + this.misura + " = " + (temperatura.converti(valore, misura) + temperatura.misura);

        }


    }

}
