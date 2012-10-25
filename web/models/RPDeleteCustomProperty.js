Ext.define('undefinedRPDeleteCustomProperty', { 
	extend: 'undefinedRequestPost',
	alias: 'RPDeleteCustomProperty'
	
	,fields: [
		{ name: 'customPropertyId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'customPropertyId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
