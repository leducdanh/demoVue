var db = require("../fn/mysqlDB.js")

exports.loadAll = () => {
    var sql = "select * from product"
    return db.load(sql)
}

exports.loadProductByCatID = (catID) => {
    var sql = `select * from product where CatID = ${catID}`
    return db.load(sql)
}

exports.insertProduct = (poco) => {
    var sql = `insert into product (CatID, ProName, Price) values(${poco.CatID}, '${poco.ProName}', ${poco.Price})`
    return db.update(sql)
}

exports.updateProduct = (poco, idPro) => {
    var sql = `UPDATE product set CatID = ${poco.CatID}, ProName = N'${poco.ProName}', Price = ${poco.Price} where ProID = ${idPro}`
    return db.update(sql)
}

exports.getDetail = (id) => {
    var sql = `select * from product where ProID = ${id}`
    return db.load(sql)
}

exports.delproduct = (id) => {
    var sql = `delete from product where ProID = ${id}`
    return db.delete(sql)
}