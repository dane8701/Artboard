//Ce fichier a pour but d impoter 
// toutes les routes que nous avons cree

module.exports = 
/**
 * 
 * @param {*} router router sur lequel sera greffe les routes definies
 */
function (router) {
    (require('./usersRoutes'))(router);
    (require('./doctorsRoutes'))(router);
    (require('./consultationsRoutes'))(router);
}