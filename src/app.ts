import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())

//parser
app.use(express())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Application, res: Response) => {
  res.send('welcome to university management project')
})

export default app
