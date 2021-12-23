package com.example.Real.estate.Model.Servicer;

import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Repository.RealestateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RealestateService {
    private RealestateRepository realestateRepository;

    @Autowired
    public RealestateService(RealestateRepository realestateRepository) {
        this.realestateRepository = realestateRepository;
    }
    public List<Realestate> getRealestate() {
        return realestateRepository.findAll();
    }
    public Optional<Realestate> getRealestate(Integer realestate) {
        return realestateRepository.findById(Realestate_id);

    }
    public void addNewRealestate (Realestate realestate) {
        realestateRepository.save(realestate);
    }
    public void deleteRealestate(Integer realestateId) {
        realestateRepository.deleteById(realestateId);
    }
}

