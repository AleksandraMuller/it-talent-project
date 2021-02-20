import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';
import path from "path"

//ADD TO USE ENV VARIABLE
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//allow cross-origin requests
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));




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
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
