package ch.zhaw.sml.iwi.meng.workouttracker.boundary;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.sml.iwi.meng.workouttracker.controller.ExerciseInfoController;
import ch.zhaw.sml.iwi.meng.workouttracker.entity.ExerciseInfo;

@RestController
@CrossOrigin
public class ExerciseInfoEndpoint {
    
    @Autowired
    ExerciseInfoController exerciseInfoController;

    @GetMapping(path = "/api/exerciseInfos")
    @PreAuthorize("isAuthenticated() AND hasRole('USER')")
    public List<ExerciseInfo> getExercises(Principal principal) {
        return exerciseInfoController.listAllExerciseInfos();
    }
}
