require("dotenv").config();
import express from "express";
import router from "./routes";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware
app.use(express.json());
app.use(router);

//listen
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
