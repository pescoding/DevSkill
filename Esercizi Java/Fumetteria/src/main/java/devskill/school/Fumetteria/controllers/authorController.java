package devskill.school.Fumetteria.controllers;

import devskill.school.Fumetteria.models.author;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("fumetteria/")
public class authorController {

    @PostMapping("search")
    public String Author(){

        return author.class.getName();

    }

}
