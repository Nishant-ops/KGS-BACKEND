const PinnedModal = require("../Modal/PinnedModal");

module.exports.enterPinned = async function enterPinned(req, res) {
  const data = req.body;
  console.log(data);
  const Message = {
    name: data.name,
    message: data.message,
  };
  const rs = await PinnedModal.create(Message);
  return res.status(200).json({
    message: rs,
  });
};

module.exports.deletePinned = async function deletePinned(req, res) {
  const val = await PinnedModal.deleteOne({ name: req.params.name });
  return res.status(200).json({
    message: val,
  });
};
