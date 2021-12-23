package com.example.Real.estate.Model.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table
public class Mediator {

    @Id
    @GeneratedValue
    private int id;
    private String Name;
    private String email;
    private int mobile;


    public Mediator(int id, String name, String email, int mobile) {
        this.id = id;
        Name = name;
        this.email = email;
        this.mobile = mobile;

    }

    public Mediator() {
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

    public int getMobile() {
        return mobile;
    }

    public void setMobile(int mobile) {
        this.mobile = mobile;
    }


    @Override
    public String toString() {
        return "Mediator{" +
                "id=" + id +
                ", Name='" + Name + '\'' +
                ", email='" + email + '\'' +
                ", mobile=" + mobile +

                '}';
    }
}
