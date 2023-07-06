import { Workout } from "./workout";
import { ExerciseInfo } from "./exerciseInfos";

export interface Exercise {
    id?: number;
    reps?: number;
    exerciseTime?: number;
    workout?: Workout;
    exerciseInfo?: ExerciseInfo;
}