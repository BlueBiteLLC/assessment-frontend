const VALUES = require('../values');

module.exports = {
    variables: [
        {
            name: 'show_time',
            type: 'string',
            initialValue: 'hide',
        },
        {
            name: 'location',
            type: 'string',
            initialValue: 'ny',
        },
    ],
	lists: [
		{
			id: 0,
			components: [3, 4]
		},
        {
            id: 1,
            components: [1],
        },
        {
            id: 2,
            components: [2],
        },
        {
            id: 3,
            components: [10, 7, 6],
        },
        {
            id: 4,
            components: [11, 5, 7],
        },
        {
            id: 5,
            components: [12, 6, 5],
        },
        {
            id: 6,
            components: [14],
        },
	],
	components: [
        {
            id: 1,
            type: 'button',
            options: {
                text: 'Show Time',
                variable: 'time',
                value: 'show',
            },
        },
        {
            id: 2,
            type: 'button',
            options: {
                text: 'Hide Time',
                variable: 'time',
                value: 'hide',
            },
        },
        {
            id: 3,
            type: 'condition',
            options: {
                variable: 'show_time',
                value: 'show',
            },
            children: 1,
        },
        {
            id: 4,
            type: 'condition',
            options: {
                variable: 'show_time',
                value: 'hide',
            },
            children: 2,
        },
        {
            id: 5,
            type: 'button',
            options: {
                text: 'New York',
                variable: 'location',
                value: 'ny',
            },
        },
        {
            id: 6,
            type: 'button',
            options: {
                text: 'San Francisco',
                variable: 'location',
                value: 'ca',
            },
        },
        {
            id: 7,
            type: 'button',
            options: {
                text: 'Sydney',
                variable: 'location',
                value: 'sd',
            },
        },
        {
            id: 8,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ny'
            },
            children: 3,
        },
        {
            id: 9,
            type: 'condition',
            options: {
                variable: 'location',
                value: 'ca'
            },
            children: 4,
        },
		{
			id: 10,
			type: 'weather',
			options: {
                lon: VALUES.WEATHER_LOCATIONS[0].lon,
                lat: VALUES.WEATHER_LOCATIONS[0].lat,
			}
		},
        {
			id: 11,
			type: 'weather',
			options: {
                lon: VALUES.WEATHER_LOCATIONS[1].lon,
                lat: VALUES.WEATHER_LOCATIONS[1].lat,
			}
		},
        {
			id: 12,
			type: 'weather',
			options: {
                lon: VALUES.WEATHER_LOCATIONS[2].lon,
                lat: VALUES.WEATHER_LOCATIONS[2].lat,
			}
		},
        {
            id: 13,
            type: 'condition',
            options: {
                variable: 'show_time',
                value: 'show',
            },
            children: 6,
        },
        {
            id: 14,
            type: 'time',
        },
	],
};
