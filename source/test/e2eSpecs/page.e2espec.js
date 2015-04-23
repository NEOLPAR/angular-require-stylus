describe('home page title', function() {
    var ptor = protractor.getInstance();
    it('should be source', function() {
        ptor.get('/#');
        expect(ptor.getTitle()).toBe('source');
    });
});
