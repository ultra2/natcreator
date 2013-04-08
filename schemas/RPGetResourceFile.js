var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPGetResourceFile = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,url: { type: String }
});

exports.RPGetResourceFile = RPGetResourceFile;
