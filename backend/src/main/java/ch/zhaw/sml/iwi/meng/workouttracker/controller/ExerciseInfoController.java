package ch.zhaw.sml.iwi.meng.workouttracker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.zhaw.sml.iwi.meng.workouttracker.entity.ExerciseInfo;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.ExerciseInfoRepository;

@Component
public class ExerciseInfoController {

    @Autowired
    private ExerciseInfoRepository exerciseInfoRepository;

     public List<ExerciseInfo> listAllExerciseInfos() {
        return exerciseInfoRepository.findAll();
    }
    
}
