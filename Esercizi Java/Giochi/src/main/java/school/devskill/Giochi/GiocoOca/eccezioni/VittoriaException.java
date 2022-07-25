package school.devskill.Giochi.GiocoOca.eccezioni;

public class VittoriaException extends Exception {

    public VittoriaException(String nome) {

        super(nome + " ha vinto!");

    }

}
