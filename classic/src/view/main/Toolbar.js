/**
 * ToolBar for Order Tab
 */

Ext.define('MyApp.view.main.Toolbar',{
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'toolbar-metadata',

	initComponent: function() {
		var me = this;
		Ext.apply(this, {
			cls: 'drd-toolbar2',
			border: false,
			height: 40,
			items: [
				{
					xtype: 'tbitem',
					tpl: Ext.create('Ext.XTemplate',{ id: 1, groupname: 'admin', comment: 'comment#1' },
						'<table class="detail" border="0" cellspacing="0" cellpadding="0">',
							'<tr class="labels">',
								'<td>field1</td>',
								'<td>field2</td>',
								'<td>field3</td>',
							'</tr>',
							'<tr class="values">',
								'<td>{field1}</td>',
								'<td>{field2}</td>',
								'<td>{field3}</td>',
							'</tr>',
						'</table>'
					)
				}
		   ]
		});
		me.showToolbar();
		this.callParent(arguments);
	},

	/*onReady : function() {
		this.showToolbar();
	},*/

	showToolbar: function() {
		var me = this;
		Ext.Ajax.request({
			url: 'http://localhost:8080/testuri/1',
			method: 'GET',
			useDefaultXhrHeader : false,

			success: function(response, options) {
				var data = Ext.decode(response.responseText);
				me.handleResponse(data);
			},

			failure: function(response, options) {
				Ext.Msg.alert('!!!!!!!!!!!!server-side failure with status code ' + response.status);
			}
		});
	},

	handleResponse: function(data) {
		var me = this;
		console.dir("data: " + data.field1);
		console.dir("data: " + data.field2);
		console.dir("data: " + data.field3);
		var summaryItem = me.down('tbitem');
		summaryItem.setVisible(true);
		summaryItem.update(data);
	}

});
