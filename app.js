const express = require('express');
const morgan = require('morgan');
const app=express();
const {Page, User} = require('./models');
//other way const {db} = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


app.use(express.static('./view/stylesheets'));
app.use(morgan('dev'));
app.use('/wiki', wikiRouter);
// app.use('/user', userRouter);



app.get('/', (req, res, next) => {
    res.redirect('/wiki');
});


// app.get('/',(req,res) => {
//     const ourString = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//     </head>
//     <body>
//         <h1>hello I am connected yaay</h1>
//     </body>
//     </html>`
//     res.send(ourString);
// })


const PORT=3000;

const init = async()=>{
    try{
    await Page.sync({force: true});  //force: true means we recreate tables based on js defn
    await User.sync({force: true});
    
    // other way await db.sync({force: true});
    app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
    });
    }catch(error){
        console.error('you got here blah');
    }
}
init();

