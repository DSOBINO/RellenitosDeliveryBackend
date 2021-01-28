const { Router }     = require('express');
const { desplegarCG, insertarCG, actualizarCG, eliminarCG } = require('../controllers/utils-zurich'); 

const router         = Router();
router.post('/desplegarCG',     desplegarCG);
router.post('/insertarCG',      insertarCG);
router.post('/actualizarCG',    actualizarCG);
router.post('/eliminarCG',      eliminarCG);
module.exports = router;
