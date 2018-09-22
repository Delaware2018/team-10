package com.codeforgood.team10.controller;

import com.codeforgood.team10.data.User;
import com.codeforgood.team10.data.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by shane on 9/21/18.
 */

@RestController
@RequestMapping(path = "/user")
public class UserController {


    @Autowired
    private UserRepository userRepository;

    @PostMapping(path = "/create")
    public void createUser(@RequestBody User user) {
        userRepository.save(user);
    }

    public User findUserById(long id) {
        return userRepository.findById(id);
    }
}
