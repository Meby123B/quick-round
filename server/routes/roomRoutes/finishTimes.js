const express = require('express')
const DB = require('../../DB').finishTimes


const router = express.Router()


// DB.create
router.post('/', async (req, res, next) => {
    const { client, roomId } = req
    const { userId, finishTime } = req.body

    try {
        const resultObj = await DB.create(client, userId, roomId, finishTime)

        console.log(resultObj);
        res.json(resultObj)

        next()
    } catch (error) {
        next(error)
    }
})


// DB.showByRoom
router.get('/', async (req, res, next) => {
    const client = req.client
    const { roomId } = req.params

    try {
        const results = await DB.showByRoom(client, roomId)

        console.log(results);
        res.json(results)

        next()
    } catch (error) {
        next(error)
    }
})




module.exports = router