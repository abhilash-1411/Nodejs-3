const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretKey = "secretkey";
app.use(express.json());

app.get("/", (req, resp) => {
  resp.json({
    message: "A sample API ",
  });
});

app.post("/login", (req, resp) => {
  const user = {
    id: 1,
    name: "Abhilash",
    emai: "abhi@test.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    resp.json({
      token,
    });
  });
});
app.post("/profile", verifyToken, (req, resp) => {
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      resp.send({ result: "Invalid token" });
    } else {
      resp.json({
        message: "Profile accesssed",
        authData,
      });
    }
  });
  
});
function verifyToken(req, resp, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    resp.send({
      result: "Token is invalid",
    });
  }
}
app.listen(5000, () => {
  console.warn("Server is listening on PORT 5000");
});
