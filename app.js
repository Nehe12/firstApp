const express = require('express');
const {json}=require("express/lib/response");
const app = express();

//Donde cargar archivos staticos
app.use(express.static('public'));
/*Motor de plantillas */
app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));
app.use('/',require("./routes/route"));

app.listen(5000, ()=>{
    console.log("SERVIDOR CORRIENDO en http://localhost:5000");
});

