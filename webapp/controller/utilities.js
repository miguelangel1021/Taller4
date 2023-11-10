sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage3: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"Name": "",
				"Category": "",
				"Price": 0,
				"Currency": "",
				"ProductImage": "",
				"StockLevel": "",
				"StockLevelCC": "",
				"PriceRange": "",
				"___FK_a6ff51f6ed3fa3271a0ef80b_00023": ""
			};
		}
	};
});
