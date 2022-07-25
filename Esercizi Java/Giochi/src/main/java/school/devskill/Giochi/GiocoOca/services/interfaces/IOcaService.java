package school.devskill.Giochi.GiocoOca.services.interfaces;

import school.devskill.Giochi.GiocoOca.eccezioni.GiocatoreNotFoundException;
import school.devskill.Giochi.GiocoOca.eccezioni.NoGiocatoreException;
import school.devskill.Giochi.GiocoOca.eccezioni.VittoriaException;
import school.devskill.Giochi.GiocoOca.models.Casella;
import school.devskill.Giochi.GiocoOca.models.CasellaMovimento;
import school.devskill.Giochi.GiocoOca.models.CasellaStop;
import school.devskill.Giochi.GiocoOca.models.Player;

import java.util.Random;

public interface IOcaService {

    void creaBoard();

    Player aggiungiPlayer(Player player);

    Player giocaTurno(Player player) throws NoGiocatoreException, GiocatoreNotFoundException, VittoriaException;

    Player trovaPlayer(Player player) throws GiocatoreNotFoundException;

    void reset();


}
