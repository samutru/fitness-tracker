package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.User;
import ch.zhaw.sml.iwi.meng.leantodo.entity.UserRepository;
import ch.zhaw.sml.iwi.meng.leantodo.entity.Workout;
import ch.zhaw.sml.iwi.meng.leantodo.entity.WorkoutRepository;

@Component
public class WorkoutController {

    @Autowired
    WorkoutRepository workoutRepository;
    @Autowired
    UserRepository userRepository;

    // Get all Workouts for a User
    public List<Workout> listAllWorkouts(String loginName) {
        return workoutRepository.findByUserName(loginName);
    }

    // Get workout by id
    public Workout listWorkout(int workoutId) {
        return workoutRepository.findById(workoutId).get();
    }

    public Workout addWorkout(Workout workout, String username) {
        User user = userRepository.findById(username).get();
        workout.setUser(user);
        return workoutRepository.save(workout);
    }
}
