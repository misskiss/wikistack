const express = require('express');
const morgan = require('morgan');


const app=express();

app.use(express.static('./view/stylesheets'));
app.use(morgan('dev'));

app.get('/',(req,res) => {
    const ourString = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <h1>hello I am connected yaay</h1>
    </body>
    </html>`
    res.send(ourString);
})


const PORT=3000;
app.listen(PORT, () =>{
    console.log(`App listening on port ${PORT}`);
})