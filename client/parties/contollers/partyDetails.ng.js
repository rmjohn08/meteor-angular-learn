angular.module('socially').controller('PartyDetailsCtrl', 
		function($scope,$stateParams, $meteor) {

		var partyDetail = this;
		partyDetail.party = $meteor.object(Parties, $stateParams.partyId, false);

		partyDetail.partyId = $stateParams.partyId;

		partyDetail.save = function() {
			partyDetail.party.save().then(function(affected) {
				console.log('records affected ', affected);
			}, function(error) {
				console.log('error saving '+error);
			});
		}

		partyDetail.reset = function() {
			partyDetail.party.reset();

		}

	});