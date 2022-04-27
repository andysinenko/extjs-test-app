Ext.define('MyApp.view.main.Toolbar',{
    extend: 'Ext.view.View',
    xtype: 'toolbar-metadata',
    requires: [
        'MyApp.view.main.GroupList'
    ],
    store: {
        type: 'groups'
    },

    /*getData: function(id) {
        Ext.Ajax.request({
            url: 'http://localhost:8080/testuri/' + id,
            method: 'get',
            cors: true,
            headers: {
                'Accept': 'application/json', 'Authorization':'Basic YWRtaW46MTIzNDU2'},
            useDefaultXhrHeader : false,
            success: function(response, opts) {
                var data = Ext.decode(response.responseText);
                var summaryText = this.down('tbitem');

                summaryText.setVisible(true);
                summaryText.update(data);  //here toolbar data appears
                console.log(data.field1);
            },
            failure: function(response, opts) {
                Ext.Msg.alert('server-side failure with status code ' + response.status);
            }
        });
    },

    onReady: function() {
        this.callParent(arguments);
        this.getData('100002');
    },*/

    cls: 'drd-nested-grid',
    itemSelector: 'drd-nested-grid-row',
    tpl: '<tpl for=".">' +
        '<div>'+
        '<b>{id} - {groupname} - {comment}</b>' +
        '</div>'+
        '</tpl>'

});
