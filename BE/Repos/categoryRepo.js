var db = require("../fn/mysqlDB");

exports.loadAll = function () {
    var sql = `select * from category`;
    return db.load(sql);
}

exports.insertCat = function(poco) {
    var sql = `insert into category (CatName) values('${poco.CatName}')`
    return db.insert(sql)
}
