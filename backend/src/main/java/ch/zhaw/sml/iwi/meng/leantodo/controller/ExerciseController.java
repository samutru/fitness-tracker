package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Exercise;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ExerciseInfo;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ExerciseInfoRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.ExerciseRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Workout;
import ch.zhaw.sml.iwi.meng.leantodo.entity.WorkoutRepository;

@Component
public class ExerciseController {

    @Autowired
    ExerciseRepository exerciseRepository;
    @Autowired
    WorkoutRepository workoutRepository;
    @Autowired
    ExerciseInfoRepository exerciseInfoRepository;

    // Get all Exercises for a workout
    public List<Exercise> listExercisesForWorkout(int workoutId) {
        return exerciseRepository.findAllExercisesForWorkout(workoutId);
    }

    // get list of specific exercises for user for visualization
    public List<Exercise> getExercisesForVisualization(String username, String exerciseName) {

        List<Exercise> exercises = exerciseRepository.findExercisesByUserAndType(username, exerciseName);
        return exercises;
    }

    // add Exercises to workout
    public List<Exercise> saveAll(List<Exercise> exercises, int workoutId) {
        Workout workout = workoutRepository.findById(workoutId).get();
        for (Exercise exercise : exercises) {
            exercise.setWorkout(workout);
        }
        return exerciseRepository.saveAll(exercises);
    }
}