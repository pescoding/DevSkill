public class Numeri {

    Integer numero1;
    Integer numero2;

    public Numeri(){}


    //setter
    public void setNumero1(Integer nuovoNumero){

        this.numero1 = nuovoNumero;

    }

    public void setNumero2(Integer nuovoNumero){

        this.numero2 = nuovoNumero;

    }

    public void setNumeri(Integer nuovoNumero1, Integer nuovoNumero2){

        this.numero1 = nuovoNumero1;
        this.numero2 = nuovoNumero2;

    }

    //Getter
    public Integer getNumero1(){

        return this.numero1;

    }

    public Integer getNumero2(){

        return this.numero2;

    }

    public Integer addizione(){

        return this.numero1 + this.numero2;

    }

    public Integer sottrazione(){

        return this.numero1 - this.numero2;

    }

    public Integer moltiplicazione(){

        return this.numero1 * this.numero2;

    }

    public Integer divisione(){

        return this.numero1 / this.numero2;

    }

}
