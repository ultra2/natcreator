Ext.define('natcreator.view.InstallPackageWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.InstallPackageWindow',
	
	height: 500,
	layout: {
		type: 'fit'		
	},
	modal: true,
	title: 'Install Package',
	width: 1000,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					dock: 'bottom',					
					height: 30,					
					layout: {
						type: 'hbox',						
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnInstall',							
							minWidth: 100,							
							text: 'Install',							
							ui: 'green'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natgrid',					
					dataStore: 'stAvailablePackages',					
					itemId: 'gridAvailablePackages',					
					columns: [
						{
							xtype: 'gridcolumn',							
							dataIndex: 'name',							
							text: 'Name',							
							width: 200							
						},						
						{
							xtype: 'gridcolumn',							
							dataIndex: 'description',							
							text: 'Description',							
							width: 400							
						},						
						{
							xtype: 'numbercolumn',							
							dataIndex: 'version',							
							text: 'Version',							
							width: 100							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natquerystore',					
					dataModel: 'natcreator.model.QRAvailablePackage',					
					itemId: 'stAvailablePackages'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
