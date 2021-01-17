const db = require('../models');
module.exports = router => {
    router.post('/api/workouts', async (req, res) => {
        const newWorkout = await db.Workout.create(req.body);
        res.json(newWorkout);
    });

}