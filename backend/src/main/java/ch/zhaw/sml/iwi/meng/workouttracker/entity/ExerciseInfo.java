package ch.zhaw.sml.iwi.meng.workouttracker.entity;

import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class ExerciseInfo {
    
    @Id
    private int id;

    private String name;
    private String description;
    private String category;
    private String youtubeLink;
}
