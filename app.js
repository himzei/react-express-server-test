import express from "express";

const app = express();

const PORT = 8080;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

app.use(express.static("client/build"));

const items = [
  {
    name: "laptop",
    price: 500,
  },
  {
    name: "desktop",
    price: 1000,
  },
];

app.get("/api/items", (req, res) => {
  res.send(items);
});
