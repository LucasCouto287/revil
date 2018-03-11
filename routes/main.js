/* main routes controller file */

let homeRoute = require("./home"),
    loginRoute = require('./login');

module.exports = {
    "/": homeRoute,
    "/login": loginRoute
};