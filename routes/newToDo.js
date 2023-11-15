var express = require('express');
const todo = require("../schemas/todo");
var router = express.Router();
 
router.get('/', function(req, res) {
res.render('newToDo')
})
router.post('/addnewtodo', async (req, res) => {
    
    let todo_ex = new todo(req.body)
    try {
        console.log(req.body)
        Todo = await todo.create(req.body);
    //    res.redirect(`/todos/${post.id}`);
        res.redirect(`/newToDo`);

    } catch (error) {
        console.log(error)
        alert("Error!")
        res.redirect(`/newToDo`);
        // res.render('../views/newToDo', { todo_ex : todo_ex });
    }

});
module.exports = router;