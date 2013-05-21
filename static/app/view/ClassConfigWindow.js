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
					xtype: 'natpanel',					
					bodyPadding: 10,					
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
							xtype: 'nattextfield',							
							dataField: 'name',							
							dataStore: 'store',							
							fieldLabel: 'Name&nbsp;'							
						},						
						{
							xtype: 'natstringarrayedit',							
							dataField: 'types',							
							dataStore: 'store',							
							fieldLabel: 'Types',							
							height: 150,							
							itemId: 'saeTypes'							
						},						
						{
							xtype: 'natstringarrayfield',							
							dataField: 'values',							
							dataStore: 'store',							
							fieldLabel: 'Values',							
							height: 50,							
							itemId: 'memoValues'							
						},						
						{
							xtype: 'natstringarrayfield',							
							dataField: 'params',							
							dataStore: 'store',							
							fieldLabel: 'Params',							
							height: 50,							
							itemId: 'memoParams'							
						},						
						{
							xtype: 'natfunctionfield',							
							dataField: 'getValues',							
							dataStore: 'store',							
							fieldLabel: 'Get Values',							
							functionName: 'getValues',							
							itemId: 'fnGetValues'							
						},						
						{
							xtype: 'natfunctionfield',							
							dataField: 'getValue',							
							dataStore: 'store',							
							fieldLabel: 'Get Value',							
							functionName: 'getValue',							
							functionParams: ['value'],							
							itemId: 'fnGetValue'							
						},						
						{
							xtype: 'natcombobox',							
							dataField: 'refType',							
							dataStore: 'store',							
							editable: false,							
							fieldLabel: 'Class',							
							itemId: 'cbRefType'							
						},						
						{
							xtype: 'natfunctionfield',							
							dataField: 'isAccepted',							
							dataStore: 'store',							
							fieldLabel: 'Is Accepted',							
							functionName: 'isAccepted',							
							functionParams: ['value'],							
							itemId: 'fnIsAccepted'							
						},						
						{
							xtype: 'nattextfield',							
							dataField: 'defaultValue',							
							dataStore: 'store',							
							fieldLabel: 'Default Value',							
							itemId: 'txtDefaultValue'							
						},						
						{
							xtype: 'natcombobox',							
							comboData: [true,false],							
							dataField: 'defaultValue',							
							dataStore: 'store',							
							editable: false,							
							fieldLabel: 'Default Value',							
							itemId: 'boolDefaultValue'							
						},						
						{
							xtype: 'natdatefield',							
							dataField: 'defaultValue',							
							dataStore: 'store',							
							fieldLabel: 'Default Value',							
							itemId: 'dateDefaultValue'							
						},						
						{
							xtype: 'natnumberfield',							
							anchor: '70%',							
							dataField: 'defaultValue',							
							dataStore: 'store',							
							fieldLabel: 'Default Value',							
							hideTrigger: true,							
							itemId: 'intDefaultValue'							
						},						
						{
							xtype: 'natstringarrayfield',							
							dataField: 'defaultValue',							
							dataStore: 'store',							
							fieldLabel: 'Default Value',							
							itemId: 'saDefaultValue'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'dependency',							
							dataStore: 'store',							
							fieldLabel: 'Dependency&nbsp;',							
							itemId: 'chDependency'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'hidden',							
							dataStore: 'store',							
							fieldLabel: 'Hidden&nbsp;',							
							itemId: 'chHidden'							
						},						
						{
							xtype: 'natcheckboxfield',							
							dataField: 'common',							
							dataStore: 'store',							
							fieldLabel: 'Common&nbsp;',							
							itemId: 'chCommon'							
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
