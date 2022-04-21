/**
 * This view is an example list of people.
 */
Ext.define('Admin.view.list.Roles', {
    extend:'Ext.panel.Panel',
    xtype: 'admin-groups-list',
    layout:'vbox',

    requires: [
        'Admin.store.list.Roles'
    ],

    store: {
        type: 'users'
    },

    items:[
        {
            xtype:'combobox',
            text:'userscombobox',
            multiSelect:true,
            padding:10,
            margin:10,
            fieldLabel: 'Groups',
            store: Ext.create('Admin.store.list.Roles'),
            displayField: 'groupname',
            valueField: 'groupname'
        }
    ]
});
