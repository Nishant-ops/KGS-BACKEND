const ShowModal = require("../Modal/ShowModal");

module.exports.getShow = async function getShow(req, res) {
  try {
    const show = await ShowModal.find({});

    if (show.length == 0) {
      return res.status(200).json({
        message: "No more show",
      });
    }

    const data = {
      showData: show,
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

module.exports.getShowById = async function getShowById(req, res) {
  try {
    const id = req.params.id;

    const show = await ShowModal.find({ id: id });

    if (show == null) {
      return res.status(500).json({
        message: "No more show",
      });
    }

    const data = {
      showData: show,
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
module.exports.deleteShowById = async function deleteShowById(req, res) {
  try {
    const id = req.params.id;

    const show = await ShowModal.deleteOne({ id: id });

    if (show == null) {
      return res.status(500).json({
        message: "No more show",
      });
    }

    const data = {
      showData: show,
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

module.exports.createShow = async function createShow(req, res) {
  try {
    console.log(req.body);
    await ShowModal.create(req.body);
    a;
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
