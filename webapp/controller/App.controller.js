sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.migrate2.controller.App", {
		onInit: function () {

			fetch("/northwind/V2/OData/OData.svc/Suppliers?$format=json")
				.then(res => res.json())
				.then(data => console.log(data))
				.catch(err => console.log(err));
		}
	});
});