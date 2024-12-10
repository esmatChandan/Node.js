import dotenv from "dotenv";
import { app } from "./app.js";

import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env"
});

const PORT = process.env.PORT || 8003 ;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is runing is port ${PORT}`);
    });
  })
  .catch( (err) => {
    console.log(err);
    process.exit(1);
  });
