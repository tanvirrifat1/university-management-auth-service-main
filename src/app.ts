import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

console.log(app.get('env'));

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/', routes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('testing error')
// })

app.use(globalErrorHandler);

export default app;
