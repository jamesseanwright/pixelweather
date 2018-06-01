const PORT = 8001;

import { resolve as resolvePath } from 'path';
import * as express from 'express';
import * as request from 'request';

const app = express();
const apiKey = process.env.OWM_API_KEY;

app.use(express.static(resolvePath(__dirname, 'client')));

app.get('/api/weather/:city', (req, res) => {
    if (!req.params.city) {
        res.status(400).json({ error: 'Please provide a city' });
    }

    request('http://api.openweathermap.org/data/2.5/weather', {
        qs: {
            q: req.params.city,
            appid: apiKey,
        },
    }).pipe(res);
});

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening on port ${PORT}...`);
});
