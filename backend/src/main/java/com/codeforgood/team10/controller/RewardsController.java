package com.codeforgood.team10.controller;

import com.codeforgood.team10.data.Reward;
import com.codeforgood.team10.data.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

/**
 * Created by justina on 9/21/18.
 */

@RestController
@RequestMapping(path = "/rewards")
public class RewardsController {


    @Autowired
    private RewardRepository rewardRepository;

    @GetMapping(path = "/test")
    public @ResponseBody
    Principal test(Principal principal) {
        return principal;
    }

    @PostMapping(path = "/createRewards")
    public void createReward(@RequestBody Reward reward) {
        rewardRepository.save(reward);
    }

    public List<Reward> findAll() {
        return rewardRepository.findAll();
    }
}
