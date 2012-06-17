Ext.define('web.model.RPRenameCustomProperty', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RPRenameCustomProperty'
 	 
 	 ,fields: [
 	 	 { name: 'propertyId', type: 'string' }
 	 	 ,{ name: 'newName', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'propertyId', type: 'presence' }
 	 	 ,{ field: 'newName', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 