const express = require("express");
const app = express();

app.use(express.json());

//Complete below given Middleware function which check whether number provided in api as params is odd or Even . Example is shown below

//Example:
// GET Reqest of API  '/?num=18' --> The router should return {"num":"18","isOdd":false}

function CheckisOdd(req, res, next) {
  //Write Your Code here
  const isOdd = req.query.num % 2 == 1;
  req.isOdd = isOdd;
  next();
}

app.get("/", CheckisOdd, (req, res) => {
  //num in data should be replaced by num from the get request route
  //isOdd in data should be replaced by whether num is odd or even if it odd make it true else false
  const data = {
    num: req.query.num,
    isOdd: req.isOdd,
  };

  res.send(JSON.stringify(data));
});

module.exports = app;
