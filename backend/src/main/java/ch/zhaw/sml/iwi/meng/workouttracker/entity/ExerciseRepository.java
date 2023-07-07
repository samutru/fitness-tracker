package ch.zhaw.sml.iwi.meng.workouttracker.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Integer> {

     @Query("SELECT e FROM Exercise e WHERE e.workout.id = ?1")
    public List<Exercise> findAllExercisesForWorkout(int id);

    @Query("SELECT e FROM Exercise e " +
            "JOIN e.workout w " +
            "JOIN w.user u " +
            "WHERE u.loginName = :username AND e.exerciseInfo.name = :exerciseName")
    List<Exercise> findExercisesByUserAndType(@Param("username") String username, @Param("exerciseName") String exerciseName);

}
