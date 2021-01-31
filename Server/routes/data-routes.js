var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path')

/* GET Data*/
router.get('/test', function(req, res, next) {
    res.send({'test':'test'});
});

router.get('/academic', function(req, res, next) {
    fs.readFile(path.join(__dirname, "../public/dataset/academic.json"), "utf-8", function(err, data) {
        if (err) {
            res.send("文件读取失败");
        } else {
            res.send(data);
        }
    });
});

router.get('/kg_update', function(req, res, next) {
    fs.readFile(path.join(__dirname, "../public/dataset/kg_update.json"), "utf-8", function(err, data) {
        if (err) {
            res.send("文件读取失败");
        } else {
            res.send(data);
        }
    });
});

router.get('/profiles', function(req, res, next) {
    fs.readFile(path.join(__dirname, "../public/dataset/profiles.json"), "utf-8", function(err, data) {
        if (err) {
            res.send("文件读取失败");
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
