var express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3003;

app.use(
	bodyParser.json({
		type: ['json', 'application/csp-report'],
	})
);

app.post('/report-violation', (req, res) => {
	let data = { message: '[CSP Violation]: No data received' };

	if (req.body && Object.keys(req.body).length > 0) {
		data = req.body;
	}

	console.log(data);
	res.send(data);
});

module.exports = app.listen(port, () =>
	console.log(
		`local-csp-reporter is listening on http://localhost:${port}/report-violation`
	)
);
