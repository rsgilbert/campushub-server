const AWS = require('aws-sdk')
require('dotenv').config()


const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID 
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY 
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME

const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})


const upload = async (_parent, args, context) => {
    const id = args.id
    console.log(id)
    const file = await args.file
    const readStream = file.createReadStream() 

    const currentTime = new Date().getTime()
    const fileName = `${id}AT${currentTime}`
    
    const params = {
        Bucket: S3_BUCKET_NAME,
        Key: fileName,
        Body: readStream
    }

    let link = '/clare.PNG'
    // const result = await s3.upload(params).promise()
    // link = result.Location
    console.log(link)

    const image = await context.prisma.createImage({
        src: link,
        item: {
            connect: { id: id }
        }
    })
    console.log(image)
    return image
}

module.exports = upload