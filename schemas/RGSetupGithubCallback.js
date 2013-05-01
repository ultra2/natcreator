var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RGSetupGithubCallback = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,code: { type: String }
});

exports.RGSetupGithubCallback = RGSetupGithubCallback;
