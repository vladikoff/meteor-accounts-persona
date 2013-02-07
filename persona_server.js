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

    // check response
    var p = result.data;
    if (p) {

      // check response status
      if (p.status === 'okay') {

        // check that the issuer is login.persona.org
        if (p.issuer !== 'login.persona.org') {
          throw new Meteor.Error(Accounts.LoginCancelledError.numericError, "Invalid Persona issuer");
        }

        // check token expiration
        if (new Date() <= new Date(p.expires))
          throw new Meteor.Error(Accounts.LoginCancelledError.numericError, "Persona Token Expired");

        p.id = p.email;
        return Accounts.updateOrCreateUserFromExternalService('persona', p);
      } else {
        throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'Persona Login Failed');
      }

    } else {
      throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'No Data Received');
    }

  });
})();
