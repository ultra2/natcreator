var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPRenameCustomProperty = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,propertyId: { type: String }
		,newName: { type: String }
});

exports.RPRenameCustomProperty.plugin(commonPlugin);
