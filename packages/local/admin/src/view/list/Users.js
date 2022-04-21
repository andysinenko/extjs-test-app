/**
 * This view is an example list of people.
 */
Ext.define('Admin.view.list.Users', {
    extend:'Ext.panel.Panel',
    xtype: 'admin-user-list',
    layout:'vbox',
    title:'Admin package panel',

    controller: 'users',

    requires: [
        'Admin.store.list.Users',
        'Admin.store.list.Roles'
    ],

    store: {
        type: 'users'
    },

    items:[
        {
            xtype:'combobox',
            text:'userscombobox',
            alias: 'userscombobox',
            listeners: {
                change: 'onUsersComboBoxChange'
            },
            /*listeners: {
                select: function(combo, record, eOpts) {
                    var selectedValues = record
                    for(var i =0; i<selectedValues.length; i++) {
                        console.log('SELECTED: ' + selectedValues[i].data.username);
                    }
                }
            },*/
            multiSelect:true,
            padding:10,
            margin:10,
            fieldLabel: 'Users',
            store: Ext.create('Admin.store.list.Users'),
            displayField: 'username',
            valueField: 'username'

        },
        {
            xtype:'combobox',
            text:'groupscombobox',
            alias: 'groupscombobox',
            listeners: {
                change: 'onRolesComboBoxChange'
            },
            /*listeners: {
                select: function(combo, record, eOpts) {
                    var selectedValues = record
                    for(var i =0; i<selectedValues.length; i++) {
                        console.log('SELECTED: ' + selectedValues[i].data.groupname);
                    }
                }
            },*/
            multiSelect:true,
            padding:10,
            margin:10,
            fieldLabel: 'Roles',
            store: Ext.create('Admin.store.list.Roles'),
            displayField: 'groupname',
            valueField: 'groupname'

        }
    ]
});
