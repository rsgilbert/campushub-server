const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils')
const fs = require('fs')
const AWS = require('aws-sdk')

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID 
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY 
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME

const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})

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
    const id = args.id
    const file = await args.file
    const readStream = file.createReadStream() 

    // const writeStream = fs.createWriteStream('./myimage.jpg')
    // readStream.pipe(writeStream)

    const params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: readStream
    }

    s3.upload(params, (err, data) => {
        if(err){ 
            res.status(500).end()
            throw err
        }
    })    

    const images = await context.prisma.item({
        id
    }).images()
    return images[0]
}


module.exports = {
    signup,
    login,
    item,
    upload,
};
