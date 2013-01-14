Ext.define('web.model.CRBaseObject', { 
	extend: 'NAT.data.Model',
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
