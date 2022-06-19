public class Temperatura {

    String misura;

    //Constructor

    Temperatura(){}


    //Methods

    int converti(int valore, String misura){

        if(misura.equals("c")){

            this.misura = "f";
            return (valore*(9/5)+32);

        }
        else{

            this.misura = "c";
            return ((valore-32)*5/9);

        }

    }

}
