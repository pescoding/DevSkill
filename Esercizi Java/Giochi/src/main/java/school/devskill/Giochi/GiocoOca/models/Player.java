package school.devskill.Giochi.GiocoOca.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class Player {

    protected String nome;
    protected Integer nLanci = 0;
    protected Integer posizione = 0;

    boolean freeze = false;

    public Player(String nome) {
        this.nome = nome;
    }

    public void cambiaPosizione(Integer posizione){

        this.posizione += posizione;

    }

    public void cambianLanci(){

        this.nLanci ++;

    }

}
