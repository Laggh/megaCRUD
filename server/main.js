const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const os = require('os');  // Required to get the local machine's IP

const app = express();

app.use(bodyParser.json()); // faz com que o express entenda requisições com corpo em JSON
app.use(cors()); // Allow all origins


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_db"
});

app.use((req, res, next) => {
    const ip = req.ip || req.connection.remoteAddress;  // Get the IP address
    const method = req.method;
    const url = req.url;
  
    console.log(`${ip} ${method}: ${url}`);
  
    next();
});

  
db.connect((err) => {
    if (err) {
        console.log("erro de conexão com o banco:",err);
        return
    }
    console.log("Connected to MySQL");
});

app.get("/ping", (req,res) => {
    res.json("pong")
});

app.post("/", (req,res) => {
    //const {name, message} = req.body
    const name = req.body.name
    const message = req.body.message
    
    console.log(req.body);
    if(!name || !message){
        res.status(400).json({error: "Name e Message são obrigatorios"});
        return
    }

    db.query("INSERT INTO messages(name,message) VALUES (?,?)", [name,message], (err,results) =>{
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            id: results.insertId,
            name: name,
            message: message
        });
    });

});

app.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.query('DELETE FROM messages WHERE id = ?', [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Message not found' });
        }
        res.json({ message: 'Message deleted successfully' });
    });
});

app.listen(3000, ()=>{

    console.log(`Servidor rodando at http://localhost:${3000}`);
});