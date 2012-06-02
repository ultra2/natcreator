var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPGenerator = new mongoose.Schema({ 
});

exports.PPGenerator.plugin(commonPlugin);
