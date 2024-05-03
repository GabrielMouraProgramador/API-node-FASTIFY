import { fastify } from 'fastify'
import { DataBasePostgress } from './database-postgres.js'

const server = fastify();
const dataBase = new DataBasePostgress()


// POST > localhost:3333/products | add products
server.post('/products', async (request,reply) => {
    const {title,brand,category } = request.body
 
    await dataBase.create({
        title,
        brand,
        category
    })
    return reply.status(201).send()
})


// POST > localhost:3333/products | add products
server.get('/products', async (request,reply) => {
    const search = request.query.search
    const allVideos = await dataBase.list(search)

    return allVideos
})

server.put('/products/:id', async (request,reply) => {
    const videoId = request.params.id
    const {title,brand,category } = request.body
 
    await dataBase.update(videoId,{
        title,
        brand,
        category
    })
    return reply.status(204).send()
})

server.delete('/products/:id', async (request,reply) => {
    const videoId = request.params.id
    await dataBase.delete(videoId)
    
    return reply.status(204).send()
})


server.listen({
    host:'0.0.0.0',
    port: process.env.PORT ?? 3333,
})
