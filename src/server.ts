import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database connect successfully')

    app.listen(config.port, () => {
      logger.info(`Application app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database')
  }
}
main()
