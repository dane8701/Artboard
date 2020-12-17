var consultationsModel = require('../models/consultationsModel.js');

/**
 * consultationsController.js
 *
 * @description :: Server-side logic for managing consultations.
 */
module.exports = {

    /**
     * consultationsController.list()
     */
    list: function (req, res) {
        consultationsModel.find(function (err, consultations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consultations.',
                    error: err
                });
            }
            return res.json(consultations);
        });
    },

    /**
     * consultationsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        consultationsModel.findOne({ _id: id }, function (err, consultations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consultations.',
                    error: err
                });
            }
            if (!consultations) {
                return res.status(404).json({
                    message: 'No such consultations'
                });
            }
            return res.json(consultations);
        });
    },

    /**
     * consultationsController.create()
     */
    create: function (req, res) {
        var consultations = new consultationsModel({
            namePatient: req.body.namePatient,
            surnamePatient: req.body.surnamePatient,
            birthday: req.body.birthday,
            gender: req.body.gender,
            profession: req.body.profession,
            residence: req.body.residence,
            age: req.body.age,
            weight: req.body.weight

        });

        consultations.save(function (err, consultations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating consultations',
                    error: err
                });
            }
            return res.status(201).json(consultations);
        });
    },

    /**
     * consultationsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        consultationsModel.findOne({ _id: id }, function (err, consultations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting consultations',
                    error: err
                });
            }
            if (!consultations) {
                return res.status(404).json({
                    message: 'No such consultations'
                });
            }

            consultations.username = req.body.username ? req.body.username : consultations.username;
            consultations.password = req.body.password ? req.body.password : consultations.password;

            consultations.save(function (err, consultations) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating consultations.',
                        error: err
                    });
                }

                return res.json(consultations);
            });
        });
    },

    /**
     * consultationsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        consultationsModel.findByIdAndRemove(id, function (err, consultations) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the consultations.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
