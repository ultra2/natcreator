Ext.define('natcreator.model.QRProjectTutorial', { 
	extend: 'NAT.data.QueryModel'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'content', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
