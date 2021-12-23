package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Servicer.MediatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/mediator")
public class MediatorController {
private MediatorService mediatorService;
@Autowired
    public MediatorController(MediatorService mediatorService){this.mediatorService=mediatorService;}
    @GetMapping
    public List<Mediator> getMediators(){return  mediatorService.getMediators();}



    @PostMapping(path = "add")
    public void registerNewMediator(@RequestBody Mediator mediator){
        mediatorService.addNewMediator(mediator);
    }
//    @DeleteMapping(path = "delete/{MediatorId}")
//    public void deleteMediator(@PathVariable ("MediatorId") Integer MediatorId){
//        mediatorService.deleteMediator(MediatorId);
//    }
}
