import express, { Express, NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import bodyParser from 'body-parser';

import AppRouter from './routes';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: 'Not found' });
});

app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
	res.status(500).json({ message: err.message || 'Internal Server Error' });
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
