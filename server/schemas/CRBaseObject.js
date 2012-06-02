var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CRBaseObject = new mongoose.Schema({ 
});

exports.CRBaseObject.plugin(commonPlugin);
