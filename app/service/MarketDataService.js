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


	getExchanges()
	{
		return getMarketData.call(this)
			.then(result => {
				return result.exchanges;
			});
	}


	getStocks()
	{
		return getMarketData.call(this)
			.then(result => {
				return result.stocks;
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