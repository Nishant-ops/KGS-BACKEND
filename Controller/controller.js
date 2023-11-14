const MessageModal = require("../Modal/Modal");
const moongoose = require("mongoose");
const PinnedModal = require("../Modal/PinnedModal");

module.exports.getMessage = async function getMessage(req, res) {
  try {
    let pageNumber = 1;
    let providedLimit = 50;

    const message = await MessageModal.find()
      .sort({ $natural: 1 })
      .limit(providedLimit)
      .skip((pageNumber - 1) * providedLimit);
    const pinned = await PinnedModal.findOne();
    console.log(pinned);

    if (message.length == 0) {
      return res.status(500).json({
        message: "No more message",
      });
    }
    const data = {
      message: message,
      pinned: pinned,
    };

    return res.status(200).json({
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.enterMessage = async function enterMessage(req, res) {
  //   console.log(req.body);
  const data = req.body;
  console.log(data);
  const Message = {
    name: data.name,
    message: data.message,
  };
  const rs = await MessageModal.create(Message);
  return res.status(200).json({
    message: rs,
  });
};
