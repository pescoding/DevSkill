package school.devskill.Giochi.GiocoOca.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import school.devskill.Giochi.GiocoOca.command.PlayerCommand;
import school.devskill.Giochi.GiocoOca.dto.PlayerDTO;
import school.devskill.Giochi.GiocoOca.eccezioni.GiocatoreNotFoundException;
import school.devskill.Giochi.GiocoOca.eccezioni.NoGiocatoreException;
import school.devskill.Giochi.GiocoOca.eccezioni.VittoriaException;
import school.devskill.Giochi.GiocoOca.models.Player;
import school.devskill.Giochi.GiocoOca.services.interfaces.IOcaService;

@RestController
@RequestMapping("/api/GiocoOca")

public class OcaController {

    IOcaService ocaService;

    ObjectMapper objectMapper;

    @Autowired
    public OcaController(IOcaService ocaService, ObjectMapper objectMapper){

        this.ocaService = ocaService;
        this.objectMapper = objectMapper;

    }

    @PostMapping ("/aggiungiplayer")
    public PlayerDTO aggiungiPlayer(@RequestBody PlayerCommand player){

        return objectMapper.convertValue(ocaService.aggiungiPlayer(new Player(player.getNome())),PlayerDTO.class);

    }

    @PostMapping ("/giocaturno")
    public PlayerDTO giocaTurno(@RequestBody PlayerCommand player){

        try{

            return objectMapper.convertValue(ocaService.giocaTurno(new Player(player.getNome())),PlayerDTO.class);

        }
        catch (NoGiocatoreException e){

            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, e.getMessage(), e);

        }
        catch (GiocatoreNotFoundException e){

            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, e.getMessage(), e);

        }
        catch (VittoriaException e){

            throw new ResponseStatusException(HttpStatus.OK, e.getMessage(), e);

        }

    }

    public PlayerDTO trovaPlayer(@RequestBody PlayerCommand player){

        try{

            return objectMapper.convertValue(ocaService.trovaPlayer(new Player(player.getNome())),PlayerDTO.class);

        }
        catch (GiocatoreNotFoundException e){

            throw new ResponseStatusException(HttpStatus.METHOD_NOT_ALLOWED, e.getMessage(), e);

        }

    }

    @GetMapping ("/reset")
    public void reset(){

        ocaService.reset();

    }

}
