var db = require("../fn/mysqlDB");

exports.loadAll = function () {
    var sql = `select * from category`;
    return db.load(sql);
}
