package Indizi;

import Parola.Parola;
import Stampa.Stampa;

public abstract class Indizi {

    static boolean sensoOrario = true;

    public static void indizio(Parola parola){

        if(sensoOrario){

            for(int i = 0; i < parola.getParola().length(); i++){

                if((parola.getParola().toUpperCase().charAt(i) != Stampa.lettera[i] && parola.getParola().toLowerCase().charAt(i) != Stampa.lettera[i])){

                    System.out.println("Prova a inserire la lettera " + parola.getParola().toUpperCase().charAt(i));
                    break;

                }

            }

        }
        else{

            for(int i = (parola.getParola().length())-1; i >= 0; i--){

                if((parola.getParola().toUpperCase().charAt(i) != Stampa.lettera[i] && parola.getParola().toLowerCase().charAt(i) != Stampa.lettera[i])){

                    System.out.println("Prova a inserire la lettera " + parola.getParola().toUpperCase().charAt(i));
                    break;

                }

            }

        }

    }

    public static void setSensoOrario() {
        Indizi.sensoOrario = !Indizi.sensoOrario;
    }
}
