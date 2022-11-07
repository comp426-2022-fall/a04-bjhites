
import {roll} from "./lib/roll.js";
import express from 'express';
import minimist from 'minimist';

const app = express()

var port = 5000
const args = minimist(process.argv.slice(2));
if(args.port != null){
	port = args.port
}

app.get('/app', (req, res, next) => {
	res.status(200).send('200 OK');
})

app.get('/app/roll', (req, res, next) => {
	res.status(200).send(JSON.stringify(roll(6, 2, 1)));
})

// app.post('/app/roll', (req, res, next) => {
//	res.status(200).send(JSON.stringify(roll.roll(req.body.sides, req.body.dice, req.body.rolls)));
 //})

// app.get('/app/roll/:sides', (req, res, next) => {
// 	res.status(200).send(JSON.stringify(roll(req.params['sides'], 2, 1)));
// })

// app.get('/app/roll/:sides/:dice', (req, res, next) => {
//	res.status(200).send(JSON.stringify(roll(req.params['sides'], req.params['dice'], 1)));
// })

// app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
//	res.status(200).send(JSON.stringify(roll(req.params['sides'], req.params['dice'], req.params['rolls'])));
// })

app.get('*', function(req, res){
	res.status(404).send("404 NOT FOUND");
})

app.listen(port, () => {
})

