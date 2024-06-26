const { Meal } = require("../models/Meals");


const mealPostController = async (req, res) => {
    const { title, dateCreated, description, creatorID, tag } = req.body;
    const newMeal = new Meal({
        contentTitle: title,
        dateCreated: dateCreated,
        description: description,
        creatorID: creatorID,
        tag: tag
      });

    await newMeal.save()
    .then(response => {
        res.json({
            message : "UPLOADED!!!!!"
        })
    })
    /*.catch(error => {
        res.json({
            message: "An error Occured!"
        })
    })*/
}
module.exports = mealPostController;