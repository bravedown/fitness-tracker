const path = require('path');
const db = require('../models');
module.exports = router => {
    // ---- HTML  ----
    router.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    router.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
    // ---- /HTML ----

    // ---- API  ----
    router.get('/api/workouts', async (req, res) => {
        const workouts = await db.Workout.find();
        res.json(workouts);
    });

    router.get('/api/workouts/range', async (req, res) => {
        const workouts = await db.Workout.find();
        res.json(workouts);
    });
    // ---- /API ----
}