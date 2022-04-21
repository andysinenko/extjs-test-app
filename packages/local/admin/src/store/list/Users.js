/**
 * The Data Store for Partners
 */

Ext.define('Admin.store.list.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',

    model: 'Admin.model.list.Users',
    requires: [
        'Admin.model.list.Users'
    ],

    /*model: 'Admin.model.list.Users',
    proxy: {
        type: 'ajax',
        timeout: 240000,
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        }
    },

    // by setting remoteSort to true the entire store is being sorted instead of the individual page
    remoteSort: false,

    sorters: [
        {
            property: 'name',
            direction: 'ASC'
        }
    ]*/

    /*  TEST CODE  */
    fields: [
        'id', 'username'
    ],

    data: { items: [
            { id: 1, username: 'joe'},
            { id: 2, username: 'jack'},
            { id: 3, username: 'ian'}
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});
