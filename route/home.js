const express = require('express')
const router = express.Router();

router.get('/' , (req, res) => {
    res.send('Testing server');
});

module.exports = router;