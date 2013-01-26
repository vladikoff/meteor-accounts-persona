meteor-accounts-persona
=========================

A meteor package for Mozilla Persona service.

Package Dependencies
--------------------

* accounts-base


Install
--------------------

```
mrt install accounts-persona
```

```mrt``` is a Meteorite command line tool. Visit [Meteorite's home page](http://oortcloud.github.com/meteorite/) to learn more.

Usage
--------------------

If you use {{loginButtons}} from [accounts-ui](http://docs.meteor.com/#accountsui), then "Sign in with Persona"
will show up right after you install this package.

To create a custom login button, hook up an event handler

```
Template.header.events({
    'click #loginPersona': function () {
            Meteor.loginWithPersona();
    }
});
```

You can download the official Persona Buttons from [Persona Branding Resources](https://developer.mozilla.org/en-US/docs/persona/branding)

```Meteor.loginWithPersona();``` supports [Meteor.loginWithExternalService([options], [callback])](http://docs.meteor.com/#meteor_loginwithexternalservice)

FAQ
----------------------
See the [Github Wiki](https://github.com/vladikoff/meteor-accounts-persona/wiki) for FAQ
