import express from 'express'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import path from "path"

import env from '../../constants/env'
import routers from '../../routers'
import constants from './constants'

const app = express()

app.use(cookieParser())



app.use(bodyParser.json({ limit: '9999999999mb' }))
app.use(bodyParser.urlencoded({ limit: '9999999999mb', extended: true }))

app.use(constants.BASE_ROUTES_API, routers)

if (env.MODE !== 'development') {
  app.use(express.static(path.join(__dirname, '../../../../../client/dist')));
  app.get('*', (req, res) => {
    try {
      res.sendFile(path.join(__dirname, '../../../../../client/dist/index.html'));
    } catch (e) {
      console.log(e);
    }
  });
}


app.listen(env.PORT, () => {
  console.log(`Server ${env.MODE} running on port ${env.PORT}.`)
})
