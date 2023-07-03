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

    public List<Exercise> listAllExercises() {
        return exerciseRepository.findAll();
    }
}