import "express-async-errors";
import express from "express";
import cors from "cors";
import router from "./routes";
import erroCatcher from "./middlewares/errorCatcher";

const app = express();
app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.use(router);
app.use(erroCatcher);

// app.listen(3333, () => {
//   console.log("Server Started");
// });

export default app;
