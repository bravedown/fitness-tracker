module.exports = router => {
    router.post('/api/workouts', (req, res) => {
        console.log(req.body);
    });

}