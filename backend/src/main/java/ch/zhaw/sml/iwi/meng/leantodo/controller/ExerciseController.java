package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Exercise;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ExerciseRepository;

@Component
public class ExerciseController {
    
    @Autowired
    ExerciseRepository exerciseRepository;

    // Get all Exercises for a workout
    public List<Exercise> listExercisesForWorkout(int workoutId) {
        return exerciseRepository.findAllExercisesForWorkout(workoutId);
    }

    // get list of specific exercises for user for visualization
    public List<Exercise> getExercisesForVisualization(String username, String exerciseName) {

        List<Exercise> exercises = exerciseRepository.findExercisesByUserAndType(username, exerciseName);
        return exercises;
    }
}