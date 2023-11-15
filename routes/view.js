var express = require('express');
var router = express.Router();
const todo = require("../schemas/todo");
router.get('/', function(req, res) {
    res.render('view')})

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    console.log(req.body)
    const todo_view = await todo.findById(id);
    console.log(todo_view)
    res.render('view',{todo_view});
});
module.exports = router;