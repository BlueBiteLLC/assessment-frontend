const app = require('./app');
const request = require('supertest');
const VALUES = require('./values');
const PAGES = require('./pages');

describe('API', () => {
	describe('GET page', () => {
		for (const { id, data } of PAGES) {
			test(id, async () => {
				const response = await request(app)
					.get(`/page/${id}`)
					.expect('Content-Type', /json/);
				expect(response.status).toEqual(200);
				expect(response.body).toEqual({ data });
			});
		}

		test('Not Found', async () => {
			const response = await request(app)
				.get('/page/other')
				.expect('Content-Type', /json/);
			expect(response.status).toEqual(404);
			expect(response.body).toEqual({
				error: 'Page Not Found',
			});
		});
	});

	describe('Integrations', () => {
		describe('Stocks', () => {
			for (const { ticker, ...data } of VALUES.STOCKS) {
				test(ticker, async () => {
					const response = await request(app)
						.get(`/integration/stocks/${ticker}`)
						.expect('Content-Type', /json/);
					expect(response.status).toEqual(200);
					expect(response.body).toEqual({
						data,
					});
				});
			}

			test('Not Found', async () => {
				const response = await request(app)
					.get('/integration/stocks/other')
					.expect('Content-Type', /json/);
				expect(response.status).toEqual(404);
				expect(response.body).toEqual({
					error: 'Ticker Not Found',
				});
			});
		});

		describe('Weather', () => {
			for (const { lon, lat, ...data } of VALUES.WEATHER_LOCATIONS) {
				test(`${lon},${lat}`, async () => {
					const response = await request(app)
						.get('/integration/weather')
						.query({ lon, lat })
						.expect('Content-Type', /json/);
					expect(response.status).toEqual(200);
					expect(response.body).toEqual({
						data,
					});
				});
			}

			test('0,0', async () => {
				const response = await request(app)
					.get('/integration/weather')
					.query({ lon: '0', lat: '0' })
					.expect('Content-Type', /json/);
				expect(response.status).toEqual(404);
				expect(response.body).toEqual({
					error: 'Weather Not Available For Coordinates',
				});
			})
		});

		describe('Sessions', () => {
			test('Create Session', async () => {
				const {
					status,
					body,
				} = await request(app)
					.post(`/sessions`)
					.expect('Content-Type', /json/);
				expect(status).toEqual(200);
				const { id, vars } = body.data.session;
				expect(typeof id).toEqual('string');
				expect(vars).toEqual({
                    flipped: false,
                    showStocks: false,
                });
			});

			test('Update Session', async () => {
				const { body: createBody } = await request(app)
					.post('/sessions')
					.expect('Content-Type', /json/);
				const { id } = createBody.data.session;
				const { status, body: updateBody } = await request(app)
					.patch(`/session/${id}`)
					.send({
						vars: { flipped: true },
					})
					.expect('Content-Type', /json/);
				expect(status).toEqual(200);
				expect(updateBody.data.session.id).toEqual(id);
				expect(updateBody.data.session.vars).toEqual({
					flipped: true,
                    showStocks: false,
				});
			});
		});
	});
});
