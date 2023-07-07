package ch.zhaw.sml.iwi.meng.workouttracker.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.workouttracker.entity.Role;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.RoleRepository;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.User;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.UserRepository;

@Component
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    public User getUserInfo(String username) {
        Optional<User> user = userRepository.findById(username);
        if (user.isPresent()) {
            User isUser = (User) user.get();
            return isUser;
        }
        return null;
    }

    public void saveNewUser(User user) {
        user.setPasswordHash(new BCryptPasswordEncoder().encode(user.getPasswordHash()));
        Role r = new Role();
        r.setRoleName("ROLE_USER");
        roleRepository.save(r);
        user.getRoles().add(r);
        userRepository.save(user);
    }

    public void saveUser(User user, String username) {
        user.setLoginName(username);
        userRepository.save(user);
    }
}
