var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPCreateProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,description: { type: String }
		,guide: { type: String }
		,connectionUrl: { type: String }
		,packages: { type: mongoose.Schema.Types.Mixed }
		,type: { type: String }
		,accessibility: { type: String }
		,releaseUrl: { type: String }
});

exports.RPCreateProject = RPCreateProject;
