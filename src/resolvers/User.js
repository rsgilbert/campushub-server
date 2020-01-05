// resolves parks field on User type
const parks = (parent, args, context) => {
    console.log("Id for user " + parent.id)
    return context.prisma.user({
        id: parent.id
    }).parks()
};


module.exports = {
    parks,
};
