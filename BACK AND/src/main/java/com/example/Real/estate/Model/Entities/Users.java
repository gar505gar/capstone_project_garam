package com.example.Real.estate.Model.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Name;
    private String email;
    private int mobilenambwr;

    //@OneToMany(mappedBy = "Realestate")
    //@JsonIgnore
    //private List<Users> items = new ArrayList<>();

    public Users(int id, String name, String email, int mobilenambwr) {
        this.id = id;
        this.Name = name;
        this.email = email;
        this.mobilenambwr = mobilenambwr;
    }

    public Users() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getMobilenambwr() {
        return mobilenambwr;
    }

    public void setMobilenambwr(int mobilenambwr) {
        this.mobilenambwr = mobilenambwr;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", Name='" + Name + '\'' +
                ", email='" + email + '\'' +
                ", mobilenambwr=" + mobilenambwr +
                '}';
    }
}

