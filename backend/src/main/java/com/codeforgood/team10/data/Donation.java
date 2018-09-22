package com.codeforgood.team10.data;



import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Donation {

    private String location;
    private Date date;
    private Items items;
    private long userID;

    public Donation(String location, Date date, Items items, long id) {
        this.location = location;
        this.date = date;
        this.items = items;
        this.userID = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Items getItems() {
        return items;
    }

    public void setItems(Items items) {
        this.items = items;
    }
}


