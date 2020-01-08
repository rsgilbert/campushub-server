const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils')


const signup = async (_parent, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({
        email: args.email,
        password: password
    })
    console.log(user.id)

    const token = jwt.sign({
        userId: user.id
    }, APP_SECRET);

    res  = {
        token,
        user
    }
    console.log(res)
    return res
};

// maybe should be in Query
const login = async (_parent, args, context) => {
    const user = await context.prisma.user({
        email: args.email
    });
    if(!user) {
        throw new Error('No such user found')
    }
    const valid = await bcrypt.compare(args.password, user.password);
    if(!valid) {
        throw new Error('Invalid Password')
    }
    const token = jwt.sign({
        userId: user.id
    }, APP_SECRET);

    return {
        token,
        user
    }
};


// creating or updating an item
const newItem = (_parent, args, context) => {
    const userId = getUserId(context);
    console.log("user id is " + userId)
    return context.prisma.createItem({
        name: args.name,
        price: args.price,
        category: args.category,
        inStock: args.inStock,
        description: args.description,
        user: {
            // connected by id in User Table
            connect: { id: userId }
        }
    });
};

module.exports = {
    signup,
    login,
    newItem
};
