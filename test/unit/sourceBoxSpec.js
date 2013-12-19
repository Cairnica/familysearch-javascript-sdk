define(['FamilySearch'], function(FamilySearch) {
  describe('Source Box', function() {
    it('user collections are returned from getCollectionsForUser', function() {
      FamilySearch.getCollectionsForUser('UID').then(function(response) {
        var collections = response.getCollections();
        expect(collections.length).toBe(1);
        expect(collections[0].id).toEqual('MMMM-MMM');
        expect(collections[0].title).toBeUndefined();
        expect(collections[0].size).toBeUndefined();
        expect(collections[0].getContributorId()).toBeUndefined(); // bad example data
      });
    });

    it('user collection is returned from getCollection', function() {
      FamilySearch.getCollection('sf-MMMM-MMM').then(function(response) {
        var collection = response.getCollection();
        expect(collection.id).toEqual('sf-MMMM-MMM');
        expect(collection.title).toBe('Name');
        expect(collection.size).toBeUndefined();
        expect(collection.getContributorId()).toBeUndefined(); // bad example data
      });
    });

    it('source descriptions are returned from getCollectionSourceDescriptions', function() {
      FamilySearch.getCollectionSourceDescriptions('CMMM-MMM', {start:2, count:1}).then(function(response) {
        var sourceDescriptions = response.getSourceDescriptions();
        expect(sourceDescriptions.length).toBe(1);
        expect(sourceDescriptions[0].id).toBe('MMMM-CCC');
        expect(sourceDescriptions[0].getTitle()).toBe('NEW TITLE');
        expect(sourceDescriptions[0].getCitation()).toBeUndefined();
        expect(sourceDescriptions[0].getText()).toBeUndefined();
        expect(sourceDescriptions[0].getContributorId()).toBeUndefined(); // bad example data
        expect(sourceDescriptions[0].getModified()).toBeUndefined(); // bad example data
      });
    });

    it('source descriptions for a user are returned from getCollectionSourceDescriptionsForUser', function() {
      FamilySearch.getCollectionSourceDescriptionsForUser('CCCC-CCC', {start:2, count:1}).then(function(response) {
        var sourceDescriptions = response.getSourceDescriptions();
        expect(sourceDescriptions.length).toBe(1);
        expect(sourceDescriptions[0].id).toBe('MMMM-CCC');
        expect(sourceDescriptions[0].getTitle()).toBe('NEW TITLE');
        expect(sourceDescriptions[0].getCitation()).toBeUndefined();
        expect(sourceDescriptions[0].getText()).toBeUndefined();
        expect(sourceDescriptions[0].getContributorId()).toBeUndefined(); // bad example data
        expect(sourceDescriptions[0].getModified()).toBeUndefined(); // bad example data
      });
    });
  });
});