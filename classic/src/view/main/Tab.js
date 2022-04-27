Ext.define('MyApp.view.main.Tab',{
	extend: 'Ext.panel.Panel',
	xtype: 'tabtpl',
	requires: [
       'MyApp.view.main.Toolbar2'
    ],

	store: {
		type: 'groups'
	},

	initComponent: function() {

		this.toolbar = Ext.create('MyApp.view.main.Toolbar2',{
			height:50,
			itemId: 'orders-tab-tbar'
		});

		this.groupList = Ext.create('MyApp.view.main.GroupList');

		this.items = [this.groupList];

		Ext.apply(this, {
			layout : 'card',
			border: false,
			activeItem : 0,
			tbar: this.toolbar
		});

		this.callParent(arguments);
	}

/*	showToolbar: function() {
		this.toolbar.showToolbar();
	},

	onRender: function() {
		this.showToolbar();
	}*/

 });
