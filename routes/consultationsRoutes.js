// var express = require('express');
// var router = express.Router();
var consultationsController = require('../controllers/consultationsController.js');

//On expose une fonction qui prend en parametre 
//le routeur sur lequel on cree ces routes 
module.exports = 

/**
 * 
 * @param {*} router router sur lequel on defini ces routes
 */
function(router){
/*
 * GET
 */
router.get('/consultations', consultationsController.list);

/*
 * GET
 */
router.get('/consultations/:id', consultationsController.show);

/*
 * POST
 */
router.post('/consultations', consultationsController.create);

/*
 * PUT
 */
router.put('/consultations/:id', consultationsController.update);

/*
 * DELETE
 */
router.delete('/consultations:id', consultationsController.remove);

}


// module.exports = router;
