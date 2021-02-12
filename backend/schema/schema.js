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

const ThoughtType = new GraphQLObjectType({
	name: 'Thought',
	fields: () => ({
		id: { type: GraphQLID },
		message: { type: GraphQLString },
		hearts: { type: GraphQLInt },
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
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
