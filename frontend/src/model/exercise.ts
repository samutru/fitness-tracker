import { Workout } from "./workouts";
import { ExerciseInfo } from "./exerciseInfos";

export interface Exercise {
    id: number;
    reps: number;
    exerciseTime: number;
    workout: Workout;
    exerciseInfo: ExerciseInfo;
}