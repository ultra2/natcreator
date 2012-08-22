Ext.define('undefinedCRBaseObject', { 
	extend: 'natjs.data.NATModel',
	alias: 'CRBaseObject'
	
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
