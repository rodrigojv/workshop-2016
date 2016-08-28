var $ = require('jquery');

require('handlebars/handlebars.runtime.min');
require('medium-editor-insert-plugin')($);
describe('Core', function () {
    beforeEach(function () {
        $('body').append('<div id="fixtures"><div class="editable"></div></div>');
        this.$el = $('.editable');

        jasmine.clock().install();
    });

    afterEach(function () {
        $('#fixtures').remove();

        jasmine.clock().uninstall();
    });

    it('initializes plugin', function () {
        this.$el.mediumInsert();

        expect(this.$el.hasClass('medium-editor-insert-plugin')).toBe(true);
    });

});
