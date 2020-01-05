const parks = (_parent, args, context) => {
    return context.prisma.parks
};

module.exports = {
    parks
};
