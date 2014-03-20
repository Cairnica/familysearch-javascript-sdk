define(['FamilySearch'], function(FamilySearch) {
  describe('A person', function() {
    it('is updated in memory', function() {
      var person = new FamilySearch.Person();
      person.$addName('fulltext');
      expect(person.$getNames()[0].$getFullText()).toBe('fulltext');

      person = new FamilySearch.Person();
      person.$addName({givenName: 'given', surname: 'surname', fullText: 'fulltext', preferred: true});
      expect(person.$getPreferredName().$getFullText()).toBe('fulltext');
      expect(person.$getGivenName()).toBe('given');
      expect(person.$getSurname()).toBe('surname');

      person = new FamilySearch.Person();
      person.$addName(new FamilySearch.Name({givenName: 'given', surname: 'surname', fullText: 'fulltext', preferred: true}));
      expect(person.$getPreferredName().$getFullText()).toBe('fulltext');
      expect(person.$getGivenName()).toBe('given');
      expect(person.$getSurname()).toBe('surname');

      person = new FamilySearch.Person();
      var name = new FamilySearch.Name({givenName: 'given', surname: 'surname', fullText: 'fulltext', preferred: true});
      name.id = 'id';
      person.$addName(name);
      person.$deleteName(name, 'changeMessage');
      expect(person.$deletedConclusions['id']).toBe('changeMessage');

      person = new FamilySearch.Person();
      person.$addFact(new FamilySearch.Fact({type: 'http://gedcomx.org/Birth', date: 'date', place: 'place'}));
      expect(person.$getBirthDate()).toBe('date');
      expect(person.$getBirthPlace()).toBe('place');

      person = new FamilySearch.Person();
      var fact = new FamilySearch.Fact({type: 'http://gedcomx.org/Birth', date: 'date', place: 'place'});
      fact.id = 'id';
      person.$addFact(fact);
      person.$deleteFact(fact, 'changeMessage');
      expect(person.$deletedConclusions['id']).toBe('changeMessage');

      person = new FamilySearch.Person();
      person.$setGender('gender', 'changeMessage');
      expect(person.gender.type).toBe('gender');
      expect(person.gender.$changed).toBeTruthy();
      expect(person.gender.attribution.changeMessage).toBe('changeMessage');
    });

    it('is returned from getPerson', function() {
      FamilySearch.getPerson('PPPJ-MYZ').then(function(response) {
        var person = response.getPerson();
        expect(person.id).toBe('PPPJ-MYZ');
        expect(person.$getBirthDate()).toBe('3 Apr 1836');
        expect(person.$getBirthPlace()).toBe('Moscow, Russia');
        expect(person.$getDeathDate()).toBe('');
        expect(person.$getDeathPlace()).toBe('');
        expect(person.$getDisplayGender()).toBe('Male');
        expect(person.$getDisplayLifeSpan()).toBe('3 Apr 1836 - Dead');
        expect(person.$getDisplayName()).toBe('Alex Aleksandrova');
        expect(person.living).toBe(true);
        expect(person.$getGivenName()).toBe('Alex');
        expect(person.$getSurname()).toBe('Aleksandrova');
        expect(person.$getNames().length).toBe(1);
        var name = person.$getNames()[0];
        expect(name.id).toBe('name-id');
        expect(name.attribution.$getAgentId()).toBe('KNCV-RMZ');
        expect(name.type).toBe('http://gedcomx.org/BirthName');
        expect(name.$getNameFormsCount()).toBe(2);
        expect(name.$getFullText()).toBe('Alex Aleksandrova');
        expect(name.$getGivenName(1)).toBe('Анастасия');
        expect(name.$getSurname(0)).toBe('Aleksandrova');
        expect(person.$getFacts().length).toBe(2);
        var facts = person.$getFacts();
        expect(facts[0].id).toBe('born');
        expect(facts[0].attribution.$getAgentId()).toBe('RMQW-LPK');
        expect(facts[0].type).toBe('http://gedcomx.org/Birth');
        expect(facts[0].$getDate()).toBe('3 Apr 1836');
        expect(facts[0].$getFormalDate()).toBe('+1836');
        expect(facts[0].$getPlace()).toBe('Moscow, Russia');
        expect(facts[1].id).toBe('res');
        expect(facts[1].type).toBe('http://gedcomx.org/Residence');
      });
    });

    it('is returned with others from getMultiPerson', function() {
      FamilySearch.getMultiPerson(['PPPJ-MYZ','PPPJ-MYY']).then(function(response) {
        var person = response['PPPJ-MYZ'].getPerson();
        expect(person.id).toBe('PPPJ-MYZ');
        expect(person.$getDisplayName()).toBe('Alex Aleksandrova');
        expect(person.$getDisplayGender()).toBe('Male');

        person = response['PPPJ-MYY'].getPerson();
        expect(person.id).toBe('PPPJ-MYY');
        expect(person.$getDisplayName()).toBe('Alexa Aleksandrova');
        expect(person.$getDisplayGender()).toBe('Female');
      });
    });

    it('is returned with relationships from getPersonWithRelationships', function() {
      FamilySearch.getPersonWithRelationships('PW8J-MZ0').then(function(response) {
        expect(response.getPrimaryId()).toBe('PW8J-MZ0');
        expect(response.getPerson(response.getPrimaryId())).toBe(response.getPrimaryPerson());
        expect(response.getPrimaryPerson().$getDisplayName()).toBe('Alex Aleksandrova');
        expect(response.getFatherIds()).toEqual(['PW8J-MZ1']);
        expect(response.getMotherIds()).toEqual(['PW8J-GZ2']);
        expect(response.getSpouseIds()).toEqual(['PA65-HG3']);
        expect(response.getChildIds()).toEqual(['PS78-MH4']);
        expect(response.getChildIdsOf('PA65-HG3')).toEqual(['PS78-MH4']);
        expect(response.getChildIdsOf('FOO').length).toBe(0);
        expect(response.getParentRelationships().length).toBe(1);
        var rel = response.getParentRelationships()[0];
        expect(rel.id).toBe('PPPX-PP0');
        expect(rel.$getFatherId()).toBe('PW8J-MZ1');
        expect(rel.$getMotherId()).toBe('PW8J-GZ2');
        expect(rel.$getChildId()).toBe('PW8J-MZ0');
        expect(rel.$getFatherFacts().length).toBe(1);
        expect(rel.$getFatherFacts()[0].type).toBe('http://gedcomx.org/AdoptiveParent');
        expect(rel.$getMotherFacts().length).toBe(1);
        expect(rel.$getMotherFacts()[0].type).toBe('http://gedcomx.org/BiologicalParent');
        expect(response.getSpouseRelationships().length).toBe(1);
        rel = response.getSpouseRelationships()[0];
        expect(rel.id).toBe('C123-ABC');
        expect(rel.$getHusbandId()).toBe('PW8J-MZ0');
        expect(rel.$getWifeId()).toBe('PA65-HG3');
        expect(rel.$getFacts().length).toBe(0);
        expect(response.getSpouseRelationship('PA65-HG3').id).toBe('C123-ABC');
        expect(response.getSpouseRelationship('FOO')).toBeUndefined();
        expect(response.getChildRelationships().length).toBe(1);
        rel = response.getChildRelationships()[0];
        expect(rel.id).toBe('PPPY-PP0');
        expect(rel.$getFatherId()).toBe('PW8J-MZ0');
        expect(rel.$getMotherId()).toBe('PA65-HG3');
        expect(rel.$getChildId()).toBe('PS78-MH4');
        expect(rel.$getFatherFacts().length).toBe(1);
        expect(rel.$getFatherFacts()[0].type).toBe('http://gedcomx.org/AdoptiveParent');
        expect(rel.$getMotherFacts().length).toBe(1);
        expect(rel.$getMotherFacts()[0].type).toBe('http://gedcomx.org/BiologicalParent');
        expect(response.getChildRelationshipsOf('PA65-HG3')[0].id).toBe('PPPY-PP0');
        expect(response.getChildRelationshipsOf('FOO').length).toBe(0);
      });
    });

    it('is returned with populated relationships from getPersonWithRelationships with persons parameter', function() {
      FamilySearch.getPersonWithRelationships('KW7S-VQJ', {persons: true}).then(function(response) {
        expect(response.getFathers()[0].$getDisplayName()).toBe('Jens Christian Jensen');
        expect(response.getMothers()[0].$getDisplayName()).toBe('Ane Christensdr');
        expect(response.getPerson(response.getParentRelationships()[0].$getFatherId()).$getDisplayName()).toEqual('Jens Christian Jensen');
        expect(response.getSpouses()[0].id).toBe(response.getSpouseIds()[0]);
        expect(response.getSpouses()[0].id).toBe('KW7S-JB7');
        expect(response.getSpouses()[0].$getDisplayName()).toBe('Delilah Ann Smith');
        expect(response.getChildren()[0].$getDisplayName()).toEqual('Christian Ludvic Jensen');
        expect(response.getChildrenOf('KW7S-JB7')[0].$getDisplayName()).toEqual('Christian Ludvic Jensen');
        expect(response.getChildrenOf('FOO').length).toBe(0);
      });
    });

    it('change summary is returned from getPersonChangeSummary', function() {
      FamilySearch.getPersonChangeSummary('PID').then(function(response) {
        expect(response.getChanges()[0].id).toBe('12345');
        expect(response.getChanges()[0].published).toBe(1386006311124);
        expect(response.getChanges()[0].title).toBe('Change Summary 1');
        expect(response.getChanges()[0].updated).toBe(1386006311124);
      });
    });

    it('spouse relationships are returned from getSpouses', function() {
      FamilySearch.getSpouses('FJP-M4RK').then(function(response) {
        expect(response.getCoupleRelationships().length).toBe(1);
        var rel = response.getCoupleRelationships()[0];
        expect(rel.id).toBe('cid');
        expect(rel.$getHusbandId()).toBe('FJP-M4RK');
        expect(rel.$getWifeId()).toBe('JRW-NMSD');
        expect(rel.$getFacts().length).toBe(1);
        expect(rel.$getFacts()[0].$getDate()).toBe('June 1800');
        expect(response.getChildAndParentsRelationships().length).toBe(1);
        rel = response.getChildAndParentsRelationships()[0];
        expect(rel.id).toBe('PPPX-PP0');
        expect(rel.$getFatherFacts().length).toBe(1);
        expect(rel.$getFatherFacts()[0].type).toBe('http://gedcomx.org/AdoptiveParent');
        expect(rel.$getFatherFacts()[0] instanceof FamilySearch.Fact).toBeTruthy();
      });
    });

    it('parent relationships are returned from getParents', function() {
      FamilySearch.getParents('KW31-H9P').then(function(response) {
        expect(response.getChildAndParentsRelationships().length).toBe(1);
        var rel = response.getChildAndParentsRelationships()[0];
        expect(rel.id).toBe('MMMP-KWL');
        expect(rel.$getFatherId()).toBe('KW7V-Y32');
        expect(rel.$getMotherId()).toBe('KW72-8QM');
        expect(rel.$getChildId()).toBe('KW31-H9P');
        expect(rel.$getFatherFacts().length).toBe(1);
        expect(rel.$getFatherFacts()[0].$getDate()).toBe('1955');
        expect(rel.$getFatherFacts()[0].attribution.$getAgentId()).toBe('MMD8-3NT');
        expect(response.getCoupleRelationships().length).toBe(1);
        rel = response.getCoupleRelationships()[0];
        expect(rel.id).toBe('MMM7-129');
        expect(rel.facts.length).toBe(1);
        expect(rel.facts[0].$getPlace()).toBe('Minnesota, United States');
        expect(rel.facts[0].attribution.$getAgentId()).toBe('MMD8-3NT');
      });
    });

    it('child relationships are returned from getChildren', function() {
      FamilySearch.getChildren('PPP0-MP1').then(function(response) {
        expect(response.getChildAndParentsRelationships().length).toBe(2);
        var rel = response.getChildAndParentsRelationships()[0];
        expect(rel.id).toBe('PPP0-PP0');
        expect(rel.$getFatherId()).toBe('PPP0-MP1');
        expect(rel.$getChildId()).toBe('PPP0-PP3');
        expect(rel.$getFatherFacts().length).toBe(1);
        expect(rel.$getFatherFacts()[0].type).toBe('http://gedcomx.org/AdoptiveParent');
        expect(rel.$getFatherFacts()[0] instanceof FamilySearch.Fact).toBeTruthy();
        expect(rel.$getMotherFacts().length).toBe(0);
        expect(response.getPerson(rel.$getChildId()).$getPreferredName().$getFullText()).toBe('Anastasia Aleksandrova');
      });
    });

    it('is created', function() {
      var promise = new FamilySearch.Person()
        .$setGender('http://gedcomx.org/Female', '...change message...')
        .$addName({givenName: 'Anastasia', surname: 'Aleksandrova'})
        .$addFact({type: 'http://gedcomx.org/Birth', date: '3 Apr 1836', formalDate: '+1836-04-03', place: 'Moscow, Russia', changeMessage: '...change message...'})
        .$save('...default change message...');
      promise.then(function(response) {
        var request = promise.getRequest();
        //noinspection JSUnresolvedFunction
        expect(request.data).toEqualJson({
          'persons' : [ {
            'gender' : {
              'type' : 'http://gedcomx.org/Female',
              'attribution' : {
                'changeMessage' : '...change message...'
              }
            },
            'names' : [ {
              'nameForms' : [ {
                'parts' : [ {
                  'type' : 'http://gedcomx.org/Given',
                  'value' : 'Anastasia'
                }, {
                  'type' : 'http://gedcomx.org/Surname',
                  'value' : 'Aleksandrova'
                } ],
                'fullText' : 'Anastasia Aleksandrova'
              } ],
              'preferred' : true,
              'attribution' : {
                'changeMessage' : '...default change message...'
              },
              'type' : 'http://gedcomx.org/BirthName'
            } ],
            'facts' : [ {
              'type' : 'http://gedcomx.org/Birth',
              'date' : {
                'original' : '3 Apr 1836',
                'formal' : '+1836-04-03'
              },
              'place' : {
                'original' : 'Moscow, Russia'
              },
              'attribution' : {
                'changeMessage' : '...change message...'
              }
            } ]
          } ]
        });
        expect(promise.getStatusCode()).toBe(201);
        expect(response).toBe('12345');
      });
    });

    it('conclusion is added', function() {
      var person = new FamilySearch.Person();
      person.id = '12345';
      var promise = person
        .$addFact({type: 'http://gedcomx.org/Birth', date: '3 Apr 1836', formalDate: '+1836-04-03', place: 'Moscow, Russia', changeMessage: '...change message...'})
        .$save();
      promise.then(function(response) {
        var request = promise.getRequest();
        //noinspection JSUnresolvedFunction
        expect(request.data).toEqualJson({
          'persons' : [ {
            'id' : '12345',
            'facts' : [ {
              'type' : 'http://gedcomx.org/Birth',
              'date' : {
                'original' : '3 Apr 1836',
                'formal' : '+1836-04-03'
              },
              'place' : {
                'original' : 'Moscow, Russia'
              },
              'attribution' : {
                'changeMessage' : '...change message...'
              }
            } ]
          } ]
        });
        expect(promise.getStatusCode()).toBe(204);
        expect(response).toBe('12345');
      });
    });

    function createMockPerson(pid, fid) {
      var person = new FamilySearch.Person();
      person.id = pid;
      var fact = new FamilySearch.Fact({type: 'http://gedcomx.org/Birth', date: '3 Apr 1836', formalDate: '+1836-04-03'});
      fact.id = fid;
      fact.$changed = false;
      person.$addFact(fact);
      return person;
    }

    it('conclusion is updated', function() {
      var person = createMockPerson('12345', 'ABCDE');
      // set birth place
      person.$getBirth().$setPlace('Moscow, Russia').$setChangeMessage('...change message...');
      var promise = person.$save();
      promise.then(function(response) {
        var request = promise.getRequest();
        //noinspection JSUnresolvedFunction
        expect(request.data).toEqualJson({
          'persons' : [ {
            'id' : '12345',
            'facts' : [ {
              'id' : 'ABCDE',
              'type' : 'http://gedcomx.org/Birth',
              'date' : {
                'original' : '3 Apr 1836',
                'formal' : '+1836-04-03'
              },
              'place' : {
                'original' : 'Moscow, Russia'
              },
              'attribution' : {
                'changeMessage' : '...change message...'
              }
            } ]
          } ]
        });
        expect(promise.getStatusCode()).toBe(204);
        expect(response).toBe('12345');
      });
    });

    it('conclusion is deleted', function() {
      var person = createMockPerson('12345', '1');
      // delete fact
      var promise = person
        .$deleteFact(person.$getFacts()[0])
        .$save('...change message...');
      promise.then(function(response) {
        expect(promise.getStatusCode()).toBe(204);
        expect(promise.getRequest().headers['X-Reason']).toBe('...change message...');
        expect(response).toBe('12345');
      });
    });

    it('is deleted', function() {
      var promise = createMockPerson('PPPJ-MYZ','fid')
        .$delete('Reason for delete');
      promise.then(function(response) {
        expect(promise.getStatusCode()).toBe(204);
        expect(promise.getRequest().headers['X-Reason']).toBe('Reason for delete');
        expect(response).toBe('PPPJ-MYZ');
      });
    });

    it('preferred spouse is read', function() {
      FamilySearch.getPreferredSpouse('PPPJ-MYY').then(function(response) {
        expect(response).toBe('12345');
      });
    });

    it('preferred spouse is set', function() {
      var promise = FamilySearch.setPreferredSpouse('PPPJ-MYY', '12345');
      promise.then(function(response) {
        var request = promise.getRequest();
        expect(request.headers['Location']).toBe('https://sandbox.familysearch.org/platform/tree/couple-relationships/12345');
        expect(promise.getStatusCode()).toBe(204);
        expect(response).toBe('PPPJ-MYY');
      });
    });

    it('preferred spouse is deleted', function() {
      var promise = FamilySearch.deletePreferredSpouse('PPPJ-MYY');
      promise.then(function(response) {
        expect(promise.getStatusCode()).toBe(204);
        expect(response).toBe('PPPJ-MYY');
      });
    });

    it( 'preferred parents are read', function() {
      FamilySearch.getPreferredParents('PPPJ-MYY').then(function(response) {
        expect(response).toBe('12345');
      });
    });

    it('preferred parents are set', function() {
      var promise = FamilySearch.setPreferredParents('PPPJ-MYY', '12345');
      promise.then(function(response) {
        var request = promise.getRequest();
        expect(request.headers['Location']).toBe('https://sandbox.familysearch.org/platform/tree/child-and-parents-relationships/12345');
        expect(promise.getStatusCode()).toBe(204);
        expect(response).toBe('PPPJ-MYY');
      });
    });

    it('preferred parents are deleted', function() {
      var promise = FamilySearch.deletePreferredParents('PPPJ-MYY');
      promise.then(function(response) {
        expect(promise.getStatusCode()).toBe(204);
        expect(response).toBe('PPPJ-MYY');
      });
    });

  });
});