var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile(path.resolve(__dirname, '../', 'index-data.json'), (err, data) => {
    res.render('index.html', JSON.parse(data.toString()));

  })
});

router.get('/index-data-backup', function (req, res, next) {
   fs.readFile(path.resolve(__dirname, '../', 'index-data.json'), (err, data) => {
      res.send(data.toString());

    })
});

router.get('/setting', function (req, res, next) {
    if (req.query.user == 87978775 ){
        fs.readFile(path.resolve(__dirname, '../', 'index-data.json'), (err, data) => {
          res.render('setting.html', {
            "data": data.toString()
          });

        })
        } else {
            res.redirect('http://dragon.nownews.com/');
        }
    })
  .post('/setting', function (req, res, next) {
    if (req.body.password !== "28331543") {

        fs.readFile(path.resolve(__dirname, '../', 'index-data.json'), (err, data) => {
          res.render('setting.html', {
            "data": data.toString(),
            "success": "更新密碼錯誤"
          });

        })
      return;
    }

    fs.writeFile(path.resolve(__dirname, '../', 'index-data.json'), req.body.setting, function (err) {
      if (err) throw err;
      fs.readFile(path.resolve(__dirname, '../', 'index-data.json'), (err, data) => {
        res.render('setting.html', {
          "data": data.toString(),
          "success": "更新成功"
        });

      })
    });

  });





module.exports = router;
