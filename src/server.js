import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 5000
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
