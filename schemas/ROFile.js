var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var ROFile = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,content: { type: String }
});

exports.ROFile = ROFile;
