package com.example.Real.estate.Model.Repository;
import com.example.Real.estate.Model.Entities.Realestate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RealestateRepository  extends JpaRepository<Realestate,Integer> {

}
