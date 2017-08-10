define( [], function () {
	'use strict';
	// *****************************************************************************
	// Dimensions & Measures
	// *****************************************************************************
	var dimensions = {
		uses: "dimensions",
		min: 0,
		max: 1
	};
	var measures = {
		uses: "measures",
		min: 0,
		max: 1
	};
	//variable created by developer
	var sorting = {
		uses: "sorting"
	};
	//variable created by developer
	/*var apperance = {
		uses: "settings"
	},*/
	var myCheckBox = {
		ref: "props.myCheckBox",
		label: "Change Color",
		type: "boolean",
		defaultValue: "false"
	};
	// *****************************************************************************
	// Appearance section
	// *****************************************************************************
	var appearanceSection = {
		uses: "settings",
		items: {
			myCheckBox: myCheckBox
		}
	};
	// *****************************************************************************
	// Main properties panel definition
	// Only what is defined here is returned from properties.js
	// *****************************************************************************
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			sorting: sorting,
			appearance: appearanceSection
		}
	};
});