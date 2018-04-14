const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


app.get("/emails", (request, response) => {
    queries.list('emails').then(emails => {
        response.json({ emails });
    }).catch(console.error);
});

app.post("/emails", (request, response) => {
    queries.read('emails', request.body.email).then(email => {
        if(email === undefined) {
            queries.create('emails', request.body).then(email => {
            response.json({ email });
            }).catch(console.error);   
        } else {
            response.json({email})
        }
    })
});

app.use((request, response) => {
    response.send(404);
});

module.exports = app;
