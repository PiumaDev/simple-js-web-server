const express = require('express');
const app = express();
port = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.send("Yes")
})
app.listen(port, function(){
    console.log("Web Server!")
})
