import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import { UserRoutes } from './app/modules/users/user.route'
// import ApiError from './Error/ApiError'
const app: Application = express()

app.use(cors())

console.log(app.get('env'))

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/v1/users', UserRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('testing error')
// })

app.use(globalErrorHandler)

export default app
