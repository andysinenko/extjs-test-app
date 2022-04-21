Ext.define('MyApp.view.main.LocalPropertiesList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainpropertieslist',
    scroll: 'both', 
    scrollable: 'y',

    requires: [
       'MyApp.store.LocalPropertiesStore'
    ],

    //title: 'Properties',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Localproperties'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    store: {
        type: 'localproperties'
    },

    columns: [
        { text: '<b>LP ID</b>',  dataIndex: 'id' },
        { text: '<b>Property Key</b>', dataIndex: 'propKey', flex: 1 },
        { text: '<b>Property Value</b>', dataIndex: 'propValue', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
