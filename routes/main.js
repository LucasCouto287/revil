/* main routes controller file */

let homeRoute = require("./home"),
    loginRoute = require('./login'),
    registerRoute = require('./register'),
    dashboardRoute = require('./dashboard');

module.exports = {
    "/": homeRoute,
    "/login": loginRoute,
    "/register": registerRoute,
    "/dashboard": dashboardRoute
};