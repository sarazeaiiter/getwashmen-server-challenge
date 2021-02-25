import express from "express";
import { serve, setup } from "swagger-ui-express"
import { partners } from "./controllers/";
import { swaggerDocument } from './swagger'
const app = express();

const appid = 3000; //process.env.APPID;

app.get("/partners", (req, res) => {
  let range = Number(req.query.range);
  if (range && range > 0) {
    res.send({ partners: partners.getAllWithinRange(range), areAll: false })
  }
  else {
    res.send({ partners: partners.getAll(), areAll: true })
  }
});


app.use("/api-docs", serve, setup(swaggerDocument));

app.listen(appid, () => {
  console.log(
    `${appid} is listening on ${appid}`);
});
