angular.module('socially').config(function($urlRouterProvider,$stateProvider, $locationProvider) {
		
		$locationProvider.html5Mode(true);

		$stateProvider
			.state('parties', {
				url:'/parties',
				templateUrl: 'client/parties/views/parties-list.ng.html',
				controller: 'PartiesListCtrl as partyCtrl'

			})
			.state('partyDetails', {
				url : '/parties/:partyId',
				templateUrl : 'client/parties/views/party-details.ng.html',
				controller : 'PartyDetailsCtrl as partyDetail'
			});

			$urlRouterProvider.otherwise("/parties");


	});