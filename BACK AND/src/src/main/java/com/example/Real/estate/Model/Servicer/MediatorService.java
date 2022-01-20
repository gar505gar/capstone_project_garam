package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Mediator;
import com.example.Real.estate.Model.Repository.MediatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class MediatorService {


   private MediatorRepository mediatorRepository;

    @Autowired
    public MediatorService(MediatorRepository mediatorRepository){
        this.mediatorRepository=mediatorRepository;
    }

    public List<Mediator>getMediators(){
        return mediatorRepository.findAll();
    }


    public Optional<Mediator>getMediator(Integer MediatorId){
        return mediatorRepository.findById(MediatorId);
    }
    public void  addNewMediator(Mediator mediator){
       mediatorRepository.save(mediator);
    }


//   public void deleteMediator(Integer MediatorId){
//        mediatorRepository.deleteById(MediatorId);
//   }
}
