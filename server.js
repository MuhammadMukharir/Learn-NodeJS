// const http = require('http');

// const server = http.createServer(() => {
//     console.log('I hear you!! thank for the request')
// })

// server.listen(3000);

// -------------------- USING CommonJS --------------------
// const http = require('http');

// const server = http.createServer((request, response) => {
//     console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);

//     const user = {
//         name: 'ziehunter1',
//         age: 18,
//         level: 100
//     };

//     response.setHeader('Content-Type', 'application/json');
//     // response.setHeader('Content-Type', 'text/html');
//     response.end(JSON.stringify(user));
// })

// server.listen(3000);

// anytime we refresh the browser we make GET request
// ----------------- USING Express -----------------------------
// Express automically convert into text/html or aplication/json
// in 'res.send()'
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// express middleware (sebelum masuk routes
// [get, post, put, delete])
// app.use((req, res, next) => {
    // console.log('<h1>HELLOOOOO<h1>');

    // next() is for next from express middleware
    // to app.[get, post, put, delete]
    // next();
// })
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // console.log(req.query); url setelah question mark (?) .../?name=zie&age=20
    // console.log(req.body); harus menggunakan bodyParser untuk mendapatkan valuenya
    // console.log(req.header);

    // app.get('/:id', (req, res) => {
    // console.log(req.params); maka akan output
    // jika 'localhost:3000/1234' maka output = { id: '1234'}
    // params bisa banyak dan bisa nested

    // res.send('getting root');
    res.status(404).send('Not Found');
})

// app.get dibawah ini tidak dijalankan karena root
// '/' sudah ada diatas jadi expreesJS akan menjalankan
// yg pertama muncul
app.get('/', (req, res) => {
    res.send('getting 2nd root');
})

app.get('/profile', (req, res) => {
    res.send('getting profile');
})

app.post('/profile', (req, res) => {
    // res.send('<h1>helloooooo</h1>');
    // console.log(req.body);
    // const user = {
    //     name: 'ziehunter1',
    //     age: 18,
    //     level: 99
    // }
    res.send('Success'); // to confirm that 'post' is success to user
    // res.send hanya akan terbaca yang paling awal
    // munculnya (in this case is 'res.send(user)')
    // res.send('getting profile');
})

const { PORT, DATABASE_URL } = process.env;

app.listen(PORT, () => {
    console.log(`app is listening to ${DATABASE_URL}`)
});
// console.log(process.env);