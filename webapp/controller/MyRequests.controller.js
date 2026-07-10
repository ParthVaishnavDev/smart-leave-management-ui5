sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (
    Controller,
    JSONModel,
    MessageToast,
    MessageBox
) {
    "use strict";

    return Controller.extend(
        "com.parth.smartleavemanagement.controller.MyRequests", {

        onInit: function () {

            const oData = {

                Leaves: [

                    {
                        LeaveType: "Casual Leave",
                        FromDate: "15/07/2026",
                        ToDate: "16/07/2026",
                        Status: "Pending",
                        StatusState: "Warning"
                    },

                    {
                        LeaveType: "Sick Leave",
                        FromDate: "21/06/2026",
                        ToDate: "22/06/2026",
                        Status: "Approved",
                        StatusState: "Success"
                    },

                    {
                        LeaveType: "Earned Leave",
                        FromDate: "01/05/2026",
                        ToDate: "03/05/2026",
                        Status: "Rejected",
                        StatusState: "Error"
                    }

                ]

            };

            const oModel = new JSONModel(oData);

            this.getView().setModel(oModel);

        },

        onDelete: function (oEvent) {

            MessageBox.confirm(
                "Delete this Leave Request?",
                {

                    onClose: function (sAction) {

                        if (sAction === "OK") {

                            const oItem = oEvent.getSource().getParent();

                            const oTable = this.byId("tblLeaves");

                            oTable.removeItem(oItem);

                            MessageToast.show("Leave Deleted.");

                        }

                    }.bind(this)

                }

            );

        },

        onNavBack: function () {

            this.getOwnerComponent()
                .getRouter()
                .navTo("EmployeeHome");

        }

    });

});