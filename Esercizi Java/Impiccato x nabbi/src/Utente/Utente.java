package Utente;

import java.util.Scanner;

public class Utente {

    String nome;
    int vite = 5;

    public Utente(){

        System.out.println("Benvenuto, come ti chiami?");

        Scanner scanner = new Scanner(System.in);

        this.nome = scanner.nextLine();

        System.out.println();

    }

    public String getNome() {
        return nome;
    }

    public int getVite() {
        return vite;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setVite(int vite) {
        this.vite = vite;
    }

    public void perdiVita(){

        this.vite--;

    }

}
