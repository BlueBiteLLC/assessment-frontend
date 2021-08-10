const VALUES = require('../values');

module.exports = {
	lists: [
		{
			id: 0,
			components: [3, 5],
		},
        {
            id: 1,
			components: [2, 4],
        },
        {
            id: 2,
			components: [4, 2],
        },
        {
            id: 3,
			components: [5, 8],
        },
        {
            id: 4,
			components: [6, 9],
        },
        {
            id: 5,
			components: [1],
        },
	],
	components: [
		{
			id: 1,
			type: 'stock',
			options: {
				ticker: VALUES.STOCKS[2].ticker,
			}
		},
		{
			id: 2,
			type: 'weather',
			options: {
                lon: VALUES.WEATHER_LOCATIONS[2].lon,
                lat: VALUES.WEATHER_LOCATIONS[2].lat,
			}
		},
		{
			id: 3,
			type: 'image',
			options: VALUES.IMAGES[2],
		},
		{
			id: 4,
			type: 'time',
		},
        {
            id: 5,
            type: 'row',
            componentList: 1,
        },
        {
            id: 6,
            type: 'row',
            componentList: 2,
        },
        {
            id: 7,
            type: 'condition',
            options: {
                when: 'flipped',
                equals: false,
            },
            componentList: 3,
        },
        {
            id: 8,
            type: 'condition',
            options: {
                when: 'flipped',
                equals: true,
            },
            componentList: 4,
        },
        {
            id: 8,
            type: 'button',
            options: {
                text: 'Flip Row',
                set: 'flipped',
                to: true,
            },
        },
        {
            id: 9,
            type: 'button',
            options: {
                text: 'Flip Row',
                set: 'flipped',
                to: false,
            },
        },
        {
            id: 10,
            type: 'condition',
            options: {
                when: 'showStocks',
                equals: true,
            },
            componentList: 5,
        },
        {
            id: 11,
            type: 'button',
            options: {
                text: 'Show Stocks',
                set: 'showStocks',
                to: true,
            },
        },
	],
};
