'use strict';

var response = require('./res');
var connection = require('./conn');

exports.space = function (req, res) {
    connection.query('SELECT * FROM space', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function (req, res) {

    var space_id = req.params.space_id;

    connection.query('SELECT * FROM space where id = ?',
        [space_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

exports.createUsers = function (req, res) {

    var space_name = req.body.space_name;
    var space_address = req.body.space_address;
    var space_description = req.body.space_description;
    var space_hours = req.body.space_hours;
    var space_photo = req.body.space_photo;

    connection.query('INSERT INTO space (space_name, space_address, space_description, space_hours, space_photo) values (?,?,?,?,?)',
        [space_name, space_address, space_description, space_hours, space_photo],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan CoWorkingSpace!", res)
            }
        });
};

exports.updateUsers = function (req, res) {

    var space_id = req.body.space_id;
    var space_name = req.body.space_name;
    var space_address = req.body.space_address;
    var space_description = req.body.space_description;
    var space_hours = req.body.space_hours;
    var space_photo = req.body.space_photo;

    connection.query('UPDATE space SET space_name = ?, space_address = ?, space_description = ?,space_hours = ?,space_photo = ?, WHERE id = ?',
        [space_name, space_address, space_description, space_hours, space_photo],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah CoWorkingSpace!", res)
            }
        });
};

exports.deleteUsers = function (req, res) {

    var space_id = req.body.space_id;

    connection.query('DELETE FROM space WHERE id = ?',
        [space_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus CoWorkingSpace!", res)
            }
        });
};