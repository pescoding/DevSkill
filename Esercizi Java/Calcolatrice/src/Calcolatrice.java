public class Calcolatrice {

    public static void main(String[] args){

        System.out.println();

        Numeri numeri = new Numeri();

        numeri.setNumeri(8, 4);

        System.out.println(numeri.addizione());
        System.out.println(numeri.sottrazione());
        System.out.println(numeri.moltiplicazione());
        System.out.println(numeri.divisione());

        numeri.setNumero1(12);

        System.out.println();
        System.out.println(numeri.addizione());
        System.out.println(numeri.sottrazione());
        System.out.println(numeri.moltiplicazione());
        System.out.println(numeri.divisione());

    }

}
