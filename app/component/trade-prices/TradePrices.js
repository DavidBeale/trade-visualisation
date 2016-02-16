
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

		this._xAxisLabel = null;

		this._yAxisLabel = null;

		this._toolTip = null;

		this._xScale = null;

		this._yScale = null;

		this._toolTopLabel = null;
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

		this._xAxisLabel = this._xAxis.append('text')
			.attr('y', 40)
			.attr('class', 'axis-label')
			.text('Trade Time');   	

		this._yAxis = this._graph.append('svg:g')
			.attr('class', 'y axis')
			.attr('transform', 'translate(' + MARGIN_LEFT + ',0)');

		this._yAxisLabel = this._graph.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('y', 0)
			.attr('dy', '1em')
			.attr('class', 'axis-label')
			.text('Trade Price');	

		this._voronoiGroup = this._graph.append('svg:g')
			.attr('class', 'voronoi');
	}


	update() 
	{
		let data = this._data.concat();

		data.forEach((item) => {
			item.time = new Date(item.time);
		});
		

		this._xScale = d3.time.scale()
			.range([MARGIN_LEFT, this._width - MARGIN_RIGHT])
			.domain([
				d3.min(data, xAxisValue), 
				d3.max(data, xAxisValue)
			]);
		
		this._xAxis.attr('transform', 'translate(0,' + (this._height - MARGIN_BOTTOM) + ')')
             .call(xAxisFactory(this._xScale));

		this._xAxisLabel.attr('x', (this._width - MARGIN_RIGHT)/2)


		this._yScale = d3.scale.linear()
			.range([this._height - MARGIN_TOP, MARGIN_BOTTOM])
			.domain([
				d3.min(data, yAxisValue), 
				d3.max(data, yAxisValue)
			]);

        this._yAxis.call(yAxisFactory(this._yScale));

		this._yAxisLabel.attr('x', 0 - (this._height / 2));


		let voronoi = d3.geom.voronoi()
			.x((d) => { return this._xScale(d.time); })
			.y((d) => { return this._yScale(d.price); })
			.clipExtent([[0 - MARGIN_LEFT, 0 - MARGIN_TOP], [this._width + MARGIN_RIGHT, this._height + MARGIN_BOTTOM]]);

		let dataGroup = d3.nest()
			.key(item => item.exchange)
			.entries(data);



		let line = lineFactory(this._xScale, this._yScale);

		let lines = this._graph.selectAll('path.line').data(dataGroup, exchange => exchange.key);

		lines.enter().append('svg:path')
				.attr('class', exchange => {
					return 'line line-' + exchange.key;
				})
				.attr('id', exchange => {
					return 'line_' + exchange.key;
				});

		lines.attr('d', exchange => line(exchange.values));		

		lines.exit().remove();



		let colSpace = this._width / dataGroup.length;

		let legends = this._graph.selectAll('text.legend').data(dataGroup, exchange => exchange.key);

		legends.enter().append('text')
				.attr('y', 30)
				.attr('class', exchange => {
					return 'legend legend-' + exchange.key;
				})
				.text(exchange => exchange.key);		

		legends.attr('x', (exchange, index) => {
			return (colSpace/2) + index*colSpace;
		});

		legends.exit().remove();



		let voronoiPaths = this._voronoiGroup.selectAll('path').data(voronoi(this._data));

		voronoiPaths.enter().append('svg:path')
				.on('mouseover', () => {
					this._toolTip.style('display', null);
				})
				.on('mouseout', onMouseOut.bind(this));
		
		voronoiPaths.attr('d', cord => { 
			return 'M' + cord.join('L') + 'Z'; 
		});

		voronoiPaths.exit().remove();
			


		this._toolTip = this._graph.append('svg:g')
			.attr('class', 'toolTip')
			.attr('width', 50)
			.attr('height', 50)
			.style('display', 'none');


		this._toolTip.append('svg:circle')
				.style('fill', 'none')
				.style('stroke', 'blue')
				.attr('x', 50)
				.attr('y', 50)
				.attr('r', 4);

		this._toolTopLabel = this._toolTip.append('svg:text')
			.attr('y', -10);		
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


function onMouseOut(cord)	
{
	let trade = cord.point;

	this._toolTip.style('display', 'none');

	this._toolTip
		.attr('transform', 'translate(' + this._xScale(xAxisValue(trade)) + ',' + this._yScale(yAxisValue(trade)) + ')');

	this._toolTopLabel
		.text(trade.price);
}

