const express = require("express");
const { getMessage, enterMessage } = require("../Controller/controller");
const { deletePinned, enterPinned } = require("../Controller/PinnedController");
const {
  getShow,
  getShowById,
  deleteShowById,
  createShow,
} = require("../Controller/ShowModalController");
const MessageRouter = express.Router();
const PinnedRouter = express.Router();
const ShowRouter = express.Router();

MessageRouter.route("/").get(getMessage).post(enterMessage);
PinnedRouter.route("/").post(enterPinned);
PinnedRouter.route("/:name").delete(deletePinned);
ShowRouter.route("/").get(getShow).post(createShow);
ShowRouter.route("/:id").get(getShowById).delete(deleteShowById);

module.exports = { MessageRouter, PinnedRouter, ShowRouter };
