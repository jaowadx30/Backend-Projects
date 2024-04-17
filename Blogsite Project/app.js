const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
//express app
const app = express();

//connect to mongoDB
const dbURI = "mongodb+srv://jaowad:abcd1234@cluster0.av8laki.mongodb.net/NodeTuts?retryWrites=true&w=majority&appName=Cluster0"
// const dbURI = "mongodb+srv://jaowad:abcd1234@cluster0.av8laki.mongodb.net/"
mongoose.connect(dbURI).then((result)=>app.listen(3000)).catch((err)=>console.log(err))

//register view engines
app.set('view engine','ejs');

//static middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
//morgan used for console log information
app.use(morgan('dev'));


//routes
app.get('/',(req,res)=>{
    res.redirect('/blogs')
    // res.send('<p>home page</p>');
    // res.render('index',{title:'Home',blogs});
});

app.get('/about',(req,res)=>{
    // res.send('<p>about page</p>');
    res.render('about',{title:'About'})
});

//Blog routes
app.use('/blogs',blogRoutes);

//404 error
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})