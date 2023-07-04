INSERT INTO EXERCISE_INFO (id, name, description, category, youtube_Link) VALUES 
(1, 'Push-ups', 'Keep your body straight and lower it by bending your arms. Push up until your arms are straight.', 'Upper Body', 'https://youtube.com/v/push-ups'),
(2, 'Squats', 'Stand straight with feet hip-width apart, and bend your knees as if you were going to sit.', 'Legs', 'https://youtube.com/v/squats'),
(3, 'Bicep Curls', 'Hold a weight in each hand and bend your elbows to lift the weights towards your shoulders.', 'Arms', 'https://youtube.com/v/bicep-curls'),
(4, 'Tricep Dips', 'Lower your body by bending your elbows until your upper arms and forearms create a 90 degree angle.', 'Arms', 'https://youtube.com/v/tricep-dips'),
(5, 'Lunges', 'Step forward with one foot and lower your body until your front knee is at a 90 degree angle.', 'Legs', 'https://youtube.com/v/lunges'),
(6, 'Planks', 'Hold your body up with your forearms and toes, keeping your body straight and holding for as long as possible.', 'Abs', 'https://youtube.com/v/planks'),
(7, 'Crunches', 'Lay on your back, bend your knees and lift your shoulders off the floor.', 'Abs', 'https://youtube.com/v/crunches'),
(8, 'Pull-ups', 'Hold onto a bar and pull your body weight up towards the bar.', 'Upper Body', 'https://youtube.com/v/pull-ups'),
(9, 'Overhead Press', 'Stand upright, lift a barbell or dumbbells from your shoulders until your arms are fully extended above you.', 'Upper Body', 'https://youtube.com/v/overhead-press'),
(10, 'Deadlifts', 'Stand with your feet hip-width apart, bend at the waist, keep your back straight, and lift a barbell off the ground.', 'Legs', 'https://youtube.com/v/deadlifts'),
(11, 'Leg Press', 'Sit in a leg press machine, place your feet on the platform and push the weight away from you using your legs.', 'Legs', 'https://youtube.com/v/leg-press'),
(12, 'Bench Press', 'Lay on a bench, lower a barbell to your chest, and then press it back up until your arms are straight.', 'Upper Body', 'https://youtube.com/v/bench-press');


INSERT INTO WORKOUT (id, date_Of_Workout, total_Time, calories) VALUES
(1, '2023-07-01', 60, 250.0),
(2, '2023-07-02', 45, 200.0);

INSERT INTO EXERCISE (id, reps, exercise_Time, Workout_Id, exercise_Info_Id) VALUES
(1, 10, 5, 1, 1),
(2, 15, 10, 1, 2),
(3, 10, 5, 2, 1);
