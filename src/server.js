import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import CONFIG from './config'

const app = express()
const { PORT = 5000 } = CONFIG

app.use(
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cors(),
)

app.get('/', (req, res) => {
  res.send('It\'s OK')
});

app.listen(PORT, () => {
  console.info(`Service is running at http://localhost:${PORT}`)
});
