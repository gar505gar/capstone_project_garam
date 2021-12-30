package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Servicer.RealestateService;
import com.example.Real.estate.Model.Servicer.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path= "realestate")
public class RealestateController {

    private RealestateService realestateService;

    @Autowired
    public RealestateController(RealestateService realestateService) {
        this.realestateService = realestateService;
    }

    @GetMapping
    public List<Realestate> getRealestates() {
        return realestateService.getRealestates();
    }

//    @GetMapping(path = "{realestateId}")
//    public Optional<Realestate> getRealstate(@PathVariable(name = "realestateId") Integer realestateId) {
//        return realestateService.getRealstate(realestateId);
//    }

    @PostMapping(path="/add")
    public void registerNewRealestate(@RequestBody Realestate realestate){
        realestateService.addNewRealestate(realestate);
    }



    @DeleteMapping(path = "delete/{realestateId}")
    public void deleteRealestate(@PathVariable ("realestateId") Integer realestateId){
        realestateService.deleteRealestate(realestateId);
    }
}


