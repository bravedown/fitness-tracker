const path = require('path');
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
    
    // ---- /API ----
}