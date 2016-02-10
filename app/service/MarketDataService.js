'use strict';

class MarketDataService
{
	constructor()
	{
		this._marketDataPromise = null;
	}

	getTrades()
	{
		return getMarketData.call(this)
			.then(result => {
				return result.data;
			});
	}
}


module.exports = new MarketDataService();


/* PRIVATE */


function getMarketData()
{
	if (!this._marketDataPromise)
	{
		this._marketDataPromise = new Promise((resolve, reject) => {

			resolve( require('../data.json') );

		});
	}

	return this._marketDataPromise;
}