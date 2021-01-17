const db = require('../models');
module.exports = router => {
    router.put('/api/workouts/:id', async (req, res) => {
        const updatedWorkout = await db.Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: {
                    exercises: req.body
                }
            }, {
                new: true
            }
        );
        res.json(updatedWorkout);
    });
}