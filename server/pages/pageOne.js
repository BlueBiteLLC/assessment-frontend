const VALUES = require('../values');

module.exports = {
	lists: [
		{
			id: 0,
			components: [1, 2, 3, 4]
		}
	],
	components: [
		{
			id: 1,
			type: 'stock',
			options: {
				ticker: VALUES.STOCKS[0].ticker,
			}
		},
		{
			id: 2,
			type: 'weather',
			options: {
                lon: VALUES.WEATHER_LOCATIONS[0].lon,
                lat: VALUES.WEATHER_LOCATIONS[0].lat,
			}
		},
		{
			id: 3,
			type: 'image',
			options: VALUES.IMAGES[0],
		},
		{
			id: 4,
			type: 'time'
		}
	]
};
