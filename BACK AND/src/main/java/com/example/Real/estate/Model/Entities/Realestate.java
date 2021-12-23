package com.example.Real.estate.Model.Entities;

public class Realestate {

    private int realestate_id;
    private String location;
    private String space;

    public Realestate(int realestate_id, String location, String space) {
        this.realestate_id = realestate_id;
        this.location = location;
        this.space = space;
    }

    public Realestate() {
    }

    public int getRealestate_id() {
        return realestate_id;
    }

    public void setRealestate_id(int realestate_id) {
        this.realestate_id = realestate_id;
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

}