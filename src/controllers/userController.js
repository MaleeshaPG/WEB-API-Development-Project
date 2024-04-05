const userService = require("../services/userServices")
const User = require("../models/userModel")

async function createUser(req, res) {
  
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json({ message: "successfull", data: user })

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}


async function getUsers(req, res) {
    try {
        const users = await userService.getAllUsers()
        res.status(201).json({ message: "successfull", data: users })

    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

const getLatestDataForEachCity = async (req, res) => {
  try {
    const latestData = await User.aggregate([
      {
        $sort: { cityName: 1, timeStamp: -1 } // Sort by cityName and timeStamp
      },
      {
        $group: {
          _id: '$cityName', // Group by cityName
          latestRecord: { $first: '$$ROOT' } // Get the first document for each cityName after sorting
        }
      },
      {
        $replaceRoot: { newRoot: '$latestRecord' } // Replace the root with the latest records
      }
    ]);

    res.json(latestData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getLatestDataForEachCity };


module.exports={
    createUser,
    getUsers,
    getLatestDataForEachCity
}