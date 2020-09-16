const dbConn = require('../config/db.js');
let posts = [{
    id: 1,
    post: "Post1"
}, {
    id: 2,
    post: "Post2"
}]
const controller = {
    create(data) {
        return data;
    },
    read() {
        dbConn.query('SELECT * FROM posts order by id desc', (err, rows, fields) => {
            if (!err)
                // console.log(rows);
                 return rows;
               // res.send(rows);
            else
                return err;
                //console.log(err);
        })
       //return posts;
    },
    readId(id) {
        dbConn.query('SELECT * FROM posts where id = ?',id, (err, rows, fields) => {
            if (!err)
                 return rows;
               // res.send(rows);
            else
                return err;
                //console.log(err);
        })
    },
    update(data,id) {
        return data;
    },
    delete(id) {
        return id;
    }
}

module.exports = controller;