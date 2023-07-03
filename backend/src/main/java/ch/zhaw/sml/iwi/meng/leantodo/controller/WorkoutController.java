package ch.zhaw.sml.iwi.meng.leantodo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.leantodo.entity.Workout;
import ch.zhaw.sml.iwi.meng.leantodo.entity.WorkoutRepository;

@Component
public class WorkoutController {

    @Autowired
    WorkoutRepository workoutRepository;

    public List<Workout> listAllWorkouts(String loginName) {
        return workoutRepository.findByUserName(loginName);
    }
    
}
