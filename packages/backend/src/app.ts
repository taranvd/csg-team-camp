import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';

import bodyParser from 'body-parser';
import AppRouter from './routes';
import passport from 'passport';
import './strategies';

const port = 3030;
const app: Express = express();
const router = new AppRouter(app);
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan(formatsLogger));

app.use(passport.initialize());

router.init();

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: 'Not found' });
});

app.listen(port, () => {
	console.log(`Now listening on port ${port}`);
});
