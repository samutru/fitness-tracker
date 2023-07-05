import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { Exercise } from '@/model/exercise';

export async function getExercisesForVisualization(exerciseName:string): Promise<Exercise[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/visualization/'+exerciseName, config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}
