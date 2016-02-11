
const widgetize = require('widgetize');
const template = require('./TradePrices.html');
const pkg = require('./package.json');
const d3 = require('d3');


const MARGIN_TOP = 50;
const MARGIN_BOTTOM = 50;
const MARGIN_LEFT = 80;
const MARGIN_RIGHT = 20;

/**
 * Trade Prices Widget
 */
class TradePrices extends widgetize.base(HTMLElement)
{
	init() 
	{
		this._width = 0;

		this._height = 0;

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
		if (value !== this._data && Array.isArray(value) )
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


	update() 
	{
		this._graph.selectAll('path, text.legend, text.axis-label').remove();

		let data = this._data.concat();

		data.forEach((item) => {
			item.time = new Date(item.time);
		});
		

		let xScale = d3.time.scale()
			.range([MARGIN_LEFT, this._width - MARGIN_RIGHT])
			.domain([
				d3.min(data, xAxisValue), 
				d3.max(data, xAxisValue)
			]);
		
		this._xAxis.attr('transform', 'translate(0,' + (this._height - MARGIN_BOTTOM) + ')')
             .call(xAxisFactory(xScale));


        this._xAxis.append('text')
			.attr('x', (this._width - MARGIN_RIGHT)/2)
			.attr('y', 40)
			.attr('class', 'axis-label')
			.text('Trade Time');   


		let yScale = d3.scale.linear()
			.range([this._height - MARGIN_TOP, MARGIN_BOTTOM])
			.domain([
				d3.min(data, yAxisValue), 
				d3.max(data, yAxisValue)
			]);

        this._yAxis.call(yAxisFactory(yScale));

		this._graph.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('y', 0)
			.attr('x', 0 - (this._height / 2))
			.attr('dy', '1em')
			.attr('class', 'axis-label')
			.text('Trade Price');


		let dataGroup = d3.nest()
			.key(item => item.exchange)
			.entries(data);

		let line = lineFactory(xScale, yScale);

		let lines = this._graph.selectAll('path').data(dataGroup);

		let colSpace = this._width / dataGroup.length;

		dataGroup.forEach((exchange, index) => {
			this._graph.append('svg:path')
				.attr('d', line(exchange.values))
				.attr('class', 'line line-' + exchange.key)
				.attr('id', 'line_' + exchange.key);


			this._graph.append('text')
				.attr('x', (colSpace/2) + index*colSpace)
				.attr('y', 30)
				.attr('class','legend legend-' + exchange.key)
				.text(exchange.key);	
		});

	}

}


module.exports = widgetize(pkg.name, TradePrices, template);


/* PRIVAYE */

function xAxisValue(item)
{
	return item.time;
}


function yAxisValue(item)
{
	return item.price;
}


function xAxisFactory(xScale)
{
	return d3.svg.axis()
		.scale(xScale)
		.tickFormat(d3.time.format('%H:%M'))
		.orient('bottom');
}

function yAxisFactory(yScale)
{
	return d3.svg.axis()
		.scale(yScale)
		.orient('left');
}

function lineFactory(xScale, yScale)
{
	return d3.svg.line()
		.x(item => xScale(xAxisValue(item)))
		.y(item => yScale(yAxisValue(item)));
}


