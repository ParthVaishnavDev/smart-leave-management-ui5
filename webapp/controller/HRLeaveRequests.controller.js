sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    return Controller.extend("com.parth.smartleavemanagement.controller.HRLeaveRequests", {

        onInit: function () {

            const oModel = new JSONModel({

                Requests: [

                    {
                        Employee: "Parth",
                        LeaveType: "Casual Leave",
                        FromDate: "10/07/2026",
                        ToDate: "11/07/2026",
                        Status: "Pending",
                        StatusState: "Warning"
                    },

                    {
                        Employee: "Rahul",
                        LeaveType: "Sick Leave",
                        FromDate: "14/07/2026",
                        ToDate: "15/07/2026",
                        Status: "Pending",
                        StatusState: "Warning"
                    }

                ]

            });

            this.getView().setModel(oModel);

        },

        onApprove: function () {

            MessageToast.show("Leave Approved");

        },

        onReject: function () {

            MessageToast.show("Leave Rejected");

        },

        onNavBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("HRHome");

        }

    });

});