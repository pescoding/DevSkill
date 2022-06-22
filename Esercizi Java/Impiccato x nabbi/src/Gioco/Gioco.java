package Gioco;

import java.util.Scanner;

import Indizi.Indizi;
import Parola.Parola;
import Stampa.Stampa;
import Utente.Utente;

public class Gioco {

    Scanner scanner = new Scanner(System.in);
    char[] lettere = new char[26];

    Utente utente = new Utente();
    Parola parola = new Parola("Marmotta");

    public void start(){

        char lettera = ' ';

        for(int i = 0 ; i < 26 ; i++){

            lettere[i] = ' ';

        }

        Stampa.stampaParola();

        while (true){

            lettera = inserisciLettera();

            if(Stampa.stampaRicerca(lettera, parola)){

                utente.perdiVita();
                Indizi.indizio(parola);

            }
            else{

                Indizi.setSensoOrario();

            }

            if(controllaFine()){

                System.out.println("La parola era " + parola.getParola() + "!");
                break;

            }

            if(utente.getVite() != 1)
                System.out.println("Ti restano " + utente.getVite() + " vite.");
            else
                System.out.println("Ti resta una sola vita!");

            System.out.println();

        }

    }

    private char inserisciLettera(){

        char lettera;
        boolean esci = false;

        while(true){

            esci = false;

            System.out.println("Quale lettera vuoi inserire?");

            lettera = scanner.next().charAt(0);

            for(int i = 0; i < this.lettere.length ; i++){

                if ( lettere[i] == lettera){

                    System.out.println("La lettera " + lettera + " e' gia' stata inserita.");
                    esci = true;
                    break;

                }
                else if( lettere[i] == ' ' ){

                    lettere[i] = lettera;
                    break;

                }

            }

            if(esci){

                continue;

            }

            break;

        }

        return lettera;

    }

    private boolean controllaFine(){

        if(utente.getVite() == 0){

            System.out.println("Hai perso tutte le vite, mi dispiace.");
            return true;

        }
        else if( Stampa.getK() == parola.getParola().length() ){

            System.out.println("Hai vinto!");
            return true;

        }

        return false;

    }

}
