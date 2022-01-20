package com.example.Real.estate.Model.Repository;

import com.example.Real.estate.Model.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users,Integer>{

    @Query("SELECT email  FROM Users WHERE email = :email AND password = :password ")
    String findByEmailAndPassword(@Param("email") String email , @Param("password") String password);


    @Query(value = "SELECT * FROM  Users  where email=:email",nativeQuery = true)
    Optional<Users> findByEmail(@Param("email") String email) ;
}
