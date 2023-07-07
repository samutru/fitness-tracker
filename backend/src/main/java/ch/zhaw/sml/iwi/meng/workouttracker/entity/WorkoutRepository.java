package ch.zhaw.sml.iwi.meng.workouttracker.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
    
    @Query("SELECT w FROM Workout w WHERE w.user.loginName = ?1")
    public List<Workout> findByUserName(String username);
    
}
