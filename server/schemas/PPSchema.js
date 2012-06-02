var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PPDataProperty = require('../schemas/PPDataProperty.js').PPDataProperty;

exports.PPSchema = new mongoose.Schema({ 
});

exports.PPSchema.plugin(commonPlugin);
