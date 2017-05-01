var TL = TLog.getLogger(TLog.LOGLEVEL_MAX, false);


if (Meteor.isClient) {

	var insertCard = function () {
		$('#card').toggleClass('insert');
	};

	var clickEvent = function () {
		Meteor.loginWithPersona({}, function (error) {
			TL.info("callback");
			if (error)
				alert(error.message);
			});
	};

	Template.browserId.events({
		'hover .tour a':insertCard,
		'hover .tour a':clickEvent
	});

	Template.personaButton.events({
		
		'hover #loginPersona':insertCard,
		'click #loginPersona':clickEvent,
		'click #logoutPersona':function () {
			Meteor.logout();
		}
	});
}

if (Meteor.isServer) {

	// code to run on server at startup
	Meteor.startup(function () {

		Accounts.validateNewUser(function (user) {

			// You may want to add some user validation
			// console.log(user)
			// throw new Meteor.Error(Accounts.LoginCancelledError.numericError, "Persona Token Expired");

			return true;

		});

		Accounts.onCreateUser(function (options, user) {
			TL.info("onCreateUser:"+user);

			user.username = user.services.persona.id;
			user.profile = {};
			user.profile.name = user.username;
			return user;
		});

	});
}
