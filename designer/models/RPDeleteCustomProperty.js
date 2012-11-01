Ext.define('designer.model.RPDeleteCustomProperty', { 
	extend: 'designer.model.RequestPost',
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
