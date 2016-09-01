
describe('Basic test suite', function() {
    // variable que representa algún estado de nuestra app
    var foo = false;
    
    beforeEach(function(){
         foo = true;
    });

    afterEach(function(){
         foo = true;
    });
    
    it('Foo should be true', function() {
        expect(foo).to.be.true;
    });

});