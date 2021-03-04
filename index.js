const path = require('path');
const express = require('express');
const PORT = 8888;
const app = new express();
app.use(express.static(path.join(__dirname,'page')));
app.listen(PORT, _ => {
    console.log(`server is running at ${PORT}!`);
})