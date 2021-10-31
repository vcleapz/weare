'use strict';

module.exports = function (app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/space')
        .get(todoList.space);

    app.route('/space/:space_id')
        .get(todoList.findUsers);

    app.route('/space/createUsers')
        .post(todoList.createUsers);

    app.route('/space/updateUsers')
        .put(todoList.updateUsers);

    app.route('/space/deleteUsers')
        .delete(todoList.deleteUsers);

    app.route('/space/forgeUsers')
        .delete(todoList.forgeUsers);
};
