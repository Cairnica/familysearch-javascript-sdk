var FS = require('../FamilySearch'),
    relHelpers = require('../relationshipHelpers'),
    utils = require('../utils'),
    maybe = utils.maybe;

/**
 * @ngdoc function
 * @name spouses.types:constructor.Couple
 * @description
 *
 * Couple relationship
 *
 * Two methods to note below are _$save_ and _$delete_.
 * _$save_ persists the changes made to husband, wife, and facts;
 * _$delete_ removes the relationship.
 *
 * @param {Object=} data an object with optional attributes {$husband, $wife, facts}.
 * _$husband_ and _$wife_ are Person objects, URLs, or ids.
 * _facts_ is an array of Facts or objects to be passed into the Fact constructor.
 */
var Couple = FS.Couple = function(client, data) {
  FS.BaseClass.call(this, client, data);
  
  if (data) {
    if (data.$husband) {
      //noinspection JSUnresolvedFunction
      this.$setHusband(data.$husband);
    }
    if (data.$wife) {
      //noinspection JSUnresolvedFunction
      this.$setWife(data.$wife);
    }
    if (data.facts) {
      utils.forEach(this.facts, function(fact, i){
        if(!(fact instanceof FS.Fact)){
          this.facts[i] = client.createFact(fact);
        }
      }, this);
    }
  }
};

/**
 * @ngdoc function
 * @name spouses.functions:createCouple
 * @param {Object} data [Relationship](https://familysearch.org/developers/docs/api/gx/Relationship_json) data
 * @return {Object} {@link spouses.types:constructor.Couple Couple}
 * @description Create a {@link spouses.types:constructor.Couple Couple} object. Use this method instead of calling the constructor directly.
 */
FS.prototype.createCouple = function(data){
  return new Couple(this, data);
};

Couple.prototype = utils.extend(Object.create(FS.BaseClass.prototype), {
  constructor: Couple,
  /**
   * @ngdoc property
   * @name spouses.types:constructor.Couple#id
   * @propertyOf spouses.types:constructor.Couple
   * @return {String} Id of the relationship
   */

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getCoupleUrl
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {String} Url of this couple relationship
   */
  $getCoupleUrl: function() { return this.$helpers.removeAccessToken(maybe(maybe(this.links).relationship).href); },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getFacts
   * @methodOf spouses.types:constructor.Couple
   * @return {Fact[]} array of {@link fact.types:constructor.Fact Facts}; e.g., marriage
   */
  $getFacts: function() { return this.facts || []; },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getMarriageFact
   * @methodOf spouses.types:constructor.Couple
   * @return {Fact} {@link fact.types:constructor.Fact Fact} of type http://gedcomx.org/Marriage (first one if multiple)
   */
  $getMarriageFact: function() { return utils.find(this.facts, {type: 'http://gedcomx.org/Marriage'}); },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getHusbandId
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {String} Id of the husband
   */
  $getHusbandId: function() { return maybe(this.person1).resourceId; },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getHusbandUrl
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {String} URL of the husband
   */
  $getHusbandUrl: function() { return this.$helpers.removeAccessToken(maybe(this.person1).resource); },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getHusband
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {Object} promise for the {@link exports.functions:getPerson getPerson} response
   */
  $getHusband: function() { return this.$client.getPerson(this.$getHusbandUrl()); },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getWifeId
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {String} Id of the wife
   */
  $getWifeId: function() { return maybe(this.person2).resourceId; },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getWifeUrl
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {String} URL of the wife
   */
  $getWifeUrl: function() { return this.$helpers.removeAccessToken(maybe(this.person2).resource); },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getWife
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {Object} promise for the {@link exports.functions:getPerson getPerson} response
   */
  $getWife: function() { return this.$client.getPerson(this.$getWifeUrl()); },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getSpouseId
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description Use this method when you know the ID of one person in the relationship and you want to fetch the ID of the other person.
   * @param {string} ID of the spouse which you already know
   * @return {String} Id of the other spouse
   */
  $getSpouseId: function(knownSpouseId) { 
    if(maybe(this.person1).resourceId === knownSpouseId) {
      return maybe(this.person2).resourceId;
    } else {
      return maybe(this.person1).resourceId;
    }
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getSpouseUrl
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description Use this method when you know the ID of one person in the relationship and you want to fetch the URL of the other person.
   * @param {string} ID of the spouse which you already know
   * @return {String} URL of the other spouse
   */
  $getSpouseUrl: function(knownSpouseId) {
    if(maybe(this.person1).resourceId === knownSpouseId) {
      return this.$helpers.removeAccessToken(maybe(this.person2).resource);
    } else {
      return this.$helpers.removeAccessToken(maybe(this.person1).resource);
    }
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getSpouse
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description Use this method when you know the ID of one person in the relationship and you want to fetch the other person.
   * @param {string} ID of the spouse which you already know
   * @return {Object} promise for the {@link exports.functions:getPerson getPerson} response
   */
  $getSpouse: function(knownSpouseId) { 
    return this.$client.getPerson(this.$getSpouseUrl(knownSpouseId));
  },
  
  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getNotes
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {Object} promise for the {@link notes.functions:getNotes getNotes} response
   */
  $getNotes: function() { 
    var self = this;
    return self.$helpers.chainHttpPromises(
      self.$getLink('notes'),
      function(link){
        return self.$client.getNotes(link.href);
      }
    );
  },


  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getSourceRefs
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {Object} promise for the {@link sources.functions:getCoupleSourceRefs getCoupleSourceRefs} response
   */
  $getSourceRefs: function() { 
    var self = this;
    return self.$helpers.chainHttpPromises(
      self.$getLink('source-references'),
      function(link){
        return self.$client.getSourceRefs(link.href);
      }
    );
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getSources
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @return {Object} promise for the {@link sources.functions:getSourcesQuery getSourcesQuery} response
   */
  $getSources: function() { 
    var self = this;
    return self.$helpers.chainHttpPromises(
      self.$getLink('source-descriptions'),
      function(link){
        return self.$client.getSourcesQuery(link.href);
      }
    );
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$getChanges
   * @methodOf spouses.types:constructor.Couple
   * @function
   * 
   * @description
   * Get change history for a couple relationship
   * The response includes the following convenience function
   *
   * - `getChanges()` - get the array of {@link changeHistory.types:constructor.Change Changes} from the response
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Couple_Relationship_Change_History_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/940x4gux/1/ Editable Example}
   *
   * @param {Object=} params: `count` is the number of change entries to return, `from` to return changes following this id
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  $getChanges: function(params, opts) { 
    var self = this;
    return self.$helpers.chainHttpPromises(
      self.$getLink('change-history'),
      function(link) {
        return self.$client.getChanges(link.href, params, opts);
      });
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$setHusband
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description NOTE: if you plan call this function within a few seconds of initializing the SDK, pass in a Person or a URL, not an id
   * @param {Person|string} husband person or URL or id
   * @return {Couple} this relationship
   */
  $setHusband: function(husband) {
    relHelpers.setMember.call(this, 'person1', husband);
    this.$husbandChanged = true;
    //noinspection JSValidateTypes
    return this;
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$setWife
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description NOTE: if you plan call this function within a few seconds of initializing the SDK, pass in a Person or a URL, not an id
   * @param {Person|string} wife person or URL or id
   * @return {Couple} this relationship
   */
  $setWife: function(wife) {
    relHelpers.setMember.call(this, 'person2', wife);
    this.$wifeChanged = true;
    //noinspection JSValidateTypes
    return this;
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$setFacts
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @param {Fact[]|Object[]} facts facts to set; if array elements are not Facts, they are passed into the Fact constructor
   * @param {string=} changeMessage change message to use for deleted facts if any
   * @return {Couple} this relationship
   */
  $setFacts: function(facts, changeMessage) {
    relHelpers.setFacts.call(this, 'facts', facts, changeMessage);
    //noinspection JSValidateTypes
    return this;
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$addFact
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @param {Fact|Object} value fact to add; if value is not a Fact, it is passed into the Fact constructor
   * @return {Couple} this relationship
   */
  $addFact: function(value) {
    relHelpers.addFact.call(this, 'facts', value);
    //noinspection JSValidateTypes
    return this;
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$deleteFact
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @param {Fact|string} value fact or fact id to remove
   * @param {String=} changeMessage change message
   * @return {Couple} this relationship
   */
  $deleteFact: function(value, changeMessage) {
    relHelpers.deleteFact.call(this, 'facts', value, changeMessage);
    //noinspection JSValidateTypes
    return this;
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$save
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description
   * Create a new relationship if this relationship does not have an id, or update the existing relationship
   *
   * {@link http://jsfiddle.net/LtphkL51/1/ Editable Example}
   *
   * @param {String=} changeMessage default change message to use when fact/deletion-specific changeMessage was not specified
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise of the relationship id, which is fulfilled after the relationship has been updated,
   * and if refresh is true, after the relationship has been read
   */
  $save: function(changeMessage, opts) {
    var postData = this.$client.createCouple();
    var isChanged = false;
    var crid = this.id;
    var self = this;

    // send husband and wife if new or either has changed
    if (!this.id || this.$husbandChanged || this.$wifeChanged) {
      postData.person1 = this.person1;
      postData.person2 = this.person2;
      isChanged = true;
    }

    // set global changeMessage
    if (changeMessage) {
      postData.attribution = self.$client.createAttribution(changeMessage);
    }

    utils.forEach(this.facts, function(fact) {
      if (!crid || !fact.id || fact.$changed) {
        relHelpers.addFact.call(postData, 'facts', fact);
        isChanged = true;
      }
    });

    var promises = [];

    // post update
    if (isChanged) {
      if (!crid) {
        postData.type = 'http://gedcomx.org/Couple'; // set type on new relationships
      }
      // as of 9 July 2014 it's possible to update relationships using the relationships endpoint,
      // but the way we're doing it is fine as well
      promises.push(self.$helpers.chainHttpPromises(
        self.$getCoupleUrl() ? self.$helpers.refPromise(self.$getCoupleUrl()) : self.$plumbing.getCollectionUrl('FSFT', 'relationships'),
        function(url) {
          // set url from id
          utils.forEach(['person1', 'person2'], function(role) {
            if (postData[role] && !postData[role].resource && postData[role].resourceId) {
              postData[role].resource = postData[role].resourceId;
            }
          });
          var promise = self.$plumbing.post(url, { relationships: [ postData ] },
            {}, opts, function(){
              return self.$getCoupleUrl() || promise.getResponseHeader('Location');
            });
          return promise;
        }));
    }

    // post deleted facts
    if (crid && this.$deletedFacts) {
      utils.forEach(this.$deletedFacts, function(value, key) {
        value = value || changeMessage; // default to global change message
        promises.push(self.$plumbing.del(key, value ? {'X-Reason' : value} : {}, opts));
      });
    }

    // wait for all promises to be fulfilled
    var promise = self.$helpers.promiseAll(promises).then(function(results) {
      var url = self.$getCoupleUrl() ? self.$getCoupleUrl() : results[0]; // if we're adding a new relationship, get id from the first (only) promise
      self.$helpers.extendHttpPromise(promise, promises[0]); // extend the first promise into the returned promise
      return url;
    });
    return promise;
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$delete
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description delete this relationship - see {@link spouses.functions:deleteCouple deleteCouple}
   * @param {string} changeMessage change message
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the relationship URL
   */
  $delete: function(changeMessage, opts) {
    return this.$client.deleteCouple(this.$getCoupleUrl(), changeMessage, opts);
  },

  /**
   * @ngdoc function
   * @name spouses.types:constructor.Couple#$restore
   * @methodOf spouses.types:constructor.Couple
   * @function
   * @description restore this relationship - see {@link spouses.functions:restoreCouple restoreCouple}
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the relationship URL
   */
  $restore: function(opts) {
    var self = this;
    return self.$helpers.chainHttpPromises(
      self.$getLink('restore'),
      function(link){
        return self.$client.restoreCouple(link.href, opts);
      }
    );
  }
});