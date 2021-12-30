package com.example.Real.estate.Model.Repository;

import com.example.Real.estate.Model.Entities.Realestate;
import com.example.Real.estate.Model.Entities.Users;
import org.springframework.boot.autoconfigure.web.servlet.JerseyApplicationPath;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RealestateRespository extends JpaRepository<Realestate,Integer> {
}
