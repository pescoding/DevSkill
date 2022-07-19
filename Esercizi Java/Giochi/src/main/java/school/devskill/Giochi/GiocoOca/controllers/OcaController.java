package school.devskill.Giochi.GiocoOca.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import school.devskill.Giochi.GiocoOca.command.PlayerCommand;
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
    public Player aggiungiPlayer(@RequestBody Player player){

        return ocaService.aggiungiPlayer(player);

    }

    @PostMapping ("/giocaturno")
    public Player giocaTurno(@RequestBody Player player){

        return ocaService.giocaTurno(player);

    }

    @GetMapping ("/reset")
    public void reset(){

        ocaService.reset();

    }

}
