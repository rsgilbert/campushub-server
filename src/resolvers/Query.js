const items = (_parent, args, context) => {
    return context.prisma.items()
};

module.exports = {
    items
};
