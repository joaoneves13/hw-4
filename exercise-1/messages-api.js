const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

let messagesCount = 0;

const countMessagesLimit = (req, res, next) => {
  messagesCount++;
    
  if (messagesCount > 5) {
    return res.status(429).send();
  }
  next();
};

app.use(countMessagesLimit);
app.use(bodyParser.json());

app.post("/messages", (req, res) => {
  if (!req.body.text || req.body.text === " ") {
    return res.status(400).send("You should send a 'text' field");
  }
  console.log(req.body.text);
  res.json({
    message: "Message received loud and clear"
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
