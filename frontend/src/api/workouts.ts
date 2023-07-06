import axios from 'axios';
import { API_ROOT } from '@/config/development';
import { Workout } from '@/model/workout';
import { Exercise } from '@/model/exercise';

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

export async function getWorkoutById(id: number): Promise<Workout> {
  const config = {
    withCredentials: true,
  };
  try {
    const response = await axios.get(API_ROOT + '/api/workouts/' + id, config);
    return response.data;
  } catch (error) {
    return <any>error;
  }
}

export async function createNewWorkout(workout: Workout): Promise<any> {
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

export async function addExercisesToWorkout(exercises: Exercise[], id: number | undefined): Promise<any> {
  const config = {
    withCredentials: true,
  };
  try {
    const response = await axios.post(API_ROOT + '/api/exercises/' + id, exercises, config);
    return response.data;
  } catch (error) {
    return <any>error;
  }
}

export async function getExercisesForWorkout(id: number): Promise<any> {
  const config = {
    withCredentials: true,
  };
  try {
    const response = await axios.get(API_ROOT + '/api/exercises?id=' + id, config);
    return response.data;
  } catch (error) {
    return <any>error;
  }
}
