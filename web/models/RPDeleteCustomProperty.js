Ext.define('web.model.RPDeleteCustomProperty', { 
	extend: 'web.model.RequestPost',
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
