package ch.zhaw.sml.iwi.meng.fitnesstracker.boundary;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.fitnesstracker.controller.UserController;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
public class UserEndpoint {

    @Autowired
    UserController userController;

    @RequestMapping(path = "/api/me", method = RequestMethod.GET, produces = "application/json")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public String me(Principal principal) {
    
        return "{\"user\": \"" + principal.getName() + "\"} ";
    }

    @GetMapping(value="/api/userInfo")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public User getUserInfo(Principal principal) {
        return userController.getUserInfo(principal.getName());
    }
    
    @PostMapping(value = "/signupUser")
    public void signupUser(@RequestBody User user) {
        userController.saveNewUser(user);
    }

    @PutMapping(value = "/api/updateUser")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateUser(@RequestBody User user, Principal principal) {
        userController.saveUser(user, principal.getName());
    }

}