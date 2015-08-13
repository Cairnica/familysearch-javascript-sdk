A high-level JavaScript wrapper around the FamilySearch REST API.

[![Build Status](https://travis-ci.org/FamilySearch/familysearch-javascript-sdk.png)](https://travis-ci.org/FamilySearch/familysearch-javascript-sdk)
[![Coverage Status](https://coveralls.io/repos/FamilySearch/familysearch-javascript-sdk/badge.svg?branch=master)](https://coveralls.io/r/FamilySearch/familysearch-javascript-sdk?branch=master)

Overview
========

* JavaScript functions wrap the underlying REST API calls.
The objects returned by the functions include convenience functions for extracting information from the returned JSON.
For example, the following logs the name of a person along with their spouses and chilren.

    ```javascript
    client.getPersonWithRelationships('KW7S-VQJ', {persons:true}).then(function(response) {
      console.log(response.getPrimaryPerson().getName());
      var spouses = response.getSpouses();
      for (var s = 0; spousesLen = spouses.length; s &lt; spousesLen; s++) {
        console.log(spouses[s].getName());
        var children = response.getChildren(spouses[s].getId());
        for (var c = 0; childrenLen = children.length; c &lt; childrenLen; c++) {
          console.log(children[c].getName());
        }
      }
    });
    ```

* Asynchronous functions (like the one above) return promises to make it easy for you to refer to their results from anywhere in your code.

* Each function is [well-documented](http://familysearch.github.io/familysearch-javascript-sdk)
and has an editable jsFiddle to demonstrate its functionality and allow you to experiment.

* In the browser, authentication is handled using a popup window.  You do not need to create an OAuth redirect page.
All you need to do is register a callback URI that shares the same hostname and port as your code.
Check out the [jsFiddle](http://jsfiddle.net/MpUg7/60/) to see it in action (requires you to have a sandbox account).

* Option to store access token in a session cookie.

* Retry in the case of throttled responses is handled for you.

* Cross-platform: the SDK works with jQuery, AngularJS, or Node.js. See the [examples](https://github.com/FamilySearch/familysearch-javascript-sdk/tree/master/examples).

* Object-oriented: SDK functions return objects, which have convenience functions to make getting or setting data easy.

* Consistent update API: each object has $save and $delete functions to persist changes or delete the object respectively.

Installation
============

The SDK is available as a versioned javascript file, following the [semantic versioning](http://semver.org/) guidelines.

1. Bower

  ```
  bower install familysearch-javascript-sdk
  ```

1. Node
   
  ```
  npm install familysearch-javascript-sdk.git
  ```

1. CDN via [jsDelivr](http://www.jsdelivr.com/#!familysearch-javascript-sdk)

  ```html
  <script src="//cdn.jsdelivr.net/familysearch-javascript-sdk/1.0.0/familysearch-javascript-sdk.min.js"></script>
  ```

Documentation
=============

* [API docs](http://familysearch.github.io/familysearch-javascript-sdk).
* [Slides from 2014 RootsTech talk](http://dallanq.github.io/rootstech-2014-fs-js-sdk-slides).
* [Comprehensive example application](https://github.com/rootsdev/familysearch-reference-client) showing how to use the SDK.

Releases
========

The Javascript SDK uses [semantic versioning](http://semver.org/) for releases. 
Any breaking changes will cause the major version to be bumped; e.g., 1.0 -> 2.0.

You can check out a specific release by clicking on the github 
[Releases link](https://github.com/FamilySearch/familysearch-javascript-sdk/releases)
or by specifying the release number in your `bower.json` or `package.json` file; e.g., `"familysearch-javascript-sdk": "~1.0.0"`. 
The _Releases_ link also serves as a _Change Log_, so it's worth looking at even if you plan to work off the master branch. 

Contributing
============

Thank you for your interest in contributing! We love pull requests.

Follow these steps to properly setup your development environment:

* Fork this repo
* Run `npm install` to install the build dependencies.
* Run `npm test` to run the tests.
* Run `npm run build` to build the project.

This project uses .editorconfig to help configure your editor for consistent code indentation and styling.
Please follow the existing style in your changes.

Grunt runs jshint on the files using a rather strict .jshintrc file, which finds a lot of potential problems almost immediately.
Your changes should pass the jshint checks.
If you have a good reason not to follow a particular check for a particular statement,
you can disable the jshint test for that statement.
Some editors (e.g., WebStorm) can be configured to read the .jshintrc file to notify you immediately when something doesn't pass.

Grunt runs unit tests using jasmine. Please create unit tests for your changes.
See the existing unit test files for examples.

Grunt also generates documentation for the project.
Nearly a third of the code consists of comments that is turned into online documentation.
Please comment your changes.

Please create editable examples for your changes on jsFiddle.net.

In the future we might use Facebook's Huxley project to create end-to-end (integration) tests from the examples on jsFiddle,
so they will serve two purposes simultaneously: as human-readable examples and as end-to-end tests.
(There is a proof-of-concept in the huxley directory.)

When choosing what to work on, you may pick an existing issue to implement or create a new issue.
We suggest that you describe what you plan to implement in order to get feedback prior to implementation and
issuing a pull request, though you are also free to issue a pull request and ask for comments afterward.
