import app from "./app.js";
import dotenv, { config } from "dotenv";
import connectDb from "./db/database.js";
dotenv.config({
  path: "./.env",
});

const port = process.env.PORT;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on ${port}`);
    });
  })
  .catch((err) => {
    console.log("db error", err);
  });
