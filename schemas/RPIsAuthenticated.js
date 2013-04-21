var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPIsAuthenticated = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPIsAuthenticated = RPIsAuthenticated;
