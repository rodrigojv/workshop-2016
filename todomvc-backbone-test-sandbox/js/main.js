/*global require*/
'use strict';

var Backbone = require('backbone');
var AppView = require('./views/app');
var Workspace = require('./routers/router');
require('todomvc-common/base');
		
/*jshint nonew:false*/
// Initialize routing and start Backbone.history()
new Workspace();
Backbone.history.start();

// Initialize the application view
new AppView();
