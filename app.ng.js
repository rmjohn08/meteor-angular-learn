/*
	file rename to use the annotation ng-annotate
	ng.js functionality.  
*/

if (Meteor.isClient) {
	angular.module('socially',['angular-meteor']);

	angular.module('socially').controller('PartiesListCtrl', 
		function($scope) {

			var partyCtrl = this;

			partyCtrl.parties = [
				{'name' : 'Dubstep-Free Zone', 'description' : 'Please no!'},
				{'name' : 'All Dubstep', 'description' : 'Get it on!'},
				{'name' : 'Savage laughing', 'description' : 'Leisure suit'}
							
			];
			

		}
	);
}