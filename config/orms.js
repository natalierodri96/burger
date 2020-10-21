const connection = require("./connection")
const { connect } = require("./connection")

var orm = {
    updateAll: function() {
        connection.query("UPDATE FROM burgers WHERE id = ?", [id], function(err,res){
            
            if (err) {
                throw err;
            }
            callback(res);
        });
    };
    
    insertOne: function() {
        connection.query("INSERT ONE FROM burgers WHERE id = ?", [id], function(err,res){
            
            if (err) {
                throw err;
            }
            callback(res);
        });
    };

    selectOne: function() {
        connection.query("SELECT ONE FROM burgers WHERE id = ?", [id], function(err,res){
            
            if (err) {
                throw err;
            }
            callback(res);
        });
    };
}


module.exports = orm;