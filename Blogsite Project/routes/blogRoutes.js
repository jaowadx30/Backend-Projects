const express = require('express')
const blogController = require('../controllers/blogController')

const router = express.Router()

//mongoose and mongo sandbox routes
/*
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'new blog',
        snippet:'about my new blog',
        body:'Its really easy to distinguish an aligator from a crocodile when they are lying close to each other. The aligator is the one beside the croc. Makes Sense?'
    });
    blog.save().then((result)=>res.send(result)).catch((err)=>{
        console.log(err)
    })
})

app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>res.send(result)).catch((err)=>{
        console.log(err)
    })
})

app.get('/single-blog',(req,res)=>{
    Blog.findById("661ee0abdfa792183ff2ee70").then((result)=>res.send(result)).catch((err)=>{
        console.log(err)
    })
})

*/
//blog routes
router.get('/',blogController.blog_index)
router.post('/', blogController.blog_create_post)
router.get('/create', blogController.blog_create_get
    // res.send('<p>about page</p>');
);
router.get('/:id',blogController.blog_details)
router.delete('/:id',blogController.blog_delete)

module.exports = router;