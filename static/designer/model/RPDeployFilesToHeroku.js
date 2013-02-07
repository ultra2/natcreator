Ext.define('designer.model.RPDeployFilesToHeroku', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeployFilesToHeroku'
	
	,fields: [
	]
	,associations: [
		{ type: 'hasMany', name: 'files', associationKey: 'files', model: 'designer.model.ROFile', primaryKey: '_id' }
	]
	,validations: [
		{ field: 'files_id', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPDeployFilesToHeroku'));
