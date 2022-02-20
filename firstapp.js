//Activity name: firstapp.js

var express = require("Express");

var app = express();



app.get("/", function(request, response){
    response.send("Hello World! Ramales, Aaron Jay Q.");
})

app.listen(3000, function(){
    console.log('Server running at http:/loclahost:3000');

});
//Ramales, Aaron Jay Q.
//wd-202