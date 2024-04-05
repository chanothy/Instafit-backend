const { Content } = require("../models/Content");


const uploadPostController = async (req, res) => {
    const { title, dateCreated, contentType, description, creatorID, ImgURL } = req.body;
    const newContent = new Content({
        title: title,
        dateCreated: dateCreated,
        description: description,
        creatorID: creatorID,
        contentType: contentType,
        contentContents: ImgURL
      });

    await newContent.save()
    .then(response => {
        res.json({
            message : "UPLOADED!!!!!"
        })
    })
    .catch(error => {
        res.json({
            message: "An error Occured!"
        })
    })
}
module.exports = uploadPostController;