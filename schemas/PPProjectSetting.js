var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    db = require('../modules/db.js');

var PPProjectSetting = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
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
	this.created = this.created || new Date();
	this.modified = new Date();
	this.version = this.version ? this.version + 1 : 0;
	this.deleted = this.deleted || false;
	next();
});

exports.PPProjectSetting = PPProjectSetting;
