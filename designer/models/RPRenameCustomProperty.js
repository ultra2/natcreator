Ext.define('designer.model.RPRenameCustomProperty', { 
 	 extend: 'designer.model.RequestPost',
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
 