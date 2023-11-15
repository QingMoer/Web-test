var express = require('express');
var router = express.Router();
const todo = require("../schemas/todo");
router.get('/', function(req, res) {
res.render('findby')})
router.get('/bykeyword', async (req,res) => {
    var keyword = "";
    console.log(req.body)
    keyword = req.body.keyword;
    keyword = "1"
    keyword = '/.*'+keyword+'.*/i';
    const todo_list = await todo.find();
    console.log(todo_list)
    res.render('findby',{todo_list});
});
module.exports = router;