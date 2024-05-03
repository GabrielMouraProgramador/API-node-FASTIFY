import { sql }  from '../database/db.js'

// sql `DROP TABLE IF EXISTS products`.then(() => {
//     console.log('tabela apagada.')
// })


sql `
 CREATE TABLE products (
    id TEXT PRIMARY KEY,
    title VARCHAR(100),
    brand VARCHAR(50),
    category VARCHAR(50)
);
`.then(() => {
    console.log('tabela criada.')
})