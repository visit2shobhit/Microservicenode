const gateway = require("fast-gateway");
const port = 9001;

const getToken = (req, res, next) => {
  if (req.headers.token && req.headers.token != "") {
    next();
  } else {
    res.statusCode = 401;
    res.end(JSON.stringify({ status: 401, message: "Authentication Failed" }));
  }
};

const server = gateway({
  routes: [
    {
      prefix: "/user",
      target: "http://localhost:8081/",
      middlewares: [getToken],
      hooks: {},
    },
    {
      prefix: "/pmt",
      target: "http://localhost:8082/",
      hooks: {},
    },
  ],
});

server.get("/mytesting", (req, res) => {
  res.send("called gateway");
});

server.start(port).then((server) => {
  console.log(`Gateway is listnening to port${port}`);
});
