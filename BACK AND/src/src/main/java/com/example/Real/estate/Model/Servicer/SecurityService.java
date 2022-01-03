package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {
 private UserRepository userRepository;


    @Autowired
    public SecurityService(UserRepository userRepository){
        this.userRepository = userRepository ;
    }
    public String getCheck(String email ,String password) {
        if( userRepository.findByEmailAndPassword(email,password)==null  ) {
            return "invalid credentials";
        }else {
            return " Authenticated";
        }
    }
}
