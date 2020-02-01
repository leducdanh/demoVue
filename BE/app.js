var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(bodyParser.json());

var categoryCtrl = require("./Controller/categoryController.js");
var productCtrl = require("./Controller/producrController.js");

app.use("/cat", categoryCtrl);
app.use("/product", productCtrl);
// app.get('/', (req, res) => {
// 	var ret = {
// 		msg: 'hello from nodejs api'
// 	};
// 	res.json(ret);
// });

app.listen(3000, () => {
    console.log("lister port 3000")
})