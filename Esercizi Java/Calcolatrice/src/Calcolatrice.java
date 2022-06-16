import java.util.Scanner;

public class Calcolatrice {

    public static void main(String[] args){

        System.out.println();

        Scanner scelta1 = new Scanner(System.in);
        Scanner scelta2 = new Scanner(System.in);

        System.out.print("Inserisci il primo numero su cui operare: ");
        Integer opt1 = scelta1.nextInt();
        System.out.println();
        System.out.print("Inserisci il secondo numero: ");
        Integer opt2 = scelta2.nextInt();
        System.out.println();

        Numeri numeri = new Numeri();

        numeri.setNumeri(opt1, opt2);

        System.out.println(opt1 + " + " + opt2 + " = " + numeri.addizione());
        System.out.println(opt1 + " - " + opt2 + " = " + numeri.sottrazione());
        System.out.println(opt1 + " * " + opt2 + " = " + numeri.moltiplicazione());
        System.out.println(opt1 + " / " + opt2 + " = " + numeri.divisione());

    }

}