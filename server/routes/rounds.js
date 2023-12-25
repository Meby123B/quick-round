const express = require('express')
const DB = require('../DB').rounds


const router = express.Router()

// DB.create
// DB.createMany
// DB.remove
// DB.show



// GET ONE
router.get('/', async (req, res, next) => {
    const client = req.client
    try {
        const rounds = await DB.showByRoom   (client)

        for (let i = 0; i < rooms.length; i++) {
            const roomId = rooms[i].id
            rooms[i].playersInRoom = await DB.players.countInRoom(client, roomId)
        }

        console.log(rooms);
        res.json(rooms)
        
        next()
    } catch (error) {
        next(error)
    }
})
    DB.showByRoom
})


//GET ALL
router.get('/', async (req, res, next) => {

    const client = req.client
    try {
        const rooms = await DB.rooms.showAll(client)

        for (let i = 0; i < rooms.length; i++) {
            const roomId = rooms[i].id
            rooms[i].playersInRoom = await DB.players.countInRoom(client, roomId)
        }

        console.log(rooms);
        res.json(rooms)
        
        next()
    } catch (error) {
        next(error)
    }
})


//JOIN
router.get('/:roomId/join/:userId', async (req, res, next) => {

    const client = req.client
    const { userId, roomId } = req.params

    try {
        const room = await DB.rooms.showOne(client, roomId)
        const playersInRoom = await DB.players.showAllInRoom(client, roomId)

        if (playersInRoom.length >= room.numofplayers) {
            throw { statusCode: 403, message: 'the room is full' }
        }
        if (playersInRoom.some((p) => p.id == userId)) {
            throw { statusCode: 409, message: 'you already here!' }
        }

        const result = await DB.players.joinRoom(client, roomId, userId)
        console.log('result', result);

        res.json({ result: result })
        next()

    } catch (error) {
        next(error)
    }
})


//LEAVE
router.get('/:roomId/leave/:userId', async (req, res, next) => {

    const client = req.client
    const { userId, roomId } = req.params

    try {
        const result = await DB.players.leaveRoom(client, roomId, userId)
        console.log('result', result);
        res.json({ result: result })

        next()
    } catch (error) {
        next(error)
    }
})



module.exports = router