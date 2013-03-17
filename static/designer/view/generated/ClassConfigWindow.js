Ext.define('designer.view.generated.ClassConfigWindow', { 
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
					defaults: {					
						anchor: '100%',					
						labelWidth: 120					
					},					
					itemId: 'ed',					
					items: [
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Name',							
							itemId: 'txtName',							
							propertyPath: 'name'							
						},						
						{
							xtype: 'natstringarrayedit',							
							fieldLabel: 'Types',							
							height: 150,							
							itemId: 'saeTypes',							
							itemRenderer: function(value)
							{							
								return viewport.projectEditor.getClassConfigTypeName(value);							
							},							
							propertyPath: 'types'							
						},						
						{
							xtype: 'natstringarrayfield',							
							fieldLabel: 'Values',							
							height: 50,							
							itemId: 'memoValues',							
							propertyPath: 'values'							
						},						
						{
							xtype: 'natstringarrayfield',							
							fieldLabel: 'Params',							
							height: 50,							
							itemId: 'memoParams',							
							propertyPath: 'params'							
						},						
						{
							xtype: 'natstringarrayfield',							
							fieldLabel: 'Not Accepted',							
							height: 50,							
							itemId: 'memoNotAccepted',							
							propertyPath: 'notAccepted'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Default Value',							
							itemId: 'txtDefaultValue',							
							propertyPath: 'defaultValue'							
						},						
						{
							xtype: 'natcombobox',							
							comboData: [true,false],							
							editable: false,							
							fieldLabel: 'Default Value',							
							itemId: 'boolDefaultValue',							
							propertyPath: 'defaultValue'							
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
							xtype: 'natstringarrayfield',							
							fieldLabel: 'Default Value',							
							itemId: 'saDefaultValue',							
							propertyPath: 'defaultValue'							
						},						
						{
							xtype: 'natcheckboxfield',							
							fieldLabel: 'Dependency',							
							itemId: 'chDependency',							
							propertyPath: 'dependency'							
						},						
						{
							xtype: 'natcheckboxfield',							
							fieldLabel: 'Hidden',							
							itemId: 'chHidden',							
							propertyPath: 'hidden'							
						},						
						{
							xtype: 'natcheckboxfield',							
							fieldLabel: 'Common',							
							itemId: 'chCommon',							
							propertyPath: 'common'							
						},						
						{
							xtype: 'natfunctionfield',							
							fieldLabel: 'Get Values',							
							itemId: 'fnReftoGetValues',							
							propertyPath: 'reftoGetValues'							
						},						
						{
							xtype: 'natfunctionfield',							
							fieldLabel: 'Get Value',							
							itemId: 'fnReftoGetValue',							
							propertyPath: 'reftoGetValue'							
						}						
					],					
					layout: {
						type: 'anchor'						
					}					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
