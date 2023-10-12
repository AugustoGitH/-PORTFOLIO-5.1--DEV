/* eslint-disable import/first */
import express from 'express'

import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import path from 'path'

dotenv.config()

import env from './app/constants/env'
import { BASE_ROUTES_API } from './app/constants/express'
import routers from './app/routers'

const app = express()

app.use(cookieParser())

app.use(bodyParser.json({ limit: '9999999999mb' }))
app.use(bodyParser.urlencoded({ limit: '9999999999mb', extended: true }))

app.use(BASE_ROUTES_API, routers)

if (env.MODE !== 'development') {
  app.use(express.static(path.join(__dirname, '../client')))

  app.get('*', (req, res) => {
    try {
      res.sendFile(path.join(__dirname, '../client/index.html'))
    } catch (e) {
      console.log(e)
    }
  })
}

app.listen(env.PORT, () => {
  console.log(`Server ${env.MODE} running on port ${env.PORT}.`)
})

const { MODE, URL } = env.MONGO_CONNECTION_URL()

mongoose
  .connect(URL ?? '')
  .then(() => {
    console.log(`Database under ${MODE} running.`)
  })
  .catch((error) => {
    console.log(error)
  })
