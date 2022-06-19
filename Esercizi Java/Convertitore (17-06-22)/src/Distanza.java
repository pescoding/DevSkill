public class Distanza {

    String misura;

    //Constructor

    Distanza(){}


    //Methods

    int converti(int valore, String misura){

        if(misura.equals("m")){

            this.misura = "km";
            return valore/1000;

        }
        else{

            this.misura = "m";
            return valore*1000;

        }

    }

}
