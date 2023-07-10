import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// application routes
app.use('/api/v1/', routes);

// globalErrorHandler
app.use(globalErrorHandler);

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

export default app;
