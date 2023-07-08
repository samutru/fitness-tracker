package ch.zhaw.sml.iwi.meng.fitnesstracker.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.Role;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.RoleRepository;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.User;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.UserRepository;

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

    public void saveUser(User temporaryUser, String username) {
        User user = userRepository.findById(username).get();
        user.setAge(temporaryUser.getAge());
        user.setHeight(temporaryUser.getHeight());
        user.setWeight(temporaryUser.getWeight());
        user.setBmi(temporaryUser.getBmi());
        userRepository.save(user);
    }
}
