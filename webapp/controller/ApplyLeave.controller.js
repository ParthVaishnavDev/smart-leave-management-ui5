sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("com.parth.smartleavemanagement.controller.ApplyLeave", {

        onInit: function () {

        },

        onSubmit: function () {

            const sLeaveType = this.byId("selLeaveType").getSelectedKey();
            const sFromDate = this.byId("dpFromDate").getValue();
            const sToDate = this.byId("dpToDate").getValue();
            const sReason = this.byId("txtReason").getValue().trim();

            if (!sLeaveType) {
                MessageBox.error("Please select Leave Type.");
                return;
            }

            if (!sFromDate) {
                MessageBox.error("Please select From Date.");
                return;
            }

            if (!sToDate) {
                MessageBox.error("Please select To Date.");
                return;
            }

            if (!sReason) {
                MessageBox.error("Please enter the reason.");
                return;
            }

            if (new Date(sToDate) < new Date(sFromDate)) {
                MessageBox.error("To Date cannot be before From Date.");
                return;
            }

            MessageToast.show("Leave Request Submitted Successfully.");

        },

        onClear: function () {

            this.byId("selLeaveType").setSelectedKey("");
            this.byId("dpFromDate").setValue("");
            this.byId("dpToDate").setValue("");
            this.byId("txtReason").setValue("");

        },

        onNavBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("EmployeeHome");

        }

    });

});