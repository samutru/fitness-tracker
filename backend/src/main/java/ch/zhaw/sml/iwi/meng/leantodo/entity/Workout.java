package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Workout {
    @Id
    private int workoutId;

    @Temporal(TemporalType.DATE)
    private Date dateOfWorkout;
    private int totalTime; 
    private double calories;


    @ManyToOne
    private User user;
}
