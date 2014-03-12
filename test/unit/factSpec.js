define(['FamilySearch'], function(FamilySearch) {
  describe('A Fact', function() {
    it('is constructed from an object', function() {
      var fact = new FamilySearch.Fact({type: 'type', date: 'date', formalDate: 'formalDate',
                                        place: 'place', normalizedPlace: 'normalizedPlace', normalizedPlaceId: 'normalizedPlaceId',
                                        changeMessage: 'changeMessage'});
      expect(fact.type).toBe('type');
      expect(fact.$getDate()).toBe('date');
      expect(fact.$getFormalDate()).toBe('formalDate');
      expect(fact.$getPlace()).toBe('place');
      expect(fact.$getNormalizedPlace()).toBe('normalizedPlace');
      expect(fact.$getNormalizedPlaceId()).toBe('normalizedPlaceId');
      expect(fact.attribution.changeMessage).toBe('changeMessage');
    });

    it('is updated correctly', function() {
      var fact = new FamilySearch.Fact();
      fact.$setType('type');
      expect(fact.type).toBe('type');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      fact.$setDate('6 Mar 2014');
      expect(fact.$getDate()).toBe('6 Mar 2014');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      fact.$setDate({date: '6 Mar 2014', formalDate: '+2014-03-06'});
      expect(fact.$getDate()).toBe('6 Mar 2014');
      expect(fact.$getFormalDate()).toBe('+2014-03-06');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      var date = new FamilySearch.Date();
      date.original = '6 Mar 2014';
      date.normalized = '6 March 2014';
      fact.$setDate(date);
      expect(fact.$getDate()).toBe('6 Mar 2014');
      expect(fact.$getFormalDate()).toBe('+2014-03-06');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      fact.$setPlace('place');
      expect(fact.$getPlace()).toBe('place');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      fact.$setPlace({place: 'place', normalizedPlace: 'normalizedPlace', normalizedPlaceId: 'normalizedPlaceId'});
      expect(fact.$getPlace()).toBe('place');
      expect(fact.$getNormalizedPlace()).toBe('normalizedPlace');
      expect(fact.$getNormalizedPlaceId()).toBe('normalizedPlaceId');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      var place = new FamilySearch.Place();
      place.original = 'place';
      place.id = 'normalizedPlaceId';
      place.normalized = ['normalizedPlace'];
      fact.$setPlace(place);
      expect(fact.$getPlace()).toBe('place');
      expect(fact.$getNormalizedPlace()).toBe('normalizedPlace');
      expect(fact.$getNormalizedPlaceId()).toBe('normalizedPlaceId');
      expect(fact.$changed).toBe(true);

      fact = new FamilySearch.Fact();
      fact.$setChangeMessage('changeMessage');
      expect(fact.attribution.changeMessage).toBe('changeMessage');
    });
  });
});
