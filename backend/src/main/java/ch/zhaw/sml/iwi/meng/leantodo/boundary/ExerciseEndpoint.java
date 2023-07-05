package ch.zhaw.sml.iwi.meng.leantodo.boundary;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.leantodo.controller.ExerciseController;
import ch.zhaw.sml.iwi.meng.leantodo.controller.WorkoutController;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Exercise;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Workout;

@RestController
@CrossOrigin
public class ExerciseEndpoint {

    @Autowired
    ExerciseController exerciseController;

    @Autowired
    WorkoutController workoutController;

    @GetMapping(path = "/api/exercises")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Exercise> getExercises(@RequestParam(name="id") int workoutId, Principal principal) {
        Workout w = workoutController.getWorkout(workoutId);
        if(w.getUser().getLoginName().equals(principal.getName())) {
            return exerciseController.listExercisesForWorkout(workoutId);
        } 
        return null;
    }

    @GetMapping(path = "/api/visualization/{exerciseName}")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Exercise> getExercisesForVisual(@PathVariable(name="exerciseName") String exerciseName, Principal principal) {
        return exerciseController.getExercisesForVisualization(principal.getName(), exerciseName);
    }
}
