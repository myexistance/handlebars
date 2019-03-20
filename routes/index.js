const express = require('express');
const router = express.Router();

router.get('/', function (req,res){
  res.render('home/index',{
    title: 'Home Page',
    content: 'This is home page content'
  });
});

module.exports = router;
