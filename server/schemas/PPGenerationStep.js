var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PPGenerationStep = new mongoose.Schema({ 
});

exports.PPGenerationStep.plugin(commonPlugin);
