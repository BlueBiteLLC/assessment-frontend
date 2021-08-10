const VALUES = require('../values');

module.exports = {
	lists: [
		{
			id: 0,
			components: [1, 3, 5]
		},
        {
            id: 1,
			components: [2, 4]
        }
	],
	components: [
		{
			id: 1,
			type: 'stock',
			options: {
				ticker: VALUES.STOCKS[1].ticker,
			}
		},
		{
			id: 2,
			type: 'weather',
			options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat,
			}
		},
		{
			id: 3,
			type: 'image',
			options: VALUES.IMAGES[1],
		},
		{
			id: 4,
			type: 'time'
		},
        {
            id: 5,
            type: 'row',
            componentList: 1,
        }
	]
};
