var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../modules/db.js');

var PPProjectSetting = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_modified: { type: Date }
		,_version: { type: Number }
		,_deleted: { type: Boolean }
		,generationTarget: { type: String, default: 'zip' }
		,githubRepository: { type: String }
		,codeGenerationWindowCloseOnSuccessful: { type: Boolean, default: 'true' }
		,includeTemplateFilesIntoGeneration: { type: Boolean, default: 'true' }
		,fontSize: { type: Number, default: '18' }
		,githubTemplateRepository: { type: String }
		,herokuApp: { type: String }
		,propertyFormShowCommonConfigs: { type: Boolean, default: 'true' }
		,propertyFormShowConfigsInAlphabeticalOrder: { type: Boolean, default: 'true' }
});

PPProjectSetting.pre("save", function (next) {
	this._id = this._id || db.getGuid();
	this._created = this._created || new Date();
	this._modified = new Date();
	this._version = this._version ? this._version + 1 : 0;
	this._deleted = this._deleted || false;
	next();
});

exports.PPProjectSetting = PPProjectSetting;
