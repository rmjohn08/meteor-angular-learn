/*
	file rename to use the annotation ng-annotate
	ng.js functionality.  it seems it needs to be separate
	from app.js 
*/

/*
	for the ui-router to work need to install with meteor
	by executing --> meteor add angularui:angular-ui-router
*/
if (Meteor.isClient) {
	angular.module('socially',['angular-meteor','ui.router']);


	angular.module('socially').config(function($urlRouterProvider,$stateProvider, $locationProvider) {
		
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('parties', {
				url:'/parties',
				templateUrl: 'parties-list.ng.html',
				controller: 'PartiesListCtrl as partyCtrl'

			})
			.state('partyDetails', {
				url : '/parties/:partyId',
				templateUrl : 'party-details.ng.html',
				controller : 'PartyDetailsCtrl'
			});

			$urlRouterProvider.otherwise("/parties");


	});

	angular.module('socially').controller('PartiesListCtrl', 
		function($scope, $meteor) {

			var partyCtrl = this;
			partyCtrl.parties = $meteor.collection(Parties);
			
			partyCtrl.addParty = function(p) {
				partyCtrl.parties.push(p);
				p = '';
			}

			partyCtrl.removeParty = function(p) {
				partyCtrl.parties.remove(p);
			}
		}
	);

	angular.module('socially').controller('PartyDetailsCtrl', function($scope,$stateParams) {
		$scope.partyId = $stateParams.partyId;
	});

}

