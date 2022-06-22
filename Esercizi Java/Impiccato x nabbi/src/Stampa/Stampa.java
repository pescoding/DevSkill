package Stampa;

import Parola.Parola;
import Ricerca.Ricerca;

public class Stampa {

    public static char lettera[];
    private static int k = 0;

    public Stampa(int lenght) {

        lettera = new char[lenght];

        for(int i = 0; i < lenght; i++){

            lettera[i] = '_';

        }

    }

    public static void stampaParola(){

        for(int i = 0 ; i < lettera.length ; i++){

            System.out.print(lettera[i]);

        }

        System.out.println();

    }

    public static boolean stampaRicerca(char c, Parola parola){

        int i = Ricerca.cercaLettera(c, parola);

        if(i < 0){

            System.out.println("La lettera non e' presente.");

        }
        else {

            lettera[i] = parola.getParola().charAt(i);
            k++;

            if(i != lettera.length){

                for(int j = i+1; j < lettera.length ; j++){

                    if(parola.getParola().toUpperCase().charAt(j) == lettera[i] || parola.getParola().toLowerCase().charAt(j) == lettera[i]){

                        lettera[j] = parola.getParola().toLowerCase().charAt(j);
                        k++;

                    }


                }

            }


        }

        stampaParola();

        if(i<0)
            return true;

        return false;

    }

    public static int getK() {
        return k;
    }

}
