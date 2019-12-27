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
        name: "Lovely Wandegeya Park",
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
    {
        id: 'park-2',
        name: "Munyonyo Parking",
        manager: {
            id: 0,
            name: "Teletubies"
        }, 
        location: {
            id: 0,
            place: "Bwayise"
        }
    },
]

module.exports = resolvers

