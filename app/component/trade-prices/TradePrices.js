'use strict';


const widgetize = require('widgetize');
const pkg = require('./package.json');


const MARGIN_TOP = 50;
const MARGIN_BOTTOM = 50;
const MARGIN_LEFT = 40;
const MARGIN_RIGHT = 20;

/**
 * Trade Prices Widget
 */
class TradePrices extends widgetize.base(HTMLElement)
{
	init() 
	{
		this._width = 100;

		this._height = 100;

		this._data = [];

		this._graph = null;

		this._xAxis = null;

		this._yAxis = null;
	}


	get width()
	{
		return this._width;
	}

	set width(value)
	{
		if (value !== this._width)
		{
			this._width = value;
			this.invalidate();
		}
	}


	get height()
	{
		return this._height;
	}

	set height(value)
	{
		if (value !== this._height)
		{
			this._height = value;
			this.invalidate();
		}
	}


	get data()
	{
		return this._data;
	}

	set data(value)
	{
		if (value !== this._data)
		{
			this._data = value;
			this.invalidate();
		}
	}



	attach(dom) 
	{
		this._graph = d3.select(dom).append('svg')
			.attr('width', this._width)
			.attr('height', this.height);

		this._xAxis = this._graph.append('svg:g')
        	.attr('class', 'x axis');

        this._yAxis = this._graph.append('svg:g')
			.attr('class', 'y axis')
			.attr('transform', 'translate(' + MARGIN_LEFT + ',0)');
	}


	update(dom) 
	{

		this._xAxis.attr('transform', 'translate(0,' + (this._height - MARGIN_BOTTOM) + ')')
             .call(xAxisFactory.call(this));

        this._yAxis.call(yAxisFactory.call(this));

	}


	detach(dom)
	{

	}	
}


module.exports = widgetize(pkg.name, TradePrices);


/* PRIVAYE */

function xAxisValue(item)
{
	return new Date(item.time);
}


function yAxisValue(item)
{
	return item.price;
}


function xAxisFactory()
{
	let xScale = d3.scale.linear()
		.range([MARGIN_LEFT, this._width - MARGIN_RIGHT])
		.domain([
			d3.min(this._data, xAxisValue), 
			d3.max(this._data, xAxisValue)
		]);

	return d3.svg.axis()
		.scale(xScale);
}

function yAxisFactory()
{
	let yScale = d3.scale.linear()
		.range([this._height - MARGIN_TOP, MARGIN_BOTTOM])
		.domain([
			d3.min(this._data, yAxisValue), 
			d3.max(this._data, yAxisValue)
		]);

	return d3.svg.axis()
		.scale(yScale)
		.orient("left");
}

