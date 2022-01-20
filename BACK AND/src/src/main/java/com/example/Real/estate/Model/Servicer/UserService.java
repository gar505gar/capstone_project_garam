package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class UserService {

    private UserRepository userRepository;


    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<Users> getUser() {
        return userRepository.findAll();
    }
    public Optional<Users> getUser(Integer userId) {
        return userRepository.findById(userId);

    }
    public Optional<Users> getUserByemail(String email) {
        return userRepository.findByEmail(email) ;

    }
    public void addNewUser (Users user) {
       userRepository.save(user);
    }

//    public void addNewUser(User user) {
//        userRepository.sava(user);
//    }
    public void deleteUser(Integer userId) {
        userRepository.deleteById(userId);
    }

    public String getCheck(String email ,String password) {
        if( userRepository.findByEmailAndPassword(email,password)==null  ) {
            return "invalid credentials";
        }else {
            return " Authenticated";
        }
    }
}



