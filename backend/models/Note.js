import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
	title: {
		type: String,
	},
	text: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('Note', noteSchema);
