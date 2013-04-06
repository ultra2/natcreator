var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RGAuthGoogleCallback = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RGAuthGoogleCallback = RGAuthGoogleCallback;
