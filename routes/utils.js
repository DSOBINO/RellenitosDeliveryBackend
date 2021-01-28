
const { Router }     = require('express');
const { dataLoader } = require('../controllers/utils'); 

const router         = Router();
router.post('/loader', dataLoader);
module.exports = router;
