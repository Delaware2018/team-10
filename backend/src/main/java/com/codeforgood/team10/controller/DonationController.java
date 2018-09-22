package com.codeforgood.team10.controller;


import com.codeforgood.team10.data.Donation;
import com.codeforgood.team10.data.DonationRepository;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClients;
import org.joda.time.Days;
import org.joda.time.DurationFieldType;
import org.joda.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;


@RestController
@RequestMapping(path = "/donation")
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
    public void generate() {
        String[] types = {"shirt", "shorts", "jeans", "dresses", "pillow", "dresser w/mirror", "lamp", "monitor", "puzzles", "shoes"};
        float[] prices = {2.99f, 3.99f, 4.99f, 5.99f, 2.99f, 39.99f, 3.99f, 2.99f, 0.99f, 4.99f};
        long[] numbers = {(long) 4085551234.0, (long) 4085551235.0, (long) 4085551236.0, (long) 4085551237.0, (long) 4085551238.0};
        String[] firstNames = {"John", "Mark", "Amy", "Lorraine", "Bob"};
        String[] lastNames = {"Doe", "Anthony", "Johnson", "Warren", "Kim"};
        int[] ages = {18, 18, 34, 26, 51};
//        Date[] dates = { new Date("09/21/18"), new Date("05/20/18"), new Date("09/27/18"), new Date("04/17/18"), new Date("08/13/18"),
//                new Date("06/04/18"), new Date("07/19/18"), new Date("03/30/18")};

        LocalDate startDate = new LocalDate(2018, 3, 11);
        LocalDate endDate = new LocalDate(2018, 3, 20);

        int days = Days.daysBetween(startDate, endDate).getDays();
        List<Date> dates = new ArrayList<>(days);  // Set initial capacity to `days`.
        for (int i = 0; i < days; i++) {
            LocalDate d = startDate.withFieldAdded(DurationFieldType.days(), i);
            dates.add(d.toDate());
        }

        Random r = new Random();
        for (Date d : dates) {
            System.out.println(d.toString());
            for (int i = 0; i < 30 + r.nextInt(80); i++) {
                int rand = (int) (Math.random() * 9);
                Donation a = new Donation("Wilmington", d, types[rand],
                        (int) (Math.random() * 4) + 1, prices[rand]);
                int rand2 = r.nextInt(5);
                a.setPhoneNumber(numbers[rand2]);

                donationRepository.save(a);
                System.out.println(a.getDate().toString());
                HttpClient httpclient = HttpClients.createDefault();
                HttpPost httppost = new HttpPost("http://localhost:31311");
                httppost.addHeader("content-type", "application/json");
                String json = String.format("{\"firstName\": \"%s\", \"lastName\": \"%s\", \"age\": %d, \"date\": \"%s\", \"item\": \"%s\", \"location\": \"%s\", \"phoneNumber\": %d, \"price\": %f, \"quantity\": %d}", firstNames[rand2], lastNames[rand2], ages[rand2], a.getDate().toString(), a.getItem(), a.getLocation(), a.getPhoneNumber(), a.getPrice(), a.getQuantity());
                try {
                    httppost.setEntity(new StringEntity(json));
                    httpclient.execute(httppost);
                } catch (IOException e) {
                    e.printStackTrace();
                }

            }
        }

    }

    ;


}
