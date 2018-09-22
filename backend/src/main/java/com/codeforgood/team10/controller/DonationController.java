package com.codeforgood.team10.controller;



import com.codeforgood.team10.data.Donation;
import com.codeforgood.team10.data.DonationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@RestController
@RequestMapping(path="/donation")
public class DonationController {

    @Autowired
    private DonationRepository donationRepository;

    @PostMapping(path = "/create")
    public void create(@RequestHeader(value = "phoneNumber") long phoneNumber, @RequestBody Donation donation) {
        donation.setPhoneNumber(phoneNumber);
        donationRepository.save(donation);
    }

    public List<Donation> findAllDonationsById(long id) {
        return donationRepository.findAllById(id);
    }

    @GetMapping(path = "/findDonations")
    public List<Donation> findAllDonationsbyPhoneNumber(@RequestHeader(value = "phoneNumber") long phoneNumber) {
        return donationRepository.findAllByPhoneNumber(phoneNumber);
    }

    @GetMapping(path = "/generate")
    public void generate(){
        String [] types = {"shirt", "shorts", "jeans", "dresses", "pillow", "dresser w/mirror", "lamp", "monitor", "puzzles", "shoes"};
        float [] prices = {2.99f, 3.99f, 4.99f, 5.99f, 2.99f, 39.99f, 3.99f, 2.99f, 0.99f, 4.99f };
        long [] numbers = {(long)4015551234.0, (long)4015551235.0, (long) 4015551236.0, (long) 4015551237.0, (long) 4015551238.0};
        Date[] dates = { new Date("09/21/18"), new Date("05/20/18"), new Date("09/27/18"), new Date("04/17/18"), new Date("08/13/18")
                new Date("06/04/18"), new Date("07/19/18"), new Date("03/30/18")};

        for (int i=0; i<30; i++) {
            int rand = (int) (Math.random()*9);
            Donation a = new Donation ("Wilmington", dates[(int)(Math.random()*2)], types[rand],
                    (int)(Math.random()*4)+1, prices[rand]);
            a.setPhoneNumber(numbers[(int)(Math.random()*4)]);

            donationRepository.save(a);
        }

    };

}
