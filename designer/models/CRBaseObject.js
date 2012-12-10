Ext.define('designer.model.CRBaseObject', { 
	extend: 'designer.model.ESN.Model',
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
