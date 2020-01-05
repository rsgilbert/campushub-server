const postedBy = (parent, args, context) => {
    return context.prisma.park({
        id: parent.id
    }).postedBy()
}

module.exports = {
    postedBy
}
