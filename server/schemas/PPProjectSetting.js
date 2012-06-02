var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PPGenerationStep = require('../schemas/PPGenerationStep.js').PPGenerationStep;

exports.PPProjectSetting = new mongoose.Schema({ 
});

exports.PPProjectSetting.plugin(commonPlugin);
