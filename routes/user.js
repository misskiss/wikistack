const express = require('express');
const router = express.Router();





router.get('/', (req, res, next) => {
    res.send('got to GET /user/');
});


module.exports = router;