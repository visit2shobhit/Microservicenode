const express = require("express");
const app = express();

const port = 8082;
var response = {
  data: {
    item: [
      {
        id: 1,
        name: "order1",
      },
      {
        id: 2,
        name: "order2",
      },
    ],
  },
};
app.get("/payment-list", (req, res) => {
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log("Payment Service is listnening at " + port + " port");
});
