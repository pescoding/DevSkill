package school.devskill.Giochi.GiocoOca.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CasellaMovimento extends Casella{

    private Integer passi;

    public CasellaMovimento(Integer passi) {
        this.passi = passi;
        this.movimento = true;
    }

}
