require('todomvc-common');
require('todomvc-common/base.css');
require('todomvc-app-css/index.css');

import Controller from './controller';
import Model from './model';
import Store from './store';
import Template from './template';
import View from './view';
import {$on} from './helpers';

	'use strict';

	/**
	 * Sets up a brand new Todo list.
	 *
	 * @param {string} name The name of your new to do list.
	 */
	function Todo(name) {
		this.storage = new Store(name);
		this.model = new Model(this.storage);
		this.template = new Template();
		this.view = new View(this.template);
		this.controller = new Controller(this.model, this.view);
	}

	var todo = new Todo('todos-vanillajs');

	function setView() {
		todo.controller.setView(document.location.hash);
	}
	$on(window, 'load', setView);
	$on(window, 'hashchange', setView);
