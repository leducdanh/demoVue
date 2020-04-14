var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(bodyParser.json());

var categoryCtrl = require("./Controller/categoryController.js");
var productCtrl = require("./Controller/producrController.js");
var categoryRepo = require("./Repos/categoryRepo.js");

app.use("/cat", categoryCtrl);
app.use("/product", productCtrl);

var interval = setInterval(() => {
    categoryRepo.loadAll().then().catch()
}, 5000);

//Handle production
if (process.env.NODE_ENV === 'production') {
    //Static folder
    app.use(express.static(__dirname + '/public/'));

    //Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// app.get('/', (req, res) => {
// 	var ret = {
// 		msg: 'hello from nodejs api'
// 	};
// 	res.json(ret);
// });
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`lister port ${port}`)
})