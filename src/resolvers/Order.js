// how to resolve item on Order
const item = async (parent, _args, context) => {
    console.log("item id is " + parent.id)
    return await context.prisma.order({
        id: parent.id
    }).item()
}


module.exports = {
    item
}