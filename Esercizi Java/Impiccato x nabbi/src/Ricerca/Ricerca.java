package Ricerca;

import Parola.Parola;

public abstract class Ricerca {

    public static int cercaLettera(char c, Parola parola){

        for(int i = 0; i<parola.getParola().length(); i++){

            if(parola.getParola().toUpperCase().charAt(i) == c || parola.getParola().toLowerCase().charAt(i) == c )
                return i;

        }

        return -1;

    }

}
