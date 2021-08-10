const express = require('express');
const cors = require('cors');
const { v4: uuid } = require('uuid');
const bodyParser = require('body-parser')
const VALUES = require('./values');
const PAGES = require('./pages');

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/page/:id', (req, res) => {
	const paramId = req.params.id.toLowerCase();
	const page = PAGES.find(({ id }) => id === paramId);

	if (page) {
		res.json({
			data: page.data,
		});
	} else {
		res.status(404).json({
			error: 'Page Not Found',
		});
	}
});

app.get('/integration/stocks/:ticker', (req, res) => {
	const paramTicker = req.params.ticker.toUpperCase();

	const ticker = VALUES.STOCKS.find(({ ticker }) => ticker === paramTicker);
	if (ticker) {
		const { value, currency } = ticker;
		res.json({
			data: { value, currency },
		});
	} else {
		res.status(404).json({
			error: 'Ticker Not Found',
		});
	}
});

app.get('/integration/weather', (req, res) => {
	const { lat: queryLat, lon: queryLon } = req.query;
	if (isNaN(parseFloat(queryLon)) || isNaN(parseFloat(queryLat))) {
		res.status(400).json({
			error: 'Invalid Coordinates',
		});
		return;
	}
	const weatherLocation = VALUES.WEATHER_LOCATIONS.find(({ lat, lon }) => (
		lat === queryLat && lon === queryLon
	));
	if (weatherLocation) {
		const { condition, temperature, unit } = weatherLocation;
		res.json({
			data: { condition, temperature, unit },
		});
	} else {
		res.status(404).json({
			error: 'Weather Not Available For Coordinates',
		});
	}
});

const sessions = {};

app.post('/sessions', (req, res) => {
	const id = uuid();
	const session = {
		id,
		vars: {
            flipped: false,
            showStocks: false,
        },
	};
	sessions[id] = session;
	res.json({
		data: { session },
	});
});

app.patch('/session/:id', (req, res) => {
	const { id } = req.params;

	if (Object.values(req.body.vars).some((v) => typeof v !== 'boolean')) {
		res.status(400).json({
			error: 'Vars are invalid',
		});
		return;
	}

	const session = sessions[id];
	if (!session) {
		res.status(404).json({
			error: 'Session Not Found',
		});
		return;
	}

	const newSession = {
		...session,
		vars: {
			...session.vars,
			...req.body.vars,
		},
	};

	sessions[id] = newSession;

	res.json({
		data: { session: newSession },
	});
});


module.exports = app;
