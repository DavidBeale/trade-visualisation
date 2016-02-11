
/*jshint -W079 */
const expect = require('chai').expect;
const sinon = require('sinon'); 


const MainViewPM = require('../app/view/main-view/MainViewPM');
const marketDataService = require('../app/service/market-data-service');


let pm = null;

describe('MainViewPM', () => {

	before(() => {

		sinon.stub(marketDataService, '_getMarketData').returns(
			Promise.resolve( require('../app/data.json') )
		);

		pm = new MainViewPM();

	});


	it('should start with no data', () => {

		expect(pm.filteredTrades.length).to.equal(0);

		expect(pm.exchanges.length).to.equal(0);

		expect(pm.stocks.length).to.equal(0);

	});	



	describe('init()', () => {

		it('should load data', (done) => {

			pm.init();

			setTimeout(() => {
				
				expect(pm.filteredTrades.length).to.equal(326);

				expect(pm.exchanges.length).to.equal(3);

				expect(pm.stocks.length).to.equal(3);

				done();

			}, 10);

		});
	
	});
	


	describe('filterExchanges()', () => {

		it('should filter by the exchanges', () => {

			pm.filterExchanges([
				{
					'mic': 'XVTX',
					'suffix': 'VX',
					'name': 'Virt-X'
				}
			]);

			expect(pm.filteredTrades.length).to.equal(103);

		});

	});



	describe('filterStocks()', () => {

		it('should filter by the stock', () => {

			pm.filterStocks([
				{
					'sym': 'GOG',
					'name': 'Goggle Corp'
				}
			]);

			expect(pm.filteredTrades.length).to.equal(120);

		});
	
	});
});



