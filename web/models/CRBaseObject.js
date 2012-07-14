Ext.define('web.model.CRBaseObject', { 
	alias: 'CRBaseObject'
	extend: 'natjs.data.NATModel',
	
	,fields: [
		{ name: '_id', type: 'string', debug: true }
		,{ name: '_type', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
