// var express = require('express');
// var router = express.Router();
var doctorsController = require('../controllers/doctorsController.js');

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
router.get('/doctors', doctorsController.list);

/*
 * GET
 */
router.get('/doctors/:id', doctorsController.show);

/*
 * POST
 */
router.post('/doctors', doctorsController.create);

/*
 * PUT
 */
router.put('/doctors/:id', doctorsController.update);

/*
 * DELETE
 */
router.delete('/doctors:id', doctorsController.remove);

}


// module.exports = router;
