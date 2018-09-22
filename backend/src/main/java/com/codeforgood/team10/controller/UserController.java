package com.codeforgood.team10.controller;

import com.codeforgood.team10.data.User;
import com.codeforgood.team10.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Date;
import java.util.List;

/**
 * Created by shane on 9/21/18.
 */

@RestController
@RequestMapping(path="/user")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/test")
    public @ResponseBody
    Principal test(Principal principal) {
        return principal;
    }

    @PostMapping(path="/createUser")
    public void createUser(@RequestBody User user) {
        userRepository.save(user);
    }

    public User findUserById(long id) {
        return userRepository.findById(id);
    }
}