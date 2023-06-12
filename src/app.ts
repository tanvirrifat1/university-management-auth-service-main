import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';

const app: Application = express();

app.use(cors());

console.log(app.get('env'));

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use('/api/v1/', routes);

// Api handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found!',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API not found!',
      },
    ],
  });
  next();
});

app.use(globalErrorHandler);

export default app;
