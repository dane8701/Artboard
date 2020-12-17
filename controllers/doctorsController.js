var doctorsModel = require('../models/doctorsModel.js');

/**
 * doctorsController.js
 *
 * @description :: Server-side logic for managing doctors.
 */
module.exports = {

    /**
     * doctorsController.list()
     */
    list: function (req, res) {
        doctorsModel.find(function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors.',
                    error: err
                });
            }
            return res.json(doctors);
        });
    },

    /**
     * doctorsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        doctorsModel.findOne({_id: id}, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors.',
                    error: err
                });
            }
            if (!doctors) {
                return res.status(404).json({
                    message: 'No such doctors'
                });
            }
            return res.json(doctors);
        });
    },

    /**
     * doctorsController.create()
     */
    create: function (req, res) {
        var doctors = new doctorsModel({
            username: req.body.username,
            password: req.body.password,
            specialty: req.body.specialty

        });

        doctors.save(function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating doctors',
                    error: err
                });
            }
            return res.status(201).json(doctors) ;
        });
    },

    /**
     * doctorsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        doctorsModel.findOne({_id: id}, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting doctors',
                    error: err
                });
            }
            if (!doctors) {
                return res.status(404).json({
                    message: 'No such doctors'
                });
            }

            doctors.username = req.body.username ? req.body.username : doctors.username;
			doctors.password = req.body.password ? req.body.password : doctors.password;
			
            doctors.save(function (err, doctors) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating doctors.',
                        error: err
                    });
                }

                return res.json(doctors);
            });
        });
    },

    /**
     * doctorsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        doctorsModel.findByIdAndRemove(id, function (err, doctors) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the doctors.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
