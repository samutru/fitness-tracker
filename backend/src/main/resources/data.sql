INSERT INTO EXERCISE_INFO (id, name, description, category, youtube_Link) VALUES 
(1, 'Push-ups', 'Keep your body straight and lower it by bending your arms. Push up until your arms are straight.', 'Strength', 'https://youtube.com/v/push-ups'),
(2, 'Squats', 'Stand straight with feet hip-width apart, and bend your knees as if you were going to sit.', 'Strength', 'https://youtube.com/v/squats');

INSERT INTO WORKOUT (workout_Id, date_Of_Workout, total_Time, calories) VALUES
(1, '2023-07-01', 60, 250.0),
(2, '2023-07-02', 45, 200.0);

INSERT INTO EXERCISE (exercise_Id, reps, exercise_Time, Workout_Id, exercise_Info_Id) VALUES
(1, 10, 5, 1, 1),
(2, 15, 10, 1, 2),
(3, 10, 5, 2, 1);
