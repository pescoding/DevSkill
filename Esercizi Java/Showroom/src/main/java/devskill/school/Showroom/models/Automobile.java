package devskill.school.Showroom.veicolo;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class Automobile extends Veicolo {

    private Integer cilindrata;

    public Automobile(String nome, String marca, Integer annoProd, Double prezzo, Integer cilindrata ){

        super(nome,marca,annoProd,prezzo);

        if( (2022 - annoProd) > 10 ){

            super.prezzo = prezzo - ((prezzo/100) * 10);

        }

        this.cilindrata = cilindrata;

    }

}
