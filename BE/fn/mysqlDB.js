var mysql = require("mysql");

var createConnection = () => {
    return mysql.createConnection({
        host: "http://45.63.18.119/",
        // port: "8080",
        user: "root",
        password: "Danh@1234567",
        database: "qlbh"
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