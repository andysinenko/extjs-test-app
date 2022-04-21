Ext.define('MyApp.view.main.GroupList', {
    extend: 'Ext.grid.Panel',
    xtype: 'maingrouplist',

    requires: [
       'MyApp.store.GroupStore',
       'Admin.view.list.Users'
    ],

    title: 'Groups',

    store: {
        type: 'groups'
    },

    columns: [
        { text: '<b>Group ID</b>',  dataIndex: 'id' },
        { text: '<b>Group Name</b>', dataIndex: 'groupname', flex: 1 },
        { text: '<b>Comment</b>', dataIndex: 'comment', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
