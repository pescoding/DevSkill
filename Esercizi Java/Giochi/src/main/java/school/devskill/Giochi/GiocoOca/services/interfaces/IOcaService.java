package school.devskill.Giochi.GiocoOca.services.interfaces;

import school.devskill.Giochi.GiocoOca.models.Casella;
import school.devskill.Giochi.GiocoOca.models.CasellaMovimento;
import school.devskill.Giochi.GiocoOca.models.CasellaStop;
import school.devskill.Giochi.GiocoOca.models.Player;

import java.util.Random;

public interface IOcaService {

    void creaBoard();

    Player aggiungiPlayer(Player player);

    Player giocaTurno(Player player);

    void reset();


}
