import express from "express";
import { partners } from "./controllers/";
const app = express();

const appid = 3000; //process.env.APPID;

app.get("/partners", (req, res) => {
  let range = Number(req.query.range);
  if (range && range > 0) {
    res.send(partners.getAllWithinRange(range))
  }
  else {
    res.send(partners.getAll())
  }
});


app.listen(appid, () => {
  console.log(
    `${appid} is listening on ${appid}`);
});
