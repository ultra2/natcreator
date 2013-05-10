Ext.define('natcreator.model.QRProjectTutorial', { 
	extend: 'NAT.data.model.Query'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'content', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
