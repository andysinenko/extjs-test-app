Ext.define('Admin.controller.Users', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',

    onUsersComboBoxChange: function(combo, record, eOpts) {
        var selectedValues = record
        for(var i =0; i<selectedValues.length; i++) {
            console.log('SELECTED: ' + selectedValues[i].data.username);
        }
    },

    onRolesComboBoxChange: function(combo, record, eOpts) {
        var selectedValues = record
        for(var i =0; i<selectedValues.length; i++) {
            //console.log('selectedValues[i].data.groupname: ' + selectedValues[i].data.groupname);
            console.log('selectedValues[i]: ' + selectedValues[i]);
            console.log('record: ' + record[i]);
        }
    }
});
