const resolvers = {
    Query: {
        test: () => `graphql API working`,
        parks: (_parent, args, context) => {
            return context.prisma.parks
        },
        park: (_parent, args) => findPark(args.id)
    },
    Mutation: {
        park: (_parent, args, context) => {
            return context.prisma.createPark({
                name: args.name
            })
        }
    }
}

const findPark = id => parks.find(pk => pk.id === id)

let parks = [
    {
        id: 'park-0',
        name: "Lovely Wandegeya Park",
        manager: {
            id: 0,
            name: "Sheilla"
        },
        location: {
            id: 0,
            place: "Wandegeya"
        }
    },
    {
        id: 'park-1',
        name: "Homely Parking",
        manager: {
            id: 0,
            name: "Jackson"
        },
        location: {
            id: 0,
            place: "Salaama"
        }
    },

]


module.exports = resolvers

