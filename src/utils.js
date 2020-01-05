const jwt = require('jsonwebtoken');
const APP_SECRET = "Tim Peters-Linus Torvalds-Bill Gates";

// get user id from context
const getUserId = context => {
    const Authorization = context.request.get('Authorization');
    if(!Authorization) {
        throw new Error('Not Authenticated')
    }
    const token = Authorization.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId

};

module.exports = {
    APP_SECRET,
    getUserId
};
