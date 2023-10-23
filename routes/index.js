module.exports = function (app) {
    app.use('/', require('./indexs'));
    app.use('/index', require('./indexs'));
    app.use('/views', require('./views'));
    app.use('/hobits', require('./hobits'));
    app.use('/communication', require('./communication'));
    app.post('/communication', (req, res) => {
        console.log('response', req.body);
        res.json(req.body)
    })

    app.get("/addcommunication",function (request, response) { 
        response.render('index')
      })
    
    };