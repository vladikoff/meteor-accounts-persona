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

If you use {{loginButtons}} from [accounts-ui](http://docs.meteor.com/#accountsui), then "Sign in with Persona"
will show up right after you install this package. (NOTE: to use `{{loginButtons}}` make sure you have `accounts-ui` added)

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


License
----------------------

(The MIT License)

Copyright (c) 2013 Vlad Filippov;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
