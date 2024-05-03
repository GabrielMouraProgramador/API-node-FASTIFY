import { fastify } from 'fastify'
import { DataBaseMemory } from './database-memory.js'

const server = fastify();
const dataBase = new DataBaseMemory()


// POST > localhost:3333/products | add products
server.post('/products', (request,reply) => {
    const {title,brand,category } = request.body
 
    dataBase.create({
        title,
        brand,
        category
    })
    return reply.status(201).send()
})


// POST > localhost:3333/products | add products
server.get('/products', (request,reply) => {
    const search = request.query.search
    const allVideos = dataBase.list(search)

    return allVideos
})

server.put('/products/:id', (request,reply) => {
    const videoId = request.params.id
    const {title,brand,category } = request.body
 
    dataBase.update(videoId,{
        title,
        brand,
        category
    })
    return reply.status(204).send()
})

server.delete('/products/:id', (request,reply) => {
    const videoId = request.params.id
    dataBase.delete(videoId)
    
    return reply.status(204).send()
})


server.listen({
    port: 3333,
})
