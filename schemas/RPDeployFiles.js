var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPDeployFiles = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPDeployFiles = RPDeployFiles;
