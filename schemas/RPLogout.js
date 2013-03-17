var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPLogout = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPLogout = RPLogout;
