export function UseWorkoutSession() {
  // this function starts a workout
  const beginWorkout = async () => {
    console.log('Workout started!');
  };

  return {
    beginWorkout,
  };
}
