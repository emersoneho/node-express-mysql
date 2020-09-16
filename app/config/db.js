const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'eastecnologia.com',
    user: 'eastecno_site',
    password: 'mudar123',
    database: 'eastecno_site',
    multipleStatements: true
});

conn.connect(err => {
    !err ? console.log('Connection Established Successfully') : console.log(`Connection Failed! ${JSON.stringify(err,undefined,2)}`);
})

module.exports = conn;
