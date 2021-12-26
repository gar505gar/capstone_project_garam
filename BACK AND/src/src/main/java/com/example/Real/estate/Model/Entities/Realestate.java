package com.example.Real.estate.Model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Realestate {
    @Id
    @GeneratedValue
    private int id;
    private String location;
    private String space;
@ManyToOne
@JoinColumn(name = "userId",referencedColumnName = "userId")
private Users users;

    public Realestate(int id, String location, String space, Users users) {
        this.id = id;
        this.location = location;
        this.space = space;
        this.users = users;
    }

    public Realestate() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSpace() {
        return space;
    }

    public void setSpace(String space) {
        this.space = space;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }
}
