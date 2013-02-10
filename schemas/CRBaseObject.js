var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');

exports.CRBaseObject = new Schema({ 
});
exports.CRBaseObject.plugin(commonPlugin);
