package org.com.login.controller;
import org.com.login.entity.User;
import org.com.login.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/users")
    public void createUser(@RequestBody User user) {
        userService.insertUser(user.getUsername(), user.getPassword());
    }
}
