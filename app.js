const express = require("express");
const {
  MessageRouter,
  PinnedRouter,
  ShowRouter,
} = require("./Router/MessageRouter");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: false,
};
app.use(cors(corsOptions));
app.use("/message", MessageRouter);
app.use("/pinned", PinnedRouter);
app.use("/show", ShowRouter);

app.listen(8080);

console.log("wss up");
