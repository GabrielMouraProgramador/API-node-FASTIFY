import { randomUUID } from "crypto"

export class DataBaseMemory{
    // # informação so existe dentro da class
    #produtos = new Map()

    list(search){
        return Array.from(this.#produtos.entries())
        .map((productInfo) => {
            const id = productInfo[0]
            const info = productInfo[1]

            return {
                id,
                ...info
            }
        })
        .filter(video => {
            if (search){
                return video.title.includes(search)
            }
            
            return true
        })
    }
    
    create(produto){
        const produtoId = randomUUID()

        this.#produtos.set(produtoId,produto)
    }
    update(id, produto){
        this.#produtos.set(id,produto)
    }
    delete(id){
        this.#produtos.delete(id)
    }
}