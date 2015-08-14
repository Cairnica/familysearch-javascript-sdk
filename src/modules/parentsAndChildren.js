var FS = require('../FamilySearch'),
    utils = require('../utils'),
    maybe = utils.maybe;
    
/**
 * @ngdoc overview
 * @name parentsAndChildren
 * @description
 * Functions related to parents and children relationships
 *
 * {@link https://familysearch.org/developers/docs/api/resources#parents-and-children FamilySearch API Docs}
 */

var childAndParentsConvenienceFunctions = {
  getRelationship: function() { return maybe(this.childAndParentsRelationships)[0]; },
  getPerson:       function(id) { return utils.find(this.persons, {id: id}); }
};

/**
 * @ngdoc function
 * @name parentsAndChildren.functions:getChildAndParents
 * @function
 *
 * @description
 * Get information about a child and parents relationship.
 * The response includes the following convenience functions
 *
 * - `getRelationship()` - a {@link parentsAndChildren.types:constructor.ChildAndParents ChildAndParents} relationship
 * - `getPerson(pid)` - if the `persons` parameter has been set, this function will return a
 * {@link person.types:constructor.Person Person} for a person id in the relationship
 *
 * {@link https://familysearch.org/developers/docs/api/tree/Child-and-Parents_Relationship_resource FamilySearch API Docs}
 *
 * {@link http://jsfiddle.net/swk1pmo7/10/ Editable Example}
 *
 * @param {String} url full URL of the child-and-parents relationship
 * @param {Object=} params set `persons` true to return a person object for each person in the relationship,
 * which you can access using the `getPerson(id)` convenience function.
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the response
 */
FS.prototype.getChildAndParents = function(url, params, opts) {
  var self = this;
  return self.plumbing.get(url, params, {'Accept': 'application/x-fs-v1+json'}, opts,
    utils.compose(
      utils.objectExtender(childAndParentsConvenienceFunctions),
      function(response){
        utils.forEach(response.persons, function(person, index, obj){
          obj[index] = self.createPerson(person);
        });
        utils.forEach(response.childAndParentsRelationships, function(rel, index, obj){
          obj[index] = self.createChildAndParents(rel);
        });
        return response;
      }
    ));
};

/**
 * @ngdoc function
 * @name parentsAndChildren.functions:deleteChildAndParents
 * @function
 *
 * @description
 * Delete the specified relationship
 *
 * {@link https://familysearch.org/developers/docs/api/tree/Child-and-Parents_Relationship_resource FamilySearch API Docs}
 *
 * {@link http://jsfiddle.net/hguctxyv/1/ Editable Example}
 *
 * @param {string} url full URL of the child-and-parents relationship
 * @param {string} changeMessage reason for the deletion
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the relationship id/URL
 */
FS.prototype.deleteChildAndParents = function(url, changeMessage, opts) {
  var self = this;
  var headers = {'Content-Type': 'application/x-fs-v1+json'};
  if (changeMessage) {
    headers['X-Reason'] = changeMessage;
  }
  return self.plumbing.del(url, headers, opts, function() {
    return url;
  });
};

/**
 * @ngdoc function
 * @name parentsAndChildren.functions:restoreChildAndParents
 * @function
 *
 * @description
 * Restore a deleted child and parents relationship
 *
 * {@link https://familysearch.org/developers/docs/api/tree/Child-and-Parents_Relationship_Restore_resource FamilySearch API Docs}
 * 
 * {@link http://jsfiddle.net/3n4ro8jd/1/ Editable Example}
 *
 * @param {string} url full URL of the child-and-parents relationship
 * @param {string} changeMessage reason for the deletion
 * @param {Object=} opts options to pass to the http function specified during init
 * @return {Object} promise for the relationship id/URL
 */
FS.prototype.restoreChildAndParents = function(url, opts) {
  return this.plumbing.post(url, null, {'Content-Type': 'application/x-fs-v1+json'}, opts, function() {
    return url;
  });
};
