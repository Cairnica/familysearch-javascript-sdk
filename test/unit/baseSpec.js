describe('base class', function() {
  
  it('serializes', function(){
    var person = FS.createPerson({
      gender: 'Male',
      names: [
        {
          givenName: 'Gustaf'
        }
      ]
    });
    var json = JSON.parse(JSON.stringify(person));
    expect(json).toEqualJson({
      names: [ {
        nameForms: [ {
          parts: [ {
            type: 'http://gedcomx.org/Given',
            value: 'Gustaf'
          } ]
        } ],
        preferred: false
      } ],
      gender: {
        type: 'Male',
      }
    });
  });
  
  it('getLinkPromise success', function(done){
    var person = FS.createPerson({
      links: {
        test: {
          href: 'foobaz'
        }
      }
    });
    person.testMethod = function(){
      this.getLinkPromise('test').then(function(link){
        expect(link.href).toEqual('foobaz');
        done();
      });
    };
    person.testMethod();
  });
  
  it('getLinkPromise failure', function(done){
    var person = FS.createPerson();
    person.testMethod = function(){
      return this.getLinkPromise('test').then(function(link){
        return link;
      });
    };
    person.testMethod().then(null, function(error){
      expect(error.message).toEqual('Missing link: test');
      done();
    });
  });
  
});