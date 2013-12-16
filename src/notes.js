define([
  'helpers',
  'plumbing'
], function(helpers, plumbing) {
  /**
   * @ngdoc overview
   * @name notes
   * @description
   * Functions related to notes
   *
   * {@link https://familysearch.org/developers/docs/api/resources#notes FamilySearch API Docs}
   */

  var maybe = helpers.maybe; // shorthand

  var exports = {};

  /**
   * @ngdoc function
   * @name notes.functions:getPersonNoteRefs
   * @function
   *
   * @description
   * Get note references for a person
   * The response includes the following convenience function
   *
   * - `getNoteRefs()` - get the array of note references from the response; each has an `id` and a `subject`;
   * pass the `id` into {@link notes.functions:getPersonNote getPersonNote} for more information
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Person_Notes_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/3enGw/ editable example}
   *
   * @param {String} id of the person to read
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  exports.getPersonNoteRefs = function(id, params, opts) {
    return plumbing.get('/platform/tree/persons/'+encodeURI(id)+'/notes', params, {}, opts,
      helpers.objectExtender({getNoteRefs: function() { return maybe(maybe(this.persons)[0]).notes || []; }}));
  };

  /**
   * @ngdoc function
   * @name notes.functions:getPersonNote
   * @function
   *
   * @description
   * Get information about a note
   * The response includes the following convenience function
   *
   * - `getNote()` - returns an object with the following *note convenience functions*:
   *
   * ###Note convenience functions
   * - `getNoteId()`
   * - `getSubject()`
   * - `getText()`
   * - `getContributorId()`
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Person_Note_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/96EkL/ editable example}
   *
   * @param {String} pid of the person
   * @param {String} nid of the note
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  exports.getPersonNote = function(pid, nid, params, opts) {
    return plumbing.get('/platform/tree/persons/'+encodeURI(pid)+'/notes/'+encodeURI(nid), params, {}, opts,
      helpers.compose(
        helpers.objectExtender({getNote: function() { return maybe(maybe(maybe(this.persons)[0]).notes)[0]; }}),
        helpers.objectExtender(noteConvenienceFunctions, function(response) {
          return maybe(maybe(response.persons)[0]).notes;
        })
      ));
  };

  var noteConvenienceFunctions = {
    getNoteId:   function() { return this.id; },
    getSubject:  function() { return this.subject; },
    getText:     function() { return this.text; },
    getContributorId: function() { return maybe(maybe(this.attribution).contributor).resourceId; }
  };

  /**
   * @ngdoc function
   * @name notes.functions:getCoupleNoteRefs
   * @function
   *
   * @description
   * Get the note references for a couple relationship
   * The response includes the following convenience function
   *
   * - `getNoteRefs()` - get the array of note references from the response; each has an `id` and a `subject`;
   * pass the `id` into {@link notes.functions:getCoupleNote getCoupleNote} for more information
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Couple_Relationship_Notes_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/qe2dc/ editable example}
   *
   * @param {String} id of the couple relationship to read
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  exports.getCoupleNoteRefs = function(id, params, opts) {
    return plumbing.get('/platform/tree/couple-relationships/'+encodeURI(id)+'/notes', params, {}, opts,
      helpers.objectExtender({getNoteRefs: function() { return maybe(maybe(this.relationships)[0]).notes || []; }}));
  };

  /**
   * @ngdoc function
   * @name notes.functions:getCoupleNote
   * @function
   *
   * @description
   * Get information about a couple relationship note
   * The response includes the following convenience function
   *
   * - `getNote()` - returns an object with *note convenience functions*
   * as described for {@link notes.functions:getPersonNote getPersonNote}
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Couple_Relationship_Note_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/T7xj2/ editable example}
   *
   * @param {String} crid of the couple relationship
   * @param {String} nid of the note
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  exports.getCoupleNote = function(crid, nid, params, opts) {
    return plumbing.get('/platform/tree/couple-relationships/'+encodeURI(crid)+'/notes/'+encodeURI(nid), params, {}, opts,
      helpers.compose(
        helpers.objectExtender({getNote: function() { return maybe(maybe(maybe(this.relationships)[0]).notes)[0]; }}),
        helpers.objectExtender(noteConvenienceFunctions, function(response) {
          return maybe(maybe(response.relationships)[0]).notes;
        })
      ));
  };

  /**
   * @ngdoc function
   * @name notes.functions:getChildAndParentsNoteRefs
   * @function
   *
   * @description
   * Get the note references for a child and parents relationship
   * The response includes the following convenience function
   *
   * - `getNoteRefs()` - get the array of note references from the response; each has an `id` and a `subject`;
   * pass the `id` into {@link notes.functions:getChildAndParentsNote getChildAndParentsNote} for more information
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Child-and-Parents_Relationship_Notes_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ/SV8Hs/ editable example}
   *
   * @param {String} id of the child and parents relationship to read
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  exports.getChildAndParentsNoteRefs = function(id, params, opts) {
    return plumbing.get('/platform/tree/child-and-parents-relationships/'+encodeURI(id)+'/notes', params, {}, opts,
      helpers.objectExtender({getNoteRefs: function() { return maybe(maybe(this.childAndParentsRelationships)[0]).notes || []; }}));
  };

  /**
   * @ngdoc function
   * @name notes.functions:getChildAndParentsNote
   * @function
   *
   * @description
   * Get information about a child and parents relationship note
   * The response includes the following convenience function
   *
   * - `getNote()` - returns an object with *note convenience functions*
   * as described for {@link notes.functions:getPersonNote getPersonNote}
   *
   * {@link https://familysearch.org/developers/docs/api/tree/Child-and-Parents_Relationship_Note_resource FamilySearch API Docs}
   *
   * {@link http://jsfiddle.net/DallanQ// editable example}
   *
   * @param {String} caprid of the child and parents relationship
   * @param {String} nid of the note
   * @param {Object=} params currently unused
   * @param {Object=} opts options to pass to the http function specified during init
   * @return {Object} promise for the response
   */
  exports.getChildAndParentsNote = function(caprid, nid, params, opts) {
    return plumbing.get('/platform/tree/child-and-parents-relationships/'+encodeURI(caprid)+'/notes/'+encodeURI(nid), params, {}, opts,
      helpers.compose(
        helpers.objectExtender({getNote: function() { return maybe(maybe(maybe(this.childAndParentsRelationships)[0]).notes)[0]; }}),
        helpers.objectExtender(noteConvenienceFunctions, function(response) {
          return maybe(maybe(response.childAndParentsRelationships)[0]).notes;
        })
      ));
  };

  return exports;
});
