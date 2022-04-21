Ext.define('MyApp.store.GroupStore', {
    extend: 'Ext.data.Store',
    alias: 'store.groups',

    fields: [
        'id', 'groupname', 'comment'
    ],

    data: { items: [
        { id: 1, groupname: 'admin', comment: 'comment#1' },
        { id: 2, groupname: 'user', comment: 'comment#2' },
        { id: 9, groupname: 'guest', comment: 'comment#3' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
