sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: com.parth.smartleavemanagement",
		defaults: {
			page: "ui5://test-resources/com/parth/smartleavemanagement/Test.qunit.html?testsuite={suite}&test={name}",
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
				only: "com/parth/smartleavemanagement/",
				never: "test-resources/com/parth/smartleavemanagement/"
			},
			loader: {
				paths: {
					"com/parth/smartleavemanagement": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for com.parth.smartleavemanagement"
			},
			"integration/opaTests": {
				title: "Integration tests for com.parth.smartleavemanagement"
			}
		}
	};
});
