Ext.define('web.model.CRBaseObject', { 
	extend: 'web.model.ESN.Model',
	alias: 'CRBaseObject'
	
	,fields: [
		{ name: '_id', type: 'string' }
		,{ name: '_type', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
