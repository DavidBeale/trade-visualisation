
const widgetize = require('widgetize');
const pkg = require('./package.json');
const d3 = require('d3');


/**
 * Bootstrap data driven button group Widget
 */
class ButtonGroup extends widgetize.base(HTMLElement)
{
	init() 
	{
		this._data = [];
		this._selected = [];
		this._singleToggle = false;

		this._group = null;
	}


	get data()
	{
		return this._data;
	}

	set data(value)
	{
		if (value !== this._data && Array.isArray(value))
		{
			this._data = value;
			this.invalidate();
		}
	}


	get selected()
	{
		return this._selected;
	}

	set selected(value)
	{
		if (value !== this._selected && Array.isArray(value))
		{
			this._selected = value;
			this.invalidate();
		}
	}


	get singleToggle()
	{
		return this._singleToggle;
	}

	set singleToggle(value)
	{
		if (value !== this._singleToggle)
		{
			this._singleToggle = value;
			this.invalidate();
		}
	}



	attach(dom)
	{
		this._group = d3.select(dom).append('div')
			.classed('btn-group', true);
	}


	update(dom)
	{
		let buttons = this._group.selectAll('button').data(this._data);

		buttons.enter().append('button')
			.attr('class', 'btn btn-default navbar-btn')
			.attr('type', 'button')
			.on('click', onClick.bind(this));

		buttons.text(item => item.name)
			.classed('active', item => this._selected.indexOf(item) !== -1)
			.classed('btn-primary', item => this._selected.indexOf(item) !== -1 && !this._singleToggle)
			.classed('btn-success', item => this._selected.indexOf(item) !== -1 && this._singleToggle);

		buttons.exit().remove();
	}

}


module.exports = widgetize(pkg.name, ButtonGroup);



/* PRIVATE */

function onClick(item)
{
	toggle(this._selected, item, this._singleToggle);
	this.invalidate();

	let event = new CustomEvent('change', {details: this._selected});
	this.dispatchEvent(event);
}


function toggle(array, item, singleToggle)
{
	let pos = array.indexOf(item);

	if (pos === -1)
	{
		if (singleToggle)
		{
			array.splice(0, array.length);
		}

		array.push(item);
	}
	else if (!singleToggle)
	{
		array.splice(pos, 1);
	}
}


