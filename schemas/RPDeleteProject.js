var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPDeleteProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,projectId: { type: String }
});

exports.RPDeleteProject = RPDeleteProject;
