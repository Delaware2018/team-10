package com.codeforgood.team10.controller;

import com.codeforgood.team10.data.Reward;
import com.codeforgood.team10.data.RewardRepository;
import com.codeforgood.team10.data.User;
import com.codeforgood.team10.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

/**
 * Created by justina on 9/21/18.
 */

@RestController
@RequestMapping(path = "/reward")
public class RewardController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RewardRepository rewardRepository;

    @GetMapping ("/points/add/{value}")
        public boolean one(@RequestHeader(value="phoneNumber") long phoneNumber, @PathVariable int value) {
            User user = userRepository.findByPhoneNumber(phoneNumber);

            user.setPoints(user.getPoints() + value);

            userRepository.save(user);

            return true;
        }



    @PostMapping(path = "/create")
    public void createReward(@RequestBody Reward reward) {
        rewardRepository.save(reward);
    }

    @GetMapping(path="/get")
    public List<Reward> getRewards() {
        return rewardRepository.findAll();
    }

    public List<Reward> findAll() {
        return rewardRepository.findAll();
    }
}
