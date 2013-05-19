var async = require('async'),
	mongoose = require('mongoose'),
	uuid = require('node-uuid');

global.Models = [];
global.schemas = [];
require("fs").readdirSync(__dirname + "/../../schemas").forEach(function(file) {
	var schemaName = file.substr(0, file.length-3);
	var schema = require('../../schemas/' + file)[schemaName];
	global.schemas.push(schema);
	global.Models.push({name: schemaName, schema: schema, collection: schema.collection});
});

//require("fs").readdirSync(__dirname + "/../../schemaOverrides").forEach(function(file) {
//	require("../schemaOverrides/" + file);
//});

exports.getGuid = function getGuid() {
	//return String(mongoose.mongo.BSONPure.ObjectID.createPk());
	return uuid.v1();
};

exports.registerModels = function(connection) {
    connection.natCollections = [];
    for (var i = 0; connection.natModels.length > i; i++) {
        var m = connection.natModels[i];
        connection.model(m.name, m.schema, m.collection);
        connection.natCollections.push(m.collection);
    }
};

exports.connect = function(url) {
    var connection = mongoose.createConnection(url);
    connection.natModels = global.Models;
    exports.registerModels(connection);
    return connection;
};
