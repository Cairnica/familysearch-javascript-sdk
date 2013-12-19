define(['FamilySearch'], function(FamilySearch) {
  describe('Source', function() {
    it('references are returned from getPersonSourceReferences', function() {
      FamilySearch.getPersonSourceRefs('PPPP-PPP').then(function(response) {
        var sourceRefs = response.getSourceRefs();
        expect(sourceRefs[0].getTagNames()).toEqual(['http://gedcomx.org/Name', 'http://gedcomx.org/Gender', 'http://gedcomx.org/Birth']);
        expect(sourceRefs[1].getSourceDescriptionId()).toBe('BBBB-BBB');
        expect(sourceRefs[1].getTagNames().length).toBe(0);
        expect(sourceRefs[1].getContributorId()).toBe('UUUU-UUU');
        expect(sourceRefs[1].getModified()).toBe(987654321);
        expect(sourceRefs[1].getChangeMessage()).toBe('Dates and location match with other sources.');
      });
    });

    it('description is returned from getSourceDescription', function() {
      FamilySearch.getSourceDescription('MMMM-MMM').then(function(response) {
        var sourceDesc = response.getSourceDescription();
        expect(sourceDesc.id).toBe('MMMM-MMM');
        expect(sourceDesc.about).toBe('https://familysearch.org/pal:/MM9.1.1/M9PJ-2JJ');
        expect(sourceDesc.getCitation()).toBe('"United States Census, 1900." database and digital images, FamilySearch (https://familysearch.org/: accessed 17 Mar 2012), Ethel Hollivet, 1900; citing United States Census Office, Washington, D.C., 1900 Population Census Schedules, Los Angeles, California, population schedule, Los Angeles Ward 6, Enumeration District 58, p. 20B, dwelling 470, family 501, FHL microfilm 1,240,090; citing NARA microfilm publication T623, roll 90.');
        expect(sourceDesc.getTitle()).toBe('1900 US Census, Ethel Hollivet');
        expect(sourceDesc.getText()).toBe('Ethel Hollivet (line 75) with husband Albert Hollivet (line 74); also in the dwelling: step-father Joseph E Watkins (line 72), mother Lina Watkins (line 73), and grandmother -- Lina\'s mother -- Mary Sasnett (line 76).  Albert\'s mother and brother also appear on this page -- Emma Hollivet (line 68), and Eddie (line 69).');
        expect(sourceDesc.getContributorId()).toBeUndefined();
        expect(sourceDesc.getModified()).toBeUndefined();
      });
    });

    it('references are returned from getCoupleSourceRefs', function() {
      FamilySearch.getCoupleSourceRefs('RRRR-RRR').then(function(response) {
        var sourceRefs = response.getSourceRefs();
        expect(sourceRefs[0].getTagNames()).toEqual(['http://gedcomx.org/Name', 'http://gedcomx.org/Gender', 'http://gedcomx.org/Birth']);
        expect(sourceRefs[1].getSourceDescriptionId()).toBe('BBBB-BBB');
        expect(sourceRefs[1].getTagNames().length).toBe(0);
        expect(sourceRefs[1].getContributorId()).toBe('UUUU-UUU');
        expect(sourceRefs[1].getModified()).toBe(987654321);
        expect(sourceRefs[1].getChangeMessage()).toBe('Dates and location match with other sources.');
      });
    });

    it('references are returned from getChildAndParentsSourceRefs', function() {
      FamilySearch.getChildAndParentsSourceRefs('RRRR-RRR').then(function(response) {
        var sourceRefs = response.getSourceRefs();
        expect(sourceRefs[0].getTagNames()).toEqual(['http://gedcomx.org/Name', 'http://gedcomx.org/Gender', 'http://gedcomx.org/Birth']);
        expect(sourceRefs[1].getSourceDescriptionId()).toBe('BBBB-BBB');
        expect(sourceRefs[1].getTagNames().length).toBe(0);
        expect(sourceRefs[1].getContributorId()).toBe('UUUU-UUU');
        expect(sourceRefs[1].getModified()).toBe(987654321);
        expect(sourceRefs[1].getChangeMessage()).toBe('Dates and location match with other sources.');
      });
    });

    it('references are returned from getSourceRefsQuery', function() {
      FamilySearch.getSourceRefsQuery('MM93-JFK').then(function(response) {
        expect(response.getPersonIdSourceRefs()[0].id).toBe('KW7V-Y32');
        expect(response.getPersonIdSourceRefs()[0].getSourceRef().id).toBe('MMM9-NNG');
        expect(response.getPersonIdSourceRefs()[0].getSourceRef().getSourceDescriptionId()).toBe('MM93-JFK');
        expect(response.getCoupleIdSourceRefs()[0].id).toBe('MMM7-12S');
        expect(response.getCoupleIdSourceRefs()[0].getSourceRef().id).toBe('MMMM-S3D');
        expect(response.getCoupleIdSourceRefs()[0].getSourceRef().getSourceDescriptionId()).toBe('MM93-JFK');
        expect(response.getChildAndParentsIdSourceRefs()[0].id).toBe('MMMP-KN5');
        expect(response.getChildAndParentsIdSourceRefs()[0].getSourceRef().id).toBe('MMMM-S36');
        expect(response.getChildAndParentsIdSourceRefs()[0].getSourceRef().getSourceDescriptionId()).toBe('MM93-JFK');
      });
    });
  });
});