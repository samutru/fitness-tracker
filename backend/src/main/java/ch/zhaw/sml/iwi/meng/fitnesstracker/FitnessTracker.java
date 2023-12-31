package ch.zhaw.sml.iwi.meng.fitnesstracker;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.Role;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.RoleRepository;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.User;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.UserRepository;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.Workout;
import ch.zhaw.sml.iwi.meng.fitnesstracker.entity.WorkoutRepository;

@SpringBootApplication
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class FitnessTracker implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(FitnessTracker.class, args);
        
    }

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private WorkoutRepository workoutRepository;

    
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    // This is only really relevant for development, where we have different servers for frontend and backend
                    .allowedOrigins("http://localhost:8100")
                    .allowedMethods("GET", "PUT", "POST", "DELETE")
                    // AllowCredentials is necessary, as it sets 'Access-Control-Allow-Credentials'. 
                    // Otherwise Angular's HttpClient will not pass the Cookie back.
                    .allowCredentials(true);
            }
        };
    }
   
    @Override
    public void run(String... args) throws Exception {
        User u = new User();
        u.setLoginName("user");
        u.setPasswordHash(new BCryptPasswordEncoder().encode("user"));
        u.setAge(20);
        u.setHeight(180);
        u.setWeight(80);
        u.setBmi(24.7);
        Role r = new Role();
        r.setRoleName("ROLE_USER");
        roleRepository.save(r);
        u.getRoles().add(r);
        userRepository.save(u);

        List<Workout> workouts = workoutRepository.findAll();
        for (Workout workout : workouts) {
            workout.setUser(u);
            workoutRepository.save(workout);
        }

    }
}
