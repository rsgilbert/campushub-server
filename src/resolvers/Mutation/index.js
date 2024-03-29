const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../../utils')
const { 
    upload, editImage, deleteImage
} = require('./image')



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
const item = async (_parent, args, context) => {
    const userId = getUserId(context)
    console.log('Mutation: user id is ' + userId)
    const details = {
        name: args.name,
        price: args.price,
        category: args.category,
        inStock: args.inStock,
        description: args.description,
        user: {
            connect: { id: userId }
        }
    }
    const item = await context.prisma.upsertItem({
        where: {
            id: args.id || ''
        }, 
        update: details,
        create: details
    })
    console.log("upsert:")
    console.log(item)
    return item
};



const order = async (_parent, args, context) => {
    const orderId = args.id || ''
    const itemId = args.itemId
    console.log('Mutation: order id is ' + orderId)
    const details = {
        cancelled: args.cancelled || false,
        completed: args.completed || false,
        location: args.location,
        phone: args.phone,
        item: {
            connect: { id: itemId }
        }
    }
    console.log(details)
    const order = await context.prisma.upsertOrder({
        where: {
            id: orderId // if a person has given an id
        }, 
        update: details, 
        create: details
    })
      
    console.log("upsert:")
    console.log(order)
    return order
};


const user = async (_parent, args, context) => {
    const userId = getUserId(context)
    const user = await context.prisma.updateUser({
        where: {
            id: userId
        },
        data: args
    })
    console.log(user)
    return user
}




module.exports = {
    signup,
    login,
    item,
    upload,
    deleteImage,
    editImage,
    order,
    user
};
