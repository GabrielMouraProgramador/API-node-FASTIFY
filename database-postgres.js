import { randomUUID } from "crypto"
import { sql }  from './database/db.js'


export class DataBasePostgress{
    // # informação so existe dentro da class
    #produtos = new Map()

    async list(search){
        let videos
        if(search){
            videos = await sql`SELECT * FROM products WHERE ilike "%${search}%"`
        }else{
            videos = await sql`SELECT * FROM products`
        }
        
        return videos 
    }
    
    async create(produto){
        const videoId = randomUUID()
        const {title, brand, category} = produto

        await sql `INSERT INTO products (id, title, brand, category) VALUES (${videoId}, ${title}, ${brand}, ${category})`


    }
    async update(id, produto){
        const {title, brand, category} = produto

        await sql `UPDATE products SET title = ${title} , brand = ${brand} , category = ${category} WHERE id = ${id}`



    }
    async delete(id){

        await sql `DELETE FROM products WHERE id = ${id}`

    }
}