const User = require('../../models/user');
const errorFunction = require('../../util/errorFunction');
const securePassword = require("./../../util/securePassword");

const addUser = async (req, res, next) => {
    try {
        const existUser = await User.findOne({ email: req.body.email }).lean(true)

        if (existUser) {
            return res.status(403).json(errorFunction(true, "User Already Exist"))
        } else {
            const hashedPassword = await securePassword(req.body.password)
            const addUser = await User.create({
                userName: req.body.userName,
                email: req.body.email,
                password: hashedPassword,
                mobileNumber: req.body.mobileNumber,
                birthYear: req.body.birthYear,
                skillSet: req.body.skillSet,
                is_active: req.body.is_active
            })
            if (addUser) {
                res.status(201).json(errorFunction(false, "User Created!", addUser))
            } else {
                res.status(403).json(errorFunction(true, "Error Creating User"))
            }
        }
    } catch (error) {
        res.status(400).json(errorFunction(true, "Error Adding User"))
    }
}

const getUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find();
        if (allUsers) {
            res.status(201);
            return res.json(
                errorFunction(false, "Sending all users", allUsers)
            );
        } else {
            res.status(403);
            return res.json(errorFunction(true, "Error getting Users"));
        }
    } catch (error) {
        res.status(400);
        return res.json(errorFunction(true, "Error getting user"));
    }
};

module.exports = { addUser, getUsers };