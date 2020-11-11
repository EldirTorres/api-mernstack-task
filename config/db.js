const moongose = require('mongoose')
require('dotenv').config({path: 'variables.env' });
const dbMongo = process.env.DB_MONGO;

const conectarDB = async () => {   
    await moongose.connect(dbMongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false //configuraciones 
    }).then((r) => {
        console.log('DB conectada')
    }).catch((e) => {
        console.log(error);
        process.exit(1); /* para que detenga la ejecución */
    })
}
module.exports = conectarDB;
 