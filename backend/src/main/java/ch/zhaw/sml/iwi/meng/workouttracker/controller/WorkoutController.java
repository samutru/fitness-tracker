package ch.zhaw.sml.iwi.meng.workouttracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.workouttracker.entity.User;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.UserRepository;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.Workout;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.WorkoutRepository;

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

    public Workout addWorkout(Workout workout, String username) {
        User user = userRepository.findById(username).get();
        workout.setUser(user);
        return workoutRepository.save(workout);
    }

    // Get Workout for id
    public Workout getWorkout(int workoutId) {
        return workoutRepository.findById(workoutId).get();
    }
}
