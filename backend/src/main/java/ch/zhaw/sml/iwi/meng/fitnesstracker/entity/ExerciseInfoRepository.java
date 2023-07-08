package ch.zhaw.sml.iwi.meng.fitnesstracker.entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseInfoRepository extends JpaRepository<ExerciseInfo,Integer>  {
    
}
