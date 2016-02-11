# trade-visualisation [![Build Status](https://travis-ci.org/DavidBeale/trade-visualisation.svg?branch=master)](https://travis-ci.org/DavidBeale/trade-visualisation)

Trade visualisation to show trade price over time

[View Demo](http://davidbeale.github.io/trade-visualisation/)

## Approach
The Implementation is based on browserify, to give the structure inherit in node.js applications and make the libraries of npm available.

The app is structured as a main view backed by a presentation model. The view uses custom components, which it wires together. 

The view and components are extensions to HTMLElement, registered as Custom Elements.


### Improvements
- Label Axies
- Add volumn data as bar chart
- Add price point tooltip 
- Use [parcelify](https://www.npmjs.com/package/parcelify) to bundle and pre-process CSS
- Components, views and services could be moved to their own packages, as per npm micro-modules
- UI Tests using WebDriver
- Use a logger
- Minimize outputs


## Installation

```shell
npm install
```

## Build

```shell
npm test
```


## Development

```shell
npm run watch
```

Open *http://localhost:3000* in your browser