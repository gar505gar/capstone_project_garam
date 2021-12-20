package com.example.Real.estate.Model.Entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.*;
@Entity
@Table
public class Users {
    @Id
    private int id;
    private String Name;
    private String email;
    private int mobilenambwr;

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

