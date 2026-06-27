const express = require("express");

const app = express();

app.use(express.json());

let sensor = {
  temp: 0,
  hum: 0,
  gas: 0
};

// استقبال البيانات من ESP32
app.post("/sensor", (req, res) => {

  sensor = req.body;

  console.log(sensor);

  res.send("OK");
});

// عرض البيانات
app.get("/", (req, res) => {

  res.json(sensor);

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server Running...");
});