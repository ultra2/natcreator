Ext.define('natcreator.view.ClassConfigWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ClassConfigWindow',
	
	height: 500,
	layout: {
		type: 'fit'		
	},
	modal: true,
	resizable: false,
	title: 'Edit Config',
	width: 446,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
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
							itemId: 'btnOk',							
							minWidth: 100,							
							text: 'Ok',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							minWidth: 100,							
							text: 'Cancel',							
							ui: 'gray'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					dataStore: 'store',					
					defaults: {					
						anchor: '100%',					
						labelWidth: 120					
					},					
					itemId: 'ed',					
					layout: {
						type: 'anchor'						
					},					
					items: [
						{
							xtype: 'natcombobox',							
							comboData: [true,false],							
							editable: false,							
							fieldLabel: 'Default Value',							
							itemId: 'boolDefaultValue'							
						},						
						{
							xtype: 'datefield',							
							fieldLabel: 'Default Value',							
							itemId: 'dateDefaultValue'							
						},						
						{
							xtype: 'numberfield',							
							anchor: '70%',							
							fieldLabel: 'Default Value',							
							hideTrigger: true,							
							itemId: 'intDefaultValue'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'name',							
							dataStore: 'store',							
							fieldLabel: 'Name&nbsp;'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'dependency',							
							dataStore: 'store',							
							fieldLabel: 'Dependency&nbsp;'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'hidden',							
							dataStore: 'store',							
							fieldLabel: 'Hidden&nbsp;'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'common',							
							dataStore: 'store',							
							fieldLabel: 'Common&nbsp;'							
						}						
					]					
				}				
			],			
			stores: [
				{
					xtype: 'natclientstore',					
					dataModel: 'CDClassConfig',					
					itemId: 'store'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
