const resolvers = {
    Query: {
        test: () => `graphql API working`,
        parks: () => parks,    
        park: (_parent, args) => findPark(args.id)
    }
}

const findPark = id => parks.find(pk => pk.id === id)

let parks = [
    {
        id: 'park-0',
        manager: {
            id: 0,
            name: "Samuel"
        }, 
        location: {
            id: 0,
            place: "Wandegeya"
        }
    },
    {
        id: 'park-1',
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


c