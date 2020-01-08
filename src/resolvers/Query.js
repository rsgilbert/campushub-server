const { getUserId } = require('../utils')
 

const items = async (_parent, args, context) => {
    return await context.prisma.items()
};

const item = async (_parent, args, context) => {
    return await context.prisma.item({
        id: args.id
    })
}

const stock = async (_parent, args, context) => {
    const userId = getUserId(context)
    const stockItems = await context.prisma.user({
        id: userId
    }).items()
    console.log(stockItems)
    return stockItems
}

const stockItem = async (_parent, args, context) => {
    const userId = getUserId(context)
    console.log('userid is ' + userId)
    const stockItem = await context.prisma.user({
        id: userId
    }).stock().find(item => item.id === args.id)
    console.log(stockItem)
    return stockItem
}


module.exports = {
    items,
    item,
    stock,
};


