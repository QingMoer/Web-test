module.exports = function (app) {
    app.use('/', require('./indexs'));
    app.use('/index', require('./indexs'));
    app.use('/findby', require('./findby'));
    app.use('/view', require('./view'));
    app.use('/delete', require('./delete'));
    app.use('/edit', require('./edit'));
    app.use('/newToDo', require('./newToDo'));
    app.post('/newToDo', (req, res) => {
        console.log('response', req.body);
        res.json(req.body)
    })

    app.get("/addtodo",function (request, response) { 
        response.render('index')
      })
    
    };
    