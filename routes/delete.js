var express = require('express');
var router = express.Router();
const todo = require("../schemas/todo");
router.get('/', function(req, res) {
    res.render('hobits')})

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    const todo_del = await todo.findByIdAndDelete(id);
    console.log(todo_del)
    res.redirect("/findby/bykeyword")
});
module.exports = router;