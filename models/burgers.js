//variables
var orm = require("../config/orm.js");

var burger = {
//functions

    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(burger_name, cb) {
        orm.insertOne("burgers", ["burger_name"], [burgerName],function(res) {
            cb(res);   
        });
    },
    update: function(objoVals, conditon, cb) {
        orm.updateOne("burgers", objoVals, conditon, function (res) {
            cb(res);
        });
    }
};
module.exports = burger;