define(['./properties' , './initialproperties/initialproperties', 'text!./templates/template.html'],
	function ( props, initProps, ngTemplate ) {
		'use strict';
		
		return {
			definition: props,
			initialProperties: initProps, //Generally after "initialProperties" we call Paint: method but using angular js we don't need this method.
			support: {snapshort: true},
			template: ngTemplate, 
			//template defines your AngularJS template which interacts with the 
			//controller. It can be defined inline but better to define always in separte page and call in this place.
			//qv-extension must be part of your template root element. qv-extension is a AngularJS directive which takes care of several aspects that your visualization extension can use AngularJS.
			controller: ['$scope' , function($scope) {
				$scope.myTitle = 'Hi, This is Sanjiv Srivastava created Qlik Extension based on Angular JS';
				console.log('layout', $scope.layout);
			}]
		};
});
