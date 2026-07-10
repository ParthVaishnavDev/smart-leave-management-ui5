sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("com.parth.smartleavemanagement.controller.EmployeeHome", {

        onInit: function () {

        },

        onApplyLeave: function () {
            this.getOwnerComponent().getRouter().navTo("ApplyLeave");
        },

        onMyLeaves: function () {
            this.getOwnerComponent().getRouter().navTo("MyRequests");
        },

        onPendingPress: function () {
            this.getOwnerComponent().getRouter().navTo("MyRequests", {
                status: "PENDING"
            });
        },

        onApprovedPress: function () {
            this.getOwnerComponent().getRouter().navTo("MyRequests", {
                status: "APPROVED"
            });
        },

        onRejectedPress: function () {
            this.getOwnerComponent().getRouter().navTo("MyRequests", {
                status: "REJECTED"
            });
        },

        onLogout: function () {

            MessageBox.confirm("Are you sure you want to logout?", {

                onClose: function (sAction) {

                    if (sAction === "OK") {
                        this.getOwnerComponent().getRouter().navTo("Login");
                    }

                }.bind(this)

            });

        }

    });

});