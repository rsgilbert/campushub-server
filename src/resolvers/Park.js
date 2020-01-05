const managedBy = (parent, args, context) => {
    return context.prisma.park({
        id: parent.id
    }).managedBy
};

module.exports = {
    managedBy
};
