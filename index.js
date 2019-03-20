const express = require('express');
const exphbs = require('express-handlebars');

const path = require('path');

var app = express(); //express the function returns an object to app
const router = express.Router();
const home = require('./routes/index')


// const home=require('./routes/index')

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/',home);


app.set('port', (process.env.PORT) || 3000);
app.listen(app.get('port'),function(){
  console.log('server is running on port ' + app.get('port'));

})
