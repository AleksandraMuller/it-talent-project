import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';
// import path from 'path';

//ADD TO USE ENV VARIABLE
require('dotenv').config();

let protected = ['transformed.js', 'main.css', 'favicon.ico'];

const app = express();
const port = process.env.PORT || 5000;

//allow cross-origin requests
app.use(cors());

// app.use(express.static(path.join(__dirname, '../frontend/build')));

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

// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, '../frontend/build', '../frontend/build/index.html'));
// 	res.sendFile(path.resolve(__dirname + '../frontend/build/index.html'));
// });

app.get('*', (req, res) => {
	let path = req.params['0'].substring(1);

	if (protected.includes(path)) {
		// Return the actual file
		res.sendFile(`${__dirname}../frontend/build/${path}`);
	} else {
		// Otherwise, redirect to /build/index.html
		res.sendFile(`${__dirname}../frontend/build/index.html`);
	}
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
