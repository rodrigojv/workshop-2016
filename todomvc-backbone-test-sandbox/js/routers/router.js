/*global define*/
'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Todos = require('../collections/todos');
var Common = require('../common');


var TodoRouter = Backbone.Router.extend({
	routes: {
		'*filter': 'setFilter'
	},

	setFilter: function (param) {
		// Set the current filter to be used
		Common.TodoFilter = param || '';

		// Trigger a collection filter event, causing hiding/unhiding
		// of the Todo view items
		Todos.trigger('filter');
	}
});

module.exports = TodoRouter;
