sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.parth.smartleavemanagement.controller.HRHome", {

        onInit: function () {

        },

        onLeaveRequests: function () {
            this.getOwnerComponent().getRouter().navTo("HRLeaveRequests");
        },

        onTotalPress: function () {
            this.getOwnerComponent().getRouter().navTo("HRLeaveRequests");
        },

        onPendingPress: function () {
            this.getOwnerComponent().getRouter().navTo("HRLeaveRequests", {
                status: "PENDING"
            });
        },

        onApprovedPress: function () {
            this.getOwnerComponent().getRouter().navTo("HRLeaveRequests", {
                status: "APPROVED"
            });
        },

        onRejectedPress: function () {
            this.getOwnerComponent().getRouter().navTo("HRLeaveRequests", {
                status: "REJECTED"
            });
        },

        onLogout: function () {

            MessageBox.confirm("Are you sure you want to logout?", {

                onClose: function (oAction) {

                    if (oAction === "OK") {
                        this.getOwnerComponent().getRouter().navTo("Login");
                    }

                }.bind(this)

            });

        }

    });

});