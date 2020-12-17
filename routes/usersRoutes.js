// var express = require('express');
// var router = express.Router();
var usersController = require('../controllers/usersController.js');

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
router.get('/users', usersController.list);

/*
 * GET
 */
router.get('/users/:id', usersController.show);

/*
 * POST
 */
router.post('/users', usersController.create);

/*
 * PUT
 */
router.put('/users/:id', usersController.update);

/*
 * DELETE
 */
router.delete('/users:id', usersController.remove);

}


// module.exports = router;
