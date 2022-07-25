package school.devskill.Giochi.GiocoOca.services.implementations;

import org.springframework.stereotype.Service;
import school.devskill.Giochi.GiocoOca.eccezioni.GiocatoreNotFoundException;
import school.devskill.Giochi.GiocoOca.eccezioni.NoGiocatoreException;
import school.devskill.Giochi.GiocoOca.eccezioni.VittoriaException;
import school.devskill.Giochi.GiocoOca.models.Casella;
import school.devskill.Giochi.GiocoOca.models.CasellaMovimento;
import school.devskill.Giochi.GiocoOca.models.CasellaStop;
import school.devskill.Giochi.GiocoOca.models.Player;
import school.devskill.Giochi.GiocoOca.services.interfaces.IOcaService;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.random.RandomGenerator;

@Service

public class OcaServiceImpl implements IOcaService {

    List <Casella> board = new ArrayList<>();
    List <Player> players = new ArrayList<>();

    public OcaServiceImpl() {

        creaBoard();

    }

    public void creaBoard(){

        for(int i = 0; i < 13 ; i++){

            if( i == 1 )
                board.add(new CasellaMovimento(2));
            else if( i == 5)
                board.add(new CasellaMovimento(-1));
            else if( i == 7)
                board.add(new CasellaMovimento(3));
            else if( i == 8)
                board.add(new CasellaMovimento(-8));
            else if( i == 9)
                board.add(new CasellaStop());
            else if ( i == 12)
                board.add(new CasellaMovimento(-3));
            else
                board.add(new Casella());

        }

    }

    public Player aggiungiPlayer(Player player){

        players.add(player);

        return player;

    }

    public Player giocaTurno (Player player) throws NoGiocatoreException, GiocatoreNotFoundException, VittoriaException {

        player = trovaPlayer(player);

        if(players.size()<2){

            throw new NoGiocatoreException();

        }

        if(player.isFreeze()){

            player.setFreeze(false);

        }
        else {

            Random generator = new Random();

            Integer random = generator.nextInt(6) + 1;
            System.out.println();
            System.out.println(players.size());
            System.out.println();

            player.cambiaPosizione(random);
            player.cambianLanci();

            if(player.getPosizione() >= 13)
            {

                throw new VittoriaException(player.getNome());

            }

            if(board.get(player.getPosizione()).isMovimento()){

                CasellaMovimento casellaMovimento = (CasellaMovimento) board.get(player.getPosizione());

                player.cambiaPosizione(casellaMovimento.getPassi());

            }

            if(board.get(player.getPosizione()).isStop()){

                player.setFreeze(true);

            }

        }

        System.out.println(player.isFreeze());
        return player;

    }

    public Player trovaPlayer(Player player) throws GiocatoreNotFoundException {

        int k = -1;

        for (int i = 0; i < players.size(); i++){

            if(players.get(i).getNome().equalsIgnoreCase(player.getNome()))
                k = i;

        }

        if(k == -1)
            throw new GiocatoreNotFoundException();

        return players.get(k);

    }

    public void reset(){

        players.clear();

    }

}
