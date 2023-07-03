package ch.zhaw.sml.iwi.meng.leantodo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {

     @Query("SELECT e FROM Exercise e WHERE e.workout.id = ?1")
    public List<Exercise> findAllExercisesForWorkout(int id);

}
