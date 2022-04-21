/**
 * The Data Store for Partners
 */

Ext.define('Admin.store.list.Roles', {
    extend: 'Ext.data.Store',
    alias: 'store.roles',

    model: 'Admin.model.list.Roles',
    requires: [
        'Admin.model.list.Roles'
    ],

    /*model: 'Admin.model.list.Groups',
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
            property: 'groupname',
            direction: 'ASC'
        }
    ]*/

    /*  TEST CODE  */
    fields: [
        'id', 'username'
    ],

    data: { items: [
            { id: 1, groupname: 'admin'},
            { id: 2, groupname: 'user'},
            { id: 3, groupname: 'manager'}
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }

});
