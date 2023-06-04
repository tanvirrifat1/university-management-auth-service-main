import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
const app: Application = express()

app.use(cors())

console.log(app.get('env'))

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes

app.use('/api/v1/users', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to new project!')
})

export default app
