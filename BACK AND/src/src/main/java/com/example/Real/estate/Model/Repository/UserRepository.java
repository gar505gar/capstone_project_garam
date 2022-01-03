package com.example.Real.estate.Model.Repository;

import com.example.Real.estate.Model.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<Users,Integer>{

    @Query("SELECT email  FROM Users WHERE email = :email AND password = :password ")
    String findByEmailAndPassword(@Param("email") String email , @Param("password") String password);
   // boolean findByEmailAndPassword(String email, String password);
}
