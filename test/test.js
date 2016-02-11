'use strict';

/*jshint -W079 */
const expect = require('chai').expect;


const MainViewPM = require('../app/view/main-view/MainViewPM');


describe('MainViewPM', () => {

	let pm = null;

	before(() => {

		pm = new MainViewPM();

	});


	it('should start with no data', () => {

		expect(pm.filteredTrades.length).to.equal(0);

		expect(pm.exchanges.length).to.equal(0);

		expect(pm.stocks.length).to.equal(0);

	});	



	describe('init', () => {

		//pm.init();
	
	});
	

	describe('filterExchanges', () => {



	});


	describe('filterStocks', () => {


	
	});
});



