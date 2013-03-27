(function () {
  Meteor.loginWithPersona = function (options, callback) {
    // support both (options, callback) and (callback).
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    }

    /**
     * callLoginMethod user callback
     * @param error
     */
    var loginCallback = function (error) {
      if (!error) {
        callback();
      }
    };

    navigator.id.watch({
      onlogin: function (assertion) {
        Accounts.callLoginMethod({
          methodName: 'login',
          methodArguments: [
            { persona: true, assertion: assertion }
          ],
          userCallback: loginCallback
        });
      },
      onlogout: function () {
        navigator.id.logout();
        Accounts._makeClientLoggedOut();
      }
    });

    navigator.id.request();
  };
})();
