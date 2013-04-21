var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var RPInstallPackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,packageId: { type: String }
});

exports.RPInstallPackage = RPInstallPackage;
