const express = require("express");
const app = express();

const port = 8081;
var response = {
  data: {
    item: [
      {
        id: 1,
        name: "John",
      },
      {
        id: 2,
        name: "Jahn Doe",
      },
    ],
  },
};
app.get("/user-list", (req, res) => {
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log("User Service is listnening at " + port + " port");
});
