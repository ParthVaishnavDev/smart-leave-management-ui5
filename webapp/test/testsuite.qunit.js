sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.parth.smartleavemanagementsystem",
		defaults: {
			page: "ui5://test-resources/com/parth/smartleavemanagementsystem/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "com/parth/smartleavemanagementsystem/",
				never: "test-resources/com/parth/smartleavemanagementsystem/"
			},
			loader: {
				paths: {
					"com/parth/smartleavemanagementsystem": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.parth.smartleavemanagementsystem"
			},
			"integration/opaTests": {
				title: "Integration tests for com.parth.smartleavemanagementsystem"
			}
		}
	};
});
