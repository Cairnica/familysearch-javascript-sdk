var FS = require('./../FamilySearch'),
    utils = require('./../utils');

/**
 * @ngdoc overview
 * @name places
 * @description
 * Functions for interacting with the FamilySearch Place Authority
 *
 * {@link https://familysearch.org/developers/docs/api/resources#places FamilySearch API Docs}
 */
 
/**
 * @ngdoc function
 * @name places.functions:getPlace
 * @function
 *
 * @description
 * Get a place.
 *
 * - `getPlace()` - get the {@link places.types:constructor.PlaceDescription PlaceDescription} from the response
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_resource API Docs}
 * 
 * {@link http://jsfiddle.net/sq78dutL/ Editable Example}
 *
 * @param {String} url full url of a place
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlace = function(url, opts) {
  var self = this;
  return self.plumbing.get(url, {}, {}, opts,
    utils.compose(
      utils.objectExtender({
        getPlace: function() { 
          return utils.maybe(this.places)[0]; 
        }
      }),
      function(response){
        utils.forEach(response.places, function(place, index, obj){
          obj[index] = self.createPlaceDescription(place);
        });
        return response;
      }
    ));
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceDescription
 * @function
 *
 * @description
 * Get a place.
 *
 * - `getPlaceDescription()` - get the {@link places.types:constructor.PlaceDescription PlaceDescription} from the response
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_Description_resource API Docs}
 * 
 * {@link http://jsfiddle.net/edhbx4L1/1/ Editable Example}
 *
 * @param {String} url full url of the place description
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlaceDescription = function(url, opts) {
  var self = this;
  return self.plumbing.get(url, {}, {}, opts,
    utils.compose(
      utils.objectExtender({
        getPlaceDescription: function() { 
          return utils.maybe(this.places)[0]; 
        }
      }),
      function(response){
        var placesMap = {};
        
        utils.forEach(response.places, function(place, index, obj){
          obj[index] = placesMap[place.id] = self.createPlaceDescription(place);
        });
        
        utils.forEach(response.places, function(place){
          if(place.data.jurisdiction && place.data.jurisdiction.resource){
            var jurisdictionId = place.data.jurisdiction.resource.substring(1);
            if(placesMap[jurisdictionId]){
              place.setJurisdiction(placesMap[jurisdictionId]);
            }
          }
        });
        
        return response;
      }
    ));
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceSearch
 * @function
 *
 * @description
 * Search for a place.
 *
 * - `getSearchResults()` - get an array of {@link places.types:constructor.PlacesSearchResult PlacesSearchResults} from the response.
 * 
 * __Search Parameters__
 * 
 * * `start` - The index of the first search result for this page of results.
 * * `count` - The number of search results per page.
 * * `name`
 * * `partialName`
 * * `date`
 * * `typeId`
 * * `typeGroupId`
 * * `parentId`
 * * `latitude`
 * * `longitude`
 * * `distance`
 * 
 * Read the {@link https://familysearch.org/developers/docs/api/places/Places_Search_resource API Docs} for more details on how to use the parameters.
 * 
 * {@link http://jsfiddle.net/80xcpfps/2/ Editable Example}
 *
 * @param {String} id of the place description
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlacesSearch = function(params, opts) {
  var self = this;
  return self.helpers.chainHttpPromises(
    self.plumbing.getCollectionUrl('FSPA', 'place-search'),
    function(url){
      return self.plumbing.get(url, utils.removeEmptyProperties({
        q: utils.searchParamsFilter(utils.removeEmptyProperties(utils.extend({}, params))),
        start: params.start,
        count: params.count
      }), {'Accept': 'application/x-gedcomx-atom+json'}, opts,
        utils.compose(
          utils.objectExtender({
            getSearchResults: function() { 
              return utils.maybe(this.entries); 
            }
          }),
          function(response){
            utils.forEach(response.entries, function(entry, i, obj){
              obj[i] = self.createPlacesSearchResult(entry);
            });
            return response;
          }
        )
      );
    }
  );
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceDescriptionChildren
 * @function
 *
 * @description
 * Get the children of a Place Description. Use {@link places.functions:getPlaceSearch getPlacesSearch()} to filter by type, date, and more.
 *
 * - `getChildren()` - get an array of the {@link places.types:constructor.PlaceDescription PlaceDescriptions} (children) from the response
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_Description_Children_resource API Docs}
 * 
 * {@link http://jsfiddle.net/xwpsLm46/ Editable Example}
 *
 * @param {String} url full url for the place descriptions children endpoint
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlaceDescriptionChildren = function(url, opts) {
  var self = this;
  return self.plumbing.get(url, {}, {}, opts,
    utils.compose(
      utils.objectExtender({
        getChildren: function() { 
          return utils.maybe(this.places); 
        }
      }),
      function(response){
        utils.forEach(response.places, function(place, index, obj){
          obj[index] = self.createPlaceDescription(place);
        });
        return response;
      }
    ));
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceType
 * @function
 *
 * @description
 * Get a place.
 *
 * - `getPlaceType()` - get the {@link vocabularies.types:constructor.VocabularyElement VocabularyElement} from the response
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_Type_resource API Docs}
 * 
 * {@link http://jsfiddle.net/gry2tgna/ Editable Example}
 *
 * @param {String} id of the place
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlaceType = function(typeId, opts) {
  var self = this;
  return self.helpers.chainHttpPromises(
    self.plumbing.getCollectionUrl('FSPA', 'place-type', {ptid: typeId}),
    function(url){
      return self.plumbing.get(url, {}, {'Accept': 'application/ld+json'}, opts,
        utils.compose(
          utils.objectExtender({
            getPlaceType: function() { 
              return self.createVocabularyElement(this); 
            }
          })
        )
      );
    }
  );
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceTypes
 * @function
 *
 * @description
 * Get a list of all available Place Types.
 *
 * - `getList()` - get the {@link vocabularies.types:constructor.VocabularyList VocabularyList} from the response
 * - `getPlaceTypes()` - get an array of the {@link vocabularies.types:constructor.VocabularyElement VocabularyElements} from the response
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_Types_resource API Docs}
 * 
 * {@link http://jsfiddle.net/tjyf4xk8/1/ Editable Example}
 *
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlaceTypes = function(opts) {
  var self = this;
  return self.helpers.chainHttpPromises(
    self.plumbing.getCollectionUrl('FSPA', 'place-types'),
    function(url){
      return self.plumbing.get(url, {}, {'Accept': 'application/ld+json'}, opts,
        utils.compose(
          utils.objectExtender({
            getList: function() {
              return self.createVocabularyList(this);
            },
            getPlaceTypes: function() { 
              return this.getList().getElements(); 
            }
          })
        )
      );
    }
  );
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceTypeGroup
 * @function
 *
 * @description
 * Get a Place Type Group which includes a list of Places Types in the group.
 *
 * - `getList()` - get the {@link vocabularies.types:constructor.VocabularyList VocabularyList} (Place Type Group) from the response
 * - `getPlaceTypes()` - get an array of the {@link vocabularies.types:constructor.VocabularyElement VocabularyElements} (Place Types) in the group
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_Types_resource API Docs}
 * 
 * {@link http://jsfiddle.net/85sn2dbv/1/ Editable Example}
 *
 * @param {String} id of the place type group
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlaceTypeGroup = function(groupId, opts) {
  var self = this;
  return self.helpers.chainHttpPromises(
    self.plumbing.getCollectionUrl('FSPA', 'place-type-group', {ptgid: groupId}),
    function(url){
      return self.plumbing.get(url, {}, {'Accept': 'application/ld+json'}, opts,
        utils.compose(
          utils.objectExtender({
            getList: function() {
              return self.createVocabularyList(this);
            },
            getPlaceTypes: function() { 
              return this.getList().getElements(); 
            }
          })
        )
      );
    }
  );
};

/**
 * @ngdoc function
 * @name places.functions:getPlaceTypeGroups
 * @function
 *
 * @description
 * Get a list of all available Place Types.
 *
 * - `getList()` - get the {@link vocabularies.types:constructor.VocabularyList VocabularyList} from the response
 * - `getPlaceTypeGroups()` - get an array of the {@link vocabularies.types:constructor.VocabularyElement VocabularyElements} from the response
 *
 * {@link https://familysearch.org/developers/docs/api/places/Place_Type_Groups_resource API Docs}
 * 
 * {@link http://jsfiddle.net/zawzfh82/1/ Editable Example}
 *
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getPlaceTypeGroups = function(opts) {
  var self = this;
  return self.helpers.chainHttpPromises(
    self.plumbing.getCollectionUrl('FSPA', 'place-type-groups'),
    function(url){
      return self.plumbing.get(url, {}, {'Accept': 'application/ld+json'}, opts,
        utils.compose(
          utils.objectExtender({
            getList: function() {
              return self.createVocabularyList(this);
            },
            getPlaceTypeGroups: function() { 
              return this.getList().getElements(); 
            }
          })
        )
      );
    }
  );
};