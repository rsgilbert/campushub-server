const { getUserId } = require('../utils')
 

const items = async (_parent, args, context) => {
    return await context.prisma.items({
        orderBy: "updatedAt_DESC"
    })
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
    }).items({
        orderBy: "updatedAt_DESC"
    })
    console.log(stockItems)
    return stockItems
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
    const itemId = args.id
    const images = await context.prisma.item({
        id: itemId
    }).images()
    return images
}

const orders = async (_parent, args, context) => {
    const userId = getUserId(context)
    const orders = await context.prisma.user({
        id: userId
    }).orders()
    console.log(orders)

    return orders
}





module.exports = {
    items,
    item,
    stock,
    stockItem,
    images,
    orders,
};


