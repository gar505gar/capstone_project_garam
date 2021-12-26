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
    private int userId;
    private String name;
    private String email;
    private int phone;

    @OneToMany(mappedBy = "users")
    @JsonIgnore
    private List<Realestate> items = new ArrayList<>();

    public Users(int userId, String name, String email, int phone ,List<Realestate> items) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.items = items;
    }

    public Users() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public List<Realestate> getItems() {
        return items;
    }

    public void setItems(List<Realestate> items) {
        this.items = items;
    }

    //    @Override
//    public String toString() {
//        return "User{" +
//                "id=" + id +
//                ", Name='" + Name + '\'' +
//                ", email='" + email + '\'' +
//                ", mobilenambwr=" + mobilenambwr +
//                '}';
//    }
}

