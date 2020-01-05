// resolves parks field on User type
const parks = (parent, args, context) => {
    return context.prisma.user({
        id: parent.id
    }).parks()
};


module.exports = {
    parks,
};
