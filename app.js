const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Arrays and vars
var items =[];

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date();

   var options = {
       weekday: 'long',
       day: 'numeric',
       month : 'long'
   };

   var day = today.toLocaleDateString("en-US", options);

   res.render("list", {kindOfDay : day, newListItems: items})

   


});

app.post("/", function(req, res ){

    let item = req.body.newItem;

    items.push(item)

    res.redirect("/");
})



app.listen(2000, function(){
    console.log("The Server started on port 2000 ");
});


