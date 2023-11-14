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

const ShowSchema = moongoose.Schema({
  adminId: {
    type: String,
    required: true,
  },
  adminName: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const ShowModal = moongoose.model("ShowModal", ShowSchema);

module.exports = ShowModal;
