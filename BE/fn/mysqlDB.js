var mysql = require("mysql");

var createConnection = () => {
    return mysql.createConnection({
        host: "us-cdbr-iron-east-04.cleardb.net",
        // port: "8080",
        user: "b4b5b6830d6d7c",
        password: "cb4605d4",
        database: "heroku_4aaa3f298e05ce3"
    });
}

exports.load = (sql) => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, rows, fields) => {
            if (err){
                reject(err)
            } else {
                resolve(rows)
            }
            cn.end();
        });
    });
}

exports.insert = (sql) => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, value) => {
            if (err){
                reject(err)
            } else {
                resolve(value.insertId);
            }
        })
    });
}

exports.update = (sql) => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, value) => {
            if (err){
                reject(err)
            } else {
                resolve(value.insertId);
            }
        })
    });
}

exports.delete = (sql) => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, value) => {
            if (err){
                reject(err)
            } else {
                resolve(value.insertId);
            }
        })
    });
}