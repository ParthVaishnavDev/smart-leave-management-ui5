sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("com.parth.smartleavemanagement.controller.LeaveDetails", {

        onNavBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("MyLeaves");

        },

        onDelete: function () {

            MessageBox.confirm(
                "Delete this leave request?",
                {
                    actions: [
                        MessageBox.Action.YES,
                        MessageBox.Action.NO
                    ],

                    onClose: function (sAction) {

                        if (sAction === MessageBox.Action.YES) {

                            MessageToast.show("Leave Request Deleted");

                            this.getOwnerComponent()
                                .getRouter()
                                .navTo("MyLeaves");

                        }

                    }.bind(this)

                }

            );

        }

    });

});