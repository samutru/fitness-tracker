package ch.zhaw.sml.iwi.meng.workouttracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import ch.zhaw.sml.iwi.meng.workouttracker.entity.Exercise;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.ExerciseInfoRepository;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.ExerciseRepository;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.Workout;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.WorkoutRepository;

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

    // update the exercise
    public void updateExercise(Exercise exercise, int workoutId) {
        Workout workout = workoutRepository.findById(workoutId).get();
        if (workout == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Workout not found");
        }

        Exercise orig = exerciseRepository.findById(exercise.getId()).get();

        if (orig == null || !(orig.getWorkout().getId() == workoutId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Exercise not found");
        }
        orig.setReps(exercise.getReps());
        exerciseRepository.save(orig);
    }
}