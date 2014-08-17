meteor-accounts-persona
=========================

A meteor package for [Mozilla Persona](http://www.mozilla.org/en-US/persona/), the decentralized authentication system.

See [Demo App](http://meteor-persona.meteor.com/) ([View Source](https://github.com/vladikoff/meteor-test-persona))

[Watch Quick Setup Tutorial](https://www.youtube.com/watch?v=agWYKzZUilI) 

View package in the [Atmosphere package repository](https://atmosphere.meteor.com/package/accounts-persona)

Package Dependencies
--------------------

* accounts-base
* accounts-oauth


Install
--------------------

```
mrt add accounts-persona
```

```mrt``` is a Meteorite command line tool. Visit [Meteorite's page](http://oortcloud.github.com/meteorite/) to learn more.


Include Persona Library
--------------------

__Since version `0.1.3` this package requires you to include the Persona library yourself, please read below.__

Mozilla strongly [recommends](https://developer.mozilla.org/en-US/docs/Persona/Quick_Setup#Step_1.3A_Include_the_Persona_library)
directly downloading the persona library from their servers due to possible changes, and Meteor does not allow
dynamically loading remote JavaScript files. To meet both requirements you MUST include the Persona library in your head section. To do this,
in one template file, add the following code:

```html
<head>
    <script>
        (function() {
            var t   = document.createElement('script');
            t.type  = 'text/javascript';
            t.async = true;
            t.id    = 'persona-lib';
            t.src = '//login.persona.org/include.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(t, s);
        })();
    </script>
</head>
```

The code will load the persona library directly from Mozilla without blocking the rest of the page loading.

Usage
--------------------

If you use `{{loginButtons}}` from [accounts-ui](http://docs.meteor.com/#accountsui), then "Sign in with Persona"
will show up right after you install this package. (NOTE: to use `{{loginButtons}}` make sure you have `accounts-ui` added)

To create a custom login button, use an event handler:

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
