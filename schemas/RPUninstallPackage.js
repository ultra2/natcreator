var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var RPUninstallPackage = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,packageId: { type: String }
});

exports.RPUninstallPackage = RPUninstallPackage;
