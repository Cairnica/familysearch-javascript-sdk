define([
  'globals',
  'helpers',
  'plumbing'
], function(globals, helpers, plumbing) {
  /**
   * @ngdoc overview
   * @name user
   * @description
   * Functions related to users
   *
   * {@link https://familysearch.org/developers/docs/api/resources#user FamilySearch API Docs}
   */

  var maybe = helpers.maybe; // shorthand

  var exports = {};

  /**
   * @ngdoc function
   * @name user.types:constructor.User
   * @description
   *
   * User - a user is returned from {@link user.functions:getCurrentUser getCurrentUser};
   * Contributor Ids are agent ids, not user ids.
   */
  var User = exports.User = function() {

  };

  exports.User.prototype = {
    constructor: User
    /**
     * @ngdoc property
     * @name user.types:constructor.User#id
     * @propertyOf user.types:constructor.User
     * @return {String} Id of the user
     */

    /**
     * @ngdoc property
     * @name user.types:constructor.User#contactName
     * @propertyOf user.types:constructor.User
     * @return {String} contact name of the user
     */

    /**
     * @ngdoc property
     * @name user.types:constructor.User#fullName
     * @propertyOf user.types:constructor.User
     * @return {String} full name of the user
     */

    /**
     * @ngdoc property
     * @name user.types:constructor.User#email
     * @propertyOf user.types:constructor.User
     * @return {String} email of the user
     */

    /**
     * @ngdoc property
     * @name user.types:constructor.User#treeUserId
     * @propertyOf user.types:constructor.User
     * @return {String} agent / contributor id of the user
     */
  };

  /**
   * @ngdoc function
   * @name user.types:constructor.Agent
   * @description
   *
   * An agent is returned from {@link user.functions:getAgent getAgent}.
   * Contributor Ids are agent ids, not user ids.
   */
  var Agent = exports.Agent = function() {

  };

  exports.Agent.prototype = {
    constructor: Agent,
    /**
     * @ngdoc property
     * @name user.types:constructor.Agent#id
     * @propertyOf user.types:constructor.Agent
     * @return {String} Id of the agent
     */

    /**
     * @ngdoc function
     * @name user.types:constructor.Agent#$getName
     * @methodOf user.types:constructor.Agent
     * @function
     * @return {String} name of the agent
     */
    $getName:        function() { return maybe(maybe(this.names)[0]).value; },

    /**
     * @ngdoc function
     * @name user.types:constructor.Agent#$getAccountName
     * @methodOf user.types:constructor.Agent
     * @function
     * @return {String} account / contact name of the agent
     */
    $getAccountName: function() { return maybe(maybe(this.accounts)[0]).accountName; },

    /**
     * @ngdoc function
     * @name user.types:constructor.Agent#$getEmail
     * @methodOf user.types:constructor.Agent
     * @function
     * @return {String} email of the agent
     */
    $getEmail:       function() {
      var email = maybe(maybe(this.emails)[0]).resource;
      return email ? email.replace(/^mailto:/,'') : email;
    }
  };

  /**
   * @ngdoc function
   * @name user.functions:getCurrentUser
   * @function
   *
   * @description
   * Get the current user with the following convenience function
   *
   * - `getUser()` - get the {@link user.types:constructor.User User} from the response
   *
   * {@link https://familysearch.org/developers/docs/api/users/Current_User_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/3NJFM/ editable example}
   *
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} a promise for the current user
   */
  exports.getCurrentUser = function(params, opts) {
    return plumbing.getUrl('current-user').then(function(url) {
      return plumbing.get(url, params, {}, opts,
        helpers.compose(
          helpers.objectExtender({getUser: function() { return maybe(this.users)[0]; }}),
          helpers.constructorSetter(User, 'users')
        ));
    });
  };

  /**
   * @ngdoc function
   * @name user.functions:getCurrentUserPersonId
   * @function
   *
   * @description
   * Get the id of the current user person in the tree; pass into {@link person.functions:getPerson getPerson} for details
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Current_User_Person_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/c4puF/ editable example}
   *
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the (string) id of the current user person
   */
  exports.getCurrentUserPersonId = function(params, opts) {
    var d = globals.deferredWrapper();
    plumbing.getUrl('current-user-person').then(function(url) {
      var promise = plumbing.get(url, params, {}, opts);
      helpers.extendHttpPromise(d.promise, promise);
      promise.then(
        function() {
          handleCurrentUserPersonResponse(d, promise);
        }, function() {
          // in Chrome, the current person response is expected to fail because it involves a redirect and chrome doesn't
          // re-send the Accept header on a CORS redirect, so the response comes back as XML and jQuery can't parse it.
          // That's ok, because we'll pick up the ID from the Content-Location header
          handleCurrentUserPersonResponse(d, promise);
        });
    });

    return d.promise;
  };

  /**
   * Common code for current user person promise fulfillment and failure
   * @param {Object} d deferred
   * @param {Object} promise promise from get
   */
  function handleCurrentUserPersonResponse(d, promise) {
    var id = null;
    // this is the expected result for Node.js because it doesn't follow redirects
    var location = promise.getResponseHeader('Location');
    if (!location) {
      // this is the expected result for browsers because they follow redirects
      // NOTE: Chrome doesn't re-send the accept header on CORS redirect requests, so the request fails because we can't
      // parse the returned XML into JSON. We still get a Content-Location header though.
      location = promise.getResponseHeader('Content-Location');
    }

    if (location) {
      var matchResult = location.match(/\/persons\/([^?]*)/);
      if (matchResult) {
        id = matchResult[1];
      }
    }

    if (id) {
      d.resolve(id);
    }
    else {
      d.reject('not found');
    }
  }

  /**
   * @ngdoc function
   * @name user.functions:getAgent
   * @function
   *
   * @description
   * Get information about the specified agent (contributor)
   * The response includes the following convenience function
   *
   * - `getAgent()` - get the {@link user.types:constructor.Agent Agent} from the response
   *
   * {@link https://familysearch.org/developers/docs/api/users/Agent_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/BpT8c/ editable example}
   *
   * @param {String} aid of the agent / contributor
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   */
  exports.getAgent = function(aid, params, opts) {
    return plumbing.getUrl('agent-template', aid, {uid: aid}).then(function(url) {
      return plumbing.get(url, params, {}, opts,
        helpers.compose(
          helpers.objectExtender({getAgent: function() { return maybe(this.agents)[0]; }}),
          helpers.constructorSetter(Agent, 'agents')
        ));
    });
  };

  /**
   * @ngdoc function
   * @name user.functions:getMultiAgent
   * @function
   *
   * @description
   * Get multiple agents at once by requesting them in parallel
   *
   * {@link https://familysearch.org/developers/docs/api/users/Agent_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/hMhas/ editable example}
   *
   * @param {Array} aids Ids of the agents to read
   * @param {Object=} params pass to getAgent currently unused
   * @param {Object=} opts pass to the http function specified during init
   * @return {Object} promise that is fulfilled when all of the agents have been read,
   * returning a map of agent id to response
   */
  exports.getMultiAgent = function(aids, params, opts) {
    var promises = {};
    helpers.forEach(aids, function(aid) {
      promises[aid] = exports.getAgent(aid, params, opts);
    });
    return helpers.promiseAll(promises);
  };

  return exports;
});
