import axios from 'axios';
import { API_ROOT } from '@/config/development';
import { Workout } from '@/model/workouts';

export async function getAllWorkouts(): Promise<Workout[]> {
  const config = {
    withCredentials: true,
  };
  try {
    const response = await axios.get(API_ROOT + '/api/workouts', config);
    return response.data;
  } catch (error) {
    return <any>error;
  }
}

export async function createNewWorkout(workout: Workout) {
  const config = {
    withCredentials: true,
  };
  try {
    const response = await axios.post(API_ROOT + '/api/workouts', workout, config);
    return response.data;
  } catch (error) {
    return <any>error;
  }
}
