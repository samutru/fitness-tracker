package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.leantodo.controller.WorkoutController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Workout;

@RestController
@CrossOrigin
public class WorkoutEndpoint {

    @Autowired
    WorkoutController workoutController;

    @GetMapping("/api/workouts")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Workout> getWorkouts(Principal principal) {
         return workoutController.listAllWorkouts(principal.getName());
    }

    
}