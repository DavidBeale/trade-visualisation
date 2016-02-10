'use strict';


const widgetize = require('widgetize');
const pkg = require('./package.json');

/**
 * Trade Prices Widget
 */
class TradePrices extends widgetize.base(HTMLElement)
{

	init() 
	{

	}


	attach(dom) 
	{

	}


	update(dom) 
	{

	}


	detach(dom)
	{

	}	
}


module.exports = widgetize(pkg.name, TradePrices);

