var express = require("express");
// var bodyParser = require("body-parser");
var Burger = require('../models/burger');
var router = express.Router();
// var PORT = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
router.get("/", function(req, res) {
    Burger.getAll(function(err, data) {
        console.log('this is the data ----', data)
        console.log('this is the err!!!!', err)
        if (err) {
            res.send("NOT FOUND");
        } else {

            var hbsObject = {
                burgers: data
            };
            // console.log(hbsObject.burgers[2].burger_name);
            res.render('index', hbsObject);
        }
    })
});

router.post("/api/burgers", function(req, res) {
    var newBurger = new Burger(null, req.body.burger_name, req.body.devoured);

    newBurger.create(function(err, data) {
        // decide what to do - check
        // the example in gitlab for alt-orm
        res.json(data);
    });
    // Burger.create(function (err, data) {}
    //     req.body.burger_name, req.body.devoured
    // ], function(result) {
    //     res.json({ id: result.insertId });
    // });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    Burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        // if (result.changedRows == 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        // } else {
        //     result.status(200).end();
        // }
        res.send("It's Done")
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    Burger.delete(condition, function(result) {
        // if (result.changedRows == 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        // } else {
        //     result.status(200).end();
        // }
        res.send("It's Done")
    });
});

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
// });
module.exports = router;