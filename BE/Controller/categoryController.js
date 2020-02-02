var express = require("express");
var categoryRepo = require("../Repos/categoryRepo.js");
var productRepo = require("../Repos/productRepo.js");

var router = express.Router();

router.get("/", (req, res) => {
    categoryRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err)
        res.statusCode = 500
    })
});

router.get("/:id/product", (req, res) => {
    var id = req.params.id;
    productRepo.loadProductByCatID(id).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err)
        res.statusCode = 500
    })
});

router.post("/", (req, res) => {
    categoryRepo.insertCat(req.body)
    .then(insertId => {
        res.json({"CatID": insertId,
                    "CatName": req.body.CatName});
    }).catch(err => {
        console.log(err)
        res.statusCode = 500
    })
});

module.exports = router;