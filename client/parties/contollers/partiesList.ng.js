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
