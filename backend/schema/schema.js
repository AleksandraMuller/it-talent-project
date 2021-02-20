import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
} from 'graphql';
import Thought from '../models/Thought';
import Note from '../models/Note';

const ThoughtType = new GraphQLObjectType({
	name: 'Thought',
	fields: () => ({
		id: { type: GraphQLID },
		message: { type: GraphQLString },
		hearts: { type: GraphQLInt },
		createdAt: { type: GraphQLString },
	}),
});

const NoteType = new GraphQLObjectType({
	name: 'Note',
	fields: () => ({
		id: { type: GraphQLID },
		title: { type: GraphQLString },
		text: { type: GraphQLString },
		createdAt: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		thought: {
			type: ThoughtType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Thought.findById(args.id);
			},
		},
		thoughts: {
			type: new GraphQLList(ThoughtType),
			resolve(parent, args, { filter }) {
				return Thought.find({});
			},
		},
		note: {
			type: NoteType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Note.findById(args.id);
			},
		},
		notes: {
			type: new GraphQLList(NoteType),
			resolve(parent, args, { filter }) {
				return Note.find({});
			},
		},
	},
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addThought: {
			type: ThoughtType,
			args: {
				message: {
					type: new GraphQLNonNull(GraphQLString),
				},
			},
			resolve(parent, args) {
				let thought = new Thought({
					message: args.message,
				});
				return thought.save();
			},
		},

		deleteThought: {
			type: ThoughtType,
			args: {
				id: { type: GraphQLID },
			},
			resolve(parent, args) {
				return Thought.findByIdAndDelete(args.id);
			},
		},

		updateHeart: {
			type: ThoughtType,
			args: {
				id: { type: GraphQLID },
				hearts: {
					type: new GraphQLNonNull(GraphQLInt),
				},
			},
			resolve(parent, args) {
				return Thought.findOneAndUpdate(
					{ _id: args.id },
					{
						hearts: args.hearts + 1,
					},
					{ new: true }
				);
			},
		},
		addNote: {
			type: NoteType,
			args: {
				title: {
					type: new GraphQLNonNull(GraphQLString),
				},
				text: {
					type: new GraphQLNonNull(GraphQLString),
				},
			},
			resolve(parent, args) {
				let note = new Note({
					title: args.title,
					text: args.text,
				});
				return note.save();
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
