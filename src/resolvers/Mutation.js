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


const upload = async (_parent, args) => {
    const userId = getUserId(context)
    console.log('Mutation: user id is ' + userId)
   
    const id = args.id
    const file = await args.file
    const stream = await file.createReadStream()
    console.log(stream)
    const images = await context.prisma.item({
        id
    }).images()
    return images[0]
//     return 

//   return args.file.then(file => {
//     console.log(file)
//     // return file
//   })
}


module.exports = {
    signup,
    login,
    item,
    upload,
};
