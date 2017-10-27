const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//Middleware for body-parser to function
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

//middleware for bower
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/users', (req, res) => {
    let users = [{
            first_name: "John",
            last_name: "Dow",
            age: 33,
            gender: "male"
        },
        {
            first_name: "Tom",
            last_name: "Dow",
            age: 44,
            gender: "male"
        }, {
            first_name: "Sarah",
            last_name: "Dow",
            age: 32,
            gender: "female"
        }
    ];
    res.json(users);
});

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '/downloads/MS4 Stormwater Plan.pdf'));
});

app.get('/about', (req, res) => {
    res.redirect('/about.html')
});
app.post('/subscribe', (req, res) => {
    let name = req.body.name; // pulling from the input name
    let email = req.body.email;
    console.log(name + ' has subscribed with ' + email);
});

app.listen(3000, function () {
    console.log('Server started on port 3000...');
});