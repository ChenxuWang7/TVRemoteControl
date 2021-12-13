
/* Run the below in the terminal for build https server.
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem*/

const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 7345;
const bodyParser = require("body-parser");

const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');
const options = {
    key: key,
    cert: cert
};

app = express()

// Open Browser with https://localhost:7345
const server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server starting on port : " + port)
});
/*app.get('/', (req, res) => {
    res.send('Now using https..');
});*/


// server your css as static
app.use(express.static(__dirname));
// connect to HTML
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// get our app to use body parser
app.use(bodyParser.urlencoded({ extended: true }))


// Initiate smartcast
const smartcast = require('vizio-smart-cast');
const tv = new smartcast('192.168.20.3');
tv.pairing.initiate();

const pair = (pin) =>{
    //let smartcast = require('vizio-smart-cast');
    //let tv = new smartcast('192.168.20.3');
    tv.pairing.pair(pin).then(response => {
        const token = response.ITEM.AUTH_TOKEN;
        console.log("Token is " + token);
    });

}

app.post("/", (req, res) => {
    var subPIN = req.body.yourPIN
    pair(subPIN);
    //res.send("Hello " + subPIN + "Paired" );
});


const volUp = () => {
    tv.control.volume.up();
};

const volDown = () => {
    tv.control.volume.down();
}

const power = () => {
    tv.control.power.off();
}

const menu = () => {
    tv.control.menu();
}
/*app.post('/volUp', function (req, res) {
    var inputValue = req.body.volUp;
    if(inputValue == "volUp"){
        volUp();
        console.log('Volume up.');
        res.redirect('/');
    }
});*/
////
app.post('/volUp', function (req, res) {
    volUp();
    console.log('Volume up.');
    res.redirect('/');
});

app.post('/volDown', function (req, res) {
    volDown();
    console.log('Volume down.');
    res.redirect('/');
});

app.post('/power', function (req, res) {
    power();
    console.log('Power off.');
    res.redirect('/');
});

app.post('/menu', function (req, res) {
    menu();
    console.log('menu.');
    res.redirect('/');
});