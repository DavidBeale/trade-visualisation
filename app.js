(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var widgetize = require('widgetize');
var pkg = require('./package.json');
var d3 = (typeof window !== "undefined" ? window['d3'] : typeof global !== "undefined" ? global['d3'] : null);

/**
 * Bootstrap data driven button group Widget
 */

var ButtonGroup = function (_widgetize$base) {
	_inherits(ButtonGroup, _widgetize$base);

	function ButtonGroup() {
		_classCallCheck(this, ButtonGroup);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).apply(this, arguments));
	}

	_createClass(ButtonGroup, [{
		key: 'init',
		value: function init() {
			this._data = [];
			this._selected = [];
			this._singleToggle = false;

			this._group = null;
		}
	}, {
		key: 'attach',
		value: function attach(dom) {
			this._group = d3.select(dom).append('div').classed('btn-group', true);
		}
	}, {
		key: 'update',
		value: function update(dom) {
			var _this2 = this;

			var buttons = this._group.selectAll('button').data(this._data);

			buttons.enter().append('button').attr('class', 'btn btn-default navbar-btn').attr('type', 'button').on('click', onClick.bind(this));

			buttons.text(function (item) {
				return item.name;
			}).classed('active', function (item) {
				return _this2._selected.indexOf(item) !== -1;
			}).classed('btn-primary', function (item) {
				return _this2._selected.indexOf(item) !== -1 && !_this2._singleToggle;
			}).classed('btn-success', function (item) {
				return _this2._selected.indexOf(item) !== -1 && _this2._singleToggle;
			});

			buttons.exit().remove();
		}
	}, {
		key: 'data',
		get: function get() {
			return this._data;
		},
		set: function set(value) {
			if (value !== this._data && Array.isArray(value)) {
				this._data = value;
				this.invalidate();
			}
		}
	}, {
		key: 'selected',
		get: function get() {
			return this._selected;
		},
		set: function set(value) {
			if (value !== this._selected && Array.isArray(value)) {
				this._selected = value;
				this.invalidate();
			}
		}
	}, {
		key: 'singleToggle',
		get: function get() {
			return this._singleToggle;
		},
		set: function set(value) {
			if (value !== this._singleToggle) {
				this._singleToggle = value;
				this.invalidate();
			}
		}
	}]);

	return ButtonGroup;
}(widgetize.base(HTMLElement));

module.exports = widgetize(pkg.name, ButtonGroup);

/* PRIVATE */

function onClick(item) {
	toggle(this._selected, item, this._singleToggle);
	this.invalidate();

	var event = new CustomEvent('change', { details: this._selected });
	this.dispatchEvent(event);
}

function toggle(array, item, singleToggle) {
	var pos = array.indexOf(item);

	if (pos === -1) {
		if (singleToggle) {
			array.splice(0, array.length);
		}

		array.push(item);
	} else if (!singleToggle) {
		array.splice(pos, 1);
	}
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./package.json":2,"widgetize":60}],2:[function(require,module,exports){
module.exports={
  "name": "bs-button-group",
  "main": "ButtonGroup.js",
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "presets": [
            "es2015"
          ]
        }
      ],
      "browserify-shim"
    ]
  },
  "browserify-shim": {
    "d3": "global:d3"
  }
}
},{}],3:[function(require,module,exports){
module.exports = '<style>\n' +
    '	.axis path,\n' +
    '	.axis line \n' +
    '	{\n' +
    '		fill: none;\n' +
    '		stroke: #000;\n' +
    '		shape-rendering: crispEdges;\n' +
    '	}\n' +
    '\n' +
    '	.line \n' +
    '	{\n' +
    '		fill: none;\n' +
    '		stroke-width: 1.5px;\n' +
    '	}\n' +
    '\n' +
    '\n' +
    '	.line-0\n' +
    '	{\n' +
    '		stroke: #4040e8;\n' +
    '	}\n' +
    '	\n' +
    '	.line-1\n' +
    '	{\n' +
    '		stroke: #05b378;\n' +
    '	}\n' +
    '\n' +
    '	.line-2\n' +
    '	{\n' +
    '		stroke: #db4437;\n' +
    '	}\n' +
    '\n' +
    '	.line-3\n' +
    '	{\n' +
    '		stroke: #f8b128;\n' +
    '	}\n' +
    '\n' +
    '	.line-4\n' +
    '	{\n' +
    '		stroke: #5c5c5c;\n' +
    '	}\n' +
    '\n' +
    '</style>';
},{}],4:[function(require,module,exports){
(function (global){
'use strict';


const widgetize = require('widgetize');
const template = require('./TradePrices.html');
const pkg = require('./package.json');
const d3 = (typeof window !== "undefined" ? window['d3'] : typeof global !== "undefined" ? global['d3'] : null);


const MARGIN_TOP = 50;
const MARGIN_BOTTOM = 50;
const MARGIN_LEFT = 60;
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


	update(dom) 
	{
		this._graph.selectAll('path').remove();

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


		let yScale = d3.scale.linear()
			.range([this._height - MARGIN_TOP, MARGIN_BOTTOM])
			.domain([
				d3.min(data, yAxisValue), 
				d3.max(data, yAxisValue)
			]);

        this._yAxis.call(yAxisFactory(yScale));


		let dataGroup = d3.nest()
			.key(item => item.exchange)
			.entries(data);

		let line = lineFactory(xScale, yScale);

		dataGroup.forEach((exchange, index) => {
			this._graph.append('svg:path')
				.attr('d', line(exchange.values))
				.attr('class', 'line line-' + index)
				.attr('id', 'line_' + exchange.key);
		});


	}


	detach(dom)
	{

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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./TradePrices.html":3,"./package.json":5,"widgetize":60}],5:[function(require,module,exports){
module.exports={
  "name": "trade-prices",
  "main": "TradePrices.js",
  "browserify": {
    "transform": [
      [
        "html2js-browserify",
        "babelify",
        {
          "presets": [
            "es2015"
          ]
        }
      ],
      "browserify-shim"
    ]
  },
  "browserify-shim": {
    "d3": "global:d3"
  }
}
},{}],6:[function(require,module,exports){
module.exports={
  "stocks": [
    {
      "sym": "ABC",
      "name": "ABC Plc"
    },
    {
      "sym": "GOG",
      "name": "Goggle Corp"
    },
    {
      "sym": "PLM",
      "name": "Plum Inc"
    }
  ],
  "exchanges": [
    {
      "mic": "LSE",
      "suffix": "L",
      "name": "LSE"
    },
    {
      "mic": "CHIX",
      "suffix": "CHI",
      "name": "CHIX"
    },
    {
      "mic": "XVTX",
      "suffix": "VX",
      "name": "Virt-X"
    }
  ],
  "accounts": [
    {
      "id": "ACCT1",
      "name": "Account 1"
    },
    {
      "id": "ACCT2",
      "name": "Account 2"
    },
    {
      "id": "ACCT3",
      "name": "Account 3"
    },
    {
      "id": "ACCT4",
      "name": "Account 4"
    },
    {
      "id": "ACCT5",
      "name": "Account 5"
    },
    {
      "id": "ACCT6",
      "name": "Account 6"
    },
    {
      "id": "ACCT7",
      "name": "Account 7"
    },
    {
      "id": "ACCT8",
      "name": "Account 8"
    },
    {
      "id": "ACCT9",
      "name": "Account 9"
    },
    {
      "id": "ACCT10",
      "name": "Account 10"
    }
  ],
  "data": [
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.21,
      "change": 0,
      "time": "2015-02-04T08:00:00.000Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 1064
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.37,
      "change": 0,
      "time": "2015-02-04T08:00:59.224Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 4875
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.77,
      "change": 0,
      "time": "2015-02-04T08:01:40.055Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 1699
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0,
      "time": "2015-02-04T08:01:41.113Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 4116
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.22,
      "change": 0,
      "time": "2015-02-04T08:01:50.621Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 4304
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.77,
      "change": 0,
      "time": "2015-02-04T08:02:13.634Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 7893
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.32,
      "change": 0,
      "time": "2015-02-04T08:03:06.782Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 2627
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": -0.01,
      "time": "2015-02-04T08:03:49.290Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 1869
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0,
      "time": "2015-02-04T08:04:03.247Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 6527
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.35,
      "change": 0.01,
      "time": "2015-02-04T08:04:48.950Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 1572
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.23,
      "change": 0.02,
      "time": "2015-02-04T08:05:44.555Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 9519
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.32,
      "change": -0.05,
      "time": "2015-02-04T08:05:49.602Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 8268
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": -0.01,
      "time": "2015-02-04T08:06:48.283Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 6999
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.33,
      "change": -0.01,
      "time": "2015-02-04T08:07:30.514Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 9143
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.24,
      "change": 0.02,
      "time": "2015-02-04T08:07:55.276Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT6",
      "volume": 6500
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0.05,
      "time": "2015-02-04T08:08:18.011Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 7418
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0.01,
      "time": "2015-02-04T08:09:04.620Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 8507
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.21,
      "change": -0.03,
      "time": "2015-02-04T08:09:47.016Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 6569
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.17,
      "change": -0.06,
      "time": "2015-02-04T08:10:14.727Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 4055
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.33,
      "change": -0.01,
      "time": "2015-02-04T08:10:33.709Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 6806
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.35,
      "change": 0.03,
      "time": "2015-02-04T08:10:55.392Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 6404
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.37,
      "change": 0.01,
      "time": "2015-02-04T08:11:08.782Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 3943
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.18,
      "change": 0.01,
      "time": "2015-02-04T08:11:24.676Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 6692
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": -0.06,
      "time": "2015-02-04T08:11:38.970Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 9363
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.14,
      "change": -0.01,
      "time": "2015-02-04T08:12:23.751Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 5980
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.15,
      "change": 0,
      "time": "2015-02-04T08:13:02.197Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 2322
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.38,
      "change": 0.05,
      "time": "2015-02-04T08:13:54.829Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 1947
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.19,
      "change": 0.05,
      "time": "2015-02-04T08:14:01.668Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 5853
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.74,
      "change": -0.03,
      "time": "2015-02-04T08:14:43.932Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 6229
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.72,
      "change": -0.05,
      "time": "2015-02-04T08:15:15.337Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 9175
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.19,
      "change": 0.01,
      "time": "2015-02-04T08:15:59.072Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 5410
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.35,
      "change": -0.02,
      "time": "2015-02-04T08:16:12.655Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 2782
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.75,
      "change": 0,
      "time": "2015-02-04T08:16:20.986Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 7877
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": -0.04,
      "time": "2015-02-04T08:17:00.787Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 5721
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.76,
      "change": 0.04,
      "time": "2015-02-04T08:17:08.393Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 4704
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": 0,
      "time": "2015-02-04T08:18:03.515Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 5230
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.12,
      "change": -0.03,
      "time": "2015-02-04T08:18:07.199Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 8144
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0.01,
      "time": "2015-02-04T08:18:36.739Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 4723
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.41,
      "change": 0.05,
      "time": "2015-02-04T08:19:17.641Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 8235
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.13,
      "change": -0.02,
      "time": "2015-02-04T08:19:25.937Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 9840
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.78,
      "change": 0.03,
      "time": "2015-02-04T08:19:30.990Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 8357
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.77,
      "change": 0.03,
      "time": "2015-02-04T08:20:01.498Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 7468
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.14,
      "change": -0.05,
      "time": "2015-02-04T08:20:52.620Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 5413
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.4,
      "change": -0.01,
      "time": "2015-02-04T08:21:09.578Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 7850
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.11,
      "change": -0.03,
      "time": "2015-02-04T08:22:07.412Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 5169
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.74,
      "change": -0.04,
      "time": "2015-02-04T08:22:45.966Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 4496
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": 0.02,
      "time": "2015-02-04T08:22:59.877Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 2719
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.36,
      "change": 0.01,
      "time": "2015-02-04T08:23:57.221Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 5833
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.17,
      "change": 0.04,
      "time": "2015-02-04T08:24:00.749Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 1177
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.76,
      "change": 0.02,
      "time": "2015-02-04T08:24:25.420Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 9120
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.37,
      "change": 0.01,
      "time": "2015-02-04T08:25:14.929Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 7084
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.73,
      "change": -0.03,
      "time": "2015-02-04T08:26:04.991Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 9201
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.14,
      "change": 0.02,
      "time": "2015-02-04T08:26:15.460Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 8867
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.12,
      "change": -0.02,
      "time": "2015-02-04T08:26:22.501Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 4195
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.38,
      "change": 0,
      "time": "2015-02-04T08:27:13.528Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 4561
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.36,
      "change": -0.02,
      "time": "2015-02-04T08:27:28.979Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 8982
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": -0.03,
      "time": "2015-02-04T08:27:32.117Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 8728
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.71,
      "change": -0.05,
      "time": "2015-02-04T08:28:02.594Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 7131
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.71,
      "change": -0.02,
      "time": "2015-02-04T08:28:53.757Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 4651
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.74,
      "change": -0.03,
      "time": "2015-02-04T08:29:15.375Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 8196
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.07,
      "change": -0.03,
      "time": "2015-02-04T08:29:22.843Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 2110
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.75,
      "change": 0.04,
      "time": "2015-02-04T08:29:53.131Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 5803
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.76,
      "change": 0.05,
      "time": "2015-02-04T08:30:11.615Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 7706
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.32,
      "change": -0.04,
      "time": "2015-02-04T08:30:51.125Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 9999
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0.02,
      "time": "2015-02-04T08:31:14.501Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 7780
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.71,
      "change": -0.05,
      "time": "2015-02-04T08:31:47.388Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 8378
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.71,
      "change": 0,
      "time": "2015-02-04T08:32:21.905Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT7",
      "volume": 1031
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": -0.09,
      "time": "2015-02-04T08:33:11.659Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 1173
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.06,
      "change": -0.06,
      "time": "2015-02-04T08:33:29.297Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 4300
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.37,
      "change": 0.03,
      "time": "2015-02-04T08:33:37.147Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 355
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.72,
      "change": -0.02,
      "time": "2015-02-04T08:33:44.923Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 5602
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.67,
      "change": -0.04,
      "time": "2015-02-04T08:34:22.995Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 1788
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.67,
      "change": -0.05,
      "time": "2015-02-04T08:35:12.927Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 4018
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.09,
      "change": -0.08,
      "time": "2015-02-04T08:35:21.389Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 4643
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.1,
      "change": 0.04,
      "time": "2015-02-04T08:36:12.429Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 9845
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.09,
      "change": 0,
      "time": "2015-02-04T08:36:20.914Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 8886
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.67,
      "change": -0.08,
      "time": "2015-02-04T08:37:09.628Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 8421
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.69,
      "change": 0.02,
      "time": "2015-02-04T08:37:40.993Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 4112
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.08,
      "change": -0.01,
      "time": "2015-02-04T08:38:26.744Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 4489
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.07,
      "change": 0,
      "time": "2015-02-04T08:38:58.654Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 9291
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.67,
      "change": 0,
      "time": "2015-02-04T08:39:28.951Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 3680
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.71,
      "change": 0.02,
      "time": "2015-02-04T08:39:58.044Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 5144
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.33,
      "change": 0.02,
      "time": "2015-02-04T08:40:18.979Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT4",
      "volume": 2706
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.74,
      "change": 0.07,
      "time": "2015-02-04T08:40:40.405Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 1177
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.09,
      "change": 0.01,
      "time": "2015-02-04T08:40:44.213Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 4626
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.39,
      "change": 0.02,
      "time": "2015-02-04T08:41:38.259Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 8398
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.73,
      "change": 0.06,
      "time": "2015-02-04T08:42:34.008Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 8096
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.12,
      "change": 0.02,
      "time": "2015-02-04T08:43:29.658Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 6858
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.73,
      "change": -0.01,
      "time": "2015-02-04T08:44:08.984Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 5151
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.74,
      "change": 0.01,
      "time": "2015-02-04T08:44:09.964Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 2206
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.71,
      "change": 0,
      "time": "2015-02-04T08:44:18.738Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 4486
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.38,
      "change": 0.01,
      "time": "2015-02-04T08:45:02.764Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 2823
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.73,
      "change": 0,
      "time": "2015-02-04T08:45:35.994Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 8252
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.16,
      "change": 0.09,
      "time": "2015-02-04T08:46:03.163Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 6086
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.18,
      "change": 0.09,
      "time": "2015-02-04T08:47:01.144Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 1237
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.37,
      "change": 0.04,
      "time": "2015-02-04T08:47:48.694Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 8021
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.39,
      "change": 0.01,
      "time": "2015-02-04T08:48:23.825Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT7",
      "volume": 1283
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": -0.01,
      "time": "2015-02-04T08:48:52.907Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 8765
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.38,
      "change": -0.01,
      "time": "2015-02-04T08:49:15.951Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 4390
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.45,
      "change": 0.07,
      "time": "2015-02-04T08:49:21.188Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 8237
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.74,
      "change": 0.01,
      "time": "2015-02-04T08:50:05.172Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 7932
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.09,
      "change": -0.06,
      "time": "2015-02-04T08:50:50.031Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 8226
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.43,
      "change": 0.04,
      "time": "2015-02-04T08:51:32.033Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 2784
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.48,
      "change": 0.03,
      "time": "2015-02-04T08:52:04.002Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 3066
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.12,
      "change": 0,
      "time": "2015-02-04T08:52:46.046Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 5888
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.45,
      "change": -0.03,
      "time": "2015-02-04T08:52:55.479Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 5069
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.1,
      "change": -0.02,
      "time": "2015-02-04T08:53:36.328Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 4847
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.43,
      "change": -0.02,
      "time": "2015-02-04T08:54:31.495Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 3487
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.41,
      "change": -0.02,
      "time": "2015-02-04T08:55:24.720Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 107
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.38,
      "change": -0.03,
      "time": "2015-02-04T08:55:36.071Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 1135
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.76,
      "change": 0.02,
      "time": "2015-02-04T08:56:13.940Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 1987
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.78,
      "change": 0.07,
      "time": "2015-02-04T08:56:47.363Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 943
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.37,
      "change": -0.01,
      "time": "2015-02-04T08:56:54.208Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 9401
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": -0.01,
      "time": "2015-02-04T08:57:07.216Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 3934
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.39,
      "change": 0.02,
      "time": "2015-02-04T08:57:20.962Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 6182
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": -0.01,
      "time": "2015-02-04T08:58:00.650Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 8814
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.08,
      "change": -0.01,
      "time": "2015-02-04T08:58:05.938Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 8870
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.75,
      "change": -0.01,
      "time": "2015-02-04T08:58:28.568Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 9213
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.76,
      "change": 0.01,
      "time": "2015-02-04T08:58:48.121Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 4965
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.38,
      "change": 0.01,
      "time": "2015-02-04T08:59:17.538Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 7301
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.38,
      "change": -0.01,
      "time": "2015-02-04T08:59:18.465Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 3440
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.06,
      "change": -0.02,
      "time": "2015-02-04T08:59:27.564Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 3809
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.35,
      "change": -0.08,
      "time": "2015-02-04T08:59:58.097Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 7816
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.35,
      "change": -0.03,
      "time": "2015-02-04T09:00:46.782Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT7",
      "volume": 6347
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.06,
      "change": -0.12,
      "time": "2015-02-04T09:01:08.037Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 1920
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.73,
      "change": -0.03,
      "time": "2015-02-04T09:01:17.517Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 8746
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.33,
      "change": -0.02,
      "time": "2015-02-04T09:01:49.985Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 3961
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.31,
      "change": -0.07,
      "time": "2015-02-04T09:02:49.971Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 2006
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.02,
      "change": -0.04,
      "time": "2015-02-04T09:03:18.707Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 2008
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.74,
      "change": -0.04,
      "time": "2015-02-04T09:03:19.654Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 7085
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.32,
      "change": 0.01,
      "time": "2015-02-04T09:03:42.645Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 5245
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.3,
      "change": -0.03,
      "time": "2015-02-04T09:03:44.291Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 7684
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.05,
      "change": -0.01,
      "time": "2015-02-04T09:04:40.564Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 5765
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.73,
      "change": -0.01,
      "time": "2015-02-04T09:04:48.026Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 1683
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.05,
      "change": -0.03,
      "time": "2015-02-04T09:05:37.744Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 6206
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.3,
      "change": -0.02,
      "time": "2015-02-04T09:06:33.307Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 3157
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.02,
      "change": 0,
      "time": "2015-02-04T09:07:19.693Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 5853
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.77,
      "change": 0.03,
      "time": "2015-02-04T09:07:49.049Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 8490
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.28,
      "change": -0.07,
      "time": "2015-02-04T09:07:58.110Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 1995
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.99,
      "change": -0.06,
      "time": "2015-02-04T09:08:22.893Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 8745
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.79,
      "change": 0.06,
      "time": "2015-02-04T09:09:00.772Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 5110
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.76,
      "change": -0.01,
      "time": "2015-02-04T09:09:03.688Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 5551
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.97,
      "change": -0.05,
      "time": "2015-02-04T09:09:51.525Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 1551
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.77,
      "change": 0.01,
      "time": "2015-02-04T09:10:08.315Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 6457
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.8,
      "change": 0.03,
      "time": "2015-02-04T09:10:33.787Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 9586
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.98,
      "change": 0.01,
      "time": "2015-02-04T09:11:09.803Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 9306
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.3,
      "change": 0,
      "time": "2015-02-04T09:11:36.071Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 3884
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.76,
      "change": -0.04,
      "time": "2015-02-04T09:12:00.668Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 3825
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.93,
      "change": -0.06,
      "time": "2015-02-04T09:12:44.608Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 893
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.97,
      "change": 0.04,
      "time": "2015-02-04T09:12:54.059Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 9276
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.74,
      "change": 0.01,
      "time": "2015-02-04T09:13:46.393Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 8801
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.99,
      "change": 0.02,
      "time": "2015-02-04T09:13:49.313Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 5275
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.71,
      "change": -0.03,
      "time": "2015-02-04T09:14:38.905Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 9958
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.71,
      "change": 0,
      "time": "2015-02-04T09:15:18.354Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 7444
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.67,
      "change": -0.09,
      "time": "2015-02-04T09:15:31.237Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 6095
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.28,
      "change": 0,
      "time": "2015-02-04T09:15:45.902Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 3201
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.01,
      "change": 0.03,
      "time": "2015-02-04T09:16:26.585Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 8597
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.28,
      "change": -0.02,
      "time": "2015-02-04T09:16:49.064Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 8366
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.3,
      "change": 0.02,
      "time": "2015-02-04T09:17:39.399Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 6371
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.02,
      "change": 0.01,
      "time": "2015-02-04T09:17:51.203Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 770
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.03,
      "change": -0.02,
      "time": "2015-02-04T09:18:36.595Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 200
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.99,
      "change": 0,
      "time": "2015-02-04T09:18:55.025Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 6339
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.3,
      "change": 0,
      "time": "2015-02-04T09:19:54.664Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 8358
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.98,
      "change": -0.04,
      "time": "2015-02-04T09:20:07.413Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 1065
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.28,
      "change": 0,
      "time": "2015-02-04T09:20:39.619Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 1979
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.31,
      "change": 0.03,
      "time": "2015-02-04T09:21:39.197Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT9",
      "volume": 3244
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.71,
      "change": 0.04,
      "time": "2015-02-04T09:21:39.811Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 1879
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.75,
      "change": -0.04,
      "time": "2015-02-04T09:22:31.258Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 1899
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.35,
      "change": 0.04,
      "time": "2015-02-04T09:23:01.254Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 4665
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.75,
      "change": 0,
      "time": "2015-02-04T09:23:47.732Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 6874
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.96,
      "change": -0.02,
      "time": "2015-02-04T09:24:11.247Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 6454
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.37,
      "change": 0.02,
      "time": "2015-02-04T09:24:30.167Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 8224
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.75,
      "change": 0.04,
      "time": "2015-02-04T09:25:05.793Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 147
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.74,
      "change": -0.01,
      "time": "2015-02-04T09:25:38.817Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 2919
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.96,
      "change": 0,
      "time": "2015-02-04T09:25:59.164Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 2369
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0.06,
      "time": "2015-02-04T09:26:03.652Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 7823
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.98,
      "change": -0.01,
      "time": "2015-02-04T09:26:42.318Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 2949
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.01,
      "change": 0.03,
      "time": "2015-02-04T09:27:39.940Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT2",
      "volume": 1722
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.3,
      "change": -0.06,
      "time": "2015-02-04T09:27:47.430Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 4048
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.74,
      "change": -0.01,
      "time": "2015-02-04T09:27:55.588Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 5447
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.28,
      "change": -0.02,
      "time": "2015-02-04T09:28:31.778Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 7249
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.98,
      "change": -0.05,
      "time": "2015-02-04T09:28:45.053Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 3751
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.98,
      "change": -0.03,
      "time": "2015-02-04T09:29:00.265Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 2607
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.97,
      "change": -0.01,
      "time": "2015-02-04T09:29:25.367Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 8433
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.3,
      "change": 0.02,
      "time": "2015-02-04T09:30:12.584Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 8212
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.71,
      "change": -0.03,
      "time": "2015-02-04T09:30:48.621Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 5057
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.99,
      "change": 0.01,
      "time": "2015-02-04T09:31:23.307Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 2054
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": 0.01,
      "time": "2015-02-04T09:32:15.429Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 479
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.71,
      "change": -0.03,
      "time": "2015-02-04T09:32:24.073Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 3129
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.72,
      "change": 0.01,
      "time": "2015-02-04T09:32:45.223Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT7",
      "volume": 6044
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137,
      "change": 0.04,
      "time": "2015-02-04T09:33:05.360Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 3696
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.77,
      "change": 0.05,
      "time": "2015-02-04T09:33:23.925Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT2",
      "volume": 6824
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.3,
      "change": -0.01,
      "time": "2015-02-04T09:33:52.374Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 4515
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.78,
      "change": 0.07,
      "time": "2015-02-04T09:34:19.989Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 8061
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.29,
      "change": -0.08,
      "time": "2015-02-04T09:34:53.249Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 2739
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.75,
      "change": -0.02,
      "time": "2015-02-04T09:35:28.007Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 2255
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.99,
      "change": 0,
      "time": "2015-02-04T09:36:22.621Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 7707
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.97,
      "change": -0.03,
      "time": "2015-02-04T09:36:31.637Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 8213
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.33,
      "change": 0.04,
      "time": "2015-02-04T09:37:16.169Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 8933
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.32,
      "change": 0.02,
      "time": "2015-02-04T09:38:08.395Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 7766
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.34,
      "change": 0.01,
      "time": "2015-02-04T09:38:35.233Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 4943
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.31,
      "change": -0.03,
      "time": "2015-02-04T09:38:57.512Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 3486
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.74,
      "change": -0.04,
      "time": "2015-02-04T09:39:29.703Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 8180
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.29,
      "change": -0.03,
      "time": "2015-02-04T09:40:17.359Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT6",
      "volume": 2906
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.99,
      "change": 0.02,
      "time": "2015-02-04T09:40:51.290Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 7814
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.75,
      "change": 0,
      "time": "2015-02-04T09:41:09.844Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 7919
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.04,
      "change": 0.05,
      "time": "2015-02-04T09:41:19.289Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 1689
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137,
      "change": -0.04,
      "time": "2015-02-04T09:42:03.363Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 5361
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.03,
      "change": 0.06,
      "time": "2015-02-04T09:42:32.002Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 8785
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.05,
      "change": 0.02,
      "time": "2015-02-04T09:43:03.457Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 5793
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.05,
      "change": 0.05,
      "time": "2015-02-04T09:43:06.230Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 516
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.71,
      "change": -0.04,
      "time": "2015-02-04T09:43:56.469Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 6487
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.31,
      "change": 0,
      "time": "2015-02-04T09:44:02.003Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 1197
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.04,
      "change": -0.01,
      "time": "2015-02-04T09:44:06.030Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 9501
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.04,
      "change": -0.01,
      "time": "2015-02-04T09:44:28.616Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 5186
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.34,
      "change": 0.03,
      "time": "2015-02-04T09:44:34.323Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 989
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.73,
      "change": 0.02,
      "time": "2015-02-04T09:44:58.062Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 5096
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.34,
      "change": 0,
      "time": "2015-02-04T09:45:55.715Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 9681
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.32,
      "change": -0.02,
      "time": "2015-02-04T09:46:10.735Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 999
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.08,
      "change": 0.09,
      "time": "2015-02-04T09:46:36.233Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 7626
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.06,
      "change": 0.02,
      "time": "2015-02-04T09:47:30.806Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 1251
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.07,
      "change": -0.01,
      "time": "2015-02-04T09:47:33.213Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 4131
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": 0.02,
      "time": "2015-02-04T09:47:59.089Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 8247
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.71,
      "change": 0,
      "time": "2015-02-04T09:48:13.018Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 6415
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.3,
      "change": -0.01,
      "time": "2015-02-04T09:48:59.330Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 4668
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.69,
      "change": -0.02,
      "time": "2015-02-04T09:49:14.054Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 2857
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.29,
      "change": -0.03,
      "time": "2015-02-04T09:49:44.284Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 5205
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.07,
      "change": 0,
      "time": "2015-02-04T09:50:34.734Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 9342
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.09,
      "change": 0.05,
      "time": "2015-02-04T09:50:48.671Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 1399
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.66,
      "change": -0.07,
      "time": "2015-02-04T09:51:34.048Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 3455
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.13,
      "change": 0.04,
      "time": "2015-02-04T09:52:15.456Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 4051
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.32,
      "change": 0.02,
      "time": "2015-02-04T09:52:32.919Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 5768
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.7,
      "change": 0.01,
      "time": "2015-02-04T09:52:59.364Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 2210
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.7,
      "change": -0.04,
      "time": "2015-02-04T09:53:54.864Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 6004
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.33,
      "change": 0.04,
      "time": "2015-02-04T09:53:58.230Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 8689
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0.02,
      "time": "2015-02-04T09:54:18.183Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 7973
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.3,
      "change": -0.04,
      "time": "2015-02-04T09:54:58.002Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 1713
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.68,
      "change": 0.02,
      "time": "2015-02-04T09:54:58.580Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 2692
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": 0.02,
      "time": "2015-02-04T09:55:06.900Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 526
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.32,
      "change": 0.02,
      "time": "2015-02-04T09:56:04.301Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 9693
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.17,
      "change": 0.1,
      "time": "2015-02-04T09:56:19.642Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 2726
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.14,
      "change": -0.03,
      "time": "2015-02-04T09:57:17.803Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 3333
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.33,
      "change": 0.03,
      "time": "2015-02-04T09:58:08.309Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 3484
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.68,
      "change": -0.02,
      "time": "2015-02-04T09:59:07.385Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 162
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.68,
      "change": 0,
      "time": "2015-02-04T10:00:04.448Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 5810
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.66,
      "change": -0.04,
      "time": "2015-02-04T10:00:52.089Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 9328
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0.01,
      "time": "2015-02-04T10:00:55.046Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 976
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": -0.01,
      "time": "2015-02-04T10:01:07.938Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 1461
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.64,
      "change": -0.04,
      "time": "2015-02-04T10:01:44.785Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 1921
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.14,
      "change": 0,
      "time": "2015-02-04T10:01:49.354Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 5089
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.13,
      "change": 0.07,
      "time": "2015-02-04T10:02:39.012Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 407
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.15,
      "change": 0.01,
      "time": "2015-02-04T10:03:06.930Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 5242
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.66,
      "change": -0.02,
      "time": "2015-02-04T10:04:05.085Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 7553
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.65,
      "change": 0.01,
      "time": "2015-02-04T10:04:13.562Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 4855
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.61,
      "change": -0.05,
      "time": "2015-02-04T10:04:41.224Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 8400
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.16,
      "change": 0.01,
      "time": "2015-02-04T10:04:56.842Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 8860
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.18,
      "change": 0.03,
      "time": "2015-02-04T10:05:31.058Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT5",
      "volume": 3833
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.59,
      "change": -0.06,
      "time": "2015-02-04T10:05:51.153Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 8018
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.62,
      "change": -0.04,
      "time": "2015-02-04T10:06:32.246Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 2334
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.3,
      "change": -0.04,
      "time": "2015-02-04T10:07:04.189Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 666
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.6,
      "change": -0.01,
      "time": "2015-02-04T10:07:23.163Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 6782
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.6,
      "change": 0.01,
      "time": "2015-02-04T10:07:40.059Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 4970
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.57,
      "change": -0.05,
      "time": "2015-02-04T10:08:32.141Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 91
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.31,
      "change": 0.01,
      "time": "2015-02-04T10:09:25.273Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 6446
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.19,
      "change": 0.03,
      "time": "2015-02-04T10:10:11.257Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 6553
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0.05,
      "time": "2015-02-04T10:11:07.965Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 6810
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.33,
      "change": -0.03,
      "time": "2015-02-04T10:12:00.344Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 9389
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.32,
      "change": -0.01,
      "time": "2015-02-04T10:12:38.416Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 5619
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.18,
      "change": -0.01,
      "time": "2015-02-04T10:13:10.480Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 4536
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.57,
      "change": 0,
      "time": "2015-02-04T10:13:29.700Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 7746
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.14,
      "change": 0.01,
      "time": "2015-02-04T10:13:58.396Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 8552
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.12,
      "change": -0.06,
      "time": "2015-02-04T10:14:37.791Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 1604
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.58,
      "change": 0.01,
      "time": "2015-02-04T10:15:26.036Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 9475
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.55,
      "change": -0.03,
      "time": "2015-02-04T10:16:21.092Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 5527
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.57,
      "change": -0.03,
      "time": "2015-02-04T10:16:39.297Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 5972
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.54,
      "change": -0.06,
      "time": "2015-02-04T10:16:54.477Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 9296
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.3,
      "change": -0.02,
      "time": "2015-02-04T10:17:53.970Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 5166
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.16,
      "change": -0.02,
      "time": "2015-02-04T10:18:29.764Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 6744
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.17,
      "change": 0.05,
      "time": "2015-02-04T10:18:47.561Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 4757
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.57,
      "change": 0.02,
      "time": "2015-02-04T10:19:28.428Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 6017
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": -0.02,
      "time": "2015-02-04T10:19:34.831Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 528
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.3,
      "change": 0,
      "time": "2015-02-04T10:20:26.309Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 9953
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.26,
      "change": -0.07,
      "time": "2015-02-04T10:20:46.884Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 6467
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.59,
      "change": 0.05,
      "time": "2015-02-04T10:21:46.293Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 8505
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": 0.05,
      "time": "2015-02-04T10:21:49.480Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 3526
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.32,
      "change": 0.02,
      "time": "2015-02-04T10:22:29.859Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 7700
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.18,
      "change": 0.03,
      "time": "2015-02-04T10:23:27.067Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 7388
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": -0.03,
      "time": "2015-02-04T10:23:59.430Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 8429
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.14,
      "change": -0.04,
      "time": "2015-02-04T10:24:06.698Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 8409
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.31,
      "change": 0,
      "time": "2015-02-04T10:24:31.742Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 1039
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": 0,
      "time": "2015-02-04T10:25:26.126Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 2334
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.59,
      "change": 0,
      "time": "2015-02-04T10:26:12.191Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 6705
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.59,
      "change": 0,
      "time": "2015-02-04T10:26:43.554Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 592
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.29,
      "change": -0.03,
      "time": "2015-02-04T10:27:24.789Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 6534
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.15,
      "change": 0.01,
      "time": "2015-02-04T10:27:40.297Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 2013
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.59,
      "change": 0.02,
      "time": "2015-02-04T10:28:02.336Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 3456
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.62,
      "change": 0.05,
      "time": "2015-02-04T10:28:25.472Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 4798
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.59,
      "change": -0.03,
      "time": "2015-02-04T10:28:49.541Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 7726
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.55,
      "change": -0.04,
      "time": "2015-02-04T10:29:14.571Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 5444
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.58,
      "change": -0.01,
      "time": "2015-02-04T10:29:17.524Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 7488
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.29,
      "change": -0.02,
      "time": "2015-02-04T10:29:52.049Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 7471
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.3,
      "change": 0.01,
      "time": "2015-02-04T10:30:03.732Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 5449
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": 0,
      "time": "2015-02-04T10:30:17.293Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT7",
      "volume": 6350
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.54,
      "change": -0.04,
      "time": "2015-02-04T10:31:10.679Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 5860
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.58,
      "change": 0.04,
      "time": "2015-02-04T10:32:00.726Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 1836
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.55,
      "change": 0,
      "time": "2015-02-04T10:32:08.725Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 7521
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.15,
      "change": 0.02,
      "time": "2015-02-04T10:32:26.951Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 7260
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.16,
      "change": 0.02,
      "time": "2015-02-04T10:32:37.042Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 7529
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.54,
      "change": -0.01,
      "time": "2015-02-04T10:33:05.670Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 6675
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.3,
      "change": 0,
      "time": "2015-02-04T10:33:56.880Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 9206
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.12,
      "change": -0.03,
      "time": "2015-02-04T10:34:14.005Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 4658
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.15,
      "change": 0,
      "time": "2015-02-04T10:34:30.479Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 8124
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.29,
      "change": -0.01,
      "time": "2015-02-04T10:34:31.407Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 9723
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.33,
      "change": 0.04,
      "time": "2015-02-04T10:34:36.388Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 2851
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.56,
      "change": -0.03,
      "time": "2015-02-04T10:35:07.102Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 8081
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.29,
      "change": -0.02,
      "time": "2015-02-04T10:35:14.602Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 7439
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.52,
      "change": -0.04,
      "time": "2015-02-04T10:36:03.036Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 9624
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.48,
      "change": -0.06,
      "time": "2015-02-04T10:36:31.830Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 7770
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.53,
      "change": -0.05,
      "time": "2015-02-04T10:37:05.592Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 8767
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.17,
      "change": 0.01,
      "time": "2015-02-04T10:37:52.381Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 2989
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": 0.05,
      "time": "2015-02-04T10:38:20.703Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 6727
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.18,
      "change": 0.03,
      "time": "2015-02-04T10:38:58.634Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 3284
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.52,
      "change": 0,
      "time": "2015-02-04T10:39:47.624Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 7893
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.54,
      "change": 0.02,
      "time": "2015-02-04T10:40:04.308Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 7605
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.16,
      "change": -0.01,
      "time": "2015-02-04T10:40:25.007Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 5963
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.15,
      "change": -0.01,
      "time": "2015-02-04T10:40:48.964Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 3052
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": -0.02,
      "time": "2015-02-04T10:41:11.660Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 365
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.29,
      "change": 0,
      "time": "2015-02-04T10:42:09.797Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 4122
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": -0.02,
      "time": "2015-02-04T10:42:46.148Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 4425
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.11,
      "change": -0.04,
      "time": "2015-02-04T10:43:46.135Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 6146
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.12,
      "change": -0.06,
      "time": "2015-02-04T10:44:30.877Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 294
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.31,
      "change": 0.02,
      "time": "2015-02-04T10:45:21.370Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 1619
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.55,
      "change": 0.02,
      "time": "2015-02-04T10:45:41.718Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 5194
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.34,
      "change": 0.05,
      "time": "2015-02-04T10:46:20.150Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 8993
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.51,
      "change": -0.03,
      "time": "2015-02-04T10:47:12.294Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 1023
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.33,
      "change": 0,
      "time": "2015-02-04T10:47:57.741Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 4987
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.31,
      "change": -0.03,
      "time": "2015-02-04T10:48:05.447Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 6100
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.15,
      "change": 0.04,
      "time": "2015-02-04T10:48:48.921Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 5224
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": 0,
      "time": "2015-02-04T10:49:23.904Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 5007
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.27,
      "change": -0.04,
      "time": "2015-02-04T10:49:59.906Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 191
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.57,
      "change": 0.02,
      "time": "2015-02-04T10:50:41.948Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 1551
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.11,
      "change": -0.04,
      "time": "2015-02-04T10:51:30.455Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT5",
      "volume": 6663
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.1,
      "change": -0.02,
      "time": "2015-02-04T10:52:14.153Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 7885
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": 0.02,
      "time": "2015-02-04T10:52:27.039Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 4774
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.09,
      "change": -0.01,
      "time": "2015-02-04T10:53:04.620Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 8684
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": 0,
      "time": "2015-02-04T10:53:37.672Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 3784
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.28,
      "change": 0.01,
      "time": "2015-02-04T10:54:04.900Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 4510
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.11,
      "change": 0.02,
      "time": "2015-02-04T10:55:02.951Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 481
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": 0,
      "time": "2015-02-04T10:55:04.420Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 8037
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.57,
      "change": 0.06,
      "time": "2015-02-04T10:55:15.307Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 9406
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.52,
      "change": -0.01,
      "time": "2015-02-04T10:55:38.513Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 3282
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.27,
      "change": -0.01,
      "time": "2015-02-04T10:56:21.548Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 480
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.29,
      "change": 0.02,
      "time": "2015-02-04T10:56:43.924Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 6929
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.29,
      "change": -0.02,
      "time": "2015-02-04T10:56:57.134Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 8982
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.56,
      "change": 0.04,
      "time": "2015-02-04T10:57:45.116Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 4407
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": 0.02,
      "time": "2015-02-04T10:57:47.819Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 5169
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": -0.02,
      "time": "2015-02-04T10:58:02.731Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 50
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.12,
      "change": 0.01,
      "time": "2015-02-04T10:58:11.764Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 9431
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.53,
      "change": -0.04,
      "time": "2015-02-04T10:59:11.685Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 2848
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.54,
      "change": -0.03,
      "time": "2015-02-04T10:59:27.408Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 1935
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.53,
      "change": 0,
      "time": "2015-02-04T10:59:46.651Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 7743
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.29,
      "change": -0.02,
      "time": "2015-02-04T10:59:52.923Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 2880
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.17,
      "change": 0.04,
      "time": "2015-02-04T11:00:17.400Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 9727
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": -0.04,
      "time": "2015-02-04T11:00:27.363Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 7287
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.28,
      "change": -0.01,
      "time": "2015-02-04T11:01:14.074Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 7474
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.31,
      "change": 0.02,
      "time": "2015-02-04T11:02:10.919Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 1999
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.27,
      "change": -0.02,
      "time": "2015-02-04T11:02:24.186Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 2250
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.32,
      "change": 0.01,
      "time": "2015-02-04T11:03:03.979Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 4269
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.27,
      "change": -0.01,
      "time": "2015-02-04T11:03:27.862Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 1050
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.14,
      "change": 0.01,
      "time": "2015-02-04T11:03:47.437Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 1735
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": -0.03,
      "time": "2015-02-04T11:04:32.983Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 1828
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.17,
      "change": 0.07,
      "time": "2015-02-04T11:05:12.049Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 3441
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.27,
      "change": -0.05,
      "time": "2015-02-04T11:05:56.983Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 2097
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.5,
      "change": -0.03,
      "time": "2015-02-04T11:06:16.180Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 5203
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.51,
      "change": -0.03,
      "time": "2015-02-04T11:06:28.202Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 4368
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.54,
      "change": 0.04,
      "time": "2015-02-04T11:07:26.564Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 8350
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.18,
      "change": 0.04,
      "time": "2015-02-04T11:08:05.875Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 1902
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.23,
      "change": -0.04,
      "time": "2015-02-04T11:08:39.043Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 8650
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.29,
      "change": 0.02,
      "time": "2015-02-04T11:09:10.942Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 6934
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.27,
      "change": 0.04,
      "time": "2015-02-04T11:09:44.020Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 212
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.28,
      "change": 0.01,
      "time": "2015-02-04T11:09:53.031Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 6500
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.2,
      "change": 0.08,
      "time": "2015-02-04T11:10:24.540Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 4684
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.51,
      "change": 0,
      "time": "2015-02-04T11:10:58.126Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 4410
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.31,
      "change": 0.02,
      "time": "2015-02-04T11:10:58.468Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 3800
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.23,
      "change": 0.06,
      "time": "2015-02-04T11:11:50.622Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 1230
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.22,
      "change": 0.04,
      "time": "2015-02-04T11:12:39.852Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 6179
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.52,
      "change": 0.01,
      "time": "2015-02-04T11:13:35.477Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 4683
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.54,
      "change": 0.01,
      "time": "2015-02-04T11:13:49.642Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 1344
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.58,
      "change": 0.06,
      "time": "2015-02-04T11:14:00.450Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 114
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.23,
      "change": 0,
      "time": "2015-02-04T11:14:30.005Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 4686
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.57,
      "change": 0.03,
      "time": "2015-02-04T11:15:06.033Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 2735
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.31,
      "change": 0.03,
      "time": "2015-02-04T11:15:59.850Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 8919
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.55,
      "change": -0.02,
      "time": "2015-02-04T11:16:35.651Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 7192
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.5,
      "change": -0.08,
      "time": "2015-02-04T11:16:44.444Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 4325
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.51,
      "change": -0.03,
      "time": "2015-02-04T11:17:10.998Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 8227
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.52,
      "change": 0.02,
      "time": "2015-02-04T11:17:23.102Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 1002
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.52,
      "change": 0.01,
      "time": "2015-02-04T11:17:30.501Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 378
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.33,
      "change": 0.06,
      "time": "2015-02-04T11:17:33.389Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 4214
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.49,
      "change": -0.03,
      "time": "2015-02-04T11:18:08.522Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT3",
      "volume": 9140
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": 0.03,
      "time": "2015-02-04T11:18:34.708Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 7373
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.52,
      "change": -0.03,
      "time": "2015-02-04T11:19:33.864Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 7204
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.25,
      "change": 0.05,
      "time": "2015-02-04T11:19:50.410Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 1320
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": 0.01,
      "time": "2015-02-04T11:20:33.646Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 4222
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.52,
      "change": 0,
      "time": "2015-02-04T11:21:33.417Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 1804
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.53,
      "change": 0.01,
      "time": "2015-02-04T11:22:17.662Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 1780
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": 0,
      "time": "2015-02-04T11:22:23.781Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 3771
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.22,
      "change": 0,
      "time": "2015-02-04T11:22:35.592Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 5915
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.19,
      "change": -0.04,
      "time": "2015-02-04T11:22:36.537Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 6225
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.53,
      "change": 0,
      "time": "2015-02-04T11:23:32.485Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT7",
      "volume": 8784
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.55,
      "change": 0.02,
      "time": "2015-02-04T11:24:25.778Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 5374
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.24,
      "change": -0.01,
      "time": "2015-02-04T11:25:18.710Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 5834
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.32,
      "change": -0.02,
      "time": "2015-02-04T11:25:52.896Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 9923
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.58,
      "change": 0.09,
      "time": "2015-02-04T11:26:34.598Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 3923
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.23,
      "change": 0.04,
      "time": "2015-02-04T11:27:02.040Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 1920
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.35,
      "change": 0.02,
      "time": "2015-02-04T11:27:11.527Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 4609
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.35,
      "change": 0.03,
      "time": "2015-02-04T11:27:50.688Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT5",
      "volume": 4890
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.6,
      "change": 0.02,
      "time": "2015-02-04T11:28:37.112Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 5089
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.61,
      "change": 0.08,
      "time": "2015-02-04T11:28:57.908Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 1831
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.2,
      "change": -0.02,
      "time": "2015-02-04T11:29:50.827Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 2930
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.21,
      "change": -0.03,
      "time": "2015-02-04T11:30:07.786Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 6546
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.35,
      "change": 0.04,
      "time": "2015-02-04T11:30:56.322Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 9629
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.35,
      "change": 0,
      "time": "2015-02-04T11:31:43.323Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 503
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.66,
      "change": 0.06,
      "time": "2015-02-04T11:32:32.074Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT2",
      "volume": 3633
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.6,
      "change": -0.06,
      "time": "2015-02-04T11:33:29.690Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 5431
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.22,
      "change": -0.01,
      "time": "2015-02-04T11:34:16.016Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 3017
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.63,
      "change": 0.03,
      "time": "2015-02-04T11:35:10.613Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 1502
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.24,
      "change": 0.04,
      "time": "2015-02-04T11:36:03.013Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT2",
      "volume": 3040
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.35,
      "change": 0,
      "time": "2015-02-04T11:36:50.420Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 4754
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.21,
      "change": -0.03,
      "time": "2015-02-04T11:36:55.612Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 50
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.39,
      "change": 0.04,
      "time": "2015-02-04T11:37:36.304Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 3282
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.63,
      "change": 0,
      "time": "2015-02-04T11:38:10.696Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT2",
      "volume": 9688
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.59,
      "change": 0.04,
      "time": "2015-02-04T11:39:06.937Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 5692
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.39,
      "change": 0.04,
      "time": "2015-02-04T11:39:36.181Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 6142
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.59,
      "change": 0,
      "time": "2015-02-04T11:40:07.820Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 8703
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.37,
      "change": -0.02,
      "time": "2015-02-04T11:40:31.536Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 8752
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.24,
      "change": 0.02,
      "time": "2015-02-04T11:40:35.091Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 628
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.35,
      "change": -0.02,
      "time": "2015-02-04T11:40:44.931Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 9571
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.23,
      "change": 0.02,
      "time": "2015-02-04T11:41:16.159Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 9898
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.6,
      "change": 0.01,
      "time": "2015-02-04T11:42:10.180Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 4522
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.26,
      "change": 0.05,
      "time": "2015-02-04T11:42:16.387Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 7182
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.21,
      "change": -0.03,
      "time": "2015-02-04T11:42:25.609Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 4868
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.63,
      "change": 0.03,
      "time": "2015-02-04T11:42:49.147Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 351
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.34,
      "change": -0.01,
      "time": "2015-02-04T11:43:48.757Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 3268
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.63,
      "change": 0,
      "time": "2015-02-04T11:44:35.893Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 2736
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.25,
      "change": 0.04,
      "time": "2015-02-04T11:45:19.747Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 5513
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.62,
      "change": 0.01,
      "time": "2015-02-04T11:46:12.084Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 8909
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.28,
      "change": 0.05,
      "time": "2015-02-04T11:46:41.376Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 152
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.24,
      "change": -0.02,
      "time": "2015-02-04T11:47:24.755Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 2898
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.23,
      "change": -0.02,
      "time": "2015-02-04T11:48:03.421Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 6576
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.65,
      "change": 0.02,
      "time": "2015-02-04T11:48:13.393Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT7",
      "volume": 432
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.36,
      "change": -0.03,
      "time": "2015-02-04T11:48:41.106Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 8290
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.22,
      "change": -0.06,
      "time": "2015-02-04T11:48:45.183Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 1218
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0.02,
      "time": "2015-02-04T11:49:18.508Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 3301
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.23,
      "change": -0.01,
      "time": "2015-02-04T11:49:45.009Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 8508
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.67,
      "change": 0.05,
      "time": "2015-02-04T11:50:30.727Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 1728
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.24,
      "change": 0.02,
      "time": "2015-02-04T11:50:35.097Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 1533
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.67,
      "change": 0,
      "time": "2015-02-04T11:51:17.276Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 5816
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.37,
      "change": 0.01,
      "time": "2015-02-04T11:51:55.608Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 4666
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.34,
      "change": -0.03,
      "time": "2015-02-04T11:51:58.343Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 3262
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.68,
      "change": 0.05,
      "time": "2015-02-04T11:52:57.507Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 6026
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.63,
      "change": -0.04,
      "time": "2015-02-04T11:53:05.731Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 3287
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.62,
      "change": -0.06,
      "time": "2015-02-04T11:54:05.390Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 616
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.26,
      "change": 0.03,
      "time": "2015-02-04T11:54:53.168Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 7845
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.37,
      "change": 0.02,
      "time": "2015-02-04T11:54:56.172Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 3809
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.64,
      "change": 0.02,
      "time": "2015-02-04T11:55:43.724Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 9570
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.66,
      "change": 0.03,
      "time": "2015-02-04T11:55:44.049Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 7467
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.3,
      "change": 0.04,
      "time": "2015-02-04T11:56:35.647Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 6135
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.27,
      "change": -0.03,
      "time": "2015-02-04T11:56:35.816Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 935
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.27,
      "change": 0.03,
      "time": "2015-02-04T11:57:10.938Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 4232
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.26,
      "change": -0.01,
      "time": "2015-02-04T11:58:09.524Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 1445
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.7,
      "change": 0.05,
      "time": "2015-02-04T11:58:36.651Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 9470
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.35,
      "change": 0.01,
      "time": "2015-02-04T11:58:40.533Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 3605
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.27,
      "change": 0,
      "time": "2015-02-04T11:59:09.055Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 9672
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.69,
      "change": -0.01,
      "time": "2015-02-04T11:59:14.238Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 2585
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0.01,
      "time": "2015-02-04T11:59:30.261Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 7027
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.25,
      "change": 0.02,
      "time": "2015-02-04T12:00:05.778Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 8622
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.23,
      "change": -0.04,
      "time": "2015-02-04T12:00:24.949Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 8246
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.35,
      "change": -0.01,
      "time": "2015-02-04T12:01:18.845Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 7010
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.33,
      "change": -0.04,
      "time": "2015-02-04T12:02:04.611Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 309
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.69,
      "change": 0.05,
      "time": "2015-02-04T12:02:56.440Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 5448
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.73,
      "change": 0.04,
      "time": "2015-02-04T12:02:59.726Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 86
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.23,
      "change": -0.03,
      "time": "2015-02-04T12:03:15.119Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 7190
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.25,
      "change": 0.02,
      "time": "2015-02-04T12:03:22.338Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 4663
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.76,
      "change": 0.1,
      "time": "2015-02-04T12:04:06.443Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 3976
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.74,
      "change": 0.01,
      "time": "2015-02-04T12:05:02.894Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 1026
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.37,
      "change": 0.04,
      "time": "2015-02-04T12:05:22.760Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 2875
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.36,
      "change": 0,
      "time": "2015-02-04T12:05:32.753Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 7287
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.37,
      "change": 0.01,
      "time": "2015-02-04T12:06:21.981Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 9276
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.33,
      "change": -0.04,
      "time": "2015-02-04T12:07:21.533Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 5478
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.77,
      "change": 0.01,
      "time": "2015-02-04T12:07:23.774Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT6",
      "volume": 5927
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.21,
      "change": -0.04,
      "time": "2015-02-04T12:07:26.204Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 2711
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.22,
      "change": -0.01,
      "time": "2015-02-04T12:07:31.043Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 7307
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.33,
      "change": -0.02,
      "time": "2015-02-04T12:08:06.160Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT6",
      "volume": 5073
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.75,
      "change": 0.01,
      "time": "2015-02-04T12:08:53.023Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 182
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.2,
      "change": -0.05,
      "time": "2015-02-04T12:09:28.295Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 2693
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.71,
      "change": -0.04,
      "time": "2015-02-04T12:09:43.709Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 1355
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.34,
      "change": 0.01,
      "time": "2015-02-04T12:10:01.259Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT3",
      "volume": 4817
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.74,
      "change": 0.05,
      "time": "2015-02-04T12:10:35.720Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 4751
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.73,
      "change": 0.02,
      "time": "2015-02-04T12:10:49.080Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 5700
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.77,
      "change": 0.03,
      "time": "2015-02-04T12:11:48.296Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 5186
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.22,
      "change": 0.02,
      "time": "2015-02-04T12:11:58.476Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 8828
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.34,
      "change": -0.03,
      "time": "2015-02-04T12:12:21.007Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 2769
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.3,
      "change": -0.04,
      "time": "2015-02-04T12:12:33.342Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT6",
      "volume": 1104
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.74,
      "change": -0.03,
      "time": "2015-02-04T12:12:45.760Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 698
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.22,
      "change": 0,
      "time": "2015-02-04T12:13:35.582Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 6478
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.2,
      "change": -0.02,
      "time": "2015-02-04T12:14:33.374Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 50
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.22,
      "change": 0.01,
      "time": "2015-02-04T12:15:17.541Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 3241
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.21,
      "change": -0.01,
      "time": "2015-02-04T12:15:37.498Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 412
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.77,
      "change": 0,
      "time": "2015-02-04T12:15:54.984Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 4165
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.75,
      "change": 0.02,
      "time": "2015-02-04T12:16:15.355Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 239
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.33,
      "change": 0.03,
      "time": "2015-02-04T12:16:38.928Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 7020
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.76,
      "change": 0.01,
      "time": "2015-02-04T12:16:40.454Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 6782
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.76,
      "change": 0.02,
      "time": "2015-02-04T12:16:52.729Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 880
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.77,
      "change": 0,
      "time": "2015-02-04T12:17:28.967Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT4",
      "volume": 7225
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.77,
      "change": 0,
      "time": "2015-02-04T12:17:39.827Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 7363
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.24,
      "change": 0.03,
      "time": "2015-02-04T12:18:27.052Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 728
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.21,
      "change": 0.01,
      "time": "2015-02-04T12:19:01.339Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 501
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.78,
      "change": 0.01,
      "time": "2015-02-04T12:19:59.524Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 8204
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.28,
      "change": -0.05,
      "time": "2015-02-04T12:20:10.096Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 5354
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.32,
      "change": 0.04,
      "time": "2015-02-04T12:20:14.628Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 1989
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.8,
      "change": 0.02,
      "time": "2015-02-04T12:20:49.103Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 7320
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.82,
      "change": 0.06,
      "time": "2015-02-04T12:21:23.747Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 6653
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.8,
      "change": -0.02,
      "time": "2015-02-04T12:21:57.422Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 9960
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.28,
      "change": -0.05,
      "time": "2015-02-04T12:22:18.509Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 2009
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.8,
      "change": 0,
      "time": "2015-02-04T12:22:33.001Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 7934
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.82,
      "change": 0.02,
      "time": "2015-02-04T12:23:06.257Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 50
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.31,
      "change": -0.01,
      "time": "2015-02-04T12:23:36.899Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 8932
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.84,
      "change": 0.04,
      "time": "2015-02-04T12:23:47.849Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 3080
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.23,
      "change": 0.02,
      "time": "2015-02-04T12:24:30.771Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 4512
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.19,
      "change": -0.04,
      "time": "2015-02-04T12:24:53.497Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 5510
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.29,
      "change": -0.02,
      "time": "2015-02-04T12:25:23.243Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 376
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.17,
      "change": -0.05,
      "time": "2015-02-04T12:25:42.865Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 193
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.18,
      "change": -0.01,
      "time": "2015-02-04T12:26:02.852Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT9",
      "volume": 6347
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.29,
      "change": 0,
      "time": "2015-02-04T12:26:25.929Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 4135
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.19,
      "change": 0.02,
      "time": "2015-02-04T12:26:29.244Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 1132
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.25,
      "change": -0.04,
      "time": "2015-02-04T12:27:15.772Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 7984
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.84,
      "change": 0,
      "time": "2015-02-04T12:27:38.059Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 1246
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.21,
      "change": -0.03,
      "time": "2015-02-04T12:27:57.964Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 6804
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.27,
      "change": -0.01,
      "time": "2015-02-04T12:28:27.773Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 7665
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.85,
      "change": 0.01,
      "time": "2015-02-04T12:28:42.956Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 3762
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.25,
      "change": 0,
      "time": "2015-02-04T12:29:02.776Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 8756
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.29,
      "change": 0.02,
      "time": "2015-02-04T12:29:35.074Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 8516
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.29,
      "change": 0,
      "time": "2015-02-04T12:29:46.017Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 5757
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.22,
      "change": -0.12,
      "time": "2015-02-04T12:30:08.099Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 5488
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.21,
      "change": 0.03,
      "time": "2015-02-04T12:30:59.151Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 7612
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.24,
      "change": -0.01,
      "time": "2015-02-04T12:31:02.512Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 5678
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.22,
      "change": 0.03,
      "time": "2015-02-04T12:31:27.244Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 8130
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.89,
      "change": 0.04,
      "time": "2015-02-04T12:32:21.442Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 8537
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.21,
      "change": -0.01,
      "time": "2015-02-04T12:33:05.012Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT7",
      "volume": 2727
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.86,
      "change": 0.04,
      "time": "2015-02-04T12:33:40.618Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 3763
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.83,
      "change": -0.06,
      "time": "2015-02-04T12:33:54.210Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 7409
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.21,
      "change": -0.03,
      "time": "2015-02-04T12:34:00.555Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 142
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.21,
      "change": 0,
      "time": "2015-02-04T12:34:29.943Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 5252
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.83,
      "change": 0,
      "time": "2015-02-04T12:35:19.809Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 5266
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.23,
      "change": 0.02,
      "time": "2015-02-04T12:36:19.303Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 4700
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.22,
      "change": 0.01,
      "time": "2015-02-04T12:36:32.994Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 3705
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.22,
      "change": 0.01,
      "time": "2015-02-04T12:37:03.911Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 4579
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.8,
      "change": 0.04,
      "time": "2015-02-04T12:37:27.450Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 2481
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.22,
      "change": -0.07,
      "time": "2015-02-04T12:38:10.072Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 5572
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.2,
      "change": -0.02,
      "time": "2015-02-04T12:39:06.606Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 5136
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.78,
      "change": -0.02,
      "time": "2015-02-04T12:39:56.618Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 1086
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.74,
      "change": -0.09,
      "time": "2015-02-04T12:40:39.072Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 9434
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.19,
      "change": -0.03,
      "time": "2015-02-04T12:40:59.790Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 5118
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.2,
      "change": -0.03,
      "time": "2015-02-04T12:41:25.086Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 533
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.18,
      "change": -0.02,
      "time": "2015-02-04T12:41:53.838Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 8454
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.17,
      "change": -0.01,
      "time": "2015-02-04T12:42:07.675Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 2546
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.72,
      "change": -0.06,
      "time": "2015-02-04T12:43:05.317Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 7417
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.79,
      "change": 0.05,
      "time": "2015-02-04T12:43:50.707Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 7120
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.14,
      "change": -0.05,
      "time": "2015-02-04T12:44:44.294Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 4690
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.19,
      "change": -0.02,
      "time": "2015-02-04T12:45:33.335Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 6700
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.16,
      "change": -0.03,
      "time": "2015-02-04T12:46:24.087Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 6650
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.16,
      "change": -0.04,
      "time": "2015-02-04T12:46:46.857Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 6135
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.14,
      "change": -0.08,
      "time": "2015-02-04T12:46:57.888Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 7120
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.13,
      "change": -0.09,
      "time": "2015-02-04T12:47:45.815Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 7432
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.1,
      "change": -0.04,
      "time": "2015-02-04T12:48:39.312Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 4653
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.09,
      "change": -0.07,
      "time": "2015-02-04T12:48:51.234Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 3956
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.76,
      "change": 0.04,
      "time": "2015-02-04T12:49:04.324Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 4850
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.12,
      "change": -0.01,
      "time": "2015-02-04T12:49:11.039Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 2379
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.78,
      "change": -0.01,
      "time": "2015-02-04T12:49:26.998Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 2375
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.11,
      "change": 0.01,
      "time": "2015-02-04T12:50:18.542Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 1313
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.18,
      "change": 0.04,
      "time": "2015-02-04T12:51:15.744Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 9399
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.07,
      "change": -0.05,
      "time": "2015-02-04T12:52:15.364Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 6995
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.11,
      "change": 0,
      "time": "2015-02-04T12:53:08.139Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 3325
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.19,
      "change": 0.03,
      "time": "2015-02-04T12:53:44.220Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 6389
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.07,
      "change": -0.02,
      "time": "2015-02-04T12:54:09.508Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 214
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.17,
      "change": 0,
      "time": "2015-02-04T12:54:14.584Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 1523
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.16,
      "change": -0.02,
      "time": "2015-02-04T12:54:49.078Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 9325
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.74,
      "change": -0.02,
      "time": "2015-02-04T12:55:02.953Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 6137
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.77,
      "change": -0.09,
      "time": "2015-02-04T12:55:16.568Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 5481
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.16,
      "change": 0,
      "time": "2015-02-04T12:56:07.620Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 6052
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.74,
      "change": -0.03,
      "time": "2015-02-04T12:57:04.383Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 6306
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.16,
      "change": 0,
      "time": "2015-02-04T12:57:12.780Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 1174
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.12,
      "change": 0.05,
      "time": "2015-02-04T12:57:51.948Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 6022
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.77,
      "change": -0.01,
      "time": "2015-02-04T12:58:01.497Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 671
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.14,
      "change": 0.03,
      "time": "2015-02-04T12:59:01.045Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 4337
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.8,
      "change": 0.06,
      "time": "2015-02-04T12:59:02.498Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 1952
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.14,
      "change": -0.05,
      "time": "2015-02-04T12:59:47.926Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 5012
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.14,
      "change": 0,
      "time": "2015-02-04T13:00:16.023Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 9554
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.14,
      "change": 0,
      "time": "2015-02-04T13:00:37.611Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT9",
      "volume": 4327
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.78,
      "change": -0.02,
      "time": "2015-02-04T13:01:29.779Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 6215
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.75,
      "change": 0.01,
      "time": "2015-02-04T13:02:13.591Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 8450
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.13,
      "change": -0.01,
      "time": "2015-02-04T13:03:12.613Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 399
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.17,
      "change": 0.1,
      "time": "2015-02-04T13:03:58.337Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 9720
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.13,
      "change": -0.04,
      "time": "2015-02-04T13:04:40.692Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 4299
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.13,
      "change": 0,
      "time": "2015-02-04T13:05:26.854Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 1948
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.78,
      "change": 0,
      "time": "2015-02-04T13:05:35.708Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 7702
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.81,
      "change": 0.03,
      "time": "2015-02-04T13:05:43.466Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 3604
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.13,
      "change": -0.04,
      "time": "2015-02-04T13:06:23.789Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 1277
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.81,
      "change": 0.06,
      "time": "2015-02-04T13:07:02.300Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 7006
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.11,
      "change": -0.05,
      "time": "2015-02-04T13:07:49.145Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 8265
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.12,
      "change": -0.01,
      "time": "2015-02-04T13:08:38.112Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 7477
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.13,
      "change": 0.01,
      "time": "2015-02-04T13:09:31.352Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 9658
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.09,
      "change": -0.05,
      "time": "2015-02-04T13:09:38.342Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 7806
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.83,
      "change": 0.02,
      "time": "2015-02-04T13:09:55.361Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT10",
      "volume": 2265
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.84,
      "change": 0.01,
      "time": "2015-02-04T13:10:06.498Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 5601
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.14,
      "change": 0.02,
      "time": "2015-02-04T13:10:20.145Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 2868
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.87,
      "change": 0.03,
      "time": "2015-02-04T13:10:34.413Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 180
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.89,
      "change": 0.12,
      "time": "2015-02-04T13:10:53.869Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 7007
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.11,
      "change": -0.03,
      "time": "2015-02-04T13:11:41.965Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 8693
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.87,
      "change": 0,
      "time": "2015-02-04T13:12:12.243Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 5631
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.9,
      "change": 0.01,
      "time": "2015-02-04T13:12:17.616Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT5",
      "volume": 7652
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.09,
      "change": -0.02,
      "time": "2015-02-04T13:12:47.622Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 332
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.08,
      "change": -0.05,
      "time": "2015-02-04T13:12:56.653Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT7",
      "volume": 64
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.1,
      "change": 0.01,
      "time": "2015-02-04T13:13:30.610Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 825
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": -0.03,
      "time": "2015-02-04T13:13:46.062Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 8963
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.11,
      "change": 0.01,
      "time": "2015-02-04T13:14:42.934Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 3851
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.09,
      "change": 0.01,
      "time": "2015-02-04T13:15:36.664Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 1111
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.91,
      "change": 0.1,
      "time": "2015-02-04T13:15:53.109Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 4509
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.05,
      "change": -0.06,
      "time": "2015-02-04T13:16:15.675Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 5583
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.89,
      "change": 0.02,
      "time": "2015-02-04T13:16:57.806Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 1993
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.89,
      "change": 0,
      "time": "2015-02-04T13:17:37.695Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 3470
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": -0.02,
      "time": "2015-02-04T13:18:21.339Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 5583
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.08,
      "change": -0.02,
      "time": "2015-02-04T13:18:25.268Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 7802
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.9,
      "change": 0.01,
      "time": "2015-02-04T13:18:30.128Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 7034
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.08,
      "change": -0.01,
      "time": "2015-02-04T13:19:07.519Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 2659
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.1,
      "change": 0.02,
      "time": "2015-02-04T13:19:40.676Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 1824
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.94,
      "change": 0.04,
      "time": "2015-02-04T13:20:21.869Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 1093
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.06,
      "change": -0.02,
      "time": "2015-02-04T13:20:41.878Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 4568
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.04,
      "change": -0.06,
      "time": "2015-02-04T13:21:15.688Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 2185
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.91,
      "change": 0.01,
      "time": "2015-02-04T13:21:23.637Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 9485
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.95,
      "change": 0.04,
      "time": "2015-02-04T13:21:35.512Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 7054
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.02,
      "change": -0.04,
      "time": "2015-02-04T13:22:06.456Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 6463
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.04,
      "change": -0.01,
      "time": "2015-02-04T13:22:16.247Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 3227
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.03,
      "change": -0.01,
      "time": "2015-02-04T13:22:25.601Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 150
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": 0,
      "time": "2015-02-04T13:23:16.837Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 422
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.13,
      "change": 0.04,
      "time": "2015-02-04T13:23:34.731Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 3910
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.02,
      "change": -0.07,
      "time": "2015-02-04T13:24:08.185Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT6",
      "volume": 3040
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.01,
      "change": -0.01,
      "time": "2015-02-04T13:24:20.447Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 816
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.09,
      "change": 0.05,
      "time": "2015-02-04T13:24:20.828Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 1916
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.92,
      "change": -0.03,
      "time": "2015-02-04T13:25:06.920Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 5494
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.1,
      "change": -0.03,
      "time": "2015-02-04T13:25:10.388Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 6612
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.99,
      "change": -0.03,
      "time": "2015-02-04T13:25:12.351Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 3832
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.04,
      "change": -0.06,
      "time": "2015-02-04T13:25:35.100Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 3488
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.92,
      "change": 0,
      "time": "2015-02-04T13:26:29.524Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 2071
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": -0.02,
      "time": "2015-02-04T13:26:34.183Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 3249
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": 0,
      "time": "2015-02-04T13:27:18.645Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 4958
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.94,
      "change": 0,
      "time": "2015-02-04T13:27:59.425Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 3676
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.91,
      "change": 0,
      "time": "2015-02-04T13:28:09.324Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 9153
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": 0.01,
      "time": "2015-02-04T13:28:48.416Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 9715
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.05,
      "change": 0.04,
      "time": "2015-02-04T13:28:57.826Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 9342
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.06,
      "change": 0.01,
      "time": "2015-02-04T13:29:57.226Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 8148
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.9,
      "change": -0.04,
      "time": "2015-02-04T13:29:58.526Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 7646
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.11,
      "change": 0.05,
      "time": "2015-02-04T13:30:20.718Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 5998
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.06,
      "change": 0.02,
      "time": "2015-02-04T13:30:51.490Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 5012
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.06,
      "change": 0.05,
      "time": "2015-02-04T13:31:37.622Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 166
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.05,
      "change": -0.08,
      "time": "2015-02-04T13:32:30.735Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 3832
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.09,
      "change": 0.04,
      "time": "2015-02-04T13:32:33.082Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 9121
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": 0.03,
      "time": "2015-02-04T13:32:35.874Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 60
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.04,
      "change": 0.05,
      "time": "2015-02-04T13:33:20.330Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 2406
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.1,
      "change": 0.06,
      "time": "2015-02-04T13:34:05.790Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 3742
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.05,
      "change": -0.04,
      "time": "2015-02-04T13:34:46.114Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 4707
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.91,
      "change": -0.01,
      "time": "2015-02-04T13:35:34.715Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 4156
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.09,
      "change": -0.01,
      "time": "2015-02-04T13:35:46.272Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 5064
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.89,
      "change": -0.02,
      "time": "2015-02-04T13:35:52.233Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 9524
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.1,
      "change": 0.01,
      "time": "2015-02-04T13:36:09.746Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 9678
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.88,
      "change": -0.02,
      "time": "2015-02-04T13:36:46.839Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 3517
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.12,
      "change": 0.02,
      "time": "2015-02-04T13:37:16.881Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 4569
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.88,
      "change": 0,
      "time": "2015-02-04T13:37:52.423Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 2478
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.07,
      "change": -0.02,
      "time": "2015-02-04T13:38:31.851Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 3647
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.09,
      "change": -0.02,
      "time": "2015-02-04T13:39:22.176Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 1524
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.94,
      "change": 0.05,
      "time": "2015-02-04T13:40:21.779Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 9193
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": -0.02,
      "time": "2015-02-04T13:41:05.569Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 4457
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": 0.04,
      "time": "2015-02-04T13:41:43.513Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT9",
      "volume": 9062
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.09,
      "change": 0.01,
      "time": "2015-02-04T13:42:34.229Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 2665
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.08,
      "change": 0.02,
      "time": "2015-02-04T13:42:50.464Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 3675
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.03,
      "change": -0.06,
      "time": "2015-02-04T13:43:38.305Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 394
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.1,
      "change": -0.02,
      "time": "2015-02-04T13:44:10.741Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 6821
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.93,
      "change": 0.05,
      "time": "2015-02-04T13:44:18.446Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 3484
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.03,
      "change": 0,
      "time": "2015-02-04T13:44:32.420Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 1182
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.08,
      "change": 0,
      "time": "2015-02-04T13:45:14.866Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 7678
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137,
      "change": -0.03,
      "time": "2015-02-04T13:46:09.269Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 6300
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.02,
      "change": 0.02,
      "time": "2015-02-04T13:46:36.224Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 9566
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.89,
      "change": -0.05,
      "time": "2015-02-04T13:47:03.160Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 829
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.11,
      "change": 0.02,
      "time": "2015-02-04T13:47:17.286Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT7",
      "volume": 5525
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.08,
      "change": -0.02,
      "time": "2015-02-04T13:48:06.077Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 2456
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.07,
      "change": -0.01,
      "time": "2015-02-04T13:48:30.387Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 2048
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.04,
      "change": -0.07,
      "time": "2015-02-04T13:48:59.305Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 5957
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.01,
      "change": -0.01,
      "time": "2015-02-04T13:49:47.974Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT7",
      "volume": 3260
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.89,
      "change": 0,
      "time": "2015-02-04T13:50:06.967Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 7512
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.03,
      "change": -0.05,
      "time": "2015-02-04T13:50:30.164Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT3",
      "volume": 6811
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.92,
      "change": 0.03,
      "time": "2015-02-04T13:51:19.800Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 5123
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.91,
      "change": -0.01,
      "time": "2015-02-04T13:51:30.823Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 4101
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.88,
      "change": -0.05,
      "time": "2015-02-04T13:52:29.247Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 1912
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.02,
      "change": -0.05,
      "time": "2015-02-04T13:53:13.280Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 4209
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.91,
      "change": 0.03,
      "time": "2015-02-04T13:53:28.453Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 1767
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.05,
      "change": -0.02,
      "time": "2015-02-04T13:53:38.484Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 6356
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.04,
      "change": 0.03,
      "time": "2015-02-04T13:54:30.241Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 8316
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.07,
      "change": -0.02,
      "time": "2015-02-04T13:55:14.054Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 1018
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.08,
      "change": 0.06,
      "time": "2015-02-04T13:55:15.402Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 6931
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.03,
      "change": -0.01,
      "time": "2015-02-04T13:56:15.168Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 1271
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.91,
      "change": 0,
      "time": "2015-02-04T13:56:28.711Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 4948
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": 0.04,
      "time": "2015-02-04T13:56:57.150Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 3741
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": 0,
      "time": "2015-02-04T13:57:43.410Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT7",
      "volume": 1916
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.02,
      "change": -0.01,
      "time": "2015-02-04T13:57:57.519Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT9",
      "volume": 381
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.92,
      "change": 0.01,
      "time": "2015-02-04T13:58:36.319Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 9183
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.02,
      "change": -0.01,
      "time": "2015-02-04T13:58:49.868Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 4490
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.02,
      "change": -0.06,
      "time": "2015-02-04T13:59:44.506Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 3328
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84,
      "change": -0.02,
      "time": "2015-02-04T14:00:10.518Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 6873
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.09,
      "change": 0.01,
      "time": "2015-02-04T14:00:59.506Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 5735
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.11,
      "change": 0.04,
      "time": "2015-02-04T14:01:23.570Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 2835
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.97,
      "change": -0.03,
      "time": "2015-02-04T14:01:54.525Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT6",
      "volume": 5910
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.01,
      "change": -0.01,
      "time": "2015-02-04T14:02:36.166Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 7793
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.94,
      "change": 0.03,
      "time": "2015-02-04T14:03:08.280Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 3550
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": -0.01,
      "time": "2015-02-04T14:03:13.571Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 9293
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": 0,
      "time": "2015-02-04T14:04:11.111Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 7179
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": 0,
      "time": "2015-02-04T14:04:33.643Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 1220
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.97,
      "change": -0.04,
      "time": "2015-02-04T14:04:46.465Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 4114
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.1,
      "change": 0.01,
      "time": "2015-02-04T14:05:01.714Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 9769
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.91,
      "change": -0.03,
      "time": "2015-02-04T14:05:47.642Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 746
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.99,
      "change": 0.02,
      "time": "2015-02-04T14:06:31.901Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 5428
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.11,
      "change": 0.06,
      "time": "2015-02-04T14:07:22.414Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 5432
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.11,
      "change": 0,
      "time": "2015-02-04T14:07:49.726Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 6026
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": -0.02,
      "time": "2015-02-04T14:08:44.888Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 5896
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.07,
      "change": -0.03,
      "time": "2015-02-04T14:09:15.550Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 3426
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.98,
      "change": -0.01,
      "time": "2015-02-04T14:09:23.373Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 9231
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.99,
      "change": 0.02,
      "time": "2015-02-04T14:09:39.848Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 2117
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.02,
      "change": 0.04,
      "time": "2015-02-04T14:10:29.598Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 3848
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.93,
      "change": 0.02,
      "time": "2015-02-04T14:11:08.696Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 1755
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.98,
      "change": -0.01,
      "time": "2015-02-04T14:11:55.811Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 973
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.95,
      "change": 0.03,
      "time": "2015-02-04T14:12:21.969Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 5211
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.08,
      "change": -0.01,
      "time": "2015-02-04T14:13:06.788Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 575
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.95,
      "change": 0.02,
      "time": "2015-02-04T14:13:07.895Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 9649
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.08,
      "change": 0,
      "time": "2015-02-04T14:13:32.748Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 8446
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.98,
      "change": 0,
      "time": "2015-02-04T14:14:04.086Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 2956
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.09,
      "change": 0.01,
      "time": "2015-02-04T14:14:57.647Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 5935
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.04,
      "change": -0.07,
      "time": "2015-02-04T14:15:44.892Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 9739
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84,
      "change": -0.02,
      "time": "2015-02-04T14:15:52.173Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 1799
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.05,
      "change": 0.01,
      "time": "2015-02-04T14:16:02.812Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT3",
      "volume": 2332
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84,
      "change": 0,
      "time": "2015-02-04T14:16:13.991Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 2827
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.98,
      "change": -0.03,
      "time": "2015-02-04T14:16:32.543Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 1800
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.95,
      "change": 0,
      "time": "2015-02-04T14:16:47.477Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 9138
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.95,
      "change": -0.05,
      "time": "2015-02-04T14:17:30.537Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 926
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.94,
      "change": -0.04,
      "time": "2015-02-04T14:18:07.105Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 1799
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.96,
      "change": 0.02,
      "time": "2015-02-04T14:18:47.137Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 4979
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.93,
      "change": -0.02,
      "time": "2015-02-04T14:19:28.842Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 5293
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.95,
      "change": 0.04,
      "time": "2015-02-04T14:19:56.062Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 7431
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.94,
      "change": -0.02,
      "time": "2015-02-04T14:20:28.387Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 9722
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.94,
      "change": -0.01,
      "time": "2015-02-04T14:20:57.536Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 9800
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.95,
      "change": -0.03,
      "time": "2015-02-04T14:21:04.607Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 2487
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": 0.01,
      "time": "2015-02-04T14:21:54.948Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT4",
      "volume": 8840
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.97,
      "change": 0.03,
      "time": "2015-02-04T14:22:00.427Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 9040
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.03,
      "change": -0.02,
      "time": "2015-02-04T14:22:13.622Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 4780
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.02,
      "change": -0.07,
      "time": "2015-02-04T14:22:39.161Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 4800
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.96,
      "change": 0.01,
      "time": "2015-02-04T14:23:08.464Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 9601
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.93,
      "change": -0.02,
      "time": "2015-02-04T14:23:25.192Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 4001
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.94,
      "change": -0.03,
      "time": "2015-02-04T14:24:00.542Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 6632
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137,
      "change": -0.03,
      "time": "2015-02-04T14:24:56.429Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT7",
      "volume": 449
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.99,
      "change": 0.05,
      "time": "2015-02-04T14:25:20.641Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 5998
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.95,
      "change": 0.02,
      "time": "2015-02-04T14:26:07.642Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 7596
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.99,
      "change": 0,
      "time": "2015-02-04T14:27:01.943Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 5258
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.99,
      "change": 0.04,
      "time": "2015-02-04T14:27:17.075Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 7677
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.97,
      "change": 0.04,
      "time": "2015-02-04T14:27:42.820Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 3066
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137,
      "change": -0.02,
      "time": "2015-02-04T14:28:21.502Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 7622
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.99,
      "change": -0.01,
      "time": "2015-02-04T14:29:20.631Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT10",
      "volume": 6167
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.99,
      "change": 0.03,
      "time": "2015-02-04T14:29:29.743Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 195
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.97,
      "change": 0.02,
      "time": "2015-02-04T14:30:02.667Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 5741
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.91,
      "change": -0.08,
      "time": "2015-02-04T14:30:49.311Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 9253
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.91,
      "change": -0.03,
      "time": "2015-02-04T14:31:05.970Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 2051
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266,
      "change": 0.03,
      "time": "2015-02-04T14:31:15.194Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 2238
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.89,
      "change": -0.02,
      "time": "2015-02-04T14:31:42.948Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 3869
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.95,
      "change": 0.06,
      "time": "2015-02-04T14:32:07.867Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 1773
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.99,
      "change": -0.01,
      "time": "2015-02-04T14:32:15.173Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 5222
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": 0.02,
      "time": "2015-02-04T14:33:08.237Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 2479
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.99,
      "change": 0,
      "time": "2015-02-04T14:33:39.717Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT7",
      "volume": 6700
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.93,
      "change": -0.04,
      "time": "2015-02-04T14:33:55.423Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 3273
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.91,
      "change": 0,
      "time": "2015-02-04T14:34:50.358Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 2883
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.92,
      "change": -0.01,
      "time": "2015-02-04T14:35:41.991Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 2594
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.98,
      "change": -0.01,
      "time": "2015-02-04T14:35:56.252Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 4606
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.88,
      "change": -0.07,
      "time": "2015-02-04T14:36:21.163Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 3707
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.91,
      "change": 0.03,
      "time": "2015-02-04T14:37:17.442Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 7276
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.92,
      "change": 0.01,
      "time": "2015-02-04T14:38:03.246Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 7309
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.91,
      "change": -0.01,
      "time": "2015-02-04T14:38:27.331Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 7975
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": 0,
      "time": "2015-02-04T14:39:23.815Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 231
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.91,
      "change": 0,
      "time": "2015-02-04T14:39:58.334Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT2",
      "volume": 8019
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.05,
      "change": 0.06,
      "time": "2015-02-04T14:40:12.565Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 7473
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.91,
      "change": -0.01,
      "time": "2015-02-04T14:40:12.718Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 5432
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.98,
      "change": -0.1,
      "time": "2015-02-04T14:40:49.258Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 7870
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.99,
      "change": -0.01,
      "time": "2015-02-04T14:41:19.372Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 7113
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.98,
      "change": 0,
      "time": "2015-02-04T14:42:15.782Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 9665
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.97,
      "change": -0.01,
      "time": "2015-02-04T14:42:40.757Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 9365
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.94,
      "change": 0.03,
      "time": "2015-02-04T14:43:21.638Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 8560
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.95,
      "change": -0.02,
      "time": "2015-02-04T14:44:20.857Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 3474
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.93,
      "change": -0.01,
      "time": "2015-02-04T14:44:39.213Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 7258
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.05,
      "change": 0,
      "time": "2015-02-04T14:44:45.165Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT9",
      "volume": 375
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.04,
      "change": 0.03,
      "time": "2015-02-04T14:44:48.561Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 8586
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.97,
      "change": -0.02,
      "time": "2015-02-04T14:45:42.758Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 1155
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.93,
      "change": 0,
      "time": "2015-02-04T14:45:45.609Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 2837
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.99,
      "change": 0.04,
      "time": "2015-02-04T14:45:55.826Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 8395
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.89,
      "change": -0.02,
      "time": "2015-02-04T14:46:55.180Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 86
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.07,
      "change": 0.02,
      "time": "2015-02-04T14:46:56.400Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 539
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.91,
      "change": 0.02,
      "time": "2015-02-04T14:47:36.969Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT7",
      "volume": 8269
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.01,
      "change": 0.04,
      "time": "2015-02-04T14:48:18.303Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 423
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.91,
      "change": 0,
      "time": "2015-02-04T14:48:22.027Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 9369
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.08,
      "change": 0.04,
      "time": "2015-02-04T14:48:45.216Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 1996
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.08,
      "change": 0.01,
      "time": "2015-02-04T14:49:26.200Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 7174
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.92,
      "change": 0.01,
      "time": "2015-02-04T14:49:44.059Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 4957
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.94,
      "change": 0.02,
      "time": "2015-02-04T14:50:20.178Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 9293
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.04,
      "change": 0.05,
      "time": "2015-02-04T14:50:58.388Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 1740
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.07,
      "change": -0.01,
      "time": "2015-02-04T14:51:01.226Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 2670
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.01,
      "change": 0.02,
      "time": "2015-02-04T14:51:21.274Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 3193
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.99,
      "change": -0.05,
      "time": "2015-02-04T14:51:49.678Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 2952
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.97,
      "change": 0.04,
      "time": "2015-02-04T14:52:33.342Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 6902
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.99,
      "change": 0.02,
      "time": "2015-02-04T14:52:49.271Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 8089
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.09,
      "change": 0.11,
      "time": "2015-02-04T14:53:34.746Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 4984
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.07,
      "change": -0.02,
      "time": "2015-02-04T14:54:23.107Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 9287
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.04,
      "change": 0.03,
      "time": "2015-02-04T14:54:34.208Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 5579
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.01,
      "change": 0.07,
      "time": "2015-02-04T14:55:05.072Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 6805
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": 0.02,
      "time": "2015-02-04T14:55:42.499Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 960
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84,
      "change": 0.09,
      "time": "2015-02-04T14:55:49.311Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 50
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.08,
      "change": 0.01,
      "time": "2015-02-04T14:56:13.669Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 9197
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.04,
      "change": 0.03,
      "time": "2015-02-04T14:56:30.407Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 1058
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.08,
      "change": 0,
      "time": "2015-02-04T14:57:29.035Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT2",
      "volume": 3093
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.04,
      "change": 0.03,
      "time": "2015-02-04T14:58:10.760Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 5983
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.01,
      "change": -0.03,
      "time": "2015-02-04T14:58:44.208Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT9",
      "volume": 1708
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.13,
      "change": 0.06,
      "time": "2015-02-04T14:59:00.163Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 3148
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.01,
      "change": 0.01,
      "time": "2015-02-04T14:59:11.444Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 4479
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.13,
      "change": 0.05,
      "time": "2015-02-04T14:59:55.286Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 3548
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.04,
      "change": 0,
      "time": "2015-02-04T15:00:05.144Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 2495
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.04,
      "change": 0.05,
      "time": "2015-02-04T15:00:23.305Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT6",
      "volume": 9089
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.04,
      "change": 0.03,
      "time": "2015-02-04T15:00:30.944Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 3538
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.12,
      "change": -0.01,
      "time": "2015-02-04T15:00:47.704Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT3",
      "volume": 3461
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.13,
      "change": 0,
      "time": "2015-02-04T15:01:30.844Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 514
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.15,
      "change": 0.07,
      "time": "2015-02-04T15:02:09.736Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 1959
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.11,
      "change": -0.02,
      "time": "2015-02-04T15:02:56.882Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 9397
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.07,
      "change": 0.06,
      "time": "2015-02-04T15:03:32.312Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 3122
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.11,
      "change": -0.01,
      "time": "2015-02-04T15:04:20.193Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 6462
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.04,
      "change": 0,
      "time": "2015-02-04T15:04:35.779Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT8",
      "volume": 6454
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.1,
      "change": -0.05,
      "time": "2015-02-04T15:05:09.185Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 549
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.07,
      "change": 0.03,
      "time": "2015-02-04T15:05:23.791Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 3804
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.09,
      "change": -0.02,
      "time": "2015-02-04T15:06:17.467Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 7153
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.02,
      "change": -0.02,
      "time": "2015-02-04T15:06:26.248Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 1403
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.11,
      "change": 0.02,
      "time": "2015-02-04T15:07:24.410Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 3159
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.05,
      "change": -0.02,
      "time": "2015-02-04T15:08:12.862Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 7963
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.05,
      "change": 0.01,
      "time": "2015-02-04T15:08:21.265Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 7685
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.06,
      "change": -0.01,
      "time": "2015-02-04T15:08:56.143Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 7200
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.02,
      "change": -0.03,
      "time": "2015-02-04T15:09:12.612Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT5",
      "volume": 2843
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.99,
      "change": -0.05,
      "time": "2015-02-04T15:09:40.545Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 477
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84,
      "change": -0.02,
      "time": "2015-02-04T15:10:23.840Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 5789
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.08,
      "change": -0.03,
      "time": "2015-02-04T15:10:37.083Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 5832
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84,
      "change": 0.01,
      "time": "2015-02-04T15:11:12.756Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 673
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.04,
      "change": -0.06,
      "time": "2015-02-04T15:11:41.433Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 2039
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.12,
      "change": 0.07,
      "time": "2015-02-04T15:11:57.098Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 4093
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.1,
      "change": -0.02,
      "time": "2015-02-04T15:12:38.250Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 9714
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.99,
      "change": -0.09,
      "time": "2015-02-04T15:13:03.502Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 9535
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.02,
      "change": -0.02,
      "time": "2015-02-04T15:13:59.115Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 6818
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.08,
      "change": 0.07,
      "time": "2015-02-04T15:14:58.034Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 5821
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.04,
      "change": -0.07,
      "time": "2015-02-04T15:15:54.731Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 4084
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.04,
      "change": 0.02,
      "time": "2015-02-04T15:16:09.678Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT4",
      "volume": 5713
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.05,
      "change": 0.06,
      "time": "2015-02-04T15:16:58.209Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT4",
      "volume": 7918
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.96,
      "change": -0.06,
      "time": "2015-02-04T15:17:10.667Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 2154
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.04,
      "change": 0,
      "time": "2015-02-04T15:18:01.448Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 5476
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.97,
      "change": -0.03,
      "time": "2015-02-04T15:18:37.195Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 9661
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266,
      "change": -0.04,
      "time": "2015-02-04T15:18:59.892Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 7886
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.06,
      "change": 0,
      "time": "2015-02-04T15:19:43.729Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 5044
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.04,
      "change": -0.06,
      "time": "2015-02-04T15:20:30.065Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 3975
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.98,
      "change": 0.01,
      "time": "2015-02-04T15:20:34.434Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 1394
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": -0.03,
      "time": "2015-02-04T15:20:53.510Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT10",
      "volume": 964
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.99,
      "change": -0.02,
      "time": "2015-02-04T15:21:27.732Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 1754
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.98,
      "change": -0.02,
      "time": "2015-02-04T15:21:56.929Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 697
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.02,
      "change": 0.04,
      "time": "2015-02-04T15:22:24.748Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT1",
      "volume": 1068
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.02,
      "change": -0.04,
      "time": "2015-02-04T15:22:28.200Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 4201
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.98,
      "change": -0.07,
      "time": "2015-02-04T15:23:00.848Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 2944
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.02,
      "change": 0.03,
      "time": "2015-02-04T15:23:12.797Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 1855
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": -0.01,
      "time": "2015-02-04T15:24:03.641Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 8423
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.05,
      "change": 0.05,
      "time": "2015-02-04T15:24:53.320Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 8230
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.03,
      "change": 0.07,
      "time": "2015-02-04T15:25:21.787Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT8",
      "volume": 8539
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.99,
      "change": -0.09,
      "time": "2015-02-04T15:26:13.611Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 2726
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.03,
      "change": 0.02,
      "time": "2015-02-04T15:26:19.866Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT5",
      "volume": 9146
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.01,
      "change": 0.02,
      "time": "2015-02-04T15:27:10.761Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 8591
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.97,
      "change": -0.06,
      "time": "2015-02-04T15:28:03.023Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 7746
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.04,
      "change": -0.01,
      "time": "2015-02-04T15:28:45.810Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 8011
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.01,
      "change": 0.03,
      "time": "2015-02-04T15:29:02.186Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 5253
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.02,
      "change": 0,
      "time": "2015-02-04T15:29:34.330Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 9195
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.01,
      "change": 0.03,
      "time": "2015-02-04T15:29:40.624Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 7008
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.02,
      "change": -0.01,
      "time": "2015-02-04T15:30:32.319Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 4116
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137,
      "change": -0.04,
      "time": "2015-02-04T15:31:00.057Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT3",
      "volume": 6855
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.98,
      "change": -0.04,
      "time": "2015-02-04T15:31:37.171Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT1",
      "volume": 9917
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.94,
      "change": -0.08,
      "time": "2015-02-04T15:31:50.688Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 4262
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.99,
      "change": 0.02,
      "time": "2015-02-04T15:32:40.742Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 1132
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.99,
      "change": 0.05,
      "time": "2015-02-04T15:33:15.664Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 3747
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.97,
      "change": -0.03,
      "time": "2015-02-04T15:33:28.270Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 915
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.99,
      "change": -0.03,
      "time": "2015-02-04T15:34:12.811Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 8918
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.99,
      "change": -0.05,
      "time": "2015-02-04T15:34:41.831Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT9",
      "volume": 4184
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.97,
      "change": -0.04,
      "time": "2015-02-04T15:35:09.063Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 3009
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.93,
      "change": -0.04,
      "time": "2015-02-04T15:36:07.273Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 3849
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.97,
      "change": -0.02,
      "time": "2015-02-04T15:36:13.529Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 5953
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.98,
      "change": 0.01,
      "time": "2015-02-04T15:36:48.028Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT1",
      "volume": 8955
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.93,
      "change": -0.06,
      "time": "2015-02-04T15:37:15.708Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 2876
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.03,
      "change": 0.05,
      "time": "2015-02-04T15:38:02.653Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 4291
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84,
      "change": 0.02,
      "time": "2015-02-04T15:38:35.991Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT4",
      "volume": 8357
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.97,
      "change": 0.04,
      "time": "2015-02-04T15:39:30.856Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 7681
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.97,
      "change": -0.02,
      "time": "2015-02-04T15:39:30.967Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 7566
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.96,
      "change": -0.01,
      "time": "2015-02-04T15:39:49.746Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT8",
      "volume": 545
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.99,
      "change": -0.02,
      "time": "2015-02-04T15:40:03.043Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 7603
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.03,
      "change": 0,
      "time": "2015-02-04T15:40:55.870Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 7014
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.02,
      "change": -0.01,
      "time": "2015-02-04T15:41:10.711Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 6107
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.93,
      "change": -0.04,
      "time": "2015-02-04T15:41:29.278Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 5537
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.02,
      "change": 0.02,
      "time": "2015-02-04T15:42:27.932Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT1",
      "volume": 8421
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.93,
      "change": 0,
      "time": "2015-02-04T15:43:11.922Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT5",
      "volume": 4240
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.97,
      "change": -0.02,
      "time": "2015-02-04T15:43:17.810Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT1",
      "volume": 781
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.89,
      "change": -0.04,
      "time": "2015-02-04T15:43:22.459Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT2",
      "volume": 3370
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.02,
      "change": 0.05,
      "time": "2015-02-04T15:43:57.239Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 5138
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.97,
      "change": -0.02,
      "time": "2015-02-04T15:44:39.131Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT8",
      "volume": 9634
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.89,
      "change": -0.04,
      "time": "2015-02-04T15:45:18.292Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT9",
      "volume": 2870
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.95,
      "change": -0.07,
      "time": "2015-02-04T15:46:05.778Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 1182
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.95,
      "change": -0.02,
      "time": "2015-02-04T15:47:00.026Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 3855
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.94,
      "change": -0.01,
      "time": "2015-02-04T15:47:01.236Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT7",
      "volume": 2183
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.91,
      "change": 0.02,
      "time": "2015-02-04T15:47:23.529Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 9510
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.91,
      "change": 0.02,
      "time": "2015-02-04T15:47:56.721Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT5",
      "volume": 6311
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.95,
      "change": -0.02,
      "time": "2015-02-04T15:48:29.301Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 277
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.96,
      "change": 0.01,
      "time": "2015-02-04T15:48:30.804Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 6210
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.03,
      "change": 0.01,
      "time": "2015-02-04T15:48:42.707Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 7831
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266,
      "change": 0.06,
      "time": "2015-02-04T15:49:18.545Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 2425
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.02,
      "change": 0,
      "time": "2015-02-04T15:49:24.375Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 7695
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.97,
      "change": -0.03,
      "time": "2015-02-04T15:50:15.428Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT7",
      "volume": 886
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.91,
      "change": 0,
      "time": "2015-02-04T15:50:24.031Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 273
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.99,
      "change": 0.02,
      "time": "2015-02-04T15:51:19.793Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 4106
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266,
      "change": 0.05,
      "time": "2015-02-04T15:51:21.821Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 4797
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84,
      "change": -0.02,
      "time": "2015-02-04T15:51:26.476Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT3",
      "volume": 6931
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.88,
      "change": -0.08,
      "time": "2015-02-04T15:52:17.565Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 1125
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.91,
      "change": 0.03,
      "time": "2015-02-04T15:52:21.636Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 7868
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266,
      "change": 0.01,
      "time": "2015-02-04T15:53:12.516Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 8430
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84,
      "change": 0,
      "time": "2015-02-04T15:53:18.692Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 1853
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.92,
      "change": 0.01,
      "time": "2015-02-04T15:53:41.848Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT3",
      "volume": 3595
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.97,
      "change": -0.03,
      "time": "2015-02-04T15:53:48.086Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 6108
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.01,
      "change": -0.02,
      "time": "2015-02-04T15:54:42.375Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT6",
      "volume": 7593
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 84.03,
      "change": 0.02,
      "time": "2015-02-04T15:54:47.523Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 6788
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.99,
      "change": -0.04,
      "time": "2015-02-04T15:55:02.517Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT8",
      "volume": 7788
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.92,
      "change": 0.01,
      "time": "2015-02-04T15:55:09.235Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 4664
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.93,
      "change": 0.01,
      "time": "2015-02-04T15:55:27.433Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT4",
      "volume": 6262
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.96,
      "change": 0.04,
      "time": "2015-02-04T15:56:26.003Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT5",
      "volume": 8872
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.95,
      "change": -0.05,
      "time": "2015-02-04T15:57:12.223Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 8160
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.97,
      "change": 0,
      "time": "2015-02-04T15:57:48.209Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 3446
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.99,
      "change": 0.02,
      "time": "2015-02-04T15:57:50.570Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 705
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266,
      "change": 0.01,
      "time": "2015-02-04T15:58:44.805Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 9088
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.98,
      "change": 0.03,
      "time": "2015-02-04T15:59:36.197Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT8",
      "volume": 3991
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.94,
      "change": -0.02,
      "time": "2015-02-04T16:00:06.380Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 4718
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.95,
      "change": 0.04,
      "time": "2015-02-04T16:00:48.447Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT10",
      "volume": 1081
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.9,
      "change": -0.03,
      "time": "2015-02-04T16:01:25.667Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT8",
      "volume": 2521
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.99,
      "change": -0.01,
      "time": "2015-02-04T16:01:38.746Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT4",
      "volume": 9981
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.89,
      "change": -0.05,
      "time": "2015-02-04T16:02:19.092Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 6037
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.91,
      "change": -0.04,
      "time": "2015-02-04T16:02:55.116Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT9",
      "volume": 4578
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84,
      "change": 0,
      "time": "2015-02-04T16:03:43.898Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 468
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.04,
      "change": 0.06,
      "time": "2015-02-04T16:03:51.200Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT2",
      "volume": 8789
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": 0.01,
      "time": "2015-02-04T16:04:29.495Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 6370
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 136.94,
      "change": 0.03,
      "time": "2015-02-04T16:04:58.917Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT1",
      "volume": 9599
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 136.94,
      "change": 0.04,
      "time": "2015-02-04T16:05:10.668Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT2",
      "volume": 6246
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.99,
      "change": 0.1,
      "time": "2015-02-04T16:05:19.884Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 4050
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.97,
      "change": -0.02,
      "time": "2015-02-04T16:05:22.433Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 4506
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": 0.05,
      "time": "2015-02-04T16:05:24.824Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT4",
      "volume": 4697
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.98,
      "change": 0.01,
      "time": "2015-02-04T16:05:31.916Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT1",
      "volume": 9115
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": 0,
      "time": "2015-02-04T16:05:39.461Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 1174
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.99,
      "change": -0.02,
      "time": "2015-02-04T16:06:10.392Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 5914
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137,
      "change": 0.02,
      "time": "2015-02-04T16:06:27.258Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 170
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.98,
      "change": -0.01,
      "time": "2015-02-04T16:07:09.616Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 4187
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.99,
      "change": -0.02,
      "time": "2015-02-04T16:07:24.583Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT9",
      "volume": 6040
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.01,
      "change": 0.02,
      "time": "2015-02-04T16:08:20.611Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT10",
      "volume": 959
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.98,
      "change": 0,
      "time": "2015-02-04T16:09:15.758Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT3",
      "volume": 5032
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.98,
      "change": -0.06,
      "time": "2015-02-04T16:09:26.838Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT3",
      "volume": 3459
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 83.98,
      "change": -0.03,
      "time": "2015-02-04T16:09:38.958Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 1224
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84,
      "change": 0.01,
      "time": "2015-02-04T16:09:51.584Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT4",
      "volume": 5416
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84,
      "change": 0.02,
      "time": "2015-02-04T16:10:00.099Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 5016
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 136.99,
      "change": -0.01,
      "time": "2015-02-04T16:10:27.245Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT8",
      "volume": 5963
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 265.97,
      "change": -0.01,
      "time": "2015-02-04T16:10:56.152Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT3",
      "volume": 1613
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.02,
      "change": 0.02,
      "time": "2015-02-04T16:11:00.854Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT5",
      "volume": 1123
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.95,
      "change": -0.03,
      "time": "2015-02-04T16:11:50.960Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT7",
      "volume": 4609
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 265.96,
      "change": -0.05,
      "time": "2015-02-04T16:12:44.739Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 1074
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.97,
      "change": -0.02,
      "time": "2015-02-04T16:13:22.266Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 1749
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.97,
      "change": 0,
      "time": "2015-02-04T16:14:16.765Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT7",
      "volume": 6842
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.96,
      "change": -0.04,
      "time": "2015-02-04T16:15:14.013Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT5",
      "volume": 9224
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266,
      "change": 0.05,
      "time": "2015-02-04T16:16:08.952Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT2",
      "volume": 824
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.01,
      "change": 0.02,
      "time": "2015-02-04T16:16:17.455Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT1",
      "volume": 6687
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": 0.01,
      "time": "2015-02-04T16:16:29.114Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT10",
      "volume": 6016
    },
    {
      "stock": "PLM",
      "sym": "PLM.L",
      "exchange": "LSE",
      "price": 83.96,
      "change": -0.01,
      "time": "2015-02-04T16:16:32.112Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT5",
      "volume": 8529
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.01,
      "change": 0.07,
      "time": "2015-02-04T16:16:57.969Z",
      "buyAccount": "ACCT6",
      "sellAccount": "ACCT1",
      "volume": 492
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": 0,
      "time": "2015-02-04T16:16:58.008Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 2510
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.04,
      "change": 0.03,
      "time": "2015-02-04T16:17:31.670Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT9",
      "volume": 7299
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.01,
      "change": 0.07,
      "time": "2015-02-04T16:17:33.305Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT5",
      "volume": 5456
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.03,
      "change": 0.06,
      "time": "2015-02-04T16:18:06.078Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 8287
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.03,
      "change": -0.01,
      "time": "2015-02-04T16:18:27.463Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 1407
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.04,
      "change": 0.03,
      "time": "2015-02-04T16:19:05.388Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT5",
      "volume": 9658
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.03,
      "change": 0.02,
      "time": "2015-02-04T16:19:22.329Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT3",
      "volume": 3040
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.02,
      "change": 0.06,
      "time": "2015-02-04T16:19:50.654Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT9",
      "volume": 9056
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 266.01,
      "change": -0.02,
      "time": "2015-02-04T16:20:29.736Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT10",
      "volume": 2712
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.02,
      "change": 0,
      "time": "2015-02-04T16:21:01.505Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT4",
      "volume": 8727
    },
    {
      "stock": "ABC",
      "sym": "ABC.L",
      "exchange": "LSE",
      "price": 137.02,
      "change": -0.02,
      "time": "2015-02-04T16:21:08.830Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT2",
      "volume": 5447
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 83.98,
      "change": 0.02,
      "time": "2015-02-04T16:21:52.419Z",
      "buyAccount": "ACCT10",
      "sellAccount": "ACCT3",
      "volume": 7069
    },
    {
      "stock": "GOG",
      "sym": "GOG.VX",
      "exchange": "XVTX",
      "price": 265.98,
      "change": -0.03,
      "time": "2015-02-04T16:22:48.311Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT9",
      "volume": 9327
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137,
      "change": -0.01,
      "time": "2015-02-04T16:23:44.518Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT6",
      "volume": 6695
    },
    {
      "stock": "GOG",
      "sym": "GOG.L",
      "exchange": "LSE",
      "price": 266.02,
      "change": 0,
      "time": "2015-02-04T16:24:17.514Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT4",
      "volume": 6852
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.03,
      "change": 0,
      "time": "2015-02-04T16:24:39.348Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT6",
      "volume": 6352
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84,
      "change": 0.02,
      "time": "2015-02-04T16:25:03.901Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT10",
      "volume": 423
    },
    {
      "stock": "ABC",
      "sym": "ABC.VX",
      "exchange": "XVTX",
      "price": 137.03,
      "change": 0.03,
      "time": "2015-02-04T16:25:54.887Z",
      "buyAccount": "ACCT4",
      "sellAccount": "ACCT6",
      "volume": 3673
    },
    {
      "stock": "PLM",
      "sym": "PLM.VX",
      "exchange": "XVTX",
      "price": 84.01,
      "change": 0.01,
      "time": "2015-02-04T16:26:07.312Z",
      "buyAccount": "ACCT1",
      "sellAccount": "ACCT2",
      "volume": 7016
    },
    {
      "stock": "PLM",
      "sym": "PLM.CHI",
      "exchange": "CHIX",
      "price": 84.01,
      "change": -0.01,
      "time": "2015-02-04T16:27:04.885Z",
      "buyAccount": "ACCT2",
      "sellAccount": "ACCT6",
      "volume": 9338
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.03,
      "change": 0,
      "time": "2015-02-04T16:27:43.332Z",
      "buyAccount": "ACCT9",
      "sellAccount": "ACCT3",
      "volume": 171
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.06,
      "change": 0.03,
      "time": "2015-02-04T16:28:20.216Z",
      "buyAccount": "ACCT5",
      "sellAccount": "ACCT6",
      "volume": 1363
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.03,
      "change": -0.03,
      "time": "2015-02-04T16:28:56.150Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT4",
      "volume": 8384
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.07,
      "change": 0.04,
      "time": "2015-02-04T16:29:03.429Z",
      "buyAccount": "ACCT3",
      "sellAccount": "ACCT2",
      "volume": 3977
    },
    {
      "stock": "GOG",
      "sym": "GOG.CHI",
      "exchange": "CHIX",
      "price": 266.06,
      "change": -0.01,
      "time": "2015-02-04T16:29:30.656Z",
      "buyAccount": "ACCT8",
      "sellAccount": "ACCT10",
      "volume": 5499
    },
    {
      "stock": "ABC",
      "sym": "ABC.CHI",
      "exchange": "CHIX",
      "price": 137.06,
      "change": 0.03,
      "time": "2015-02-04T16:29:57.389Z",
      "buyAccount": "ACCT7",
      "sellAccount": "ACCT8",
      "volume": 384
    }
  ]
}
},{}],7:[function(require,module,exports){
'use strict';

require('view/main-view');
},{"view/main-view":10}],8:[function(require,module,exports){
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
},{"../data.json":6}],9:[function(require,module,exports){
module.exports = '<section>\n' +
    '\n' +
    '	<nav class="navbar navbar-default">\n' +
    '		<div class="container-fluid">\n' +
    '			<div class="navbar-left">\n' +
    '				<p class="navbar-text">Exchanges</p>\n' +
    '				<bs-button-group data="${exchanges}" selected="${selectedExchanges}" on-change="filterExchanges(this.selected)"></bs-button-group>\n' +
    '			</div>\n' +
    '\n' +
    '			<div class="navbar-right">\n' +
    '				<p class="navbar-text">Stocks</p>\n' +
    '				<bs-button-group data="${stocks}" selected="${selectedStocks}" single-toggle="true" on-change="filterStocks(this.selected)"></bs-button-group>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</nav>\n' +
    '\n' +
    '	<trade-prices width="1170" height="600" data="${filteredTrades}"><trade-prices>/\n' +
    '\n' +
    '</section>';
},{}],10:[function(require,module,exports){


'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var widgetize = require('widgetize');
var template = require('./MainView.html');
var pkg = require('./package.json');
var MainViewPM = require('./MainViewPM.js');
var bindling = require('bindling');

require('component/trade-prices');
require('component/bs-button-group');

/**
 * Main View
 */

var MainView = function (_widgetize$base) {
	_inherits(MainView, _widgetize$base);

	function MainView() {
		_classCallCheck(this, MainView);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(MainView).apply(this, arguments));
	}

	_createClass(MainView, [{
		key: 'init',
		value: function init() {
			this._pm = new MainViewPM();
		}
	}, {
		key: 'attach',
		value: function attach(dom) {
			bindling(dom, this._pm);
			this._pm.init();
		}
	}]);

	return MainView;
}(widgetize.base(HTMLElement));

module.exports = widgetize(pkg.name, MainView, template);

},{"./MainView.html":9,"./MainViewPM.js":11,"./package.json":12,"bindling":13,"component/bs-button-group":1,"component/trade-prices":4,"widgetize":60}],11:[function(require,module,exports){

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var marketDataService = require('service/MarketDataService');

module.exports = function () {
	function MainViewPM() {
		_classCallCheck(this, MainViewPM);

		this.filteredTrades = [];

		this.exchanges = [];

		this.stocks = [];

		this.selectedExchanges = [];

		this.selectedStocks = [];

		this._trades = [];
	}

	_createClass(MainViewPM, [{
		key: 'init',
		value: function init() {
			var _this = this;

			var getTradesPromise = marketDataService.getTrades().then(function (trades) {
				_this._trades = trades;
			}).catch(function (error) {
				console.error(error);
			});

			var getExchangesPromise = marketDataService.getExchanges().then(function (exchanges) {
				_this.exchanges = exchanges;
				_this.selectedExchanges = exchanges.concat();
			}).catch(function (error) {
				console.error(error);
			});

			var getStocks = marketDataService.getStocks().then(function (stocks) {
				_this.stocks = stocks;
				_this.selectedStocks = [_this.stocks[0]];
			}).catch(function (error) {
				console.error(error);
			});

			Promise.all([getTradesPromise, getExchangesPromise, getStocks]).then(function () {
				filterTrades.call(_this);
			});
		}
	}, {
		key: 'filterExchanges',
		value: function filterExchanges(exchanges) {
			this.selectedExchanges = exchanges;
			filterTrades.call(this);
		}
	}, {
		key: 'filterStocks',
		value: function filterStocks(stocks) {
			this.selectedStocks = stocks;
			filterTrades.call(this);
		}
	}]);

	return MainViewPM;
}();

/* PRIVAYE */

function filterTrades() {
	var _this2 = this;

	this.filteredTrades = this._trades.filter(function (item) {
		var _item$sym$split = item.sym.split('.');

		var _item$sym$split2 = _slicedToArray(_item$sym$split, 2);

		var stockSym = _item$sym$split2[0];
		var exchangeSufix = _item$sym$split2[1];


		return _this2.selectedStocks.filter(function (item) {
			return item.sym === stockSym;
		}).length !== 0 && _this2.selectedExchanges.filter(function (item) {
			return item.suffix === exchangeSufix;
		}).length !== 0;
	});
}

},{"service/MarketDataService":8}],12:[function(require,module,exports){
module.exports={
  "name": "main-view",
  "main": "MainView.js",
  "browserify": {
    "transform": [
      "html2js-browserify",
      [
        "babelify",
        {
          "presets": [
            "es2015"
          ]
        }
      ]
    ]
  }
}
},{}],13:[function(require,module,exports){
'use strict';

var domify = require('domify');
var _template = require('lodash.template');
var matcher = require('template-matcher');
var _uniq = require('lodash.uniq');


module.exports = function bindling(template, model) {

	var dom = (typeof template === 'object') ? template : domify(template);

	var watchers = {};

	if (!model)
	{
		return dom;
	}

	var elements = dom.querySelectorAll('*');

	Array.prototype.forEach.call(elements, function(element) {
		
		Array.prototype.forEach.call(element.childNodes, function(node) {
			if (node.nodeType === 3)
			{
				parse(watchers, element, null, node, node.nodeValue, model);
			}
		});

		Array.prototype.forEach.call(element.attributes, function(attr) {
			parse(watchers, element, attr.name, null, attr.value, model);
		});
	});

	Object.observe(model, function(changes) {
		onChanges(watchers, changes);
	}, ['update']);

	return dom;
};



/* PRIVATE */

function parse(watchers, element, attrName, textNode, value, model)
{
	if (attrName && attrName.substr(0,3) === 'on-') 
	{
		return addListener(element, attrName, value, model);
	}

	if (value.indexOf('{') === -1 ) 
	{
		return;
	}

	var paramCount = params(value).length;

	var watch = {
		element: element,
		attrName: attrName,
		textNode: textNode,
		renderer: paramCount === 1 ? bindFactory(params(value)) : _template(value)
	};

	render(watch, model);

	params(value).forEach(function(param) {
		var watcher = watchers[param];

		if (!watcher)
		{
			watcher = watchers[param] = [];
		}

		watcher.push(watch);
	});
}


function onChanges(watchers, changes)
{
	changes.forEach(function(change) {
		var watcher = watchers[change.name];

		if (!watcher) 
		{
			return;
		}

		watcher.forEach(function(watch) {
			render(watch, change.object);
		});
	});
}


function render(watch, model)
{
	var content = watch.renderer(model);
	
	if (watch.attrName && watch.element.getAttribute(watch.attrName) !== content)
	{
		watch.element[watch.attrName] = content;
	}
	else if (watch.textNode && watch.textNode.nodeValue !== content)
	{
		watch.textNode.nodeValue = content;
	}
}


function params(value)
{
	return _uniq(matcher(value));
}


function addListener(element, attrName, value, model)
{
	var event = attrName.substring(3).toLowerCase();
	
	var open = value.indexOf('(');
	var functionName = value.substring(0, open);

	var argStr = value.substring(open+1, value.indexOf(')'));
	var args = argStr.split(',');

	element.removeAttribute(attrName);

	element.addEventListener(event, function onEvent(event) {
		
		var argValues = [];

		args.forEach(function(arg){
			if (arg)
			{
				if (arg.substr(0, 5) === 'this.')
				{
					argValues.push( element[arg.substring(5)] );
				}
				else
				{
					argValues.push( eval(arg) );
				}
			}
		});
		argValues.push(event);
		
		model[functionName].apply(model, argValues);
	});
}


function bindFactory(value)
{
	return function (model) {
		if (model[value] !== undefined)
		{
			return model[value];
		}
		else
		{
			return null;
		}
	};
}
},{"domify":14,"lodash.template":15,"lodash.uniq":29,"template-matcher":46}],14:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],15:[function(require,module,exports){
/**
 * lodash 3.6.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCopy = require('lodash._basecopy'),
    baseToString = require('lodash._basetostring'),
    baseValues = require('lodash._basevalues'),
    isIterateeCall = require('lodash._isiterateecall'),
    reInterpolate = require('lodash._reinterpolate'),
    keys = require('lodash.keys'),
    restParam = require('lodash.restparam'),
    templateSettings = require('lodash.templatesettings');

/** `Object#toString` result references. */
var errorTag = '[object Error]';

/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/** Used to match [ES template delimiters](http://ecma-international.org/ecma-262/6.0/#sec-template-literal-lexical-components). */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used to match unescaped characters in compiled string literals. */
var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

/** Used to escape characters for inclusion in compiled string literals. */
var stringEscapes = {
  '\\': '\\',
  "'": "'",
  '\n': 'n',
  '\r': 'r',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeStringChar(chr) {
  return '\\' + stringEscapes[chr];
}

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * Used by `_.template` to customize its `_.assign` use.
 *
 * **Note:** This function is like `assignDefaults` except that it ignores
 * inherited property values when checking if a property is `undefined`.
 *
 * @private
 * @param {*} objectValue The destination object property value.
 * @param {*} sourceValue The source object property value.
 * @param {string} key The key associated with the object and source values.
 * @param {Object} object The destination object.
 * @returns {*} Returns the value to assign to the destination object.
 */
function assignOwnDefaults(objectValue, sourceValue, key, object) {
  return (objectValue === undefined || !hasOwnProperty.call(object, key))
    ? sourceValue
    : objectValue;
}

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
}

/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is provided it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options] The options object.
 * @param {RegExp} [options.escape] The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
 * @param {Object} [options.imports] An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
 * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
 * @param {string} [options.variable] The data object variable name.
 * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // using the "interpolate" delimiter to create a compiled template
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // using the HTML "escape" delimiter to escape data property values
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // using the "evaluate" delimiter to execute JavaScript and generate HTML
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // using the internal `print` function in "evaluate" delimiters
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // using the ES delimiter as an alternative to the default "interpolate" delimiter
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // using custom template delimiters
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // using backslashes to treat delimiters as plain text
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // using the `imports` option to import `jQuery` as `jq`
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // using the `sourceURL` option to specify a custom sourceURL for the template
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
 *
 * // using the `variable` option to ensure a with-statement isn't used in the compiled template
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // using the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and a stack trace
 * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */
function template(string, options, otherOptions) {
  // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (otherOptions && isIterateeCall(string, options, otherOptions)) {
    options = otherOptions = undefined;
  }
  string = baseToString(string);
  options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

  var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);

  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '";

  // Compile the regexp to match each delimiter.
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' +
    interpolate.source + '|' +
    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
    (options.evaluate || reNoMatch).source + '|$'
  , 'g');

  // Use a sourceURL for easier debugging.
  var sourceURL = 'sourceURL' in options ? '//# sourceURL=' + options.sourceURL + '\n' : '';

  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    interpolateValue || (interpolateValue = esTemplateValue);

    // Escape characters that can't be included in string literals.
    source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

    // Replace delimiters with snippets.
    if (escapeValue) {
      isEscaping = true;
      source += "' +\n__e(" + escapeValue + ") +\n'";
    }
    if (evaluateValue) {
      isEvaluating = true;
      source += "';\n" + evaluateValue + ";\n__p += '";
    }
    if (interpolateValue) {
      source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
    }
    index = offset + match.length;

    // The JS engine embedded in Adobe products requires returning the `match`
    // string in order to produce the correct `offset` value.
    return match;
  });

  source += "';\n";

  // If `variable` is not specified wrap a with-statement around the generated
  // code to add the data object to the top of the scope chain.
  var variable = options.variable;
  if (!variable) {
    source = 'with (obj) {\n' + source + '\n}\n';
  }
  // Cleanup code by stripping empty strings.
  source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
    .replace(reEmptyStringMiddle, '$1')
    .replace(reEmptyStringTrailing, '$1;');

  // Frame code as the function body.
  source = 'function(' + (variable || 'obj') + ') {\n' +
    (variable
      ? ''
      : 'obj || (obj = {});\n'
    ) +
    "var __t, __p = ''" +
    (isEscaping
       ? ', __e = _.escape'
       : ''
    ) +
    (isEvaluating
      ? ', __j = Array.prototype.join;\n' +
        "function print() { __p += __j.call(arguments, '') }\n"
      : ';\n'
    ) +
    source +
    'return __p\n}';

  var result = attempt(function() {
    return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
  });

  // Provide the compiled function's source by its `toString` method or
  // the `source` property as a convenience for inlining compiled templates.
  result.source = source;
  if (isError(result)) {
    throw result;
  }
  return result;
}

/**
 * Attempts to invoke `func`, returning either the result or the caught error
 * object. Any additional arguments are provided to `func` when it is invoked.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Function} func The function to attempt.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // avoid throwing errors for invalid selectors
 * var elements = _.attempt(function(selector) {
 *   return document.querySelectorAll(selector);
 * }, '>_>');
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
var attempt = restParam(function(func, args) {
  try {
    return func.apply(undefined, args);
  } catch(e) {
    return isError(e) ? e : new Error(e);
  }
});

module.exports = template;

},{"lodash._basecopy":16,"lodash._basetostring":17,"lodash._basevalues":18,"lodash._isiterateecall":19,"lodash._reinterpolate":20,"lodash.keys":23,"lodash.restparam":27,"lodash.templatesettings":28}],16:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property names to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @returns {Object} Returns `object`.
 */
function baseCopy(source, props, object) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    object[key] = source[key];
  }
  return object;
}

module.exports = baseCopy;

},{}],17:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

module.exports = baseToString;

},{}],18:[function(require,module,exports){
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * returned by `keysFunc`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  var index = -1,
      length = props.length,
      result = Array(length);

  while (++index < length) {
    result[index] = object[props[index]];
  }
  return result;
}

module.exports = baseValues;

},{}],19:[function(require,module,exports){
/**
 * lodash 3.0.9 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if the provided arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
      ? (isArrayLike(object) && isIndex(index, object.length))
      : (type == 'string' && index in object)) {
    var other = object[index];
    return value === value ? (value === other) : (other !== other);
  }
  return false;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = isIterateeCall;

},{}],20:[function(require,module,exports){
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to match template delimiters. */
var reInterpolate = /<%=([\s\S]+?)%>/g;

module.exports = reInterpolate;

},{}],21:[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = require('lodash._root');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
function escapeHtmlChar(chr) {
  return htmlEscapes[chr];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value.
 * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
 * for more details.
 *
 * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
 * to reduce XSS vectors.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return (string && reHasUnescapedHtml.test(string))
    ? string.replace(reUnescapedHtml, escapeHtmlChar)
    : string;
}

module.exports = escape;

},{"lodash._root":22}],22:[function(require,module,exports){
(function (global){
/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;

/** Detect free variable `module`. */
var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;

/** Detect free variable `global` from Node.js. */
var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = checkGlobal(objectTypes[typeof self] && self);

/** Detect free variable `window`. */
var freeWindow = checkGlobal(objectTypes[typeof window] && window);

/** Detect `this` as the global object. */
var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();

/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return (value && value.Object === Object) ? value : null;
}

module.exports = root;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],23:[function(require,module,exports){
/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = require('lodash._getnative'),
    isArguments = require('lodash.isarguments'),
    isArray = require('lodash.isarray');

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;

},{"lodash._getnative":24,"lodash.isarguments":25,"lodash.isarray":26}],24:[function(require,module,exports){
/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;

},{}],25:[function(require,module,exports){
/**
 * lodash 3.0.6 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null &&
    !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array constructors, and
  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;

},{}],26:[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;

},{}],27:[function(require,module,exports){
/**
 * lodash 3.6.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;

},{}],28:[function(require,module,exports){
/**
 * lodash 3.1.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var escape = require('lodash.escape'),
    reInterpolate = require('lodash._reinterpolate');

/** Used to match template delimiters. */
var reEscape = /<%-([\s\S]+?)%>/g,
    reEvaluate = /<%([\s\S]+?)%>/g;

/**
 * By default, the template delimiters used by lodash are like those in
 * embedded Ruby (ERB). Change the following template settings to use
 * alternative delimiters.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var templateSettings = {

  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type RegExp
   */
  'escape': reEscape,

  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type RegExp
   */
  'evaluate': reEvaluate,

  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type RegExp
   */
  'interpolate': reInterpolate,

  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type string
   */
  'variable': '',

  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type Object
   */
  'imports': {

    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type Function
     */
    '_': { 'escape': escape }
  }
};

module.exports = templateSettings;

},{"lodash._reinterpolate":20,"lodash.escape":21}],29:[function(require,module,exports){
/**
 * lodash 3.2.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCallback = require('lodash._basecallback'),
    baseUniq = require('lodash._baseuniq'),
    isIterateeCall = require('lodash._isiterateecall');

/**
 * An implementation of `_.uniq` optimized for sorted arrays without support
 * for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate-value-free array.
 */
function sortedUniq(array, iteratee) {
  var seen,
      index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value, index, array) : value;

    if (!index || seen !== computed) {
      seen = computed;
      result[++resIndex] = value;
    }
  }
  return result;
}

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurence of each element
 * is kept. Providing `true` for `isSorted` performs a faster search algorithm
 * for sorted arrays. If an iteratee function is provided it is invoked for
 * each element in the array to generate the criterion by which uniqueness
 * is computed. The `iteratee` is bound to `thisArg` and invoked with three
 * arguments: (value, index, array).
 *
 * If a property name is provided for `iteratee` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `iteratee` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias unique
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {boolean} [isSorted] Specify the array is sorted.
 * @param {Function|Object|string} [iteratee] The function invoked per iteration.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {Array} Returns the new duplicate-value-free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 *
 * // using `isSorted`
 * _.uniq([1, 1, 2], true);
 * // => [1, 2]
 *
 * // using an iteratee function
 * _.uniq([1, 2.5, 1.5, 2], function(n) {
 *   return this.floor(n);
 * }, Math);
 * // => [1, 2.5]
 *
 * // using the `_.property` callback shorthand
 * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniq(array, isSorted, iteratee, thisArg) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  if (isSorted != null && typeof isSorted != 'boolean') {
    thisArg = iteratee;
    iteratee = isIterateeCall(array, isSorted, thisArg) ? undefined : isSorted;
    isSorted = false;
  }
  iteratee = iteratee == null ? iteratee : baseCallback(iteratee, thisArg, 3);
  return (isSorted)
    ? sortedUniq(array, iteratee)
    : baseUniq(array, iteratee);
}

module.exports = uniq;

},{"lodash._basecallback":30,"lodash._baseuniq":39,"lodash._isiterateecall":44}],30:[function(require,module,exports){
/**
 * lodash 3.3.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIsEqual = require('lodash._baseisequal'),
    bindCallback = require('lodash._bindcallback'),
    isArray = require('lodash.isarray'),
    pairs = require('lodash.pairs');

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

/**
 * The base implementation of `_.callback` which supports specifying the
 * number of arguments to provide to `func`.
 *
 * @private
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return thisArg === undefined
      ? func
      : bindCallback(func, thisArg, argCount);
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return thisArg === undefined
    ? property(func)
    : baseMatchesProperty(func, thisArg);
}

/**
 * The base implementation of `get` without support for string paths
 * and default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path of the property to get.
 * @param {string} [pathKey] The key representation of path.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path, pathKey) {
  if (object == null) {
    return;
  }
  if (pathKey !== undefined && pathKey in toObject(object)) {
    path = [pathKey];
  }
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isMatch` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} matchData The propery names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = toObject(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.matches` which does not clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === value && (value !== undefined || (key in toObject(object)));
    };
  }
  return function(object) {
    return baseIsMatch(object, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to compare.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  var isArr = isArray(path),
      isCommon = isKey(path) && isStrictComparable(srcValue),
      pathKey = (path + '');

  path = toPath(path);
  return function(object) {
    if (object == null) {
      return false;
    }
    var key = pathKey;
    object = toObject(object);
    if ((isArr || !isCommon) && !(key in object)) {
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      key = last(path);
      object = toObject(object);
    }
    return object[key] === srcValue
      ? (srcValue !== undefined || (key in object))
      : baseIsEqual(srcValue, object[key], undefined, true);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  var pathKey = (path + '');
  path = toPath(path);
  return function(object) {
    return baseGet(object, path, pathKey);
  };
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Gets the propery names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = pairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  var type = typeof value;
  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
    return true;
  }
  if (isArray(value)) {
    return false;
  }
  var result = !reIsDeepProp.test(value);
  return result || (object != null && value in toObject(object));
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

/**
 * Converts `value` to property path array if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array} Returns the property path array.
 */
function toPath(value) {
  if (isArray(value)) {
    return value;
  }
  var result = [];
  baseToString(value).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the property value at `path` on a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = baseCallback;

},{"lodash._baseisequal":31,"lodash._bindcallback":35,"lodash.isarray":45,"lodash.pairs":36}],31:[function(require,module,exports){
/**
 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isArray = require('lodash.isarray'),
    isTypedArray = require('lodash.istypedarray'),
    keys = require('lodash.keys');

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} value The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = baseIsEqual;

},{"lodash.isarray":45,"lodash.istypedarray":32,"lodash.keys":33}],32:[function(require,module,exports){
/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dateTag] = typedArrayTags[errorTag] =
typedArrayTags[funcTag] = typedArrayTags[mapTag] =
typedArrayTags[numberTag] = typedArrayTags[objectTag] =
typedArrayTags[regexpTag] = typedArrayTags[setTag] =
typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = isTypedArray;

},{}],33:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23,"lodash._getnative":43,"lodash.isarguments":34,"lodash.isarray":45}],34:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],35:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;

},{}],36:[function(require,module,exports){
/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var keys = require('lodash.keys');

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates a two dimensional array of the key-value pairs for `object`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'barney': 36, 'fred': 40 });
 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
 */
function pairs(object) {
  object = toObject(object);

  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);

  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}

module.exports = pairs;

},{"lodash.keys":37}],37:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23,"lodash._getnative":43,"lodash.isarguments":38,"lodash.isarray":45}],38:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],39:[function(require,module,exports){
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIndexOf = require('lodash._baseindexof'),
    cacheIndexOf = require('lodash._cacheindexof'),
    createCache = require('lodash._createcache');

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniq` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The function invoked per iteration.
 * @returns {Array} Returns the new duplicate-value-free array.
 */
function baseUniq(array, iteratee) {
  var index = -1,
      indexOf = baseIndexOf,
      length = array.length,
      isCommon = true,
      isLarge = isCommon && length >= LARGE_ARRAY_SIZE,
      seen = isLarge ? createCache() : null,
      result = [];

  if (seen) {
    indexOf = cacheIndexOf;
    isCommon = false;
  } else {
    isLarge = false;
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value, index, array) : value;

    if (isCommon && value === value) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (indexOf(seen, computed, 0) < 0) {
      if (iteratee || isLarge) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;

},{"lodash._baseindexof":40,"lodash._cacheindexof":41,"lodash._createcache":42}],40:[function(require,module,exports){
/**
 * lodash 3.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `_.indexOf` without support for binary searches.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 * If `fromRight` is provided elements of `array` are iterated from right to left.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;

},{}],41:[function(require,module,exports){
/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is in `cache` mimicking the return signature of
 * `_.indexOf` by returning `0` if the value is found, else `-1`.
 *
 * @private
 * @param {Object} cache The cache to search.
 * @param {*} value The value to search for.
 * @returns {number} Returns `0` if `value` is found, else `-1`.
 */
function cacheIndexOf(cache, value) {
  var data = cache.data,
      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

  return result ? 0 : -1;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = cacheIndexOf;

},{}],42:[function(require,module,exports){
(function (global){
/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = require('lodash._getnative');

/** Native method references. */
var Set = getNative(global, 'Set');

/* Native method references for those with the same name as other `lodash` methods. */
var nativeCreate = getNative(Object, 'create');

/**
 *
 * Creates a cache object to store unique values.
 *
 * @private
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var length = values ? values.length : 0;

  this.data = { 'hash': nativeCreate(null), 'set': new Set };
  while (length--) {
    this.push(values[length]);
  }
}

/**
 * Adds `value` to the cache.
 *
 * @private
 * @name push
 * @memberOf SetCache
 * @param {*} value The value to cache.
 */
function cachePush(value) {
  var data = this.data;
  if (typeof value == 'string' || isObject(value)) {
    data.set.add(value);
  } else {
    data.hash[value] = true;
  }
}

/**
 * Creates a `Set` cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [values] The values to cache.
 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
 */
function createCache(values) {
  return (nativeCreate && Set) ? new SetCache(values) : null;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

// Add functions to the `Set` cache.
SetCache.prototype.push = cachePush;

module.exports = createCache;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"lodash._getnative":43}],43:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],44:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"dup":19}],45:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],46:[function(require,module,exports){

var templateSettings = require('lodash.templatesettings');
var baseToString = require('lodash._basetostring');
var isIterateeCall = require('lodash._isiterateecall');
var baseCopy = require('lodash._basecopy');
var keys = require('lodash.keys');
var baseValues = require('lodash._basevalues');
var reInterpolate = require('lodash._reinterpolate');


/** Used to match empty string literals in compiled template source. */
var reEmptyStringLeading = /\b__p \+= '';/g,
    reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
    reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

/** Used to match [ES template delimiters](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literal-lexical-components). */
var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;


/** Used to ensure capturing order of template delimiters. */
var reNoMatch = /($^)/;

/** Used for native method references. */
var objectProto = Object.prototype;


/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;


/**
 * Used by `_.template` to customize its `_.assign` use.
 *
 * **Note:** This function is like `assignDefaults` except that it ignores
 * inherited property values when checking if a property is `undefined`.
 *
 * @private
 * @param {*} objectValue The destination object property value.
 * @param {*} sourceValue The source object property value.
 * @param {string} key The key associated with the object and source values.
 * @param {Object} object The destination object.
 * @returns {*} Returns the value to assign to the destination object.
 */
function assignOwnDefaults(objectValue, sourceValue, key, object) {
  return (objectValue === undefined || !hasOwnProperty.call(object, key))
    ? sourceValue
    : objectValue;
}

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

/**
 * The base implementation of `_.assign` without support for argument juggling,
 * multiple sources, and `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return source == null
    ? object
    : baseCopy(source, keys(source), object);
}




// @return Array of expression matches

module.exports = function matcher(string, options, otherOptions) {

  // Extracted from lodash.template (https://www.npmjs.com/package/lodash.template)

  // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
  // and Laura Doktorova's doT.js (https://github.com/olado/doT).
  var settings = templateSettings.imports._.templateSettings || templateSettings;

  if (otherOptions && isIterateeCall(string, options, otherOptions)) {
    options = otherOptions = null;
  }
  string = baseToString(string);
  options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

  var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
      importsKeys = keys(imports),
      importsValues = baseValues(imports, importsKeys);

  var isEscaping,
      isEvaluating,
      index = 0,
      interpolate = options.interpolate || reNoMatch,
      source = "__p += '";

  // Compile the regexp to match each delimiter.
  var reDelimiters = RegExp(
    (options.escape || reNoMatch).source + '|' +
    interpolate.source + '|' +
    (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
    (options.evaluate || reNoMatch).source + '|$'
  , 'g');


  var matches = [];
  string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
    if (match) matches.push(escapeValue || interpolateValue || esTemplateValue || evaluateValue);
  });

  return matches;
};

},{"lodash._basecopy":47,"lodash._basetostring":48,"lodash._basevalues":49,"lodash._isiterateecall":50,"lodash._reinterpolate":51,"lodash.keys":52,"lodash.templatesettings":56}],47:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],48:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"dup":17}],49:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"dup":18}],50:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"dup":19}],51:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"dup":20}],52:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"dup":23,"lodash._getnative":53,"lodash.isarguments":54,"lodash.isarray":55}],53:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],54:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],55:[function(require,module,exports){
arguments[4][26][0].apply(exports,arguments)
},{"dup":26}],56:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28,"lodash._reinterpolate":51,"lodash.escape":57}],57:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"dup":21,"lodash._root":58}],58:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],59:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],60:[function(require,module,exports){
(function (process){

'use strict';

var domify = require('domify');
var camelCase = require('lodash.camelcase');

var widgetize = module.exports = function widgetize(name, clazz, template, options) {

	options = options || {};
	options.extend = options.extend || 'element';	// Basic HTML Element 

	var domNode;
	if (template)
	{
		domNode = domify(template);
	}


	if (!clazz)
	{
		clazz = HTMLElement;
	}


	clazz.prototype.createdCallback = function() {
		
		// TODO: Use Symbols
		this.__updateTriggered = false;
		this.__dom = this.createShadowRoot ? this.createShadowRoot() : this;

		if (this.init)
		{
			this.init.call(this);
		}
	};



	clazz.prototype.attachedCallback = function() {
		
		Array.prototype.forEach.call(this.attributes, function(attr) {
			updatePropertyFromAttribute.call(this, attr.name, attr.value);
		}.bind(this));

		if (domNode)
		{
			this.__dom.appendChild( domNode.cloneNode(true) );
		}

		if (this.attach)
		{
			this.attach.call(this, this.__dom);
		}

		if (this.update)
		{
			this.update.call(this, this.__dom);
		}
	};


	clazz.prototype.detachedCallback = function() {

		if (this.detach)
		{
			this.detach.call(this, this.__dom);
		}
	};


	clazz.prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {

		updatePropertyFromAttribute.call(this, attrName, newValue);

		this.invalidate();
	};


	clazz.prototype.invalidate = function() {

		if (this.update && !this.__updateTriggered)
		{
			this.__updateTriggered = true;

			process.nextTick(function doUpdate() {
				this.__updateTriggered = false;
				this.update(this.__dom);
			}.bind(this));
		}
	};


	var config = {prototype: clazz.prototype}; 

	if (options.extend !== 'element')
	{
		config.extends = options.extend;
	}

	return document.registerElement(name, config);
};



/* Expose Element superclasses in a Babel friendly way */

widgetize.base = function(Element) {

	var base = function() {
		return new Element();
	};
	
	base.prototype = Element.prototype;

	return base;
};


/* PRIVATE */


function updatePropertyFromAttribute(attrName, newValue)
{
	var propertyName = camelCase(attrName);
	if (this[propertyName] !== undefined)
	{
		try
		{
			this[propertyName] = newValue;
		}
		catch (error)
		{
			// Suppress DOM errors
		}
	}
}


}).call(this,require('_process'))
},{"_process":59,"domify":61,"lodash.camelcase":62}],61:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"dup":14}],62:[function(require,module,exports){
/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var capitalize = require('lodash.capitalize'),
    deburr = require('lodash.deburr'),
    words = require('lodash.words');

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string)), callback, '');
  };
}

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar');
 * // => 'fooBar'
 *
 * _.camelCase('__foo_bar__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});

module.exports = camelCase;

},{"lodash.capitalize":63,"lodash.deburr":66,"lodash.words":68}],63:[function(require,module,exports){
/**
 * lodash 4.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = require('lodash._root'),
    upperFirst = require('lodash.upperfirst');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst(toString(string).toLowerCase());
}

module.exports = capitalize;

},{"lodash._root":64,"lodash.upperfirst":65}],64:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],65:[function(require,module,exports){
/**
 * lodash 4.1.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = require('lodash._root');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return string.match(reComplexSymbol);
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = reHasComplexSymbol.test(string) ? stringToArray(string) : undefined,
        chr = strSymbols ? strSymbols[0] : string.charAt(0),
        trailing = strSymbols ? strSymbols.slice(1).join('') : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;

},{"lodash._root":64}],66:[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = require('lodash._root');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match latin-1 supplementary letters (excluding mathematical operators). */
var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0';

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to map latin-1 supplementary letters to basic latin letters. */
var deburredLetters = {
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss'
};

/**
 * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
function deburrLetter(letter) {
  return deburredLetters[letter];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;

},{"lodash._root":67}],67:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}],68:[function(require,module,exports){
/**
 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var root = require('lodash._root');

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsQuoteRange = '\\u2018\\u2019\\u201c\\u201d',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsQuoteRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match non-compound words composed of alphanumeric characters. */
var reBasicWord = /[a-zA-Z0-9]+/g;

/** Used to match complex or compound words. */
var reComplexWord = RegExp([
  rsUpper + '?' + rsLower + '+(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+',
  rsUpper + '+',
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasComplexWord = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = Symbol ? symbolProto.toString : undefined;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  if (isSymbol(value)) {
    return Symbol ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for functions like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    pattern = reHasComplexWord.test(string) ? reComplexWord : reBasicWord;
  }
  return string.match(pattern) || [];
}

module.exports = words;

},{"lodash._root":69}],69:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"dup":22}]},{},[7]);
