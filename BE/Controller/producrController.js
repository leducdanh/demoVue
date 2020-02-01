var express = require("express")
var productRepo = require("../Repos/productRepo.js")

var router = express.Router();

router.get("/", (req, res) => {
    productRepo.loadAll().then(rows => {
        res.json(rows)
    }).catch( err => {
        console.log(err)
    })
})

router.post("/", (req, res) => {
    productRepo.insertProduct(req.body)
    .then(rs =>{
        res.json({
            msg: "success"
        })
    })
    .catch(err => {
        console.log(err)
        res.statusCode = 500
    })
})

router.put("/:id", (req, res) => {
    var idPro = req.params.id
    productRepo.updateProduct(req.body, idPro)
    .then(rs =>{
        res.json({
            msg: "success"
        })
    })
    .catch(err => {
        console.log(err)
        res.statusCode = 500
    })
})

router.get("/:id", (req, res) => {
    var id = req.params.id
    productRepo.getDetail(id).then(rows => {
        res.json(rows)
    }).catch( err => {
        console.log(err)
    })
})

router.delete("/:id", (req, res) => {
    var id = req.params.id
    productRepo.delproduct(id).then(rs => {
        res.json(rs)
    }).catch( err => {
        console.log(err)
    })
})

module.exports = router