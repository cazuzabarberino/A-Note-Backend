import express from "express";
import "express-async-errors";
import router from "./routes";
import errorCatcher from "./middlewares/errorCatcher";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());
app.use(router);

app.get("/", (req, res) => res.json({ ok: "ok" }));

app.use(errorCatcher);

app.listen(3333, () => {
  console.log("Server Started");
});
