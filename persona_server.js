(function () {

  Meteor.startup(function () {
    var config = Accounts.loginServiceConfiguration.findOne({service:'persona'});
    if (!config) {
      Accounts.loginServiceConfiguration.insert({ service:'persona' });
    }
  });

  Accounts.registerLoginHandler(function(options) {
    if (!options.persona && !options.assertion)
      return undefined; // don't handle

    var url = "https://verifier.login.persona.org/verify",
        request = {
          data:{
            "assertion":options.assertion,
            "audience":Meteor.absoluteUrl('')
          },
          headers:{
            "content-type":"application/json"}
        },
        result = Meteor.http.call("POST", url, request);

    if (result.data.status === 'okay') {
      result.data.id = result.data.email;
      var userLoginData = Accounts.updateOrCreateUserFromExternalService('persona', result.data);
      return userLoginData;
    } else {
      throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Persona Login Failed');
    }
  });
})();
