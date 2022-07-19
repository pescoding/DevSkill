package devskill.school.Showroom.veicolo;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public abstract class Veicolo {

    protected String nome;
    protected String marca;
    protected Integer annoProd;
    protected Double prezzo;

}
