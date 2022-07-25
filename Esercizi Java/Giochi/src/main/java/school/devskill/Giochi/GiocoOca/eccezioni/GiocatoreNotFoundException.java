package school.devskill.Giochi.GiocoOca.eccezioni;

public class GiocatoreNotFoundException extends RuntimeException {

    public GiocatoreNotFoundException() {

        super("Il giocatore non è presente.");

    }

}
