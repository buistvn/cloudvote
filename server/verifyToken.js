const jwt = require('jsonwebtoken');

module.exports = async function (req, res, next) {
    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send('Invalid Credentials to Vote');
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(`verified: ${verified}`);
        req.user = verified;
        console.log(`req from verification: ${req}`);
        next();
    } catch (err) {
        res.status(400).send('Invalid User');
    }
    //res.status(200).send('create measure');
};
