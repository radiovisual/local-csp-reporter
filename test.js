const request = require('supertest');
const server = require('./index');

test('POST to /report-violation', done => {
	const fixture = { foo: true };
	request(server)
		.post('/report-violation')
		.set('Accept', 'application/json')
		.send(fixture)
		.expect(200)
		.end((err, res) => {
			if (err) {
				throw err;
			}
			expect(res.body).toMatchObject(fixture);
			done();
		});
});

test('empty POST to /report-violation', done => {
	request(server)
		.post('/report-violation')
		.set('Accept', 'application/json')
		.expect(200)
		.end((err, res) => {
			if (err) {
				throw err;
			}
			expect(res.body.message).toEqual('[CSP Violation]: No data received');
			done();
		});
});
