package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Servicer.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/security")
public class SecurityController {
    private SecurityService securityService;


    @Autowired
    public SecurityController(SecurityService securityService){this.securityService=securityService;}
    @PostMapping(path= "login")

    public String login(@RequestBody Users user){
        return  securityService.getCheck(user.getEmail(), user.getPassword());
    }



}
