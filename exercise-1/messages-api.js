const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.post("/messages", (req, res) => {
  if (!req.body.text || req.body.text === " ") 
  return res.status(400).send();
  console.log(req.body);
  res.json({
    message: "Message received loud and clear"
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
