const { getUserId } = require('../utils')
 
// query for all items
const items = async (_parent, _args, context) => {
    return await context.prisma.items({
        orderBy: "updatedAt_DESC"
    })
};

// query for an item based on its id
const item = async (_parent, args, context) => {
    const item = await context.prisma.item({
        id: args.id
    })
    return item
}

// query for all items posted by a user
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

// query for an item posted by a user
const stockItem = async (_parent, args, context) => {
    const userId = getUserId(context)
    const items = await context.prisma.user({
        id: userId
    }).items()
    const item = items.find(item => item.id === args.id)
    console.log(item)
    return item
}

// query for all images of an item
const images = async (_parent, args, context) => {
    const itemId = args.id
    const images = await context.prisma.item({
        id: itemId
    }).images({
        orderBy: "updatedAt_DESC"
    })
    return images
}

// query for orders whose items belong to the user
const orders = async (_parent, _args, context) => {
    const userId = getUserId(context)
    const orders = await context.prisma.orders({
        where: {
            item: { user: { id: userId } }
        }        
    })
    console.log(orders)
    return orders
}

const user = async (_parent, _args, context) => {
    const userId = getUserId(context)
    const user = await context.prisma.user({
        id: userId
    })
    console.log(user)
    return user
}

// query for a particular order
const order = async (_parent, args, context) => {
    const orderId = args.id
    const order = await context.prisma.order({
        id: orderId
    })
    console.log(order)
    return order
}


module.exports = {
    items,
    item,
    stock,
    stockItem,
    images,
    orders,
    order,
    user
};


