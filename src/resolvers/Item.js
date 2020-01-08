// user field on the Item type
const user = (parent, args, context) => {
    return context.prisma.item({
        id: parent.id
    }).user()
};

module.exports = {
    user
};
