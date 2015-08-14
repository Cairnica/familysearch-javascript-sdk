describe('Memory', function() {
  
  it('references are returned from getMemoryPersonaRefs', function(done) {
    FS.getMemoryPersonaRefs('https://familysearch.org/platform/tree/persons/PPPP-PPP/memory-references').then(function(response) {
      var personaRefs = response.getMemoryPersonaRefs();
      expect(personaRefs.length).toBe(2);
      expect(personaRefs[0].resource).toBe('https://familysearch.org/platform/memories/memories/ARXX-MMM/personas/1083');
      expect(personaRefs[0].resourceId).toBe('1083');
      expect(personaRefs[0].$personId).toBe('PPPP-PPP');
      expect(personaRefs[0].$getMemoryUrl()).toBe('https://familysearch.org/platform/memories/memories/ARXX-MMM');
      personaRefs[0].$getMemory().then(function(response) {
        var memory = response.getMemory();
        expect(memory.id).toBe('ARXX-MMM');
        done();
      });
    });
  });

  it('is returned from getMemory', function(done) {
    FS.getMemory('https://familysearch.org/platform/memories/memories/ARXX-MMM').then(function(response) {
      var memory = response.getMemory();
      expect(memory.id).toBe('ARXX-MMM');
      expect(memory.mediaType).toBe('image/jpeg');
      expect(memory.about).toBe('https://familysearch.org/platform/memories/artifacts/ARXX-MMM');
      expect(memory.$getIconUrl()).toBe('https://familysearch.org/platform/memories/artifacts/ARXX-MMM?icon&access_token=mock');
      expect(memory.$getThumbnailUrl()).toBe('https://familysearch.org/platform/memories/artifacts/ARXX-MMM?thumbnail&access_token=mock');
      expect(memory.$getTitle()).toBe('Birth Certificate of Ethel Hollivet');
      expect(memory.$getDescription()).toBe('Shows Ethel Hollivet was born 3 Aug 1899');
      done();
    });
  });

  it('comments are returned from getMemoryComments', function(done) {
    FS.getMemoryComments('https://familysearch.org/platform/memories/memories/AR-1234/comments').then(function(response) {
      var comments = response.getComments();
      expect(comments.length).toBe(1);
      expect(comments[0].id).toBe('CMMM-MMM');
      expect(comments[0].$memoryId).toBe('AR-1234');
      expect(comments[0].text).toBe('Just a comment.');
      done();
    });
  });

  it('personas are returned from getMemoryPersonas', function(done) {
    FS.getMemoryPersonas('https://familysearch.org/platform/memories/memories/AR-1234/personas').then(function(response) {
      var personas = response.getMemoryPersonas();
      expect(personas.length).toBe(1);
      expect(personas[0].id).toBe('123');
      expect(personas[0].extracted).toBeTruthy();
      expect(personas[0].$memoryId).toBe('AR-1234');
      expect(personas[0].$getDisplayName()).toBe('Anastasia Aleksandrova');
      expect(personas[0].$getName().$getFullText()).toBe('Anastasia Aleksandrova');
      expect(personas[0].$getMemoryArtifactRef().description).toBe('https://familysearch.org/platform/memories/artifacts/132692/description');
      done();
    });
  });

  it('persona is returned from getMemoryPersona', function(done) {
    FS.getMemoryPersona('https://familysearch.org/platform/memories/memories/AR-1234/personas/PXX-1234').then(function(response) {
      var persona = response.getMemoryPersona();
      expect(persona.id).toBe('PXX-1234');
      expect(persona.$memoryId).toBe('AR-1234');
      expect(persona.$getDisplayName()).toBeUndefined(); // bad example data
      expect(persona.$getName().$getFullText()).toBe('Anastasia Aleksandrova');
      expect(persona.$getMemoryArtifactRef().description).toBe('https://familysearch.org/platform/memories/artifacts/132692/description');
      done();
    });
  });

  it('portrait URL is returned from getPersonPortraitUrl', function(done) {
    FS.getPersonPortraitUrl('https://sandbox.familysearch.org/platform/tree/persons/PID/portrait').then(function(response) {
      expect(response).toBe('https://sandbox.familysearch.org/platform/tree/persons/PID/portrait?access_token=mock');
      done();
    });
  });
  
  it('portrait URL is returned from getPersonPortraitUrl with follow redirect', function(done) {
    FS.getPersonPortraitUrl('https://sandbox.familysearch.org/platform/tree/persons/PID2/portrait', {followRedirect: true}).then(function(response) {
      expect(response).toBe('https://somegoodplace.com?access_token=mock');
      done();
    });
  });


  it('are returned from getPersonMemoriesQuery', function(done) {
    FS.getPersonMemoriesQuery('https://familysearch.org/platform/tree/persons/KWCR-JWS/memories', {start: 2, count: 2}).then(function(response) {
      var memories = response.getMemories();
      expect(memories.length).toBe(2);
      expect(memories[0].id).toBe('904106');
      expect(memories[0].about).toBe('https://familysearch.org/photos/images/904106');
      expect(memories[0].$getTitle()).toBe('Missionary Portrait');
      expect(memories[0].$getDescription()).toBe('Alma Heaton while on a mission to Canada.');
      done();
    });
  });

  it('are returned from getUserMemoriesQuery', function(done) {
    FS.getUserMemoriesQuery({start: 2, count: 1}).then(function(response) {
      var memories = response.getMemories();
      expect(memories.length).toBe(1);
      expect(memories[0].id).toBe('MMMM-PPP');
      expect(memories[0].about).toBeUndefined();
      expect(memories[0].$getTitle()).toBe('NEW ARTIFACT TITLE');
      expect(memories[0].$getDescription()).toBeUndefined();
      done();
    });
  });

  it('is created', function(done) {
    var promise = FS.createMemory({ $data: 'Test' })
      .$setTitle('Grandfather\'s Horse')
      .$save();
    promise.then(function(response) {
      var request = promise.getRequest();
      expect(request.headers['Content-Type']).toBe('text/plain');
      expect(request.body).toBe('Test');
      expect(promise.getStatusCode()).toBe(201);
      expect(response).toBe('https://familysearch.org/platform/memories/memories/12345');
      done();
    });
  });

  it('is updated', function(done) {
    var memory = FS.createMemory()
      .$setTitle('Birth Certificate of Ethel Hollivet')
      .$setDescription('Shows Ethel Hollivet was born 3 Aug 1899');
    memory.id = 'ARXX-MMM';
    memory.links = {
      description: {
        href: 'https://familysearch.org/platform/memories/memories/ARXX-MMM'
      }
    };
    var promise = memory.$save('');
    promise.then(function(response) {
      var request = promise.getRequest();
      //noinspection JSUnresolvedFunction
      expect(request.body).toEqualJson({
        sourceDescriptions: [{
          id: 'ARXX-MMM',
          titles: [ { value: 'Birth Certificate of Ethel Hollivet' }],
          description: [ { value: 'Shows Ethel Hollivet was born 3 Aug 1899' }],
          links: { description:{ href: 'https://familysearch.org/platform/memories/memories/ARXX-MMM'}}
        }]
      });
      expect(promise.getStatusCode()).toBe(204);
      expect(response).toBe('https://familysearch.org/platform/memories/memories/ARXX-MMM');
      done();
    });
  });

  it('is deleted', function(done) {
    var promise = FS.deleteMemory('https://familysearch.org/platform/memories/memories/ARXX-MMM');
    promise.then(function(response) {
      expect(promise.getStatusCode()).toBe(204);
      expect(response).toBe('https://familysearch.org/platform/memories/memories/ARXX-MMM');
      done();
    });
  });

  it('persona is created', function(done) {
    var promise = FS.createMemoryPersona()
      .$setName('Anastasia Aleksandrova')
      .$setMemoryArtifactRef(new FS.createMemoryArtifactRef({description: 'https://sandbox.familysearch.org/platform/memories/memories/AR-1234'}))
      .$save('https://sandbox.familysearch.org/platform/memories/memories/AR-1234/personas');
    promise.then(function(response) {
      var request = promise.getRequest();
      //noinspection JSUnresolvedFunction
      expect(request.body).toEqualJson({
        persons: [{
          media : [ {
            description : 'https://sandbox.familysearch.org/platform/memories/memories/AR-1234'
          } ],
          names: [{
            nameForms: [{
              fullText: 'Anastasia Aleksandrova'
            }]
          }]
        }]
      });
      expect(promise.getStatusCode()).toBe(201);
      expect(response).toBe('https://sandbox.familysearch.org/platform/memories/memories/AR-1234/personas/PXX-1234');
      done();
    });
  });

  it('persona is updated', function(done) {
    var persona = FS.createMemoryPersona()
      .$setName('Anastasia Alexsandrova')
      .$setMemoryArtifactRef(new FS.createMemoryArtifactRef({description: 'https://sandbox.familysearch.org/platform/memories/memories/AR-1234'}));
    persona.id = 'PXX-1234';
    persona.links = { persona: { href: 'https://sandbox.familysearch.org/platform/memories/memories/AR-1234/personas/PXX-1234' } };
    var promise = persona.$save();
    promise.then(function(response) {
      var request = promise.getRequest();
      //noinspection JSUnresolvedFunction
      expect(request.body).toEqualJson({
        persons: [{
          names: [ { nameForms: [ { fullText: 'Anastasia Alexsandrova' } ] } ],
          id: 'PXX-1234',
          links: { persona: { href: 'https://sandbox.familysearch.org/platform/memories/memories/AR-1234/personas/PXX-1234' } },
          media: [ { description: 'https://sandbox.familysearch.org/platform/memories/memories/AR-1234' } ]
        }]
      });
      expect(promise.getStatusCode()).toBe(204);
      expect(response).toBe('https://sandbox.familysearch.org/platform/memories/memories/AR-1234/personas/PXX-1234');
      done();
    });
  });

  it('persona is deleted', function(done) {
    var promise = FS.deleteMemoryPersona('https://sandbox.familysearch.org/platform/memories/memories/ARXX-MMM/personas/PXX-1234');
    promise.then(function(response) {
      expect(promise.getStatusCode()).toBe(204);
      expect(response).toBe('https://sandbox.familysearch.org/platform/memories/memories/ARXX-MMM/personas/PXX-1234');
      done();
    });
  });
  
  it('persona ref is created - shortcut', function(done) {
    var memoryPersona = FS.createMemoryPersona();
    memoryPersona.links = { persona: { href: 'https://familysearch.org/platform/memories/memories/3649/personas/1083' } };
    var promise = FS.createMemoryPersonaRef({
        $personId: 'PPPP-PPP',
        $memoryPersona: memoryPersona
      })
      .$save('https://familysearch.org/platform/tree/persons/PPPP-PPP/memory-references');
    promise.then(function(response) {
      var request = promise.getRequest();
      //noinspection JSUnresolvedFunction
      expect(request.body).toEqualJson({
        'persons' : [ {
          'evidence' : [ {
            'resource' : 'https://familysearch.org/platform/memories/memories/3649/personas/1083'
          } ]
        } ]
      });
      expect(promise.getStatusCode()).toBe(201);
      expect(response).toBe('https://familysearch.org/platform/tree/persons/PPPP-PPP/memory-references/1083');
      done();
    });
  });

  it('persona ref is deleted', function(done) {
    var promise = FS.deleteMemoryPersonaRef('https://familysearch.org/platform/tree/persons/PPPP-PPP/memory-references/1083');
    promise.then(function(response) {
      expect(promise.getStatusCode()).toBe(204);
      expect(response).toBe('https://familysearch.org/platform/tree/persons/PPPP-PPP/memory-references/1083');
      done();
    });
  });

  it('comment is created', function(done) {
    var comment = FS.createComment({text: 'Just a comment.'});
    var promise = comment.$save('https://familysearch.org/platform/memories/memories/AR-1234/comments');
    promise.then(function(response) {
      var request = promise.getRequest();
      //noinspection JSUnresolvedFunction
      expect(request.body).toEqualJson({
        'discussions' : [ {
          'comments' : [ {
            'text' : 'Just a comment.'
          } ]
        } ]
      });
      expect(promise.getStatusCode()).toBe(201);
      expect(comment.id).toBe('CM-1234');
      expect(response).toBe('CM-1234');
      done();
    });
  });

  it('comment is deleted', function(done) {
    var promise = FS.deleteComment('https://familysearch.org/platform/memories/memories/AR-1234/comments/COM-1234');
    promise.then(function(response) {
      expect(promise.getStatusCode()).toBe(204);
      expect(response).toBe('https://familysearch.org/platform/memories/memories/AR-1234/comments/COM-1234');
      done();
    });
  });

});
