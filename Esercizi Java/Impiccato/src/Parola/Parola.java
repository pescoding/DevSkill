package Parola;

import Stampa.Stampa;

public class Parola {

    String parola;

    public Parola(){}

    public Parola(String parola) {

        this.parola = parola;

        Stampa opt = new Stampa(parola.length());

    }

    public String getParola() {
        return parola;
    }

    public void setParola(String parola) {
        this.parola = parola;
    }

}
