var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var ROAccountInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});

exports.ROAccountInfo = ROAccountInfo;
