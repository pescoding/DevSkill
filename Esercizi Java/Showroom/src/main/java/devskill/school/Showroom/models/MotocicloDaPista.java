package devskill.school.Showroom.veicolo;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

public class MotocicloDaPista extends Motociclo{

    private String cambio;

    private String gomme;

    private String tipoGomme;

    public void setCambio(String cambio) {

        if( cambio.equalsIgnoreCase("normale") || cambio.equalsIgnoreCase("invertito")  )
            this.cambio = cambio;
        else
            this.cambio = null;

    }

    public void setGomme(String gomme) {

        if( gomme.equalsIgnoreCase("morbide") || gomme.equalsIgnoreCase("medie") || gomme.equalsIgnoreCase("dure") )
            this.gomme = gomme;
        else
            this.gomme = null;

    }

    public void setTipoGomme(String tipoGomme) {

        if( tipoGomme.equalsIgnoreCase("asciutto") || tipoGomme.equalsIgnoreCase("bagnato")  )
            this.tipoGomme = tipoGomme;
        else
            this.tipoGomme = null;

    }

    public MotocicloDaPista(String nome, String marca, Integer annoProd, Double prezzo, String edizioneLimitata, String cambio, String gomme, String tipoGomme ){

        super(nome,marca,annoProd,prezzo + ((prezzo/100) * 15), edizioneLimitata);

    }

    public MotocicloDaPista(String nome, String marca, Integer annoProd, Double prezzo, String cambio, String gomme, String tipoGomme ){

        super(nome,marca,annoProd,(prezzo+((prezzo/100)*15)));

    }

}
