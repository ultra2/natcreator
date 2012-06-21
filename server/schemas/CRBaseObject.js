var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRBaseObject = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.CRBaseObject.plugin(commonPlugin);
