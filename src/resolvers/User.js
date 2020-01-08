// resolves parks field on User type
const items = (parent, _args, context) => {
    console.log("Id for user " + parent.id)
    const items = context.prisma.user({
        id: parent.id
    }).items()
    return items
};


module.exports = {
    items,
};
