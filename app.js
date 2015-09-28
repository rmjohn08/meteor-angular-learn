Parties = new Mongo.Collection("parties");

if (Meteor.isServer) {
	console.log('server side code...');
	Meteor.startup( function() {
		
		if (Parties.find().count() === 0) {
			var parties = [
				{'name' : 'Dubstep-Free Zone', 'description' : 'from mongo Please no!'},
				{'name' : 'All Dubstep', 'description' : 'Get it on!'},
				{'name' : 'Savage laughing', 'description' : 'Leisure suit'}
							
			];

			for(var i=0; i < parties.length; i++) {
				Parties.insert(parties[i]);

			}

		}

	});	
}