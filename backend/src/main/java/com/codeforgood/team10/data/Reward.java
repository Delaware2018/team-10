package com.codeforgood.team10.data;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import java.util.Date;

/**
 * Created by justina on 9/21/18.
 */

@Entity
public class Reward {

    private String name;
    private int cost;

    public Reward(String name, int cost) {
        this.name = name;
        this.cost = cost;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }
}
