import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

//ADD TO USE ENV VARIABLE
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//allow cross-origin requests


app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(cors());

const mongoUrl = process.env['MONGO_URL'];

mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

// mongoose.connect(mongoUrl);
mongoose.connection.once('open', () => {
	console.log('connected');
});
// mongoose.Promise = Promise;

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

app.get('/*', (req, res) => {
	res.sendFile(
		path.join(__dirname, '../frontend/build', '../frontend/build/index.html')
	);
	res.sendFile(path.resolve(__dirname + '../frontend/build/index.html'));
});

// app.use((req, res, next) => {
// 	const error = new Error('Not Found'); //Error object
// 	error.status = 404;

// 	//res.render('./404'); by default in express applications you would render a 404 page

// 	res.status(200).sendFile(path.join(__dirname + '/frontend/build/index.html'));

// 	next(error);
// });

// app.get('/', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });
// app.get('/startpage', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });
// app.get('/whiteboard', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });
// app.get('/happythoughts', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });
// app.get('/stickies', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });
// app.get('/quote-generator', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });
// app.get('/developer-sounds', (req, res) => {
// 	res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
// });

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
