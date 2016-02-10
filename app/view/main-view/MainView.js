

'use strict';

const widgetize = require('widgetize');
const template = require('./MainView.html');
const pkg = require('./package.json');
const MainViewPM = require('./MainViewPM.js');
const bindling = require('bindling');

/**
 * Example View
 */
class ExampleView extends widgetize.base(HTMLElement)
{
	init() 
	{
		this._pm = new MainViewPM();
	}

	attach(dom) 
	{
		bindling(dom, this._pm);
	}
	
}


module.exports = widgetize(pkg.name, MainViewPM, template);