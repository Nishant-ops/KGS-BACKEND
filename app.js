const WebSocket = require("ws");
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
const wss = new WebSocket.Server({ port: 7071 });
const clients = new Map();

wss.on("connection", (ws) => {
  // const id = uuidv4();
  const color = Math.floor(Math.random() * 360);
  const metadata = { color };
  // console.log(id);
  clients.set(ws, metadata);

  ws.on("message", (messageAsString) => {
    console.log(messageAsString);
    const message = JSON.parse(messageAsString);
    const metadata = clients.get(ws);

    message.sender = metadata.id;
    message.color = metadata.color;

    [...clients.keys()].forEach((client) => {
      client.send(JSON.stringify(message));
    });
  });
});

wss.on("close", () => {
  clients.delete(ws);
});

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
