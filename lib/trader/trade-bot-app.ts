import { logger } from './../logger';
import * as express from 'express';
import { tradeService } from './trade-service';

export const tradeBotApp = express();

tradeBotApp.get('/start-selling', async function (req, res) {
  res.send(tradeService.startSelling())
})

tradeBotApp.get('/clear-pile', async function (req, res) {
  try {
    const resp = await tradeService.clearPile()
    res.send(resp)
  } catch (e) {
    res.status(500).send(e.message)
  }
});
