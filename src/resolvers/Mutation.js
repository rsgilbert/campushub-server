const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils')


const signup = async (_parent, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({
        ...args,
        password
    });
    const token = jwt.sign({
        userId: user.id
    }, APP_SECRET);

    return {
        token,
        user
    }
};

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

const park = (_parent, args, context) => {
    const userId = getUserId(context);
    return context.prisma.createPark({
        name: args.name,
        location: {
            place: args.place
        }
    });
};


module.exports = {
    signup,
    login,
    park
}
