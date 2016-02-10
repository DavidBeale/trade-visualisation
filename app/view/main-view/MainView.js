

'use strict';

const widgetize = require('widgetize');
const template = require('./MainView.html');
const pkg = require('./package.json');
const MainViewPM = require('./MainViewPM.js');
const bindling = require('bindling');

require('component/trade-prices');

/**
 * Main View
 */
class MainView extends widgetize.base(HTMLElement)
{
	init() 
	{
		this._pm = new MainViewPM();
	}

	attach(dom) 
	{
		bindling(dom, this._pm);
		this._pm.init();
	}
	
}


module.exports = widgetize(pkg.name, MainView, template);