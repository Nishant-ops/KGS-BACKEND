const moongoose = require("mongoose");
const db_link =
  "mongodb+srv://admin:LSLEF9h3ENCLxn7@cluster0.mmuhd.mongodb.net/?retryWrites=true&w=majority";
moongoose
  .connect(db_link)
  .then((db) => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PinnedSchema = moongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
  },
});

const PinnedModal = moongoose.model("PinnedModal", PinnedSchema);
module.exports = PinnedModal;
