
const d3 = require('d3');


class MarketDataService
{
	constructor()
	{
		this._marketDataPromise = null;
	}

	getTrades()
	{
		return this._getMarketData()
			.then(result => {
				return result.data;
			});
	}


	getExchanges()
	{
		return this._getMarketData()
			.then(result => {
				return result.exchanges;
			});
	}


	getStocks()
	{
		return this._getMarketData()
			.then(result => {
				return result.stocks;
			});
	}



	_getMarketData()
	{
		if (!this._marketDataPromise)
		{
			this._marketDataPromise = new Promise((resolve, reject) => {

				d3.json('data.json', (error, result) => {
					if (error)
					{
						return reject(error);
					}

					resolve(result);
				});

			});
		}

		return this._marketDataPromise;
	}
}


module.exports = new MarketDataService();
