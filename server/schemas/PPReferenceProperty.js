var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPReferenceProperty = new mongoose.Schema({ 
});

exports.PPReferenceProperty.plugin(commonPlugin);
