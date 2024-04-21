const errorFunction = require('../util/errorFunction')

const joiController = async (req, res, next) => {
    res.status(200).json(errorFunction(false, "Home Page", "Welcome from Joi Validation!"))
}

module.exports = joiController