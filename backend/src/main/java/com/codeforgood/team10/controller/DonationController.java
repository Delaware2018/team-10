package com.codeforgood.team10.controller;



import com.codeforgood.team10.data.Donation;
import com.codeforgood.team10.data.DonationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;


@RestController
@RequestMapping(path="/donation")
public class DonationController {

    @Autowired
    private DonationRepository donationRepository;

    @PostMapping(path="/create")
    public void create(@RequestBody Donation donation) {
        donationRepository.save(donation);
    }

    public ArrayList<Donation> findAllDonationsById(long id) {
        return donationRepository.findAllById(id);
    }



}
