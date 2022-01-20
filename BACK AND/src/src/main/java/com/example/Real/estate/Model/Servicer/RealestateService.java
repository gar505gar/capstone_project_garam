package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
import com.example.Real.estate.Model.Repository.RealestateRespository;
import com.example.Real.estate.Model.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RealestateService {

    private RealestateRespository realestateRespository;
    private UserRepository userRepository ;

    @Autowired
    public RealestateService(RealestateRespository realestateRespository , UserRepository userRepository) {
        this.realestateRespository = realestateRespository;
        this.userRepository = userRepository ;
    }
    public List<Realestate>getRealestates(){
        return realestateRespository.findAll();
    }

    public Optional<Realestate> getRealestate(Integer realestateId  ) {
        return realestateRespository.findById(realestateId);

    }
    public void addNewRealestate (Realestate realestate) {
        realestateRespository.save(realestate);
    }


    public void getRealstate(Integer realestateId) {
       realestateRespository.deleteById(realestateId);
    }
        public List<Realestate>getRealestateByemail(String email){
        Optional<Users> user  = userRepository.findByEmail(email) ;
        return user.get().getItems();
        }
        public void deleteRealestate(Integer RealestateId){
            realestateRespository.deleteById(RealestateId);
    }

}






