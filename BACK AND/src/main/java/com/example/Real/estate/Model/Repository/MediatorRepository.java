package com.example.Real.estate.Model.Repository;

import com.example.Real.estate.Model.Entities.Mediator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MediatorRepository extends JpaRepository<Mediator,Integer> {




   }


