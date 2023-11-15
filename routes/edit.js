var express = require('express');
const { ObjectId } = require('mongodb');
const  mongoose  = require('mongoose');
var router = express.Router();
const todo = require("../schemas/todo");
router.get('/', function(req, res) {
    res.render('edit')})


    router.get('/:id', async (req,res) => {
        const { id } = req.params;
        console.log(req.body)
        const todo_view = await todo.findById(id);
        console.log(todo_view)
        res.render('edit',{todo_view});
    });
    router.post('/editone/:id', async (req,res) => {
        const  id = req.params;
        ob_id= mongoose.Types.ObjectId(id.id)
        console.log("req.params")
        console.log(req.params)
        console.log("req.body")
        console.log(req.body)
        editone = {title: req.body.title,
        text : req.body.text,
        createdAt : req.body.createdAt,
        updatedAt : Date.now}
        console.log(req.body)
        const todo_view = await todo.updateOne({ _id: ob_id},editone,{new:true});
        console.log(todo_view)
        res.redirect('/findby/bykeyword');
    });
module.exports = router;