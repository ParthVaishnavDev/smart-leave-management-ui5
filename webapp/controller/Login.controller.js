sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
], function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("com.parth.smartleavemanagement.controller.Login", {

        onInit: function () {

        },

        onLogin: function () {

            const sUsername = this.byId("inpUsername").getValue().trim();
            const sPassword = this.byId("inpPassword").getValue().trim();

         
            if (!sUsername || !sPassword) {
                MessageBox.error("Username and Password cannot be empty.");
                return;
            }

         
            if (sUsername === "employee" && sPassword === "123") {

                MessageToast.show("Employee Login Successful");

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("EmployeeHome");

                return;
            }

            if (sUsername === "hr" && sPassword === "123") {

                MessageToast.show("HR Login Successful");

                this.getOwnerComponent()
                    .getRouter()
                    .navTo("HRHome");

                return;
            }

            MessageBox.error("Invalid Username or Password.");

        }

    });

});