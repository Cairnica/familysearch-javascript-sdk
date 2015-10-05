# GedcomX - JavaScript SDK

A high-level JavaScript wrapper around the FamilySearch REST API.

[![npm](https://img.shields.io/npm/v/familysearch-javascript-sdk.svg)]()
[![Build Status](https://travis-ci.org/FamilySearch/familysearch-javascript-sdk.png)](https://travis-ci.org/FamilySearch/familysearch-javascript-sdk)
[![Coverage Status](https://coveralls.io/repos/FamilySearch/familysearch-javascript-sdk/badge.svg?branch=master)](https://coveralls.io/r/FamilySearch/familysearch-javascript-sdk?branch=master)

A [sample app](https://github.com/FamilySearch/javascript-sdk-sample-app) demonstrates how to fulfill common use cases.

## Installation

The SDK is available as a versioned javascript file, following the [semantic versioning](http://semver.org/) guidelines.

If you want to run the SDK on your own server, copy the familysearch-javascript-sdk file to your project folder and run one of the following commands from that folder on your server console:

* For a Bower server:
  ```
  bower install familysearch-javascript-sdk
  ```

* For a Node server:
  ```
  npm install familysearch-javascript-sdk
  ```

If you want to use a copy of the SDK that is already available on a CDN previously installed using [jsDelivr](http://www.jsdelivr.com/#!familysearch-javascript-sdk), add the following script command to your setup file.

  ```html
  <script src="//cdn.jsdelivr.net/familysearch-javascript-sdk/2.1.0/familysearch-javascript-sdk.min.js"></script>
  ```


## Javascript SDK Features

* **Wrapped REST API Calls**

 JavaScript functions wrap the underlying REST API calls.
The objects returned by the functions include convenience functions for extracting information from the returned JSON.
For example, the following logs the name of a person along with their spouses and chilren.

    ```javascript
    client.getPerson('KW7S-VQJ', {persons:true}).then(function(response) {
      console.log(response.getPrimaryPerson().getDisplayName());
    });
    ```

* **Promises**

 Asynchronous functions (like the one above) return promises to make it easy for you to refer to their results from anywhere in your code.

* **Well Documented**

 Each function is [well-documented](http://familysearch.github.io/familysearch-javascript-sdk)
and has an editable jsFiddle to demonstrate its functionality and allow you to experiment.

* **Popup Authentication**

 In the browser, authentication is handled using a popup window. You do not need to create an OAuth redirect page.
All you need to do is register a callback URI that shares the same hostname and port as your code.

* **Automatic Authentication**

 If you make a call without first authenticating, the authentication process will be initiated first automatically.

* **Token Storage**

 There is an option to store your access token in a session cookie.

* **Throttle Handling**

 Retry in the case of throttled responses is handled for you.

* **Cross-platform**

 Works both in the browser and in node. See the [examples](https://github.com/FamilySearch/familysearch-javascript-sdk/tree/master/examples).

* **Object-oriented**

 SDK functions return objects, which have convenience functions to make getting or setting data easy.

* **Consistent update API**

 Each object has save and delete functions to persist changes or delete the object respectively.


## Contributing

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

When choosing what to work on, you may pick an existing issue to implement or create a new issue.
We suggest that you describe what you plan to implement in order to get feedback prior to implementation and
issuing a pull request, though you are also free to issue a pull request and ask for comments afterward.
