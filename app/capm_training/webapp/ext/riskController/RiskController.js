sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Risks: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
