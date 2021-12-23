package com.example.Real.estate.Controller;

import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Servicer.UserService;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/User")
public class UserController<userService>  {

    private UserService userService ;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<Users> getUser() {
        return userService.getUser();
    }

    @GetMapping(path = "{userId}")
    public Optional<Users> getUser(@PathVariable(name = "userId") Integer userId) {
        return userService.getUser(userId);
    }
    @PostMapping("add")
    public void registerNewUser(@RequestBody Users user){
        userService.addNewUser(user);
    }



    @DeleteMapping(path = "delete/{userId}")
    public void deleteArtwork(@PathVariable ("userId") Integer userId){
        userService.deleteUser(userId);
    }
}

