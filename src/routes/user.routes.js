const express = require("express");
const bodyParser = require("body-parser");
const {createUser,getUsers, getLatestDataForEachCity} = require("../controllers/userController")
const router = express.Router();
router.use(bodyParser.json());

const middleware = require("../middleware/testmiddleware")

router.post("/",middleware.samplemiddleware,createUser)
router.get("/",getUsers)
router.get("/data",getLatestDataForEachCity)

module.exports =router