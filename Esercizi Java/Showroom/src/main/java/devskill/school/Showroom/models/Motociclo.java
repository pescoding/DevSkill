package devskill.school.Showroom.veicolo;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class Motociclo extends Veicolo {

    private String edizioneLimitata;

    public Motociclo(String nome, String marca, Integer annoProd, Double prezzo, String edizioneLimitata ){

        super(nome,marca,annoProd,prezzo + ((prezzo/100) * 25));
        this.edizioneLimitata = edizioneLimitata;

    }

    public Motociclo(String nome, String marca, Integer annoProd, Double prezzo){

        super(nome,marca,annoProd,prezzo);
        this.edizioneLimitata = null;

    }

}
