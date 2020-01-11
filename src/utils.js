const jwt = require('jsonwebtoken');
const APP_SECRET = "Tim Peters-Linus Torvalds-Bill Gates";

// get user id from context
const getUserId = context => {
    console.log("Getting user id")
    const Authorization = context.req.headers.authorization;
    if(!Authorization) {
        throw new Error('Not Authenticated')
    }
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId
};

const s3Link = fileName => `https://campushub-bucket.s3.amazonaws.com/${fileName}`

module.exports = {
    APP_SECRET,
    getUserId,
    s3Link
};
