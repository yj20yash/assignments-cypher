const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const postRoute = require("./routes/postRoute");

const PORT = 7000;

app.listen(PORT, () => {
  console.info(`Server is running on PORT: ${PORT}`);
});

app.use("/", postRoute);
