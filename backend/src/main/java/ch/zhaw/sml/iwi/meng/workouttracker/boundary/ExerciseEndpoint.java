package ch.zhaw.sml.iwi.meng.workouttracker.boundary;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.workouttracker.controller.ExerciseController;
import ch.zhaw.sml.iwi.meng.workouttracker.controller.WorkoutController;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.Exercise;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.Workout;

@RestController
@CrossOrigin
public class ExerciseEndpoint {

    @Autowired
    ExerciseController exerciseController;

    @Autowired
    WorkoutController workoutController;

    @GetMapping(path = "/api/exercises")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Exercise> getExercises(@RequestParam(name = "id") int workoutId, Principal principal) {
        Workout w = workoutController.getWorkout(workoutId);
        if (w.getUser().getLoginName().equals(principal.getName())) {
            return exerciseController.listExercisesForWorkout(workoutId);
        }
        return null;
    }

    @GetMapping(path = "/api/visualization/{exerciseName}")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<Exercise> getExercisesForVisual(@PathVariable(name = "exerciseName") String exerciseName,
            Principal principal) {
        return exerciseController.getExercisesForVisualization(principal.getName(), exerciseName);
    }

    @PostMapping(path = "/api/exercises/{id}")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public ResponseEntity<List<Exercise>> addExercises(@RequestBody List<Exercise> exercises,
            @PathVariable(name = "id") int workoutId) {
        List<Exercise> savedExercises = exerciseController.saveAll(exercises, workoutId);
        return new ResponseEntity<>(savedExercises, HttpStatus.CREATED);
    }

    @RequestMapping(path = "/api/exercises", method = RequestMethod.PUT)
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public void updateExercise(@RequestBody Exercise exercise, @RequestParam(name = "id") int workoutId) {
        exerciseController.updateExercise(exercise, workoutId);
    }

}
