package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.leantodo.controller.ExerciseController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Exercise;

@RestController
@CrossOrigin
public class ExerciseEndpoint {

    @Autowired
    ExerciseController exerciseController;

    @GetMapping(path = "/api/exercises")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Exercise> getExercises(@RequestParam(name="id") int workoutId) {
        return exerciseController.listExercisesForWorkout(workoutId);
    }
}
