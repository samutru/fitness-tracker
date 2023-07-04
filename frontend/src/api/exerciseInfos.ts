import axios from 'axios';
import { API_ROOT } from "@/config/development";
import { ExerciseInfo } from '@/model/exerciseInfos';

export async function getAllExerciseInfos(): Promise<ExerciseInfo[]>   { 
    const config = {        
        withCredentials: true
    }
    try {
        const response = await axios.get(API_ROOT + '/api/exerciseInfos', config);
        return response.data;
    } catch (error) {
        return <any>error;   
    }
}
