
const marketDataService = require('service/market-data-service');


module.exports = class MainViewPM
{
	constructor()
	{
		this.filteredTrades = [];

		this.exchanges = [];

		this.stocks = [];

		this.selectedExchanges = [];

		this.selectedStocks = [];

		this._trades = [];
	}


	init()
	{
		let getTradesPromise = marketDataService.getTrades()
			.then(trades => {
				this._trades = trades;
			})
			.catch(error => {
				console.error(error);
			});

		let getExchangesPromise = marketDataService.getExchanges()
			.then(exchanges => {
				this.exchanges = exchanges;
				this.selectedExchanges = exchanges.concat();
			})
			.catch(error => {
				console.error(error);
			});

		let getStocks = marketDataService.getStocks()
			.then(stocks => {
				this.stocks = stocks;
				this.selectedStocks = [this.stocks[0]];
			})
			.catch(error => {
				console.error(error);
			});

		
		Promise.all([getTradesPromise, getExchangesPromise, getStocks]).then(() => {
			console.info('Data loaded');
			filterTrades.call(this);
		});			
	}


	filterExchanges(exchanges)
	{
		this.selectedExchanges = exchanges;
		filterTrades.call(this);
	}

	filterStocks(stocks)
	{
		this.selectedStocks = stocks;
		filterTrades.call(this);
	}
};


/* PRIVAYE */


function filterTrades()
{
	this.filteredTrades = this._trades.filter(item => {
		let [stockSym, exchangeSufix] = item.sym.split('.');

		return this.selectedStocks.filter(item => item.sym === stockSym).length !== 0 && 
			this.selectedExchanges.filter(item => item.suffix === exchangeSufix).length !== 0;
	});
}
