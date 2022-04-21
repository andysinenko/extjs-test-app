Ext.define('MyApp.view.main.Toolbar',{
    extend: 'Ext.view.View',
    xtype: 'toolbar-metadata',
    requires: [
        'MyApp.view.main.GroupList'
    ],
    store: {
        type: 'groups'
    },

    cls: 'drd-nested-grid',
    itemSelector: 'drd-nested-grid-row',
    tpl: '<tpl for=".">' +
        '<div>'+
        '<b>{id} - {groupname} - {comment}</b>' +
        '</div>'+
        '</tpl>'
});
