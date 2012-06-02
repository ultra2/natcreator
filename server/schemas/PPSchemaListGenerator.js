var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPSchemaListGenerator = new mongoose.Schema({ 
});

exports.PPSchemaListGenerator.plugin(commonPlugin);
