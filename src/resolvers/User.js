// resolves parks field on User type
const items =  async (parent, _args, context) => {
    console.log("Id for user " + parent.id)
    const items = await context.prisma.user({
        id: parent.id
    }).items()
    return items
};


module.exports = {
    items,
};
