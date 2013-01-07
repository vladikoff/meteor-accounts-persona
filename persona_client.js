(function () {
  Meteor.loginWithPersona = function (options, callback) {
    // support both (options, callback) and (callback).
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    }
    navigator.id.request();

    navigator.id.watch({
      onlogin: function(assertion) {
        Accounts.callLoginMethod({
            methodName:'login',
            methodArguments: [{persona: true, assertion: assertion}]
          });
      },
      onlogout: function() {
        navigator.id.logout();
        Accounts._makeClientLoggedOut();
      }
    });
  };
})();
