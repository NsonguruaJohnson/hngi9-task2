const express = require("express");
require("dotenv").config();

const app = express();
// For body request parsing
app.use(express.json());

const port = process.env.PORT || 9500;

app.get("/", (req, res) => {
  res.json("Base url working");
  //   res.json({
  //     name: "ALl is well",
  //   });
});

app.post("/calculate", (req, res) => {
  operation_type = req.body.operation_type;
  operation_type = operation_type.split(" ");
  operation_type.map((el) => {
    if (el == "addition") {
      operation_type = el;
    } else if (el == "subtraction") {
      operation_type = el;
    } else if (el == "multiplication") {
      operation_type = el;
    }
  });

  x = req.body.x;
  y = req.body.y;
  let result;
  switch (operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
  }
  res.status(200).json({
    slackUsername: "Nsongurua",
    operation_type,
    result,
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
