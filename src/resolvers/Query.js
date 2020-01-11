const { getUserId } = require('../utils')
 

const items = async (_parent, args, context) => {
    return await context.prisma.items()
};

const item = async (_parent, args, context) => {
    console.log('it')
    const item = await context.prisma.item({
        id: args.id
    })
    return item
}


const stock = async (_parent, _args, context) => {
    const userId = getUserId(context)
    console.log(userId)
    const stockItems = await context.prisma.user({
        id: userId
    }).items()
    // const images = await context.prisma.images({
    //     id: 
    // })
    console.log(stockItems)

    return stockItems.reverse()
}

const stockItem = async (_parent, args, context) => {
    const userId = getUserId(context)
    const items = await context.prisma.user({
        id: userId
    }).items()
    const item = items.find(item => item.id === args.id)
    console.log(item)
    return item
}

const images = async (_parent, args, context) => {
    const id = args.id
    const images = await context.prisma.item({
        id
    }).images()
    return images
}




module.exports = {
    items,
    item,
    stock,
    stockItem,
    images,
};


