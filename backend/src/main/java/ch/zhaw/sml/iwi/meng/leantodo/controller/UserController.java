package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.User;
import ch.zhaw.sml.iwi.meng.leantodo.entity.UserRepository;

@Component
public class UserController {

    @Autowired
    UserRepository userRepository;

    public User getUserInfo(String username) {
        Optional<User> user = userRepository.findById(username);
        if (user.isPresent()) {
            User isUser = (User) user.get();
            return isUser;
        }
        return null;
    }
}
