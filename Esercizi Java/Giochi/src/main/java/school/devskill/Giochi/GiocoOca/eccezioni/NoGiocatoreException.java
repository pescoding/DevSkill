package school.devskill.Giochi.GiocoOca.eccezioni;

public class NoGiocatoreException extends RuntimeException {

    public NoGiocatoreException() {

        super("Non sono presenti abbastanza giocatori.");

    }

}
