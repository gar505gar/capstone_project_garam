package com.example.Real.estate.Model.Entities;

import javax.persistence.*;

@Entity
@Table
public class Realestate {
    @Id

    private int id;
    private String location;
    private String space;
    private String type ;
    private String details;
    private String img;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "med_id", referencedColumnName = "med_id")
    private Mediator mediator;


    public Realestate(int id, String location, String space, String details, String img, String type, Users users, Mediator mediator) {
        this.id = id;
        this.location = location;
        this.space = space;
        this.details = details;
        this.img = img;
        this.users = users;
        this.mediator = mediator;
        this.type = type ;
    }

    public Realestate() {
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public Mediator getMediator() {
        return mediator;
    }

    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }
}


