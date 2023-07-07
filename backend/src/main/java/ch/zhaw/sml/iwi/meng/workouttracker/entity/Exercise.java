package ch.zhaw.sml.iwi.meng.workouttracker.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int reps;
    private int exerciseTime; 

    @ManyToOne
    private Workout workout;

    @ManyToOne
    private ExerciseInfo exerciseInfo;   

}
