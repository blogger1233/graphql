const graphql = require("graphql")
const { GraphQLObjectType, GraphQLSchema, GraphQLString } = graphql;
const BookType = new GraphQLObjectType({
    name: "book",
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
]

const rootQuery = new GraphQLObjectType({
    name: "rootQuery",
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                const result = books.find((value)=>{
                    return value.id==args.id;
                })
                return result
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: rootQuery
})