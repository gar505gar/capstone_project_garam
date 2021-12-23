package com.example.Real.estate.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/Realestate")
public class RealestateController <RealestateService> {
    private RealestateService realestateService ;

    @Autowired
    public RealestateController(RealestateService realestateService) {
        this.realestateService = realestateService;
    }

    @GetMapping
    public List<Realestate> getRealestate() {
        return realestateService.getRealestate();
    }

    @GetMapping(path = "{realestateId}")
    public Optional<Realestate> getRealestate(@PathVariable(name = "realestate") Integer lestatereaId) {
        return realestateService.getRealestate(lestatereaId);
    }
    @PostMapping("add")
    public void registerNewRealestate(@RequestBody Realestate realestate){
        realestateService.addNewRealestate(realestate);
    }



    @DeleteMapping(path = "delete/{realestateId}")
    public void deleteRealestate(@PathVariable ("realestateId") Integer realestateId){
        realestateService.deleteRealestate(realestateId);
    }
}




