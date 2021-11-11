const Team = require('../model/team')
const mongoose = require('mongoose')


const getAllTeams = async (req, res) => {
    const allTeams = await Team.find()

    if (allTeams.length == 0){
        res.status(204).send({ message: "No Product Found"})
    }

    res.status(200).send(allTeams)
}

const getById = async (req, res) => {
    const teamId = req.params

    const searchTeams = await Team.findOne(_id = teamId)


    if (searchTeams.length == 0){
        res.status(204).send({ message: "No Product Found"})
    }

    res.status(200).send(searchTeams)
}

const createTeam = async (req, res) => {
    const team = new Team ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        ramo: req.body.ramo,
        email: req.body.email,
    })

    const teamExist = await Team.findOne({ name: req.body.name })

    if (teamExist) {
        res.status(409).send({ message: `Team already Exist In This Team`})
    }

    try {
        const newTeam = await Team.insertMany(team)
        res.status(201).json(newTeam)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {
    createTeam,
    getAllTeams,
    getById
}