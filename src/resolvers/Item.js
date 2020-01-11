// user field on the Item type
const user = (parent, args, context) => {
    return context.prisma.item({
        id: parent.id
    }).user()
};

const images = (parent, args, context) => {
    return context.prisma.item({
        id: parent.id
    }).images()
}

module.exports = {
    user,
    images
};
