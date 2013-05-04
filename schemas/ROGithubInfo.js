var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var ROGithubInfo = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,isAuthorized: { type: Boolean }
		,username: { type: String }
});

exports.ROGithubInfo = ROGithubInfo;
